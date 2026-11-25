import React, { useEffect, useRef } from 'react';
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
import Icon from '../components/common/Icon';

const PALKHI_DATA = rawPalkhiData as Palkhi[];

interface HomeProps {
  onSelectPalkhi: (palkhi: Palkhi) => void;
  setActiveSection: (section: string) => void;
}

export const Home: React.FC<HomeProps> = React.memo(({ onSelectPalkhi, setActiveSection }) => {
  const { isLandingActive, navigateTo, pendingScrollId, clearPendingScroll } = useRouter();
  const featuredPalkhis = PALKHI_DATA.slice(0, 10);
  const lastActiveSectionRef = useRef('home');
  const lastScrolledRef = useRef(false);

  // Handle cross-page or direct scroll to target section (e.g. #palkhi or #about-wari)
  useEffect(() => {
    if (!isLandingActive) return;

    // Check either pendingScrollId from context or the actual window.location.hash
    const hashTarget = window.location.hash ? window.location.hash.replace('#', '') : null;
    const scrollTarget = pendingScrollId || hashTarget;

    if (!scrollTarget) return;

    let isCancelled = false;

    const executeScroll = () => {
      if (isCancelled) return false;
      return smoothScrollToSection(scrollTarget, 750);
    };

    // Staged execution to guarantee section is mounted and layout heights have calculated
    const timer1 = window.setTimeout(() => {
      executeScroll();
    }, 80);

    const timer2 = window.setTimeout(() => {
      executeScroll();
    }, 280);

    const timer3 = window.setTimeout(() => {
      if (executeScroll()) {
        clearPendingScroll();
      }
    }, 600);

    return () => {
      isCancelled = true;
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);
    };
  }, [isLandingActive, pendingScrollId, clearPendingScroll]);

  // IntersectionObserver for reveal-on-scroll animations (avoids layout thrashing)
  useEffect(() => {
    if (!isLandingActive) return;

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLandingActive]);

  // rAF-throttled passive scroll listener for Active Nav Link and Header scrolled state
  useEffect(() => {
    if (!isLandingActive) return;

    const header = document.querySelector('.main-header') as HTMLElement | null;
    const sections = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[];
    let rafId: number | null = null;

    const updateOnScroll = () => {
      rafId = null;
      const scrollY = window.scrollY;

      if (header) {
        const isScrolled = scrollY > 50;
        if (isScrolled !== lastScrolledRef.current) {
          lastScrolledRef.current = isScrolled;
          header.classList.toggle('scrolled', isScrolled);
        }
      }

      let current = 'home';
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || 'home';
        }
      }

      if (current !== lastActiveSectionRef.current) {
        lastActiveSectionRef.current = current;
        setActiveSection(current);
      }
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isLandingActive, setActiveSection]);

  return (
    <>
      <Hero />
      <WarkariTradition />
      <PalkhiTradition />

      {/* Digital Museum Tradition Exhibition Hero */}
      <MuseumTraditionHero />

      {/* Explore All Palkhis Section - Primary ID: palkhi, with compatible anchor aliases */}
      <section id="palkhi" className="palkhi-directory-section">
        <div id="palkhis" style={{ position: 'relative', top: '-10px' }} aria-hidden="true"></div>
        <div id="palkhi-route" style={{ position: 'relative', top: '-10px' }} aria-hidden="true"></div>
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
              <Icon name="arrow-right-long" />
            </button>
          </div>
        </div>
      </section>

      <PlaylistGrid />
    </>
  );
});

export default Home;
