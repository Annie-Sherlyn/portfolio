import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

const About = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.2 });
  const interests = [
    "Data Science", "AI", "Analytics", 
    "Product Research", "Digital Marketing", "Accessibility Technology", 
    "Sports Analytics", "Innovation"
  ];

  return (
    <section className="section bg-light" id="about" ref={sectionRef}>
      <div className="section-bg-element bg-library"></div>
      
      <div className="container reveal-up">
        <div className="about-header text-center">
          <h2 className="section-title">The Library — About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text-column">
            <p className="about-intro-highlight">
              Data isn’t just numbers on a screen to me—it’s a way of understanding people, uncovering patterns, and finding the stories hidden behind information.
            </p>
            
            <div className="about-paragraphs">
              <p>
                Hi, I’m <strong>Annie Sherlyn R</strong>, an Integrated M.Sc. Data Science student at CIT and an AI &amp; Data Science Developer. I enjoy building intelligent applications and data-driven solutions across machine learning, analytics and full-stack development.
              </p>
              
              <p>
                Over time, I’ve developed skills in Machine Learning, SQL, and Natural Language Processing (NLP), but what excites me most is applying these skills to real-world challenges. Whether it’s understanding consumer behavior, exploring market trends, building business intelligence solutions, or even analyzing cricket, I enjoy discovering insights that can drive better decisions.
              </p>
              
              <p>
                I’m particularly interested in the space where technology, business, and strategy come together. I love exploring how data can support product development, improve user experiences, and create meaningful impact through AI-driven solutions.
              </p>
              
              <p>
                Beyond academics, I enjoy being part of hackathons, workshops, and tech communities. These experiences have taught me the value of collaboration, adaptability, and continuous learning. They’ve also shown me that some of the best ideas emerge when diverse perspectives come together to solve a problem.
              </p>
              
              <p>
                As I continue my journey in data science, my goal is not just to analyze data but to use it to build practical solutions, create value, and contribute to a smarter, more data-driven future.
              </p>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="interests-card">
              <div className="interests-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="interests-icon">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                <h3>Key Interests</h3>
              </div>
              <div className="interests-tags">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="academic-card">
              <div className="academic-line">
                <span className="academic-label">Education</span>
                <span className="academic-value">Integrated M.Sc. Data Science</span>
              </div>
              <div className="academic-line">
                <span className="academic-label">Institution</span>
                <span className="academic-value">Coimbatore Institute of Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
