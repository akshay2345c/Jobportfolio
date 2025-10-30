import React from 'react';
import { useData } from '../context/DataContext';
import '../styles/Footer.css';

function Footer() {
  const { data } = useData();
  const { profile } = data;

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-tagline">
            I'm always open to new opportunities and interesting projects.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href={`tel:${profile.phone}`} className="contact-link">
                {profile.phone}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-text">{profile.location}</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
