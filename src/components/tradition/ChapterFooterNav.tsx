import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA, ChapterItem } from './chaptersData';
import { prefetchRoute } from '../../utils/prefetchUtils';

interface ChapterFooterNavProps {
  currentSlug: string;
}

export const ChapterFooterNav: React.FC<ChapterFooterNavProps> = ({ currentSlug }) => {
  const { navigateTo } = useRouter();

  const currentIndex = CHAPTERS_DATA.findIndex(c => c.slug === currentSlug);

  const prevChapter: ChapterItem | null = currentIndex > 0 ? CHAPTERS_DATA[currentIndex - 1] : null;
  const nextChapter: ChapterItem | null = currentIndex < CHAPTERS_DATA.length - 1 ? CHAPTERS_DATA[currentIndex + 1] : null;

  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="chapter-footer-nav" aria-label="Chapter Pagination">
      <div className="tradition-container">
        <div className="chapter-footer-nav-inner">
          
          {/* Previous Chapter Button */}
          <div className="nav-cell prev-cell">
            {prevChapter ? (
              <button 
                className="btn-chapter-pagination prev"
                onClick={() => handleNav(prevChapter.path)}
                onMouseEnter={() => prefetchRoute(prevChapter.path)}
                title={`Go to Chapter ${prevChapter.number}: ${prevChapter.title}`}
              >
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="pagination-text-group text-left">
                  <span className="pagination-sub">Chapter {prevChapter.number}</span>
                  <h4 className="pagination-title">{prevChapter.title}</h4>
                </div>
              </button>
            ) : (
              <button 
                className="btn-chapter-pagination prev"
                onClick={() => handleNav('/tradition')}
                onMouseEnter={() => prefetchRoute('/tradition')}
                title="Return to Tradition Overview"
              >
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="pagination-text-group text-left">
                  <span className="pagination-sub">Wari Beginning</span>
                  <h4 className="pagination-title">Tradition Overview</h4>
                </div>
              </button>
            )}
          </div>

          {/* Center: Back to Overview Table of Contents */}
          <div className="nav-cell center-cell">
            <button 
              className="btn-back-to-tradition-overview"
              onClick={() => handleNav('/tradition')}
              onMouseEnter={() => prefetchRoute('/tradition')}
              title="Return to Tradition Landing Page"
            >
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              <span>All Chapters</span>
            </button>
          </div>

          {/* Next Chapter Button */}
          <div className="nav-cell next-cell">
            {nextChapter ? (
              <button 
                className="btn-chapter-pagination next"
                onClick={() => handleNav(nextChapter.path)}
                onMouseEnter={() => prefetchRoute(nextChapter.path)}
                title={`Go to Chapter ${nextChapter.number}: ${nextChapter.title}`}
              >
                <div className="pagination-text-group text-right">
                  <span className="pagination-sub">Chapter {nextChapter.number}</span>
                  <h4 className="pagination-title">{nextChapter.title}</h4>
                </div>
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </div>
              </button>
            ) : (
              <button 
                className="btn-chapter-pagination next"
                onClick={() => handleNav('/tradition')}
                onMouseEnter={() => prefetchRoute('/tradition')}
                title="Return to Tradition Overview"
              >
                <div className="pagination-text-group text-right">
                  <span className="pagination-sub">Pilgrimage Culmination</span>
                  <h4 className="pagination-title">Return to Overview</h4>
                </div>
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
                </div>
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default React.memo(ChapterFooterNav);
