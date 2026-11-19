import MetricsStrip from './MetricsStrip';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMouseParallax } from '../hooks/useMouseParallax';
import './Hero.css';

const Hero = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  const { x, y } = useMouseParallax();

  return (
    <section className="hero home-hero" id="home" ref={sectionRef} style={{ '--city-x': `${x * -10}px`, '--city-y': `${y * -10}px` }}>
      <div className="container">
        
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content reveal-up">
            <div className="hero-profile-frame" aria-label="Annie Sherlyn R">
              <div className="profile-placeholder"><span className="profile-initials">AS</span></div>
            </div>

            <div className="hero-tagline">
              <span className="tag-dot"></span>
              Data &bull; AI &bull; Strategy
            </div>

            <h1 className="hero-title">
              Annie Sherlyn R<br/>
              <span className="hero-title-accent">AI &amp; Data Science Developer</span>
            </h1>

            <p className="hero-subtitle">
              An Integrated M.Sc. Data Science student at Coimbatore Institute of Technology, passionate about building intelligent applications, AI-powered systems and data-driven solutions. I enjoy transforming complex problems into practical software solutions through artificial intelligence, machine learning, analytics and full-stack development.
            </p>

            <div className="hero-instruction">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="instruction-icon">
                <path d="M15 3h6v6"></path>
                <path d="M9 21H3v-6"></path>
                <path d="M21 3l-7 7"></path>
                <path d="M3 21l7-7"></path>
              </svg>
              <span>Click any building to explore a section</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#journey" className="btn-secondary">Explore My Journey</a>
              <a href="/resumes/Annie_Data.pdf" className="btn-secondary" download>Download Resume</a>
              <a href="https://github.com/Annie-Sherlyn" className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/annie-sherlyn-cit/" className="btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Right Column: Interactive city navigation */}
          <div className="hero-map-column">
            <nav className="hero-city-nav" aria-label="Explore portfolio locations">
              <a className="city-node node-skills" href="#skills"><span>Data District</span><small>Skills</small></a>
              <a className="city-node node-projects" href="#projects"><span>Innovation Hub</span><small>Projects</small></a>
              <a className="city-node node-leadership" href="#experience"><span>Leadership Hall</span><small>Experience</small></a>
              <a className="city-node node-achievements" href="#achievements"><span>Achievement Plaza</span><small>Recognition</small></a>
              <a className="city-node node-journey" href="#journey"><span>Data Journey</span><small>Timeline</small></a>
            </nav>
          </div>
        </div>

        {/* Bottom Strip */}
        <MetricsStrip />

      </div>
    </section>
  );
};

export default Hero;
