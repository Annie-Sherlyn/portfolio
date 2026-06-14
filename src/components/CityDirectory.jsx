import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './CityDirectory.css';

const directoryData = [
  {
    num: "1",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    building: "Welcome Plaza",
    section: "Home",
    description: "Short intro to Annie and her portfolio.",
    link: "#home",
    color: "var(--color-primary)"
  },
  {
    num: "2",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    building: "The Library",
    section: "About Me",
    description: "Academic background, learning approach, interests, and career vision.",
    link: "#about",
    color: "var(--color-primary-hover)"
  },
  {
    num: "3",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
    building: "Tech Tower",
    section: "Skills",
    description: "Python, SQL, Java, C, Data Analytics, Machine Learning, NLP, Statistics, Visualization.",
    link: "#skills",
    color: "var(--color-primary)"
  },
  {
    num: "4",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    building: "Data Lab",
    section: "Projects",
    description: "Data science, AI, analytics, dashboard, and research-based projects.",
    link: "#projects",
    color: "var(--color-accent-soft)"
  },
  {
    num: "5",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    building: "Leadership Hall",
    section: "Experience",
    description: "Datalytics Secretary role, event management, hackathon teamwork, leadership.",
    link: "#experience",
    color: "var(--color-primary-hover)"
  },
  {
    num: "6",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
    building: "Achievement Plaza",
    section: "Achievements",
    description: "Datathon 2K26 Winner, NPTEL C Programming, Cricket Analytics, inter-city exposure.",
    link: "#achievements",
    color: "var(--color-gold)"
  },
  {
    num: "7",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
    building: "Archive Center",
    section: "Resume",
    description: "Resume preview and download button.",
    link: "#resume",
    color: "var(--color-text-muted)"
  },
  {
    num: "8",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    building: "Central Station",
    section: "Contact",
    description: "Email, LinkedIn, GitHub, and contact form.",
    link: "#contact",
    color: "var(--color-primary)"
  }
];

const CityDirectory = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section bg-light" id="directory">
      <div className="section-bg-element bg-directory-routes"></div>
      
      <div className="container" ref={sectionRef}>
        <div className="reveal-up">
          <h2 className="section-title">City Directory</h2>
          <p className="section-subtitle">
            Explore the landmarks of Annie’s Data City — each one represents a part of her learning, skills, projects, and journey.
          </p>
        </div>

        <div className="directory-grid reveal-up" style={{transitionDelay: '100ms'}}>
          {directoryData.map((item, index) => (
            <div className="directory-card" key={index} style={{'--card-accent': item.color, animationDelay: `${index*50}ms`}}>
              <div className="card-bg-pattern"></div>
              
              <div className="card-header">
                <div className="card-marker-badge">{item.num}</div>
                <span className="card-icon">{item.icon}</span>
                <div>
                  <h3 className="card-building">{item.building}</h3>
                  <span className="card-section">{item.section}</span>
                </div>
              </div>
              <p className="card-description">{item.description}</p>
              <a href={item.link} className="card-link">Explore <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityDirectory;
