import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
}

/**
 * High-performance image with shimmer skeleton placeholder,
 * browser-native lazy loading (or eager priority loading),
 * and zero layout shifts.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`img-skeleton-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
      {!isLoaded && <div className="img-skeleton-shimmer" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'img-fade-in' : 'img-pre-load'}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...({ fetchpriority: priority ? 'high' : 'auto' } as any)}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
    </div>
  );
};

export default React.memo(OptimizedImage);
