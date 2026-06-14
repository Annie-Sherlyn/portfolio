import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <h3 className="footer-title">Annie Sherlyn</h3>
            <p className="footer-subtitle">The Data City Portfolio</p>
            <p className="footer-desc">Data Science | AI | Analytics</p>
          </div>

          <div className="footer-links-container">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-social-links">
              <a href="mailto:anniesherlyn2006@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/in/annie-sherlyn-cit/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/Annie-Sherlyn" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://leetcode.com/u/Annie_sherlyn2006/" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
            </div>
          </div>
          
          <div className="footer-action">
            <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Scroll back to top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <span>Back to Top</span>
            </button>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Annie Sherlyn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
