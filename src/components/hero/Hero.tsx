import React from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';

export const Hero: React.FC = React.memo(() => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Incense floating particles */}
      <div className="incense-particles">
        <div className="incense-particle p1"></div>
        <div className="incense-particle p2"></div>
        <div className="incense-particle p3"></div>
        <div className="incense-particle p4"></div>
        <div className="incense-particle p5"></div>
        <div className="incense-particle p6"></div>
      </div>

      <div className="hero-bg-overlay"></div>
      
      {/* Desktop-only HTML image to ensure 100% of the artwork is visible without cropping */}
      <img
        src={getCloudinaryUrl('vk1', { width: 1400 })}
        className="hero-image-render desktop-only"
        alt="Ashadhi Ekadashi Lord Vitthal and Rakhumai divine darshan"
        width={1672}
        height={941}
        loading="eager"
        decoding="async"
        {...({ fetchpriority: 'high' } as any)}
      />
      
      <div className="hero-container">
        {/* Left Side: Spacer so background deities in vk1 artwork are visible */}
        <div className="hero-deity-spacer"></div>
        
        {/* Right Side: Devotional content */}
        <div className="hero-content-column load-delay-500">
          <div className="marathi-title-group">
            <h1 className="marathi-title-main">आषाढी</h1>
            <h1 className="marathi-title-sub">एकादशी</h1>
          </div>
          
          <div className="devotional-chant">|| राम कृष्ण हरी, वासुदेव हरी ||</div>
          
          <div className="hero-flourish-divider">
            <span className="flourish-line"></span>
            <span className="flourish-icon">✿</span>
            <span className="flourish-line"></span>
          </div>
          
          <p className="hero-subtext-palkhi">A Guide to all Palkhis of Pandharpur</p>
        </div>
      </div>

      {/* Custom Mouse Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#about-wari" className="scroll-link" onClick={(e) => handleScrollClick(e, 'about-wari')}>
          <div className="scroll-mouse-icon">
            <span className="scroll-mouse-dot"></span>
          </div>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-flourish">
            <span className="flourish-dot">✦</span>
          </div>
        </a>
      </div>
    </section>
  );
});

export default Hero;
