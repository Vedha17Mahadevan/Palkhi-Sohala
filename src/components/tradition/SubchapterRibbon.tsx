import React, { useRef, useEffect } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { SUBCHAPTERS_DATA } from './livingTraditionsData';
import { prefetchRoute } from '../../utils/prefetchUtils';

interface SubchapterRibbonProps {
  currentPath: string;
}

export const SubchapterRibbon: React.FC<SubchapterRibbonProps> = ({ currentPath }) => {
  const { navigateTo } = useRouter();
  const activeTabRef = useRef<HTMLButtonElement | null>(null);

  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOverview = currentPath === '/tradition/living-traditions';

  // Ensure active subchapter is immediately scrolled into view if container overflows
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentPath]);

  return (
    <nav className="subchapter-editorial-nav subchapter-segmented-nav" aria-label="Chapter 04 Subchapter Navigation">
      <div className="tradition-container">
        <div className="subchapter-editorial-track subchapter-tabs-track" role="tablist">
          {/* Subchapter 04 Overview Tab */}
          <button
            ref={isOverview ? activeTabRef : null}
            className={`editorial-subchapter-item subchapter-nav-tab ${isOverview ? 'active' : ''}`}
            onClick={() => handleNav('/tradition/living-traditions')}
            onMouseEnter={() => prefetchRoute('/tradition/living-traditions')}
            role="tab"
            aria-selected={isOverview}
            title="Chapter 04 Overview"
            aria-current={isOverview ? 'page' : undefined}
          >
            <span className="subchapter-item-meta subchapter-badge-accent">❖</span>
            <span className="subchapter-item-title subchapter-tab-text">Overview</span>
            {isOverview && <span className="subchapter-active-indicator" aria-hidden="true" />}
          </button>

          {/* Subchapters 04.1 through 04.4 */}
          {SUBCHAPTERS_DATA.map((sub) => {
            const isActive = currentPath === sub.path;
            return (
              <button
                key={sub.id}
                ref={isActive ? activeTabRef : null}
                className={`editorial-subchapter-item subchapter-nav-tab ${isActive ? 'active' : ''}`}
                onClick={() => handleNav(sub.path)}
                onMouseEnter={() => prefetchRoute(sub.path)}
                role="tab"
                aria-selected={isActive}
                title={`Subchapter ${sub.subNumber}: ${sub.title}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="subchapter-item-meta subchapter-num-code">{sub.subNumber}</span>
                <span className="subchapter-item-title subchapter-tab-text">{sub.title}</span>
                {isActive && <span className="subchapter-active-indicator" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(SubchapterRibbon);
