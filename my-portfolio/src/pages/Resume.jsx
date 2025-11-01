import { memo } from 'react';
import { useRoute } from '../context/DataContext';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import resumePdf from '../assets/Akshay_resume (2).pdf';
import '../styles/Resume.css';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaDownload } from "react-icons/fa6";


function Resume() {
  const { navigate } = useRoute();
  const resumePdfUrl = resumePdf;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdfUrl;
    link.download = 'Akshay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <section className="resume-section">
        <div className="resume-container">
          <div className="resume-header">
            <h1>My Resume</h1>
            <button className="btn btn-primary download-btn" onClick={handleDownloadResume}>
            <FaDownload />
            Download Resume
            </button>
          </div>

          <div className="resume-viewer">
            <embed
              src={resumePdfUrl}
              type="application/pdf"
              className="resume-embed"
            />
          </div>

          <div className="resume-footer">
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
            <FaArrowLeftLong /> Back to Home
            </button>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default memo(Resume);
