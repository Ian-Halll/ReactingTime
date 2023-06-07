import React, { useState } from 'react';

const Navigation = ({ handleNavigation }) => {
  const [activeSection, setActiveSection] = useState('about');

  const handleClick = (section) => {
    setActiveSection(section);
    handleNavigation(section);
  };

  return (
    <nav>
      <ul>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleClick('about')}
        >
          About Me
        </li>
        <li
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={() => handleClick('portfolio')}
        >
          Portfolio
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleClick('contact')}
        >
          Contact
        </li>
        <li
          className={activeSection === 'resume' ? 'active' : ''}
          onClick={() => handleClick('resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;