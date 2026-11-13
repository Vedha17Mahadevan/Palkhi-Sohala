import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from '../../context/NavigationContext';
import { SUBCHAPTERS_DATA } from './livingTraditionsData';
import { prefetchRoute } from '../../utils/prefetchUtils';

export interface ChapterNavOption {
  number: string;
  title: string;
  slug: string;
  path: string;
}

export interface SectionOption {
  code: string;
  title: string;
  path: string;
}

export interface MasterNavStep {
  label: string;
  displayCode: string;
  path: string;
  chapterNumber: string;
}

export interface TraditionDropdownNavigatorProps {
  currentPath: string;
}

export const ALL_MAIN_CHAPTERS: ChapterNavOption[] = [
  {
    number: '00',
    title: 'Overview',
    slug: 'overview',
    path: '/tradition',
  },
  {
    number: '01',
    title: 'Origins of the Wari',
    slug: 'origins',
    path: '/tradition/origins',
  },
  {
    number: '02',
    title: 'Lord Shiva – The First Warkari',
    slug: 'lord-shiva',
    path: '/tradition/lord-shiva',
  },
  {
    number: '03',
    title: 'The Sacred Palkhi Tradition',
    slug: 'palkhi',
    path: '/tradition/palkhi',
  },
  {
    number: '04',
    title: 'The Living Traditions of Wari',
    slug: 'living-traditions',
    path: '/tradition/living-traditions',
  },
];

export const MASTER_SEQUENCE: MasterNavStep[] = [
  {
    chapterNumber: '00',
    displayCode: '00.0',
    label: 'Tradition Overview',
    path: '/tradition',
  },
  {
    chapterNumber: '01',
    displayCode: '01.0',
    label: 'Origins of the Wari',
    path: '/tradition/origins',
  },
  {
    chapterNumber: '02',
    displayCode: '02.0',
    label: 'Lord Shiva – The First Warkari',
    path: '/tradition/lord-shiva',
  },
  {
    chapterNumber: '03',
    displayCode: '03.0',
    label: 'The Sacred Palkhi Tradition',
    path: '/tradition/palkhi',
  },
  {
    chapterNumber: '04',
    displayCode: '04.0',
    label: 'Living Traditions Overview',
    path: '/tradition/living-traditions',
  },
  {
    chapterNumber: '04',
    displayCode: '04.1',
    label: 'Rituals and Sacred Moments of Wari',
    path: '/tradition/living-traditions/rituals',
  },
  {
    chapterNumber: '04',
    displayCode: '04.2',
    label: 'The Life and Organisation of a Dindi',
    path: '/tradition/living-traditions/dindi-life',
  },
  {
    chapterNumber: '04',
    displayCode: '04.3',
    label: 'Devotional Practices and Sacred Symbols',
    path: '/tradition/living-traditions/devotional-practices',
  },
  {
    chapterNumber: '04',
    displayCode: '04.4',
    label: 'The Arrival at Pandharpur and the Spirit of Seva',
    path: '/tradition/living-traditions/arrival-and-seva',
  },
];

const normalizeRoute = (p: string): string => {
  if (!p) return '/tradition';
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export const getChapterFromPath = (path: string): ChapterNavOption => {
  const clean = normalizeRoute(path);

  // Exact match for Overview
  if (clean === '/tradition') {
    return ALL_MAIN_CHAPTERS[0];
  }

  // Chapter 04 Living Traditions (Overview or any subchapter)
  if (clean.startsWith('/tradition/living-traditions')) {
    return ALL_MAIN_CHAPTERS[4];
  }

  // Chapter 03 Palkhi
  if (clean.startsWith('/tradition/palkhi')) {
    return ALL_MAIN_CHAPTERS[3];
  }

  // Chapter 02 Lord Shiva
  if (clean.startsWith('/tradition/lord-shiva')) {
    return ALL_MAIN_CHAPTERS[2];
  }

  // Chapter 01 Origins
  if (clean.startsWith('/tradition/origins')) {
    return ALL_MAIN_CHAPTERS[1];
  }

  // Fallback to Overview
  return ALL_MAIN_CHAPTERS[0];
};

export const getSectionsForChapter = (chapterSlug: string): SectionOption[] => {
  switch (chapterSlug) {
    case 'living-traditions':
      return [
        {
          code: 'Overview',
          title: 'Chapter 04 Overview',
          path: '/tradition/living-traditions',
        },
        ...SUBCHAPTERS_DATA.map(sub => ({
          code: sub.subNumber,
          title: sub.title,
          path: sub.path,
        })),
      ];

    case 'origins':
      return [
        {
          code: '01.0',
          title: 'Origins of the Wari',
          path: '/tradition/origins',
        },
      ];

    case 'lord-shiva':
      return [
        {
          code: '02.0',
          title: 'Lord Shiva – The First Warkari',
          path: '/tradition/lord-shiva',
        },
      ];

    case 'palkhi':
      return [
        {
          code: '03.0',
          title: 'The Sacred Palkhi Tradition',
          path: '/tradition/palkhi',
        },
      ];

    case 'overview':
    default:
      return [
        {
          code: '00.0',
          title: 'Tradition Overview & Master Index',
          path: '/tradition',
        },
      ];
  }
};

export const getActiveSectionFromPath = (cleanPath: string, sections: SectionOption[]): SectionOption => {
  const exact = sections.find(s => s.path === cleanPath);
  if (exact) return exact;
  return sections[0];
};

export const TraditionDropdownNavigator: React.FC<TraditionDropdownNavigatorProps> = ({
  currentPath,
}) => {
  const { navigateTo } = useRouter();
  const [isChapterOpen, setIsChapterOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const chapterRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns on outside click, touch, or Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (chapterRef.current && !chapterRef.current.contains(target)) {
        setIsChapterOpen(false);
      }
      if (sectionRef.current && !sectionRef.current.contains(target)) {
        setIsSectionOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsChapterOpen(false);
        setIsSectionOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Synchronously compute active state strictly from the URL path
  const cleanPath = useMemo(() => normalizeRoute(currentPath), [currentPath]);
  const activeChapter = useMemo(() => getChapterFromPath(cleanPath), [cleanPath]);
  const availableSections = useMemo(() => getSectionsForChapter(activeChapter.slug), [activeChapter.slug]);
  const activeSection = useMemo(() => getActiveSectionFromPath(cleanPath, availableSections), [cleanPath, availableSections]);

  // Master sequence Previous & Next resolution
  const currentIndex = useMemo(() => {
    const idx = MASTER_SEQUENCE.findIndex(step => step.path === cleanPath);
    return idx !== -1 ? idx : 0;
  }, [cleanPath]);

  const prevStep: MasterNavStep | null = currentIndex > 0 ? MASTER_SEQUENCE[currentIndex - 1] : null;
  const nextStep: MasterNavStep | null = currentIndex < MASTER_SEQUENCE.length - 1 ? MASTER_SEQUENCE[currentIndex + 1] : null;

  const handleNav = (targetPath: string) => {
    setIsChapterOpen(false);
    setIsSectionOpen(false);
    navigateTo(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="tradition-dropdown-navigator" aria-label="Wari Tradition Chapter Navigator">
      <div className="tradition-container">
        <div className="dropdown-nav-card">
          
          {/* Top Row: Two Primary Selectors (40% / 60% on desktop, stacked on mobile) */}
          <div className="dropdown-selectors-row">
            
            {/* Selector A: Main Chapter */}
            <div className="dropdown-selector-col chapter-col" ref={chapterRef}>
              <span id="label-chapter-select" className="selector-field-label">
                <span className="label-ornament" aria-hidden="true">❖</span> SELECT CHAPTER
              </span>
              <div className="dropdown-field-wrapper">
                <button
                  type="button"
                  className={`dropdown-trigger-btn ${isChapterOpen ? 'open' : ''}`}
                  onClick={() => {
                    setIsChapterOpen(prev => !prev);
                    setIsSectionOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isChapterOpen}
                  aria-labelledby="label-chapter-select"
                  title={`Selected Chapter: ${activeChapter.number} – ${activeChapter.title}`}
                >
                  <div className="trigger-text-group">
                    <span className="trigger-badge chapter-badge">{activeChapter.number}</span>
                    <span className="trigger-title">{activeChapter.title}</span>
                  </div>
                  <i 
                    className={`fa-solid fa-chevron-down trigger-chevron ${isChapterOpen ? 'rotated' : ''}`} 
                    aria-hidden="true" 
                  />
                </button>

                {isChapterOpen && (
                  <ul className="dropdown-menu-list" role="listbox" aria-labelledby="label-chapter-select">
                    {ALL_MAIN_CHAPTERS.map(chap => {
                      const isSelected = activeChapter.slug === chap.slug;
                      return (
                        <li
                          key={chap.slug}
                          role="option"
                          aria-selected={isSelected}
                          className={`dropdown-menu-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleNav(chap.path)}
                          onMouseEnter={() => prefetchRoute(chap.path)}
                        >
                          <span className="option-badge chapter-badge">{chap.number}</span>
                          <span className="option-title">{chap.title}</span>
                          {isSelected && <i className="fa-solid fa-check option-check" aria-hidden="true" />}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            {/* Selector B: Subchapter / Section */}
            <div className="dropdown-selector-col section-col" ref={sectionRef}>
              <span id="label-section-select" className="selector-field-label">
                <span className="label-ornament" aria-hidden="true">❖</span> SELECT SECTION
              </span>
              <div className="dropdown-field-wrapper">
                <button
                  type="button"
                  className={`dropdown-trigger-btn ${isSectionOpen ? 'open' : ''}`}
                  onClick={() => {
                    setIsSectionOpen(prev => !prev);
                    setIsChapterOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isSectionOpen}
                  aria-labelledby="label-section-select"
                  title={`Selected Section: ${activeSection.code} – ${activeSection.title}`}
                >
                  <div className="trigger-text-group">
                    <span className="trigger-badge section-badge">{activeSection.code}</span>
                    <span className="trigger-title">{activeSection.title}</span>
                  </div>
                  <i 
                    className={`fa-solid fa-chevron-down trigger-chevron ${isSectionOpen ? 'rotated' : ''}`} 
                    aria-hidden="true" 
                  />
                </button>

                {isSectionOpen && (
                  <ul className="dropdown-menu-list" role="listbox" aria-labelledby="label-section-select">
                    {availableSections.map(sec => {
                      const isSelected = activeSection.code === sec.code;
                      return (
                        <li
                          key={sec.code + sec.title}
                          role="option"
                          aria-selected={isSelected}
                          className={`dropdown-menu-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleNav(sec.path)}
                          onMouseEnter={() => prefetchRoute(sec.path)}
                        >
                          <span className="option-badge section-badge">{sec.code}</span>
                          <span className="option-title">{sec.title}</span>
                          {isSelected && <i className="fa-solid fa-check option-check" aria-hidden="true" />}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

          </div>

          {/* Stepper Row: Previous & Next Section Controls (Dedicated 2-column grid, no inline divider collisions) */}
          <div className="dropdown-stepper-row">
            {prevStep ? (
              <button
                type="button"
                className="stepper-action-btn prev"
                onClick={() => handleNav(prevStep.path)}
                title={`Go to Previous: ${prevStep.displayCode} – ${prevStep.label}`}
              >
                <i className="fa-solid fa-arrow-left-long stepper-icon" aria-hidden="true" />
                <div className="stepper-label-group text-left">
                  <span className="stepper-sublabel">Previous Section</span>
                  <span className="stepper-target-name">
                    {prevStep.displayCode} • {prevStep.label}
                  </span>
                </div>
              </button>
            ) : (
              <div className="stepper-action-btn prev disabled" aria-disabled="true">
                <i className="fa-solid fa-arrow-left-long stepper-icon" aria-hidden="true" />
                <div className="stepper-label-group text-left">
                  <span className="stepper-sublabel">Wari Beginning</span>
                  <span className="stepper-target-name">Tradition Overview</span>
                </div>
              </div>
            )}

            {nextStep ? (
              <button
                type="button"
                className="stepper-action-btn next"
                onClick={() => handleNav(nextStep.path)}
                title={`Go to Next: ${nextStep.displayCode} – ${nextStep.label}`}
              >
                <div className="stepper-label-group text-right">
                  <span className="stepper-sublabel">Next Section</span>
                  <span className="stepper-target-name">
                    {nextStep.displayCode} • {nextStep.label}
                  </span>
                </div>
                <i className="fa-solid fa-arrow-right-long stepper-icon" aria-hidden="true" />
              </button>
            ) : (
              <div className="stepper-action-btn next disabled" aria-disabled="true">
                <div className="stepper-label-group text-right">
                  <span className="stepper-sublabel">Pilgrimage Culmination</span>
                  <span className="stepper-target-name">Pandharpur Reached</span>
                </div>
                <i className="fa-solid fa-circle-check stepper-icon" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(TraditionDropdownNavigator);
