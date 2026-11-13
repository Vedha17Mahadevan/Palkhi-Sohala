import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const shivaPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/Shiva_s_Golden-Hour_Pilgrimage.png';
const sunsetPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png';

// Dedicated images for Lord Shiva's journey milestones
const mountKailashImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933676/Mount_Kailash.png';
const longingImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933967/longing.png';
const firstWariImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933676/First_wari.png';

interface ShivaMilestone {
  id: string;
  number: string;
  title: string;
  shortText: string;
  detailText: string;
  image: string;
}

const SHIVA_TIMELINE_MILESTONES: ShivaMilestone[] = [
  {
    id: 'kailash',
    number: '01',
    title: 'Mount Kailash',
    shortText: 'The sacred abode from which the divine journey begins.',
    detailText: "Leaving the sacred snow-clad abode of Mount Kailash upon hearing of Lord Vitthal's divine manifestation, Lord Shiva prepares to embark upon the first barefoot pilgrimage across Maharashtra.",
    image: mountKailashImg,
  },
  {
    id: 'darshan-longing',
    number: '02',
    title: 'Longing for Darshan',
    shortText: 'Moved by devotion, Lord Shiva longs to behold Lord Vitthal at Pandharpur.',
    detailText: 'Filled with profound devotion, Lord Shiva desired to behold Lord Vitthal standing patiently upon the brick offered by the devotee Bhakta Pundalik on the banks of the sacred Bhima River.',
    image: longingImg,
  },
  {
    id: 'ascetic-journey',
    number: '03',
    title: 'The Ascetic Journey',
    shortText: 'Taking the form of a wandering ascetic, Shiva sets forth towards Pandharpur.',
    detailText: 'Disguising himself as a humble renunciant ascetic (sadhu), Lord Shiva set forth on foot across the rugged plains and valleys of the Deccan, traversing hundreds of leagues in pure spiritual contemplation.',
    image: shivaPilgrimageImg,
  },
  {
    id: 'pandharpur-arrival',
    number: '04',
    title: 'Arrival at Pandharpur',
    shortText: 'Lord Shiva reaches the sacred town to receive the darshan of Lord Vitthal.',
    detailText: 'Reaching the holy pilgrimage town of Pandharpur, Lord Shiva stepped onto the sandy banks of the Chandrabhaga to receive the blessed and transcendent darshan of Lord Panduranga.',
    image: sunsetPilgrimageImg,
  },
  {
    id: 'first-warkari',
    number: '05',
    title: 'The First Warkari',
    shortText: 'Through this sacred pilgrimage, Lord Shiva is revered in the tradition as the first Warkari.',
    detailText: 'By virtue of undertaking this selfless pilgrimage on foot to behold Lord Vitthal, ancient tradition and sacred lore revere Mahadev as the primordial pioneer and First Warkari of the Pandharpur tradition.',
    image: firstWariImg,
  },
];

export const ShivaWarkariStory: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<ShivaMilestone | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Keyboard accessibility and robust background scroll-lock
  useEffect(() => {
    if (!activeMilestone) return;

    // Record exact scroll position BEFORE locking body
    const savedScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    // Prevent background scrolling without moving page
    document.body.style.overflow = 'hidden';

    // Focus close button WITHOUT scrolling the page
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus({ preventScroll: true });
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMilestone(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);

      // Guarantee the window scroll position remains exactly where it was before opening
      window.scrollTo({
        top: savedScrollY,
        behavior: 'instant' as ScrollBehavior,
      });
    };
  }, [activeMilestone]);

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
          <span className="separator-motif">❖</span>
          <span className="separator-line"></span>
        </div>

        {/* 2. Redesigned Interactive Sacred Journey Timeline */}
        <div className="origins-legacy-section shiva-interactive-section">
          {/* Faded Background Motifs (2-3% opacity) */}
          <div className="legacy-faded-bg-motifs" aria-hidden="true">
            <div className="faded-tilak-symbol">ॐ</div>
            <div className="faded-mandala-circle">✺</div>
          </div>

          {/* Heading */}
          <div className="legacy-header text-center">
            <span className="origins-section-label">Devotional Evolution</span>
            <h3 className="legacy-section-title">The Sacred Journey</h3>
            <p className="shiva-timeline-guide">
              Click any milestone along the sacred path to explore the journey in detail.
            </p>
          </div>

          {/* Small Decorative Divider */}
          <div className="legacy-timeline-divider" aria-hidden="true">
            <span className="timeline-divider-line"></span>
            <span className="timeline-divider-motif">❖</span>
            <span className="timeline-divider-line"></span>
          </div>

          {/* Horizontal / Responsive Interactive Timeline Track */}
          <div className="shiva-timeline-wrapper">
            <div className="shiva-timeline-track">
              {/* Continuous Antique-Gold Connecting Axis Line */}
              <div className="shiva-timeline-axis" aria-hidden="true"></div>

              {SHIVA_TIMELINE_MILESTONES.map((milestone) => (
                <div
                  key={milestone.id}
                  className="shiva-milestone-node"
                  onClick={() => setActiveMilestone(milestone)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMilestone(milestone);
                    }
                  }}
                  aria-label={`Milestone ${milestone.number}: ${milestone.title}. Click to view details.`}
                >
                  {/* Step Number & Diamond Marker */}
                  <div className="shiva-node-indicator">
                    <span className="shiva-node-step">{milestone.number}</span>
                    <span className="shiva-node-diamond" aria-hidden="true">◆</span>
                  </div>

                  {/* Circular Portrait with Gold Border (Refined, smaller diameter ~74px) */}
                  <div className="shiva-node-avatar-frame">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title} 
                      className="shiva-node-avatar-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="shiva-node-gold-ring" aria-hidden="true"></div>
                    <div className="shiva-node-glow" aria-hidden="true"></div>
                  </div>

                  {/* Title & Short Concise Description */}
                  <div className="shiva-node-text-wrap text-center">
                    <h4 className="shiva-node-title">{milestone.title}</h4>
                    <p className="shiva-node-short-text">{milestone.shortText}</p>
                    <span className="shiva-node-click-cue">
                      <span>Explore</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Milestone Details Modal - Mounted via Portal directly into document.body */}
      {activeMilestone && createPortal(
        <div 
          className="shiva-modal-backdrop"
          onClick={() => setActiveMilestone(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shiva-modal-title"
        >
          <div 
            className="shiva-modal-card parchment-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Ornaments */}
            <div className="card-corner-ornament tl" aria-hidden="true">❦</div>
            <div className="card-corner-ornament tr" aria-hidden="true">❦</div>
            <div className="card-corner-ornament bl" aria-hidden="true">❦</div>
            <div className="card-corner-ornament br" aria-hidden="true">❦</div>

            {/* Close Button */}
            <button 
              ref={closeBtnRef}
              type="button" 
              className="shiva-modal-close-btn"
              onClick={() => setActiveMilestone(null)}
              aria-label="Close milestone details"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            <div className="shiva-modal-grid">
              {/* Left / Top: Prominent Milestone Image */}
              <div className="shiva-modal-image-pane">
                <img 
                  src={activeMilestone.image} 
                  alt={activeMilestone.title} 
                  className="shiva-modal-featured-img"
                />
                <div className="shiva-modal-img-overlay" aria-hidden="true"></div>
                <span className="shiva-modal-pill-tag">
                  Stage {activeMilestone.number} • Sacred Journey
                </span>
              </div>

              {/* Right / Bottom: Detailed Narrative Content */}
              <div className="shiva-modal-body-pane">
                <span className="origins-section-label">Lord Shiva – The First Warkari</span>
                <h3 id="shiva-modal-title" className="shiva-modal-title">
                  {activeMilestone.title}
                </h3>
                <div className="divider-split-gold mini" style={{ margin: '0.6rem 0 1.2rem 0' }}></div>
                
                <p className="shiva-modal-desc">
                  {activeMilestone.detailText}
                </p>

                <div className="shiva-modal-footer">
                  <button 
                    type="button" 
                    className="btn-shiva-modal-dismiss"
                    onClick={() => setActiveMilestone(null)}
                  >
                    <span>Close Window</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default ShivaWarkariStory;
