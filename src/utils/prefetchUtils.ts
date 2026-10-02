import { getCloudinaryUrl } from '../config/cloudinary';

/**
 * Intelligent Image & Route Preloader Cache
 * Speeds up page and chapter transitions to < 300ms by warming the browser's
 * HTTP cache, link-prefetching critical assets, and avoiding redundant network requests.
 */

const preloadedAssets = new Set<string>();

/**
 * Preloads an image into the browser cache.
 * Uses <link rel="preload"> where supported, and fallback HTML Image object.
 */
export const preloadImage = (url: string, priority: 'high' | 'low' = 'low'): void => {
  if (!url || preloadedAssets.has(url)) return;
  preloadedAssets.add(url);

  // Link preload tag in document head
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
  } catch {
    // Graceful fallback if DOM is not ready
  }

  // Also instantiate Image to guarantee decoding in browser memory
  const img = new Image();
  if (priority === 'high') {
    img.fetchPriority = 'high';
  }
  img.decoding = 'async';
  img.src = url;
};

/**
 * Critical hero images and first-screen assets per route
 */
export const ROUTE_HERO_ASSETS: Record<string, string[]> = {
  '/': [
    getCloudinaryUrl('kids left', { width: 900 }),
    getCloudinaryUrl('modern_wari', { width: 1200 }),
    getCloudinaryUrl('palkhi', { width: 1200 }),
  ],
  '/palkhis': [
    getCloudinaryUrl('palkhi', { width: 1400 }),
  ],
  '/tradition': [
    'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/tradition.png',
  ],
  '/tradition/origins': [
    'https://res.cloudinary.com/ayj5m59a/image/upload/v1790933967/longing.png',
    'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png',
  ],
  '/tradition/lord-shiva': [
    'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/Shiva_s_Golden-Hour_Pilgrimage.png',
  ],
  '/tradition/palkhi': [
    'https://res.cloudinary.com/ayj5m59a/image/upload/v1790936481/From_Two_Palkhis_to_Pandharpur.png',
  ]
};

/**
 * Prefetches all critical assets for a specific route (called on hover or navigation)
 */
export const prefetchRoute = (path: string): void => {
  const normalized = path.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  const assets = ROUTE_HERO_ASSETS[normalized];
  if (assets && assets.length > 0) {
    assets.forEach(url => preloadImage(url, 'high'));
  }
};

/**
 * Background idle-time prefetcher that warms all routes after initial load
 */
let hasPrefetchedAll = false;
export const prefetchAllRoutes = (): void => {
  if (hasPrefetchedAll) return;
  hasPrefetchedAll = true;

  const runPrefetch = () => {
    Object.values(ROUTE_HERO_ASSETS).forEach(assetList => {
      assetList.forEach(url => preloadImage(url, 'low'));
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(runPrefetch, { timeout: 2000 });
  } else {
    setTimeout(runPrefetch, 800);
  }
};
