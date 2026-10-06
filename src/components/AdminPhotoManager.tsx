import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_PHOTO_SLOTS } from '../data/productData';
import { savePhoto, getAllPhotos, syncPhotosToServer, clearAllUserPhotos } from '../utils/imageStore';
import { Upload, CheckCircle2, X, RefreshCw, ShieldAlert, Sparkles, Image as ImageIcon } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPhotosUpdated: () => void;
}

export const AdminPhotoManager: React.FC<Props> = ({ isOpen, onClose, onPhotosUpdated }) => {
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadCurrentPhotos();
    }
  }, [isOpen]);

  const loadCurrentPhotos = async () => {
    const current = await getAllPhotos();
    setPhotos(current);
  };

  if (!isOpen) return null;

  const handleSelectFile = (slotId: string) => {
    setActiveSlotId(slotId);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeSlotId) return;

    setSavingKey(activeSlotId);
    const reader = new FileReader();

    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        // Save to IndexedDB and sync to server disk
        await savePhoto(activeSlotId, dataUrl);
        setPhotos((prev) => ({ ...prev, [activeSlotId]: dataUrl }));
        setSuccessMessage(`Foto slot "${activeSlotId}" berhasil disimpan permanen ke server publik!`);
        onPhotosUpdated();

        setTimeout(() => {
          setSuccessMessage(null);
        }, 4000);
      }
      setSavingKey(null);
    };

    reader.onerror = () => {
      setSavingKey(null);
    };

    reader.readAsDataURL(file);
  };

  const handleSyncAll = async () => {
    setSavingKey('all');
    await syncPhotosToServer(photos);
    setSuccessMessage('Semua foto berhasil disinkronkan ke server publik!');
    onPhotosUpdated();
    setTimeout(() => {
      setSuccessMessage(null);
      setSavingKey(null);
    }, 2000);
  };

  const handleResetToDefault = async () => {
    if (confirm('Yakin ingin mereset semua foto ke pengaturan awal?')) {
      await clearAllUserPhotos();
      await fetch('/api/save-photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photos: {} }),
      });
      setPhotos({});
      onPhotosUpdated();
      setSuccessMessage('Foto direset ke default.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-amber-500/50 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                Khusus Pemilik Toko
              </span>
              <span className="text-xs text-slate-400">Pengaturan Foto Server</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Kelola Foto Asli Produk (Tersimpan Permanen ke Publik)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Foto yang Anda pasang di sini akan disimpan langsung ke server dan otomatis tampil untuk semua pengunjung web di publik.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Tutup menu pengaturan foto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Banner */}
        {successMessage && (
          <div className="bg-emerald-950/80 border-b border-emerald-800/80 p-3 px-6 flex items-center gap-2 text-xs text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold">{successMessage}</span>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Content Body: Slot Grid */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Slot Hero */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-amber-400 uppercase">Foto Utama (Hero Banner)</span>
                  {photos['hero-photo'] && (
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded">
                      Foto Asli
                    </span>
                  )}
                </div>
                <div className="aspect-[4/3] rounded-xl bg-black border border-slate-800 overflow-hidden relative flex items-center justify-center">
                  {photos['hero-photo'] ? (
                    <img
                      src={photos['hero-photo']}
                      alt="Hero"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-3 text-slate-500 text-xs">
                      <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-40" />
                      <span>Belum ada foto kustom</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleSelectFile('hero-photo')}
                disabled={savingKey === 'hero-photo'}
                className="mt-3 w-full py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{savingKey === 'hero-photo' ? 'Menyimpan...' : 'Ganti Foto Hero'}</span>
              </button>
            </div>

            {/* 11 Slots */}
            {INITIAL_PHOTO_SLOTS.map((slot, index) => {
              const currentSrc = photos[slot.id] || slot.currentUrl;
              const isCustom = !!photos[slot.id];

              return (
                <div
                  key={slot.id}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-300">
                        Foto #{index + 1}: {slot.title}
                      </span>
                      {isCustom && (
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded">
                          Foto Asli
                        </span>
                      )}
                    </div>
                    <div className="aspect-[4/3] rounded-xl bg-black border border-slate-800 overflow-hidden relative flex items-center justify-center">
                      <img
                        src={currentSrc}
                        alt={slot.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1.5 line-clamp-1">{slot.originalFilename}</p>
                  </div>

                  <button
                    onClick={() => handleSelectFile(slot.id)}
                    disabled={savingKey === slot.id}
                    className={`mt-3 w-full py-2 px-3 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors ${
                      isCustom
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{savingKey === slot.id ? 'Menyimpan...' : isCustom ? 'Ganti Foto Ini' : 'Upload Foto Asli'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Pengunjung biasa tidak akan melihat menu ini. Hanya pemilik yang bisa membuka.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSyncAll}
              disabled={savingKey === 'all'}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${savingKey === 'all' ? 'animate-spin' : ''}`} />
              <span>Simpan ke Server Publik</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold rounded-xl transition-colors"
            >
              Selesai & Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
