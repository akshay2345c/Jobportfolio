import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import '../styles/AdminDataManager.css';

function AdminProjects() {
  const { data, updateProjects } = useData();
  const [projects, setProjects] = useState(data.projects);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    liveLink: '',
    startDate: '',
    endDate: '',
    fullDescription: '',
    gallery: []
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert('Please fill required fields');
      return;
    }

    if (editingId) {
      const updatedProjects = projects.map(project =>
        project.id === editingId
          ? { ...project, ...formData }
          : project
      );
      setProjects(updatedProjects);
      updateProjects(updatedProjects);
      setEditingId(null);
    } else {
      const newProject = {
        id: Math.max(...projects.map(p => p.id), 0) + 1,
        ...formData,
        gallery: formData.gallery ? [formData.image] : []
      };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      updateProjects(updatedProjects);
    }

    setFormData({
      title: '',
      description: '',
      image: '',
      liveLink: '',
      startDate: '',
      endDate: '',
      fullDescription: '',
      gallery: []
    });
    setShowForm(false);
  };

  const handleEditProject = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      liveLink: project.liveLink,
      startDate: project.startDate,
      endDate: project.endDate,
      fullDescription: project.fullDescription,
      gallery: project.gallery || []
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
      updateProjects(updatedProjects);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      liveLink: '',
      startDate: '',
      endDate: '',
      fullDescription: '',
      gallery: []
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section-content">
      <div className="section-header">
        <h3>Manage Projects</h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Project'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleAddProject}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project-title">Project Title *</label>
              <input
                type="text"
                id="project-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., E-Commerce Platform"
              />
            </div>
            <div className="form-group">
              <label htmlFor="project-description">Short Description *</label>
              <input
                type="text"
                id="project-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project-image">Image URL</label>
              <input
                type="url"
                id="project-image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="project-livelink">Live Link</label>
              <input
                type="url"
                id="project-livelink"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleInputChange}
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project-startdate">Start Date</label>
              <input
                type="text"
                id="project-startdate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="e.g., Jan 2024"
              />
            </div>
            <div className="form-group">
              <label htmlFor="project-enddate">End Date</label>
              <input
                type="text"
                id="project-enddate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                placeholder="e.g., Mar 2024"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="project-full-description">Full Description</label>
            <textarea
              id="project-full-description"
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleInputChange}
              placeholder="Detailed project description"
              rows="4"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Project' : 'Add Project'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-list">
        {projects.length === 0 ? (
          <p className="empty-message">No projects added yet.</p>
        ) : (
          <div className="projects-cards">
            {projects.map(project => (
              <div key={project.id} className="admin-project-card">
                <div className="card-image">
                  {project.image && <img src={project.image} alt={project.title} />}
                </div>
                <div className="card-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p className="dates">{project.startDate} - {project.endDate}</p>
                </div>
                <div className="card-actions">
                  <button
                    className="btn-icon edit"
                    onClick={() => handleEditProject(project)}
                    title="Edit"
                  >
                    ✎
                  </button>
                  <button
                    className="btn-icon delete"
                    onClick={() => handleDeleteProject(project.id)}
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminProjects;
