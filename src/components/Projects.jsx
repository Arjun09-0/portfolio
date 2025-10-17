import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Material-UI'],
      image: '📋'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics',
      tags: ['React', 'D3.js', 'REST API'],
      image: '📊'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather forecast with interactive maps',
      tags: ['React', 'OpenWeather API', 'Leaflet'],
      image: '🌤️'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
