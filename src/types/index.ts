export interface Palkhi {
  id: number;
  slug: string;
  name: string;
  marathiName: string;
  saint: string;
  origin: string;
  district: string;
  destination: string;
  distanceKm: number;
  durationDays: string;
  category: string;
  traditionalDeparture: string;
  historicalNote: string;
  indicativeRoute: string;
  palkhiImage: string;
  saintImage: string;
}

export interface Playlist {
  title: string;
  description?: string;
  youtubeUrl: string;
  coverImage?: string;
}
