const CLOUD_NAME = 'ayj5m59a';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export interface CloudinaryUrlOptions {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
  format?: string;
  dpr?: boolean;
}

/**
 * Generates an optimized Cloudinary image URL.
 * Automatically applies f_auto, q_auto, and optional dpr_auto.
 * Strips folder prefixes like 'images/' and extensions like '.webp' to extract the public ID.
 */
export const getCloudinaryUrl = (publicId: string, options: CloudinaryUrlOptions = {}): string => {
  if (!publicId) return '';

  // If it's already a full URL, return it
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  // Clean the path
  let cleanId = publicId.trim();
  
  // Remove leading slash if any
  if (cleanId.startsWith('/')) {
    cleanId = cleanId.slice(1);
  }
  
  // If it starts with images/, remove it as public IDs are relative to images/
  if (cleanId.startsWith('images/')) {
    cleanId = cleanId.slice(7);
  }

  // Remove file extension if present
  cleanId = cleanId.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '');

  // Replace spaces with underscores while preserving folder separators
  cleanId = cleanId.replace(/\s+/g, '_').replace(/_+/g, '_');

  const transformations: string[] = [
    options.format ? `f_${options.format}` : 'f_auto',
    options.quality ? `q_${options.quality}` : 'q_auto',
  ];

  if (options.dpr !== false) {
    transformations.push('dpr_auto');
  }

  if (options.width) {
    transformations.push(`w_${options.width}`);
  }
  if (options.height) {
    transformations.push(`h_${options.height}`);
  }
  if (options.crop) {
    transformations.push(`c_${options.crop}`);
  }

  const transformationString = transformations.join(',');
  return `${BASE_URL}/${transformationString}/${cleanId}`;
};

/**
 * Generates a responsive srcSet string for Cloudinary images using exact width descriptors.
 */
export const getCloudinarySrcSet = (
  publicId: string,
  widths: number[],
  options: Omit<CloudinaryUrlOptions, 'width' | 'dpr'> = {}
): string => {
  if (!publicId || widths.length === 0) return '';
  return widths
    .map((w) => `${getCloudinaryUrl(publicId, { ...options, width: w, dpr: false })} ${w}w`)
    .join(', ');
};
