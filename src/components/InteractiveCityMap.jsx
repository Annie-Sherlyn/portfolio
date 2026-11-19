import DataCityIllustration from './DataCityIllustration';
import './InteractiveCityMap.css';

const InteractiveCityMap = () => {
  return (
    <div className="map-system-container" role="region" aria-label="Interactive Portfolio City Map">
      {/* Layer 1: The Interactive Map (Spline or SVG Fallback) */}
      <div className="spline-3d-canvas-wrapper">
        <DataCityIllustration />
      </div>
    </div>
  );
};

export default InteractiveCityMap;
