import React, { useState, useEffect, useRef } from 'react';

import rksLogo from '../images/RKSSTGM text maroon.png';
import rksLogoWhite from '../images/RKSSTGM text white.png';
import vitthalTilak from '../images/Vitthal tilak.png';
import warkariFoot from '../images/splash foot.png';
import rksLogoClean from '../images/RKsstgm logo.png';
import vkImage from '../images/vk1.png';
import kidsLeft from '../images/kids left.png';
import templeRight from '../images/temple right.png';
import phoneMockup from '../images/mob mockup.jpg';
import generalPalkhiHero from '../images/palkhi.jpg';

import rawPalkhiData from '../palkhis.json';
import rawPlaylistData from '../playlists.json';

type Playlist = {
  title: string;
  description?: string;
  youtubeUrl: string;
  coverImage?: string;
};

const PLAYLIST_DATA = rawPlaylistData as Playlist[];

type Palkhi = {
  id: number;
  slug: string;
  name: string;
  marathiName: string;
  saint: string;
  origin: string;
  district: string;
  destination: string;
  distanceKm: number;
  durationDays: string;
  category: string;
  traditionalDeparture: string;
  historicalNote: string;
  indicativeRoute: string;
  palkhiImage: string;
  saintImage: string;
};

const PALKHI_DATA = rawPalkhiData as Palkhi[];

const DESTINATION = "Pandharpur";

// Strip honorific prefixes from a name for compact card display.
// e.g. "Shri Sant Dnyaneshwar Maharaj Palkhi" -> "Sant Dnyaneshwar Maharaj Palkhi"
function compactPalkhiName(name: string) {
  return name
    .replace(/^Shri\s+/i, '')
    .replace(/^Jagadguru\s+Shri\s+/i, '')
    .replace(/^Jagadguru\s+/i, '')
    .trim();
}

// Extracts up to 3 stylised initials to display inside a saint placeholder avatar.
// "Sant Dnyaneshwar Maharaj" -> "SD" (first two "words" after stripping Sant)
function saintInitials(saint: string) {
  const tokens = saint
    .replace(/^(Shri|Sant|Sri|Swami|Samarth|Maharaj|Guru|Jagadguru)\s+/i, '')
    .replace(/\s+(Maharaj|Swami|Samarth|Guru)$/i, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (tokens.length === 0) return 'ॐ';
  return tokens.map(t => t[0]?.toUpperCase() ?? '').join('');
}

// Circular stylised portrait placeholder — used when the saint photograph is missing.
// Has a thin gold border, heritage cream+maroon palette, saint's initials centered.
function SaintAvatarPlaceholder({ saint, large = false }: { saint: string; large?: boolean }) {
  const initials = saintInitials(saint);
  return (
    <div className={`saint-avatar saint-avatar-placeholder${large ? ' large' : ''}`}>
      <span className="saint-avatar-initials">{initials}</span>
    </div>
  );
}

// ================================================================= //
// MAIN APP COMPONENT                                                //
// ================================================================= //
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSplashActive, setIsSplashActive] = useState(window.location.pathname !== '/palkhis');
  const [isSplashFadingOut, setIsSplashFadingOut] = useState(false);
  const [isLandingActive, setIsLandingActive] = useState(window.location.pathname === '/palkhis');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAboutIntersected, setIsAboutIntersected] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // ---- Palkhi Directory / Modal state ----
  const featuredPalkhis = PALKHI_DATA.slice(0, 10);
  const [selectedPalkhi, setSelectedPalkhi] = useState<Palkhi | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Directory filter & sort states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [sortOption, setSortOption] = useState('Default');

  // popstate routing listener
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
      if (window.location.pathname === '/palkhis') {
        setIsSplashActive(false);
        setIsLandingActive(true);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
    if (path === '/palkhis') {
      setIsSplashActive(false);
      setIsLandingActive(true);
    }
  };

  // Modal: body scroll lock + ESC to close
  useEffect(() => {
    if (!selectedPalkhi) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPalkhi(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedPalkhi]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAboutIntersected(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Splash Screen Logic
  useEffect(() => {
    document.body.style.overflow = 'hidden';

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
  }, [isLandingActive]);

  // Helper to parse duration days from string ranges
  const parseDurationDays = (durationStr: string): number => {
    const normalized = durationStr.replace('+', '').replace('–', '-').replace('-', '-').trim();
    if (normalized.includes('-')) {
      const parts = normalized.split('-').map(p => parseInt(p.trim(), 10));
      const maxVal = parts[1];
      return isNaN(maxVal) ? (parts[0] || 0) : maxVal;
    }
    const val = parseInt(normalized, 10);
    return isNaN(val) ? 0 : val;
  };

  // Helper function to smooth scroll to anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // offset for fixed header
          behavior: 'smooth'
        });
      }
    }
  };

  // --- Filter and Sort Logic for all Palkhis ---
  const parsedPalkhis = PALKHI_DATA.map(palkhi => ({
    ...palkhi,
    _parsedDuration: parseDurationDays(palkhi.durationDays)
  }));

  const filteredPalkhis = parsedPalkhis.filter(palkhi => {
    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const nameMatch = palkhi.name.toLowerCase().includes(q);
      const marathiMatch = palkhi.marathiName?.toLowerCase().includes(q);
      const saintMatch = palkhi.saint.toLowerCase().includes(q);
      const originMatch = palkhi.origin.toLowerCase().includes(q);
      const districtMatch = palkhi.district.toLowerCase().includes(q);
      const categoryMatch = palkhi.category.toLowerCase().includes(q);
      if (!(nameMatch || marathiMatch || saintMatch || originMatch || districtMatch || categoryMatch)) {
        return false;
      }
    }

    // 2. Category
    if (selectedCategory !== 'All') {
      const isMajor = palkhi.category.toLowerCase().includes('major') || palkhi.category.toLowerCase().includes('manachi');
      if (selectedCategory === 'Major / Manachi' && !isMajor) return false;
      if (selectedCategory === 'Other Palkhis' && isMajor) return false;
    }

    // 3. District
    if (selectedDistrict !== 'All') {
      if (selectedDistrict === 'Other') {
        const majorDistricts = ['pune', 'satara', 'solapur', 'ahmednagar', 'nashik', 'kolhapur', 'sangli'];
        if (majorDistricts.includes(palkhi.district.toLowerCase())) return false;
      } else {
        if (palkhi.district.toLowerCase() !== selectedDistrict.toLowerCase()) return false;
      }
    }

    // 4. Duration
    if (selectedDuration !== 'All') {
      const days = palkhi._parsedDuration;
      if (selectedDuration === 'Under 10 Days' && days >= 10) return false;
      if (selectedDuration === '10–15 Days' && (days < 10 || days > 15)) return false;
      if (selectedDuration === '15–20 Days' && (days < 15 || days > 20)) return false;
      if (selectedDuration === 'Above 20 Days' && days <= 20) return false;
    }

    return true;
  });

  const sortedPalkhis = [...filteredPalkhis].sort((a, b) => {
    switch (sortOption) {
      case 'Alphabetical (A–Z)':
        return a.name.localeCompare(b.name);
      case 'Alphabetical (Z–A)':
        return b.name.localeCompare(a.name);
      case 'Distance (Shortest First)':
        return a.distanceKm - b.distanceKm;
      case 'Distance (Longest First)':
        return b.distanceKm - a.distanceKm;
      case 'Duration (Shortest First)':
        return a._parsedDuration - b._parsedDuration;
      case 'Duration (Longest First)':
        return b._parsedDuration - a._parsedDuration;
      default:
        return 0; // JSON default order
    }
  });

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
            <div className="header-logo load-delay-0">
              <img src={rksLogoClean} alt="Radhakrishna Satsangam Logo" className="header-logo-img" />
              <div className="header-brand-text load-delay-100">
                <span className="brand-title">Palkhi Sohala</span>
                <span className="brand-subtitle">by Radhekrishna Satsangam</span>
              </div>
            </div>
            
            <nav className="main-nav load-delay-200">
              <ul>
                <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                <li><a href="#about-wari" className={`nav-link ${activeSection === 'about-wari' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'about-wari')}>Ashadi Ekadashi</a></li>
                <li><a href="#palkhi-route" className={`nav-link ${activeSection === 'palkhi-route' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhis</a></li>
                <li><a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'gallery')}>Archives</a></li>
              </ul>
            </nav>

            <div className="header-cta load-delay-300">
              <a href="https://radhekrishnasatsangam.com/" target="_blank" rel="noopener noreferrer" className="btn btn-join-us">Visit Us</a>
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
              <li><a href="#about-wari" className="mobile-link" onClick={(e) => handleNavClick(e, 'about-wari')}>Ashadi Ekadashi</a></li>
              <li><a href="#palkhi-route" className="mobile-link" onClick={(e) => handleNavClick(e, 'palkhi-route')}>Palkhis</a></li>
              <li><a href="#gallery" className="mobile-link" onClick={(e) => handleNavClick(e, 'gallery')}>Archives</a></li>
              <li><a href="https://radhekrishnasatsangam.com/" target="_blank" rel="noopener noreferrer" className="mobile-link btn-mobile-cta">Visit Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Dedicated Palkhis Directory Page */}
        {currentPath === '/palkhis' && (
          <section className="palkhis-directory-page-section">
            {/* Immersive Hero Banner */}
            <div className="directory-hero-banner" style={{ backgroundImage: `url(${generalPalkhiHero})` }}>
              <div className="hero-gradient-overlay"></div>
              
              <button className="btn-back-home-hero" onClick={() => navigateTo('/')}>
                <i className="fa-solid fa-arrow-left-long"></i> Back to Home
              </button>
              
              <div className="hero-centered-content">
                <h1 className="directory-hero-title">Explore All Palkhis</h1>
                <p className="directory-hero-subtitle">
                  Discover the sacred journeys of Maharashtra's revered saints on their path to Pandharpur.
                </p>
                
                {/* Centered Search Bar */}
                <div className="directory-hero-search-box-wrap">
                  <i className="fa-solid fa-magnifying-glass search-box-icon"></i>
                  <input
                    type="text"
                    className="directory-hero-search-input"
                    placeholder="Search by Palkhi, saint, origin, district, category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button className="btn-clear-search" onClick={() => setSearchQuery('')}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Compact Filter Bar */}
            <div className="directory-filter-bar">
              <div className="directory-dropdowns-row">
                {/* Category Dropdown */}
                <div className="directory-dropdown-select-wrap">
                  <select
                    className="directory-dropdown-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All">Category: All</option>
                    <option value="Major / Manachi">Major / Manachi</option>
                    <option value="Other Palkhis">Other Palkhis</option>
                  </select>
                </div>

                {/* District Dropdown */}
                <div className="directory-dropdown-select-wrap">
                  <select
                    className="directory-dropdown-select"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                  >
                    <option value="All">District: All</option>
                    <option value="Pune">Pune</option>
                    <option value="Satara">Satara</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Duration Dropdown */}
                <div className="directory-dropdown-select-wrap">
                  <select
                    className="directory-dropdown-select"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="All">Duration: All</option>
                    <option value="Under 10 Days">Under 10 Days</option>
                    <option value="10–15 Days">10–15 Days</option>
                    <option value="15–20 Days">15–20 Days</option>
                    <option value="Above 20 Days">Above 20 Days</option>
                  </select>
                </div>

                {/* Sort By Dropdown */}
                <div className="directory-dropdown-select-wrap">
                  <select
                    className="directory-dropdown-select"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="Default">Sort By: Default</option>
                    <option value="Alphabetical (A–Z)">Alphabetical (A–Z)</option>
                    <option value="Alphabetical (Z–A)">Alphabetical (Z–A)</option>
                    <option value="Distance (Shortest First)">Distance (Shortest First)</option>
                    <option value="Distance (Longest First)">Distance (Longest First)</option>
                    <option value="Duration (Shortest First)">Duration (Shortest First)</option>
                    <option value="Duration (Longest First)">Duration (Longest First)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid Container */}
            <div className="directory-grid-container">
              {sortedPalkhis.length === 0 ? (
                <div className="palkhi-empty-state">
                  <div className="empty-state-icon">
                    <i className="fa-solid fa-route"></i>
                  </div>
                  <h3>No Palkhis Found</h3>
                  <p>No Palkhis found. Try changing your search or filters.</p>
                  <button
                    className="btn btn-reset-filters"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setSelectedDistrict('All');
                      setSelectedDuration('All');
                      setSortOption('Default');
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="palkhis-directory-grid">
                  {sortedPalkhis.map((palkhi) => {
                    const hasPalkhiPhoto = palkhi.palkhiImage && !failedImages[palkhi.palkhiImage];
                    const hasSaintPhoto = palkhi.saintImage && !failedImages[palkhi.saintImage];
                    return (
                      <article
                        key={palkhi.id}
                        className={`palkhi-card ${hasPalkhiPhoto ? 'has-real-photo' : ''} ${hasSaintPhoto ? 'has-real-saint' : ''}`}
                        onClick={() => setSelectedPalkhi(palkhi)}
                      >
                        {/* 16:9 Image / Media */}
                        <div className="palkhi-card-media">
                          <div className="palkhi-media-frame">
                            {hasPalkhiPhoto && (
                              <img
                                src={palkhi.palkhiImage}
                                alt={`${compactPalkhiName(palkhi.name)} — ${palkhi.origin}`}
                                className="palkhi-media-photo"
                                loading="lazy"
                                onError={() => setFailedImages(prev => ({ ...prev, [palkhi.palkhiImage]: true }))}
                              />
                            )}
                            <div className="palkhi-media-inner">
                              <div className="palkhi-media-ornament">
                                <span className="palkhi-media-chip">
                                  <i className="fa-solid fa-location-dot"></i>
                                  {palkhi.origin}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="saint-portrait saint-portrait-card">
                            {hasSaintPhoto ? (
                              <img
                                src={palkhi.saintImage}
                                alt={palkhi.saint}
                                className="saint-portrait-img"
                                loading="lazy"
                                onError={() => setFailedImages(prev => ({ ...prev, [palkhi.saintImage]: true }))}
                              />
                            ) : (
                              <SaintAvatarPlaceholder saint={palkhi.saint} />
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="palkhi-card-content">
                          <h3 className="palkhi-card-title">{compactPalkhiName(palkhi.name)}</h3>

                          <div className="palkhi-card-line card-line-route">
                            <i className="fa-solid fa-route"></i>
                            <span>{palkhi.origin} <em className="arrow">→</em> {palkhi.destination}</span>
                          </div>

                          <div className="palkhi-card-line card-line-duration">
                            <i className="fa-solid fa-clock"></i>
                            <span>{palkhi.durationDays} Days</span>
                          </div>

                          <span className="palkhi-card-divider" aria-hidden="true"></span>

                          <button
                            className="btn-view-details"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPalkhi(palkhi);
                            }}
                          >
                            View Details
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Homepage Sections */}
        {currentPath !== '/palkhis' && (
          <>
            {/* Hero Section */}
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
          <img src={vkImage} className="hero-image-render desktop-only" alt="Ashadhi Ekadashi" />
          
          <div className="hero-container">
            {/* Left Side: Spacer so background deities in vk1.png are visible */}
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
            <a href="#about-wari" className="scroll-link" onClick={(e) => handleNavClick(e, 'about-wari')}>
              <div className="scroll-mouse-icon">
                <span className="scroll-mouse-dot"></span>
              </div>
              <span className="scroll-text">Scroll Down</span>
              <div className="scroll-flourish">
                <span className="flourish-dot">✦</span>
              </div>
            </a>
          </div>


        </section>        {/* About Wari Section */}
        <section id="about-wari" ref={aboutRef} className="about-section">
          {/* Main Manuscript/Background Section */}
          <div className="about-manuscript-wrapper">
            {/* Background texture overlay */}
            <div className="heritage-parchment-bg"></div>

            <div className="section-container heritage-container-about">
              <div className="about-two-column-layout">
                {/* Left Column: Kids Artwork */}
                <div className="about-left-column">
                  <img src={kidsLeft} alt="Warkari Children" className="about-kids-artwork" />
                </div>
                
                {/* Right Column: Text Content */}
                <div className={`about-right-column animate-trigger ${isAboutIntersected ? 'animate-active' : ''}`}>
                  <h2 className="warkari-tradition-heading">What is the<br />Warkari Tradition?</h2>
                  
                  <p className="warkari-tradition-body">
                    The Warkari tradition is one of Maharashtra's oldest and most cherished devotional movements, rooted in faith, humility, equality, and selfless service. Every year, millions of devotees undertake the sacred Wari pilgrimage on foot to Pandharpur, carrying the sacred Palkhis of Sant Dnyaneshwar Maharaj, Sant Tukaram Maharaj, and other saints.
                  </p>
                  
                  <div className="warkari-highlight-quote">
                    <span className="quote-symbol">“</span>
                    <span className="marathi-quote-text">विठ्ठल विठ्ठल जय हरी विठ्ठल</span>
                    <span className="quote-symbol">”</span>
                  </div>
                  
                  <p className="warkari-tradition-body" style={{ marginTop: '24px' }}>
                    Ashadhi Ekadashi marks the spiritual culmination of this divine journey. United by this timeless chant, the Warkaris walk together beyond differences of caste, wealth, or status, celebrating devotion, compassion, and the eternal bond between Lord Vitthal and His devotees.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Palkhi Tradition Section */}
        <section id="palkhi-tradition" className="about-section" style={{ borderTop: 'none', paddingTop: 0 }}>
          {/* Main Manuscript/Background Section */}
          <div className="about-manuscript-wrapper">
            {/* Background texture overlay */}
            <div className="heritage-parchment-bg"></div>

            <div className="section-container heritage-container-about" style={{ paddingTop: '10px', paddingBottom: '75px' }}>
              <div className="about-two-column-layout">
                {/* Left Column: Text Content (55% width) */}
                <div className="about-right-column reveal" style={{ flex: '0 0 55%', width: '55%' }}>
                  <span className="section-tag" style={{ marginBottom: '12px', display: 'block' }}>The Sacred Palkhi Tradition</span>
                  <h2 className="warkari-tradition-heading">What is the<br />Palkhi Tradition?</h2>
                  
                  <p className="warkari-tradition-body">
                    The sacred Palkhi tradition is a unique, 700-year-old congregational pilgrimage that beautifully captures Maharashtra's rich spiritual heritage. Initiated by Sant Dnyaneshwar Maharaj's devotees and later refined by Sant Tukaram Maharaj's son, it involves carrying the padukas (sacred sandals) of the saints in decorated palanquins (Palkhis) from their resting shrines to Pandharpur.
                  </p>
                  
                  <div className="warkari-highlight-quote">
                    <span className="quote-symbol">“</span>
                    <span className="marathi-quote-text">सुंदर ते ध्यान उभे विटेवरी</span>
                    <span className="quote-symbol">”</span>
                  </div>
                  
                  <p className="warkari-tradition-body" style={{ marginTop: '24px' }}>
                    Each Palkhi is accompanied by thousands of devotees, organized into disciplined groups called Dindis. Along the journey, pilgrims sing abhangas, play traditional instruments, and perform dances of joy, creating a moving tapestry of absolute devotion and community spirit.
                  </p>
                </div>

                {/* Right Column: Temple Artwork (45% width) */}
                <div className="about-left-column" style={{ flex: '0 0 45%', width: '45%' }}>
                  <img src={templeRight} alt="Pandharpur Vitthal Temple" className="about-kids-artwork" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore All Palkhis Section */}
        <section id="palkhi-route" className="palkhi-directory-section">
          <div className="section-container directory-tight-container">
            <div className="section-header-center directory-header-center">
              <span className="section-tag reveal">Divine Journeys</span>
              <h2 className="section-title reveal">Explore All Palkhis</h2>
              <div className="divider center reveal"></div>
            </div>

            {/* Palkhi Card Grid - 10 Featured */}
            <div className="palkhi-card-grid">
              {featuredPalkhis.map((palkhi) => {
                const hasPalkhiPhoto = palkhi.palkhiImage && !failedImages[palkhi.palkhiImage];
                const hasSaintPhoto = palkhi.saintImage && !failedImages[palkhi.saintImage];
                return (
                  <article
                    key={palkhi.id}
                    className={`palkhi-card reveal${hasPalkhiPhoto ? ' has-real-photo' : ''}${hasSaintPhoto ? ' has-real-saint' : ''}`}
                    onClick={() => setSelectedPalkhi(palkhi)}
                  >
                    {/* 16:9 Image / Media */}
                    <div className="palkhi-card-media">
                      {/* Clipped frame — photo + engraving + chip all get rounded top corners;
                          portrait lives OUTSIDE the frame so it can escape the clip path. */}
                      <div className="palkhi-media-frame">
                        {/* Real photo (when available) */}
                        {hasPalkhiPhoto && (
                          <img
                            src={palkhi.palkhiImage}
                            alt={`${compactPalkhiName(palkhi.name)} — ${palkhi.origin}`}
                            className="palkhi-media-photo"
                            loading="lazy"
                            onError={() => setFailedImages(prev => ({ ...prev, [palkhi.palkhiImage]: true }))}
                          />
                        )}
                        {/* Gradient + illustration placeholder */}
                        <div className="palkhi-media-inner">
                          <div className="palkhi-media-ornament">
                            <span className="palkhi-media-chip">
                              <i className="fa-solid fa-location-dot"></i>
                              {palkhi.origin}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Saint portrait — sits ON the exact seam between
                          hero image (top) + ivory content body (bottom).
                          bottom: 0 anchors it to media bottom edge, so 50% translate
                          puts the circle's centre exactly on the boundary. */}
                      <div className="saint-portrait saint-portrait-card">
                        {hasSaintPhoto ? (
                          <img
                            src={palkhi.saintImage}
                            alt={palkhi.saint}
                            className="saint-portrait-img"
                            loading="lazy"
                            onError={() => setFailedImages(prev => ({ ...prev, [palkhi.saintImage]: true }))}
                          />
                        ) : (
                          <SaintAvatarPlaceholder saint={palkhi.saint} />
                        )}
                      </div>
                    </div>

                    {/* Content: Name + Route + Duration + Divider + CTA */}
                    <div className="palkhi-card-content">
                      <h3 className="palkhi-card-title">{compactPalkhiName(palkhi.name)}</h3>

                      <div className="palkhi-card-line card-line-route">
                        <i className="fa-solid fa-route"></i>
                        <span>{palkhi.origin} <em className="arrow">→</em> {DESTINATION}</span>
                      </div>

                      <div className="palkhi-card-line card-line-duration">
                        <i className="fa-solid fa-clock"></i>
                        <span>{palkhi.durationDays} Days</span>
                      </div>

                      <span className="palkhi-card-divider" aria-hidden="true"></span>

                      <button
                        className="btn-view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPalkhi(palkhi);
                        }}
                      >
                        View Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

             {/* View All 35 Palkhis CTA */}
            <div className="view-all-palkhis-cta reveal">
              <button className="btn-view-all-palkhis" onClick={() => navigateTo('/palkhis')}>
                View All {PALKHI_DATA.length} Palkhis
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </section>
          </>
        )}

        {/* Premium Palkhi Details Modal */}
        {selectedPalkhi && (
          <div
            className="palkhi-modal-overlay"
            onClick={() => setSelectedPalkhi(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="palkhi-modal-title"
          >
            <div
              className="palkhi-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="palkhi-modal-close"
                onClick={() => setSelectedPalkhi(null)}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="palkhi-modal-inner">
                {/* Left / Top: Hero Palkhi Procession Image + Saint portrait (overlapping) */}
                <div className="palkhi-modal-image-col">
                  <div className="palkhi-modal-hero-media">
                    {/* Large Palkhi procession image at the top */}
                    <div className="modal-palkhi-photo-wrap">
                      {selectedPalkhi.palkhiImage && !failedImages[selectedPalkhi.palkhiImage] ? (
                        <img
                          src={selectedPalkhi.palkhiImage}
                          alt={`${compactPalkhiName(selectedPalkhi.name)} procession`}
                          className="modal-palkhi-photo"
                          onError={() => setFailedImages(prev => ({ ...prev, [selectedPalkhi.palkhiImage]: true }))}
                        />
                      ) : (
                        <div className="modal-palkhi-photo-placeholder">
                          <i className="fa-solid fa-chariot"></i>
                          <span>{compactPalkhiName(selectedPalkhi.name)}</span>
                        </div>
                      )}
                    </div>

                    {/* Saint portrait — overlaps bottom edge of procession image */}
                    <div className="saint-portrait saint-portrait-modal">
                      {selectedPalkhi.saintImage && !failedImages[selectedPalkhi.saintImage] ? (
                        <img
                          src={selectedPalkhi.saintImage}
                          alt={selectedPalkhi.saint}
                          className="saint-portrait-img"
                          onError={() => setFailedImages(prev => ({ ...prev, [selectedPalkhi.saintImage]: true }))}
                        />
                      ) : (
                        <SaintAvatarPlaceholder saint={selectedPalkhi.saint} large />
                      )}
                    </div>

                    {/* Palkhi names below the saint portrait */}
                    <div className="palkhi-modal-names">
                      <h2 id="palkhi-modal-title" className="palkhi-modal-title-center">
                        {compactPalkhiName(selectedPalkhi.name)}
                      </h2>
                      {selectedPalkhi.marathiName && (
                        <p className="palkhi-modal-marathi-center">{selectedPalkhi.marathiName}</p>
                      )}
                      <div className="divider-split-gold tiny center"></div>
                    </div>
                  </div>
                </div>

                {/* Right / Bottom: Information */}
                <div className="palkhi-modal-info-col">
                  <div className="palkhi-modal-fields">
                    <div className="info-field">
                      <span className="info-label"><i className="fa-solid fa-user-tie"></i> Saint</span>
                      <span className="info-value">{selectedPalkhi.saint}</span>
                    </div>
                    <div className="info-field-row">
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-location-dot"></i> Origin</span>
                        <span className="info-value">{selectedPalkhi.origin}</span>
                      </div>
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-city"></i> District</span>
                        <span className="info-value">{selectedPalkhi.district}</span>
                      </div>
                    </div>
                    <div className="info-field-row">
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-flag-checkered"></i> Destination</span>
                        <span className="info-value">{selectedPalkhi.destination}</span>
                      </div>
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-route"></i> Distance</span>
                        <span className="info-value">Approx. {selectedPalkhi.distanceKm} km</span>
                      </div>
                    </div>
                    <div className="info-field-row">
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-clock"></i> Duration</span>
                        <span className="info-value">{selectedPalkhi.durationDays} Days</span>
                      </div>
                      <div className="info-field">
                        <span className="info-label"><i className="fa-solid fa-layer-group"></i> Category</span>
                        <span className="info-value">{selectedPalkhi.category}</span>
                      </div>
                    </div>
                    <div className="info-field">
                      <span className="info-label"><i className="fa-solid fa-calendar-days"></i> Traditional Departure</span>
                      <span className="info-value">{selectedPalkhi.traditionalDeparture}</span>
                    </div>
                    <div className="info-field">
                      <span className="info-label"><i className="fa-solid fa-route"></i> Indicative Route</span>
                      <span className="info-value route-text">{selectedPalkhi.indicativeRoute}</span>
                    </div>
                    {selectedPalkhi.historicalNote && (
                      <div className="info-field historical-note">
                        <span className="info-label"><i className="fa-solid fa-book-open"></i> Historical &amp; Cultural Note</span>
                        <p className="info-note-text">{selectedPalkhi.historicalNote}</p>
                      </div>
                    )}
                  </div>

                  <div className="palkhi-modal-footer">
                    <button
                      className="btn-modal-close"
                      onClick={() => setSelectedPalkhi(null)}
                    >
                      <i className="fa-solid fa-xmark"></i> Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section - RadhaKrishna Satsangam Archives (Split Layout) */}
        {currentPath !== '/palkhis' && (
          <section id="gallery" className="gallery-section archives-split-section">
          <div className="section-container archives-split-container">
            <div className="archives-split-inner">
              {/* ===== Left Column (70-75%) : Video Gallery ===== */}
              <div className="archives-left-col">
                <div className="section-header archives-split-header reveal">
                  <span className="section-tag">From the Archives</span>
                  <h2 className="section-title">
                    Discover Pandharpur
                    <br />
                    Through Our Lens
                  </h2>
                  <div className="divider-split-gold center"></div>
                  <p className="section-subtitle">
                    From the sacred streets of Pandharpur to the divine presence of Lord Vitthal and Rukmini, explore a curated collection of devotional discourses, festivals, temple darshans, yatras, bhajans, and spiritual moments shared by RadhaKrishna Satsangam.
                  </p>
                </div>

                <div className="video-grid archives-video-grid reveal">
                  {PLAYLIST_DATA.map((playlist, index) => (
                    <a
                      key={index}
                      href={playlist.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="video-card archives-video-card"
                      aria-label={`Watch ${playlist.title} playlist`}
                    >
                      <div className={`video-thumb ${playlist.coverImage ? 'has-cover' : 'video-thumb-themed'}`}>
                        {playlist.coverImage ? (
                          <>
                            <img
                              src={playlist.coverImage}
                              alt={playlist.title}
                              className="video-cover-img"
                              loading="lazy"
                            />
                            <div className="video-cover-overlay"></div>
                            <div className="video-youtube-badge">
                              <i className="fa-brands fa-youtube"></i>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="video-thumb-pattern"></div>
                            <div className="video-thumb-overlay"></div>
                            <div className="video-play-icon">
                              <i className="fa-brands fa-youtube"></i>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="video-meta">
                        <h3 className="video-title">{playlist.title}</h3>
                        {playlist.description && (
                          <span className="video-year">{playlist.description}</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ===== Decorative Divider ===== */}
              <div className="archives-divider" aria-hidden="true">
                <div className="divider-v-line"></div>
                <div className="divider-v-ornament">◆</div>
                <div className="divider-v-line"></div>
              </div>

              {/* ===== Right Column (25-30%) : Promotional Panel with Phone ===== */}
              <aside className="archives-right-col reveal">
                <div className="promo-panel">
                  <div className="promo-temple-icon">
                    <i className="fa-solid fa-gopuram"></i>
                  </div>
                  <div className="divider-split-gold small center"></div>
                  <p className="promo-text">
                    Relive the devotion, music, and timeless moments of the Wari through our video collection.
                  </p>

                  <div className="phone-showcase">
                    <img
                      src={phoneMockup}
                      alt="Watch the Wari on YouTube"
                      className="phone-mockup-img"
                    />
                    <div className="phone-shadow"></div>
                  </div>

                  <a
                    href="https://www.youtube.com/@GurujeeGopalavallidasar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-channel btn-channel-secondary"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    Visit YouTube Channel
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
        )}

        {/* Back to Top Floating Button */}
        <button
          className="btn-back-to-top-float"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Go to Top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        {/* Main Footer */}
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <img src={rksLogoWhite} alt="RadhaKrishna Satsangam Logo" className="footer-logo" />
              <div className="social-links">
                <a href="https://www.youtube.com/@GurujeeGopalavallidasar" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.facebook.com/gopalavalli.dasan/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/gurujee_gopalavallidasar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=917010888236&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="footer-copy-block">
              <p className="copy-line-1">&copy; 2026 RadhaKrishna Satsangam</p>
              <p className="copy-line-2">All Rights Reserved.</p>
              <p className="copy-line-3">Designed &amp; Developed by</p>
              <p className="copy-line-name">Vedha Mahadevan</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
          </div>
        </footer>

      </div>
    </>
  );
}
