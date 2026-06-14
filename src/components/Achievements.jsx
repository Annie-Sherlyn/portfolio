import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Achievements.css';

const Achievements = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const achievements = [
    {
      title: 'Datathon 2K26 Winner',
      details: 'Won Datathon 2K26 with ₹35,000 cash prize and 2 internship opportunities.',
      category: 'Competition'
    },
    {
      title: 'Smart India Hackathon',
      details: 'Internal hackathon winner.',
      category: 'Hackathon'
    },
    {
      title: 'NPTEL C Programming',
      details: 'Completed NPTEL certification in C Programming.',
      category: 'Certification'
    },
    {
      title: 'Cricket Analytics Workshop',
      details: 'Completed a cricket analytics workshop focused on sports analytics and performance insights.',
      category: 'Workshop'
    },
    {
      title: 'NPTEL Introduction to Machine Learning',
      details: 'Completed NPTEL Introduction to Machine Learning.',
      category: 'Certification'
    },
    {
      title: '50 Day LeetCode Badge',
      details: 'Earned the 50 Day LeetCode Badge for consistent coding practice.',
      category: 'Coding Practice'
    }
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
