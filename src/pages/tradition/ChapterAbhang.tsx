import React from 'react';
import FeaturedAbhang from '../../components/tradition/FeaturedAbhang';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterAbhang: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 06</span>
          </div>
          <h1 className="chapter-banner-title">Sacred Abhang</h1>
          <p className="chapter-banner-desc">The immortal devotional hymns of the saints, the beat of the Mridangam, and the choral soul of the Wari.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="abhang" />

      {/* Main Chapter Content: Sacred Abhang with Audio, Copy, Share */}
      <FeaturedAbhang />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="abhang" />
    </div>
  );
};

export default ChapterAbhang;
