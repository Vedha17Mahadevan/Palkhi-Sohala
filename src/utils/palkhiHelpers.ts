export function compactPalkhiName(name: string): string {
  return name
    .replace(/^Shri\s+/i, '')
    .replace(/^Jagadguru\s+Shri\s+/i, '')
    .replace(/^Jagadguru\s+/i, '')
    .trim();
}

export function saintInitials(saint: string): string {
  const tokens = saint
    .replace(/^(Shri|Sant|Sri|Swami|Samarth|Maharaj|Guru|Jagadguru)\s+/i, '')
    .replace(/\s+(Maharaj|Swami|Samarth|Guru)$/i, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (tokens.length === 0) return 'ॐ';
  return tokens.map(t => t[0]?.toUpperCase() ?? '').join('');
}
