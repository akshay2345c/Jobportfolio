import { memo, useState, useEffect } from 'react';
import { useRoute } from '../context/DataContext';
import { FaHome, FaCode, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import profileImage from '../assets/images/Akshay_photo.jpeg';
import '../styles/Header.css';

function Header() {
  const { navigate, route } = useRoute();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarClickExpanded, setSidebarClickExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      if (route === '/resume') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(path);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
    setSidebarExpanded(false);
    setSidebarClickExpanded(false);
  };

  const handleSidebarClick = () => {
    setSidebarClickExpanded(!sidebarClickExpanded);
  };

  const handleSidebarMouseEnter = () => {
    setSidebarExpanded(true);
  };

  const handleSidebarMouseLeave = () => {
    setSidebarExpanded(false);
  };

  const isExpanded = sidebarExpanded || sidebarClickExpanded;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              </nav>
            </div>
          </div>
        </header>
      )}

      {/* Vertical Sidebar (Mobile Only) */}
      {isMobile && (
        <aside
          className={`sidebar-nav ${isExpanded ? 'expanded' : 'collapsed'}`}
          onMouseEnter={handleSidebarMouseEnter}
          onMouseLeave={handleSidebarMouseLeave}
          onClick={handleSidebarClick}
        >
          <div className="sidebar-logo" onClick={(e) => {
            e.stopPropagation();
            handleLogoClick();
            setSidebarClickExpanded(false);
          }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}>
            <img src={profileImage} alt="Akshay Patel" className="sidebar-profile-image" />
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
                    e.stopPropagation();
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
      )}
    </>
  );
}

export default memo(Header);
