import React, { useEffect, useMemo, lazy, Suspense } from 'react';
import { useRouter } from '../context/NavigationContext';
import ChapterHeroCarousel from '../components/tradition/ChapterHeroCarousel';
import ChapterFooterNav from '../components/tradition/ChapterFooterNav';
import { CHAPTERS_DATA } from '../components/tradition/chaptersData';
import '../styles/tradition.css';

const TraditionOverview = lazy(() => import('./tradition/TraditionOverview'));
const OriginsSection = lazy(() => import('../components/tradition/OriginsSection'));
const ShivaWarkariStory = lazy(() => import('../components/tradition/ShivaWarkariStory'));
const BirthOfPalkhiSection = lazy(() => import('../components/tradition/BirthOfPalkhiSection'));
const SubchapterRituals = lazy(() => import('../components/tradition/subchapters/SubchapterRituals'));
const SubchapterDindi = lazy(() => import('../components/tradition/subchapters/SubchapterDindi'));
const SubchapterDevotions = lazy(() => import('../components/tradition/subchapters/SubchapterDevotions'));
const SubchapterArrivalSeva = lazy(() => import('../components/tradition/subchapters/SubchapterArrivalSeva'));

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
          <Suspense fallback={null}>
            {isOverview ? (
              <TraditionOverview />
            ) : (
              CHAPTER_SECTIONS[currentDestination.slug]
            )}
          </Suspense>
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
