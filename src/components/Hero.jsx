import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
          <p className="hero-description">
            Crafting elegant solutions with modern technologies. 
            Passionate about building impactful digital experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
