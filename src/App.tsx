import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/home';
import Layout from '@/components/layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />;
      <Route element={<Layout />}>
        <Route path='/meet' element={<div>Meet</div>} />
      </Route>
    </Routes>
  );
}

export default App;
