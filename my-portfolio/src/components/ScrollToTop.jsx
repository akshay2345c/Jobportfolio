import { memo, useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default memo(ScrollToTop);
