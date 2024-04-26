import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useErrorBoundary } from 'react-error-boundary';

const Error = () => {
  const { t } = useTranslation();
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className='inline-flex flex-col justify-center align-items gap-8 p-4 w-full text-center h-dvh'>
      <h1 className='text-3xl font-semibold'>{t('errors.general')}...</h1>
      <Link to='/meet'>
        <Button onClick={resetBoundary}>{t('errors.actions.go_back')}</Button>
      </Link>
    </div>
  );
};

export default Error;
