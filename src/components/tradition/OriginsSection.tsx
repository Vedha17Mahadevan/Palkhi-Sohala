import React from 'react';

const sunsetPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png';
const dnyaneshwarImg = '/images/saints/dnyaneshwar.jpg';
const tukaramImg = '/images/saints/tukaram.jpeg';
const eknathImg = '/images/saints/eknath.jpg';
const pundalikImg = '/images/saints/pundalik.webp';
const modernWariImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917678/modern_wari.webp';

interface Milestone {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

const EVOLUTION_MILESTONES: Milestone[] = [
  {
    id: 'pundalik',
    name: 'Bhakta Pundalik',
    subtitle: 'The beginning of the sacred journey',
    image: pundalikImg,
  },
  {
    id: 'dnyaneshwar',
    name: 'Sant Dnyaneshwar',
    subtitle: 'Spread Bhagavata Dharma and united society',
    image: dnyaneshwarImg,
  },
  {
    id: 'eknath',
    name: 'Sant Eknath',
    subtitle: 'Strengthened and preserved the tradition',
    image: eknathImg,
  },
  {
    id: 'tukaram',
    name: 'Sant Tukaram Maharaj',
    subtitle: 'Expanded devotion through Abhangs',
    image: tukaramImg,
  },
  {
    id: 'modern-wari',
    name: 'Present Day Wari',
    subtitle: 'Millions continue the living tradition',
    image: modernWariImg,
  },
];

export const OriginsSection: React.FC = () => {
  return (
    <section id="origins-content" className="tradition-section tradition-origins-section chapter-origins-editorial">
      
      {/* Subtle Faded Heritage Margin Watermarks (Opacity ~3%) */}
      <div className="editorial-margin-watermark left" aria-hidden="true">
        <span className="watermark-flower">❀</span>
        <div className="watermark-rule"></div>
        <span className="watermark-dot"></span>
        <span className="watermark-dot"></span>
        <span className="watermark-dot"></span>
        <div className="watermark-rule"></div>
        <span className="watermark-flower">❀</span>
      </div>
      <div className="editorial-margin-watermark right" aria-hidden="true">
        <span className="watermark-tilak">॥</span>
        <div className="watermark-rule"></div>
        <span className="watermark-motif">पंढरी</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        
        {/* Section Header */}
        <div className="origins-header-block text-center">
          <span className="chapter-badge-pill">Chapter 01 • Origins of the Wari</span>
          <h2 className="tradition-section-heading centered">The Tradition of the Pandharpur Wari</h2>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* 1. Historical Foundation: Unified Spread Component */}
        <div className="origins-foundation-spread">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="foundation-content-grid">
            <div className="foundation-text-pane">
              <span className="origins-section-label">Historical Foundation</span>
              <p className="origins-lead-text">
                The tradition of undertaking the Wari (pilgrimage) to Pandharpur on foot is very ancient. Historical references indicate that it existed as early as the 13th century.
              </p>
              
              <div className="foundation-era-inline-badge">
                <span className="era-badge-dot">●</span>
                <span className="era-badge-text">13th Century Historical Records</span>
              </div>
            </div>

            <div className="foundation-media-pane">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={sunsetPilgrimageImg} 
                  alt="The Tradition of the Pandharpur Wari" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider: Section Transition */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">❖ ॥ पंढरीची वारी ॥ ❖</span>
          <span className="separator-line"></span>
        </div>

        {/* 2. The Keepers of the Tradition: Parchment Profile Cards with Gold Corners */}
        <div className="keepers-section">
          <div className="keepers-header text-center">
            <span className="origins-section-label">Devotional Lineage</span>
            <h3 className="keepers-section-title">The Keepers of the Tradition</h3>
            <div className="divider-split-gold center mini"></div>
          </div>

          <div className="keepers-profile-grid">
            {/* Left Card: Sant Dnyaneshwar */}
            <div className="saint-profile-card parchment-card">
              <div className="card-corner-ornament tl">❦</div>
              <div className="card-corner-ornament tr">❦</div>
              
              <div className="profile-card-top">
                <div className="profile-avatar-frame">
                  <img 
                    src={dnyaneshwarImg} 
                    alt="Sant Dnyaneshwar" 
                    className="profile-avatar-img"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="avatar-gold-ring"></div>
                </div>
                <div className="profile-identity">
                  <h4 className="profile-saint-name">Sant Dnyaneshwar</h4>
                </div>
              </div>

              <div className="profile-card-body">
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    The family of Sant Dnyaneshwar had a long-standing tradition of participating in the Wari. Records mention that his father also undertook this pilgrimage.
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    Sant Dnyaneshwar carried the message of the Bhagavata Dharma and united people of all castes and communities by encouraging them to take part in the Wari together.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Sant Tukaram Maharaj */}
            <div className="saint-profile-card parchment-card">
              <div className="card-corner-ornament tl">❦</div>
              <div className="card-corner-ornament tr">❦</div>

              <div className="profile-card-top">
                <div className="profile-avatar-frame">
                  <img 
                    src={tukaramImg} 
                    alt="Sant Tukaram Maharaj" 
                    className="profile-avatar-img"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="avatar-gold-ring"></div>
                </div>
                <div className="profile-identity">
                  <h4 className="profile-saint-name">Sant Tukaram Maharaj</h4>
                </div>
              </div>

              <div className="profile-card-body">
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    Sant Tukaram Maharaj's family also followed the custom of undertaking the Wari.
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    This inclusive tradition was later continued and strengthened by great saints such as Sant Eknath, Sant Tukaram who preserved and spread the Warkari tradition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider: Section Transition */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">❖</span>
          <span className="separator-line"></span>
        </div>

        {/* 3. The Legacy Section: Horizontal Visual Timeline */}
        <div className="origins-legacy-section">
          {/* Faded Background Motifs (2-3% opacity) */}
          <div className="legacy-faded-bg-motifs" aria-hidden="true">
            <div className="faded-tilak-symbol">॥</div>
            <div className="faded-mandala-circle">✺</div>
          </div>

          {/* Heading */}
          <div className="legacy-header text-center">
            <span className="origins-section-label">Devotional Evolution</span>
            <h3 className="legacy-section-title">The Legacy</h3>
          </div>

          {/* Legacy Description */}
          <div className="legacy-description-wrap text-center">
            <p className="legacy-editorial-text">
              Sant Dnyaneshwar's extraordinary work helped the Warkari movement gain widespread influence throughout Maharashtra. The historical journey of the Warkari tradition is considered to begin with Bhakta Pundalik, and its development can be divided into different historical periods.
            </p>
          </div>

          {/* Small Decorative Divider */}
          <div className="legacy-timeline-divider" aria-hidden="true">
            <span className="timeline-divider-line"></span>
            <span className="timeline-divider-motif">❖</span>
            <span className="timeline-divider-line"></span>
          </div>

          {/* Horizontal Visual Timeline */}
          <div className="legacy-timeline-viewport">
            <div className="legacy-timeline-track">
              {/* Continuous Gold Connecting Axis Line */}
              <div className="timeline-connecting-axis" aria-hidden="true"></div>

              {EVOLUTION_MILESTONES.map((milestone) => (
                <div key={milestone.id} className="timeline-milestone-node">
                  {/* Decorative Diamond Marker sitting on the axis */}
                  <div className="milestone-diamond-marker" aria-hidden="true">◆</div>

                  {/* Circular Portrait with Gold Border */}
                  <div className="milestone-portrait-container">
                    <div className="milestone-portrait-frame">
                      <img 
                        src={milestone.image} 
                        alt={milestone.name} 
                        className="milestone-portrait-img"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="portrait-gold-ring"></div>
                    </div>
                    <div className="portrait-soft-glow" aria-hidden="true"></div>
                  </div>

                  {/* Milestone Name and Subtitle */}
                  <div className="milestone-text-block text-center">
                    <h4 className="milestone-saint-name">{milestone.name}</h4>
                    <p className="milestone-subtitle-text">{milestone.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Saffron Pill */}
          <div className="legacy-closing-wrap text-center">
            <div className="legacy-saffron-pill">
              <span className="pill-sacred-text">॥ ज्ञानोबा माउली तुकाराम ॥</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OriginsSection;
