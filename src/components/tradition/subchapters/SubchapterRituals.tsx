import React from 'react';

const ringanImg = '/images/Chapter/Ringan.png';
const dhavaImg = '/images/Chapter/Dhava.png';

export const SubchapterRituals: React.FC = () => {
  return (
    <section id="subchapter-rituals-content" className="tradition-section tradition-origins-section chapter-origins-editorial living-traditions-section">
      
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
        <span className="watermark-motif">रिंगण</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        {/* ========================================================================= */}
        {/* SECTION 1: RINGAN – A SACRED MOMENT OF DEVOTION                            */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-ringan">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="ringan-section-flow">
            {/* Part A: Full-Width Introduction */}
            <div className="ringan-intro-block">
              <span className="origins-section-label">Section 01 • The Gallop of Grace</span>
              <h3 className="keepers-section-title">
                Ringan – A Sacred Moment of Devotion
              </h3>
              
              <p className="origins-lead-text">
                Ringan is celebrated as one of the most distinctive and spiritually electrifying traditions of the Pandharpur Wari. In open countryside fields along the pilgrimage route, hundreds of thousands of Warkaris gather in disciplined, reverent formations, transforming dusty rural arenas into vast open-air sanctuaries of collective devotion.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="ringan-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={ringanImg} 
                  alt="Sacred horse galloping in the Ringan ritual surrounded by concentric formations of Warkaris" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 01</span>
                <p className="caption-desc">
                  The riderless sacred horse (<em>Maulicha Ashwa</em>) surges through concentric circles of devotees during Gole Ringan.
                </p>
              </div>
            </div>

            {/* Part C: Side-by-Side Dual Ritual Blocks (Stacked on Mobile) */}
            <p className="tradition-paragraph" style={{ marginBottom: '1.2rem' }}>
              The ritual is enacted in two time-honored forms across the pilgrimage highway:
            </p>

            <div className="ringan-rituals-dual-grid">
              <div className="ritual-card">
                <div className="ritual-card-header">
                  <span className="ritual-ornament">❖</span>
                  <h4 className="ritual-title">
                    Gole Ringan <span className="marathi-term">(गोल रिंगण)</span>
                  </h4>
                </div>
                <p className="ritual-desc">
                  Devotees arrange themselves into vast concentric circular rings. The sacred horse (<em>Maulicha Ashwa</em> or <em>Tukaram Maharajncha Ashwa</em>), riderless and adorned in ceremonial silver reins and saddle, gallops around the enclosed circle with breathless speed. As the sacred steed surges past, Warkaris eagerly scoop up the consecrated dust kicked up by its hooves (<em>Dhulibhet</em>), touching it reverently to their foreheads as a direct blessing from the saint.
                </p>
              </div>

              <div className="ritual-card">
                <div className="ritual-card-header">
                  <span className="ritual-ornament">❖</span>
                  <h4 className="ritual-title">
                    Ubhe Ringan <span className="marathi-term">(उभे रिंगण)</span>
                  </h4>
                </div>
                <p className="ritual-desc">
                  Pilgrims form two disciplined parallel lines extending for hundreds of meters along the road, holding high their saffron flags to create an open corridor through which the holy horse gallops in majesty, greeted by the thunderous roar of cymbals and tears of joy.
                </p>
              </div>
            </div>

            {/* Part D: Concluding Full-Width Spiritual Significance */}
            <div className="editorial-concluding-block">
              <p className="tradition-paragraph">
                The sacred horse is venerated as the living spiritual vehicle carrying the unseen presence of Sant Dnyaneshwar or Sant Tukaram. The anticipation, rhythmic breathing, and sudden ecstatic gallop symbolize the swiftness of divine grace—reminding the seeker that devotion transcends intellectual effort when the heart surrenders in pure faith.
              </p>

              <div className="editorial-closing-badge-wrap text-center" style={{ marginTop: '1.2rem', borderTop: 'none', paddingTop: 0 }}>
                <div className="foundation-era-inline-badge centered">
                  <span className="era-badge-dot">●</span>
                  <span className="era-badge-text">Sacred Horse &amp; Concentric Formations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Separator 1 */}
        <div className="origins-decorative-separator" aria-hidden="true">
          <span className="separator-line"></span>
          <span className="separator-motif">❖</span>
          <span className="separator-line"></span>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: DHAVA – THE JOY OF SEEING PANDHARPUR                            */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-dhava">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="dhava-section-flow">
            {/* Part A: Section Label, Part B: Main Heading & Part C: Introduction */}
            <div className="dhava-intro-block">
              <span className="origins-section-label">Section 02 • The Pious Sprint</span>
              <h3 className="keepers-section-title">
                Dhava – The Joy of Seeing Pandharpur
              </h3>
              
              <p className="origins-lead-text">
                <strong>Dhava</strong> (धावा) is an expression of spontaneous, overflowing devotion and ecstasy that takes place as the Wari draws close to its sacred destination. The word itself translates to "sprinting" or "running" in heartfelt longing toward the beloved.
              </p>
            </div>

            {/* Part D: Main Photograph & Part E: Documentary Caption */}
            <div className="dhava-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={dhavaImg} 
                  alt="Warkaris joyfully sprinting during the Dhava tradition with saffron flags towards Pandharpur" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 02</span>
                <p className="caption-desc">
                  Pilgrims break into an ecstatic sprint (<em>Dhava</em>) at Baji Raoachi Vihir upon catching their first sight of the Pandharpur temple spire.
                </p>
              </div>
            </div>

            {/* Part F: Remaining Explanatory Paragraphs (Full Content Width) */}
            <div className="dhava-narrative-block">
              <p className="tradition-paragraph">
                The tradition holds special historical significance at <strong>Baji Raoachi Vihir</strong> near Wakhari, approximately eighteen kilometers from Pandharpur. At this location on the highway, the gentle rise in the topography allows pilgrims to catch their very first distant sight of the golden pinnacle (<em>Kalash</em>) of Lord Vitthal’s temple.
              </p>

              <p className="tradition-paragraph">
                Tradition recounts that when Sant Tukaram Maharaj first caught sight of the temple spire from this vantage point, he was overcome with sheer bliss and broke into a running sprint, eager to throw himself at the lotus feet of Lord Panduranga. In emulation of this profound saintly moment, thousands of pilgrims cast aside their walking sticks, forget the blisters on their soles, and dash forward together across the fields waving their saffron banners.
              </p>

              <p className="tradition-paragraph">
                The Dhava marks the emotional climax of weeks of barefoot travel: physical exhaustion instantly dissolves into boundlessly energetic joy as devotees realize that the journey’s long-sought goal is finally within embrace.
              </p>
            </div>

            {/* Part G: Closing Highlight Centered at Bottom */}
            <div className="dhava-closing-badge-wrap text-center">
              <div className="foundation-era-inline-badge centered">
                <span className="era-badge-dot">●</span>
                <span className="era-badge-text">First Sight of Temple Spire • Baji Raoachi Vihir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubchapterRituals;
