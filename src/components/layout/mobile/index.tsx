import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SideDrawer = lazy(() => import('@/components/layout/mobile/side-drawer'));
const SideNav = lazy(() => import('@/components/layout/side-nav'));

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const MobileLayout = () => {
  return (
    <>
      <Header className='flex items-center'>
        <Suspense fallback={null}>
          <SideDrawer>
            <SideNav />
          </SideDrawer>
        </Suspense>
      </Header>
      <main className='relative'>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MobileLayout;
