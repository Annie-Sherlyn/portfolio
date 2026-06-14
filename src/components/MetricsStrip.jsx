import './MetricsStrip.css';

const MetricsStrip = () => {
  const metrics = [
    {
      title: '100+ LC Problems',
      description: 'Consistent coding practice on LeetCode.',
      link: 'https://leetcode.com/u/Annie_sherlyn2006/',
      isExternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: '3+ Projects',
      description: 'Data science, AI, and analytics projects.',
      link: 'https://github.com/Annie-Sherlyn',
      isExternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: '6+ Hackathons',
      description: 'Innovation, teamwork, and rapid prototyping.',
      link: '#achievements',
      isExternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    },
    {
      title: '2+ Internships',
      description: 'Practical industry and startup experience.',
      link: '#experience',
      isExternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="metrics-strip">
      {metrics.map((metric, index) => (
        <a 
          key={index} 
          href={metric.link} 
          className="metric-card"
          target={metric.isExternal ? "_blank" : "_self"}
          rel={metric.isExternal ? "noopener noreferrer" : ""}
          aria-label={`${metric.title}: ${metric.description}`}
        >
          <div className="metric-icon">
            {metric.icon}
          </div>
          <div className="metric-content">
            <h4 className="metric-title">{metric.title}</h4>
            <p className="metric-desc">{metric.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MetricsStrip;
