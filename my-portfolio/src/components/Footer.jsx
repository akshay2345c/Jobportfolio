import { memo } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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

         <div className='footercontainers'>
           <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href={`tel:${profile.phone}`} className="contact-link">
                {profile.phone}
              </a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span className="contact-text">{profile.location}</span>
            </div>
          </div>

        
         </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
