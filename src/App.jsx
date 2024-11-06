import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TherapyChat from './components/TherapyChat'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Router>
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} />} />
          <Route path="/chat" element={<TherapyChat isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;