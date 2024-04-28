import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Home from '@/pages/home';
import Meet from '@/pages/meet';
import Settings from '@/pages/settings';
import Error from '@/components/error';
import MobileLayout from '@/components/layout/mobile';
import SWHandler from '@/components/sw-handler';

function App() {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary fallbackRender={() => <Error />}>
            <Outlet />
          </ErrorBoundary>
        }
      >
        <Route
          element={(() => (
            <>
              <SWHandler />
              <Outlet />
            </>
          ))()}
        >
          <Route path='/' element={<Home />} />
          <Route element={<MobileLayout />}>
            <Route path='/meet' element={<Meet />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
