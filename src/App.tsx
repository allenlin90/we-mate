import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Home from '@/pages/home';
import Meet from '@/pages/meet';
import Error from '@/components/error';
import MobileLayout from '@/components/mobile-layout';

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
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
