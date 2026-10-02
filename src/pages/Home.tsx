import React, { useEffect } from 'react';
import rawPalkhiData from '../../palkhis.json';
import { Palkhi } from '../types';
import { useRouter } from '../context/NavigationContext';
import { smoothScrollToSection } from '../utils/scrollUtils';
import Hero from '../components/hero/Hero';
import WarkariTradition from '../components/wari/WarkariTradition';
import PalkhiTradition from '../components/wari/PalkhiTradition';
import PalkhiGrid from '../components/palkhi/PalkhiGrid';
import PlaylistGrid from '../components/gallery/PlaylistGrid';
import MuseumTraditionHero from '../components/home/MuseumTraditionHero';
import { prefetchRoute } from '../utils/prefetchUtils';

const PALKHI_DATA = rawPalkhiData as Palkhi[];

interface HomeProps {
  onSelectPalkhi: (palkhi: Palkhi) => void;
  setActiveSection: (section: string) => void;
}

export const Home: React.FC<HomeProps> = React.memo(({ onSelectPalkhi, setActiveSection }) => {
  const { isLandingActive, navigateTo, pendingScrollId, clearPendingScroll } = useRouter();
  const featuredPalkhis = PALKHI_DATA.slice(0, 10);

  // Handle cross-page or direct scroll to target section (e.g. #about-wari)
  useEffect(() => {
    if (!isLandingActive) return;

    if (pendingScrollId) {
      const scrollId = pendingScrollId;
      clearPendingScroll();

      const timer = window.setTimeout(() => {
        smoothScrollToSection(scrollId, 750);
      }, 120);

      return () => window.clearTimeout(timer);
    }
  }, [isLandingActive, pendingScrollId, clearPendingScroll]);

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
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
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

      // Toggle back to top button visibility
      const backToTopBtn = document.querySelector('.btn-back-to-top-float') as HTMLElement;
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
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
  }, [isLandingActive, setActiveSection]);

  return (
    <>
      <Hero />
      <WarkariTradition />
      <PalkhiTradition />

      {/* Digital Museum Tradition Exhibition Hero */}
      <MuseumTraditionHero />

      {/* Explore All Palkhis Section */}
      <section id="palkhi-route" className="palkhi-directory-section">
        <div className="section-container directory-tight-container">
          <div className="section-header-center directory-header-center">
            <span className="section-tag reveal">Divine Journeys</span>
            <h2 className="section-title reveal">Explore All Palkhis</h2>
            <div className="divider center reveal"></div>
          </div>

          {/* Palkhi Card Grid - 10 Featured */}
          <PalkhiGrid 
            palkhis={featuredPalkhis} 
            onSelectPalkhi={onSelectPalkhi} 
            className="palkhi-card-grid" 
            revealCards={true} 
          />

          {/* View All 35 Palkhis CTA */}
          <div className="view-all-palkhis-cta reveal">
            <button 
              className="btn-view-all-palkhis" 
              onClick={() => navigateTo('/palkhis')}
              onMouseEnter={() => prefetchRoute('/palkhis')}
              aria-label={`View All ${PALKHI_DATA.length} Palkhis`}
            >
              <span className="btn-view-all-text">View All {PALKHI_DATA.length} Palkhis</span>
              <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>

      <PlaylistGrid />
    </>
  );
});

export default Home;
