import React from 'react';
import { useData } from '../context/DataContext';
import '../styles/Education.css';

function Education() {
  const { data } = useData();
  const { education } = data;

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">
          My academic background and certifications.
        </p>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3 className="institution-name">{edu.institution}</h3>
              <p className="field-name">{edu.field}</p>
              <p className="duration">{edu.duration}</p>
              <p className="achievement">{edu.percentage}</p>
              {edu.description && (
                <p className="description">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
