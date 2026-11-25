import React, { useState, useEffect } from 'react';
import { Palkhi } from '../../types';
import { compactPalkhiName } from '../../utils/palkhiHelpers';
import { SaintAvatarPlaceholder } from './PalkhiCard';
import { getCloudinaryUrl, getCloudinarySrcSet } from '../../config/cloudinary';
import Icon from '../common/Icon';
import '../../styles/palkhi-modal.css';

interface PalkhiModalProps {
  palkhi: Palkhi;
  onClose: () => void;
}

export const PalkhiModal: React.FC<PalkhiModalProps> = ({ palkhi, onClose }) => {
  const [palkhiImageFailed, setPalkhiImageFailed] = useState(false);
  const [saintImageFailed, setSaintImageFailed] = useState(false);

  // Body scroll lock + ESC to close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="palkhi-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="palkhi-modal-title"
    >
      <div
        className="palkhi-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="palkhi-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="xmark" />
        </button>

        <div className="palkhi-modal-inner">
          {/* Left / Top: Hero Palkhi Procession Image + Saint portrait (overlapping) */}
          <div className="palkhi-modal-image-col">
            <div className="palkhi-modal-hero-media">
              {/* Large Palkhi procession image at the top */}
              <div className="modal-palkhi-photo-wrap">
                {palkhi.palkhiImage && !palkhiImageFailed ? (
                  <img
                    src={getCloudinaryUrl(palkhi.palkhiImage, { width: 750, dpr: false })}
                    srcSet={getCloudinarySrcSet(palkhi.palkhiImage, [480, 750])}
                    sizes="(max-width: 768px) 92vw, 480px"
                    alt={`${compactPalkhiName(palkhi.name)} sacred Palkhi procession`}
                    className="modal-palkhi-photo"
                    loading="lazy"
                    decoding="async"
                    width={750}
                    height={562}
                    onError={() => setPalkhiImageFailed(true)}
                  />
                ) : (
                  <div className="modal-palkhi-photo-placeholder">
                    <Icon name="chariot" />
                    <span>{compactPalkhiName(palkhi.name)}</span>
                  </div>
                )}
              </div>

              {/* Saint portrait — overlaps bottom edge of procession image */}
              <div className="saint-portrait saint-portrait-modal">
                {palkhi.saintImage && !saintImageFailed ? (
                  <img
                    src={getCloudinaryUrl(palkhi.saintImage, { width: 250, dpr: false })}
                    srcSet={getCloudinarySrcSet(palkhi.saintImage, [150, 250])}
                    sizes="124px"
                    alt={`Portrait of ${palkhi.saint}`}
                    className="saint-portrait-img"
                    loading="lazy"
                    decoding="async"
                    width={124}
                    height={124}
                    onError={() => setSaintImageFailed(true)}
                  />
                ) : (
                  <SaintAvatarPlaceholder saint={palkhi.saint} large />
                )}
              </div>

              {/* Palkhi names below the saint portrait */}
              <div className="palkhi-modal-names">
                <h2 id="palkhi-modal-title" className="palkhi-modal-title-center">
                  {compactPalkhiName(palkhi.name)}
                </h2>
                {palkhi.marathiName && (
                  <p className="palkhi-modal-marathi-center">{palkhi.marathiName}</p>
                )}
                <div className="divider-split-gold tiny center"></div>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Information */}
          <div className="palkhi-modal-info-col">
            <div className="palkhi-modal-fields">
              <div className="info-field">
                <span className="info-label"><Icon name="user-tie" /> Saint</span>
                <span className="info-value">{palkhi.saint}</span>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><Icon name="location-dot" /> Origin</span>
                  <span className="info-value">{palkhi.origin}</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><Icon name="city" /> District</span>
                  <span className="info-value">{palkhi.district}</span>
                </div>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><Icon name="flag-checkered" /> Destination</span>
                  <span className="info-value">{palkhi.destination}</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><Icon name="route" /> Distance</span>
                  <span className="info-value">Approx. {palkhi.distanceKm} km</span>
                </div>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><Icon name="clock" /> Duration</span>
                  <span className="info-value">{palkhi.durationDays} Days</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><Icon name="layer-group" /> Category</span>
                  <span className="info-value">{palkhi.category}</span>
                </div>
              </div>
              <div className="info-field">
                <span className="info-label"><Icon name="calendar-days" /> Traditional Departure</span>
                <span className="info-value">{palkhi.traditionalDeparture}</span>
              </div>
              <div className="info-field">
                <span className="info-label"><Icon name="route" /> Indicative Route</span>
                <span className="info-value route-text">{palkhi.indicativeRoute}</span>
              </div>
              {palkhi.historicalNote && (
                <div className="info-field historical-note">
                  <span className="info-label"><Icon name="book-open" /> Historical &amp; Cultural Note</span>
                  <p className="info-note-text">{palkhi.historicalNote}</p>
                </div>
              )}
            </div>

            <div className="palkhi-modal-footer">
              <button
                className="btn-modal-close"
                onClick={onClose}
              >
                <Icon name="xmark" /> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalkhiModal;
