import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import useNotification from '@/hooks/useNotification';
import { Button } from '@/components/ui/button';

const Meet = () => {
  const { t } = useTranslation();
  const [notify] = useNotification();

  const onClick = useCallback(() => {
    notify({
      title: "Uh oh! You're in trouble",
      body: 'Your mate (wife) is standing by your back and very angry💢💢💢',
      icon: '/icons/apple-touch-icon.png',
    });
  }, [notify]);

  return (
    <div>
      <h1>{t('meet.title')}</h1>
      <Button onClick={onClick} className='bg-mate-pink-dark'>
        Send Notification
      </Button>
    </div>
  );
};

export default Meet;
