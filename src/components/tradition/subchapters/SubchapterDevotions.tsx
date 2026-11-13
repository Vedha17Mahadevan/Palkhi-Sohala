import React from 'react';

const kirtanImg = '/images/Chapter/Kirtan.png';
const tulsiImg = '/images/Chapter/tulsi.png';

export const SubchapterDevotions: React.FC = () => {
  return (
    <section id="subchapter-devotions-content" className="tradition-section tradition-origins-section chapter-origins-editorial living-traditions-section">
      
      {/* Subtle Faded Heritage Margin Watermarks (Opacity ~3.5%) */}
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
        <span className="watermark-motif">तुळशी</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        {/* ========================================================================= */}
        {/* SECTION 1: HARIPATH, KIRTAN AND HARINAM SANKIRTAN                          */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-devotional-practices">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="editorial-section-flow">
            {/* Part A: Section Label, Heading & Full-Width Introduction */}
            <div className="editorial-intro-block">
              <span className="origins-section-label">Section 01 • Acoustic Devotion</span>
              <h3 className="keepers-section-title">
                Haripath, Kirtan and Harinam Sankirtan
              </h3>
              
              <p className="origins-lead-text">
                The long miles to Pandharpur are sustained not by physical endurance alone, but by three living pillars of devotional practice that accompany the pilgrims at every step of their journey.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="editorial-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={kirtanImg} 
                  alt="Kirtankar leading devotional singing accompanied by Warkaris participating in collective chanting" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 05</span>
                <p className="caption-desc">
                  Warkari assembly gathered in evening devotion for Haripath choral prayer and dynamic Kirtan discourses.
                </p>
              </div>
            </div>

            {/* Part C: Three Devotional Practices in a Balanced 3-Column Grid */}
            <div className="editorial-blocks-grid-3">
              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Haripath <span className="editorial-card-marathi">(हरिपाठ)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  Authored primarily by Sant Dnyaneshwar Maharaj, the Haripath comprises twenty-eight contemplative abhangas affirming that remembering God's name (<em>Namasmarana</em>) is the most direct path to liberation. Recited collectively at dusk, this synchronized prayer creates a tranquil sanctuary of quiet mindfulness along the highway.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Kirtan <span className="editorial-card-marathi">(कीर्तन)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  A dynamic, interactive blend of narrative exposition, philosophical instruction, singing, and social ethics. The Kirtankar unpacks the subtle meaning of a saint's verse, using lively parables and wit to educate and spiritually elevate the diverse assembly of listeners.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Harinam Sankirtan <span className="editorial-card-marathi">(हरिनाम संकीर्तन)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  The continuous, choral chanting of sacred names—<em>“Gyanba-Tukaram”</em>, <em>“Ram Krishna Hari”</em>, and <em>“Vitthal-Vitthal”</em>. The repetitive cadence creates an acoustic wave that unifies the walking cadence of the crowd, helping devotees transcend bodily fatigue.
                </p>
              </div>
            </div>

            {/* Part D: Concluding Full-Width Paragraph */}
            <div className="editorial-concluding-block">
              <p className="tradition-paragraph">
                These devotional practices transform the physical highway into a living, moving temple where spiritual wisdom is shared freely and experienced collectively.
              </p>

              <div className="editorial-closing-badge-wrap text-center" style={{ marginTop: '1.2rem', borderTop: 'none', paddingTop: 0 }}>
                <div className="foundation-era-inline-badge centered">
                  <span className="era-badge-dot">●</span>
                  <span className="era-badge-text">Liturgical Harmony on the Open Road</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">❖</span>
          <span className="separator-line"></span>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: TULSI VRINDAVAN AND THE SYMBOLS OF WARKARI DEVOTION             */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-tulsi-symbols">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="editorial-section-flow">
            {/* Part A: Section Label, Heading & Full-Width Introduction */}
            <div className="editorial-intro-block">
              <span className="origins-section-label">Section 02 • Sacred Emblems</span>
              <h3 className="keepers-section-title">
                Tulsi Vrindavan &amp; Symbols of Devotion
              </h3>
              
              <p className="origins-lead-text">
                One of the most revered and visually striking images of the Pandharpur Wari is that of Warkari women gracefully balancing miniature <strong>Tulsi Vrindavans</strong> upon their heads as they walk across the vast landscape of Maharashtra.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="editorial-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={tulsiImg} 
                  alt="Warkari women gracefully balancing Tulsi Vrindavans upon their heads accompanied by devotees with saffron flags" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 06</span>
                <p className="caption-desc">
                  Warkari women balancing living Tulsi Vrindavan planters upon their heads as an emblem of sacred focus and maternal devotion.
                </p>
              </div>
            </div>

            {/* Part C: Second Explanatory Paragraph (Full Width) */}
            <div className="editorial-narrative-block" style={{ marginTop: '1.2rem', marginBottom: '1.2rem' }}>
              <p className="tradition-paragraph">
                In Warkari philosophy and Bhagavata Dharma, the sacred Tulsi (holy basil) is deeply associated with Lord Vishnu and Lord Krishna. Lord Vitthal is famously known as <em>Tulsi-Priya</em>, the deity who cherishes a garland of simple basil leaves above any opulent adornment. Carrying the living Tulsi plant balanced on the head for over two hundred kilometers without hand support symbolizes supreme focus, purity of heart, and maternal surrender to the divine.
              </p>
            </div>

            {/* Part D: Three Emblems in a Balanced 3-Column Grid */}
            <div className="editorial-blocks-grid-3">
              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Bhagva Pataka <span className="editorial-card-marathi">(भगवा पताका)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  The triangular saffron flag carried upon the shoulder represents renunciation, spiritual courage, and universal love—the sovereign banner under which all pilgrims march as equals.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Tulsi Mala <span className="editorial-card-marathi">(तुळशीची माळ)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  Worn around the neck, the necklace of basil wood beads signifies the pilgrim's lifelong commitment to truth, ethical living, and compassionate brotherhood.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Gopichandan &amp; Bukka <span className="editorial-card-marathi">(गोपीचंदन व बुक्का)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  The forehead tilak of cooling white clay and fragrant black Bukka powder symbolizes the cooling of intellectual pride and the remembrance of divine grace in every thought.
                </p>
              </div>
            </div>

            {/* Part E: Closing Highlight Centered at Bottom */}
            <div className="editorial-closing-badge-wrap text-center">
              <div className="foundation-era-inline-badge centered">
                <span className="era-badge-dot">●</span>
                <span className="era-badge-text">Purity, Surrender &amp; Visual Iconography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubchapterDevotions;
