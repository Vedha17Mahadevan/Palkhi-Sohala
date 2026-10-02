import React, { useEffect, useState } from 'react';

interface Chapter {
  id: string;
  number: string;
  title: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'introduction', number: '01', title: 'What is Wari' },
  { id: 'timeline', number: '02', title: 'Timeline' },
  { id: 'evolution', number: '03', title: 'Evolution' },
  { id: 'shiva', number: '04', title: 'Lord Shiva' },
  { id: 'palkhi', number: '05', title: 'Birth of Palkhi' },
  { id: 'comparison', number: '06', title: 'Two Palkhis' },
  { id: 'abhang', number: '07', title: 'Sacred Abhang' },
  { id: 'values', number: '08', title: 'Core Values' },
  { id: 'today', number: '09', title: 'Wari Today' }
];

export const ChapterNavigation: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('introduction');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show chapter nav only after scrolling past hero (e.g. 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check current section in viewport
      const scrollPosition = window.scrollY + 200;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapter(CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <aside className="sticky-chapter-nav" aria-label="Exhibition Chapter Navigation">
      <div className="chapter-nav-inner">
        <div className="chapter-nav-header">
          <span className="chapter-nav-icon">❖</span>
          <span className="chapter-nav-label">Chapters</span>
        </div>
        <nav className="chapter-nav-list">
          {CHAPTERS.map(chap => {
            const isActive = activeChapter === chap.id;
            return (
              <a
                key={chap.id}
                href={`#${chap.id}`}
                className={`chapter-nav-item ${isActive ? 'active' : ''}`}
                onClick={e => scrollToChapter(e, chap.id)}
                title={chap.title}
              >
                <span className="chapter-num">{chap.number}</span>
                <span className="chapter-name">{chap.title}</span>
                <span className="chapter-indicator-dot"></span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default ChapterNavigation;
