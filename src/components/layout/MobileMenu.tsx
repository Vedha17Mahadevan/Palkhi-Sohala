import React, { useState } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA } from '../tradition/chaptersData';
import { smoothScrollToSection } from '../../utils/scrollUtils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { currentPath, navigateTo } = useRouter();
  const [isWariExpanded, setIsWariExpanded] = useState(false);

  const handleWariTraditionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();

    if (currentPath === '/') {
      smoothScrollToSection('about-wari', 750);
      window.history.replaceState({}, '', '/#about-wari');
    } else {
      navigateTo('/', 'about-wari');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    onClose();

    if (currentPath !== '/') {
      navigateTo('/', targetId);
    } else {
      smoothScrollToSection(targetId, 750);
      window.history.replaceState({}, '', targetId === 'home' ? '/' : `/#${targetId}`);
    }
  };

  const handleChapterClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onClose();
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWariActive = currentPath.startsWith('/tradition');

  return (
    <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
      <button className="mobile-menu-close" onClick={onClose} aria-label="Close Navigation">
        <i className="fa-solid fa-xmark"></i>
      </button>

      <nav className="mobile-nav">
        <ul className="mobile-nav-root-list">
          {/* 1. Home */}
          <li>
            <a 
              href="#home" 
              className={`mobile-link ${currentPath === '/' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>

          {/* 2. Wari Tradition Accordion with all chapters */}
          <li className={`mobile-nav-accordion-item ${isWariExpanded ? 'expanded' : ''}`}>
            <div className="mobile-accordion-header-row">
              <a
                href="/#about-wari"
                className={`mobile-link mobile-wari-tradition-link ${isWariActive ? 'active' : ''}`}
                onClick={handleWariTraditionClick}
              >
                Wari Tradition
              </a>
              <button
                type="button"
                className="mobile-accordion-expand-btn"
                onClick={() => setIsWariExpanded(prev => !prev)}
                aria-expanded={isWariExpanded}
                aria-label="Toggle Wari Tradition Chapters list"
              >
                <i className={`fa-solid fa-chevron-down accordion-chevron ${isWariExpanded ? 'rotate' : ''}`} aria-hidden="true"></i>
              </button>
            </div>

            {/* Simple Chapter List */}
            <div className={`mobile-accordion-body ${isWariExpanded ? 'open' : ''}`}>
              <ul className="mobile-simple-sublist">
                <li>
                  <a 
                    href="/tradition" 
                    className={`mobile-simple-sublink ${currentPath === '/tradition' ? 'active' : ''}`} 
                    onClick={(e) => handleChapterClick(e, '/tradition')}
                  >
                    <span className="sub-num overview-icon">✦</span>
                    <span className="sub-text">Tradition Overview</span>
                  </a>
                </li>

                {CHAPTERS_DATA.map((chap) => {
                  const isActive = currentPath === chap.path;
                  return (
                    <li key={chap.id}>
                      <a 
                        href={chap.path} 
                        className={`mobile-simple-sublink ${isActive ? 'active' : ''}`} 
                        onClick={(e) => handleChapterClick(e, chap.path)}
                      >
                        <span className="sub-num">{chap.number}</span>
                        <span className="sub-text">{chap.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* 3. Palkhis */}
          <li>
            <a 
              href="#palkhi-route" 
              className="mobile-link" 
              onClick={(e) => handleNavClick(e, 'palkhi-route')}
            >
              Palkhis
            </a>
          </li>

          {/* 4. Archives */}
          <li>
            <a 
              href="#gallery" 
              className="mobile-link" 
              onClick={(e) => handleNavClick(e, 'gallery')}
            >
              Archives
            </a>
          </li>

          {/* 5. Visit Us CTA */}
          <li className="mobile-cta-li">
            <a 
              href="https://radhekrishnasatsangam.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-link btn-mobile-cta" 
              onClick={onClose}
            >
              Visit Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
