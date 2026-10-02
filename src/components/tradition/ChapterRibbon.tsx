import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA } from './chaptersData';
import { prefetchRoute } from '../../utils/prefetchUtils';

interface ChapterRibbonProps {
  currentSlug?: string;
}

export const ChapterRibbonComponent: React.FC<ChapterRibbonProps> = ({ currentSlug }) => {
  const { currentPath, navigateTo } = useRouter();

  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOverview = currentPath === '/tradition';

  return (
    <nav className="chapter-ribbon-bar" aria-label="Chapter quick navigation">
      <div className="tradition-container">
        <div className="chapter-ribbon-scroll">
          <button
            className={`ribbon-item ${isOverview ? 'active' : ''}`}
            onClick={() => handleNav('/tradition')}
            onMouseEnter={() => prefetchRoute('/tradition')}
            title="Overview & Table of Chapters"
          >
            <span className="ribbon-num">00</span>
            <span className="ribbon-title">Overview</span>
          </button>

          {CHAPTERS_DATA.map((chap) => {
            const isActive = currentPath === chap.path || currentSlug === chap.slug;
            return (
              <button
                key={chap.id}
                className={`ribbon-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNav(chap.path)}
                onMouseEnter={() => prefetchRoute(chap.path)}
                title={`Chapter ${chap.number}: ${chap.title} — ${chap.subtitle}`}
              >
                <span className="ribbon-num">{chap.number}</span>
                <span className="ribbon-title">{chap.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export const ChapterRibbon = React.memo(ChapterRibbonComponent);
export default ChapterRibbon;
