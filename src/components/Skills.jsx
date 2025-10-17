import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Agile']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
