import React, { useState } from 'react';

interface SaintPortrait {
  id: string;
  name: string;
  marathiName: string;
  era: string;
  role: string;
  vocation: string;
  image: string;
  masterpiece: string;
  philosophy: string;
  quote: string;
  quoteTranslation: string;
  historicalImpact: string;
}

const SAINTS_GALLERY: SaintPortrait[] = [
  {
    id: 'dnyaneshwar',
    name: 'Sant Dnyaneshwar Maharaj',
    marathiName: 'संत ज्ञानेश्वर महाराज',
    era: '1275 – 1296 CE (Samadhi at 21)',
    role: 'The Foundation of Bhagavata Dharma',
    vocation: 'Philosopher & Yogi of Alandi',
    image: '/images/saints/dnyaneshwar.jpg',
    masterpiece: 'Bhavartha Dipika (Dnyaneshwari) & Amritanubhava',
    philosophy: 'Broke the Sanskrit monopoly to democratize Vedic wisdom into everyday Marathi for farmers and artisans.',
    quote: 'जे खळांची व्यंकटी सांडो । तया सत्कर्मीं रती वाढो । भूतां परस्परे पडो । मैत्र जीवाचें ॥',
    quoteTranslation: 'May the crookedness of evil minds dissolve; may affection for noble deeds blossom; may universal friendship embrace all living beings.',
    historicalImpact: 'Laid the philosophical bedrock of the Warkari path and gifted the world the Pasaydan (Universal Benediction).'
  },
  {
    id: 'namdev',
    name: 'Sant Namdev Maharaj',
    marathiName: 'संत नामदेव महाराज',
    era: '1270 – 1350 CE',
    role: 'The Expander Across India',
    vocation: 'Tailor (Shimpi) by caste',
    image: '/images/saints/namdev.webp',
    masterpiece: 'Namdev Gatha & 61 Hymns in the Guru Granth Sahib',
    philosophy: 'Took the nectar of Pandharpur from Maharashtra across northern India to Punjab, preaching radical equality.',
    quote: 'नामा म्हणे विठ्ठल आमुचे जीवन । विठ्ठल धन मान सर्वस्व आमुचे ॥',
    quoteTranslation: 'Namdev says: Vitthal is our very breath, Vitthal is our wealth, our honor, our all in all.',
    historicalImpact: 'Walked across India with Sant Dnyaneshwar, instituting community Kirtan and inter-regional harmony.'
  },
  {
    id: 'eknath',
    name: 'Sant Eknath Maharaj',
    marathiName: 'संत एकनाथ महाराज',
    era: '1533 – 1599 CE',
    role: 'The Pillar of Harmony & Revival',
    vocation: 'Scholar-Saint of Paithan',
    image: '/images/saints/eknath.jpg',
    masterpiece: 'Eknathi Bhagavata & Critical Dnyaneshwari',
    philosophy: 'Rediscovered the lost samadhi of Dnyaneshwar in Alandi; fed pariahs and gave sacred Ganga water to a dying thirsty donkey.',
    quote: 'काय करावे ते ज्ञान । जेणे न वळे भगवद् भजन ॥',
    quoteTranslation: 'What use is intellectual knowledge if it does not melt the heart in genuine devotion and compassion?',
    historicalImpact: 'Revived the Alandi pilgrimage after centuries of war and standardized the Paithan Wari route.'
  },
  {
    id: 'tukaram',
    name: 'Sant Tukaram Maharaj',
    marathiName: 'संत तुकाराम महाराज',
    era: '1608 – 1650 CE',
    role: 'The Pinnacle Pinnacle (Kalash) of Bhakti',
    vocation: 'Farmer & Merchant of Dehu',
    image: '/images/saints/tukaram.jpeg',
    masterpiece: 'Tukaram Gatha (4,500+ Abhangas)',
    philosophy: 'Fearless moral voice who exposed ritual hypocrisy and declared that seeing God in the suffering is true sainthood.',
    quote: 'जे का रंजले गांजले । त्यांसी म्हणे जो आपुले । तोचि साधू ओळखावा । देव तेथेचि जाणावा ॥',
    quoteTranslation: 'He who embraces the downtrodden and afflicted as his very own—know him alone to be a true saint; God resides right there.',
    historicalImpact: 'His lyrical verses became the national devotional heartbeat of Maharashtra and inspired the Dehu Palkhi.'
  }
];

const VOCATIONAL_SAINTS = [
  {
    name: 'Sant Chokhamela',
    marathiName: 'संत चोखामेळा',
    vocation: 'Mahar (Outcaste)',
    image: '/images/saints/chokhamela.webp',
    keyNote: 'Taught that physical touch is transient, but the soul is pure light. When the temple doors were shut against him, Vitthal appeared in his courtyard.'
  },
  {
    name: 'Sant Gora Kumbhar',
    marathiName: 'संत गोरा कुंभार',
    vocation: 'Potter (Kumbhar)',
    image: '/images/saints/gora-kumbhar.jpg',
    keyNote: 'Tested the spiritual maturity of saints by tapping their heads like clay pots. Taught that everyday labor is continuous worship.'
  },
  {
    name: 'Sant Savata Mali',
    marathiName: 'संत सावता माळी',
    vocation: 'Gardener (Mali)',
    image: '/images/saints/savata-mali.jpeg',
    keyNote: 'Famously declared: “Garlic, onion, and chili are my Vitthal.” Proved you need not leave your vocation to reach enlightenment.'
  },
  {
    name: 'Sant Janabai',
    marathiName: 'संत जनाबाई',
    vocation: 'Maidservant & Mystic Poet',
    image: '/images/saints/janabai.jpg',
    keyNote: 'Wrote sublime abhangas describing how Vitthal ground grain and washed clothes alongside her, honoring the dignity of domestic labor.'
  }
];

export const EvolutionSection: React.FC = () => {
  const [selectedSaintId, setSelectedSaintId] = useState<string>('dnyaneshwar');
  const activeSaint = SAINTS_GALLERY.find(s => s.id === selectedSaintId) || SAINTS_GALLERY[0];

  return (
    <section id="evolution" className="tradition-section tradition-saints-section chapter-museum-saints">
      <div className="tradition-container">
        
        {/* Curated Museum Header */}
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag saints-tag">Archive Gallery 03 • The Visionaries</span>
          <h2 className="tradition-section-heading centered">The Great Saints of the Wari</h2>
          <p className="tradition-section-subheading">
            The egalitarian poet-philosophers who dismantled medieval caste orthodoxies and turned devotion into a universal human right.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* 1. The Living Metaphor of the Temple of Bhakti (Santkrupa Zali) */}
        <div className="temple-of-bhakti-banner">
          <div className="temple-banner-header">
            <span className="temple-mini-tag">Sacred Metaphor</span>
            <h3 className="temple-title">The Edifice of Divine Grace (संतकृपा इमारत)</h3>
            <p className="temple-sub">The classic 17th-century verse that maps how each saint built the grand sanctuary of the Wari:</p>
          </div>

          <div className="temple-pillars-grid">
            <div className="temple-pillar-item">
              <span className="pillar-stage">Foundation (पाया)</span>
              <h4 className="pillar-saint">Sant Dnyaneshwar</h4>
              <p className="pillar-desc">“ज्ञानदेवे रचिला पाया” — Laid the bedrock with Dnyaneshwari and universal brotherhood.</p>
            </div>

            <div className="temple-pillar-item">
              <span className="pillar-stage">Walls (विस्तार)</span>
              <h4 className="pillar-saint">Sant Namdev</h4>
              <p className="pillar-desc">“नामा तयाचा किंकर तेणे केला हा विस्तार” — Expanded devotion across India and community Kirtan.</p>
            </div>

            <div className="temple-pillar-item">
              <span className="pillar-stage">Pillar (खांब)</span>
              <h4 className="pillar-saint">Sant Eknath</h4>
              <p className="pillar-desc">“जनार्दन एकनाथ खांब दिला भागवत” — Erected the central pillar of social compassion and Paithan Wari.</p>
            </div>

            <div className="temple-pillar-item highlight">
              <span className="pillar-stage gold">Pinnacle (कळस)</span>
              <h4 className="pillar-saint">Sant Tukaram</h4>
              <p className="pillar-desc">“तुका झालासे कळस भजन करा सावकाश” — Crowned the temple with 4,500+ immortal abhangas.</p>
            </div>
          </div>
        </div>

        {/* 2. Interactive Saint Portrait Gallery */}
        <div className="saints-interactive-showcase">
          <div className="showcase-nav-row">
            {SAINTS_GALLERY.map(saint => (
              <button
                key={saint.id}
                className={`saint-tab-btn ${selectedSaintId === saint.id ? 'active' : ''}`}
                onClick={() => setSelectedSaintId(saint.id)}
              >
                <div className="tab-thumb-circle">
                  <img src={saint.image} alt={saint.name} />
                </div>
                <div className="tab-label-wrap">
                  <span className="tab-saint-name">{saint.name.split(' ')[1]}</span>
                  <span className="tab-saint-era">{saint.era.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Saint Spotlight Exhibit Card */}
          <div className="saint-spotlight-display">
            <div className="spotlight-portrait-col">
              <div className="halo-portrait-wrapper">
                <div className="saint-golden-halo" aria-hidden="true"></div>
                <img 
                  src={activeSaint.image} 
                  alt={activeSaint.name} 
                  className="saint-halo-image" 
                />
                <div className="portrait-accession-tag">
                  <span>{activeSaint.marathiName}</span>
                </div>
              </div>
            </div>

            <div className="spotlight-content-col">
              <div className="spotlight-era-badge">{activeSaint.era}</div>
              <h3 className="spotlight-saint-title">{activeSaint.name}</h3>
              <span className="spotlight-role">{activeSaint.role} • {activeSaint.vocation}</span>

              <div className="spotlight-divider"></div>

              <p className="spotlight-philosophy">{activeSaint.philosophy}</p>

              <div className="spotlight-quote-box">
                <div className="quote-marathi">{activeSaint.quote}</div>
                <div className="quote-english">“{activeSaint.quoteTranslation}”</div>
              </div>

              <div className="spotlight-masterpiece-row">
                <span className="label">Key Monumental Work:</span>
                <span className="val">{activeSaint.masterpiece}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The Saints of Every Vocation (Universal Inclusivity) */}
        <div className="vocational-saints-section">
          <div className="vocational-header text-center">
            <span className="vocational-badge">Social Revolution of the 13th–17th Century</span>
            <h3 className="vocational-title">The Egalitarian Galaxy of Saints</h3>
            <p className="vocational-sub">
              Bhakti did not belong to cloistered monasteries; it blossomed in vegetable gardens, pottery kilns, tailoring shops, and maidservant kitchens.
            </p>
          </div>

          <div className="vocational-cards-grid">
            {VOCATIONAL_SAINTS.map(s => (
              <div key={s.name} className="vocation-saint-card">
                <div className="vocation-card-top">
                  <div className="vocation-img-circle">
                    <img src={s.image} alt={s.name} />
                  </div>
                  <div className="vocation-titles">
                    <h4 className="v-name">{s.name}</h4>
                    <span className="v-marathi">{s.marathiName}</span>
                    <span className="v-tag">{s.vocation}</span>
                  </div>
                </div>
                <p className="v-note">{s.keyNote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Full-Width Pasaydan Banner */}
        <div className="museum-fullwidth-quote-banner pasaydan-banner">
          <div className="quote-ornamental-mark left">“</div>
          <div className="pasaydan-inner">
            <span className="pasaydan-pre">Sant Dnyaneshwar’s Cosmic Prayer for Universal Harmony</span>
            <blockquote className="quote-verse-text pasaydan-text">
              आतां विश्वात्मकें देवें । येणे वाग्यज्ञें तोषावें ।<br />
              तोषोनि मज द्यावें । पसायदान हें ॥
            </blockquote>
            <div className="quote-verse-translation">
              “Now may the Supreme Divine Soul of the cosmos be pleased by this verbal offering; and being pleased, grant unto me this blessing of universal grace.”
            </div>
            <cite className="quote-author-tag">
              <span className="author-name">— Sant Dnyaneshwar Maharaj</span>
              <span className="author-work">Pasaydan (Dnyaneshwari Epilogue, 1290 CE)</span>
            </cite>
          </div>
          <div className="quote-ornamental-mark right">”</div>
        </div>

      </div>
    </section>
  );
};

export default EvolutionSection;
