import React from 'react';
import rawPlaylistData from '../../../playlists.json';
import { Playlist } from '../../types';
import PlaylistCard from './PlaylistCard';
import { getCloudinaryUrl } from '../../config/cloudinary';

const PLAYLIST_DATA = rawPlaylistData as Playlist[];

export const PlaylistGrid: React.FC = () => {
  return (
    <section id="gallery" className="gallery-section archives-split-section">
      <div className="section-container archives-split-container">
        <div className="archives-split-inner">
          {/* ===== Left Column (70-75%) : Video Gallery ===== */}
          <div className="archives-left-col">
            <div className="section-header archives-split-header reveal">
              <span className="section-tag">From the Archives</span>
              <h2 className="section-title">
                Discover Pandharpur
                <br />
                Through Our Lens
              </h2>
              <div className="divider-split-gold center"></div>
              <p className="section-subtitle">
                From the sacred streets of Pandharpur to the divine presence of Lord Vitthal and Rukmini, explore a curated collection of devotional discourses, festivals, temple darshans, yatras, bhajans, and spiritual moments shared by RadhaKrishna Satsangam.
              </p>
            </div>

            <div className="video-grid archives-video-grid reveal">
              {PLAYLIST_DATA.map((playlist, index) => (
                <PlaylistCard key={index} playlist={playlist} />
              ))}
            </div>
          </div>

          {/* ===== Decorative Divider ===== */}
          <div className="archives-divider" aria-hidden="true">
            <div className="divider-v-line"></div>
            <div className="divider-v-ornament">◆</div>
            <div className="divider-v-line"></div>
          </div>

          {/* ===== Right Column (25-30%) : Promotional Panel with Phone ===== */}
          <aside className="archives-right-col reveal">
            <div className="promo-panel">
              <div className="promo-temple-icon">
                <i className="fa-solid fa-gopuram"></i>
              </div>
              <div className="divider-split-gold small center"></div>
              <p className="promo-text">
                Relive the devotion, music, and timeless moments of the Wari through our video collection.
              </p>

              <div className="phone-showcase">
                <img
                  src={getCloudinaryUrl('mob mockup', { width: 480 })}
                  alt="Watch RadhaKrishna Satsangam devotional videos on YouTube mobile"
                  className="phone-mockup-img"
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={480}
                />
                <div className="phone-shadow"></div>
              </div>

              <a
                href="https://www.youtube.com/@GurujeeGopalavallidasar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-channel btn-channel-secondary"
              >
                <i className="fa-brands fa-youtube"></i>
                Visit YouTube Channel
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PlaylistGrid;
