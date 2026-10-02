import React, { useState, useEffect } from 'react';
import { Palkhi } from '../../types';
import { compactPalkhiName } from '../../utils/palkhiHelpers';
import { SaintAvatarPlaceholder } from './PalkhiCard';
import { getCloudinaryUrl } from '../../config/cloudinary';

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
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="palkhi-modal-inner">
          {/* Left / Top: Hero Palkhi Procession Image + Saint portrait (overlapping) */}
          <div className="palkhi-modal-image-col">
            <div className="palkhi-modal-hero-media">
              {/* Large Palkhi procession image at the top */}
              <div className="modal-palkhi-photo-wrap">
                {palkhi.palkhiImage && !palkhiImageFailed ? (
                  <img
                    src={getCloudinaryUrl(palkhi.palkhiImage, { width: 750 })}
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
                    <i className="fa-solid fa-chariot"></i>
                    <span>{compactPalkhiName(palkhi.name)}</span>
                  </div>
                )}
              </div>

              {/* Saint portrait — overlaps bottom edge of procession image */}
              <div className="saint-portrait saint-portrait-modal">
                {palkhi.saintImage && !saintImageFailed ? (
                  <img
                    src={getCloudinaryUrl(palkhi.saintImage, { width: 300 })}
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
                <span className="info-label"><i className="fa-solid fa-user-tie"></i> Saint</span>
                <span className="info-value">{palkhi.saint}</span>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-location-dot"></i> Origin</span>
                  <span className="info-value">{palkhi.origin}</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-city"></i> District</span>
                  <span className="info-value">{palkhi.district}</span>
                </div>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-flag-checkered"></i> Destination</span>
                  <span className="info-value">{palkhi.destination}</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-route"></i> Distance</span>
                  <span className="info-value">Approx. {palkhi.distanceKm} km</span>
                </div>
              </div>
              <div className="info-field-row">
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-clock"></i> Duration</span>
                  <span className="info-value">{palkhi.durationDays} Days</span>
                </div>
                <div className="info-field">
                  <span className="info-label"><i className="fa-solid fa-layer-group"></i> Category</span>
                  <span className="info-value">{palkhi.category}</span>
                </div>
              </div>
              <div className="info-field">
                <span className="info-label"><i className="fa-solid fa-calendar-days"></i> Traditional Departure</span>
                <span className="info-value">{palkhi.traditionalDeparture}</span>
              </div>
              <div className="info-field">
                <span className="info-label"><i className="fa-solid fa-route"></i> Indicative Route</span>
                <span className="info-value route-text">{palkhi.indicativeRoute}</span>
              </div>
              {palkhi.historicalNote && (
                <div className="info-field historical-note">
                  <span className="info-label"><i className="fa-solid fa-book-open"></i> Historical &amp; Cultural Note</span>
                  <p className="info-note-text">{palkhi.historicalNote}</p>
                </div>
              )}
            </div>

            <div className="palkhi-modal-footer">
              <button
                className="btn-modal-close"
                onClick={onClose}
              >
                <i className="fa-solid fa-xmark"></i> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalkhiModal;
