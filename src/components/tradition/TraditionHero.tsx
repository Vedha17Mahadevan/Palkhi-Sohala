import React from 'react';

export const TraditionHero: React.FC = React.memo(() => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="tradition-documentary-hero">
      {/* 1. Full-bleed Background Image with Cinematic Grading */}
      <div className="docu-hero-bg-wrapper">
        <img 
          src="https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/tradition.png" 
          alt="Pandharpur Wari Tradition" 
          className="docu-hero-bg-img"
          loading="eager"
          decoding="async"
          {...({ fetchpriority: 'high' } as any)}
          width={2400}
          height={1080}
        />
        {/* Deep Maroon Museum Gradient Overlay: Left 0.92, Center 0.72, Right 0.35 */}
        <div className="docu-hero-maroon-overlay" aria-hidden="true"></div>
        {/* Subtle Vignette & Warmth */}
        <div className="docu-hero-vignette" aria-hidden="true"></div>
      </div>

      {/* 2. Vertically & Horizontally Centered Content */}
      <div className="docu-hero-content-wrap">
        <div className="docu-hero-content">
          <h1 className="docu-hero-title">
            THE TIMELESS TRADITION<br />
            OF THE <span className="docu-title-gold">PANDHARPUR WARI</span>
          </h1>

          <div className="docu-marathi-chant">
            ॥ पंढरीची वारी आमुचे दैवत ॥
          </div>

          <p className="docu-hero-description">
            A journey of devotion, equality and centuries-old faith.
          </p>
        </div>
      </div>

      {/* 3. Minimal Animated Scroll Indicator at Bottom Center */}
      <div className="docu-hero-scroll-cue">
        <a 
          href="#introduction" 
          onClick={(e) => scrollToSection(e, 'introduction')}
          aria-label="Explore the Tradition"
        >
          <span className="docu-scroll-chevron">⌄</span>
          <span className="docu-scroll-label">Explore the Tradition</span>
        </a>
      </div>
    </section>
  );
});

export default TraditionHero;
