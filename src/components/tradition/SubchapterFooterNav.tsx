import React from 'react';
import { useRouter } from '../../context/NavigationContext';
import { SUBCHAPTERS_DATA, SubchapterItem } from './livingTraditionsData';

interface SubchapterFooterNavProps {
  currentSlug: string;
}

export const SubchapterFooterNav: React.FC<SubchapterFooterNavProps> = ({ currentSlug }) => {
  const { navigateTo } = useRouter();

  const currentIndex = SUBCHAPTERS_DATA.findIndex(s => s.slug === currentSlug);

  const prevSubchapter: SubchapterItem | null = currentIndex > 0 ? SUBCHAPTERS_DATA[currentIndex - 1] : null;
  const nextSubchapter: SubchapterItem | null = currentIndex < SUBCHAPTERS_DATA.length - 1 ? SUBCHAPTERS_DATA[currentIndex + 1] : null;

  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="chapter-footer-nav" aria-label="Subchapter Pagination">
      <div className="tradition-container">
        <div className="chapter-footer-nav-inner">
          
          {/* Previous Button */}
          <div className="nav-cell prev-cell">
            {prevSubchapter ? (
              <button 
                className="btn-chapter-pagination prev"
                onClick={() => handleNav(prevSubchapter.path)}
                title={`Go to Subchapter ${prevSubchapter.subNumber}: ${prevSubchapter.title}`}
              >
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="pagination-text-group text-left">
                  <span className="pagination-sub">Previous Subchapter</span>
                  <h4 className="pagination-title">{prevSubchapter.subNumber} • {prevSubchapter.title}</h4>
                </div>
              </button>
            ) : (
              <button 
                className="btn-chapter-pagination prev"
                onClick={() => handleNav('/tradition/living-traditions')}
                title="Return to Chapter 04 Overview"
              >
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="pagination-text-group text-left">
                  <span className="pagination-sub">Chapter 04</span>
                  <h4 className="pagination-title">Overview</h4>
                </div>
              </button>
            )}
          </div>

          {/* Center: Back to Chapter 04 Overview */}
          <div className="nav-cell center-cell">
            <button 
              className="btn-back-to-tradition-overview"
              onClick={() => handleNav('/tradition/living-traditions')}
              title="Return to Chapter 04 Overview"
            >
              <i className="fa-solid fa-list-ul"></i>
              <span>Chapter 04 Overview</span>
            </button>
          </div>

          {/* Next Button */}
          <div className="nav-cell next-cell">
            {nextSubchapter ? (
              <button 
                className="btn-chapter-pagination next"
                onClick={() => handleNav(nextSubchapter.path)}
                title={`Go to Subchapter ${nextSubchapter.subNumber}: ${nextSubchapter.title}`}
              >
                <div className="pagination-text-group text-right">
                  <span className="pagination-sub">Next Subchapter</span>
                  <h4 className="pagination-title">{nextSubchapter.subNumber} • {nextSubchapter.title}</h4>
                </div>
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            ) : (
              <button 
                className="btn-chapter-pagination next"
                onClick={() => handleNav('/palkhis')}
                title="Explore All Palkhis Directory"
              >
                <div className="pagination-text-group text-right">
                  <span className="pagination-sub">Continue to</span>
                  <h4 className="pagination-title">Palkhi Directory</h4>
                </div>
                <div className="pagination-arrow-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default React.memo(SubchapterFooterNav);

