import React from 'react';

export const WariLegacy: React.FC = () => {
  return (
    <section id="today" className="tradition-section tradition-today-section chapter-museum-legacy">
      <div className="tradition-container">
        
        {/* Curated Museum Tag */}
        <div className="legacy-header-block text-center">
          <span className="museum-tag legacy-tag">Archive Gallery 07 • The Living Continuum</span>
          <h2 className="tradition-section-heading centered">The Wari in the 21st Century</h2>
          <p className="tradition-section-subheading">
            How an 800-year-old pilgrimage thrives today as the world’s largest self-organized peaceful walking gathering.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* 1. Immersive Panoramic Exhibition Showcase */}
        <div className="wari-today-panoramic-card">
          <div 
            className="today-panoramic-img"
            style={{ backgroundImage: `url('https://res.cloudinary.com/ayj5m59a/image/upload/v1790917678/modern_wari.webp')` }}
          >
            <div className="panoramic-gradient-overlay"></div>
            <div className="panoramic-floating-caption">
              <span className="p-tag">Living Heritage</span>
              <h3 className="p-heading">An Infinite Ocean of Humanity Moving in Unison</h3>
              <p className="p-sub">Twenty lakh barefoot pilgrims navigating modern expressways under monsoon skies.</p>
            </div>
          </div>
        </div>

        {/* 2. Phenomenal Humanity Statistics Grid */}
        <div className="legacy-stats-grid stats-animated">
          
          <div className="legacy-stat-card stat-delay-1">
            <div className="stat-card-gold-accent"></div>
            <div className="stat-number-wrap">
              <span className="stat-counter">15–20</span>
              <span className="stat-unit">Lakh</span>
            </div>
            <div className="stat-title">Walking Pilgrims</div>
            <p className="stat-caption">Largest peaceful gathering of egalitarian pedestrian fellowship on Earth, with zero entry fees or tickets.</p>
          </div>

          <div className="legacy-stat-card stat-delay-2">
            <div className="stat-card-gold-accent"></div>
            <div className="stat-number-wrap">
              <span className="stat-counter">300</span>
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-title">Registered Dindis</div>
            <p className="stat-caption">Self-governing troupes maintaining unbroken lineage, logistical self-sufficiency, and rhythmic cohesion.</p>
          </div>

          <div className="legacy-stat-card stat-delay-3">
            <div className="stat-card-gold-accent"></div>
            <div className="stat-number-wrap">
              <span className="stat-counter">0</span>
              <span className="stat-unit">Hierarchy</span>
            </div>
            <div className="stat-title">Universal Mauli</div>
            <p className="stat-caption">Every single pilgrim, young or old, CEO or daily laborer, is addressed only as “Mauli” (loving mother).</p>
          </div>

          <div className="legacy-stat-card stat-delay-4 highlight-destination">
            <div className="stat-card-gold-accent"></div>
            <div className="stat-number-wrap">
              <span className="stat-counter">100</span>
              <span className="stat-suffix">%</span>
            </div>
            <div className="stat-title">Free Hospitality</div>
            <p className="stat-caption">Villagers along hundreds of kilometers feed and house twenty lakh travelers entirely through voluntary love.</p>
          </div>

        </div>

        {/* 3. Modern & Future Dimensions of the Wari */}
        <div className="modern-dimensions-grid">
          
          <div className="modern-dim-card">
            <div className="dim-icon-circle green">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <h4 className="dim-title">Nirmal Wari &amp; Green Pilgrimage</h4>
            <p className="dim-desc">
              Extensive ecological drives involving mobile eco-toilets, zero single-use plastic campaigns, and post-pilgrimage seed sowing across the Dive Ghat hills to ensure the route blossoms with greenery.
            </p>
          </div>

          <div className="modern-dim-card">
            <div className="dim-icon-circle blue">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h4 className="dim-title">Digital Heritage &amp; GPS Trackers</h4>
            <p className="dim-desc">
              Real-time satellite tracking of the holy Palkhis allows emergency medical teams, water tankers, and remote families to monitor the exact progress and route stops of the processions.
            </p>
          </div>

          <div className="modern-dim-card">
            <div className="dim-icon-circle gold">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h4 className="dim-title">Youth &amp; Global Academics</h4>
            <p className="dim-desc">
              Software engineers from Pune and Mumbai, college students, and global anthropologists from Oxford and Harvard walk barefoot to study the world’s most successful model of decentralized self-management.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WariLegacy;
