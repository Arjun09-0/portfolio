import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with a love for creating beautiful and functional web applications. 
            With expertise in modern frameworks and a keen eye for design, I bring ideas to life through code.
          </p>
          <p>
            My journey in tech has equipped me with a diverse skill set and the ability to adapt to new 
            technologies quickly. I believe in writing clean, maintainable code and creating exceptional 
            user experiences.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
