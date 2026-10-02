import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavigationContextType {
  currentPath: string;
  navigateTo: (path: string, scrollToId?: string) => void;
  pendingScrollId: string | null;
  clearPendingScroll: () => void;
  isSplashActive: boolean;
  isSplashFadingOut: boolean;
  isLandingActive: boolean;
  dismissSplash: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const normalizePath = (p: string) => {
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialPath = normalizePath(window.location.pathname);
  const isDirectPage = initialPath === '/palkhis' || initialPath.startsWith('/tradition');
  const initialHash = window.location.hash ? window.location.hash.replace('#', '') : null;
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(initialHash);
  const [isSplashActive, setIsSplashActive] = useState(!isDirectPage);
  const [isSplashFadingOut, setIsSplashFadingOut] = useState(false);
  const [isLandingActive, setIsLandingActive] = useState(isDirectPage);

  const dismissSplash = () => {
    setIsSplashFadingOut(true);
    setIsLandingActive(true);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setIsSplashActive(false);
    }, 400);
  };

  const clearPendingScroll = () => {
    setPendingScrollId(null);
  };

  // popstate routing listener
  useEffect(() => {
    const onPopState = () => {
      const path = normalizePath(window.location.pathname);
      setCurrentPath(path);
      setIsLandingActive(true);
      document.body.style.overflow = 'auto';
      if (path === '/palkhis' || path.startsWith('/tradition')) {
        setIsSplashActive(false);
      }
      if (window.location.hash) {
        setPendingScrollId(window.location.hash.replace('#', ''));
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path: string, scrollToId?: string) => {
    const normalized = normalizePath(path);
    const fullUrl = scrollToId ? `${normalized}#${scrollToId}` : normalized;
    window.history.pushState({}, '', fullUrl);
    setCurrentPath(normalized);
    if (scrollToId) {
      setPendingScrollId(scrollToId);
    } else {
      setPendingScrollId(null);
      window.scrollTo(0, 0);
    }
    setIsSplashActive(false);
    setIsLandingActive(true);
    document.body.style.overflow = 'auto';
  };

  // Splash Screen Logic
  useEffect(() => {
    if (isDirectPage) {
      setIsSplashActive(false);
      setIsLandingActive(true);
      document.body.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';

    const fadeOutTimer = setTimeout(() => {
      setIsSplashFadingOut(true);
      setIsLandingActive(true);
    }, 6200);

    const activeTimer = setTimeout(() => {
      setIsSplashActive(false);
      setIsLandingActive(true);
      document.body.style.overflow = 'auto';
    }, 7000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(activeTimer);
      document.body.style.overflow = 'auto';
    };
  }, [isDirectPage]);

  return (
    <NavigationContext.Provider value={{
      currentPath,
      navigateTo,
      pendingScrollId,
      clearPendingScroll,
      isSplashActive,
      isSplashFadingOut,
      isLandingActive,
      dismissSplash
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useRouter must be used within a NavigationProvider');
  }
  return context;
};
