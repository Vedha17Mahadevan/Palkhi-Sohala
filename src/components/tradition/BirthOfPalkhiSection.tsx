import React from 'react';

const palkhiMainImg = '/images/palkhi.jpg';
const dnyaneshwarImg = '/images/saints/dnyaneshwar.jpg';
const tukaramImg = '/images/saints/tukaram.jpeg';
const dnyaneshwarPalkhiImg = '/images/palkhis/dnyaneshwar.webp';
const tukaramPalkhiImg = '/images/palkhis/tukaram.webp';
const modernWariImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917678/modern_wari.webp';
const sunsetPilgrimageImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png';
const traditionImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/tradition.png';
const twoPalkhisImg = 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790936481/From_Two_Palkhis_to_Pandharpur.png';

interface Milestone {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

const PALKHI_EVOLUTION_MILESTONES: Milestone[] = [
  {
    id: 'haibat-baba',
    name: 'Haibat Baba Organizes',
    subtitle: 'Through his inspiration and efforts, the Palkhi procession gained special significance and became more organized.',
    image: traditionImg,
  },
  {
    id: 'decorated-palkhi',
    name: 'Decorated Palkhi',
    subtitle: 'Carrying the sacred Padukas in a decorated palanquin with Dindis, devotional singing, and grandeur.',
    image: dnyaneshwarPalkhiImg,
  },
  {
    id: 'royal-patronage',
    name: 'Royal Patronage',
    subtitle: 'Escorted with elephants and horses from Aundh State, supported by local kings and the Peshwas.',
    image: palkhiMainImg,
  },
  {
    id: 'panch-committee',
    name: '1852 — Panch Committee',
    subtitle: 'In 1852, the government established a Panch Committee to supervise and manage the arrangements.',
    image: dnyaneshwarImg,
  },
  {
    id: 'tukaram-wari',
    name: 'Sant Tukaram’s Wari',
    subtitle: 'Sant Tukaram travelled on every Shuddha Ekadashi accompanied by about 1,400 Taalkaris.',
    image: tukaramImg,
  },
  {
    id: 'narayan-maharaj',
    name: '1685 — Narayan Maharaj',
    subtitle: 'In 1685, Narayan Maharaj started carrying his father’s sacred Padukas in a palanquin from Dehu.',
    image: tukaramPalkhiImg,
  },
  {
    id: 'separate-processions',
    name: '1832 — Separate Palkhis',
    subtitle: 'Formal separate Palkhi processions from Alandi and Dehu carrying the revered Padukas.',
    image: modernWariImg,
  },
  {
    id: 'pandharpur-convergence',
    name: 'Pandharpur Convergence',
    subtitle: 'Both sacred processions arrive at Pandharpur for the divine darshan on Ashadhi Ekadashi.',
    image: sunsetPilgrimageImg,
  },
];

export const BirthOfPalkhiSection: React.FC = () => {
  return (
    <section id="palkhi-content" className="tradition-section tradition-origins-section chapter-origins-editorial">
      
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
        <span className="watermark-motif">पालखी</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        
        {/* Section Header */}
        <div className="origins-header-block text-center">
          <span className="chapter-badge-pill">Chapter 03 • Palkhi Tradition</span>
          <h2 className="tradition-section-heading centered">The Sacred Palkhi Tradition</h2>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* The Keepers of the Tradition: Side-by-side Parchment Cards with Gold Corners */}
        <div className="keepers-section">
          <div className="keepers-profile-grid">
            {/* Left Card: Sant Dnyaneshwar Maharaj's Palkhi History */}
            <div className="saint-profile-card parchment-card">
              <div className="card-corner-ornament tl">❦</div>
              <div className="card-corner-ornament tr">❦</div>

              <div className="profile-card-top">
                <div className="profile-avatar-frame">
                  <img 
                    src={dnyaneshwarImg} 
                    alt="Sant Dnyaneshwar Maharaj" 
                    className="profile-avatar-img"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="avatar-gold-ring"></div>
                </div>
                <div className="profile-identity">
                  <h4 className="profile-saint-name">Sant Dnyaneshwar Maharaj's Palkhi History</h4>
                </div>
              </div>

              <div className="profile-card-body">
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    Haibat Baba was a Deshmukh from the village of in the Satara district of Maharashtra. It was through his inspiration and efforts that the Palkhi procession gained special significance and became more organized. Even today, the Wari tradition continues to be a matter of deep faith for people from all sections of society.
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    Haibat Baba introduced the tradition of carrying the sacred Padukas (holy sandals) of Sant Dnyaneshwar Maharaj in a beautifully decorated Palkhi (palanquin) to Pandharpur, accompanied by Dindis (groups of pilgrims), devotional singing, and ceremonial grandeur. Over the years, this procession has become even more magnificent.
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    In earlier times, the Palkhi procession included elephants, horses, and other ceremonial escorts provided by the rulers of the Aundh State. The expenses of the procession were supported by the local kings and the Peshwa government. Even after British rule began, financial assistance continued. In 1852, the government established a Panch Committee to supervise and manage the arrangements for Sant Dnyaneshwar Maharaj's Palkhi.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Sant Tukaram Maharaj's Palkhi History */}
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
                  <h4 className="profile-saint-name">Sant Tukaram Maharaj's Palkhi History</h4>
                </div>
              </div>

              <div className="profile-card-body">
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    The ancestors of Sant Tukaram Maharaj, especially Vishwambhar Baba, were contemporaries of Sant Dnyaneshwar and Sant Namdev. Their family had a long tradition of undertaking the Wari pilgrimage to Pandharpur.
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    Sant Tukaram himself travelled to Pandharpur on every Shuddha Ekadashi, accompanied by about 1,400 Taalkaris (devotees who played cymbals while singing devotional hymns).
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    After Sant Tukaram Maharaj's passing, his younger son, Narayan Maharaj, transformed the traditional Wari into a formal Palkhi procession by carrying his father's sacred Padukas in a palanquin. He not only continued the Wari tradition but also played an important role in the overall development of the Dehu Temple Trust (Dehu Devasthan).
                  </p>
                </div>
                <div className="profile-point">
                  <span className="point-bullet-ornament">•</span>
                  <p className="profile-point-text">
                    In 1685, Narayan Maharaj, the son of Sant Tukaram Maharaj, started the tradition of carrying his father's sacred Padukas in a palanquin (Palkhi) from Dehu to Pandharpur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Single-Column Visual Storytelling Panel: From Two Palkhis to Pandharpur Infographic */}
        <div className="palkhi-visual-storytelling-panel">
          <img 
            src={twoPalkhisImg} 
            alt="From Two Palkhis to Pandharpur Infographic" 
            className="palkhi-infographic-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Decorative Divider: Timeline Transition */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">────────── ❖ ॥ पंढरीची वारी ॥ ❖ ──────────</span>
          <span className="separator-line"></span>
        </div>

        {/* 3. The Legacy Section: Horizontal Visual Timeline (Identical to Chapter 1 & Chapter 2) */}
        <div className="origins-legacy-section">
          {/* Faded Background Motifs (2-3% opacity) */}
          <div className="legacy-faded-bg-motifs" aria-hidden="true">
            <div className="faded-tilak-symbol">॥</div>
            <div className="faded-mandala-circle">✺</div>
          </div>

          {/* Heading */}
          <div className="legacy-header text-center">
            <span className="origins-section-label">Devotional Evolution</span>
            <h3 className="legacy-section-title">The Evolution of the Palkhi</h3>
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

              {PALKHI_EVOLUTION_MILESTONES.map((milestone) => (
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

                  {/* Milestone Name and Subtitle */}
                  <div className="milestone-text-block text-center">
                    <h4 className="milestone-saint-name">{milestone.name}</h4>
                    <p className="milestone-subtitle-text shiva-rich-desc">{milestone.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Saffron Pill */}
          <div className="legacy-closing-wrap text-center">
            <div className="legacy-saffron-pill">
              <span className="pill-sacred-text">॥ ज्ञानोबा माउली तुकाराम • पालखी सोहळा ॥</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BirthOfPalkhiSection;
