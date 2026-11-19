import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Journey.css';

const Journey = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const journeyData = [
    { date: 'July 2024 – Present', title: 'Integrated M.Sc. Data Science', details: 'Studying at Coimbatore Institute of Technology.', category: 'Education' },
    { date: 'March 2026 – April 2026', title: 'Product Intelligence Intern', details: 'TheDot Collective Pvt. Ltd.; product research, market intelligence, competitor analysis and business analysis.', category: 'Experience' },
    { date: 'May 2026 – June 2026', title: 'Data Analyst / Full Stack Developer Intern', details: 'ProfitStory.ai; competitive intelligence, product analytics, data processing, market insights and dashboard development.', category: 'Experience' },
    { date: 'May 2026 – Present', title: 'Secretary — Datalytics, CIT', details: 'Coordinating technical activities, events and student engagement.', category: 'Leadership' },
    { date: 'August 2026', title: '150+ LeetCode Problems', details: 'LeetCode milestone reached; 100+ problems crossed by August 2026.', category: 'Achievement' },
    { date: 'August 2026 – Present', title: 'Internship Coordinator — CIT', details: 'Working with the Internship Cell, faculty and staff to coordinate activities and communication between students and organizations.', category: 'Leadership' },
    { date: '2026', title: 'Runner-Up — KLA India Unhack', details: 'Worked on real-world wafer-analysis problems in collaboration with industry mentors.', category: 'Competition' },
    { date: '2026', title: 'Runner-Up / Second Prize — Hackinfinity ’26', details: 'Built NutriSense for the Software Track and secured the ₹10,000 prize.', category: 'Competition' },
    { date: 'October 2026', title: 'Datalytics Innovation 2.0', details: 'Organized and conducted the club hackathon, covering planning, coordination, technical activities and event execution.', category: 'Leadership' },
    { date: 'November 2026', title: 'AI & Data Science Developer', details: 'Building intelligent applications while serving as Secretary of Datalytics and Internship Coordinator at CIT.', category: 'Current' }
  ];

  return (
    <section className="section bg-light" id="journey" ref={sectionRef}>
      {/* Background layer representing the route */}
      <div className="section-bg-element bg-journey-route"></div>
      
      {/* Header restricted to container width */}
      <div className="container reveal-up">
        <div className="journey-header text-center">
          <h2 className="section-title">Annie’s Data Journey</h2>
          <p className="section-subtitle mx-auto">
            The ongoing path of learning, building, and leading in data science.
          </p>
        </div>
      </div>

      {/* Marquee escapes the container for full 100vw width */}
      <div className="timeline-marquee-container reveal-up">
        <div className="timeline-marquee-track">
          {/* Original Track */}
          {journeyData.map((item, index) => (
            <div key={`orig-${index}`} className="timeline-card">
              <div className="timeline-card-header">
                <span className="timeline-date">{item.date}</span>
              </div>
              <h4 className="timeline-card-title">{item.title}</h4>
              <p className="timeline-card-details">{item.details}</p>
              <div className="timeline-route-node"></div>
            </div>
          ))}
          
          {/* Duplicated Track for Seamless Loop */}
          {journeyData.map((item, index) => (
            <div key={`dup-${index}`} className="timeline-card" aria-hidden="true">
              <div className="timeline-card-header">
                <span className="timeline-date">{item.date}</span>
              </div>
              <h4 className="timeline-card-title">{item.title}</h4>
              <p className="timeline-card-details">{item.details}</p>
              <div className="timeline-route-node"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
