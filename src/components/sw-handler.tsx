import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRegisterSW } from '@/lib/registerSW';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const SWHandler = ({ children }: React.PropsWithChildren) => {
  const { t } = useTranslation();

  const {
    // offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    // onRegistered(r) {},
    onRegisterError(error) {
      console.error('SW registration error: ', error);
    },
  });

  const close = useCallback(() => {
    setNeedRefresh(false);
  }, [setNeedRefresh]);

  return (
    <>
      {children}
      <Dialog open={needRefresh}>
        <DialogContent
          // className='sm:max-w-sm'
          className='max-w-[80vw] md:max-w-sm'
        >
          <DialogHeader>
            <DialogTitle>{t('headers.new_update')}!</DialogTitle>
            <DialogDescription>{t('messages.need_update')}</DialogDescription>
          </DialogHeader>
          <DialogFooter className='inline-flex flex-row justify-end gap-4'>
            <Button className='bg-mate-orange-light' onClick={close}>
              {t('actions.cancel')}
            </Button>
            {needRefresh && (
              <Button
                className='bg-mate-pink-dark'
                onClick={() => updateServiceWorker(true)}
              >
                {t('actions.reload')}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SWHandler;
