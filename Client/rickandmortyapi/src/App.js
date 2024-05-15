import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import SubmitPage from './pages/SubmitPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'black' }}>
        <Header/>
        <AudioPlayer /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
