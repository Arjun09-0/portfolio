import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/port.jpg';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="gradient-text">NANNURI ARJUN REDDY</span>
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
          <img src={profilePhoto} alt="Profile" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
