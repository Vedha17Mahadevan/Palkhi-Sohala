import React, { useEffect, useMemo } from 'react';
import { useRouter } from '../context/NavigationContext';
import ChapterHeroCarousel from '../components/tradition/ChapterHeroCarousel';
import ChapterFooterNav from '../components/tradition/ChapterFooterNav';
import { CHAPTERS_DATA } from '../components/tradition/chaptersData';
import TraditionOverview from './tradition/TraditionOverview';
import OriginsSection from '../components/tradition/OriginsSection';
import ShivaWarkariStory from '../components/tradition/ShivaWarkariStory';
import BirthOfPalkhiSection from '../components/tradition/BirthOfPalkhiSection';
import SubchapterRituals from '../components/tradition/subchapters/SubchapterRituals';
import SubchapterDindi from '../components/tradition/subchapters/SubchapterDindi';
import SubchapterDevotions from '../components/tradition/subchapters/SubchapterDevotions';
import SubchapterArrivalSeva from '../components/tradition/subchapters/SubchapterArrivalSeva';
import { prefetchAllRoutes } from '../utils/prefetchUtils';

const CHAPTER_SECTIONS: Record<string, React.ReactNode> = {
  origins: <OriginsSection />,
  'lord-shiva': <ShivaWarkariStory />,
  palkhi: <BirthOfPalkhiSection />,
  rituals: <SubchapterRituals />,
  'dindi-life': <SubchapterDindi />,
  'devotional-practices': <SubchapterDevotions />,
  'arrival-and-seva': <SubchapterArrivalSeva />,
};

const resolveChapterSlug = (path: string): string => {
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '');
  if (clean === '/tradition/origins') return 'origins';
  if (clean === '/tradition/lord-shiva') return 'lord-shiva';
  if (clean === '/tradition/palkhi') return 'palkhi';
  if (clean === '/tradition/rituals' || clean === '/tradition/living-traditions' || clean === '/tradition/living-traditions/rituals') return 'rituals';
  if (clean === '/tradition/dindi-life' || clean === '/tradition/living-traditions/dindi-life') return 'dindi-life';
  if (clean === '/tradition/devotional-practices' || clean === '/tradition/living-traditions/devotional-practices') return 'devotional-practices';
  if (clean === '/tradition/arrival-and-seva' || clean === '/tradition/living-traditions/arrival-and-seva') return 'arrival-and-seva';
  
  if (clean.startsWith('/tradition/rituals')) return 'rituals';
  if (clean.startsWith('/tradition/dindi')) return 'dindi-life';
  if (clean.startsWith('/tradition/devotional')) return 'devotional-practices';
  if (clean.startsWith('/tradition/arrival')) return 'arrival-and-seva';
  if (clean.startsWith('/tradition/living-traditions')) return 'rituals';
  if (clean.startsWith('/tradition/palkhi')) return 'palkhi';
  if (clean.startsWith('/tradition/lord-shiva')) return 'lord-shiva';
  if (clean.startsWith('/tradition/origins')) return 'origins';
  
  return 'origins';
};

export const Tradition: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();

  useEffect(() => {
    prefetchAllRoutes();
  }, []);

  const isOverview = currentPath === '/tradition';

  const currentDestination = useMemo(() => {
    if (isOverview) {
      return {
        number: '00',
        title: 'The Timeless Tradition of the Pandharpur Wari',
        subtitle: 'A 700-Year Spiritual Democracy of Faith, Equality and Collective Devotion',
        slug: 'overview',
        path: '/tradition',
        breadcrumbLabel: 'Overview',
      };
    }
    const slug = resolveChapterSlug(currentPath);
    const chap = CHAPTERS_DATA.find(c => c.slug === slug) || CHAPTERS_DATA[0];
    return {
      ...chap,
      breadcrumbLabel: `Chapter ${chap.number}`,
    };
  }, [currentPath, isOverview]);

  useEffect(() => {
    if (isOverview) {
      document.title = "The Timeless Tradition of the Pandharpur Wari";
    } else {
      document.title = `Chapter ${currentDestination.number}: ${currentDestination.title} — Pandharpur Wari`;
    }
  }, [currentPath, isOverview, currentDestination]);

  return (
    <article className="tradition-page-wrapper">
      <div className="chapter-detail-page">
        {/* Integrated Maroon Chapter Hero Banner */}
        <header className="chapter-page-hero-banner">
          <div className="tradition-container">
            {/* 1. Breadcrumb: Home / Wari Tradition / [Chapter 04 or Overview] */}
            <nav className="chapter-breadcrumb" aria-label="Breadcrumb">
              <span 
                onClick={() => navigateTo('/')} 
                className="crumb-link"
                title="Return to Home"
              >
                Home
              </span>
              <span className="crumb-sep">/</span>
              <span 
                onClick={() => navigateTo('/tradition')} 
                className="crumb-link"
                title="Return to Wari Tradition Overview"
              >
                Wari Tradition
              </span>
              <span className="crumb-sep">/</span>
              <span className="crumb-active">{currentDestination.breadcrumbLabel}</span>
            </nav>

            {/* 2. Large Chapter Title */}
            <h1 className="chapter-banner-title">
              {isOverview ? currentDestination.title : `Chapter ${currentDestination.number}: ${currentDestination.title}`}
            </h1>

            {/* 3. Chapter Subtitle */}
            <p className="chapter-banner-desc">
              {currentDestination.subtitle}
            </p>

            {/* 4. Horizontal Chapter Navigation Carousel with all 8 destinations */}
            <ChapterHeroCarousel currentPath={currentPath} />
          </div>
        </header>

        {/* Main Content Area (begins directly with first meaningful section) */}
        <main className="chapter-content-transition-wrap" key={currentPath}>
          {isOverview ? (
            <TraditionOverview />
          ) : (
            CHAPTER_SECTIONS[currentDestination.slug]
          )}
        </main>

        {/* Bottom Previous / Next Chapter Navigation (active on chapters 01-07) */}
        {!isOverview && (
          <ChapterFooterNav currentSlug={currentDestination.slug} />
        )}
      </div>
    </article>
  );
};

export default React.memo(Tradition);
