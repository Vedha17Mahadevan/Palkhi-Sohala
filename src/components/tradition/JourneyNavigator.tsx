import React, { useState } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { CHAPTERS_DATA } from './chaptersData';

interface JourneyNavigatorProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const JourneyNavigator: React.FC<JourneyNavigatorProps> = ({
  isOpen: controlledIsOpen,
  onOpen,
  onClose
}) => {
  const { currentPath, navigateTo } = useRouter();
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isDrawerOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setDrawerOpen = (open: boolean) => {
    if (open) {
      if (onOpen) onOpen();
      else setInternalIsOpen(true);
    } else {
      if (onClose) onClose();
      else setInternalIsOpen(false);
    }
  };

  const handleNav = (path: string) => {
    navigateTo(path);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isIntro = currentPath === '/tradition';
  const currentChapter = CHAPTERS_DATA.find(c => c.path === currentPath);

  return (
    <>
      {/* Discreet Corner Floating Chapter Pill */}
      <div className="journey-quick-trigger-dock">
        <button
          className="btn-journey-quick-pill"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open Chapter Index"
          title="Browse Tradition Chapters"
        >
          <span className="dock-icon">📖</span>
          <span className="dock-label">
            {isIntro ? 'Chapters' : `Ch. ${currentChapter?.number || ''}`}
          </span>
          <i className="fa-solid fa-bars-staggered dock-bars-icon"></i>
        </button>
      </div>

      {/* Elegant Slide-Over / Bottom Drawer */}
      {isDrawerOpen && (
        <div className="journey-drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <aside 
            className="journey-drawer-panel" 
            onClick={(e) => e.stopPropagation()}
            aria-label="Table of Chapters"
          >
            <div className="drawer-handle-bar"></div>

            <div className="drawer-header">
              <div className="drawer-title-group">
                <span className="drawer-eyebrow">Wari Tradition</span>
                <h3 className="drawer-title">The Living Tradition</h3>
                <p className="drawer-sub">Select a chapter to explore</p>
              </div>
              <button
                className="btn-drawer-close"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close chapters menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="drawer-chapters-flow">
              {/* Introduction Overview */}
              <button
                className={`drawer-chapter-item ${isIntro ? 'active' : ''}`}
                onClick={() => handleNav('/tradition')}
              >
                <div className="drawer-item-left">
                  <span className="drawer-item-num">00</span>
                </div>
                <div className="drawer-item-center">
                  <h4 className="drawer-item-title">Tradition Overview</h4>
                  <p className="drawer-sub">Introduction and core philosophy of the Wari</p>
                </div>
                {isIntro ? (
                  <span className="drawer-active-badge">Active</span>
                ) : (
                  <i className="fa-solid fa-chevron-right drawer-arrow"></i>
                )}
              </button>

              {/* Dedicated Chapters */}
              {CHAPTERS_DATA.map((chap) => {
                const isActive = currentPath === chap.path;
                return (
                  <button
                    key={chap.id}
                    className={`drawer-chapter-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleNav(chap.path)}
                  >
                    <div className="drawer-item-left">
                      <span className="drawer-item-num">{chap.number}</span>
                    </div>
                    <div className="drawer-item-center">
                      <h4 className="drawer-item-title">{chap.title}</h4>
                      <p className="drawer-item-desc">{chap.subtitle}</p>
                    </div>
                    {isActive ? (
                      <span className="drawer-active-badge">Active</span>
                    ) : (
                      <i className="fa-solid fa-chevron-right drawer-arrow"></i>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default JourneyNavigator;
