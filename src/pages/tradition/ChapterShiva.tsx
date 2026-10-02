import React from 'react';
import ShivaWarkariStory from '../../components/tradition/ShivaWarkariStory';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterShiva: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 02</span>
          </div>
          <h1 className="chapter-banner-title">Lord Shiva – The First Warkari</h1>
          <p className="chapter-banner-desc">According to ancient legends and the beliefs of the Warkari tradition, Lord Shiva is regarded as the first Warkari.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="lord-shiva" />

      {/* Main Chapter Content */}
      <ShivaWarkariStory />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="lord-shiva" />
    </div>
  );
};

export default ChapterShiva;
