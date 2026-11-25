import React from 'react';
import { getCloudinaryUrl } from '../config/cloudinary';
import { Palkhi } from '../types';
import { useRouter } from '../context/NavigationContext';
import { usePalkhiFilters } from '../hooks/usePalkhiFilters';
import FilterBar from '../components/palkhi/FilterBar';
import PalkhiGrid from '../components/palkhi/PalkhiGrid';
import Icon from '../components/common/Icon';
import '../styles/directory.css';

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

  return (
    <section className="palkhis-directory-page-section">
      {/* Immersive Hero Banner with Direct Floating Glass Back Navigation */}
      <div className="directory-hero-banner" style={{ backgroundImage: `url(${getCloudinaryUrl('palkhi', { width: 1400 })})` }}>
        <div className="hero-gradient-overlay"></div>

        {/* Floating Glass Back Button overlaid on Hero */}
        <button 
          className="hero-glass-back-btn" 
          onClick={() => navigateTo('/', 'palkhi')}
          aria-label="Back to Home"
        >
          <Icon name="arrow-left-long" className="back-arrow-icon" />
          <span>Back to Home</span>
        </button>

        <div className="hero-centered-content">
          <h1 className="directory-hero-title">Explore All Palkhis</h1>
          <p className="directory-hero-subtitle">
            Discover the sacred journeys of Maharashtra's revered saints on their path to Pandharpur.
          </p>
          
          {/* Centered Search Bar */}
          <div className="directory-hero-search-box-wrap">
            <Icon name="magnifying-glass" className="search-box-icon" />
            <input
              type="text"
              className="directory-hero-search-input"
              placeholder="Search by Palkhi, saint, origin, district, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="btn-clear-search" onClick={() => setSearchQuery('')}>
                <Icon name="xmark" />
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
              <Icon name="route" />
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
