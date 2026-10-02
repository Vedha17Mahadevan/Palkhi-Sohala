import React, { useEffect, useRef, useState } from 'react';

export const TwoJourneysComparison: React.FC = () => {
  const [isIntersected, setIsIntersected] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
        }
      });
    }, { threshold: 0.2 });

    const elem = sectionRef.current;
    if (elem) observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, []);

  return (
    <section id="two-journeys" ref={sectionRef} className="tradition-section tradition-two-journeys-section">
      <div className="tradition-container">
        
        <div className="museum-section-tag-wrap text-center">
          <span className="museum-tag">Chapter VI • Parallel River of Faith</span>
          <h2 className="tradition-section-heading centered">Two Sacred Journeys, One Divine Destination</h2>
          <p className="tradition-section-subheading">
            Departing from holy shrines 30 kilometers apart, the two sister processions traverse distinct geography before uniting at Wakhari.
          </p>
          <div className="divider-split-gold center small"></div>
        </div>

        {/* Comparison Cards: Alandi vs Dehu */}
        <div className="comparison-cards-grid">
          
          {/* Card Left: Alandi */}
          <div className="journey-card alandi-card">
            <div className="journey-card-header">
              <span className="journey-tag">Northern Route • Alandi</span>
              <h3 className="journey-saint-title">Sant Dnyaneshwar Maharaj</h3>
              <div className="journey-route-badge">Alandi → Pandharpur</div>
            </div>

            <div className="journey-stats-row">
              <div className="stat-pill">
                <span className="stat-label">Distance</span>
                <span className="stat-val">~250 km</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Duration</span>
                <span className="stat-val">18 Days</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Major Halt</span>
                <span className="stat-val">Saswad / Lonand</span>
              </div>
            </div>

            <div className="journey-highlights">
              <h4 className="highlights-title">Key Sacred Waypoints:</h4>
              <p className="waypoints-chain">
                Alandi ➔ Pune (2 nights) ➔ Dive Ghat ➔ Saswad ➔ Jejuri (Khandoba Darshan) ➔ Valhe ➔ Lonand ➔ Taradgaon ➔ Phaltan ➔ Barad ➔ Natepute ➔ Malshiras ➔ Velapur ➔ Shegaon ➔ <strong>Wakhari</strong>
              </p>
            </div>

            <div className="journey-tradition-box">
              <div className="tradition-icon"><i className="fa-solid fa-horse-head"></i></div>
              <div className="tradition-text">
                <strong>Famous Tradition:</strong> Celebrated for the majestic Dive Ghat climb and exhilarating circular Ringan races at Baji Raoachi Vihir.
              </div>
            </div>
          </div>

          {/* Card Right: Dehu */}
          <div className="journey-card dehu-card">
            <div className="journey-card-header">
              <span className="journey-tag saffron-tag">Southern Route • Dehu</span>
              <h3 className="journey-saint-title">Sant Tukaram Maharaj</h3>
              <div className="journey-route-badge saffron-badge">Dehu → Pandharpur</div>
            </div>

            <div className="journey-stats-row">
              <div className="stat-pill">
                <span className="stat-label">Distance</span>
                <span className="stat-val">~260 km</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Duration</span>
                <span className="stat-val">19 Days</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Major Halt</span>
                <span className="stat-val">Baramati / Indapur</span>
              </div>
            </div>

            <div className="journey-highlights">
              <h4 className="highlights-title">Key Sacred Waypoints:</h4>
              <p className="waypoints-chain">
                Dehu ➔ Akurdi ➔ Pune (2 nights) ➔ Loni Kalbhor ➔ Yavat ➔ Varvand ➔ Undavadi ➔ Baramati ➔ Sansar ➔ Anthurne ➔ Nimgaon Ketki ➔ Indapur ➔ Sarati (Nira Snan) ➔ Akluj ➔ Malinagar ➔ Borgaon ➔ <strong>Wakhari</strong>
              </p>
            </div>

            <div className="journey-tradition-box">
              <div className="tradition-icon saffron-icon"><i className="fa-solid fa-fire"></i></div>
              <div className="tradition-text">
                <strong>Famous Tradition:</strong> Revered for the historic bath in the Nira River at Sarati, grand Ringan at Akluj, and the sprint (Dhava) towards Pandharpur.
              </div>
            </div>
          </div>

        </div>

        {/* Animated Convergence Map Graphic */}
        <div className={`convergence-map-showcase ${isIntersected ? 'animate-convergence' : ''}`}>
          <div className="convergence-ornament-label">
            <span className="label-line"></span>
            <span className="label-badge">Sacred Convergence at Pandharpur</span>
            <span className="label-line"></span>
          </div>

          <div className="convergence-diagram-svg-wrap">
            <svg viewBox="0 0 900 320" className="convergence-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="alandiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A152C" />
                  <stop offset="80%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#FF7E15" />
                </linearGradient>
                <linearGradient id="dehuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF7E15" />
                  <stop offset="80%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A152C" />
                </linearGradient>
                <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Connecting Arc Guides */}
              <path d="M 120 70 C 350 70, 480 150, 680 160" fill="none" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="4" strokeDasharray="6 6" />
              <path d="M 120 250 C 350 250, 480 170, 680 160" fill="none" stroke="rgba(255, 126, 21, 0.15)" strokeWidth="4" strokeDasharray="6 6" />
              <path d="M 680 160 L 800 160" fill="none" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="6" />

              {/* Animated Animated Drawing Paths */}
              <path 
                d="M 120 70 C 350 70, 480 150, 680 160" 
                fill="none" 
                stroke="url(#alandiGradient)" 
                strokeWidth="4" 
                className="animated-route-path alandi-path"
              />
              <path 
                d="M 120 250 C 350 250, 480 170, 680 160" 
                fill="none" 
                stroke="url(#dehuGradient)" 
                strokeWidth="4" 
                className="animated-route-path dehu-path"
              />
              <path 
                d="M 680 160 L 800 160" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="6" 
                className="animated-route-path final-path"
              />

              {/* Alandi Origin Node */}
              <circle cx="120" cy="70" r="18" fill="#5C0618" stroke="#D4AF37" strokeWidth="3" />
              <text x="120" y="75" textAnchor="middle" fill="#FFE082" fontSize="11" fontWeight="bold">ॐ</text>
              <text x="120" y="38" textAnchor="middle" fill="#5C0618" fontSize="13" fontFamily="Cinzel" fontWeight="bold">Alandi (Mauli)</text>

              {/* Dehu Origin Node */}
              <circle cx="120" cy="250" r="18" fill="#FF7E15" stroke="#FFE082" strokeWidth="3" />
              <text x="120" y="255" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">ॐ</text>
              <text x="120" y="295" textAnchor="middle" fill="#5C0618" fontSize="13" fontFamily="Cinzel" fontWeight="bold">Dehu (Tukaram)</text>

              {/* Wakhari Confluence Node */}
              <circle cx="680" cy="160" r="15" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="3" />
              <text x="680" y="164" textAnchor="middle" fill="#5C0618" fontSize="10" fontWeight="bold">❖</text>
              <text x="680" y="132" textAnchor="middle" fill="#5C0618" fontSize="12" fontFamily="Montserrat" fontWeight="bold">Wakhari Confluence</text>
              <text x="680" y="196" textAnchor="middle" fill="#6B5E59" fontSize="10">Eve of Dashami</text>

              {/* Final Pandharpur Sanctuary Node */}
              <circle cx="800" cy="160" r="28" fill="#2D020B" stroke="#D4AF37" strokeWidth="4" filter="url(#glowGold)" />
              <circle cx="800" cy="160" r="20" fill="none" stroke="#FFE082" strokeWidth="1" strokeDasharray="3 3" />
              <text x="800" y="165" textAnchor="middle" fill="#FFE082" fontSize="16">🚩</text>
              <text x="800" y="210" textAnchor="middle" fill="#5C0618" fontSize="14" fontFamily="Cinzel Decorative" fontWeight="bold">Pandharpur</text>
              <text x="800" y="228" textAnchor="middle" fill="#8A152C" fontSize="11" fontWeight="600">Ashadhi Ekadashi</text>
            </svg>
          </div>

          <p className="convergence-note">
            At <strong>Wakhari</strong>, just five kilometers outside Pandharpur, both grand Palkhis meet on the eve of Ashadhi Ekadashi in an emotional reunion known as the <em>Ubhe Ringan</em>, before entering the sacred city together.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TwoJourneysComparison;
