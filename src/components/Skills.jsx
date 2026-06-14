import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Skills.css';

const Skills = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Programming',
    'Data Science & Analytics',
    'AI & NLP',
    'Tools & Platforms',
    'Web & Development',
    'Soft Skills'
  ];

  const allSkills = [
    // Programming
    { name: 'Python', level: 'Intermediate', score: 4, category: 'Programming', badge: '2y' },
    { name: 'SQL', level: 'Intermediate', score: 4, category: 'Programming' },
    { name: 'MySQL', level: 'Intermediate', score: 4, category: 'Programming' },
    { name: 'Pandas', level: 'Intermediate', score: 4, category: 'Programming' },
    { name: 'NumPy', level: 'Intermediate', score: 3.5, category: 'Programming' },
    { name: 'Java', level: 'Beginner', score: 2.5, category: 'Programming' },
    { name: 'C', level: 'Beginner', score: 2.5, category: 'Programming' },
    
    // Data Science & Analytics
    { name: 'Data Analytics', level: 'Intermediate', score: 4, category: 'Data Science & Analytics' },
    { name: 'Data Cleaning', level: 'Intermediate', score: 4, category: 'Data Science & Analytics' },
    { name: 'Business Intelligence', level: 'Beginner–Intermediate', score: 3.5, category: 'Data Science & Analytics' },
    { name: 'Machine Learning', level: 'Beginner–Intermediate', score: 3, category: 'Data Science & Analytics' },
    { name: 'Feature Engineering', level: 'Beginner–Intermediate', score: 3, category: 'Data Science & Analytics' },
    { name: 'Model Evaluation', level: 'Beginner–Intermediate', score: 3, category: 'Data Science & Analytics' },
    { name: 'Statistics', level: 'Beginner–Intermediate', score: 3, category: 'Data Science & Analytics' },
    { name: 'Data Visualization', level: 'Intermediate', score: 4, category: 'Data Science & Analytics' },
    
    // AI & NLP
    { name: 'NLP', level: 'Beginner', score: 2.5, category: 'AI & NLP' },
    { name: 'Prompt Engineering', level: 'Intermediate', score: 4, category: 'AI & NLP' },
    { name: 'Text Preprocessing', level: 'Beginner–Intermediate', score: 3, category: 'AI & NLP' },
    { name: 'Sentiment Analysis', level: 'Beginner–Intermediate', score: 3, category: 'AI & NLP' },
    
    // Tools & Platforms
    { name: 'VS Code', level: 'Intermediate', score: 4, category: 'Tools & Platforms' },
    { name: 'Jupyter Notebook', level: 'Intermediate', score: 4, category: 'Tools & Platforms' },
    { name: 'GitHub', level: 'Beginner–Intermediate', score: 3.5, category: 'Tools & Platforms' },
    { name: 'Git', level: 'Beginner–Intermediate', score: 3, category: 'Tools & Platforms' },
    { name: 'Excel', level: 'Intermediate', score: 4, category: 'Tools & Platforms' },
    { name: 'Canva', level: 'Intermediate', score: 4, category: 'Tools & Platforms' },
    { name: 'DBeaver', level: 'Beginner–Intermediate', score: 3, category: 'Tools & Platforms' },
    
    // Web & Development
    { name: 'HTML', level: 'Beginner–Intermediate', score: 3.5, category: 'Web & Development' },
    { name: 'CSS', level: 'Beginner–Intermediate', score: 3.5, category: 'Web & Development' },
    { name: 'FastAPI', level: 'Beginner', score: 2.5, category: 'Web & Development' },
    { name: 'React Basics', level: 'Beginner', score: 2.5, category: 'Web & Development' },
    { name: 'TypeScript Basics', level: 'Beginner', score: 2, category: 'Web & Development' },
    
    // Soft Skills
    { name: 'Leadership', level: 'Intermediate', score: 4, category: 'Soft Skills' },
    { name: 'Communication', level: 'Intermediate', score: 4, category: 'Soft Skills' },
    { name: 'Research', level: 'Intermediate', score: 4, category: 'Soft Skills' },
    { name: 'Team Collaboration', level: 'Intermediate', score: 4, category: 'Soft Skills' },
    { name: 'Event Management', level: 'Intermediate', score: 4, category: 'Soft Skills' },
    { name: 'Documentation', level: 'Intermediate', score: 4, category: 'Soft Skills' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section className="section bg-light" id="skills" ref={sectionRef}>
      <div className="section-bg-element bg-tech-tower"></div>
      
      <div className="container reveal-up">
        <div className="skills-header text-center">
          <h2 className="section-title">Tech Tower — Skills</h2>
          <p className="section-subtitle mx-auto">
            A blend of technical, analytical, and creative tools I use to build meaningful data-driven solutions.
          </p>
        </div>

        <div className="skills-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-top">
                <h4 className="skill-name">{skill.name}</h4>
                {skill.badge && <span className="skill-optional-badge">{skill.badge}</span>}
              </div>
              
              <div className="skill-details">
                <span className="skill-level">{skill.level}</span>
                <span className="skill-score-text">{skill.score}/5</span>
              </div>
              
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${(skill.score / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
