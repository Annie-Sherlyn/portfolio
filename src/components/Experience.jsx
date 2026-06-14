import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Experience.css';

const Experience = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Datalytics Secretary',
      date: 'May 2026 – Present',
      type: 'Leadership / Student Organization',
      description: 'Serving as Datalytics Secretary, supporting club coordination, student engagement, event planning, communication, documentation, and data-focused community activities.',
      tags: ['Leadership', 'Event Management', 'Communication', 'Documentation', 'Team Coordination']
    },
    {
      title: 'Summer Intern — Profit Story AI',
      date: 'May 2026 – Jun 2026',
      type: 'Internship',
      description: 'Completed a summer internship at Profit Story AI, gaining exposure to AI-based business solutions, analytics workflows, and practical technology applications.',
      tags: ['Internship', 'AI', 'Analytics', 'Research', 'Business Solutions']
    },
    {
      title: 'Intern — DotCollective / Yoko Styles',
      date: 'Feb 2026 – Present',
      type: 'Product-Based Startup Internship',
      description: 'Working with DotCollective / Yoko Styles, a product-based startup, contributing to product-focused tasks, research, coordination, and practical startup learning.',
      tags: ['Product Research', 'Startup', 'Coordination', 'Digital Strategy', 'Practical Learning']
    }
  ];

  return (
    <section className="section bg-secondary" id="experience" ref={sectionRef}>
      <div className="section-bg-element bg-leadership-hall"></div>
      
      <div className="container reveal-up">
        <div className="experience-header text-center">
          <h2 className="section-title">Leadership Hall — Experience</h2>
          <p className="section-subtitle mx-auto">
            Practical learning, coordination, and leadership experiences.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <span className="experience-date">{exp.date}</span>
                <span className="experience-type">{exp.type}</span>
              </div>
              
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-desc">{exp.description}</p>
              
              <div className="experience-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="skill-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
