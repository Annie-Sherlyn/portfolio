import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Journey.css';

const Journey = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const journeyData = [
    {
      date: 'July 2024',
      title: 'Started Integrated M.Sc. Data Science at Coimbatore Institute of Technology',
      details: 'Began academic journey in data science.'
    },
    {
      date: '4th Semester',
      title: 'CGPA',
      details: 'Current CGPA: 8.6'
    },
    {
      date: 'Dec 2024 – Jun 2025',
      title: 'Social Media Manager / Editor — Pearly Touch',
      details: 'Worked with Pearly Touch, a cosmetics brand, managing social media content and editing.'
    },
    {
      date: 'Jan 2025 – Nov 2025',
      title: 'Built foundation in Python, SQL, Statistics, and Analytics',
      details: 'Strengthened core technical and analytical foundations.'
    },
    {
      date: 'Mar 2025 – Apr 2026',
      title: 'Datalytics Board Member — Event Management Team',
      details: 'Contributed to event planning, coordination, and student community activities.'
    },
    {
      date: 'Jun 2025',
      title: 'Completed Cricket Analytics Workshop',
      details: 'Explored sports analytics, performance metrics, and cricket data interpretation.'
    },
    {
      date: 'Aug 2025 – Apr 2026',
      title: 'Developed NAAC Digital Documentation System',
      details: 'Developed a NAAC digital documentation system that centralized institutional data, automated SSR report generation, and provided secure role-based access for efficient accreditation management.'
    },
    {
      date: 'Sept 2025 – Present',
      title: 'Participated in 6+ Hackathons',
      details: 'Participated in multiple hackathons focused on innovation, problem-solving, and rapid prototyping.'
    },
    {
      date: 'Oct 2025',
      title: 'Smart India Hackathon Internal Winner',
      details: 'Won the internal Smart India Hackathon selection round.'
    },
    {
      date: 'Jan 2026',
      title: 'VIT Hackathon Finalist',
      details: 'Selected as a finalist in the VIT hackathon.'
    },
    {
      date: 'Feb 2026 – Present',
      title: 'Internship — DotCollective / Yoko Styles',
      details: 'Started internship at DotCollective / Yoko Styles, a product-based startup.'
    },
    {
      date: 'Mar 2026',
      title: 'Won Datathon 2K26',
      details: 'Won Datathon 2K26 with ₹35,000 cash prize and 2 internship opportunities.'
    },
    {
      date: 'May 2026 – Jun 2026',
      title: 'Summer Internship — Profit Story AI',
      details: 'Completed summer internship at Profit Story AI.'
    },
    {
      date: '2026',
      title: 'AI-Powered Market Intelligence Dashboard',
      details: 'Built an end-to-end analytics platform that transforms Amazon product and keyword datasets into actionable business intelligence.'
    },
    {
      date: 'May 2026 – Present',
      title: 'Became Datalytics Secretary',
      details: 'Took responsibility as Datalytics Secretary, supporting leadership, coordination, and student initiatives.'
    }
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
