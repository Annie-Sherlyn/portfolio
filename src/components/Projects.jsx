import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

const Projects = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      title: 'Women Safety System',
      description: 'The Women Safety System is a smart safety application designed to help women during emergencies by providing instant access to SOS alerts, live location sharing, and emergency contact notifications. The system enables users to quickly seek help and ensures that trusted contacts receive real-time updates about the user\'s location and safety status.',
      features: [
        'Emergency SOS alert system',
        'Live location sharing',
        'Emergency contact notification',
        'Machine learning model for language/speech input processing',
        'Text-to-speech integration',
        'Speech recognition using Vosk and/or Whisper',
        'Real-time voice interaction'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'TTS', 'Vosk', 'Whisper', 'ML'],
      githubLink: '#',
      caseStudyLink: '#'
    },
    {
      title: 'AI-Powered Market Intelligence Dashboard',
      description: 'An end-to-end analytics platform that transforms Amazon product and keyword datasets into actionable business intelligence. It analyzes demand strength, revenue momentum, market concentration, pricing patterns, and whitespace gaps. It combines structured dataset analysis with AI-assisted insight generation to help sellers make smarter entry or growth decisions.',
      features: [
        'Interactive cards and visual charts',
        'Evidence-based calculations & drill-down tables',
        'Downloadable Markdown business reports',
        'Python-based intelligence agents',
        'Comprehensive Testing & Browser QA'
      ],
      tags: ['React', 'TypeScript', 'Vite', 'Python', 'FastAPI', 'Pandas', 'NumPy', 'PostgreSQL', 'DBeaver', 'Git', 'GitHub'],
      githubLink: '#',
      caseStudyLink: '#'
    },
    {
      title: 'Coming Soon / Future Project',
      description: 'A future space for another data science, AI, analytics, or strategy-focused project. This section remains cleanly integrated into the portfolio architecture, ready to host the next big data solution.',
      features: [],
      tags: [],
      githubLink: null,
      caseStudyLink: null,
      isPlaceholder: true
    }
  ];

  return (
    <section className="section bg-light" id="projects" ref={sectionRef}>
      <div className="section-bg-element bg-data-lab"></div>
      
      <div className="container reveal-up">
        <div className="projects-header text-center">
          <h2 className="section-title">Data Lab — Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of data science, AI, analytics, and real-world solution-building projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview-window">
                <div className="project-preview-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="project-preview-body">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="project-preview-icon">
                    {project.isPlaceholder ? (
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    ) : (
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    )}
                  </svg>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {project.features && project.features.length > 0 && (
                  <div className="project-features">
                    <strong>Key Features:</strong>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.isPlaceholder ? (
                    <button className="btn-secondary" disabled>Coming Soon</button>
                  ) : (
                    <>
                      <a href={project.githubLink} className="btn-secondary btn-sm">GitHub</a>
                      <a href={project.caseStudyLink} className="btn-primary btn-sm">View Case Study</a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
