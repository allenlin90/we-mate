import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

function Home() {
  return (
    <main className='text-center h-dvh'>
      <div className='inline-flex flex-col justify-center align-items gap-8 h-full'>
        <Logo />
        <Button className='capitalize bg-mate-pink-dark'>meet a mate</Button>
      </div>
    </main>
  );
}

export default Home;
