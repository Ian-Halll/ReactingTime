import React from 'react';
import Img1 from './Assets/Img1.jpg';
import Img2 from './Assets/Img2.png';
import Img3 from'./Assets/Img3.png';
import Img4 from './Assets/Img4.jpg';
import Img5 from'./Assets/Img5.jpg';
import Img6 from './Assets/Img6.png';


const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="card-container">
        <div className="card">
          <img src={Img1} alt="Blank Paper" />
          <div className="card-content">
            <h3>ReadingDotMe 1</h3>
            <div className="card-links">
             
              <a href="https://github.com/Ian-Halll/ReadingDotMe" target="_blank" rel="noopener noreferrer">README Generator</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Img2} alt="Weather Forecast Infographic" />
          <div className="card-content">
            <h3>4Cast</h3>
            <div className="card-links">
              <a href="https://github.com/Ian-Halll/4Cast" target="_blank" rel="noopener noreferrer">Forecast Application</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Img3} alt="text that says logo" />
          <div className="card-content">
            <h3>EssVeeGee</h3>
            <div className="card-links">
              <a href="https://github.com/Ian-Halll/EssVeeGee" target="_blank" rel="noopener noreferrer">SVG Logo Generator</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Img4} alt="rick owens ramones shoes" />
          <div className="card-content">
            <h3>DotDrip</h3>
            <div className="card-links">
              <a href="https://github.com/EthanMillet/dotDrip" target="_blank" rel="noopener noreferrer">Wardrobe Builder Site</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Img5} alt="golden retriever puppy" />
          <div className="card-content">
            <h3>DogBytes</h3>
            <div className="card-links">
              
              <a href="https://github.com/navidliwa/dog-bytes" target="_blank" rel="noopener noreferrer">Dog Nutrition Tracker & Planner</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Img6} alt="generic database icon" />
          <div className="card-content">
            <h3>Gotcha!</h3>
            <div className="card-links">
            
              <a href="https://github.com/Ian-Halll/Gotcha" target="_blank" rel="noopener noreferrer">SQL Employee Tracker</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;