import React from 'react';
import HistoricalTimeline from '../../components/tradition/HistoricalTimeline';
import ChapterRibbon from '../../components/tradition/ChapterRibbon';
import ChapterFooterNav from '../../components/tradition/ChapterFooterNav';

export const ChapterTimeline: React.FC = () => {
  return (
    <div className="chapter-detail-page">
      <div className="chapter-page-hero-banner">
        <div className="tradition-container">
          <div className="chapter-breadcrumb">
            <span>The Living Tradition</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Chapter 05</span>
          </div>
          <h1 className="chapter-banner-title">800+ Years Timeline</h1>
          <p className="chapter-banner-desc">An interactive chronicle spanning from 6th-century Pundalik to the present-day grand pilgrimage.</p>
        </div>
      </div>

      {/* Horizontal Chapter Stepper Ribbon */}
      <ChapterRibbon currentSlug="timeline" />

      {/* Main Chapter Content: Horizontal Interactive Timeline */}
      <HistoricalTimeline />

      {/* Bottom Pagination */}
      <ChapterFooterNav currentSlug="timeline" />
    </div>
  );
};

export default ChapterTimeline;
