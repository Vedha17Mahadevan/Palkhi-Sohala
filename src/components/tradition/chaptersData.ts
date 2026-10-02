export interface ChapterItem {
  id: string;
  slug: string;
  path: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  image: string;
  themeColor?: string;
}

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: 'origins',
    slug: 'origins',
    path: '/tradition/origins',
    number: '01',
    title: 'Origins of the Wari',
    subtitle: 'The Tradition of the Pandharpur Wari',
    shortDesc: 'The ancient tradition of undertaking the pilgrimage to Pandharpur on foot as early as the 13th century.',
    image: 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png'
  },
  {
    id: 'lord-shiva',
    slug: 'lord-shiva',
    path: '/tradition/lord-shiva',
    number: '02',
    title: 'Lord Shiva – The First Warkari',
    subtitle: 'The First Warkari',
    shortDesc: 'According to ancient legends and the beliefs of the Warkari tradition, Lord Shiva is regarded as the first Warkari.',
    image: 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/Shiva_s_Golden-Hour_Pilgrimage.png'
  },
  {
    id: 'palkhi',
    slug: 'palkhi',
    path: '/tradition/palkhi',
    number: '03',
    title: 'The Sacred Palkhi Tradition',
    subtitle: 'The journey of the sacred Padukas to Pandharpur.',
    shortDesc: 'The journey of the sacred Padukas to Pandharpur.',
    image: '/images/palkhi.jpg'
  }
];
