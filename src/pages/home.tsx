import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

function Home() {
  return (
    <div className='inline-flex flex-col justify-center align-items gap-8 p-4 w-full text-center h-dvh'>
      <div className='w-full max-w-[80vw] sm:max-w-xs mx-auto'>
        <Logo />
      </div>
      <Link to='/meet'>
        <Button className='capitalize bg-mate-pink-dark'>meet a mate</Button>
      </Link>
    </div>
  );
}

export default Home;
