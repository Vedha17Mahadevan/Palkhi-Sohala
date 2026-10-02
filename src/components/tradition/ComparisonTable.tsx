import React from 'react';

interface ComparisonRow {
  aspect: string;
  icon: string;
  dnyaneshwar: {
    title: string;
    details: string;
  };
  tukaram: {
    title: string;
    details: string;
  };
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    aspect: 'Starting Point',
    icon: 'fa-solid fa-location-dot',
    dnyaneshwar: {
      title: 'Alandi (Indrayani River)',
      details: 'Departs from the sacred Sanjeevan Samadhi shrine of Sant Dnyaneshwar on Jyeshtha Vadya Ashtami.'
    },
    tukaram: {
      title: 'Dehu (Indrayani River)',
      details: 'Departs from the Gatha Mandir on the sacred banks of Indrayani on Jyeshtha Vadya Saptami.'
    }
  },
  {
    aspect: 'Founder & Organizer',
    icon: 'fa-solid fa-crown',
    dnyaneshwar: {
      title: 'Haibatravbaba Arphalkar',
      details: 'Former Scindia court military general who established the modern military discipline, silver chariot, and Ashwa horses.'
    },
    tukaram: {
      title: 'Narayan Maharaj (Son of Tukaram)',
      details: 'Sant Tukaram’s youngest son who first initiated carrying his father’s silver Padukas in 1685 CE.'
    }
  },
  {
    aspect: 'Historical Development',
    icon: 'fa-solid fa-clock-rotate-left',
    dnyaneshwar: {
      title: 'Royal Court Dignity & 1852 Panch Committee',
      details: 'Infused with aristocratic Maratha etiquette, Chobdar scouts, and formalized governance under the 1852 citizens committee.'
    },
    tukaram: {
      title: 'Grassroots Bhakti & 1685 Paduka Era',
      details: 'Centuries of unbroken mass community participation with profound emphasis on continuous congregational abhang singing.'
    }
  },
  {
    aspect: 'Present Route & Geography',
    icon: 'fa-solid fa-route',
    dnyaneshwar: {
      title: 'Northern Route (~250 km)',
      details: 'Alandi ➔ Pune ➔ Dive Ghat climb ➔ Saswad ➔ Jejuri ➔ Lonand ➔ Phaltan ➔ Natepute ➔ Malshiras ➔ Velapur ➔ Wakhari.'
    },
    tukaram: {
      title: 'Southern Route (~240 km)',
      details: 'Dehu ➔ Akurdi ➔ Pune ➔ Loni Kalbhor ➔ Yavat ➔ Patas ➔ Baramati ➔ Indapur ➔ Akluj ➔ Wakhari.'
    }
  },
  {
    aspect: 'Meeting Point (Convergence)',
    icon: 'fa-solid fa-handshake-angle',
    dnyaneshwar: {
      title: 'Wakhari & Ringan Arena',
      details: 'Celebrates legendary circular Ringan horse races at Baji Raoachi Vihir before entering Wakhari.'
    },
    tukaram: {
      title: 'Wakhari & Dhava Sprint',
      details: 'Celebrates the ecstatic Dhava (pious sprint) at Baji Raoachi Vihir before converging alongside Mauli at Wakhari.'
    }
  }
];

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="tradition-section tradition-comparison-section">
      <div className="tradition-container">
        
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag">Chapter 06 • Parallel Shrines</span>
          <h2 className="tradition-section-heading centered">Comparing the Two Great Palkhis</h2>
          <p className="tradition-section-subheading">
            Departing from holy origins thirty kilometers apart on the Indrayani River, the twin pillars of the Wari traverse distinct geography before uniting at Wakhari.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* Museum Styled Comparison Table Container */}
        <div className="comparison-table-wrapper">
          <div className="comparison-table-card">
            
            {/* Table Header */}
            <div className="comp-grid-header">
              <div className="comp-col-feature">
                <span className="col-header-tag">Aspect / Feature</span>
              </div>
              <div className="comp-col-palkhi alandi-header">
                <div className="comp-saint-avatar">
                  <img 
                    src="/images/saints/dnyaneshwar.jpg" 
                    alt="Sant Dnyaneshwar" 
                    className="avatar-img"
                    loading="lazy" 
                  />
                </div>
                <div className="header-info">
                  <span className="palkhi-lead-badge">Northern Route</span>
                  <h3 className="comp-saint-title">Sant Dnyaneshwar Maharaj</h3>
                  <span className="comp-origin-tag">Alandi to Pandharpur</span>
                </div>
              </div>
              <div className="comp-col-palkhi dehu-header">
                <div className="comp-saint-avatar">
                  <img 
                    src="/images/saints/tukaram.jpeg" 
                    alt="Sant Tukaram" 
                    className="avatar-img"
                    loading="lazy" 
                  />
                </div>
                <div className="header-info">
                  <span className="palkhi-lead-badge saffron">Southern Route</span>
                  <h3 className="comp-saint-title">Sant Tukaram Maharaj</h3>
                  <span className="comp-origin-tag">Dehu to Pandharpur</span>
                </div>
              </div>
            </div>

            {/* Table Rows with Animated Hover State */}
            <div className="comp-grid-body">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="comp-grid-row">
                  {/* Feature Label Column */}
                  <div className="comp-row-aspect">
                    <div className="aspect-icon-bubble">
                      <i className={row.icon}></i>
                    </div>
                    <span className="aspect-label">{row.aspect}</span>
                  </div>

                  {/* Dnyaneshwar Column */}
                  <div className="comp-row-cell alandi-cell">
                    <h4 className="cell-primary-title">{row.dnyaneshwar.title}</h4>
                    <p className="cell-secondary-desc">{row.dnyaneshwar.details}</p>
                  </div>

                  {/* Tukaram Column */}
                  <div className="comp-row-cell dehu-cell">
                    <h4 className="cell-primary-title saffron">{row.tukaram.title}</h4>
                    <p className="cell-secondary-desc">{row.tukaram.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Synthesis Callout */}
            <div className="comp-bottom-synthesis">
              <div className="synthesis-badge">
                <i className="fa-solid fa-bridge-water"></i>
                <span>The Sacred Convergence</span>
              </div>
              <p className="synthesis-text">
                At <strong>Wakhari</strong> (just five kilometers outside Pandharpur), both sovereign processions meet in ecstatic communion. Over one million pilgrims join hands as both silver chariots make their historic final march together toward the holy Chandrabhaga River and the lotus feet of Lord Vitthal.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
