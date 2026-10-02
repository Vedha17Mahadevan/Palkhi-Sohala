import React from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';

interface SplashProps {
  isFadingOut: boolean;
  onDismiss?: () => void;
}

export const Splash: React.FC<SplashProps> = ({ isFadingOut, onDismiss }) => {
  return (
    <div 
      id="splash-screen" 
      className={isFadingOut ? 'fade-out' : ''}
      onClick={onDismiss}
      style={{ cursor: 'pointer' }}
      title="Click anywhere to skip intro"
    >
      <div className="splash-bg"></div>
      <div className="splash-overlay"></div>

      <div className="splash-content">
        {/* Top Center Logo & Sub-tagline */}
        <div className="splash-top">
          <img
            src={getCloudinaryUrl('RKSSTGM text maroon', { width: 580 })}
            alt="RadhaKrishna Satsangam Logo"
            className="rks-logo"
            width={580}
            height={88}
          />
          <span className="presents-text">presents</span>
        </div>

        {/* Exact Center Tilak Loader */}
        <div className="splash-center">
          <div className="glow-bg"></div>
          <div className="center-loader-group">
            <div className="vitthal-icon-container">
              {/* Vitthal Forehead Tilak PNG */}
              <img
                src={getCloudinaryUrl('Vitthal tilak', { width: 240 })}
                alt="Lord Vitthal Forehead Tilak"
                className="vitthal-icon"
                width={80}
                height={80}
              />
            </div>

            {/* Horizontal Loading Bar */}
            <div className="progress-bar-container">
              <div className="progress-bar-track">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Left to Right Marquee */}
        <div className="splash-bottom">
          <div className="warkari-footer">
            <div className="warkari-track">
              <img
                src={getCloudinaryUrl('splash foot', { width: 1600 })}
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
              />
              <img
                src={getCloudinaryUrl('splash foot', { width: 1600 })}
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
              />
              <img
                src={getCloudinaryUrl('splash foot', { width: 1600 })}
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
