import { lazy, Suspense } from 'react';

import SideNav from '@/components/layout/side-nav';

const SideDrawer = lazy(() => import('@/components/layout/mobile/side-drawer'));

export default function Header() {
  return (
    <>
      <nav className='fixed top-0 left-0 h-header w-full bg-glass-morphism flex items-center'>
        <Suspense fallback={null}>
          <SideDrawer>
            <SideNav />
          </SideDrawer>
        </Suspense>
      </nav>
      <div className='header-height' />
    </>
  );
}
