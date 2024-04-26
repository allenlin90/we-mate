import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/home';
import Meet from '@/pages/meet';
import MobileLayout from '@/components/mobile-layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />;
      <Route element={<MobileLayout />}>
        <Route path='/meet' element={<Meet />} />
      </Route>
    </Routes>
  );
}

export default App;
