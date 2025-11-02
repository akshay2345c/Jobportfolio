import { memo, useState, useEffect } from 'react';
import { useRoute } from '../context/DataContext';
import { FaHome, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import profileImage from '../assets/images/Akshay_photo.jpeg';
import '../styles/Header.css';

function Header() {
  const { navigate, route } = useRoute();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToElement = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      if (route === '/resume') {
        navigate('/');
        setTimeout(() => scrollToElement(path), 100);
      } else {
        scrollToElement(path);
      }
    } else {
      navigate(path);
    }
    setIsSidebarOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { icon: FaHome, label: 'Home', path: '#hero' },
    { icon: FaCode, label: 'Skills', path: '#skills' },
    { icon: FaProjectDiagram, label: 'Projects', path: '#projects' },
    { icon: FaBriefcase, label: 'Experience', path: '#experience' },
    { icon: FaGraduationCap, label: 'Education', path: '#education' },
    { icon: FaFileAlt, label: 'Resume', path: '/resume' },
  ];
     
  return (
    <>
      {/* Horizontal Navbar (Desktop Only) */}
      {!isMobile && (
        <header className="header desktop-header">
          <div className="container">
            <div className="header-content">
              <div className="logo-section" onClick={handleLogoClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}>
                <img src={profileImage} alt="Akshay Patel" className="profile-image" />
              </div>
  
              <nav className="nav-menu desktop-nav">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }}
                      title={item.label}
                    >
                      <Icon className="nav-icon" />
                      <span className="nav-text">{item.label}</span>
                    </a>
                  );
                })}
                     <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
              </nav>
            </div>
          </div>
        </header>
      )}

      {/* Vertical Sidebar (Mobile Only) */}
      {isMobile && (
        <>
          <header className="mobile-header">
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
        
            <div
              className="mobile-logo"
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
            >
              <img src={profileImage} alt="Akshay Patel" className="mobile-profile-image" />
            </div>
        
          </header>

          <div
            className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`}
            onClick={closeSidebar}
            role="presentation"
          />

          <aside className={`sidebar-nav mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div
              className="sidebar-logo"
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
            >
              <img src={profileImage} alt="Akshay Patel" className="sidebar-profile-image" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <nav className="sidebar-menu">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.path}
                    className="sidebar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                    title={item.label}
                  >
                    <Icon className="sidebar-icon" />
                    <span className="sidebar-text">{item.label}</span>
                  </a>
                );
              })}
         
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

export default memo(Header);
