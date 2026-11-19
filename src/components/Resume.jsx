import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Resume.css';

const Resume = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section bg-light" id="resume">
      <div className="section-bg-element bg-archive-center"></div>
      
      <div className="container" ref={sectionRef}>
        <div className="resume-container reveal-up">
          <div className="resume-content">
            <h2 className="section-title">Archive Center — Resume</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              A detailed overview of my academic background, skills, projects, and experiences.
            </p>
            
            <div className="resume-actions">
              <a href="mailto:anniesherlyn2006@gmail.com?subject=Resume%20request" className="btn-primary">Request Resume</a>
            </div>
          </div>
          
          <div className="archive-document reveal-up" style={{transitionDelay: '150ms'}}>
            <div className="archive-tab">CONFIDENTIAL</div>
            <div className="resume-preview-card">
              <div className="resume-header">
                <h3>Annie Sherlyn</h3>
                <p>Integrated M.Sc. Data Science</p>
                <p className="resume-focus">Data Science | AI | Analytics</p>
              </div>
              <div className="resume-body">
                <div className="resume-line"></div>
                <div className="resume-line"></div>
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
                <br/>
                <div className="resume-line"></div>
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
