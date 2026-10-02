import React from 'react';

const shivaPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/Shiva_s_Golden-Hour_Pilgrimage.png';
const sunsetPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png';

// Dedicated images for Lord Shiva's journey milestones
const mountKailashImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933676/Mount_Kailash.png';
const longingImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933967/longing.png';
const firstWariImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933676/First_wari.png';

interface Milestone {
  id: string;
  name: string;
  description: string;
  image: string;
}

const SHIVA_TIMELINE_MILESTONES: Milestone[] = [
  {
    id: 'kailash',
    name: 'Mount Kailash',
    description: "Leaving the sacred abode of Kailash after hearing of Lord Vitthal's divine manifestation at Pandharpur.",
    image: mountKailashImg,
  },
  {
    id: 'darshan-longing',
    name: 'Longing for Darshan',
    description: 'Filled with devotion, Lord Shiva desired to behold Lord Vitthal standing upon the brick offered by Bhakta Pundalik.',
    image: longingImg,
  },
  {
    id: 'ascetic-journey',
    name: 'The Ascetic Journey',
    description: 'Disguised as a wandering renunciant (sadhu), he began the pilgrimage on foot towards Pandharpur.',
    image: shivaPilgrimageImg,
  },
  {
    id: 'pandharpur-arrival',
    name: 'Arrival at Pandharpur',
    description: 'Lord Shiva reached the holy town to receive the divine darshan of Lord Vitthal.',
    image: sunsetPilgrimageImg,
  },
  {
    id: 'first-warkari',
    name: 'The First Warkari',
    description: 'Because of this sacred pilgrimage, Lord Shiva is traditionally revered as the very first Warkari.',
    image: firstWariImg,
  },
];

export const ShivaWarkariStory: React.FC = () => {
  return (
    <section id="shiva-content" className="tradition-section tradition-origins-section chapter-origins-editorial">
      
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
        <span className="watermark-motif">कैलास</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        
        {/* Section Header */}
        <div className="origins-header-block text-center">
          <span className="chapter-badge-pill">Chapter 02 • Lord Shiva – The First Warkari</span>
          <h2 className="tradition-section-heading centered">Lord Shiva – the First Warkari</h2>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* 1. Introductory Content: Exact Chapter 1 Foundation Spread Layout */}
        <div className="origins-foundation-spread">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="foundation-content-grid shiva-foundation-grid">
            <div className="foundation-text-pane">
              <div>
                <span className="origins-section-label">Ancient Legends &amp; Beliefs</span>
                
                <div className="shiva-intro-text-flow">
                  <p className="origins-lead-text">
                    According to ancient legends and the beliefs of the Warkari tradition, Lord Shiva (Mahadev) is regarded as the first Warkari. It is believed that when Lord Vishnu, in the form of Lord Vitthal, stood on the brick offered by the devotee Pundalik, Lord Shiva longed to have his divine darshan.
                  </p>
                  <p className="origins-lead-text">
                    Leaving Mount Kailash, he set out for Pandharpur in the guise of a wandering ascetic. Lord Shiva is believed to have undertaken the pilgrimage to Pandharpur dressed as a renunciant (sadhu). For this reason, he is traditionally revered as the first Warkari.
                  </p>
                </div>
              </div>
              
              <div className="foundation-era-inline-badge">
                <span className="era-badge-dot">●</span>
                <span className="era-badge-text">The Sacred Pilgrimage</span>
              </div>
            </div>

            <div className="foundation-media-pane">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={shivaPilgrimageImg} 
                  alt="Lord Shiva – The First Warkari" 
                  className="foundation-blend-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider Transition */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">────────── ❖ ॥ ॐ नमः शिवाय ॥ ❖ ──────────</span>
          <span className="separator-line"></span>
        </div>

        {/* 2. Timeline Section: Exact Chapter 1 Component Updated for Lord Shiva's Journey */}
        <div className="origins-legacy-section">
          {/* Faded Background Motifs (2-3% opacity) */}
          <div className="legacy-faded-bg-motifs" aria-hidden="true">
            <div className="faded-tilak-symbol">ॐ</div>
            <div className="faded-mandala-circle">✺</div>
          </div>

          {/* Heading */}
          <div className="legacy-header text-center">
            <span className="origins-section-label">Devotional Evolution</span>
            <h3 className="legacy-section-title">The Sacred Journey</h3>
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

              {SHIVA_TIMELINE_MILESTONES.map((milestone) => (
                <div key={milestone.id} className="timeline-milestone-node">
                  {/* Decorative Diamond Marker sitting on the axis */}
                  <div className="milestone-diamond-marker" aria-hidden="true">◆</div>

                  {/* Circular Portrait with Gold Border */}
                  <div className="milestone-portrait-container shiva-milestone-portrait">
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

                  {/* Milestone Name and Rich Description */}
                  <div className="milestone-text-block text-center">
                    <h4 className="milestone-saint-name">{milestone.name}</h4>
                    <p className="milestone-subtitle-text shiva-rich-desc">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Saffron Pill */}
          <div className="legacy-closing-wrap text-center">
            <div className="legacy-saffron-pill">
              <span className="pill-sacred-text">॥ हर हर महादेव • जय जय विठ्ठल ॥</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShivaWarkariStory;
