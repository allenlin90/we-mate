import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Home from '@/pages/home';
import Meet from '@/pages/meet';
import Settings from '@/pages/settings';
import Error from '@/components/error';
import MobileLayout from '@/components/layout/mobile';

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
        <Route path='/' element={<Home />} />;
        <Route element={<MobileLayout />}>
          <Route path='/meet' element={<Meet />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
