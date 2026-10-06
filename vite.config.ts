import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function photoStoragePlugin(): Plugin {
  return {
    name: 'photo-storage-api',
    configureServer(server) {
      server.middlewares.use('/api/save-photos', (req, res, next) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk: Buffer) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const bodyStr = Buffer.concat(chunks).toString('utf-8');
              const { photos } = JSON.parse(bodyStr);
              if (photos && typeof photos === 'object') {
                const publicImgDir = path.resolve(__dirname, 'public/images');
                const distImgDir = path.resolve(__dirname, 'dist/images');
                fs.mkdirSync(publicImgDir, { recursive: true });
                fs.mkdirSync(distImgDir, { recursive: true });

                const manifestPathPublic = path.join(publicImgDir, 'manifest.json');
                const manifestPathDist = path.join(distImgDir, 'manifest.json');

                let manifest: Record<string, string> = {};
                if (fs.existsSync(manifestPathPublic)) {
                  try {
                    manifest = JSON.parse(fs.readFileSync(manifestPathPublic, 'utf-8'));
                  } catch {}
                }

                for (const [key, dataUrl] of Object.entries(photos)) {
                  if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                    const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
                    if (matches) {
                      const rawExt = matches[1].toLowerCase();
                      const ext = rawExt.includes('png') ? 'png' : rawExt.includes('webp') ? 'webp' : 'jpg';
                      const buffer = Buffer.from(matches[2], 'base64');
                      const filename = `user_${key}.${ext}`;
                      
                      fs.writeFileSync(path.join(publicImgDir, filename), buffer);
                      fs.writeFileSync(path.join(distImgDir, filename), buffer);

                      manifest[key] = `/images/${filename}?v=${Date.now()}`;
                    }
                  } else if (typeof dataUrl === 'string' && dataUrl.startsWith('/')) {
                    manifest[key] = dataUrl;
                  }
                }

                fs.writeFileSync(manifestPathPublic, JSON.stringify(manifest, null, 2));
                fs.writeFileSync(manifestPathDist, JSON.stringify(manifest, null, 2));

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, manifest }));
                return;
              }
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
              return;
            }
          });
          return;
        }
        next();
      });

      server.middlewares.use('/api/get-photos', (req, res, next) => {
        if (req.method === 'GET') {
          const manifestPath = path.resolve(__dirname, 'public/images/manifest.json');
          if (fs.existsSync(manifestPath)) {
            try {
              const content = fs.readFileSync(manifestPath, 'utf-8');
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(content);
              return;
            } catch {}
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({}));
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoStoragePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
