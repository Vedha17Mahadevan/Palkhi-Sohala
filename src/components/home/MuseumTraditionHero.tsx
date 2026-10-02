import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import { prefetchRoute } from '../../utils/prefetchUtils';

export const MuseumTraditionHero: React.FC = React.memo(() => {
  const { navigateTo } = useRouter();

  return (
    <section className="museum-hero-section reveal" id="tradition-portal">
      <div className="section-container">
        <div className="museum-hero-card">
          {/* Decorative Museum Corner Accents */}
          <div className="museum-corner museum-corner-tl" aria-hidden="true"></div>
          <div className="museum-corner museum-corner-tr" aria-hidden="true"></div>
          <div className="museum-corner museum-corner-bl" aria-hidden="true"></div>
          <div className="museum-corner museum-corner-br" aria-hidden="true"></div>

          {/* Faint Sacred Mandala Watermark */}
          <div className="museum-mandala-watermark" aria-hidden="true"></div>

          {/* Floating Sacred Saffron & Dust Particles */}
          <div className="museum-dust-particles" aria-hidden="true">
            <span className="dust-particle p1"></span>
            <span className="dust-particle p2"></span>
            <span className="dust-particle p3"></span>
            <span className="dust-particle p4"></span>
            <span className="dust-particle p5"></span>
            <span className="dust-particle p6"></span>
          </div>

          <div className="museum-split-layout">
            {/* Left Side (40%): Editorial Museum Panel */}
            <div className="museum-content-panel">
              {/* Large Heading */}
              <h2 className="museum-heading">
                THE TRADITION OF THE<br />
                <span className="museum-heading-gold">PANDHARPUR WARI</span>
              </h2>

              <div className="museum-divider-line"></div>

              {/* Small Description */}
              <p className="museum-description">
                Journey through over seven centuries of devotion, saints, traditions and living heritage that continue to unite millions of pilgrims every year.
              </p>

              {/* Action Button */}
              <div className="museum-btn-group">
                <button 
                  className="museum-btn-primary" 
                  onClick={() => navigateTo('/tradition')}
                  onMouseEnter={() => prefetchRoute('/tradition')}
                  aria-label="Explore the Exhibition"
                >
                  <span>Explore the Exhibition</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>

            {/* Right Side (60%): Cinematic Wari Exhibition Artwork */}
            <div className="museum-visual-panel">
              <div className="museum-image-frame">
                <img 
                  src="https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/tradition.png" 
                  alt="Pandharpur Wari Tradition Digital Exhibition artwork" 
                  className="museum-hero-image"
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={560}
                />
                {/* Soft feather fade into left deep maroon panel */}
                <div className="museum-fade-overlay" aria-hidden="true"></div>
                {/* Subtle golden-hour warm ambient overlay */}
                <div className="museum-warm-overlay" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MuseumTraditionHero;
