import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default () => {
  const PORT = +(process.env.PORT || 3000);
  const DISABLE_PWA = process.env.DISABLE_PWA === 'true';
  const devMode = process.env.NODE_ENV === 'development';

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        disable: DISABLE_PWA,
        selfDestroying: DISABLE_PWA,
        devOptions: {
          enabled: devMode,
          type: 'module',
        },
        srcDir: 'src', // put file in src directory
        filename: 'sw.ts',
        registerType: 'prompt',
        strategies: 'injectManifest', // custom service worker
        includeAssets: ['favicon.ico', 'icons/apple-touch-icon.png'],
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
