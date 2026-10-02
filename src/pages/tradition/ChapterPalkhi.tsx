import React from 'react';
import BirthOfPalkhiSection from '../../components/tradition/BirthOfPalkhiSection';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterPalkhi: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 03</span>
          </div>
          <h1 className="chapter-banner-title">The Sacred Palkhi Tradition</h1>
          <p className="chapter-banner-desc">The journey of the sacred Padukas to Pandharpur.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="palkhi" />

      {/* Main Chapter Content: Foundation Spread, Twin Cards & Connected Timeline */}
      <BirthOfPalkhiSection />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="palkhi" />
    </div>
  );
};

export default ChapterPalkhi;
