import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import '../styles/AdminDataManager.css';

function AdminSkills() {
  const { data, updateSkills } = useData();
  const [skills, setSkills] = useState(data.skills);
  const [formData, setFormData] = useState({ name: '', level: '' });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.level) {
      alert('Please fill all fields');
      return;
    }

    if (editingId) {
      const updatedSkills = skills.map(skill =>
        skill.id === editingId
          ? { ...skill, ...formData }
          : skill
      );
      setSkills(updatedSkills);
      updateSkills(updatedSkills);
      setEditingId(null);
    } else {
      const newSkill = {
        id: Math.max(...skills.map(s => s.id), 0) + 1,
        ...formData
      };
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
      updateSkills(updatedSkills);
    }

    setFormData({ name: '', level: '' });
    setShowForm(false);
  };

  const handleEditSkill = (skill) => {
    setFormData({ name: skill.name, level: skill.level });
    setEditingId(skill.id);
    setShowForm(true);
  };

  const handleDeleteSkill = (id) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      const updatedSkills = skills.filter(skill => skill.id !== id);
      setSkills(updatedSkills);
      updateSkills(updatedSkills);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', level: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section-content">
      <div className="section-header">
        <h3>Manage Skills</h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Skill'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleAddSkill}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="skill-name">Skill Name</label>
              <input
                type="text"
                id="skill-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., React"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skill-level">Level</label>
              <select
                id="skill-level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update Skill' : 'Add Skill'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-list">
        {skills.length === 0 ? (
          <p className="empty-message">No skills added yet.</p>
        ) : (
          <table className="items-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.map(skill => (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td className="actions">
                    <button
                      className="btn-icon edit"
                      onClick={() => handleEditSkill(skill)}
                      title="Edit"
                    >
                      ✎
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => handleDeleteSkill(skill.id)}
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

export default AdminSkills;
