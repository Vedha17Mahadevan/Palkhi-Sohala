import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { useRouter } from '../../context/NavigationContext';

export const WarkariTradition: React.FC = () => {
  const { navigateTo } = useRouter();
  const [isIntersected, setIsIntersected] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about-wari" ref={aboutRef} className="about-section">
      {/* Main Manuscript/Background Section */}
      <div className="about-manuscript-wrapper">
        {/* Background texture overlay */}
        <div className="heritage-parchment-bg"></div>

        <div className="section-container heritage-container-about">
          <div className="about-two-column-layout">
            {/* Left Column: Kids Artwork */}
            <div className="about-left-column">
              <img
                src={getCloudinaryUrl('kids left', { width: 900 })}
                alt="Warkari children walking in traditional pilgrimage attire"
                className="about-kids-artwork"
                loading="lazy"
                decoding="async"
                width={1054}
                height={1492}
              />
            </div>
            
            {/* Right Column: Text Content */}
            <div className={`about-right-column animate-trigger ${isIntersected ? 'animate-active' : ''}`}>
              <span className="section-tag" style={{ marginBottom: '12px', display: 'block' }}>The Sacred Warkari Tradition</span>
              <h2 className="warkari-tradition-heading">What is the<br />Warkari Tradition?</h2>
              
              <p className="warkari-tradition-body">
                The Warkari tradition is one of Maharashtra's oldest and most cherished devotional movements, rooted in faith, humility, equality, and selfless service. Every year, millions of devotees undertake the sacred Wari pilgrimage on foot to Pandharpur, carrying the sacred Palkhis of Sant Dnyaneshwar Maharaj, Sant Tukaram Maharaj, and other saints.
              </p>
              
              <div className="warkari-highlight-quote">
                <span className="quote-symbol">“</span>
                <span className="marathi-quote-text">विठ्ठल विठ्ठल जय हरी विठ्ठल</span>
                <span className="quote-symbol">”</span>
              </div>
              
              <p className="warkari-tradition-body" style={{ marginTop: '24px' }}>
                Ashadhi Ekadashi marks the spiritual culmination of this divine journey. United by this timeless chant, the Warkaris walk together beyond differences of caste, wealth, or status, celebrating devotion, compassion, and the eternal bond between Lord Vitthal and His devotees.
              </p>
              
              {/* CTA Button to Full Tradition History */}
              <div className="tradition-cta-wrap">
                <button 
                  className="btn-tradition-cta"
                  onClick={() => navigateTo('/tradition')}
                  aria-label="Explore the History of Warkari Tradition"
                >
                  <span>Explore the History</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarkariTradition;
