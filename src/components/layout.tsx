import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='relative'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
