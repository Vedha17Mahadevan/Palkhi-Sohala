import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { prefetchRoute } from '../../utils/prefetchUtils';
import { ALL_WARI_DESTINATIONS, DestinationItem } from './chaptersData';

interface ChapterHeroCarouselProps {
  currentPath: string;
}

export const ChapterHeroCarousel: React.FC<ChapterHeroCarouselProps> = ({ currentPath }) => {
  const { navigateTo } = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Determine active destination index (00 to 07)
  const activeIndex = useMemo(() => {
    const clean = currentPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/tradition';
    if (clean === '/tradition') return 0;
    if (clean.startsWith('/tradition/origins')) return 1;
    if (clean.startsWith('/tradition/lord-shiva')) return 2;
    if (clean.startsWith('/tradition/palkhi')) return 3;
    if (clean.startsWith('/tradition/rituals') || clean.includes('/rituals')) return 4;
    if (clean.startsWith('/tradition/dindi')) return 5;
    if (clean.startsWith('/tradition/devotional')) return 6;
    if (clean.startsWith('/tradition/arrival')) return 7;

    const exactIdx = ALL_WARI_DESTINATIONS.findIndex(dest => dest.path === clean);
    return exactIdx !== -1 ? exactIdx : 0;
  }, [currentPath]);

  // Update arrow states based on scroll position
  const checkScrollBounds = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    checkScrollBounds();
    track.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds, { passive: true });

    return () => {
      track.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, [checkScrollBounds]);

  // Center the active chapter card inside the carousel track
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const activeCard = track.children[activeIndex] as HTMLElement;
      if (activeCard) {
        const trackWidth = track.clientWidth;
        const cardLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        const targetScroll = cardLeft - (trackWidth / 2) + (cardWidth / 2);

        track.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth',
        });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    // Scroll by ~2 card widths
    const scrollAmount = Math.max(220, track.clientWidth * 0.55);
    track.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleCardClick = (dest: DestinationItem) => {
    navigateTo(dest.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation inside the carousel
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = Math.min(ALL_WARI_DESTINATIONS.length - 1, index + 1);
      const nextCard = trackRef.current?.children[nextIndex] as HTMLElement;
      nextCard?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = Math.max(0, index - 1);
      const prevCard = trackRef.current?.children[prevIndex] as HTMLElement;
      prevCard?.focus();
    }
  };

  return (
    <div className="hero-chapter-carousel-section" aria-label="Wari Tradition Chapters Carousel">
      <div className="hero-carousel-row">
        {/* Previous Arrow Button */}
        <button
          type="button"
          className="hero-carousel-arrow prev"
          onClick={() => handleArrowScroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll to previous chapters"
          title="Previous Chapters"
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>

        {/* Horizontal Carousel Track */}
        <div 
          ref={trackRef} 
          className="hero-carousel-track"
          role="tablist"
          aria-label="Wari Tradition Chapters"
        >
          {ALL_WARI_DESTINATIONS.map((dest, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={dest.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'page' : undefined}
                className={`hero-carousel-card ${isActive ? 'active' : ''}`}
                onClick={() => handleCardClick(dest)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onMouseEnter={() => prefetchRoute(dest.path)}
                title={`Chapter ${dest.number}: ${dest.shortTitle}`}
              >
                <div className="carousel-card-badge-row">
                  <span className="carousel-card-num">
                    {dest.number === '00' ? '✦ 00' : `CH ${dest.number}`}
                  </span>
                  {isActive && <span className="carousel-card-indicator" aria-hidden="true">◆</span>}
                </div>
                <span className="carousel-card-title">{dest.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Next Arrow Button */}
        <button
          type="button"
          className="hero-carousel-arrow next"
          onClick={() => handleArrowScroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll to next chapters"
          title="Next Chapters"
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="hero-carousel-dots" aria-label="Chapter Indicators">
        {ALL_WARI_DESTINATIONS.map((dest, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={dest.number}
              type="button"
              className={`hero-carousel-dot ${isActive ? 'active' : ''}`}
              onClick={() => handleCardClick(dest)}
              aria-label={`Go to chapter ${dest.number} (${dest.shortTitle})`}
              title={`Chapter ${dest.number}: ${dest.shortTitle}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ChapterHeroCarousel);

