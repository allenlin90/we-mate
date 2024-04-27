import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const MobileLayout = () => {
  return (
    <>
      <Header />
      <main className='relative'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MobileLayout;
