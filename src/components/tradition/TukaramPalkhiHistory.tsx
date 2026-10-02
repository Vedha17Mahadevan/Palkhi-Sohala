import React, { useState } from 'react';
import MuseumPlaceholder from './MuseumPlaceholder';

interface Milestone {
  yearOrEra: string;
  title: string;
  description: string;
  icon: string;
}

const TUKARAM_MILESTONES: Milestone[] = [
  {
    yearOrEra: 'Early Ancestry',
    title: 'Vishwambhar Baba',
    description: 'Sant Tukaram’s revered ancestor was an ardent devotee of Lord Panduranga who regularly walked barefoot from Dehu to Pandharpur, establishing his family’s deep ancestral commitment to Vitthal worship.',
    icon: 'fa-solid fa-seedling'
  },
  {
    yearOrEra: '1608 – 1650',
    title: 'Sant Tukaram Maharaj',
    description: 'Tukaram Maharaj composed ecstatic verses and regularly led crowds of local villagers on the Ashadhi Ekadashi pilgrimage, turning every halt into a celebration of music and Haripatha.',
    icon: 'fa-solid fa-om'
  },
  {
    yearOrEra: 'Lineage Holder',
    title: 'Narayan Maharaj',
    description: 'The youngest and illustrious son of Sant Tukaram, Narayan Maharaj, institutionalized the formal carrying of both Sant Dnyaneshwar’s and Sant Tukaram’s Padukas together in a unified procession.',
    icon: 'fa-solid fa-hands-holding-circle'
  },
  {
    yearOrEra: '1685 CE',
    title: 'The Great Unified Pilgrimage',
    description: 'In 1685, Narayan Maharaj formally initiated the first large-scale Palkhi ceremony, gathering the saint’s footwear in silver shrines and carrying them with massive congregational fanfare.',
    icon: 'fa-solid fa-landmark'
  },
  {
    yearOrEra: '1832 CE',
    title: 'The Great Route Separation',
    description: 'As pilgrim numbers surged exponentially, disputes over ceremonial seniority led to the peaceful agreement in 1832 to separate the Alandi and Dehu Palkhis onto distinct simultaneous highways.',
    icon: 'fa-solid fa-arrows-split-up-and-left'
  },
  {
    yearOrEra: 'Present Day',
    title: 'The Living Dehu Route',
    description: 'Winding through Pune, Loni Kalbhor, Patas, Baramati, Indapur, and Akluj, the Tukaram Maharaj Palkhi now gathers hundreds of thousands of Warkaris celebrating the power of the Abhanga.',
    icon: 'fa-solid fa-certificate'
  }
];

export const TukaramPalkhiHistory: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="tukaram-palkhi-history" className="tradition-section tradition-palkhi-chronicle-section alt-bg">
      <div className="tradition-container">
        
        <div className="museum-section-tag-wrap text-right">
          <span className="museum-tag">Chapter V • Songs of Surrender</span>
          <h2 className="tradition-section-heading">Sant Tukaram Maharaj's Palkhi</h2>
          <p className="tradition-section-subheading">
            The immortal legacy born in Dehu that fills the air with joyful abhang chanting.
          </p>
          <div className="divider-split-gold small ml-auto"></div>
        </div>

        {/* Mirrored Two-Column: Milestones on Left, Media on Right */}
        <div className="tradition-two-col split-chronicle-layout mirrored">
          
          {/* Left Column: Historical Milestones Timeline */}
          <div className="chronicle-timeline-col">
            <div className="chronicle-milestones-track">
              {TUKARAM_MILESTONES.map((item, idx) => (
                <div key={idx} className="chronicle-milestone-item">
                  <div className="milestone-badge-col">
                    <div className="milestone-icon-bubble saffron">
                      <i className={item.icon}></i>
                    </div>
                    {idx < TUKARAM_MILESTONES.length - 1 && <div className="milestone-connecting-line"></div>}
                  </div>

                  <div className="milestone-content-card">
                    <span className="milestone-era saffron-era">{item.yearOrEra}</span>
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
                <span>{isExpanded ? 'Show Less History' : 'Read More Dehu Chronicles'}</span>
                <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>

              {isExpanded && (
                <div className="chronicle-extended-text">
                  <h4 className="extended-title">The Sacred Indrayani &amp; Bhandara Hill</h4>
                  <p>
                    Before initiating the pilgrimage, Sant Tukaram spent days meditating in solitary contemplation upon Bhandara Hill and Bhamchandra Hill near Dehu. When jealous rivals cast his handwritten manuscripts of abhangas into the Indrayani River, the sacred waters kept the manuscripts dry for thirteen days and returned them unharmed—a miracle commemorated each year when the Dehu Palkhi embarks towards Pandharpur.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Procession Artwork Placeholder */}
          <div className="chronicle-media-col">
            <MuseumPlaceholder
              title="Dehu to Pandharpur Palkhi Sohala"
              subtitle="Sant Tukaram Maharaj's silver chariot departing from the Indrayani banks"
              icon="fa-solid fa-feather-pointed"
              aspectRatio="3 / 4"
              imageSrc="/images/palkhis/tukaram.webp"
              imageAlt="Jagadguru Shri Sant Tukaram Maharaj Palkhi Procession"
              hideCaption={true}
            />

            <div className="media-caption-box">
              <div className="caption-gold-strip"></div>
              <p className="caption-text">
                <strong>Dehu Gatha Mandir:</strong> Pilgrims singing abhangas in rhythmic harmony as the sacred silver chariot makes its grand entry into Pune before taking the southern route to Solapur district.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TukaramPalkhiHistory;
