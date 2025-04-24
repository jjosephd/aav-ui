import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
