# Technical Audit Report: Palkhi Sohala

This document contains a comprehensive technical audit of the **Palkhi Sohala** project. The goal of this audit is to evaluate the current codebase, detect performance, accessibility, SEO, and structural issues, and provide a clear roadmap for transforming this website into a modular, high-performance knowledge portal for the Wari pilgrimage.

---

## 1. Project Structure & Architecture

### Folder Structure
The workspace is organized as a hybrid React + Vite project. There are several files in the root that represent the current active project, alongside relics from a previous vanilla JS implementation:
*   `dist/`: Production build output directory.
*   `images/`: Contains local static image assets, split into subfolders:
    *   `palkhis/`: Images of the palkhi processions (mix of `.jpg`, `.webp`, `.avif`).
    *   `saints/`: Portraits of the saints associated with the Palkhis (mix of `.jpg`, `.webp`, `.avif`).
    *   `yt/`: Custom thumbnail covers for the YouTube playlists.
*   `src/`: Main React source files:
    *   `App.tsx`: The core monolithic React file containing almost all component logic, pages, routing, states, and render functions.
    *   `main.tsx`: Entry point mounting the React root.
    *   `index.css`: Global styling and design system (~5,600 lines of CSS).
    *   `data/`: Contains `palkhis.json` (duplicated from the root).
*   `palkhis.json` / `playlists.json`: Root data store files.
*   `vite.config.ts`: Configures Vite, React plugin, and contains custom Node `fs` middleware to serve and copy image files during development and builds.
*   **Relics (Inactive)**: `script.js` and `styles.css` reside in the root. These are remnants of a vanilla JavaScript prototype and are not referenced in the active React project.

### Framework & Libraries
*   **Core**: React `^18.3.1` and Vite `^5.3.1`.
*   **TypeScript**: TypeScript `^5.2.2`.
*   **Icons**: FontAwesome (`all.min.css` loaded via CDN in `index.html`).
*   **Fonts**: 8 Google Fonts loaded via a single preconnect/link tag in `index.html` (Cinzel, Cinzel Decorative, Cormorant Garamond, Crimson Text, Marcellus, Montserrat, Ruda, Yatra One).

### Routing
*   **Mechanism**: Custom state-based routing inside `App.tsx` (using `currentPath` and `useState`).
*   **Supported Routes**:
    *   `/` (Home): Renders the Hero, Ashadhi Ekadashi detail section, featured Palkhi list (10 cards), YouTube Video Archives, and Footer.
    *   `/palkhis` (Directory): Renders a dedicated route featuring all 35 Palkhis with full search, sorting, and filter controls.
*   **History Synchronization**: Navigations trigger `window.history.pushState` and listen to `popstate` events to support browser "Back" and "Forward" buttons, but it lacks dynamic deep-linking for specific modals or sections.

### Data Storage
*   **Local JSON**: Data is stored in static JSON files (`palkhis.json` and `playlists.json`) and imported directly:
    ```typescript
    import rawPalkhiData from '../palkhis.json';
    import rawPlaylistData from '../playlists.json';
    ```
*   **Implication**: All data is bundled directly into the client-side JavaScript chunk. Any updates to Palkhis or videos require rebuilding and redeploying the site.

### Component Organization
*   **Monolithic Anti-Pattern**: There is no component folder structure. The entire frontend—except for some helper variables and the `SaintAvatarPlaceholder` function—is declared and managed inside `src/App.tsx`. 
*   **State Bloat**: Toggling simple values like search terms or opening a details modal triggers a re-render of the entire webpage because all page states are bound to the single parent `App` component.

---

## 2. Current Features Audit

The following table summarizes the features currently implemented in the project:

| Feature Name | Description | Responsible Files | Status | Notes / Limitations |
| :--- | :--- | :--- | :--- | :--- |
| **Interactive Splash Screen** | Renders a custom Tilak loader, progress bar, and marquee of warkari silhouettes. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** (UX Warning) | Artificially delays page access by **7.0 seconds** on *every* single page load/reload. No skip button or cookies check. |
| **Sticky Navigation & Header** | Displays header branding, links, and triggers background shadows on scroll. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** | Standard sticky navigation. Can overlap text on mid-width laptop screens. |
| **Mobile Drawer Menu** | A slide-out navigation overlay for mobile screens. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** | Functional, triggered by a hamburger button. |
| **Anchor Scrolling & Scroll Spy** | Animates scrolling to page anchors and highlights links relative to viewport position. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** | Scroll listener is unthrottled, leading to excessive calculations. |
| **Featured Palkhis Grid** | Displays a subset (10 cards) of major Palkhis on the home screen. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx) | **Complete** | Direct slice of local data. |
| **Search, Filter & Sort Directory** | Allows users on `/palkhis` to filter by category, district, duration, and sort by distance, duration, or A-Z. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx) | **Complete** | Fully functional client-side directory. Empty states include a "Reset Filters" action. |
| **Detailed Palkhi Modal** | Displays full details of a clicked Palkhi (Departure date, full route, category, history note). | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** | Locks scroll on body. Can be closed via the "ESC" key or clicking outside. |
| **YouTube Playlist Archives** | Displays YouTube playlists from RadhaKrishna Satsangam. | [App.tsx](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/App.tsx), [index.css](file:///c:/Users/Vedha%20Mahadevan/Downloads/PalkhiSohala/src/index.css) | **Complete** | Cards link out to YouTube. Does not support embedded video playback. |

---

## 3. UI / UX Analysis

### Hero Section
*   **Strengths**: Immersive, rich devotional artwork (`vk1.png`). Floating incense particle animations add atmosphere. Beautiful Yatra/Marathi typography styling.
*   **Weaknesses**: The deity background image is huge (2.46 MB) and lacks high-resolution responsive versions. Text readability can degrade on mid-size viewports if contrast with background layers is insufficient.
*   **Missing Opportunities**: A subtle audio button playing a traditional chant (e.g. *Ram Krishna Hari*) upon interaction would enhance the devotional experience.

### Navigation Header
*   **Strengths**: Clean brand identity combining the RadhaKrishna Satsangam seal and title.
*   **Weaknesses**: The space layout between the brand text and the menu links is tight; it shrinks on smaller laptops, risking overlapping text.

### About & Tradition Sections (Wari / Palkhi)
*   **Strengths**: Stunning parchment paper style backgrounds (`heritage-parchment-bg`). Illustrations (`kids left.png` and `temple right.png`) give a strong cultural context.
*   **Weaknesses**: The layout depends on two enormous background-decor images (~2.56 MB and ~3.04 MB). There is **no actual timeline visualization** for the pilgrimage, only prose.
*   **Missing Opportunities**: A vertical interactive timeline outlining the journey phases (departure, halts, Ringan, and arrival) would be much more engaging than plain text.

### Palkhi Cards & Directory
*   **Strengths**: Elegant card styling with gold borders and hover transitions. Saint initials fallback avatar (`SaintAvatarPlaceholder`) elegantly solves the problem of missing photos.
*   **Weaknesses**: The filter bar is static; on larger screens, it leaves empty space, and on mobile, it stacks into four full-width select boxes that consume half the screen.
*   **Missing Opportunities**: The routes are displayed as static lists (e.g., *Alandi–Pune–Saswad...*). There is **no map visualizer**, which is highly requested for a pilgrimage guide.

### YouTube Archives (Gallery)
*   **Strengths**: Elegant split-screen structure. Promotes the channel with a beautiful phone mockup display.
*   **Weaknesses**: Links lead away from the site.
*   **Missing Opportunities**: Integrating a modal player (such as standard YouTube embed frames) to let users watch the discourses without leaving the portal.

---

## 4. Responsiveness Audit

### Mobile viewports (<768px)
*   **Navigation**: Slide-out drawer works nicely, but the main logo and text in the sticky header can feel cramped and get cut off on smaller phones (<360px).
*   **Splash Screen**: The Tilak and logo scale, but the horizontal loading bar and marquee footer can clip or align awkwardly on taller aspect ratios.
*   **Palkhi Directory Filters**: Stacking four select boxes vertically forces the actual results way below the fold.
*   **Palkhi Modal**: Stacks to a single column, which is good. However, the modal overlay padding is small, and on short screens (e.g., mobile landscape), the modal contents scroll is difficult to navigate, and the close button is sometimes hidden off-screen.

### Tablet viewports (768px - 1024px)
*   **About Sections**: The illustrations shrink (`width: 32%`), which improves text space, but the parchment container margins look uneven.
*   **Palkhi Grid**: Adapts to 3 columns (992px) and 2 columns (768px). Cards adapt well, though title heights sometimes stretch card heights unevenly if Marathi and English names are long.

### Laptop viewports (1024px - 1366px)
*   **Header Collisions**: Between `1024px` and `1200px`, the desktop navigation links approach the left brand logo. On standard 13-inch laptops, they can overlap or wrap awkwardly.
*   **Video Archives**: The split layout (72% left column, 28% right column promo) gets compressed, making the YouTube video grid look very narrow before it collapses into a stacked column at `1200px`.

---

## 5. Performance Audit

A key bottleneck of the current application is performance. The site has several critical performance flaws:

### 1. Massive Static Image Payload
The landing page triggers an initial payload of **over 18 MB** of unoptimized, uncompressed asset images:
*   `temple right.png`: **3.04 MB** (layout background)
*   `temple right1.png`: **2.70 MB** (unused copy)
*   `kids left.png`: **2.56 MB** (layout background)
*   `vk1.png`: **2.46 MB** (hero background graphic)
*   `splash bg.png`: **1.87 MB** (splash background graphic)
*   `Vitthal tilak.png`: **1.55 MB** (splash loader graphic)
*   `mob mockup.jpg`: **1.26 MB** (promo phone showcase)
*   `palkhi.jpg` (Hero directory): **629 KB**
*   YouTube covers (e.g., `Santh Namdev Maharaj.png`): **1.04 MB**

Loading multiple megabytes of PNG images on a mobile device on cellular networks will cause severe delay, leading to high bounce rates.

### 2. Artificial Splash Screen Delay
The splash screen runs on React timers:
```typescript
const fadeOutTimer = setTimeout(() => {
  setIsSplashFadingOut(true);
}, 6200);

const activeTimer = setTimeout(() => {
  setIsSplashActive(false);
  setIsLandingActive(true);
}, 7000);
```
An artificial **7.0-second delay** blocks users from accessing content, even if the site has loaded in 200ms. This is an anti-pattern for modern web applications.

### 3. Rendering Performance & Re-renders
Because the state of the entire project is kept inside a single root component (`App.tsx`), typing in the search box, opening a modal, or scrolling (which fires a scroll listener) causes React to re-calculate the virtual DOM for the *entire* website, including all 35 cards, grid items, and text sections.

### 4. Font & External Script Blocking
The header loads FontAwesome and 8 Google Fonts synchronously, blocking the initial paint of the HTML page.

---

## 6. CDN & Asset Delivery Audit

| Factor | Current State | Audit Finding | Recommended Improvement |
| :--- | :--- | :--- | :--- |
| **CDN Usage** | None | Assets are served directly from the local dev server/build bundle. | Offload static graphics to a global CDN (e.g., Cloudflare, Vercel Asset CDN). |
| **Image Compression** | None | Images in `/images` are raw, full-size source files. | Run all assets through a compression tool (e.g. `sharp`, TinyPNG) to reduce sizes by up to 90%. |
| **Modern Formats** | Mixed | Palkhi images have some `.webp`/`.avif`, but heavy layout images are raw `.png` and `.jpg`. | Convert all primary illustrations and layout backgrounds to `.webp` or `.avif`. |
| **Caching Strategy** | Default | No customized HTTP caching headers or Service Workers. | Implement a caching layer for static assets using Cache-Control headers or a Workbox Service Worker. |
| **Preloading** | None | Critical images (e.g., hero deity, splash Tilak) are not preloaded. | Add `<link rel="preload" as="image">` for above-the-fold graphics in `index.html`. |

---

## 7. Accessibility Audit (a11y)

*   **Semantic HTML**: High-level semantic tags like `<header>`, `<section>`, `<article>`, and `<footer>` are used. However, structural details (like lists of routes, filter bars, and custom layouts) rely on raw `div` tags.
*   **Keyboard Navigation**:
    *   **Palkhi Cards**: The cards are `<article>` elements with `onClick` attributes. They are **not keyboard-focusable** (missing `tabIndex={0}`) and lack `onKeyDown` hooks. Users using keyboards or screen readers cannot open a Palkhi details modal.
    *   **Modal Trap**: When the details modal opens, keyboard focus is not redirected into the modal, nor is it trapped. Tabbing continues to focus elements on the background page, which is a critical WCAG failure.
*   **Contrast Issues**:
    *   Secondary saffron color (`#FF7E15`) on white/cream backgrounds fails the WCAG AA minimum contrast ratio (4.5:1) for normal text size.
    *   Maroon text on textured parchment backgrounds can be hard to read for visually impaired users.
*   **Image Alt Text**: Images have alt attributes, but some are descriptive of layout files rather than content (e.g. `alt="temple right"`), which is not helpful for screen reader users.

---

## 8. SEO Audit

*   **Page Titles & Metadata**: The title and meta description in `index.html` are static:
    *   `Title`: *Ashadhi Ekadashi - Warkari Sampradaya | RadhaKrishna Satsangam*
    *   `Description`: *Experience the divine journey of the Warkari Sampradaya...*
*   **Single-Page Router Defect**: Because routing between `/` and `/palkhis` is client-side state swapping without updating document metadata, navigating to `/palkhis` keeps the home page's meta description and page title. Search engines will index `/palkhis` with the home page's information.
*   **Open Graph / Social Share**: There are no Facebook `og:image`, `og:title`, or Twitter Card tags present in `index.html`.
*   **Robots.txt & Sitemap**: Missing.
*   **Structured Data**: There is no JSON-LD structured schema (e.g., `Event` or `ItemCollection` schemas) to help search engines present rich search snippets for Ashadhi Ekadashi or the Palkhi routes.

---

## 9. Code Quality & Technical Debt

1.  **Monolithic Core (`src/App.tsx`)**:
    *   Writing a 1,200+ line React component makes testing, debugging, and maintaining the app extremely difficult.
2.  **Code Duplication**:
    *   The Palkhi card grid items are declared separately in the featured homepage list and the `/palkhis` directory page. Any change to the card design has to be copied to two separate locations.
3.  **Dead Code / Relics**:
    *   `script.js` and `styles.css` are still in the root folder, adding noise to the repository structure.
4.  **Vite Asset Middleware**:
    *   `vite.config.ts` includes a custom `serve-and-copy-images` server middleware which intercepts routes starting with `/images/` and pipes streams. This custom handler is complex and prone to node pathing issues on different operating systems, which is unnecessary if standard public folder references are used.

---

## 10. Future Expansion: Knowledge Portal Roadmap

The client's goal is to transition the website into a **complete knowledge portal for the Wari pilgrimage** (incorporating maps, halting schedules, Ringan locations, Saint profiles, Abhanga database, and articles). 

To achieve this, the architecture needs to be redesigned:

### What can be reused
*   **CSS Style Variables**: The design system (colors, typography styles, border styling, parchment layouts) is beautiful and should be preserved in a unified variable stylesheet.
*   **JSON Schemas**: The structure of `palkhis.json` (Saint, Origin, Destination, Indicative Route) can serve as the baseline database schema.

### What should be redesigned
*   **Unified App Architecture**: The single component should be refactored into a structured component directory:
    ```
    src/
      components/
        Header.tsx
        Footer.tsx
        Splash.tsx
        PalkhiCard.tsx
        PalkhiModal.tsx
        VideoCard.tsx
      pages/
        Home.tsx
        Directory.tsx
        Saints.tsx       [New Page]
        Abhangas.tsx     [New Page]
        InteractiveMap.tsx [New Page]
    ```
*   **Routing Framework**: Install `react-router-dom` to support true, crawlable page routes (e.g., `/palkhis/dnyaneshwar` for direct links, `/saints`, `/abhangas`).

### What should be modularized
*   **Search & Filter logic**: Abstract this logic into custom hooks (e.g., `usePalkhiFilters`) to keep UI components simple.
*   **Modal systems**: Use a portal-based modal wrapper to render modals at the root of the DOM, ensuring proper focus trap and accessibility.

### Ideal Content & Backend System
*   **Database (Supabase)**: Since Supabase is available, we should migrate the static JSON schemas into a relational database. This allows for rich queries:
    *   `Palkhis Table`: Id, slug, name, origin, route, saint_id.
    *   `Saints Table`: Id, name, bio, image, samadhi_place.
    *   `Abhangas Table`: Id, title, lyrics_marathi, lyrics_english, saint_id, audio_url.
    *   `Halts Table`: Id, palkhi_id, day_number, location_name, latitude, longitude, arrival_time.
*   **Dynamic Maps**: Integrate `react-leaflet` or Mapbox to plot the `Halts` on an interactive map. Devotees could trace the real-time or planned route of any Palkhi.
*   **Audio Portal**: Implement a real audio player utilizing a standard HTML5 audio interface to stream abhangas instead of just linking out to YouTube playlists.

---

## 11. Final Actionable Report

Here is a summary of the recommended improvements, classified by priority and technical debt impact, with estimated implementation efforts.

### High-Priority Fixes (Critical Impact)

#### 1. Compress and Optimize Site Images
*   **Issue**: 18 MB initial download payload.
*   **Action**: Convert all high-resolution PNGs (`vk1.png`, `temple right.png`, `kids left.png`, `splash bg.png`, `Vitthal tilak.png`) to `.webp` or `.avif`. Apply lossy compression to reduce sizes below 200 KB per image.
*   **Effort**: 1–2 Hours (using script or batch converter).

#### 2. Shorten/Skip Splash Screen
*   **Issue**: 7-second forced loading time on every page load.
*   **Action**: Reduce timer to 1.5 seconds. Check `sessionStorage` so that the splash screen only plays *once* per browser session.
*   **Effort**: 1 Hour.

#### 3. Componentize Codebase
*   **Issue**: Monolithic `App.tsx` containing all sections.
*   **Action**: Break `App.tsx` down into separate sub-components (e.g., `Header`, `Footer`, `Splash`, `PalkhiCard`, `Modal`, `YoutubeGallery`).
*   **Effort**: 3–4 Hours.

#### 4. Fix Keyboard Accessibility
*   **Issue**: Palkhi cards cannot be focused or triggered via keyboard; missing modal focus trap.
*   **Action**: Add `tabIndex={0}` and `onKeyDown` listeners to Palkhi cards. Add keyboard accessibility patterns to the modal overlay.
*   **Effort**: 2 Hours.

---

### Medium-Priority Improvements (UX & Features)

#### 1. Implement Proper Router
*   **Issue**: Custom state-based routing breaks browser history and search engine crawling.
*   **Action**: Install `react-router-dom` and set up clean client-side routes for the different sections.
*   **Effort**: 3 Hours.

#### 2. Map Integration
*   **Issue**: No visual maps for the 35 routes.
*   **Action**: Integrate an interactive map (e.g. Leaflet) to display routes using coordinate datasets.
*   **Effort**: 6–8 Hours.

#### 3. Embedded Video Player
*   **Issue**: YouTube cards redirect users off the website.
*   **Action**: Render a lightweight embedded YouTube iframe overlay/modal on card click.
*   **Effort**: 2 Hours.

#### 4. SEO & OG Metadata Optimization
*   **Issue**: Missing meta tags and social sharing tags.
*   **Action**: Add React Helmet or static header injects for proper SEO descriptions, sitemap, robots, and Open Graph tags.
*   **Effort**: 2 Hours.

---

### Low-Priority Improvements

#### 1. Abhanga Audio Streaming
*   **Issue**: Only linking to playlists, missing a dedicated devotional audio player.
*   **Action**: Implement an interactive audio component streaming devotional abhangas.
*   **Effort**: 4–5 Hours.

#### 2. Remove Legacy Relics
*   **Issue**: Dead code (`script.js`, `styles.css`) cluttering the codebase.
*   **Action**: Safely delete unused legacy files from the repository.
*   **Effort**: 30 Minutes.

---

### Technical Debt Summary

1.  **Code Maintenance**: High debt due to single-file component assembly.
2.  **Performance/Optimization**: Extreme debt due to multi-megabyte raw background assets.
3.  **a11y/SEO**: Medium debt; requires focus trap management and responsive routing tags.
4.  **Database Scalability**: Medium debt; static JSON assets prevent database relationships or dynamic pagination.

*Estimated Total Effort to Refactor and Build out the complete Knowledge Portal: **25–35 Hours**.*
