import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='inline-flex flex-col justify-center align-items gap-8 p-4 w-full text-center h-dvh'>
      <div className='w-full max-w-[80vw] sm:max-w-xs mx-auto'>
        <Logo />
      </div>
      <Link to='/meet'>
        <Button className='capitalize bg-mate-pink-dark'>
          {t('home.actions.meet_a_mate')}
        </Button>
      </Link>
    </div>
  );
}

export default Home;
