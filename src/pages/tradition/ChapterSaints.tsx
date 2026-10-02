import React from 'react';
import EvolutionSection from '../../components/tradition/EvolutionSection';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterSaints: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 03</span>
          </div>
          <h1 className="chapter-banner-title">The Great Saints</h1>
          <p className="chapter-banner-desc">The four monumental visionaries who shaped the philosophy and democratic heart of the Warkari path.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="saints" />

      {/* Main Chapter Content: 4 Expandable Cards */}
      <EvolutionSection />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="saints" />
    </div>
  );
};

export default ChapterSaints;
