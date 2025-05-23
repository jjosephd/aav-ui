import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import Beyonce from './pages/beyonce/Beyonce';
import Home from './pages/home/Home';
import Rules from './pages/sweepstakes/Rules';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="campaigns/beyonce" element={<Beyonce />} />
          <Route path="campaigns/kendrick" element={<Beyonce />} />
          <Route path="/sweepstakes/rules" element={<Rules />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
