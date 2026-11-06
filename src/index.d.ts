export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  caption: string;
}

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tag?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: MenuItem[];
}