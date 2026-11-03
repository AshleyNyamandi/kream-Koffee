export interface FlyerBoard {
  id: string;
  category: 'breakfast' | 'starters' | 'mains' | 'platters' | 'bar_cocktails' | 'bar_drinks';
  badgeTitle: string;
  subHeader: string;
  sections: MenuSection[];
  menu: string;
  images: { url: string; alt: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  caption: string;
}