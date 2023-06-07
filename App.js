import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navigation handleNavigation={handleNavigation} />
      <Content activeSection={activeSection} />
      <Footer />
    </div>
  );
};

export default App;