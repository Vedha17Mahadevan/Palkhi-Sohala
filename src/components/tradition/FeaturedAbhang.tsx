import React, { useState } from 'react';

interface AbhangItem {
  id: string;
  saint: string;
  marathiSaint: string;
  title: string;
  raga: string;
  verseMarathi: string[];
  englishTranslation: string;
  spiritualMeaning: string;
}

const ABHANG_COLLECTION: AbhangItem[] = [
  {
    id: 'anandache-dohi',
    saint: 'Sant Tukaram Maharaj',
    marathiSaint: 'संत तुकाराम महाराज',
    title: 'Anandache Dohi (आनंदाचे डोही आनंद तरंग)',
    raga: 'Bhairavi / Traditional Dindi Dhun',
    verseMarathi: [
      'आनंदाचे डोही आनंद तरंग । आनंदचि अंग उपापले ॥ १ ॥',
      'काय सांगो झाले काहीचिया बाही । पुंडलीक पायी सुख लाभले ॥ २ ॥',
      'तुका म्हणे आता नाही उरली चिंता । अवघे रूप पाहता विठ्ठलाचे ॥ ३ ॥'
    ],
    englishTranslation: '“In the ocean of divine bliss, waves of ecstasy arise; my entire being has dissolved into blissful joy. At the sacred lotus feet of Bhakta Pundalik’s Lord, supreme peace has been realized. Tuka says: now not a single anxiety remains, for my gaze beholds only the radiant form of Vitthal everywhere.”',
    spiritualMeaning: 'Expresses the culmination of the pilgrimage: when walking weary devotees finally glimpse the temple spire of Pandharpur, all physical fatigue instantly dissolves into transcendent bliss.'
  },
  {
    id: 'roop-pahata',
    saint: 'Sant Dnyaneshwar Maharaj',
    marathiSaint: 'संत ज्ञानेश्वर महाराज',
    title: 'Roop Pahata Lochani (रूप पाहतां लोचनीं)',
    raga: 'Yaman / Bhimpalasi',
    verseMarathi: [
      'रूप पाहतां लोचनीं । सुख जालें वो साजणी ॥ १ ॥',
      'तो हा विठ्ठल बरवा । तो हा माधव बरवा ॥ २ ॥',
      'बहुत सुकृताची जोडी । म्हणुनि विठ्ठलीं आवडी ॥ ३ ॥',
      'सर्व सुखाचें आगर । बाप रखुमादेवीवरु ॥ ४ ॥'
    ],
    englishTranslation: '“Beholding His divine form with my own eyes, supreme joy filled my entire soul, O companion! Exquisite is this Vitthal, wondrous is this Madhava. Accumulated merit of countless births has borne fruit, blossoming as this boundless love for Vitthal. The repository of all happiness is He—the Lord of Mother Rakhumai.”',
    spiritualMeaning: 'A hymn sung at dawn as the Palkhi begins its daily march. It reminds the pilgrim that the physical journey is a contemplation of the enchanting beauty of the divine.'
  },
  {
    id: 'sundar-te-dhyan',
    saint: 'Sant Tukaram Maharaj',
    marathiSaint: 'संत तुकाराम महाराज',
    title: 'Sundar Te Dhyan (सुंदर ते ध्यान उभे विटेवरी)',
    raga: 'Kafi / Bilawal',
    verseMarathi: [
      'सुंदर ते ध्यान उभे विटेवरी । कर कटावरी ठेवोनियां ॥ १ ॥',
      'तुळशीचे हार गळां कासे पितांबर । आवडे निरंतर हेचि ध्यान ॥ २ ॥',
      'मकरकुंडले तळपती श्रवणीं । कंठीं कौस्तुभमणी विराजित ॥ ३ ॥',
      'तुका म्हणे माझे हेचि सर्व सुख । पाहीन श्रीमुख आवडीने ॥ ४ ॥'
    ],
    englishTranslation: '“Breathtaking is that divine vision standing gracefully upon the brick, hands planted firmly upon His waist. A garland of sacred Tulsi around His neck, draped in yellow silk pitambar—this alone is my eternal meditation. Crocodile-shaped earrings sparkle at His ears, the Kaustubha gem glimmers at His throat. Tuka says: this is my all-encompassing delight; I gaze unceasingly upon His holy face with overflowing love.”',
    spiritualMeaning: 'The quintessential Dhyan Abhang (meditative hymn) describing the iconographic grace of Vithoba as etched into the consciousness of every Maharashtrian.'
  }
];

export const FeaturedAbhang: React.FC = () => {
  const [selectedAbhangId, setSelectedAbhangId] = useState<string>('anandache-dohi');
  const [isPlaying, setIsPlaying] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const activeAbhang = ABHANG_COLLECTION.find(a => a.id === selectedAbhangId) || ABHANG_COLLECTION[0];

  const handleCopy = async () => {
    try {
      const textToCopy = `॥ पवित्र अभंग • ${activeAbhang.marathiSaint} ॥\n\n${activeAbhang.verseMarathi.join('\n')}\n\nEnglish Translation:\n${activeAbhang.englishTranslation}\n\n— Palkhi Sohala | RadhaKrishna Satsangam`;
      await navigator.clipboard.writeText(textToCopy);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2400);
    } catch {
      // fallback
    }
  };

  return (
    <section id="abhang" className="tradition-section tradition-abhang-section chapter-museum-abhang">
      <div className="tradition-container">
        
        {/* Curated Museum Header Tag */}
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag abhang-tag">Archive Gallery 06 • The Living Chants</span>
          <h2 className="tradition-section-heading centered">Sacred Abhang</h2>
          <p className="tradition-section-subheading">
            The poetic heartbeat of the pilgrimage: how 700 years of rhyming devotional metres transform dusty highways into open-air acoustic sanctuaries.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* 1. Acoustic Anatomy of a Dindi Exhibit */}
        <div className="dindi-acoustics-section">
          <div className="acoustics-header text-center">
            <span className="acoustics-badge">Acoustic Choreography</span>
            <h3 className="acoustics-title">The Four Instruments of the Highway Choir</h3>
            <p className="acoustics-sub">How rhythm and breath keep 20 lakh pilgrims marching in synchronized joy.</p>
          </div>

          <div className="acoustics-grid">
            <div className="acoustic-item">
              <div className="acoustic-icon"><i className="fa-solid fa-guitar"></i></div>
              <h4 className="acoustic-name">The Veena (वीणा)</h4>
              <span className="acoustic-role">Lead Spiritual Compass</span>
              <p className="acoustic-desc">Held upright by the Dindi leader. Once the Veena is hoisted at sunrise, its drone never ceases until the day’s campsite is reached.</p>
            </div>

            <div className="acoustic-item">
              <div className="acoustic-icon"><i className="fa-solid fa-drum"></i></div>
              <h4 className="acoustic-name">The Mridangam (मृदंग)</h4>
              <span className="acoustic-role">The Walking Heartbeat</span>
              <p className="acoustic-desc">Two-headed barrel drum slung over the shoulder. Its galloping 8-beat rhythm dictates the cadence of every barefoot step.</p>
            </div>

            <div className="acoustic-item">
              <div className="acoustic-icon"><i className="fa-solid fa-circle-notch"></i></div>
              <h4 className="acoustic-name">Taal (टाळ)</h4>
              <span className="acoustic-role">The Choral Wave</span>
              <p className="acoustic-desc">Heavy brass cymbals played by every pilgrim. Thousands clash in unison, creating an acoustic wave audible miles across the plains.</p>
            </div>

            <div className="acoustic-item">
              <div className="acoustic-icon"><i className="fa-solid fa-users"></i></div>
              <h4 className="acoustic-name">Antiphonal Chorus</h4>
              <span className="acoustic-role">Call &amp; Response</span>
              <p className="acoustic-desc">The front row sings a verse line; the rear row echoes in thunderous response. Fatigue vanishes into collective ecstasy.</p>
            </div>
          </div>
        </div>

        {/* 2. Interactive Abhang Manuscript Showcase */}
        <div className="abhang-selector-row">
          {ABHANG_COLLECTION.map(abh => (
            <button
              key={abh.id}
              className={`abhang-select-btn ${selectedAbhangId === abh.id ? 'active' : ''}`}
              onClick={() => { setSelectedAbhangId(abh.id); setIsPlaying(false); }}
            >
              <span className="btn-saint">{abh.marathiSaint}</span>
              <span className="btn-title">{abh.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Manuscript Card with Lotus Corners & Golden Inscription */}
        <div className="abhang-manuscript-card lotus-bordered-card">
          <div className="manuscript-parchment-layer"></div>
          
          <div className="lotus-corner tl">🪷</div>
          <div className="lotus-corner tr">🪷</div>
          <div className="lotus-corner bl">🪷</div>
          <div className="lotus-corner br">🪷</div>

          <div className="abhang-card-inner">
            <div className="abhang-meta-strip">
              <span className="meta-saint-pill">
                <i className="fa-solid fa-feather-pointed"></i> {activeAbhang.saint}
              </span>
              <span className="meta-raga-pill">
                <i className="fa-solid fa-music"></i> {activeAbhang.raga}
              </span>
            </div>

            <h3 className="abhang-card-title">{activeAbhang.title}</h3>

            {/* Marathi Inscription Box */}
            <div className="marathi-verse-showcase">
              {activeAbhang.verseMarathi.map((line, idx) => (
                <p key={idx} className="abhang-line">{line}</p>
              ))}
            </div>

            <div className="abhang-divider-gold">
              <span>॥ पंढरीनाथ महाराज की जय ॥</span>
            </div>

            {/* Translation & Spiritual Meaning */}
            <div className="abhang-translation-section">
              <h4 className="translation-heading">English Translation &amp; Poetic Essence:</h4>
              <blockquote className="translation-quote">
                {activeAbhang.englishTranslation}
              </blockquote>
              <div className="spiritual-insight-box">
                <i className="fa-solid fa-gem"></i>
                <p><strong>Spiritual Lore:</strong> {activeAbhang.spiritualMeaning}</p>
              </div>
            </div>

            {/* Audio Simulation & Share Bar */}
            <div className="abhang-interactive-bar">
              <div className="audio-player-mock">
                <button 
                  className={`audio-btn-circle ${isPlaying ? 'playing' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label="Toggle Drone Meditation"
                >
                  <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                <div className="audio-track-info">
                  <span className="track-title">{isPlaying ? 'Continuous Choral Chanting • Playing' : 'Listen to Acoustic Rhythm (Simulated Drone)'}</span>
                  <div className="sound-wave-bars">
                    <span className={`bar b1 ${isPlaying ? 'wave-active' : ''}`}></span>
                    <span className={`bar b2 ${isPlaying ? 'wave-active' : ''}`}></span>
                    <span className={`bar b3 ${isPlaying ? 'wave-active' : ''}`}></span>
                    <span className={`bar b4 ${isPlaying ? 'wave-active' : ''}`}></span>
                    <span className={`bar b5 ${isPlaying ? 'wave-active' : ''}`}></span>
                  </div>
                </div>
              </div>

              <div className="abhang-action-buttons">
                <button className="btn-action-icon" onClick={handleCopy} title="Copy Abhang">
                  <i className="fa-regular fa-copy"></i>
                  <span>{copyFeedback ? 'Copied!' : 'Copy Verse'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Literary Metric Fact Callout */}
        <div className="ovi-metric-callout-block">
          <div className="ovi-icon-wrap">
            <i className="fa-solid fa-scroll"></i>
          </div>
          <div className="ovi-text-wrap">
            <h4 className="ovi-title">The Genius of the 4-Line “Ovi” Metre</h4>
            <p className="ovi-desc">
              Why are virtually all Warkari abhangas composed in the short 4-line <em>Ovi</em> rhythm? Saint poets deliberately calibrated the meter to the human respiratory cycle during walking. The first three rhyming lines correspond to three forward steps during exhalation, and the shorter fourth line allows the pilgrim to inhale fresh monsoon air without breaking poetic momentum.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedAbhang;
