import React from 'react';

const chandrabhagaImg = '/images/Chapter/pilgrims.png';
const sevaImg = '/images/Chapter/seva.png';

export const SubchapterArrivalSeva: React.FC = () => {
  return (
    <section id="subchapter-arrival-seva-content" className="tradition-section tradition-origins-section chapter-origins-editorial living-traditions-section">
      
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
        <span className="watermark-motif">सेवा</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        {/* ========================================================================= */}
        {/* SECTION 1: CHANDRABHAGA SNAN AND THE ARRIVAL AT PANDHARPUR                 */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-chandrabhaga">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="editorial-section-flow">
            {/* Part A: Section Label, Heading & Full-Width Introduction */}
            <div className="editorial-intro-block">
              <span className="origins-section-label">Section 01 • The Sacred Waters</span>
              <h3 className="keepers-section-title">
                Chandrabhaga Snan &amp; Arrival at Pandharpur
              </h3>
              
              <p className="origins-lead-text">
                As the pilgrimage draws to its grand culmination, the sight of the holy <strong>Chandrabhaga River</strong> stirs deep emotion among the millions who have walked across Maharashtra.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="editorial-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={chandrabhagaImg} 
                  alt="Warkari pilgrims taking a sacred bath in the Chandrabhaga River with Pandharpur temple surroundings" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 07</span>
                <p className="caption-desc">
                  Pilgrims performing the holy Chandrabhaga Snan along the sacred crescent riverbank upon arrival at Pandharpur.
                </p>
              </div>
            </div>

            {/* Part C: Remaining Explanatory Paragraphs (Full Content Width) */}
            <div className="editorial-narrative-block">
              <p className="tradition-paragraph">
                At Pandharpur, the sacred Bhima River curves gracefully into the shape of a half-moon, earning its endearing devotional name, <em>Chandrabhaga</em> (the crescent stream). In Warkari literature, this river is celebrated as a stream of divine grace capable of washing away the accumulated fatigue of body and spirit.
              </p>

              <p className="tradition-paragraph">
                The tradition of <strong>Chandrabhaga Snan</strong> (the sacred holy bath) is a cherished rite of arrival. Submerging in the cooling river, pilgrims wash away the dust of the road, shedding worldly identities and preparing themselves for the sacred presence of Lord Vitthal.
              </p>

              <p className="tradition-paragraph">
                Upon emerging from the waters, devotees gather along the extensive sandy riverbanks (<em>Valvanta</em>) to sing bhajans, circumambulate the revered shrine of <strong>Bhakta Pundalik</strong>, and perform town pradakshinas. While individual traditions vary—some seeking the close darshan of the Lord's feet (<em>Charan Darshan</em>) while others view the sacred spire from the banks (<em>Kalash Darshan</em>)—all share the serene realization that their long walk of devotion has reached its spiritual home.
              </p>
            </div>

            {/* Part D: Closing Highlight Centered at Bottom */}
            <div className="editorial-closing-badge-wrap text-center">
              <div className="foundation-era-inline-badge centered">
                <span className="era-badge-dot">●</span>
                <span className="era-badge-text">The Crescent River of Pandharpur</span>
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
        {/* SECTION 2: SEVA – SERVING FELLOW WARKARIS                                  */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-seva">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="editorial-section-flow">
            {/* Part A: Section Label, Heading & Full-Width Introduction */}
            <div className="editorial-intro-block">
              <span className="origins-section-label">Section 02 • Unconditional Fellowship</span>
              <h3 className="keepers-section-title">
                Seva – Serving Fellow Warkaris
              </h3>
              
              <p className="origins-lead-text">
                Selfless service, or <strong>Seva</strong> (सेवा), is the quiet heartbeat of the Pandharpur Wari. Across the entire pilgrimage route, thousands of local residents, families, and community volunteers step forward to support the pilgrims without expectation of reward or recognition.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="editorial-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={sevaImg} 
                  alt="Four-panel collage showing selfless community seva including Annadanam, Jal Seva, foot care, and community shelter" 
                  className="foundation-blend-img fit-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Collage • Section 08</span>
                <p className="caption-desc">
                  Four-panel collage: Annadanam food hospitality, Jal Seva hydration, foot care, and shelter along the pilgrim route.
                </p>
              </div>
            </div>

            {/* Part C: Four Seva Pillars in a Balanced 2-Column Grid */}
            <div className="editorial-blocks-grid-2">
              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Annadanam &amp; Community Hospitality</h4>
                </div>
                <p className="editorial-card-desc">
                  Roadside families and village youth set up open hearths to serve warm meals—wholesome bhakri, pithla, tea, and fruits—welcoming every passerby as a visiting deity.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">
                    Jal Seva <span className="editorial-card-marathi">(Water Distribution)</span>
                  </h4>
                </div>
                <p className="editorial-card-desc">
                  During sweltering afternoons, volunteers line the highways offering clean drinking water, sweet buttermilk (<em>Taak</em>), and refreshing lemon water to keep pilgrims hydrated.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Care for the Elderly &amp; Foot Care</h4>
                </div>
                <p className="editorial-card-desc">
                  Dedicated volunteers wash and dress the blistered feet of aged pilgrims, gently applying herbal oils and attending to minor ailments with tender respect.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Open Shelters</h4>
                </div>
                <p className="editorial-card-desc">
                  In times of inclement weather, schools, temple halls, and private residences open their doors freely, sheltering pilgrims overnight with warm, unassuming hospitality.
                </p>
              </div>
            </div>

            {/* Part D: Concluding Full-Width Paragraph */}
            <div className="editorial-concluding-block">
              <p className="tradition-paragraph">
                In the Warkari ethos, serving a fellow human being is the highest form of worship: <em>“Janata Janardana”</em>—seeing God in the face of every traveler. This spirit of unconditional compassion binds society into a single family of faith.
              </p>

              <div className="editorial-closing-badge-wrap text-center" style={{ marginTop: '1.2rem', borderTop: 'none', paddingTop: 0 }}>
                <div className="foundation-era-inline-badge centered">
                  <span className="era-badge-dot">●</span>
                  <span className="era-badge-text">Compassion, Humility &amp; Universal Brotherhood</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubchapterArrivalSeva;
