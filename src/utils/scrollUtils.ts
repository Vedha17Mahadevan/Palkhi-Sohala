/**
 * Smooth scrolling utility tailored for the Pandharpur Wari website.
 * Provides a comfortable offset below the fixed header (72px + breathing room)
 * and an elegant easeInOutCubic animation (600–800ms) matching modern museum & doc standards.
 */

export const smoothScrollToSection = (targetId: string, duration = 750): boolean => {
  if (targetId === 'home') {
    const startY = window.pageYOffset;
    if (startY === 0) return true;

    let startTime: number | null = null;
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const run = easeInOutCubic(Math.min(elapsed, duration), startY, -startY, duration);
      window.scrollTo(0, run);
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(animateScroll);
    return true;
  }

  const target = document.getElementById(targetId);
  if (!target) return false;

  const header = document.querySelector('.main-header') as HTMLElement;
  const headerHeight = header ? header.offsetHeight : 72;
  // Comfortable breathing room below the fixed navbar
  const comfortableOffset = 24;

  const targetRect = target.getBoundingClientRect();
  const startPosition = window.pageYOffset;
  const targetPosition = Math.max(0, targetRect.top + startPosition - (headerHeight + comfortableOffset));
  const distance = targetPosition - startPosition;

  if (Math.abs(distance) < 2) return true;

  let startTime: number | null = null;

  const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(Math.min(timeElapsed, duration), startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animation);
  return true;
};
