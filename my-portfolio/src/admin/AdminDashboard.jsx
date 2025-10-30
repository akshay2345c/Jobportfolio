import { useState } from 'react';
import { useRoute } from '../context/DataContext';
import AdminEducation from './AdminEducation';
import AdminExperience from './AdminExperience';
import AdminProjects from './AdminProjects';
import AdminSkills from './AdminSkills';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const { navigate } = useRoute();
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="admin-dashboard-section">
      <div className="admin-dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Admin Control Panel</h1>
            <p>Manage your portfolio content</p>
          </div>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            ← Back to Portfolio
          </button>
        </div>

        <div className="dashboard-tabs">
          <button
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className="dashboard-content">
          {activeTab === 'skills' && <AdminSkills />}
          {activeTab === 'projects' && <AdminProjects />}
          {activeTab === 'experience' && <AdminExperience />}
          {activeTab === 'education' && <AdminEducation />}
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
