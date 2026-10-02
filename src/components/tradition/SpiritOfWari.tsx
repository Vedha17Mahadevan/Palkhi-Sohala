import React from 'react';

interface ValueCardItem {
  iconEmoji: string;
  fontAwesomeIcon: string;
  title: string;
  marathi: string;
  explanation: string;
  colorScheme: string;
}

const WARKARI_VALUES: ValueCardItem[] = [
  {
    iconEmoji: '🙏',
    fontAwesomeIcon: 'fa-solid fa-hands-praying',
    title: 'Devotion',
    marathi: 'भक्ती',
    explanation: 'Selfless, uninterrupted remembrance of Lord Vitthal through prayer, humility, and complete surrender of ego in every step.',
    colorScheme: 'gold'
  },
  {
    iconEmoji: '❤️',
    fontAwesomeIcon: 'fa-solid fa-heart',
    title: 'Equality',
    marathi: 'समता',
    explanation: 'A living sanctuary where all social barriers, castes, and economic hierarchies dissolve. Every pilgrim greets another as Mauli (mother).',
    colorScheme: 'maroon'
  },
  {
    iconEmoji: '🤝',
    fontAwesomeIcon: 'fa-solid fa-handshake-simple',
    title: 'Unity',
    marathi: 'एकता',
    explanation: 'Over a million souls walking shoulder to shoulder in collective cadence, united by the universal resonance of Gyanba-Tukaram.',
    colorScheme: 'saffron'
  },
  {
    iconEmoji: '🌿',
    fontAwesomeIcon: 'fa-solid fa-leaf',
    title: 'Simplicity',
    marathi: 'साधेपणा',
    explanation: 'Walking barefoot with only a Tulsi Mala, white kurta, and minimal possessions, finding infinite spiritual abundance in detachment.',
    colorScheme: 'green'
  },
  {
    iconEmoji: '🎵',
    fontAwesomeIcon: 'fa-solid fa-music',
    title: 'Bhakti & Chanting',
    marathi: 'नामस्मरण',
    explanation: 'Continuous choral singing of abhangas accompanied by the hypnotic rhythm of the Mridangam, Chipli cymbals, and Veena.',
    colorScheme: 'purple'
  },
  {
    iconEmoji: '🚶',
    fontAwesomeIcon: 'fa-solid fa-person-walking-luggage',
    title: 'Service',
    marathi: 'सेवा',
    explanation: 'Voluntary hospitality where villagers along the highway distribute free food (Annachhatra), clean water, and medical care to every walker.',
    colorScheme: 'teal'
  }
];

export const SpiritOfWari: React.FC = () => {
  return (
    <section id="values" className="tradition-section tradition-values-section">
      <div className="tradition-container">
        
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag">Chapter 08 • Sacred Virtues</span>
          <h2 className="tradition-section-heading centered">Values of the Warkari Tradition</h2>
          <p className="tradition-section-subheading">
            Six enduring moral pillars that turn a grueling 250-kilometer pedestrian march into an ocean of joy and spiritual fellowship.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* Six Elegant Icon Cards Grid */}
        <div className="values-cards-grid">
          {WARKARI_VALUES.map((val, idx) => (
            <div key={idx} className={`value-feature-card ${val.colorScheme}`}>
              <div className="value-card-header">
                <div className="value-icon-bubble">
                  <span className="value-emoji">{val.iconEmoji}</span>
                </div>
                <span className="value-marathi-tag">{val.marathi}</span>
              </div>

              <div className="value-card-body">
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.explanation}</p>
              </div>

              <div className="value-card-border-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpiritOfWari;
