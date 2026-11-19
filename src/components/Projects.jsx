import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

const Projects = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: 'SafeHer',
      category: 'AI / Safety',
      description: 'An AI-powered women’s safety application for intelligent journey monitoring, route anomaly detection and emergency response workflows.',
      problem: 'Improve timely support and safety awareness during personal travel.',
      solution: 'Connect location monitoring and machine-learning anomaly signals with structured SOS workflows.',
      features: ['Journey monitoring', 'Route anomaly detection', 'Location tracking', 'SOS alerts', 'Trusted contacts'],
      tags: ['Python', 'FastAPI', 'Flask', 'Scikit-learn', 'Pandas', 'PostgreSQL'],
      githubLink: null
    },
    {
      title: 'MarketNexus',
      category: 'AI / Business Intelligence',
      description: 'AI-powered competitive intelligence that analyzes reviews and competitor information to generate actionable business insights.',
      problem: 'Turn fragmented product and market evidence into clear decisions.',
      solution: 'Combine NLP, retrieval and analytical workflows with an interactive intelligence dashboard.',
      features: ['Sentiment analysis', 'Aspect-based NLP', 'RAG retrieval', 'Competitor analysis', 'Market simulations'],
      tags: ['Python', 'NLP', 'DistilBERT', 'LLMs', 'RAG', 'Vector Search'],
      githubLink: null
    },
    {
      title: 'SENTRA',
      category: 'Full Stack / FinTech',
      description: 'A completed e-commerce platform built for the Razorpay Buildathon with connected seller and buyer workflows.',
      problem: 'Unify product management, buyer requests and payment operations.',
      solution: 'Create an end-to-end commerce dashboard for catalog, inventory, orders and transaction tracking.',
      features: ['Seller dashboard', 'Product variants', 'Inventory management', 'Buyer requests', 'Razorpay integration'],
      tags: ['Full Stack', 'Razorpay', 'E-Commerce', 'Payments'],
      githubLink: null
    },
    {
      title: 'NutriSense',
      category: 'AI / HealthTech',
      description: 'A food intelligence application for exploring nutritional information through food analysis and user-facing workflows.',
      problem: 'Make food and nutrient information easier to understand and explore.',
      solution: 'Use structured food analysis workflows and OCR-based menu information in an accessible application.',
      features: ['Food analysis', 'Nutritional insights', 'Menu OCR', 'Budget recommendations'],
      tags: ['TypeScript', 'Python', 'OCR', 'Food Intelligence'],
      githubLink: 'https://github.com/Annie-Sherlyn/NutriSense',
      liveLink: 'https://timely-froyo-9a6b6f.netlify.app'
    },
    {
      title: 'Cricket Analysis',
      category: 'Data Analytics',
      description: 'A cricket analytics project focused on extracting meaningful patterns and insights from cricket-related data.',
      problem: 'Convert cricket data into interpretable performance insights.',
      solution: 'Apply analytical methods and visualizations to explore statistics and trends.',
      features: ['Data exploration', 'Statistical analysis', 'Sports visualizations', 'Key findings'],
      tags: ['Python', 'Pandas', 'Data Visualization', 'Sports Analytics'],
      githubLink: null
    }
  ];
  const filters = ['All', 'AI', 'Full Stack', 'Data Analytics'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category.includes(activeFilter));

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

        <div className="projects-filters" aria-label="Filter projects">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview-window">
                <div className="project-preview-body">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-code-mark">&lt;/&gt;</span>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} className="btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} className="btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                  <button className="project-details-button" type="button" onClick={() => setSelectedProject(project)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="project-modal-close" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button>
            <span className="project-category">{selectedProject.category}</span>
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="project-proof">
              <div><strong>Problem</strong><span>{selectedProject.problem}</span></div>
              <div><strong>Solution</strong><span>{selectedProject.solution}</span></div>
            </div>
            <div className="project-feature-list">
              {selectedProject.features.map(feature => <span key={feature}>{feature}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
