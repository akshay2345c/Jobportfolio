import React from 'react';
import { useData } from '../context/DataContext';
import '../styles/Skills.css';

function Skills() {
  const { data } = useData();
  const { skills } = data;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">
          Technologies and tools I use to create modern web experiences.
        </p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
