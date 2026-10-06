// Utility for storing, retrieving, and syncing unedited user images to server
// Photos saved to the server become permanently public for all visitors.

const DB_NAME = 'ADLGardenLampImagesDB';
const STORE_NAME = 'user_photos';
const DB_VERSION = 1;

let cachedServerManifest: Record<string, string> | null = null;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Fetch server manifest of uploaded images (available to all public visitors)
export async function getServerManifest(): Promise<Record<string, string>> {
  if (cachedServerManifest) return cachedServerManifest;
  try {
    const res = await fetch('/api/get-photos');
    if (res.ok) {
      const data = await res.json();
      cachedServerManifest = data;
      return data;
    }
  } catch {}
  try {
    const res = await fetch('/images/manifest.json');
    if (res.ok) {
      const data = await res.json();
      cachedServerManifest = data;
      return data;
    }
  } catch {}
  return {};
}

// Save a photo both to local IndexedDB and sync to the server permanently
export async function savePhoto(key: string, dataUrl: string): Promise<string | null> {
  // 1. Save to IndexedDB
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.error('IndexedDB save error:', e);
  }

  // 2. Sync to server so it is public for all visitors
  try {
    const serverUrl = await syncPhotosToServer({ [key]: dataUrl });
    if (serverUrl && serverUrl[key]) {
      return serverUrl[key];
    }
  } catch (e) {
    console.error('Server sync error:', e);
  }

  return null;
}

// Sync photos to server disk
export async function syncPhotosToServer(photos: Record<string, string>): Promise<Record<string, string> | null> {
  try {
    const res = await fetch('/api/save-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photos }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.manifest) {
        cachedServerManifest = { ...cachedServerManifest, ...data.manifest };
        return data.manifest;
      }
    }
  } catch (e) {
    console.error('Failed to sync photos to server:', e);
  }
  return null;
}

export async function getPhoto(key: string): Promise<string | null> {
  // 1. Check server manifest first (public for all visitors)
  const manifest = await getServerManifest();
  if (manifest[key]) {
    return manifest[key];
  }

  // 2. Check local IndexedDB (for store owner who uploaded locally)
  try {
    const db = await openDB();
    const localData = await new Promise<string | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    // If local exists but not on server, auto-sync to server!
    if (localData && typeof localData === 'string' && localData.startsWith('data:image/')) {
      syncPhotosToServer({ [key]: localData });
    }

    return localData;
  } catch {
    return null;
  }
}

export async function getAllPhotos(): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  // 1. Get from server manifest (public for everyone)
  const manifest = await getServerManifest();
  Object.assign(result, manifest);

  // 2. Get from local IndexedDB
  try {
    const db = await openDB();
    const localPhotos = await new Promise<Record<string, string>>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.openCursor();
      const items: Record<string, string> = {};
      req.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest).result as IDBCursorWithValue;
        if (cursor) {
          items[cursor.key as string] = cursor.value;
          cursor.continue();
        } else {
          resolve(items);
        }
      };
      req.onerror = () => reject(req.error);
    });

    // If there are local photos not yet on the server, auto-sync them!
    const toSync: Record<string, string> = {};
    for (const [k, v] of Object.entries(localPhotos)) {
      if (!result[k]) {
        result[k] = v;
      }
      if (typeof v === 'string' && v.startsWith('data:image/')) {
        toSync[k] = v;
      }
    }

    if (Object.keys(toSync).length > 0) {
      syncPhotosToServer(toSync);
    }
  } catch {}

  return result;
}

export async function clearAllUserPhotos(): Promise<void> {
  cachedServerManifest = null;
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.clear();
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
