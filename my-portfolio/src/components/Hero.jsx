import React from 'react';
import { useData } from '../context/DataContext';
import '../styles/Hero.css';

function Hero() {
  const { data } = useData();
  const { profile } = data;

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleViewProjects}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={handleContactMe}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--accent-dark)', stopOpacity: 0.4 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" />
                <path d="M 150 150 Q 200 100 250 150 Q 280 180 250 250 Q 200 280 150 250 Q 120 180 150 150" fill="var(--card-bg)" />
                <circle cx="170" cy="180" r="15" fill="var(--text-color)" />
                <circle cx="230" cy="180" r="15" fill="var(--text-color)" />
                <path d="M 180 220 Q 200 240 220 220" stroke="var(--text-color)" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
