import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function useNotification() {
  const [granting, setGranting] = useState(false);
  const { t } = useTranslation();

  const grantPermission = useCallback(async () => {
    if ('Notification' in window && Notification.permission !== 'denied') {
      return (await Notification.requestPermission()) === 'granted';
    }

    return false;
  }, []);

  const notify = useCallback(
    ({ title, ...options }: NotificationOptions & { title: string }) => {
      if (Notification.permission !== 'granted') {
        console.warn(t('errors.notification.not_granted'));
        return;
      }

      new Notification(title, options);
    },
    [t]
  );

  useEffect(() => {
    setGranting(true);
    grantPermission();

    grantPermission().finally(() => setGranting(false));
  }, [grantPermission]);

  return [notify, granting, grantPermission] as const;
}
