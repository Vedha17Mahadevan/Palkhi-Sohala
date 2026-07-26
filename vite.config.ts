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

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-and-copy-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/images/palkhis/') || req.url.startsWith('/images/saints/'))) {
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
      }
    }
  ],
});
