import React from 'react';
import OriginsSection from '../../components/tradition/OriginsSection';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterOrigins: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 01</span>
          </div>
          <h1 className="chapter-banner-title">Origins of the Wari</h1>
          <p className="chapter-banner-desc">The ancient tradition of undertaking the pilgrimage to Pandharpur on foot.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="origins" />

      {/* Main Chapter Content */}
      <OriginsSection />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="origins" />
    </div>
  );
};

export default ChapterOrigins;
