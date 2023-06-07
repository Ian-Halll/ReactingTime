import React from 'react';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section>
      <h2>Resume</h2>
      <div>
        <h3>Download Resume</h3>
        <a href="../Resume.docx.pdf" download>Download</a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;