import React, { useState } from 'react';
import MuseumPlaceholder from './MuseumPlaceholder';

interface Milestone {
  yearOrEra: string;
  title: string;
  description: string;
  icon: string;
}

const DNYANESHWAR_MILESTONES: Milestone[] = [
  {
    yearOrEra: 'Late 18th Century',
    title: 'Haibat Baba Arrives at Alandi',
    description: 'Haibatravbaba Arphalkar, an aristocratic military general in the Scindia court of Gwalior, renounced his martial life to serve at the Samadhi shrine of Sant Dnyaneshwar in Alandi, inspired to create a noble, royal procession.',
    icon: 'fa-solid fa-feather'
  },
  {
    yearOrEra: 'Enshrinement',
    title: 'The Sacred Padukas',
    description: 'Rather than individual devotees walking independently, Haibat Baba established the practice of enshrining the silver footwear (Padukas) of Sant Dnyaneshwar within an ornate wooden palanquin.',
    icon: 'fa-solid fa-shoe-prints'
  },
  {
    yearOrEra: 'Protocol Era',
    title: 'The Organised Palkhi',
    description: 'Introduced military discipline and courtly etiquette: designated forward scouts (Chobdars), specific numbered Dindis in front and rear, royal flags, and ceremonial music.',
    icon: 'fa-solid fa-flag'
  },
  {
    yearOrEra: 'Royal Grants',
    title: 'Royal Patronage & Horses',
    description: 'The royal house of Scindia and local Maratha chieftains donated horses (Ashwa), silver chariots, elephant banners, and land grants to guarantee free grain and security for the procession.',
    icon: 'fa-solid fa-horse'
  },
  {
    yearOrEra: '1852 CE',
    title: 'British Panch Committee',
    description: 'Following disputes among temple servitors, the British administration legally formalized a representative 5-member citizens committee (Panch Committee) in 1852 to govern the pilgrimage transparently.',
    icon: 'fa-solid fa-scale-balanced'
  },
  {
    yearOrEra: 'Present Day',
    title: 'Modern Sovereign March',
    description: 'Today, the Alandi Palkhi carries over 400,000 pilgrims across 250 kilometers via Pune, Saswad, Jejuri, Lonand, and Phaltan, celebrated for its legendary Ringan horse races.',
    icon: 'fa-solid fa-sun'
  }
];

export const DnyaneshwarPalkhiHistory: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="dnyaneshwar-palkhi-history" className="tradition-section tradition-palkhi-chronicle-section">
      <div className="tradition-container">

        <div className="museum-section-tag-wrap">
          <span className="museum-tag">Chapter IV • Royal Dignity</span>
          <h2 className="tradition-section-heading">Sant Dnyaneshwar Maharaj's Palkhi</h2>
          <p className="tradition-section-subheading">
            From solitary wanderings to an imperially organized pilgrimage of hundreds of thousands.
          </p>
          <div className="divider-split-gold small"></div>
        </div>

        <div className="tradition-two-col split-chronicle-layout">
          {/* Left Column: Procession Artwork Placeholder */}
          <div className="chronicle-media-col">
            <MuseumPlaceholder
              title="Alandi to Pandharpur Palkhi Sohala"
              subtitle="The silver chariot carrying Mauli’s holy Padukas across the Dive Ghat"
              icon="fa-solid fa-shield-halved"
              aspectRatio="3 / 4"
            />

            <div className="media-caption-box">
              <div className="caption-gold-strip"></div>
              <p className="caption-text">
                <strong>Alandi Sanctuary:</strong> The silver chariot of Sant Dnyaneshwar Maharaj leaves the Indrayani river each year on Jyeshtha Vadya Ashtami, winding down through the breathtaking ghats to Pandharpur.
              </p>
            </div>
          </div>

          {/* Right Column: Historical Milestones Timeline */}
          <div className="chronicle-timeline-col">
            <div className="chronicle-milestones-track">
              {DNYANESHWAR_MILESTONES.map((item, idx) => (
                <div key={idx} className="chronicle-milestone-item">
                  <div className="milestone-badge-col">
                    <div className="milestone-icon-bubble">
                      <i className={item.icon}></i>
                    </div>
                    {idx < DNYANESHWAR_MILESTONES.length - 1 && <div className="milestone-connecting-line"></div>}
                  </div>

                  <div className="milestone-content-card">
                    <span className="milestone-era">{item.yearOrEra}</span>
                    <h3 className="milestone-title">{item.title}</h3>
                    <p className="milestone-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Expandable Drawer */}
            <div className="chronicle-readmore-wrap">
              <button
                className="btn-museum-readmore"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less Chronicles' : 'Read More Archival Details'}</span>
                <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>

              {isExpanded && (
                <div className="chronicle-extended-text">
                  <h4 className="extended-title">The Legend of Haibat Baba’s Vow</h4>
                  <p>
                    Haibat Baba was once captured during a military campaign and imprisoned. In his despair, he prayed fervently to Sant Dnyaneshwar Mauli, vowing that if he were delivered from bondage, he would spend the remainder of his life organizing a royal procession fit for an emperor to honor the saint. Upon his miraculous release, he walked to Alandi and fulfilled his promise, instituting the strict traditions of Chobdars, Ashwa horses, and Dindi numbers that continue unchanged to this very day.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DnyaneshwarPalkhiHistory;
