import React, { useRef, useEffect } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA } from './chaptersData';
import { prefetchRoute } from '../../utils/prefetchUtils';

interface ChapterRibbonProps {
  currentSlug?: string;
}

export const ChapterRibbonComponent: React.FC<ChapterRibbonProps> = ({ currentSlug }) => {
  const { currentPath, navigateTo } = useRouter();
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOverview = currentPath === '/tradition';

  // Keep active chapter visible in horizontal scroll
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentPath, currentSlug]);

  return (
    <nav className="chapter-editorial-nav chapter-ribbon-bar" aria-label="Wari Tradition Chapters">
      <div className="tradition-container">
        <div className="chapter-editorial-track chapter-ribbon-scroll" role="tablist">
          {/* Chapter 00 Overview Link */}
          <button
            ref={isOverview ? activeItemRef : null}
            className={`editorial-chapter-item ribbon-item ${isOverview ? 'active' : ''}`}
            onClick={() => handleNav('/tradition')}
            onMouseEnter={() => prefetchRoute('/tradition')}
            role="tab"
            aria-selected={isOverview}
            title="Overview & Table of Chapters"
          >
            <span className="chapter-item-meta ribbon-num">00</span>
            <span className="chapter-item-name ribbon-title">Overview</span>
            {isOverview && <span className="chapter-active-indicator" aria-hidden="true" />}
          </button>

          <span className="chapter-nav-separator" aria-hidden="true">/</span>

          {/* Chapters 01 through 04 */}
          {CHAPTERS_DATA.map((chap, index) => {
            const isActive = currentPath === chap.path || currentSlug === chap.slug;
            return (
              <React.Fragment key={chap.id}>
                <button
                  ref={isActive ? activeItemRef : null}
                  className={`editorial-chapter-item ribbon-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNav(chap.path)}
                  onMouseEnter={() => prefetchRoute(chap.path)}
                  role="tab"
                  aria-selected={isActive}
                  title={`Chapter ${chap.number}: ${chap.title}`}
                >
                  <span className="chapter-item-meta ribbon-num">{chap.number}</span>
                  <span className="chapter-item-name ribbon-title">{chap.title}</span>
                  {isActive && <span className="chapter-active-indicator" aria-hidden="true" />}
                </button>
                {index < CHAPTERS_DATA.length - 1 && (
                  <span className="chapter-nav-separator" aria-hidden="true">/</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export const ChapterRibbon = React.memo(ChapterRibbonComponent);
export default ChapterRibbon;
