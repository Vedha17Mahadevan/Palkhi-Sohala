import React, { useState } from 'react';

interface TimelineEvent {
  id: string;
  saint: string;
  era: string;
  icon: string;
  role: string;
  quote: string;
  description: string;
  details: string[];
  image: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'pundalik',
    saint: 'Bhakta Pundalik',
    era: '6th – 11th Century',
    icon: 'fa-solid fa-hands-praying',
    role: 'The Foundation of Pandharpur',
    quote: 'विटेवर उभा कटेवर कर | ऐसा तो विठ्ठल पाहिला रे ||',
    description: 'The supreme devotee whose selfless devotion to his aging parents compelled Lord Krishna to visit his doorstep. Pundalik tossed a brick (veet) for the Lord to stand upon until his filial service was complete.',
    details: [
      'Origin of Lord Vitthal standing on the brick with hands on hips (Kati-kar).',
      'Established the Chandrabhaga river bank as the supreme meeting ground of God and devotee.',
      'The sacred foundation shrine (Pundalik Mandir) still greets all entering Pandharpur.'
    ],
    image: '/images/saints/pundalik.webp'
  },
  {
    id: 'dnyaneshwar',
    saint: 'Sant Dnyaneshwar',
    era: '1275 – 1296 CE',
    icon: 'fa-solid fa-book-open',
    role: 'Architect of Bhagavata Dharma',
    quote: 'जे जे भेटे भूत | ते ते मानिजे भगवंत ||',
    description: 'At age sixteen, Dnyaneshwar Maharaj authored the Bhavartha Dipika (Dnyaneshwari) and Amritanubhava, translating Sanskrit spiritual secrets into accessible Marathi poetry and founding the philosophical bedrock of the Warkari path.',
    details: [
      'Dismantled caste barriers by preaching universal compassion across all living beings.',
      'Embarked on pilgrimage with his brothers Nivruttinath, Sopandev, sister Muktabai, and Sant Namdev.',
      'Took Sanjeevan Samadhi at Alandi in 1296, which remains the starting sanctuary of the principal Palkhi.'
    ],
    image: '/images/saints/dnyaneshwar.jpg'
  },
  {
    id: 'namdev',
    saint: 'Sant Namdev',
    era: '1270 – 1350 CE',
    icon: 'fa-solid fa-guitar',
    role: 'Spreader of Kirtan & Pan-Indian Bhakti',
    quote: 'नाचू कीर्तनाचे रंगी | ज्ञानदीप लावू जगी ||',
    description: 'A contemporary and soulmate of Sant Dnyaneshwar, Namdev Maharaj popularized congregational chanting (Kirtan) and took the message of Vitthal beyond Maharashtra across northern India as far as Punjab.',
    details: [
      'Composed hundreds of moving abhangas documenting the lives of early Warkari saints.',
      'Over 60 of his sacred hymns are permanently enshrined in the Sikh holy scripture, Guru Granth Sahib.',
      'Chose his final resting step (Namdev Payari) at the entrance of the Pandharpur temple so the dust of all visiting pilgrims would bless his head.'
    ],
    image: '/images/saints/namdev.webp'
  },
  {
    id: 'eknath',
    saint: 'Sant Eknath',
    era: '1533 – 1599 CE',
    icon: 'fa-solid fa-heart',
    role: 'Renaissance of Equality & Alandi Revival',
    quote: 'काय काया क्लेश करिसी अज्ञान | अंतरीचे ध्यान सोडूनिया ||',
    description: 'Living in Paithan during turbulent historical times, Sant Eknath re-established the sanctity of Sant Dnyaneshwar’s Alandi Samadhi and composed the masterwork Eknathi Bhagavata while exemplifying absolute equality.',
    details: [
      'Famous for feeding hungry donkeys and social outcasts before orthodox feasts.',
      'Standardized the authentic text of the Dnyaneshwari by comparing surviving manuscripts.',
      'Strengthened the Paithan-to-Pandharpur Palkhi, which marches annually with vibrant dignity.'
    ],
    image: '/images/saints/eknath.jpg'
  },
  {
    id: 'tukaram',
    saint: 'Sant Tukaram',
    era: '1608 – 1650 CE',
    icon: 'fa-solid fa-feather-pointed',
    role: 'The Pinnacle of Abhang & Devotion',
    quote: 'तुका म्हणे आता | नाही उरली चिंता ||',
    description: 'Hailing from Dehu on the Indrayani river, Sant Tukaram composed over 4,500 spontaneous abhangas (Tukaram Gatha) capturing the raw human longing for the divine and fearless condemnation of religious hypocrisy.',
    details: [
      'His verses are memorized and sung word-for-word by millions on the pilgrimage road today.',
      'His younger son Narayan Maharaj formalized carrying the sacred Padukas in 1685.',
      'His Dehu Palkhi route represents the largest congregational procession in Maharashtra.'
    ],
    image: '/images/saints/tukaram.jpeg'
  },
  {
    id: 'haibatbaba',
    saint: 'Haibat Baba',
    era: 'Late 18th Century',
    icon: 'fa-solid fa-shield-halved',
    role: 'Architect of the Formal Palkhi Protocol',
    quote: 'माऊलींचे चरण पादुका पालखीत स्थापिले',
    description: 'Haibatravbaba Arphalkar, a court general of the Scindia rulers, renounced his military life to serve at Sant Dnyaneshwar’s Samadhi in Alandi. He transformed individual walking into an organized, royal procession carrying the silver Padukas.',
    details: [
      'Enshrined the holy silver Padukas in a majestic palanquin atop a chariot.',
      'Instituted royal court discipline, numbered Dindis, Chobdar scouts, and ceremonial Ashwa horses.',
      'Laid the foundation for the grand Alandi Palkhi Sohala that continues today.'
    ],
    image: '/images/palkhi.jpg'
  },
  {
    id: 'modern',
    saint: 'Modern Wari',
    era: '1832 – Present Day',
    icon: 'fa-solid fa-people-group',
    role: 'Global Wonder of Synchronized Faith',
    quote: 'ज्ञानोबा माउली तुकाराम !',
    description: 'In 1832, the expanding crowds prompted the peaceful separation of the Alandi and Dehu routes. Today, over 50 registered Palkhis and millions of barefoot pilgrims march with clockwork discipline without a single incident of violence.',
    details: [
      'Recognized by UNESCO and world sociologists as the world’s most disciplined mass egalitarian pedestrian march.',
      'Features unique traditions like Ringan (horse and pilgrim circular race) and Dhava (ecstatic sprint).',
      'Over 20 days and 250 kilometers, free food (Annachhatra) and medical seva are extended to every walker.'
    ],
    image: 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917678/modern_wari.webp'
  }
];

export const HistoricalTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = TIMELINE_EVENTS[activeIndex];

  return (
    <section id="timeline" className="tradition-section tradition-timeline-section">
      <div className="tradition-container">
        
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag">Chapter 02 • Journey Through Time</span>
          <h2 className="tradition-section-heading centered">Journey Through Time</h2>
          <p className="tradition-section-subheading">
            Trace the unbroken continuum of Bhakti guided by the seven monumental pillars of the Warkari Sampradaya.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* Timeline Horizontal Navigation Bar */}
        <div className="timeline-horizontal-wrapper">
          <div className="timeline-track-line">
            <div 
              className="timeline-track-progress"
              style={{ width: `${(activeIndex / (TIMELINE_EVENTS.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="timeline-nodes-row">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={event.id}
                  className={`timeline-node-btn ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View era of ${event.saint}`}
                >
                  <div className="node-circle-portrait">
                    <img 
                      src={event.image} 
                      alt={event.saint} 
                      className="node-circle-img" 
                      loading="lazy" 
                      decoding="async" 
                    />
                  </div>
                  <div className="node-label-group">
                    <span className="node-saint-name">{event.saint}</span>
                    <span className="node-era-badge">{event.era}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Timeline Details Card */}
        <div className="timeline-expanded-card">
          <div className="expanded-card-inner">
            <div className="card-decor-line top"></div>
            
            <div className="expanded-card-header">
              <div className="expanded-saint-title-wrap">
                <span className="era-capsule">{activeEvent.era}</span>
                <h3 className="expanded-saint-name">{activeEvent.saint}</h3>
                <h4 className="expanded-saint-role">{activeEvent.role}</h4>
              </div>

              <div className="expanded-controls">
                <button 
                  className="timeline-nav-btn"
                  onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous Saint"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <span className="timeline-step-counter">
                  {activeIndex + 1} of {TIMELINE_EVENTS.length}
                </span>
                <button 
                  className="timeline-nav-btn"
                  onClick={() => setActiveIndex(prev => Math.min(TIMELINE_EVENTS.length - 1, prev + 1))}
                  disabled={activeIndex === TIMELINE_EVENTS.length - 1}
                  aria-label="Next Saint"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Two-Column Expanded Layout: Portrait on Left, Story on Right */}
            <div className="expanded-card-body-layout">
              <div className="expanded-portrait-col">
                <div className="expanded-portrait-frame">
                  <img 
                    src={activeEvent.image} 
                    alt={activeEvent.saint} 
                    className="expanded-portrait-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="portrait-gold-halo"></div>
                </div>
                <div className="expanded-portrait-badge">
                  <i className="fa-solid fa-om"></i>
                  <span>{activeEvent.era}</span>
                </div>
              </div>

              <div className="expanded-content-col">
                <div className="expanded-quote-box">
                  <span className="quote-glyph">“</span>
                  <p className="marathi-quote">{activeEvent.quote}</p>
                </div>

                <p className="expanded-description">{activeEvent.description}</p>

                <div className="expanded-key-milestones">
                  <h5 className="milestones-heading">Sacred Milestones &amp; Contributions:</h5>
                  <ul className="milestones-list">
                    {activeEvent.details.map((detail, dIdx) => (
                      <li key={dIdx}>
                        <i className="fa-solid fa-dharmachakra milestone-bullet"></i>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-decor-line bottom"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistoricalTimeline;
