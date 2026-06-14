import InteractiveCityMap from './InteractiveCityMap';
import MetricsStrip from './MetricsStrip';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Hero.css';

const Hero = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="hero home-hero" id="home" ref={sectionRef}>
      <div className="container">
        
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content reveal-up">
            <div className="hero-profile-frame">
              {/* TODO: Replace with Annie's actual profile photo */}
              <div className="profile-placeholder">
                <span className="profile-initials">AS</span>
              </div>
            </div>

            <div className="hero-tagline">
              <span className="tag-dot"></span>
              Data &bull; AI &bull; Strategy
            </div>

            <h1 className="hero-title">
              Welcome to<br/>
              <span className="hero-title-accent">Annie’s Data City</span>
            </h1>

            <p className="hero-subtitle">
              Exploring data science, AI, analytics, leadership, and innovation through meaningful projects and real-world learning.
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
              <a href="#projects" className="btn-primary">Explore Data Lab</a>
              <a href="#resume" className="btn-secondary">View Archive</a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="hero-map-column">
            <InteractiveCityMap />
          </div>
        </div>

        {/* Bottom Strip */}
        <MetricsStrip />

      </div>
    </section>
  );
};

export default Hero;
