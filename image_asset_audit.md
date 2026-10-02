# Image Asset Audit: Palkhi Sohala

This document contains a comprehensive audit of all 61 image assets in the **Palkhi Sohala** project. The goals of this audit are to identify file size bloat, classify assets by usage and fold position, locate unused redundancy, and provide clear optimization pathways to transition the website to modern, optimized WebP/AVIF image delivery.

---

## Executive Summary

The project currently holds **28.91 MB** of image assets, distributed across the root `images/` directory, Palkhi route photos, Saint portraits, and YouTube playlist covers. 

### Key Findings
1. **Unused Redundant Files**: There are 5 duplicate or unused high-resolution images in the root directory totaling **10.43 MB** (36% of total assets) that are never loaded in the active code.
2. **Above-the-Fold Bloat**: The splash screen and hero section require loading **6.52 MB** of image data immediately on page load, causing a major performance bottleneck (even with the 7-second artificial delay).
3. **Improper Image Formats**: Large background illustrations and YouTube gallery cards are saved as uncompressed PNGs rather than optimized JPEGs/WebP/AVIF, resulting in unnecessary size bloat.
4. **Giant Resolutions**: Background assets and mockups are saved at massive dimensions (e.g. `mob mockup.jpg` is registered at an enormous file resolution) compared to their actual display dimensions.

### Optimization Target
By deleting unused assets and converting active assets to WebP/AVIF with modern responsive resizing, the total image weight can be reduced from **28.91 MB** to **~1.15 MB**—an overall **96% file size reduction** that will significantly speed up page interactive times.

---

## Image Asset Inventory

The assets have been grouped into the 7 requested categories.

### 1. Hero Images

| File Name | Format | Dimensions | File Size | Where Used | Fold Position | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| `images/vk1.png` | PNG | 1672 × 941 | 2.47 MB | `Hero.tsx`, `index.css` (Desktop Hero background) | Above | **Yes** | **Critical**: Convert to WebP/AVIF with alpha, compress to ~200 KB. |
| `images/palkhi.jpg` | JPG | 1600 × 900 | 629 KB | `Directory.tsx` (Directory page Hero background) | Above | No | Convert to WebP/AVIF, compress to ~80 KB. |
| `images/vk.png` | PNG | 1536 × 1024 | 2.22 MB | *Unused alternative copy* | - | - | **Action**: Delete from repository. |
| `images/vk2.png` | PNG | 1672 × 941 | 2.56 MB | *Unused alternative copy* | - | - | **Action**: Delete from repository. |

---

### 2. Background Illustrations

| File Name | Format | Dimensions | File Size | Where Used | Fold Position | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| `images/kids left.png` | PNG | 1054 × 1492 | 2.57 MB | `WarkariTradition.tsx` (Left side graphic) | Below | **Yes** | Convert to WebP/AVIF with alpha, compress to ~150 KB. |
| `images/temple right.png` | PNG | 1023 × 1537 | 3.05 MB | `PalkhiTradition.tsx` (Right side graphic) | Below | **Yes** | Convert to WebP/AVIF with alpha, compress to ~150 KB. |
| `images/splash bg.png` | PNG | 1448 × 1086 | 1.87 MB | `index.css` (Splash screen background) | Above | No | Convert to WebP/AVIF, compress to ~120 KB. |
| `images/bg.png` | PNG | 1440 × 1024 | 488 KB | *Unused copy* | - | - | **Action**: Delete from repository. |
| `images/kids left1.png` | PNG | 1495 × 1052 | 2.47 MB | *Unused copy* | - | - | **Action**: Delete from repository. |
| `images/temple right1.png` | PNG | 1474 × 1067 | 2.70 MB | *Unused copy* | - | - | **Action**: Delete from repository. |

---

### 3. Saint Images
Saint images are loaded dynamically in `PalkhiCard.tsx` (rendered as a 48px/64px circular avatar) and `PalkhiModal.tsx` (rendered as a 120px–200px portrait). 

> [!TIP]
> None of the Saint portraits need to exceed **400px width**. Re-scaling these images during conversion will yield massive size savings.

| File Name | Format | Dimensions | File Size | Fold Position | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| `saints/bahinabai-shiur.jpg` | JPG | 1647 × 2484 | 350.1 KB | Below | No | Resize to 300 × 452, convert to WebP/AVIF (~20 KB) |
| `saints/dnyaneshwar.jpg` | JPG | 865 × 1200 | 143.9 KB | Below | No | Resize to 300 × 416, convert to WebP/AVIF (~18 KB) |
| `saints/dnyaneshwar-apegaon-tradition.jpg` | JPG | 1200 × 800 | 130.5 KB | Below | No | Resize to 400 × 267, convert to WebP/AVIF (~15 KB) |
| `saints/savata-mali.jpeg` | JPEG | 390 × 540 | 111.4 KB | Below | No | Convert to WebP/AVIF, compress (~15 KB) |
| `saints/visoba-khechar.jpg` | JPG | 600 × 805 | 102.0 KB | Below | No | Resize to 300 × 402, convert to WebP/AVIF (~15 KB) |
| `saints/nivruttinath.jpg` | JPG | 541 × 573 | 88.1 KB | Below | No | Resize to 300 × 318, convert to WebP/AVIF (~12 KB) |
| `saints/tukaram.jpeg` | JPEG | 500 × 698 | 73.7 KB | Below | No | Resize to 300 × 419, convert to WebP/AVIF (~12 KB) |
| `saints/muktabai-k.jpg` | JPG | 357 × 550 | 54.1 KB | Below | No | Convert to WebP/AVIF, compress (~12 KB) |
| `saints/janabai.jpg` | JPG | 351 × 550 | 48.5 KB | Below | No | Convert to WebP/AVIF, compress (~12 KB) |
| `saints/sheikh-muhammad.avif` | AVIF | 1200 × 675 | 47.0 KB | Below | No | Resize to 400 × 225, compress AVIF (~10 KB) |
| `saints/damaji-pant.webp` | WEBP | 474 × 709 | 43.5 KB | Below | No | Compress WebP (~10 KB) |
| `saints/narhari-sonar.webp` | WEBP | 474 × 821 | 40.6 KB | Below | No | Compress WebP (~12 KB) |
| `saints/changdev.webp` | WEBP | 474 × 521 | 39.2 KB | Below | No | Compress WebP (~8 KB) |
| `saints/namdev-pandharpur-tradition.webp` | WEBP | 474 × 597 | 33.7 KB | Below | No | Compress WebP (~8 KB) |
| `saints/sena.webp` | WEBP | 474 × 739 | 31.8 KB | Below | No | Compress WebP (~8 KB) |
| `saints/niloba.webp` | WEBP | 474 × 728 | 31.1 KB | Below | No | Compress WebP (~8 KB) |
| `saints/bahinabai-degav-rangari.webp` | WEBP | 358 × 550 | 28.1 KB | Below | No | Compress WebP (~6 KB) |
| `saints/gora-kumbhar.jpg` | JPG | 209 × 241 | 25.0 KB | Below | No | Convert to WebP/AVIF (~5 KB) |
| `saints/banka.webp` | WEBP | 474 × 631 | 19.2 KB | Below | No | Compress WebP (~6 KB) |
| `saints/samarth-ramdas-swami.webp` | WEBP | 474 × 432 | 16.1 KB | Below | No | Compress WebP (~5 KB) |
| `saints/sopankaka.webp` | WEBP | 474 × 482 | 15.3 KB | Below | No | Compress WebP (~5 KB) |
| `saints/santaji-jagnade.webp` | WEBP | 474 × 607 | 14.4 KB | Below | No | Compress WebP (~5 KB) |
| `saints/kanhopatra.webp` | WEBP | 373 × 373 | 13.0 KB | Below | No | Compress WebP (~4 KB) |
| `saints/namdev.webp` | WEBP | 474 × 355 | 11.3 KB | Below | No | Compress WebP (~4 KB) |
| `saints/raka-kumbhar.webp` | WEBP | 474 × 266 | 10.1 KB | Below | No | Compress WebP (~3 KB) |
| `saints/muktabai.webp` | WEBP | 474 × 474 | 8.6 KB | Below | No | Compress WebP (~3 KB) |
| `saints/soyarabai.webp` | WEBP | 474 × 355 | 7.7 KB | Below | No | Compress WebP (~2 KB) |
| `saints/eknath.jpg` | JPG | 193 × 261 | 7.3 KB | Below | No | Convert to WebP/AVIF (~2 KB) |
| `saints/parisa-bhagwat.webp` | WEBP | 474 × 266 | 6.2 KB | Below | No | Compress WebP (~2 KB) |
| `saints/pundalik.webp` | WEBP | 188 × 268 | 5.8 KB | Below | No | Compress WebP (~2 KB) |
| `saints/bhanudas.jpeg` | JPEG | 511 × 786 | 33.8 KB | Below | No | Convert to WebP/AVIF, compress (~8 KB) |

---

### 4. Palkhi Images
Palkhi route banner images are displayed on individual Palkhi cards and at the top of the detail modal.

| File Name | Format | Dimensions | File Size | Fold Position | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| `palkhis/dnyaneshwar.jpg` | JPG | 1280 × 720 | 233.2 KB | Below | No | Resize to 640 × 360, convert to WebP/AVIF (~25 KB) |
| `palkhis/tukaram.jpg` | JPG | 770 × 514 | 185.0 KB | Below | No | Resize to 600 × 400, convert to WebP/AVIF (~20 KB) |
| `palkhis/nivruttinath.avif` | AVIF | 1200 × 630 | 158.9 KB | Below | No | Resize to 600 × 315, compress AVIF (~20 KB) |
| `palkhis/eknath.jpg` | JPG | 864 × 540 | 152.7 KB | Below | No | Resize to 600 × 375, convert to WebP/AVIF (~18 KB) |
| `palkhis/namdev.avif` | AVIF | 1080 × 608 | 65.3 KB | Below | No | Resize to 600 × 338, compress AVIF (~12 KB) |
| `palkhis/sopankaka.webp` | WEBP | 474 × 263 | 34.7 KB | Below | No | Compress WebP (~10 KB) |
| `palkhis/muktabai.webp` | WEBP | 474 × 355 | 33.3 KB | Below | No | Compress WebP (~10 KB) |

---

### 5. Gallery Thumbnails
These are the cover layouts for the YouTube Satsang videos inside `PlaylistGrid.tsx`. They are displayed in small cards.

> [!WARNING]
> These YouTube playlist covers are currently uncompressed **PNGs** with large resolutions. They contain no transparency and can be reduced drastically.

| File Name | Format | Dimensions | File Size | Where Used | Fold | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| `yt/Santh Namdev Maharaj.png` | PNG | 1441 × 798 | 1.04 MB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, resize to 480x266, compress (~25 KB). |
| `yt/Abhang Veda.png` | PNG | 1227 × 667 | 895 KB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, resize to 480x261, compress (~22 KB). |
| `yt/Santh Gnaneshwar Mavuli.png` | PNG | 1353 × 784 | 783 KB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, resize to 480x278, compress (~20 KB). |
| `yt/Jagadhguru Santh Tukaram Maharaj.png` | PNG | 736 × 684 | 738 KB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, resize to 480x446, compress (~22 KB). |
| `yt/Pandharpur - Dehu Yaatra, Nov 2022.png` | PNG | 811 × 469 | 609 KB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, resize to 480x278, compress (~18 KB). |
| `yt/Ranga Panduranga - Kavasam Connect.png` | PNG | 460 × 256 | 269 KB | `PlaylistGrid.tsx` Card Cover | Below | No | Convert to WebP/AVIF, compress (~12 KB). |

---

### 6. Icons & Branding
Branding and badge details rendered in the headers, splash screen, and footers.

| File Name | Format | Dimensions | File Size | Where Used | Fold | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| `images/RKsstgm logo.png` | PNG | 500 × 500 | 268 KB | `Header.tsx` Brand Logo | Above | **Yes** | Convert to WebP/AVIF with alpha, resize to 120 × 120 (~10 KB). |
| `images/RKSSTGM text maroon.png` | PNG | 580 × 88 | 14 KB | `Splash.tsx` Splash brand text | Above | **Yes** | Convert to WebP/AVIF with alpha, or ideally convert to a vector **SVG** (~4 KB). |
| `images/RKSSTGM text white.png` | PNG | 580 × 88 | 12 KB | `Footer.tsx` Footer brand text | Below | **Yes** | Convert to WebP/AVIF with alpha, or ideally convert to a vector **SVG** (~4 KB). |

---

### 7. Decorative Elements
Visual assets specific to the interactive splash animation overlay.

| File Name | Format | Dimensions | File Size | Where Used | Fold | Alpha? | Recommendation |
| :--- | :---: | :---: | :---: | :--- | :---: | :---: | :--- |
| `images/Vitthal tilak.png` | PNG | 1024 × 1024 | 1.55 MB | `Splash.tsx` Tilak loader graphic | Above | **Yes** | Convert to WebP/AVIF with alpha, resize to 300 × 300, compress (~40 KB). |
| `images/splash foot.png` | PNG | 2987 × 226 | 350 KB | `Splash.tsx` Marquee silhouette footer | Above | **Yes** | Convert to WebP/AVIF with alpha, resize width to 1920, compress (~35 KB). |
| `images/mob mockup.jpg` | JPG | 32762 × 14674 | 1.26 MB | `PlaylistGrid.tsx` Phone display card | Below | No | **Critical**: Dimension error on source image. Resize to 400 × 800, convert to WebP/AVIF (~30 KB). |

---

## Summary of Actionable Optimization Steps

1. **Delete Redundant Files (Saves 10.43 MB)**
   Remove files from the `images/` root folder that are completely unreferenced in code:
   *   `bg.png`
   *   `kids left1.png`
   *   `temple right1.png`
   *   `vk.png`
   *   `vk2.png`

2. **Resize and Compress Backgrounds (Saves ~10.5 MB)**
   *   Compress `vk1.png` (Hero) using WebP/AVIF with alpha (~2.47 MB ➔ ~200 KB).
   *   Compress `kids left.png` and `temple right.png` (Traditions) using WebP/AVIF with alpha (~5.62 MB ➔ ~300 KB combined).
   *   Compress `splash bg.png` and `Vitthal tilak.png` (Splash screen) to WebP/AVIF (~3.42 MB ➔ ~160 KB combined).

3. **Scale and Compress Dynamic Content (Saves ~5.5 MB)**
   *   Standardize all Saint portraits (e.g. `bahinabai-shiur.jpg`) to WebP/AVIF with maximum width/height of 400px.
   *   Resize and convert the YouTube Playlist covers under `images/yt/` from large PNGs to WebP/AVIF.
   *   Fix the dimension bloat of `mob mockup.jpg` by resizing it to a display-ready resolution.
