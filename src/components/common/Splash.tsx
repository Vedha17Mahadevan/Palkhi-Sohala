import React from 'react';
import { getCloudinaryUrl, getCloudinarySrcSet } from '../../config/cloudinary';

interface SplashProps {
  isFadingOut: boolean;
  onDismiss?: () => void;
}

export const Splash: React.FC<SplashProps> = ({ isFadingOut, onDismiss }) => {
  const splashFootSrc = getCloudinaryUrl('splash foot', { width: 1200, dpr: false });
  const splashFootSrcSet = getCloudinarySrcSet('splash foot', [400, 800, 1200, 1600]);

  return (
    <div 
      id="splash-screen" 
      className={isFadingOut ? 'fade-out' : ''}
      onClick={onDismiss}
      style={{ cursor: 'pointer' }}
      title="Click anywhere to skip intro"
    >
      <img
        src={getCloudinaryUrl('splash_bg', { width: 1400, dpr: false })}
        srcSet={getCloudinarySrcSet('splash_bg', [640, 1000, 1400])}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="splash-bg"
        loading="eager"
        decoding="async"
        {...({ fetchpriority: 'high' } as any)}
      />
      <div className="splash-overlay"></div>

      <div className="splash-content">
        {/* Top Center Logo & Sub-tagline */}
        <div className="splash-top">
          <img
            src={getCloudinaryUrl('RKSSTGM text maroon', { width: 580, dpr: false })}
            srcSet={getCloudinarySrcSet('RKSSTGM text maroon', [320, 580])}
            sizes="(max-width: 600px) 90vw, 580px"
            alt="RadhaKrishna Satsangam Logo"
            className="rks-logo"
            width={580}
            height={88}
            loading="eager"
            decoding="async"
            {...({ fetchpriority: 'high' } as any)}
          />
          <span className="presents-text">presents</span>
        </div>

        {/* Exact Center Tilak Loader */}
        <div className="splash-center">
          <div className="glow-bg-wrap" aria-hidden="true">
            <div className="glow-bg"></div>
          </div>
          <div className="center-loader-group">
            <div className="vitthal-icon-container">
              {/* Vitthal Forehead Tilak PNG */}
              <img
                src={getCloudinaryUrl('Vitthal tilak', { width: 160, dpr: false })}
                srcSet={getCloudinarySrcSet('Vitthal tilak', [80, 160])}
                sizes="80px"
                alt="Lord Vitthal Forehead Tilak"
                className="vitthal-icon"
                width={80}
                height={80}
                decoding="async"
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
                src={splashFootSrc}
                srcSet={splashFootSrcSet}
                sizes="100vw"
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
                decoding="async"
              />
              <img
                src={splashFootSrc}
                srcSet={splashFootSrcSet}
                sizes="100vw"
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
                decoding="async"
              />
              <img
                src={splashFootSrc}
                srcSet={splashFootSrcSet}
                sizes="100vw"
                alt="Warkari Pilgrims silhouette marching to Pandharpur"
                className="warkari-img"
                width={1586}
                height={120}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
