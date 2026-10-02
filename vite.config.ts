import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

function copyDirSync(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure public folder and favicon exist
try {
  const publicDir = resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const favSource = resolve(process.cwd(), 'images', 'favicon.png');
  if (fs.existsSync(favSource)) {
    fs.copyFileSync(favSource, resolve(publicDir, 'favicon.png'));
    fs.copyFileSync(favSource, resolve(publicDir, 'favicon.ico'));
  }
} catch (e) {
  console.warn('Could not sync favicon to public dir:', e);
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-and-copy-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/favicon.ico' || req.url === '/favicon.png') {
            const filePath = resolve(process.cwd(), 'images', 'favicon.png');
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'image/png');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          if (req.url && req.url.startsWith('/images/')) {
            const relativePath = req.url.substring(8).split('?')[0]; // Strip "/images/"
            const filePath = resolve(process.cwd(), 'images', decodeURIComponent(relativePath));
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = filePath.split('.').pop()?.toLowerCase();
              const mimeTypes: Record<string, string> = {
                'png': 'image/png',
                'jpg': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'gif': 'image/gif',
                'svg': 'image/svg+xml',
                'webp': 'image/webp',
                'avif': 'image/avif'
              };
              res.setHeader('Content-Type', mimeTypes[ext || ''] || 'application/octet-stream');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        const srcDir = resolve(process.cwd(), 'images');
        const destDir = resolve(process.cwd(), 'dist/images');
        if (fs.existsSync(srcDir)) {
          copyDirSync(srcDir, destDir);
        }
        const faviconSrc = resolve(process.cwd(), 'images/favicon.png');
        if (fs.existsSync(faviconSrc)) {
          fs.copyFileSync(faviconSrc, resolve(process.cwd(), 'dist/favicon.png'));
          fs.copyFileSync(faviconSrc, resolve(process.cwd(), 'dist/favicon.ico'));
        }
      }
    }
  ],
});
