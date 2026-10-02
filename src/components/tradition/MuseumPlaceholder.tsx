import React from 'react';

interface MuseumPlaceholderProps {
  aspectRatio?: string;
  width?: string | number;
  height?: string | number;
  icon?: string;
  title: string;
  subtitle?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  hideCaption?: boolean;
}

export const MuseumPlaceholder: React.FC<MuseumPlaceholderProps> = ({
  aspectRatio = '16 / 9',
  width = '100%',
  height,
  icon = 'fa-solid fa-om',
  title,
  subtitle = 'Archival Artwork Placeholder',
  className = '',
  imageSrc,
  imageAlt,
  hideCaption = false,
}) => {
  if (imageSrc) {
    return (
      <div className={`museum-artwork-card ${className}`}>
        <div 
          className="museum-artwork-frame" 
          style={{ width, height, aspectRatio: height ? undefined : aspectRatio }}
        >
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="museum-artwork-img"
            loading="lazy"
            decoding="async" 
          />
          <div className="museum-artwork-glow"></div>
        </div>
        {!hideCaption && (title || subtitle) && (
          <div className="museum-artwork-caption">
            <span className="caption-tag">Archival Artwork</span>
            {title && <h4 className="caption-title">{title}</h4>}
            {subtitle && <p className="caption-sub">{subtitle}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`museum-placeholder-box ${className}`}
      style={{ width, height, aspectRatio: height ? undefined : aspectRatio }}
    >
      <div className="museum-placeholder-inner">
        <div className="museum-corner-ornament tl">❖</div>
        <div className="museum-corner-ornament tr">❖</div>
        <div className="museum-corner-ornament bl">❖</div>
        <div className="museum-corner-ornament br">❖</div>
        
        <div className="museum-placeholder-icon-wrap">
          <i className={icon}></i>
        </div>
        <div className="museum-placeholder-title">{title}</div>
        <div className="museum-placeholder-subtitle">{subtitle}</div>
        <div className="museum-placeholder-badge">
          <span>Awaiting Curated Artwork</span>
        </div>
      </div>
    </div>
  );
};

export default MuseumPlaceholder;
