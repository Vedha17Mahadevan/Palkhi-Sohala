import React from 'react';
import { Playlist } from '../../types';
import { getCloudinaryUrl } from '../../config/cloudinary';

interface PlaylistCardProps {
  playlist: Playlist;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <a
      href={playlist.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card archives-video-card"
      aria-label={`Watch ${playlist.title} playlist`}
    >
      <div className={`video-thumb ${playlist.coverImage ? 'has-cover' : 'video-thumb-themed'}`}>
        {playlist.coverImage ? (
          <>
            <img
              src={getCloudinaryUrl(playlist.coverImage, { width: 480 })}
              alt={`${playlist.title} devotional playlist cover`}
              className="video-cover-img"
              loading="lazy"
              decoding="async"
              width={480}
              height={270}
            />
            <div className="video-cover-overlay"></div>
            <div className="video-youtube-badge">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </>
        ) : (
          <>
            <div className="video-thumb-pattern"></div>
            <div className="video-thumb-overlay"></div>
            <div className="video-play-icon">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </>
        )}
      </div>
      <div className="video-meta">
        <h3 className="video-title">{playlist.title}</h3>
        {playlist.description && (
          <span className="video-year">{playlist.description}</span>
        )}
      </div>
    </a>
  );
};

export default PlaylistCard;
