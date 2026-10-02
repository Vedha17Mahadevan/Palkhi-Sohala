import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from '../context/NavigationContext';
import JourneyNavigator from '../components/tradition/JourneyNavigator';
import ChapterRibbon from '../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../components/tradition/ChapterFooterNav';
import { CHAPTERS_DATA, ChapterItem } from '../components/tradition/chaptersData';
import TraditionOverview from './tradition/TraditionOverview';
import OriginsSection from '../components/tradition/OriginsSection';
import ShivaWarkariStory from '../components/tradition/ShivaWarkariStory';
import BirthOfPalkhiSection from '../components/tradition/BirthOfPalkhiSection';
import { prefetchAllRoutes } from '../utils/prefetchUtils';

const CHAPTER_SECTIONS: Record<string, React.ReactNode> = {
  origins: <OriginsSection />,
  'lord-shiva': <ShivaWarkariStory />,
  palkhi: <BirthOfPalkhiSection />,
};

export const Tradition: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);

  useEffect(() => {
    prefetchAllRoutes();
  }, []);

  const isOverview = currentPath === '/tradition';

  const currentChapter: ChapterItem = useMemo(() => {
    return CHAPTERS_DATA.find(c => c.path === currentPath) || CHAPTERS_DATA[0];
  }, [currentPath]);

  useEffect(() => {
    if (isOverview) {
      document.title = "The Timeless Tradition of the Pandharpur Wari";
    } else {
      document.title = `Chapter ${currentChapter.number}: ${currentChapter.title} — Pandharpur Wari`;
    }
  }, [currentPath, isOverview, currentChapter]);

  return (
    <article className="tradition-page-wrapper">
      {/* Floating Glass Back Button overlaid directly on Hero */}
      <button 
        className="hero-glass-back-btn tradition-hero-back-btn" 
        onClick={() => navigateTo('/', 'palkhi-route')}
        aria-label="Back to Home"
      >
        <i className="fa-solid fa-arrow-left-long back-arrow-icon" aria-hidden="true"></i>
        <span>Back to Home</span>
      </button>

      {/* Sleek Floating Chapter Drawer & Unobtrusive Pill */}
      <JourneyNavigator 
        isOpen={isChapterDrawerOpen}
        onOpen={() => setIsChapterDrawerOpen(true)}
        onClose={() => setIsChapterDrawerOpen(false)}
      />

      {isOverview ? (
        <div className="chapter-content-transition-wrap" key="overview">
          <TraditionOverview />
        </div>
      ) : (
        <div className="chapter-detail-page">
          {/* Shared Chapter Hero Banner — Persistent across chapter route changes */}
          <div className="chapter-page-hero-banner">
            <div className="tradition-container">
              <div className="chapter-breadcrumb">
                <span>The Living Tradition</span>
                <span className="crumb-sep">/</span>
                <span className="crumb-active">Chapter {currentChapter.number}</span>
              </div>
              <h1 className="chapter-banner-title">{currentChapter.title}</h1>
              <p className="chapter-banner-desc">{currentChapter.shortDesc}</p>
            </div>
          </div>

          {/* Horizontal Chapter Stepper Ribbon */}
          <ChapterRibbon currentSlug={currentChapter.slug} />

          {/* Main Chapter Content with fast 250ms transition */}
          <div className="chapter-content-transition-wrap" key={currentChapter.slug}>
            {CHAPTER_SECTIONS[currentChapter.slug]}
          </div>

          {/* Bottom Pagination */}
          <ChapterFooterNav currentSlug={currentChapter.slug} />
        </div>
      )}
    </article>
  );
};

export default React.memo(Tradition);
