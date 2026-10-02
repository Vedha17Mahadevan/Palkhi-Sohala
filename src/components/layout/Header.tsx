import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA } from '../tradition/chaptersData';
import { smoothScrollToSection } from '../../utils/scrollUtils';
import { prefetchAllRoutes, prefetchRoute } from '../../utils/prefetchUtils';

interface HeaderProps {
  activeSection: string;
  onOpenMobileMenu: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ activeSection, onOpenMobileMenu }) => {
  const { currentPath, navigateTo } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  // Prefetch all main routes & chapter hero images on idle background
  useEffect(() => {
    prefetchAllRoutes();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Desktop Hover handlers - reveals submenu and preloads chapter routes
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
    prefetchRoute('/tradition');
    prefetchRoute('/tradition/origins');
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // Keyboard navigation & accessibility
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsDropdownOpen(true);
      setTimeout(() => {
        const firstItem = menuRef.current?.querySelector<HTMLAnchorElement>('.simple-dropdown-item');
        firstItem?.focus();
      }, 50);
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setIsDropdownOpen(false);
      if (currentPath === '/') {
        smoothScrollToSection('about-wari', 750);
        window.history.replaceState({}, '', '/#about-wari');
      } else {
        navigateTo('/', 'about-wari');
      }
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsDropdownOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('.simple-dropdown-item');
      if (!items || items.length === 0) return;
      
      const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLAnchorElement);
      let nextIndex = 0;

      if (e.key === 'ArrowDown') {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      }

      items[nextIndex]?.focus();
    }
  };

  // Click on "Wari Tradition" parent menu item
  const handleWariTraditionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);

    if (currentPath === '/') {
      smoothScrollToSection('about-wari', 750);
      window.history.replaceState({}, '', '/#about-wari');
    } else {
      navigateTo('/', 'about-wari');
    }
  };

  // Nav Handlers for top-level anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsDropdownOpen(false);

    if (currentPath !== '/') {
      navigateTo('/', targetId);
    } else {
      smoothScrollToSection(targetId, 750);
      window.history.replaceState({}, '', targetId === 'home' ? '/' : `/#${targetId}`);
    }
  };

  const handleChapterClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWariActive = currentPath.startsWith('/tradition') || (currentPath === '/' && activeSection === 'about-wari');

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-logo load-delay-0" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
          <img
            src={getCloudinaryUrl('RKsstgm_logo', { width: 100 })}
            alt="Radhakrishna Satsangam Logo"
            className="header-logo-img"
            width={50}
            height={50}
          />
          <div className="header-brand-text load-delay-100">
            <span className="brand-title">Palkhi Sohala</span>
            <span className="brand-subtitle">by Radhekrishna Satsangam</span>
          </div>
        </div>
        
        <nav className="main-nav load-delay-200">
          <ul>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${currentPath === '/' && activeSection === 'home' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick(e, 'home')}
                onMouseEnter={() => prefetchRoute('/')}
              >
                Home
              </a>
            </li>

            {/* Wari Tradition Dropdown (Parent Clickable + Hover Dropdown) */}
            <li 
              className={`nav-item-dropdown ${isDropdownOpen ? 'open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <a
                ref={triggerRef}
                href="/#about-wari"
                className={`nav-link nav-dropdown-trigger ${isWariActive ? 'active' : ''}`}
                onClick={handleWariTraditionClick}
                onKeyDown={handleTriggerKeyDown}
                onMouseEnter={() => {
                  prefetchRoute('/tradition');
                  prefetchRoute('/tradition/origins');
                }}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Wari Tradition: The Sacred Warkari Tradition"
              >
                <span>Wari Tradition</span>
                <span 
                  className="nav-dropdown-chevron-box"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsDropdownOpen(prev => !prev);
                  }}
                  title="Toggle Chapters menu"
                  aria-hidden="true"
                >
                  <i className={`fa-solid fa-chevron-down nav-dropdown-chevron ${isDropdownOpen ? 'rotate' : ''}`}></i>
                </span>
              </a>

              {/* Simple Chapters Dropdown Menu */}
              <div 
                ref={menuRef}
                className={`nav-dropdown-menu simple-chapters-dropdown ${isDropdownOpen ? 'visible' : ''}`}
                role="menu"
                aria-label="Wari Tradition Chapters"
                onKeyDown={handleMenuKeyDown}
              >
                <div className="dropdown-arrow-notch" aria-hidden="true"></div>
                <ul className="dropdown-simple-list" role="none">
                  {/* Overview Item */}
                  <li role="none">
                    <a 
                      href="/tradition" 
                      role="menuitem"
                      tabIndex={isDropdownOpen ? 0 : -1}
                      className={`simple-dropdown-item ${currentPath === '/tradition' ? 'active-highlight' : ''}`}
                      onClick={(e) => handleChapterClick(e, '/tradition')}
                      onMouseEnter={() => prefetchRoute('/tradition')}
                    >
                      <span className="simple-item-num overview-icon">✦</span>
                      <span className="simple-item-title">Tradition Overview</span>
                    </a>
                  </li>

                  <li className="simple-dropdown-divider" role="separator" aria-hidden="true"></li>

                  {/* All Chapters */}
                  {CHAPTERS_DATA.map((chap) => {
                    const isActive = currentPath === chap.path;
                    return (
                      <li key={chap.id} role="none">
                        <a 
                          href={chap.path}
                          role="menuitem"
                          tabIndex={isDropdownOpen ? 0 : -1}
                          className={`simple-dropdown-item ${isActive ? 'active-highlight' : ''}`}
                          onClick={(e) => handleChapterClick(e, chap.path)}
                          onMouseEnter={() => prefetchRoute(chap.path)}
                        >
                          <span className="simple-item-num">{chap.number}</span>
                          <span className="simple-item-title">{chap.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a 
                href="#palkhi-route" 
                className={`nav-link ${currentPath === '/' && activeSection === 'palkhi-route' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick(e, 'palkhi-route')}
                onMouseEnter={() => prefetchRoute('/palkhis')}
              >
                Palkhis
              </a>
            </li>
            
            <li>
              <a 
                href="#gallery" 
                className={`nav-link ${currentPath === '/' && activeSection === 'gallery' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick(e, 'gallery')}
                onMouseEnter={() => prefetchRoute('/')}
              >
                Archives
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta load-delay-300">
          <a href="https://radhekrishnasatsangam.com/" target="_blank" rel="noopener noreferrer" className="btn btn-join-us">Visit Us</a>
        </div>

        <button className="mobile-menu-btn" onClick={onOpenMobileMenu} aria-label="Open Navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);
export default Header;
