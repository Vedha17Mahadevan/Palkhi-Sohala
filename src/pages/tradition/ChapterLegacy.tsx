import React from 'react';
import WariLegacy from '../../components/tradition/WariLegacy';
import SpiritOfWari from '../../components/tradition/SpiritOfWari';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterLegacy: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 07</span>
          </div>
          <h1 className="chapter-banner-title">The Wari Today &amp; Sacred Values</h1>
          <p className="chapter-banner-desc">Twenty lakh pilgrims, eight centuries of peaceful fellowship, and the six enduring virtues that sustain the pilgrimage.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="legacy" />

      {/* Main Chapter Content: Wari Today & Six Core Values */}
      <WariLegacy />
      <SpiritOfWari />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="legacy" />
    </div>
  );
};

export default ChapterLegacy;
