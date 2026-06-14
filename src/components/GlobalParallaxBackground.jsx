import { useMouseParallax } from '../hooks/useMouseParallax';
import './GlobalParallaxBackground.css';

const GlobalParallaxBackground = () => {
  const { x, y } = useMouseParallax();

  // Factors control how much each layer moves relative to cursor
  // Higher factor = more movement
  const layer1Style = { transform: `translate(${x * -10}px, ${y * -10}px)` };
  const layer2Style = { transform: `translate(${x * 15}px, ${y * 15}px)` };
  const layer3Style = { transform: `translate(${x * -25}px, ${y * -25}px)` };

  return (
    <div className="global-parallax-wrapper" aria-hidden="true">
      {/* Layer 1: Base Map Grid */}
      <div className="parallax-layer layer-base" style={layer1Style}>
        <div className="bg-map-grid-global"></div>
      </div>
      
      {/* Layer 2: Topographic Contour Lines */}
      <div className="parallax-layer layer-mid" style={layer2Style}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 200 Q 300 50 600 400 T 1200 100 T 1800 600 T 2200 200" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.1" />
          <path d="M-100 300 Q 250 150 550 450 T 1150 200 T 1750 700 T 2200 350" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.08" />
          <path d="M-100 400 Q 200 250 500 500 T 1100 300 T 1700 800 T 2200 500" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.05" />
        </svg>
      </div>

      {/* Layer 3: Abstract Floating Nodes */}
      <div className="parallax-layer layer-top" style={layer3Style}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15%" cy="20%" r="2" fill="var(--color-primary)" opacity="0.15" />
          <circle cx="85%" cy="15%" r="1.5" fill="var(--color-accent-soft)" opacity="0.2" />
          <circle cx="75%" cy="60%" r="3" fill="var(--color-primary-hover)" opacity="0.1" />
          <circle cx="20%" cy="75%" r="2.5" fill="var(--color-mint)" opacity="0.2" />
          <circle cx="90%" cy="85%" r="1" fill="var(--color-gold)" opacity="0.2" />
          <circle cx="10%" cy="40%" r="1.5" fill="var(--color-text-muted)" opacity="0.1" />
        </svg>
      </div>
    </div>
  );
};

export default GlobalParallaxBackground;
