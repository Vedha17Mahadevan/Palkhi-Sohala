import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import TraditionHero from '../../components/tradition/TraditionHero';
import MuseumPlaceholder from '../../components/tradition/MuseumPlaceholder';
import { CHAPTERS_DATA } from '../../components/tradition/chaptersData';

const sunsetPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png';

export const TraditionOverview: React.FC = () => {
  const { navigateTo } = useRouter();

  const handleNavigate = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tradition-overview-page">
      {/* 1. Existing Hero Section */}
      <TraditionHero />

      {/* 2. Concise Introduction (2–3 paragraphs only) */}
      <section id="introduction" className="tradition-section tradition-brief-intro-section">
        <div className="tradition-container">
          <div className="museum-section-tag-wrap text-center">
            <span className="museum-tag">The Living Continuum</span>
            <h2 className="tradition-section-heading centered">An Ancient Ocean of Devotion</h2>
            <div className="divider-split-gold center small"></div>
          </div>

          <div className="tradition-two-col intro-compact-grid">
            <div className="tradition-text-col">
              <p className="tradition-paragraph lead-p">
                The Pandharpur Wari is not merely a pedestrian pilgrimage; it is an unbroken 700-year spiritual democracy that has breathed life into the soul of Maharashtra.
              </p>
              <p className="tradition-paragraph">
                Centuries before modern declarations of human equality, the Bhakti movement brought together saint-philosophers, artisans, farmers, and scholars on a single barefoot path. Shedding all worldly hierarchies, devotees walk hundreds of kilometers under the monsoon sky, united by the rhythmic choral chant of <em>“Gyanba-Tukaram”</em>.
              </p>
              <p className="tradition-paragraph">
                Every step is consecrated as an act of prayer, turning open highways into sanctuaries of compassion, unconditional hospitality, and selfless community fellowship.
              </p>

              <div className="intro-cta-wrapper">
                <button 
                  className="btn-begin-journey-primary"
                  onClick={() => handleNavigate('/tradition/origins')}
                >
                  <span>Begin the Journey • Chapter 01</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>

            <div className="tradition-media-col position-relative">
              <div className="saffron-particles-overlay" aria-hidden="true">
                <span className="saffron-particle p-1"></span>
                <span className="saffron-particle p-2"></span>
                <span className="saffron-particle p-3"></span>
                <span className="saffron-particle p-4"></span>
              </div>

              <MuseumPlaceholder
                title=""
                subtitle=""
                aspectRatio="4 / 3"
                imageSrc={sunsetPilgrimageImg}
                imageAlt="Warkaris walking in devotion with saffron Bhagva flags towards Pandharpur at sunset"
                hideCaption={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journey Preview: "Explore the Journey" */}
      <section id="explore-chapters" className="tradition-section tradition-journey-preview-section">
        <div className="tradition-container">
          <div className="museum-section-tag-wrap text-center">
            <span className="museum-tag">The Table of Chapters</span>
            <h2 className="tradition-section-heading centered">Explore the Journey</h2>
            <p className="tradition-section-subheading">
              Discover the history, sacred journeys, and living traditions of the Pandharpur Wari.
            </p>
            <div className="divider-split-gold center small"></div>
          </div>

          {/* Chapter Preview Cards */}
          <div className="journey-chapters-grid">
            {CHAPTERS_DATA.map((chap) => (
              <div 
                key={chap.id}
                className="journey-preview-card"
                onClick={() => handleNavigate(chap.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleNavigate(chap.path); }}
              >
                <div className="preview-card-media">
                  <img 
                    src={chap.image} 
                    alt={chap.title} 
                    className="preview-card-img"
                    loading="lazy"
                  />
                  <div className="preview-card-overlay"></div>
                  <span className="preview-chap-num">Chapter {chap.number}</span>
                </div>

                <div className="preview-card-body">
                  <span className="preview-sub-tag">{chap.subtitle}</span>
                  <h3 className="preview-chap-title">{chap.title}</h3>
                  <p className="preview-chap-desc">{chap.shortDesc}</p>

                  <div className="preview-card-footer">
                    <span className="preview-link-text">Explore Chapter</span>
                    <div className="preview-arrow-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default TraditionOverview;
