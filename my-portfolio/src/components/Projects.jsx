import React from 'react';
import { useData, useRoute } from '../context/DataContext';
import '../styles/Projects.css';

function Projects() {
  const { data } = useData();
  const { navigate } = useRoute();
  const { projects } = data;

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">
          A selection of my live and personal projects.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleProjectClick(project.id);
                }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
