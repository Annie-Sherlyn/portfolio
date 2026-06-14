import DataCityIllustration from './DataCityIllustration';
import './InteractiveCityMap.css';

const SPLINE_SCENE_URL = ''; // TODO: Add final Spline scene URL when the 3D city model is ready.

const InteractiveCityMap = () => {
  return (
    <div className="map-system-container" role="region" aria-label="Interactive Portfolio City Map">
      {/* Layer 1: The Interactive Map (Spline or SVG Fallback) */}
      <div className="spline-3d-canvas-wrapper">
        {SPLINE_SCENE_URL ? (
          <div className="loading-spline">Loading 3D Map...</div>
          // TODO: Use @splinetool/react-spline here once URL is ready
        ) : (
          <DataCityIllustration />
        )}
      </div>
    </div>
  );
};

export default InteractiveCityMap;
