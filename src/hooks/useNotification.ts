import { useCallback, useEffect, useState } from 'react';

export default function useNotification() {
  const [granting, setGranting] = useState(false);

  const grantPermission = useCallback(async () => {
    if ('Notification' in window && Notification.permission !== 'denied') {
      return (await Notification.requestPermission()) === 'granted';
    }

    return false;
  }, []);

  const notify = useCallback(
    ({ title, ...options }: NotificationOptions & { title: string }) => {
      if (Notification.permission !== 'granted') {
        console.warn('No notification permission granted!');
        return;
      }

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then((registration) => registration.showNotification(title, options))
          .catch(console.error);
      } else {
        new Notification(title, options);
      }
    },
    []
  );

  useEffect(() => {
    setGranting(true);
    grantPermission();

    grantPermission().finally(() => setGranting(false));
  }, [grantPermission]);

  return [notify, granting, grantPermission] as const;
}
