import React, { useState } from 'react';
import { Palkhi } from '../../types';
import { compactPalkhiName, saintInitials } from '../../utils/palkhiHelpers';
import { getCloudinaryUrl } from '../../config/cloudinary';

interface PalkhiCardProps {
  palkhi: Palkhi;
  onSelect: (palkhi: Palkhi) => void;
  reveal?: boolean;
}

const SaintAvatarPlaceholder: React.FC<{ saint: string; large?: boolean }> = ({ saint, large = false }) => {
  const initials = saintInitials(saint);
  return (
    <div className={`saint-avatar saint-avatar-placeholder${large ? ' large' : ''}`}>
      <span className="saint-avatar-initials">{initials}</span>
    </div>
  );
};

export const PalkhiCard: React.FC<PalkhiCardProps> = React.memo(({ palkhi, onSelect, reveal = false }) => {
  const [palkhiImageFailed, setPalkhiImageFailed] = useState(false);
  const [saintImageFailed, setSaintImageFailed] = useState(false);

  const hasPalkhiPhoto = palkhi.palkhiImage && !palkhiImageFailed;
  const hasSaintPhoto = palkhi.saintImage && !saintImageFailed;

  return (
    <article
      className={`palkhi-card ${reveal ? 'reveal' : ''}${hasPalkhiPhoto ? ' has-real-photo' : ''}${hasSaintPhoto ? ' has-real-saint' : ''}`}
      onClick={() => onSelect(palkhi)}
      style={{ cursor: 'pointer' }}
    >
      {/* 16:9 Image / Media */}
      <div className="palkhi-card-media">
        <div className="palkhi-media-frame">
          {hasPalkhiPhoto && (
            <img
              src={getCloudinaryUrl(palkhi.palkhiImage, { width: 750 })}
              alt={`${compactPalkhiName(palkhi.name)} — ${palkhi.origin} Palkhi procession`}
              className="palkhi-media-photo"
              loading="lazy"
              decoding="async"
              width={750}
              height={422}
              onError={() => setPalkhiImageFailed(true)}
            />
          )}
          <div className="palkhi-media-inner">
            <div className="palkhi-media-ornament">
              <span className="palkhi-media-chip">
                <i className="fa-solid fa-location-dot"></i>
                {palkhi.origin}
              </span>
            </div>
          </div>
        </div>

        <div className="saint-portrait saint-portrait-card">
          {hasSaintPhoto ? (
            <img
              src={getCloudinaryUrl(palkhi.saintImage, { width: 300 })}
              alt={`Portrait of ${palkhi.saint}`}
              className="saint-portrait-img"
              loading="lazy"
              decoding="async"
              width={72}
              height={72}
              onError={() => setSaintImageFailed(true)}
            />
          ) : (
            <SaintAvatarPlaceholder saint={palkhi.saint} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="palkhi-card-content">
        <h3 className="palkhi-card-title">{compactPalkhiName(palkhi.name)}</h3>

        <div className="palkhi-card-line card-line-route">
          <i className="fa-solid fa-route"></i>
          <span>{palkhi.origin} <em className="arrow">→</em> {palkhi.destination}</span>
        </div>

        <div className="palkhi-card-line card-line-duration">
          <i className="fa-solid fa-clock"></i>
          <span>{palkhi.durationDays} Days</span>
        </div>

        <span className="palkhi-card-divider" aria-hidden="true"></span>

        <button
          className="btn-view-details"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(palkhi);
          }}
        >
          View Details
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
  );
});

export default PalkhiCard;
export { SaintAvatarPlaceholder };
