import React from 'react';
import { Playlist } from '../../types';
import { getCloudinaryUrl, getCloudinarySrcSet } from '../../config/cloudinary';
import Icon from '../common/Icon';

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
              src={getCloudinaryUrl(playlist.coverImage, { width: 480, dpr: false })}
              srcSet={getCloudinarySrcSet(playlist.coverImage, [320, 480, 640])}
              sizes="(max-width: 768px) 90vw, 320px"
              alt={`${playlist.title} devotional playlist cover`}
              className="video-cover-img"
              loading="lazy"
              decoding="async"
              width={480}
              height={270}
            />
            <div className="video-cover-overlay"></div>
            <div className="video-youtube-badge">
              <Icon name="youtube" />
            </div>
          </>
        ) : (
          <>
            <div className="video-thumb-pattern"></div>
            <div className="video-thumb-overlay"></div>
            <div className="video-play-icon">
              <Icon name="youtube" />
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
