import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import '../styles/AdminDataManager.css';

function AdminExperience() {
  const { data, updateExperience } = useData();
  const [experience, setExperience] = useState(data.experience);
  const [formData, setFormData] = useState({
    company: '',
    location: '',
    role: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role) {
      alert('Please fill required fields');
      return;
    }

    if (editingId) {
      const updatedExperience = experience.map(exp =>
        exp.id === editingId
          ? { ...exp, ...formData }
          : exp
      );
      setExperience(updatedExperience);
      updateExperience(updatedExperience);
      setEditingId(null);
    } else {
      const newExp = {
        id: Math.max(...experience.map(e => e.id), 0) + 1,
        ...formData
      };
      const updatedExperience = [...experience, newExp];
      setExperience(updatedExperience);
      updateExperience(updatedExperience);
    }

    setFormData({
      company: '',
      location: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
    setShowForm(false);
  };

  const handleEditExperience = (exp) => {
    setFormData({
      company: exp.company,
      location: exp.location,
      role: exp.role,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description
    });
    setEditingId(exp.id);
    setShowForm(true);
  };

  const handleDeleteExperience = (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      const updatedExperience = experience.filter(exp => exp.id !== id);
      setExperience(updatedExperience);
      updateExperience(updatedExperience);
    }
  };

  const handleCancel = () => {
    setFormData({
      company: '',
      location: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section-content">
      <div className="section-header">
        <h3>Manage Experience</h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Experience'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleAddExperience}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="exp-company">Company Name *</label>
              <input
                type="text"
                id="exp-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="e.g., Tech Company Inc."
              />
            </div>
            <div className="form-group">
              <label htmlFor="exp-location">Location</label>
              <input
                type="text"
                id="exp-location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Bangalore"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="exp-role">Job Role *</label>
              <input
                type="text"
                id="exp-role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="e.g., Frontend Developer"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="exp-startdate">Start Date</label>
              <input
                type="text"
                id="exp-startdate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="e.g., Jan 2024"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exp-enddate">End Date</label>
              <input
                type="text"
                id="exp-enddate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                placeholder="e.g., Present"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="exp-description">Description</label>
            <textarea
              id="exp-description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Job description and responsibilities"
              rows="4"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Experience' : 'Add Experience'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-list">
        {experience.length === 0 ? (
          <p className="empty-message">No experience added yet.</p>
        ) : (
          <table className="items-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {experience.map(exp => (
                <tr key={exp.id}>
                  <td>{exp.company}</td>
                  <td>{exp.role}</td>
                  <td>{exp.location}</td>
                  <td>{exp.startDate} - {exp.endDate}</td>
                  <td className="actions">
                    <button
                      className="btn-icon edit"
                      onClick={() => handleEditExperience(exp)}
                      title="Edit"
                    >
                      ✎
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => handleDeleteExperience(exp.id)}
                      title="Delete"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminExperience;
