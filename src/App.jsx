import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import Beyonce from './pages/beyonce/Beyonce';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/campaigns/beyonce" element={<Beyonce />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
