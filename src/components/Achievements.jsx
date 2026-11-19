import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Achievements.css';

const Achievements = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const achievements = [
    { title: 'Datathon 2K26 — Winner', details: '1st place among 100+ teams. Won ₹35,000 and received 2 internship opportunities.', category: 'Competition · 2026' },
    { title: 'KLA India Unhack — Runner-Up', details: 'Worked on real-world wafer-analysis problems with industry mentors.', category: 'Competition · 2026' },
    { title: 'Hackinfinity ’26 — Runner-Up', details: 'Second Prize, Software Track. NutriSense; 120+ teams; ₹10,000 prize.', category: 'Hackathon · 2026', project: '#projects' },
    { title: 'LeetCode', details: '150+ problems solved. Earned 50-Day and 100-Day Problem-Solving Badges.', category: 'Coding Practice' },
    { title: 'Datalytics Innovation 2.0', details: 'Organized and conducted the October 2026 hackathon, coordinating activities and execution.', category: 'Leadership · October 2026' }
  ];

  return (
    <section className="section bg-light" id="achievements" ref={sectionRef}>
      <div className="section-bg-element bg-achievement-plaza"></div>
      
      <div className="container">
        <div className="achievements-header text-center reveal-up">
          <h2 className="section-title">Achievement Plaza</h2>
          <p className="section-subtitle mx-auto">
            Milestones, certifications, and competitive recognitions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="achievement-card reveal-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="achievement-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="achievement-icon">
                  <path d="M12 15l-3.5 2 1-4-3-2.5 4-.5L12 6l1.5 4 4 .5-3 2.5 1 4z" />
                </svg>
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{item.category}</span>
                <h4 className="achievement-title">{item.title}</h4>
                <p className="achievement-details">{item.details}</p>
                {item.project && <a className="achievement-link" href={item.project}>View associated project</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
