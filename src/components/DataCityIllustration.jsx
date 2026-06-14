import React from 'react';
import './DataCityIllustration.css';

const mapSections = [
  {
    id: "home",
    creativeName: "Welcome Plaza",
    sectionName: "Home",
    description: "The gateway to Annie's Data City",
    href: "#home",
    ariaLabel: "Go to Home section",
    hotspotPosition: { top: "78%", left: "35%", width: "12%", height: "12%" },
    labelPosition: { top: "-40px", left: "50%" }
  },
  {
    id: "about",
    creativeName: "The Library",
    sectionName: "About Me",
    description: "Academic repository of knowledge and background",
    href: "#about",
    ariaLabel: "Go to About Me section",
    hotspotPosition: { top: "50%", left: "15%", width: "14%", height: "16%" },
    labelPosition: { top: "-45px", left: "50%" }
  },
  {
    id: "skills",
    creativeName: "Tech Tower",
    sectionName: "Skills",
    description: "The technological core and skill stack",
    href: "#skills",
    ariaLabel: "Go to Skills section",
    hotspotPosition: { top: "28%", left: "55%", width: "10%", height: "25%" },
    labelPosition: { top: "-40px", left: "50%" }
  },
  {
    id: "projects",
    creativeName: "Data Lab",
    sectionName: "Projects",
    description: "Explore real-world data science and AI projects",
    href: "#projects",
    ariaLabel: "Go to Projects section",
    hotspotPosition: { top: "45%", left: "40%", width: "16%", height: "18%" },
    labelPosition: { top: "-45px", left: "50%" }
  },
  {
    id: "experience",
    creativeName: "Leadership Hall",
    sectionName: "Experience",
    description: "Professional history and leadership roles",
    href: "#experience",
    ariaLabel: "Go to Experience section",
    hotspotPosition: { top: "20%", left: "30%", width: "15%", height: "15%" },
    labelPosition: { top: "-40px", left: "50%" }
  },
  {
    id: "achievements",
    creativeName: "Achievement Plaza",
    sectionName: "Achievements",
    description: "Monuments of success and recognition",
    href: "#achievements",
    ariaLabel: "Go to Achievements section",
    hotspotPosition: { top: "50%", left: "70%", width: "12%", height: "12%" },
    labelPosition: { top: "-40px", left: "50%" }
  },
  {
    id: "resume",
    creativeName: "Archive Center",
    sectionName: "Resume",
    description: "Comprehensive portfolio documents",
    href: "#resume",
    ariaLabel: "Go to Resume section",
    hotspotPosition: { top: "70%", left: "68%", width: "14%", height: "14%" },
    labelPosition: { top: "-40px", left: "50%" }
  },
  {
    id: "contact",
    creativeName: "Central Station",
    sectionName: "Contact",
    description: "Connection hub to reach out",
    href: "#contact",
    ariaLabel: "Go to Contact section",
    hotspotPosition: { top: "85%", left: "55%", width: "12%", height: "10%" },
    labelPosition: { top: "-40px", left: "50%" }
  }
];

const DataCityIllustration = () => {
  return (
    <div className="city-map-container">
      {/* The Map Background Layer */}
      <img 
        src="/assets/data-city-map-v2.png" 
        alt="Annie's Data City Map" 
        className="city-map-image"
      />

      {/* The Interactive Hotspots Layer */}
      {mapSections.map((section) => (
        <a 
          key={section.id}
          href={section.href}
          className="map-hotspot"
          aria-label={section.ariaLabel}
          style={section.hotspotPosition}
        >
          {/* Label positioning uses a stable transform system relative to hotspot center */}
          <div className="hotspot-label" style={section.labelPosition}>
            <span className="label-creative">{section.creativeName}</span>
            <span className="label-section">{section.sectionName}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DataCityIllustration;
