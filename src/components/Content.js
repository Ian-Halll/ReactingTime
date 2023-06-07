import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const Content = ({ activeSection }) => {
  return (
    <section>
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
    </section>
  );
};

export default Content;