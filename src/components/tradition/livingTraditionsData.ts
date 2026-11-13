export interface SubchapterItem {
  id: string;
  subNumber: string;
  chapterNumber: string;
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  sectionsList: string[];
  icon: string;
  image: string;
}

export const SUBCHAPTERS_DATA: SubchapterItem[] = [
  {
    id: 'rituals',
    subNumber: '04',
    chapterNumber: '04',
    slug: 'rituals',
    path: '/tradition/rituals',
    title: 'Rituals and Sacred Moments of Wari',
    subtitle: 'Gole Ringan, Ubhe Ringan & the Pious Sprint of Dhava',
    shortDesc: 'Experience the exhilarating Ringan rituals where the sacred horse gallops through concentric rings of thousands of devotees, and the ecstatic dash of Dhava at Baji Raoachi Vihir.',
    sectionsList: ['Ringan – A Sacred Moment of Devotion', 'Dhava – The Joy of Seeing Pandharpur'],
    icon: 'fa-solid fa-horse-head',
    image: '/images/Chapter/Ringan.png'
  },
  {
    id: 'dindi-life',
    subNumber: '05',
    chapterNumber: '05',
    slug: 'dindi-life',
    path: '/tradition/dindi-life',
    title: 'The Life and Organisation of a Dindi',
    subtitle: 'Disciplined Fellowship & the Daily Rhythm of the Pilgrim Road',
    shortDesc: 'Discover the inner governance, discipline, and democratic brotherhood of the Dindi, followed by an intimate walk through the Warkari’s representative dawn-to-dusk daily routine.',
    sectionsList: ['Dindi – Walking Together in Devotion', 'The Daily Rhythm of a Warkari'],
    icon: 'fa-solid fa-people-group',
    image: '/images/Chapter/Dindi.png'
  },
  {
    id: 'devotional-practices',
    subNumber: '06',
    chapterNumber: '06',
    slug: 'devotional-practices',
    path: '/tradition/devotional-practices',
    title: 'Devotional Practices and Sacred Symbols',
    subtitle: 'Haripath, Kirtan, Chanting & the Living Emblems of Faith',
    shortDesc: 'Immerse in the sunset recitation of Sant Dnyaneshwar’s Haripath, traditional Kirtan discourses, Harinam chanting, and sacred emblems like the Tulsi Vrindavan, Bhagva Pataka, and Tilak.',
    sectionsList: ['Haripath, Kirtan and Harinam Sankirtan', 'Tulsi Vrindavan and Symbols of Devotion'],
    icon: 'fa-solid fa-microphone-lines',
    image: '/images/Chapter/tulsi.png'
  },
  {
    id: 'arrival-and-seva',
    subNumber: '07',
    chapterNumber: '07',
    slug: 'arrival-and-seva',
    path: '/tradition/arrival-and-seva',
    title: 'Arrival at Pandharpur and the Spirit of Seva',
    subtitle: 'The Holy Chandrabhaga Snan & Unconditional Community Seva',
    shortDesc: 'Experience the purifying holy immersion in the crescent Chandrabhaga River upon arrival, and the boundless roadside hospitality of selfless community Seva that sustains millions.',
    sectionsList: ['Chandrabhaga Snan and Arrival at Pandharpur', 'Seva – Serving Fellow Warkaris'],
    icon: 'fa-solid fa-hand-holding-heart',
    image: '/images/Chapter/pilgrims.png'
  }
];

export const getSubchapterByPath = (path: string): SubchapterItem | undefined => {
  return SUBCHAPTERS_DATA.find(s => s.path === path || path.endsWith(s.slug));
};

export const getSubchapterBySlug = (slug: string): SubchapterItem | undefined => {
  return SUBCHAPTERS_DATA.find(s => s.slug === slug);
};
