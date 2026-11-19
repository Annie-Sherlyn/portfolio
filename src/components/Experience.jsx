import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Experience.css';

const Experience = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    { title: 'Secretary — Datalytics, CIT', date: 'May 2026 – Present', type: 'Leadership', description: 'Coordinating technical events and club activities, organizing technical sessions, facilitating student engagement, supporting innovation and hackathon initiatives, and coordinating operations and event execution.', tags: ['Event Coordination', 'Technical Activities', 'Student Engagement', 'Operations'] },
    { title: 'Internship Coordinator — CIT', date: 'August 2026 – Present', type: 'Leadership · Prominent Role', description: 'Working with the Internship Cell, faculty and staff to coordinate internship-related activities and facilitate communication between students and organizations.', tags: ['Internship Coordination', 'Faculty & Staff', 'Communication', 'Student Support'] },
    { title: 'Data Analyst / Full Stack Developer Intern', date: 'May 2026 – June 2026', type: 'ProfitStory.ai', description: 'Worked on competitive intelligence dashboards, product analytics, market intelligence and data-driven decision-support systems, including product and competitor analysis, data processing, pricing, profitability, dashboards, forecasting and risk assessment.', tags: ['Competitive Intelligence', 'Data Processing', 'Dashboards', 'Market Analysis'] },
    { title: 'Product Intelligence Intern', date: 'March 2026 – April 2026', type: 'TheDot Collective Pvt. Ltd.', description: 'Worked on product research, market intelligence, competitor analysis and business analysis to identify market opportunities and generate actionable business insights.', tags: ['Product Research', 'Competitor Analysis', 'Market Intelligence', 'Business Analysis'] },
    { title: 'Assistant School Pupil Leader', date: 'June 2021 – May 2022', type: 'St. Joseph’s Matriculation Higher Secondary School', description: 'Supported student leadership responsibilities, communication and coordination within the school community.', tags: ['Leadership', 'Communication', 'Student Coordination'] }
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
