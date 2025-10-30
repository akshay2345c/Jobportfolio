import React from 'react';
import { useRoute } from '../context/DataContext';
import '../styles/Header.css';

function Header() {
  const { navigate } = useRoute();

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo">AP</h1>
          </div>
          <nav className="nav-menu">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <button className="nav-link admin-btn" onClick={handleAdminClick}>
              Admin
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
