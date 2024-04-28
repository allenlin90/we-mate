import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default () => {
  const PORT = +(process.env.PORT || 3000);
  const DISABLE_PWA = process.env.DISABLE_PWA === 'true';

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        devOptions: { enabled: process.env.NODE_ENV === 'development' },
        includeAssets: ['favicon.ico', 'icons/apple-touch-icon.png'],
        registerType: 'prompt',
        selfDestroying: DISABLE_PWA,
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // cache assets by file types
          sourcemap: true,
        },
        manifest: {
          name: 'We Mate',
          short_name: 'WeMate',
          description: 'We Meet A Mate',
          theme_color: '#ff5931',
          icons: [
            {
              src: 'icons/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: PORT,
    },
  });
};
