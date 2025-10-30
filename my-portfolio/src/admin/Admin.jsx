import React, { useState } from 'react';
import { useData, useRoute } from '../context/DataContext';
import '../styles/Admin.css';

function Admin() {
  const { data, updateProfile } = useData();
  const { navigate } = useRoute();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileForm, setProfileForm] = useState(data.profile);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    alert('Profile updated successfully!');
  };

  return (
    <section className="admin-section">
      <div className="admin-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Portfolio
        </button>

        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Manage your portfolio content</p>
        </div>

        <div className="admin-tabs">
          <button
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Information
          </button>
        </div>

        <div className="admin-content">
          {activeTab === 'profile' && (
            <div className="form-section">
              <h2>Edit Profile</h2>
              <form onSubmit={handleProfileSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileForm.name}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Professional Role</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={profileForm.role}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tagline">Tagline</label>
                  <textarea
                    id="tagline"
                    name="tagline"
                    value={profileForm.tagline}
                    onChange={handleProfileChange}
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profileForm.phone}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={profileForm.location}
                    onChange={handleProfileChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="info-section">
              <h2>Portfolio Information</h2>
              <p>This admin dashboard is a foundation for managing your portfolio content.</p>
              <p>Features available:</p>
              <ul>
                <li>Edit profile information</li>
                <li>Manage skills and projects</li>
                <li>Update experience and education</li>
                <li>All changes are saved to local storage</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Admin;
