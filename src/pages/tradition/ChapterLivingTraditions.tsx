import React from 'react';
import LivingTraditionsSection from '../../components/tradition/LivingTraditionsSection';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterLivingTraditions: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 04</span>
          </div>
          <h1 className="chapter-banner-title">The Living Traditions of Wari</h1>
          <p className="chapter-banner-desc">Rituals, Customs and Devotional Practices That Keep the Spirit of Wari Alive.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="living-traditions" />

      {/* Main Chapter Content: All 8 Subchapters */}
      <LivingTraditionsSection />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="living-traditions" />
    </div>
  );
};

export default ChapterLivingTraditions;

