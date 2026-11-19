import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Skills.css';

const Skills = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming', 'AI & ML', 'Data Science', 'Backend', 'Databases', 'Visualization', 'Tools', 'Software Development'];

  const allSkills = [
    { name: 'Python', category: 'Programming' }, { name: 'SQL', category: 'Programming' },
    { name: 'Machine Learning', category: 'AI & ML' }, { name: 'Deep Learning', category: 'AI & ML' },
    { name: 'NLP', category: 'AI & ML' }, { name: 'LLM Applications', category: 'AI & ML' },
    { name: 'Scikit-learn', category: 'AI & ML' }, { name: 'DistilBERT', category: 'AI & ML' }, { name: 'RAG', category: 'AI & ML' },
    { name: 'Pandas', category: 'Data Science' }, { name: 'NumPy', category: 'Data Science' },
    { name: 'Data Cleaning', category: 'Data Science' }, { name: 'EDA', category: 'Data Science' },
    { name: 'Feature Engineering', category: 'Data Science' }, { name: 'Data Visualization', category: 'Data Science' }, { name: 'Web Scraping', category: 'Data Science' },
    { name: 'FastAPI', category: 'Backend' }, { name: 'Flask', category: 'Backend' }, { name: 'REST APIs', category: 'Backend' }, { name: 'Supabase', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Databases' }, { name: 'MySQL', category: 'Databases' }, { name: 'Excel', category: 'Visualization' },
    { name: 'Git', category: 'Tools' }, { name: 'GitHub', category: 'Tools' }, { name: 'VS Code', category: 'Tools' }, { name: 'Jupyter Notebook', category: 'Tools' }, { name: 'DBeaver', category: 'Tools' },
    { name: 'Data Structures and Algorithms', category: 'Software Development' }, { name: 'Object-Oriented Programming', category: 'Software Development' }
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
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
