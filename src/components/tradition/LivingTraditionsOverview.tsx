import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import { prefetchRoute } from '../../utils/prefetchUtils';

interface ChapterDirectoryCard {
  number: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  description: string;
  sections: string[];
  buttonText: string;
  image: string;
  path: string;
  icon: string;
}

const CHAPTER_04_DIRECTORY_CARDS: ChapterDirectoryCard[] = [
  {
    number: '05',
    chapterNumber: '05',
    title: 'Rituals and Sacred Moments of Wari',
    subtitle: 'Gole Ringan, Ubhe Ringan and the Pious Sprint of Dhava.',
    description: 'Experience the exhilarating Ringan rituals where the sacred horse gallops through concentric rings of devotees, and the ecstatic dash of Dhava at Baji Raoachi Vihir.',
    sections: [
      'Ringan – A Sacred Moment of Devotion',
      'Dhava – The Joy of Seeing Pandharpur',
    ],
    buttonText: 'Read Chapter 05',
    image: '/images/Chapter/Ringan.png',
    path: '/tradition/rituals',
    icon: 'fa-solid fa-horse-head',
  },
  {
    number: '06',
    chapterNumber: '06',
    title: 'The Life and Organisation of a Dindi',
    subtitle: 'Disciplined Fellowship and the Daily Rhythm of the Pilgrim Road.',
    description: "Discover the inner organisation, discipline and fellowship of the Dindi, followed by an exploration of the Warkari's representative daily routine.",
    sections: [
      'Dindi – Walking Together in Devotion',
      'The Daily Rhythm of a Warkari',
    ],
    buttonText: 'Read Chapter 06',
    image: '/images/Chapter/Dindi.png',
    path: '/tradition/dindi-life',
    icon: 'fa-solid fa-people-group',
  },
  {
    number: '07',
    chapterNumber: '07',
    title: 'Devotional Practices and Sacred Symbols',
    subtitle: 'Haripath, Kirtan, Chanting and the Living Emblems of Faith.',
    description: 'Explore the recitation of Haripath, traditional Kirtan discourses, Harinam chanting and sacred symbols such as the Tulsi Vrindavan, Bhagva Pataka and Tilak.',
    sections: [
      'Haripath, Kirtan and Harinam Sankirtan',
      'Tulsi Vrindavan and Symbols of Devotion',
    ],
    buttonText: 'Read Chapter 07',
    image: '/images/Chapter/tulsi.png',
    path: '/tradition/devotional-practices',
    icon: 'fa-solid fa-microphone-lines',
  },
  {
    number: '08',
    chapterNumber: '08',
    title: 'The Arrival at Pandharpur and the Spirit of Seva',
    subtitle: 'The Holy Chandrabhaga Snan and Unconditional Community Seva.',
    description: 'Discover the sacred Chandrabhaga Snan upon arrival at Pandharpur and the spirit of community hospitality and selfless service that sustains the Wari.',
    sections: [
      'Chandrabhaga Snan and Arrival at Pandharpur',
      'Seva – Serving Fellow Warkaris',
    ],
    buttonText: 'Read Chapter 08',
    image: '/images/Chapter/pilgrims.png',
    path: '/tradition/arrival-and-seva',
    icon: 'fa-solid fa-hand-holding-heart',
  },
];

export const LivingTraditionsOverview: React.FC = () => {
  const { navigateTo } = useRouter();

  const handleNavigate = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="living-traditions-overview chapter-directory-page">
      <section className="tradition-section chapter-directory-section">
        <div className="tradition-container">
          
          {/* Section Heading & Short Supporting Line */}
          <div className="directory-header-block text-center">
            <h2 className="tradition-section-heading centered">Explore the Chapters</h2>
            <p className="tradition-section-subheading">
              Four dedicated chapters exploring the rituals, organisation, devotional practices and arrival traditions of the Wari.
            </p>
            <div className="divider-split-gold center small"></div>
          </div>

          {/* 4 Chapter Cards Directly Displayed in a Balanced Grid */}
          <div className="journey-chapters-grid chapter-directory-grid">
            {CHAPTER_04_DIRECTORY_CARDS.map((chap) => (
              <article
                key={chap.number}
                className="journey-preview-card chapter-directory-card"
                onClick={() => handleNavigate(chap.path)}
                onMouseEnter={() => prefetchRoute(chap.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigate(chap.path);
                  }
                }}
                aria-label={`Open Chapter ${chap.chapterNumber}: ${chap.title}`}
              >
                {/* Card Media Banner */}
                <div className="preview-card-media">
                  <img
                    src={chap.image}
                    alt={chap.title}
                    className="preview-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="preview-card-overlay"></div>
                  <span className="preview-chap-num">Chapter {chap.chapterNumber}</span>
                </div>

                {/* Card Body */}
                <div className="preview-card-body">
                  <div className="preview-sub-tag">
                    <i className={chap.icon} style={{ marginRight: '0.4rem', color: 'var(--color-saffron)' }} aria-hidden="true"></i>
                    <span>{chap.subtitle}</span>
                  </div>
                  
                  <h3 className="preview-chap-title">{chap.title}</h3>
                  <p className="preview-chap-desc">{chap.description}</p>

                  {/* Sections Included Tag List */}
                  <div className="preview-sections-list">
                    <div className="sections-list-label">
                      Sections Included:
                    </div>
                    {chap.sections.map((sec, idx) => (
                      <div key={idx} className="section-bullet-item">
                        <span className="bullet-ornament" aria-hidden="true">❖</span>
                        <span>{sec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Footer with Prominent Button */}
                  <div className="preview-card-footer">
                    <span className="preview-link-text">{chap.buttonText}</span>
                    <div className="preview-arrow-circle" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default LivingTraditionsOverview;
