import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import MuseumPlaceholder from './MuseumPlaceholder';

export const TraditionCTA: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <section className="tradition-closing-cta-section">
      <div className="tradition-container">
        
        <div className="closing-cta-card">
          {/* Scenic Background / Illustration Placeholder */}
          <div className="closing-cta-visual">
            <MuseumPlaceholder
              title="Pandharpur Temple at Sunset"
              subtitle="The golden spire of Vitthal Mandir reflected upon the holy Chandrabhaga"
              icon="fa-solid fa-gopuram"
              aspectRatio="21 / 9"
            />
          </div>

          <div className="closing-cta-content-overlay">
            <div className="cta-icon-ornament">
              <span>🚩</span>
            </div>

            <h2 className="closing-cta-title">Experience the Wari</h2>
            <p className="closing-cta-subtitle">
              Explore the Saints, Palkhis and the Living Tradition.
            </p>

            <div className="closing-cta-actions">
              <button 
                className="btn-explore-palkhis-cta"
                onClick={() => navigateTo('/palkhis')}
              >
                <span>Explore the Palkhis</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
              
              <button 
                className="btn-back-home-secondary"
                onClick={() => navigateTo('/')}
              >
                <i className="fa-solid fa-house"></i>
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TraditionCTA;
