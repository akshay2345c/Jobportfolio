import { useData, useRoute } from '../context/DataContext';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
  const { data } = useData();
  const { projectId, navigate } = useRoute();

  const project = data.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="project-details">
        <div className="container">
          <div className="project-not-found">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-details">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>

        <div className="project-details-content">
          <h1 className="project-details-title">{project.title}</h1>

          <div className="project-meta">
            <span className="meta-item">
              <strong>Duration:</strong> {project.startDate} - {project.endDate}
            </span>
          </div>

          <div className="project-details-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-description-section">
            <h2>About This Project</h2>
            <p>{project.fullDescription}</p>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="project-gallery">
              <h2>Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="project-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
