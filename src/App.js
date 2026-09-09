import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SkillsExperience from './components/FeaturedProject';
import Contact from './components/Features';
import Footer from './components/Footer';
import WebProjects from './pages/WebProjects';
import UXProjects from './pages/UXProjects';
import useScrollSmoother from './hooks/useScrollSmoother';
import './App.css';

function App() {
  useScrollSmoother();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <Services />
            <SkillsExperience />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/web-development" element={<WebProjects />} />
        <Route path="/ui-ux" element={<UXProjects />} />
      </Routes>
    </Router>
  );
}

export default App;