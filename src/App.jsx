import './App.css';
import { Routes, Route } from 'react-router-dom';

import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl">Home</h1>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
