import React from 'react';
import Ian from './Assets/Ian.jpg';

const About = () => {
  return (
    <div>
      <p>My name is Ian Hall, I'm a rookie developer looking to learn more each day, I know a good deal about nodeJS, express, SQL, and quite a few javascript libraries, 
        and I'm always looking to try new technologies and languages.  If you'd like to collaborate, please reach out via email and I'd be more than happy to.</p>
      <img src={Ian} alt='A photo of me'></img>
    </div>
  );
};

export default About;