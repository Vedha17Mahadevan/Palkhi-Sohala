import React, { useState, useEffect, useRef } from 'react';

import rksLogo from '../images/RKSSTGM text maroon.png';
import vitthalTilak from '../images/Vitthal tilak.png';
import warkariFoot from '../images/splash foot.png';

// ================================================================= //
// ABHANGA CARD SUB-COMPONENT                                        //
// ================================================================= //
interface AbhangaProps {
  title: string;
  lyrics: React.ReactNode;
  meaning: string;
  singer: string;
}

const AbhangaCard: React.FC<AbhangaProps> = ({ title, lyrics, meaning, singer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handlePlayPause = () => {
    // If we click play on this card, first find if other players are active in the document 
    // and stop them, or manage locally. In React, a simple local toggle works beautifully.
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      // Simulate playback progress bar filling
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1.25; // progresses smoothly
        });
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="abhanga-card-item reveal">
      <div className="card-top-icon"><i className="fa-solid fa-music"></i></div>
      <h3>{title}</h3>
      <div className="abhanga-lyric">{lyrics}</div>
      <div className="abhanga-meaning">
        <strong>Meaning:</strong> {meaning}
      </div>
      
      {/* Interactive Player */}
      <div className="audio-player-sim">
        <button className="play-btn" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
          <i className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
        </button>
        <div className="track-info">
          <span className="track-title">{title} - {singer}</span>
          <div className="progress-bar-sim">
            <div className="progress-fill-sim" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ================================================================= //
// MAIN APP COMPONENT                                                //
// ================================================================= //
export default function App() {
  const [isSplashActive, setIsSplashActive] = useState(true);
  const [isSplashFadingOut, setIsSplashFadingOut] = useState(false);
  const [isLandingActive, setIsLandingActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Lock scroll during splash screen and run timers
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Timer to trigger fadeout after loading sequence (6.2 seconds)
    const fadeOutTimer = setTimeout(() => {
      setIsSplashFadingOut(true);
    }, 6200);

    // Timer to fully remove splash screen and reveal landing page (7.0 seconds)
    const activeTimer = setTimeout(() => {
      setIsSplashActive(false);
      setIsLandingActive(true);
      document.body.style.overflow = 'auto';
    }, 7000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(activeTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Scroll handler for Active Nav Link and Reveal Animation triggers
  useEffect(() => {
    if (!isLandingActive) return;

    const handleScroll = () => {
      // Header shadow class on scroll
      const header = document.querySelector('.main-header') as HTMLElement;
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 10px 30px rgba(92, 6, 24, 0.05)';
        } else {
          header.style.boxShadow = 'none';
        }
      }

      // Highlight navigation link relative to scroll position
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(current);

      // Trigger reveal-on-scroll animations
      const revealElements = document.querySelectorAll('.reveal');
      const triggerBottom = window.innerHeight * 0.85;
      revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial values for reveal animation nodes
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount to capture above-the-fold reveals

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingActive]);

  // Helper function to smooth scroll to anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* =============================================================== */}
      {/* SPLASH SCREEN COMPONENT                                         */}
      {/* =============================================================== */}
      {isSplashActive && (
        <div id="splash-screen" className={isSplashFadingOut ? 'fade-out' : ''}>
          <div className="splash-bg"></div>
          <div className="splash-overlay"></div>

          <div className="splash-content">
            {/* Top Center Logo & Sub-tagline */}
            <div className="splash-top">
              <img src={rksLogo} alt="RadhaKrishna Satsangam Logo" className="rks-logo" />
              <span className="presents-text">presents</span>
            </div>

            {/* Exact Center Tilak Loader */}
            <div className="splash-center">
              <div className="glow-bg"></div>
              <div className="center-loader-group">
                <div className="vitthal-icon-container">
                  {/* Circle Loader */}
                  <svg className="progress-ring-svg" viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE082" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#AA7C11" />
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="54" fill="none" stroke="url(#gold-grad)" strokeWidth="2.5" 
                            className="progress-circle" strokeLinecap="round" />
                  </svg>

                  {/* Vitthal Forehead Tilak PNG */}
                  <img src={vitthalTilak} alt="Vitthal Tilak" className="vitthal-icon" />
                </div>

                {/* Horizontal Loading Bar */}
                <div className="progress-bar-container">
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer: Left to Right Marquee */}
            <div className="splash-bottom">
              <div className="warkari-footer">
                <div className="warkari-track">
                  <img src={warkariFoot} alt="Warkari Silhouette" className="warkari-img" />
                  <img src={warkariFoot} alt="Warkari Silhouette" className="warkari-img" />
                  <img src={warkariFoot} alt="Warkari Silhouette" className="warkari-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =============================================================== */}
      {/* MAIN LANDING PAGE                                               */}
      {/* =============================================================== */}
      <div id="landing-page" className={isLandingActive ? 'active' : ''}>
        
        {/* Navigation Header */}
        <header className="main-header">
          <div className="header-container">
            <div className="header-logo">
              <img src={rksLogo} alt="RadhaKrishna Satsangam" className="header-logo-img" />
            </div>
            
            <nav className="main-nav">
              <ul>
                <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li><a href="#about-wari" className={`nav-link ${activeSection === 'about-wari' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'about-wari')}>The Wari</a></li>
                <li><a href="#saints" className={`nav-link ${activeSection === 'saints' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'saints')}>Saints</a></li>
                <li><a href="#palkhi-route" className={`nav-link ${activeSection === 'palkhi-route' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhi Route</a></li>
                <li><a href="#abhangas" className={`nav-link ${activeSection === 'abhangas' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'abhangas')}>Abhangas</a></li>
              </ul>
            </nav>

            <div className="header-cta">
              <a href="#join-us" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'join-us')}>Join Satsang</a>
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open Navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Navigation">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <nav className="mobile-nav">
            <ul>
              <li><a href="#home" className="mobile-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about-wari" className="mobile-link" onClick={(e) => handleNavClick(e, 'about-wari')}>The Wari</a></li>
              <li><a href="#saints" className="mobile-link" onClick={(e) => handleNavClick(e, 'saints')}>Saints</a></li>
              <li><a href="#palkhi-route" className="mobile-link" onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhi Route</a></li>
              <li><a href="#abhangas" className="mobile-link" onClick={(e) => handleNavClick(e, 'abhangas')}>Abhangas</a></li>
              <li><a href="#join-us" className="mobile-link btn-mobile-cta" onClick={(e) => handleNavClick(e, 'join-us')}>Join Satsang</a></li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-bg-overlay"></div>
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-tagline">जय जय राम कृष्ण हरी</span>
              <h1 className="hero-title">Ashadhi Ekadashi</h1>
              <p className="hero-subtitle">Celebrating the Devotional Ecstasy of the Warkari Sampradaya</p>
              
              <div className="quote-container">
                <p className="abhanga-quote">"आनंदाचे डोही आनंद तरंग । आनंदची अंग आनंदाचे ॥"</p>
                <p className="quote-author">— संत तुकाराम महाराज</p>
              </div>
              
              <div className="hero-buttons">
                <a href="#about-wari" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'about-wari')}>Explore the Wari</a>
                <a href="#palkhi-route" className="btn btn-outline" onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhi Schedule</a>
              </div>
            </div>
          </div>
          <div className="hero-wave">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#FAF6EE"/>
            </svg>
          </div>
        </section>

        {/* About Wari Section */}
        <section id="about-wari" className="about-section">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-text-content">
                <span className="section-tag reveal">The Sacred Pilgrimage</span>
                <h2 className="section-title reveal">What is the Pandharpur Wari?</h2>
                <div className="divider reveal"></div>
                <p className="lead-text reveal">For over 800 years, devotees of Maharashtra have undertaken a walking pilgrimage (Wari) to the holy town of Pandharpur to meet their beloved deity, Lord Vitthal.</p>
                <p className="reveal">Walking barefeet, singing the glories of Lord Hari, carrying saffron flags (*Patakas*), and carrying the *Palkhis* (palanquins) containing the padukas of revered saints, this journey represents the ultimate merging of individual souls with the divine.</p>
                <p className="reveal">It is not merely a walk; it is an equalizer where distinctions of caste, creed, gender, and wealth dissolve into the soil of devotion. Millions march together, driven by pure love and surrender, symbolizing the spiritual democracy established by the Warkari saints.</p>
                
                <div className="stat-boxes">
                  <div className="stat-box reveal">
                    <span className="stat-num">21+</span>
                    <span className="stat-lbl">Days of Walking</span>
                  </div>
                  <div className="stat-box reveal">
                    <span className="stat-num">250+</span>
                    <span className="stat-lbl">Kilometers Covered</span>
                  </div>
                  <div className="stat-box reveal">
                    <span className="stat-num">2M+</span>
                    <span className="stat-lbl">Devotees (Warkaris)</span>
                  </div>
                </div>
              </div>
              
              <div className="about-media reveal">
                <div className="image-stack">
                  <div className="image-card img-main">
                    <div className="vitthal-deity-card">
                      <div className="deity-glow"></div>
                      <div className="deity-symbol">विठ्ठल</div>
                      <span className="deity-title">पुंडलिक वरदा हरी विठ्ठल</span>
                    </div>
                  </div>
                  <div className="image-card img-sub">
                    <div className="devotion-info-card">
                      <h3>आषाढी एकादशी</h3>
                      <p>The eleventh lunar day of Ashadha month, marking the culmination of the pilgrimage as Warkaris reach the Chandrabhaga River and offer their prayers at the Vitthal Mandir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saints Section */}
        <section id="saints" className="saints-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-tag reveal">Pillars of Devotion</span>
              <h2 className="section-title reveal">The Great Warkari Saints</h2>
              <div className="divider center reveal"></div>
              <p className="section-subtitle reveal">Whose teachings, verses, and songs continue to light the path of Bhakti across Maharashtra.</p>
            </div>

            <div className="saints-grid">
              <div className="saint-card reveal">
                <div className="saint-badge"><i className="fa-solid fa-feather-pointed"></i></div>
                <h3 className="saint-name">Sant Dnyaneshwar</h3>
                <span className="saint-era">13th Century (Alandi)</span>
                <p className="saint-desc">The intellectual foundation of the Sampradaya. At a tender age, he translated the Bhagavad Gita into Marathi (the Dnyaneshwari), opening the doors of spiritual knowledge to the common person.</p>
                <blockquote className="saint-quote">"विश्वात्मके देवे येणे वाग्यज्ञे तोषावे..."</blockquote>
              </div>

              <div className="saint-card reveal">
                <div className="saint-badge"><i className="fa-solid fa-om"></i></div>
                <h3 className="saint-name">Sant Tukaram</h3>
                <span className="saint-era">17th Century (Dehu)</span>
                <p className="saint-desc">The voice of ecstasy and practical devotion. His thousands of Abhangas are revered for their honesty, simplicity, and deep spiritual experience, making Vitthal a close companion of every devotee.</p>
                <blockquote className="saint-quote">"तीर्थी धोंडापाणी | देव आहे अंतःकरणी..."</blockquote>
              </div>

              <div className="saint-card reveal">
                <div className="saint-badge"><i className="fa-solid fa-guitar"></i></div>
                <h3 className="saint-name">Sant Namdev</h3>
                <span className="saint-era">13th-14th Century (Narsi)</span>
                <p className="saint-desc">The pioneer of Kirtan. He traveled extensively across India, including Punjab (where his verses are included in the Guru Granth Sahib), spreading the message of Naam Smaran (chanting the Name).</p>
                <blockquote className="saint-quote">"नामा म्हणे विठोबाच्या चरणी... "</blockquote>
              </div>

              <div className="saint-card reveal">
                <div className="saint-badge"><i className="fa-solid fa-hands-praying"></i></div>
                <h3 className="saint-name">Sant Eknath</h3>
                <span className="saint-era">16th Century (Paithan)</span>
                <p className="saint-desc">The saint of compassion and equality. He worked tirelessly to remove social barriers, treated all living beings with equal respect, and compiled the first critical edition of the Dnyaneshwari.</p>
                <blockquote className="saint-quote">"काया ही पंढरी, आत्मा हा विठ्ठल..."</blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Route Section */}
        <section id="palkhi-route" className="timeline-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-tag reveal">The Sacred Path</span>
              <h2 className="section-title reveal">The Palkhi Sohala Route</h2>
              <div className="divider center reveal"></div>
              <p className="section-subtitle reveal">Tracing the main stops of the Sant Dnyaneshwar Maharaj Palkhi as it marches from Alandi to Pandharpur.</p>
            </div>

            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item left reveal">
                <div className="timeline-dot">1</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 1 - 2</span>
                  <h3>Alandi Prasthan</h3>
                  <p>The journey begins at the Samadhi Mandir in Alandi. Devotees gather in the temple courtyard as the silver chariot carrying the Padukas of Sant Dnyaneshwar is prepared for departure.</p>
                </div>
              </div>

              <div className="timeline-item right reveal">
                <div className="timeline-dot">2</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 3 - 4</span>
                  <h3>Pune & Saswad</h3>
                  <p>Passing through the city of Pune, the Palkhi halts at the historical temples before climbing the steep Dive Ghat. Warkaris singing in harmony climb the ghat in a spectacular display of devotion.</p>
                </div>
              </div>

              <div className="timeline-item left reveal">
                <div className="timeline-dot">3</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 7</span>
                  <h3>Jejuri (Gold Dust Halt)</h3>
                  <p>The Palkhi visits the hill town of Jejuri, dedicated to Lord Khandoba. Warkaris are welcomed with showers of golden turmeric (*Bhandara*), coating the entire procession in brilliant yellow.</p>
                </div>
              </div>

              <div className="timeline-item right reveal">
                <div className="timeline-dot">4</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 12</span>
                  <h3>Phaltan</h3>
                  <p>Entering the heart of rural Maharashtra, the Wari is greeted by local villagers with water, food, and absolute warmth. This represents a period of rest and community satsangs.</p>
                </div>
              </div>

              <div className="timeline-item left reveal">
                <div className="timeline-dot">5</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 17</span>
                  <h3>The Rings (Gol Ringan)</h3>
                  <p>At locations like Natepute, the spectacular *Gol Ringan* is held. Warkaris form a giant human ring, and the sacred horse (*Maulincha Ashwa*) runs around the inner track at full gallop, blessed by the crowd.</p>
                </div>
              </div>

              <div className="timeline-item right reveal">
                <div className="timeline-dot">6</div>
                <div className="timeline-content">
                  <span className="timeline-day">Day 20 - 21</span>
                  <h3>Wakhri to Pandharpur</h3>
                  <p>The various Palkhis merge at Wakhri. Warkaris run the last few miles in absolute ecstasy. Upon reaching Pandharpur, they bathe in the Chandrabhaga River and proceed for the final darshan of Vitoba.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abhangas Section */}
        <section id="abhangas" className="abhanga-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-tag reveal">Musical Nectar</span>
              <h2 className="section-title reveal">Nectar of Abhangas</h2>
              <div className="divider center reveal"></div>
              <p className="section-subtitle reveal">Listen to and contemplate the devotional poems composed by the saints of Pandharpur.</p>
            </div>

            <div className="abhanga-cards">
              <AbhangaCard 
                title="सुंदर ते ध्यान"
                lyrics={
                  <>
                    सुंदर ते ध्यान उभे विटेवरी ।<br />
                    कर कटावरी ठेवोनिया ॥ १ ॥<br /><br />
                    तुळसीहार गळा कासे पीतांबर ।<br />
                    आवडे निरंतर हेचि रूप ॥ २ ॥
                  </>
                }
                meaning="Beautiful is the form of Lord Vitthal standing on a brick, with His hands resting on His hips. Wearing a garland of Tulsi leaves and yellow silks, this is the form I wish to contemplate forever."
                singer="Traditional"
              />

              <AbhangaCard 
                title="माझे माहेर पंढरी"
                lyrics={
                  <>
                    माझे माहेर पंढरी । आहे भीवरेच्या तीरी ॥ १ ॥<br />
                    बाप रखुमादेवीवर । विठ्ठल सोयरा सज्जण ॥ २ ॥<br /><br />
                    संत सर्वही मिळोनी । येती माहेरच्या गुणी ॥ ३ ॥
                  </>
                }
                meaning="Pandharpur, situated on the banks of the Bhima (Chandrabhaga) river, is my mother's home (Maher). Lord Vitthal is my father, Rakhumai is my mother, and all the saints are my loving relatives."
                singer="Pt. Bhimsen Joshi"
              />
            </div>
          </div>
        </section>

        {/* Join Satsang Call-to-Action Section */}
        <section id="join-us" className="join-section">
          <div className="join-bg-image"></div>
          <div className="join-overlay"></div>
          <div className="section-container">
            <div className="join-box">
              <span className="join-tag">RadhaKrishna Satsangam</span>
              <h2>Connect with the Warkari Wisdom</h2>
              <p>Join our online and offline Satsangs to dive deep into the philosophy of the Warkari saints, study the Dnyaneshwari and Tukaram Gatha, and sing Abhangas in pure devotion. Let us keep the spirit of Wari alive in our hearts, every day.</p>
              
              <form className="join-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Radhe Radhe! Thank you for connecting. We will reach out to you soon.');
              }}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone Number" />
                </div>
                <button type="submit" className="btn btn-primary btn-submit">Receive Satsang Updates</button>
              </form>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <img src={rksLogo} alt="RadhaKrishna Satsangam Logo" className="footer-logo" />
              <p>Spiritual discourses, devotional singing, and community service rooted in the teachings of the Warkari saints.</p>
              <div className="social-links">
                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li><a href="#about-wari" onClick={(e) => handleNavClick(e, 'about-wari')}>The Wari Pilgrimage</a></li>
                <li><a href="#saints" onClick={(e) => handleNavClick(e, 'saints')}>Warkari Saints</a></li>
                <li><a href="#palkhi-route" onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhi Route</a></li>
                <li><a href="#abhangas" onClick={(e) => handleNavClick(e, 'abhangas')}>Abhangas</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p><i className="fa-solid fa-envelope"></i> contact@radhakrishnasatsangam.org</p>
              <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
              <p><i className="fa-solid fa-location-dot"></i> Alandi Devachi, Pune, Maharashtra, India</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 RadhaKrishna Satsangam. All Rights Reserved. Dedicated to the lotus feet of Shri Rukmini Vitthal.</p>
          </div>
          <div className="footer-silhouette-bg"></div>
        </footer>

      </div>
    </>
  );
}
