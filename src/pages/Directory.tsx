import React, { useEffect } from 'react';
import { getCloudinaryUrl } from '../config/cloudinary';
import { Palkhi } from '../types';
import { useRouter } from '../context/NavigationContext';
import { usePalkhiFilters } from '../hooks/usePalkhiFilters';
import FilterBar from '../components/palkhi/FilterBar';
import PalkhiGrid from '../components/palkhi/PalkhiGrid';

interface DirectoryProps {
  onSelectPalkhi: (palkhi: Palkhi) => void;
}

export const Directory: React.FC<DirectoryProps> = React.memo(({ onSelectPalkhi }) => {
  const { navigateTo } = useRouter();
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedDistrict,
    setSelectedDistrict,
    selectedDuration,
    setSelectedDuration,
    sortOption,
    setSortOption,
    sortedPalkhis,
    resetFilters
  } = usePalkhiFilters();

  // Scroll handler to toggle back to top button visibility in directory page
  useEffect(() => {
    const handleScroll = () => {
      const backToTopBtn = document.querySelector('.btn-back-to-top-float') as HTMLElement;
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="palkhis-directory-page-section">
      {/* Immersive Hero Banner with Direct Floating Glass Back Navigation */}
      <div className="directory-hero-banner" style={{ backgroundImage: `url(${getCloudinaryUrl('palkhi', { width: 1400 })})` }}>
        <div className="hero-gradient-overlay"></div>

        {/* Floating Glass Back Button overlaid on Hero */}
        <button 
          className="hero-glass-back-btn" 
          onClick={() => navigateTo('/', 'palkhi-route')}
          aria-label="Back to Home"
        >
          <i className="fa-solid fa-arrow-left-long back-arrow-icon" aria-hidden="true"></i>
          <span>Back to Home</span>
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
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

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
              onClick={resetFilters}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <PalkhiGrid palkhis={sortedPalkhis} onSelectPalkhi={onSelectPalkhi} />
        )}
      </div>
    </section>
  );
});

export default Directory;
