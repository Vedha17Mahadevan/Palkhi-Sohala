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

export interface DestinationItem {
  number: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  slug: string;
  path: string;
}

export const ALL_WARI_DESTINATIONS: DestinationItem[] = [
  {
    number: '00',
    shortTitle: 'Overview',
    title: 'The Timeless Tradition of the Pandharpur Wari',
    subtitle: 'A 700-Year Spiritual Democracy of Faith, Equality and Collective Devotion',
    slug: 'overview',
    path: '/tradition',
  },
  {
    number: '01',
    shortTitle: 'Origins of the Wari',
    title: 'Origins of the Wari',
    subtitle: 'The 700-Year Spiritual Democracy and the Saint Tradition of Maharashtra',
    slug: 'origins',
    path: '/tradition/origins',
  },
  {
    number: '02',
    shortTitle: 'Lord Shiva – First Warkari',
    title: 'Lord Shiva – The First Warkari',
    subtitle: 'The Legend of Mahadev’s Primal Pilgrimage to Pandharpur',
    slug: 'lord-shiva',
    path: '/tradition/lord-shiva',
  },
  {
    number: '03',
    shortTitle: 'The Sacred Palkhi Tradition',
    title: 'The Sacred Palkhi Tradition',
    subtitle: 'The Journey of the Sacred Padukas to Pandharpur',
    slug: 'palkhi',
    path: '/tradition/palkhi',
  },
  {
    number: '04',
    shortTitle: 'Rituals & Sacred Moments',
    title: 'Rituals and Sacred Moments of Wari',
    subtitle: 'Gole Ringan, Ubhe Ringan & the Pious Sprint of Dhava',
    slug: 'rituals',
    path: '/tradition/rituals',
  },
  {
    number: '05',
    shortTitle: 'Life & Organisation of Dindi',
    title: 'The Life and Organisation of a Dindi',
    subtitle: 'Disciplined Fellowship & the Daily Rhythm of the Pilgrim Road',
    slug: 'dindi-life',
    path: '/tradition/dindi-life',
  },
  {
    number: '06',
    shortTitle: 'Devotions & Sacred Symbols',
    title: 'Devotional Practices and Sacred Symbols',
    subtitle: 'Haripath, Kirtan and the Living Emblems of Faith',
    slug: 'devotional-practices',
    path: '/tradition/devotional-practices',
  },
  {
    number: '07',
    shortTitle: 'Arrival & Spirit of Seva',
    title: 'Arrival at Pandharpur and the Spirit of Seva',
    subtitle: 'The Holy Chandrabhaga Snan & Unconditional Community Seva',
    slug: 'arrival-and-seva',
    path: '/tradition/arrival-and-seva',
  },
];

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: 'origins',
    slug: 'origins',
    path: '/tradition/origins',
    number: '01',
    title: 'Origins of the Wari',
    subtitle: 'The Tradition of the Pandharpur Wari',
    shortDesc: 'The ancient tradition of undertaking the pilgrimage to Pandharpur on foot as early as the 13th century.',
    image: 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917680/Sunset_Pilgrimage_to_the_Temple.png',
  },
  {
    id: 'lord-shiva',
    slug: 'lord-shiva',
    path: '/tradition/lord-shiva',
    number: '02',
    title: 'Lord Shiva – The First Warkari',
    subtitle: 'The First Warkari',
    shortDesc: 'According to ancient legends and the beliefs of the Warkari tradition, Lord Shiva is regarded as the first Warkari.',
    image: 'https://res.cloudinary.com/ayj5m59a/image/upload/v1790917679/Shiva_s_Golden-Hour_Pilgrimage.png',
  },
  {
    id: 'palkhi',
    slug: 'palkhi',
    path: '/tradition/palkhi',
    number: '03',
    title: 'The Sacred Palkhi Tradition',
    subtitle: 'The Journey of the Sacred Padukas to Pandharpur',
    shortDesc: 'The historical evolution of the organized palanquin procession carrying the sacred Padukas.',
    image: '/images/palkhi.jpg',
  },
  {
    id: 'rituals',
    slug: 'rituals',
    path: '/tradition/rituals',
    number: '04',
    title: 'Rituals and Sacred Moments of Wari',
    subtitle: 'Gole Ringan, Ubhe Ringan & the Pious Sprint of Dhava',
    shortDesc: 'Experience the sacred horse gallop of Ringan and the ecstatic devotional sprint of Dhava at Baji Raoachi Vihir.',
    image: '/images/Chapter/Ringan.png',
  },
  {
    id: 'dindi-life',
    slug: 'dindi-life',
    path: '/tradition/dindi-life',
    number: '05',
    title: 'The Life and Organisation of a Dindi',
    subtitle: 'Disciplined Fellowship & the Daily Rhythm of the Pilgrim Road',
    shortDesc: 'Discover the inner governance of the Dindi and the inspiring dawn-to-dusk daily routine of a marching Warkari.',
    image: '/images/Chapter/Dindi.png',
  },
  {
    id: 'devotional-practices',
    slug: 'devotional-practices',
    path: '/tradition/devotional-practices',
    number: '06',
    title: 'Devotional Practices and Sacred Symbols',
    subtitle: 'Haripath, Kirtan and the Living Emblems of Faith',
    shortDesc: 'Immerse in the twilight recitation of Haripath, traditional Kirtan discourses, and emblems like Tulsi and Bhagva Pataka.',
    image: '/images/Chapter/tulsi.png',
  },
  {
    id: 'arrival-and-seva',
    slug: 'arrival-and-seva',
    path: '/tradition/arrival-and-seva',
    number: '07',
    title: 'Arrival at Pandharpur and the Spirit of Seva',
    subtitle: 'The Holy Chandrabhaga Snan & Unconditional Community Seva',
    shortDesc: 'The purifying holy dip in the Chandrabhaga river and the boundless roadside hospitality of selfless community Seva.',
    image: '/images/Chapter/pilgrims.png',
  },
];
