declare let self: ServiceWorkerGlobalScope;
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('push', (event) => {
  let data = { title: '', content: '' };

  try {
    data = event.data?.json() || data;
  } catch {
    data.title = event.data?.text() || '';
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.content,
      icon: 'icons/pwa-192x192.png',
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
