import React from 'react';
import { useData } from '../context/DataContext';
import '../styles/Experience.css';

function Experience() {
  const { data } = useData();
  const { experience } = data;

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">
          My professional journey and work experience.
        </p>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="location-badge">{exp.location}</span>
                </div>
                <p className="job-role">{exp.role}</p>
                <p className="duration">
                  {exp.startDate} – {exp.endDate}
                </p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
