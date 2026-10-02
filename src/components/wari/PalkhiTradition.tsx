import React from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { useRouter } from '../../context/NavigationContext';

export const PalkhiTradition: React.FC = () => {
  const { navigateTo } = useRouter();
  return (
    <section id="palkhi-tradition" className="about-section palkhi-tradition-section">
      {/* Main Manuscript/Background Section */}
      <div className="about-manuscript-wrapper">
        {/* Background texture overlay */}
        <div className="heritage-parchment-bg"></div>

        <div className="section-container heritage-container-about">
          <div className="about-two-column-layout palkhi-two-column-layout">
            {/* Left Column: Text Content (mirrors Warkari's right-column text style but on the left) */}
            <div className="palkhi-text-col reveal">
              <span className="section-tag" style={{ marginBottom: '12px', display: 'block' }}>The Sacred Palkhi Tradition</span>
              <h2 className="warkari-tradition-heading">What is the<br />Palkhi Tradition?</h2>
              
              <p className="warkari-tradition-body">
                The sacred Palkhi tradition is a unique, 700-year-old congregational pilgrimage that beautifully captures Maharashtra's rich spiritual heritage. Initiated by Sant Dnyaneshwar Maharaj's devotees and later refined by Sant Tukaram Maharaj's son, it involves carrying the padukas (sacred sandals) of the saints in decorated palanquins (Palkhis) from their resting shrines to Pandharpur.
              </p>
              
              <div className="warkari-highlight-quote">
                <span className="quote-symbol">“</span>
                <span className="marathi-quote-text">सुंदर ते ध्यान उभे विटेवरी</span>
                <span className="quote-symbol">”</span>
              </div>
              
              <p className="warkari-tradition-body" style={{ marginTop: '24px' }}>
                Each Palkhi is accompanied by thousands of devotees, organized into disciplined groups called Dindis. Along the journey, pilgrims sing abhangas, play traditional instruments, and perform dances of joy, creating a moving tapestry of absolute devotion and community spirit.
              </p>

              {/* CTA Button to Full Tradition History */}
              <div className="tradition-cta-wrap">
                <button 
                  className="btn-tradition-cta"
                  onClick={() => navigateTo('/tradition')}
                  aria-label="Explore the History of Palkhi Tradition"
                >
                  <span>Explore the History</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>

            {/* Right Column: Temple Artwork */}
            <div className="palkhi-image-col">
              <img
                src={getCloudinaryUrl('temple right', { width: 900 })}
                alt="Pandharpur Vitthal Temple spiritual illustration"
                className="about-kids-artwork"
                loading="lazy"
                decoding="async"
                width={1023}
                height={1537}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalkhiTradition;
