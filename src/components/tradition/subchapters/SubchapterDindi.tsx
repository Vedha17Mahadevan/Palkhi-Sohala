import React from 'react';

const dindiImg = '/images/Chapter/Dindi.png';
const dailyRhythmImg = '/images/Chapter/Daily Rhythm.png';

export const SubchapterDindi: React.FC = () => {
  return (
    <section id="subchapter-dindi-content" className="tradition-section tradition-origins-section chapter-origins-editorial living-traditions-section">
      
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
        <span className="watermark-motif">दिंडी</span>
        <div className="watermark-rule"></div>
        <span className="watermark-tilak">॥</span>
      </div>

      <div className="tradition-container">
        {/* ========================================================================= */}
        {/* SECTION 1: DINDI – WALKING TOGETHER IN DEVOTION                            */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-dindi">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          <div className="editorial-section-flow">
            {/* Part A: Section Label, Heading & Full-Width Introduction */}
            <div className="editorial-intro-block">
              <span className="origins-section-label">Section 01 • Collective Fellowship</span>
              <h3 className="keepers-section-title">
                Dindi – Walking Together in Devotion
              </h3>
              
              <p className="origins-lead-text">
                A <strong>Dindi</strong> (दिंडी) is much more than a group of pilgrims walking along the same route. It represents an organized, self-governing spiritual family embodying discipline, mutual responsibility, and radical social equality.
              </p>
            </div>

            {/* Part B: Featured Prominent Visual & Documentary Caption Plaque */}
            <div className="editorial-featured-media-wrap">
              <div className="foundation-image-blend-wrapper">
                <img 
                  src={dindiImg} 
                  alt="Organised Dindi procession walking together in disciplined formation with saffron flags" 
                  className="foundation-blend-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blend-gold-border"></div>
              </div>
              <div className="foundation-media-caption">
                <span className="caption-tag">Documentary Archive • Section 03</span>
                <p className="caption-desc">
                  An organized Dindi marching in disciplined formation with saffron flags (<em>Bhagva Pataka</em>), Veena, and Taal along the highway.
                </p>
              </div>
            </div>

            {/* Part C: Four Explanations in a Balanced 2-Column Grid */}
            <div className="editorial-blocks-grid-2">
              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Structured Organization</h4>
                </div>
                <p className="editorial-card-desc">
                  Each Dindi holds an assigned, numbered position in the procession—marching either ahead of the Palkhi chariot (<em>Pudhchi Dindi</em>) or following behind it (<em>Magchi Dindi</em>). This protocol maintains an orderly flow across hundreds of kilometers.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">The Role of the Dindi Pramukh</h4>
                </div>
                <p className="editorial-card-desc">
                  The Pramukh (troupe leader) coordinates the marching pace, ensures that all members are accounted for, liaises with local communities for halting spaces, and upholds moral and spiritual decorum throughout the journey.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Shared Responsibilities</h4>
                </div>
                <p className="editorial-card-desc">
                  Members share all daily duties equitably: setting up community tents, pitching baggage, preparing communal food, and attending to sick or elderly walkers with selfless devotion.
                </p>
              </div>

              <div className="editorial-card">
                <div className="editorial-card-header">
                  <span className="editorial-card-ornament">❖</span>
                  <h4 className="editorial-card-title">Democratic Harmony</h4>
                </div>
                <p className="editorial-card-desc">
                  Within the Dindi, people from all walks of life—farmers, scholars, professionals, and artisans—walk shoulder to shoulder. Social titles and caste differences vanish entirely; every pilgrim is addressed simply as <em>“Mauli”</em>.
                </p>
              </div>
            </div>

            {/* Part D: Concluding Full-Width Paragraph */}
            <div className="editorial-concluding-block">
              <p className="tradition-paragraph">
                The Dindi exemplifies how collective purpose and shared service transform a strenuous physical expedition into an inspiring celebration of community solidarity.
              </p>

              <div className="editorial-closing-badge-wrap text-center" style={{ marginTop: '1.2rem', borderTop: 'none', paddingTop: 0 }}>
                <div className="foundation-era-inline-badge centered">
                  <span className="era-badge-dot">●</span>
                  <span className="era-badge-text">Order, Leadership &amp; Democratic Brotherhood</span>
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
        {/* SECTION 2: THE DAILY RHYTHM OF A WARKARI                                   */}
        {/* ========================================================================= */}
        <div className="origins-foundation-spread" id="section-daily-rhythm">
          <div className="foundation-spread-corner tl">❦</div>
          <div className="foundation-spread-corner tr">❦</div>
          <div className="foundation-spread-corner bl">❦</div>
          <div className="foundation-spread-corner br">❦</div>

          {/* Part A: Introduction */}
          <div className="origins-section-label" style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            Section 02 • Daily Pilgrim Cadence
          </div>
          <h3 className="keepers-section-title" style={{ textAlign: 'center', marginBottom: '0.6rem' }}>
            The Daily Rhythm of a Warkari
          </h3>
          <p className="tradition-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 1.6rem auto', fontSize: '1.12rem' }}>
            Life during the Wari unfolds according to an ancient, disciplined cadence. While individual Dindis adapt their timing to weather conditions and route distances, the day-to-day rhythm follows an unbroken pattern of devotion, community care, simplicity, and joyous discipline.
          </p>

          {/* Part B: Main Visual (6-panel photographic grid across full width) */}
          <div className="rhythm-featured-media-wrap">
            <div className="foundation-image-blend-wrapper">
              <img 
                src={dailyRhythmImg} 
                alt="Six-panel photographic grid depicting the daily rhythm and life of Warkaris" 
                className="foundation-blend-img fit-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="blend-gold-border"></div>
            </div>
            <div className="foundation-media-caption">
              <span className="caption-tag">Documentary Grid • Section 04</span>
              <p className="caption-desc">
                Six-panel photographic record: dawn Kakad Aarti, morning Pahat-Wari, midday Visava, afternoon Majal, evening Haripath, and night camp.
              </p>
            </div>
          </div>

          {/* Part C: Chronological Vertical Timeline with Continuous Spine */}
          <div className="warkari-timeline">
            <div className="warkari-timeline-spine"></div>

            {/* Stage 01 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Awakening & Kakad Aarti">🌅</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 01</span>
                    <h4 className="stage-title">Early Morning</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 3:30 AM – 5:30 AM
                  </span>
                </div>
                <div className="stage-phase-name">Awakening &amp; Kakad Aarti</div>
                <p className="stage-desc">
                  Pilgrims rise before dawn, complete their morning ablutions with fresh water, apply the sacred Gopichandan tilak, and gather for the devotional Kakad Aarti to awaken the Lord within their hearts.
                </p>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Morning Wari (Pahat-Wari)">🚶</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 02</span>
                    <h4 className="stage-title">Morning Wari</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 5:30 AM – 11:30 AM
                  </span>
                </div>
                <div className="stage-phase-name">Pahat-Wari</div>
                <p className="stage-desc">
                  As dawn breaks across the Deccan plateau, Dindis step onto the highway in brisk, orderly cadence. Morning coolness is embraced with vibrant choral chanting, rhythmic steps, and meditative verses.
                </p>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Midday Rest & Prasadam">🌾</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 03</span>
                    <h4 className="stage-title">Midday Rest</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 11:30 AM – 2:00 PM
                  </span>
                </div>
                <div className="stage-phase-name">Visava &amp; Prasadam</div>
                <p className="stage-desc">
                  The procession halts under rural roadside groves or village canopies. Devotees sit in circles to share wholesome meals of jowar bhakri, spicy thecha, and cooling buttermilk, followed by a short rest.
                </p>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Afternoon Journey (Majal)">☀️</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 04</span>
                    <h4 className="stage-title">Afternoon Journey</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 2:00 PM – 5:30 PM
                  </span>
                </div>
                <div className="stage-phase-name">Majal</div>
                <p className="stage-desc">
                  Marching resumes toward the designated evening campsite. Even in the afternoon sun or sudden monsoon rain, spirits remain buoyant with joyful folk dances (<em>Phugadi</em>) and mutual encouragement.
                </p>
              </div>
            </div>

            {/* Stage 05 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Evening Devotion">🪔</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 05</span>
                    <h4 className="stage-title">Evening Devotion</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 5:30 PM – 8:30 PM
                  </span>
                </div>
                <div className="stage-phase-name">Haripath &amp; Kirtan</div>
                <p className="stage-desc">
                  Upon reaching the campsite, millions assemble at sunset for the synchronized choral recitation of Sant Dnyaneshwar's Haripath, followed by an inspiring, narrative-rich Kirtan discourse under the stars.
                </p>
              </div>
            </div>

            {/* Stage 06 */}
            <div className="timeline-stage-item">
              <div className="timeline-icon-node" title="Night Halt">⛺</div>
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-num-pill">Stage 06</span>
                    <h4 className="stage-title">Night Halt</h4>
                  </div>
                  <span className="stage-time-badge">
                    <span>⏱</span> 8:30 PM – 10:00 PM
                  </span>
                </div>
                <div className="stage-phase-name">Community Rest</div>
                <p className="stage-desc">
                  A modest dinner is shared, tender care is given to blistered feet, and pilgrims rest peacefully in shared community tents or under the open sky, prepared to begin anew with the morning bell.
                </p>
              </div>
            </div>
          </div>

          {/* Part D: Representative Timings Note */}
          <div style={{ textAlign: 'center', marginTop: '1.6rem' }}>
            <span className="profile-saint-name" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
              Note: Timings are representative; specific halt schedules and routines vary gracefully across individual Dindis and weather conditions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubchapterDindi;
