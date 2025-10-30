import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import '../styles/AdminDataManager.css';

function AdminEducation() {
  const { data, updateEducation } = useData();
  const [education, setEducation] = useState(data.education);
  const [formData, setFormData] = useState({
    institution: '',
    field: '',
    duration: '',
    percentage: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (!formData.institution || !formData.field) {
      alert('Please fill required fields');
      return;
    }

    if (editingId) {
      const updatedEducation = education.map(edu =>
        edu.id === editingId
          ? { ...edu, ...formData }
          : edu
      );
      setEducation(updatedEducation);
      updateEducation(updatedEducation);
      setEditingId(null);
    } else {
      const newEdu = {
        id: Math.max(...education.map(e => e.id), 0) + 1,
        ...formData
      };
      const updatedEducation = [...education, newEdu];
      setEducation(updatedEducation);
      updateEducation(updatedEducation);
    }

    setFormData({
      institution: '',
      field: '',
      duration: '',
      percentage: '',
      description: ''
    });
    setShowForm(false);
  };

  const handleEditEducation = (edu) => {
    setFormData({
      institution: edu.institution,
      field: edu.field,
      duration: edu.duration,
      percentage: edu.percentage,
      description: edu.description
    });
    setEditingId(edu.id);
    setShowForm(true);
  };

  const handleDeleteEducation = (id) => {
    if (window.confirm('Are you sure you want to delete this education entry?')) {
      const updatedEducation = education.filter(edu => edu.id !== id);
      setEducation(updatedEducation);
      updateEducation(updatedEducation);
    }
  };

  const handleCancel = () => {
    setFormData({
      institution: '',
      field: '',
      duration: '',
      percentage: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section-content">
      <div className="section-header">
        <h3>Manage Education</h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Education'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleAddEducation}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edu-institution">Institution *</label>
              <input
                type="text"
                id="edu-institution"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                placeholder="e.g., University Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="edu-field">Field of Study *</label>
              <input
                type="text"
                id="edu-field"
                name="field"
                value={formData.field}
                onChange={handleInputChange}
                placeholder="e.g., Computer Science"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edu-duration">Duration</label>
              <input
                type="text"
                id="edu-duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 2019 - 2023"
              />
            </div>
            <div className="form-group">
              <label htmlFor="edu-percentage">Grade / Percentage</label>
              <input
                type="text"
                id="edu-percentage"
                name="percentage"
                value={formData.percentage}
                onChange={handleInputChange}
                placeholder="e.g., 7.8 CGPA"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="edu-description">Description</label>
            <textarea
              id="edu-description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Additional details about your education"
              rows="3"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Education' : 'Add Education'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-list">
        {education.length === 0 ? (
          <p className="empty-message">No education added yet.</p>
        ) : (
          <table className="items-table">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Field</th>
                <th>Duration</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {education.map(edu => (
                <tr key={edu.id}>
                  <td>{edu.institution}</td>
                  <td>{edu.field}</td>
                  <td>{edu.duration}</td>
                  <td>{edu.percentage}</td>
                  <td className="actions">
                    <button
                      className="btn-icon edit"
                      onClick={() => handleEditEducation(edu)}
                      title="Edit"
                    >
                      ✎
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => handleDeleteEducation(edu.id)}
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

export default AdminEducation;
