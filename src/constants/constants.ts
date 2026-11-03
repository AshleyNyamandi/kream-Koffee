import type { FlyerBoard, GalleryItem} from "..";

export const categories = [
      { id: 'all', label: 'All Items' },
      { id: 'coffee', label: 'Koffee & Brews' },
      { id: 'drinks', label: 'Cold Beverages' },
      { id: 'desserts', label: 'Kream & Desserts' },
      { id: 'mains', label: 'Artisanal Mains' },
      { id: 'bakery', label: 'Bakery & Breakfast' },
    ];

export const FLYER_BOARDS: FlyerBoard[] = [
  {
    id: 'flyer-breakfast',
    category: 'breakfast',
    badgeTitle: 'BREAKFAST',
    subHeader: 'Served fresh every morning from Sunrise',
    menu: "./menus/breakfast.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80', alt: 'Full English Breakfast' },
      { url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80', alt: 'Eggs & Bacon Toast' }
    ],
    sections: [
      {
        title: 'FULL ENGLISH BREAKFAST',
        items: [
          { name: 'FULL ENGLISH BREAKFAST', desc: '2 Eggs, Bacon, Beef/Pork Sausage, Potato Fries, Baked Beans, Mushroom, Yogurt, Fruits, Cereals, Toast served with Tea', price: '$15.00' }
        ]
      },
      {
        title: 'OMELETTES',
        items: [
          { name: 'Vegetable Omelette with Toast', price: '$2.00' },
          { name: 'Cheese Omelette', price: '$3.00' },
          { name: 'Tomato Omelette with Toast', price: '$2.00' },
          { name: 'Ham Omelette', price: '$5.00' }
        ]
      },
      {
        title: 'BASIC BREAKFAST',
        items: [
          { name: 'BASIC BREAKFAST', desc: '1 Egg, Toast & 1 Sausage, Baked Beans with a Cup of Tea', price: '$4.00' }
        ]
      },
      {
        title: 'BUNTERS BREAKFAST',
        items: [
          { name: 'BUNTERS BREAKFAST', desc: '1 Egg, 1 Sausage, Chicken Stir Fry, Fries & Toast with a Cup of Tea', price: '$6.00' }
        ]
      },
      {
        title: 'FARMHOUSE',
        items: [
          { name: 'FARMHOUSE', desc: '2 Eggs, 1 Sausage, Beef Stir Fry or Chicken Livers, Bacon, Fries & a Cup of Tea', price: '$8.00' }
        ]
      }
    ]
  },
  {
    id: 'flyer-starters',
    category: 'starters',
    badgeTitle: 'STARTERS & DESSERTS',
    subHeader: 'Light bites, soups, sandwiches & sweet delights',
    menu: "./menus/startersNdisserts.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80', alt: 'Mushroom Soup' },
      { url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80', alt: 'Club Sandwich' },
      { url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', alt: 'Desserts & Fruit Kebabs' }
    ],
    sections: [
      {
        title: 'STARTERS',
        items: [
          { name: 'Mushroom Soup', price: '$4.00' },
          { name: 'Butternut Soup', price: '$4.00' },
          { name: 'Chicken Soup', price: '$4.00' },
          { name: 'Scotched Egg', price: '$3.00' },
          { name: 'Waldorf Salad', price: '$3.00' },
          { name: 'Chef Salad', price: '$3.00' }
        ]
      },
      {
        title: 'SANDWICHES',
        items: [
          { name: 'Egg Mayo Sandwich', price: '$2.00' },
          { name: 'Tomato & Cheese Sandwich', price: '$3.00' },
          { name: 'Chicken Mayo Sandwich', price: '$4.00' },
          { name: 'Plain Sandwich', price: '$1.00' },
          { name: 'Club Sandwich', price: '$5.00' }
        ]
      },
      {
        title: 'DESSERTS',
        items: [
          { name: 'Fruit Salad', price: '$3.00' },
          { name: 'Fruit & Yoghurt Salad', price: '$4.00' },
          { name: 'Cake Slice', price: '$4.00' },
          { name: 'Ice Cream Cone', price: '$1.00' },
          { name: 'Ice Cream Cup', price: '$3.00' },
          { name: 'Fruit Kebabs', price: '$3.00' },
          { name: 'Custard Tarts', price: '$4.00' }
        ]
      },
      {
        title: 'LIGHT MEALS',
        items: [
          { name: 'Plain Fries', price: '$2.00' },
          { name: 'Fish Fingers with Fries', price: '$6.00' },
          { name: 'Chicken Nuggets with Fries', price: '$6.00' }
        ]
      }
    ]
  },
  {
    id: 'flyer-mains',
    category: 'mains',
    badgeTitle: 'LUNCH & DINNER',
    subHeader: 'All meals come with complimentary starches (Fries, Wedges, Fried Rice, Potato Mash, or Sadza)',
    menu: "./menus/lunchNdinner.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', alt: 'Grilled Chicken & Rice' },
      { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', alt: 'Gourmet Burger' }
    ],
    sections: [
      {
        title: 'MAIN COURSE',
        items: [
          { name: 'Spaghetti Bolognese', price: '$6.00' },
          { name: 'Beef Stew', price: '$5.00' },
          { name: 'Wings', price: '$6.99' },
          { name: 'Chicken Stew', price: '$5.00' },
          { name: 'Roadrunner', price: '$7.00' },
          { name: 'Whole Bream', price: '$10.00' },
          { name: 'Fish Fillet', price: '$12.00' },
          { name: 'Mac & Cheese', price: '$7.00' },
          { name: 'Chicken Schnitzel', price: '$12.00' },
          { name: 'Beef Stir Fry', price: '$7.00' },
          { name: 'Chicken Stir Fry', price: '$6.00' },
          { name: 'Franchise Chicken Breast', price: '$10.00' },
          { name: 'Pork Chops', price: '$10.00' },
          { name: 'Chicken Pasta', price: '$6.00' },
          { name: 'T-Bone', price: '$12.00' },
          { name: 'Rump Steak', price: '$10.00' },
          { name: 'Beef Kebabs', price: '$7.00' },
          { name: 'Pork Ribs', price: '$12.00' },
          { name: 'Sausage & Mushroom Pasta', price: '$8.00' },
          { name: 'Sea Food Prawns with Fried Rice', price: '$12.00' },
          { name: 'Super Blade Steak', price: '$12.00' },
          { name: 'Super Flat Iron Steak', price: '$10.00' },
          { name: 'Chicken Chive', price: '$10.00' },
          { name: 'Quarter Chicken & Chips (Barbecue/Peri-Peri/Lemon & Herb)', price: '$6.99' },
          { name: 'Chicken Cordon Bleu', price: '$10.00' }
        ]
      },
      {
        title: 'BURGERS',
        items: [
          { name: 'Beef Burger & Chips', price: '$4.00' },
          { name: 'Chicken Burger & Chips', price: '$6.00' },
          { name: 'Shawarma + Chips', price: '$6.00' },
          { name: 'Deluxe Burger + Chips & Free Drink', price: '$9.00' },
          { name: 'Double Beef Burger & Chips', price: '$7.00' },
          { name: 'Deep Fried Chilli Cheese Burger & Chips', price: '$10.00' }
        ]
      }
    ]
  },
  {
    id: 'flyer-platters',
    category: 'platters',
    badgeTitle: 'PLATTERS & SPECIALS',
    subHeader: 'Generous sharing platters & exclusive daily dining deals',
    menu: "./menus/plattersNspecials.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80', alt: 'Mixed Platter' },
      { url: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80', alt: 'Fried Chicken Platter' }
    ],
    sections: [
      {
        title: 'REGULAR & DELUXE PLATTERS',
        items: [
          { name: 'Small Platter', price: '$15.00' },
          { name: 'Medium Platter', price: '$25.00' },
          { name: 'Large Platter', price: '$40.00' },
          { name: 'Mega Platter', price: '$60.00' },
          { name: 'Small Deluxe Platter', price: '$37.00' },
          { name: 'Medium Deluxe Platter', price: '$47.00' },
          { name: 'Large Deluxe Platter', price: '$62.00' },
          { name: 'Mega Deluxe Platter', price: '$82.00' }
        ]
      },
      {
        title: 'DAILY SPECIALS (NOT AVAILABLE EVERYDAY)',
        items: [
          { name: 'Safari Rice & Quarter Chicken', desc: 'Available Thursdays', price: '$6.00' },
          { name: 'Peri Peri Chicken & Safari Rice', desc: 'Available Thursdays', price: '$6.00' },
          { name: 'Cappuccino + Free Scones', desc: 'Available Mondays', price: '$3.00' },
          { name: '2 Drumsticks or 2 Wings & Butter Grilled Corn "Seasonal"', desc: 'Available Mondays', price: '$5.00' },
          { name: 'Small Platter + 2 Free Wine Glasses', desc: 'Available Saturdays', price: '$16.00' },
          { name: 'Family Platter + Free 3 Mojito & Cake', desc: 'Available Sundays', price: '$40.00' }
        ]
      },
      {
        title: 'EXCLUSIVE SPECIAL',
        items: [
          { name: 'Grilled Baby Spatchcock, Green Salad with Potato Wedges/Chips, Coleslaw + 2 Free Dry Red Wine', price: '$44.99' }
        ]
      }
    ]
  },
  {
    id: 'flyer-bar-cocktails',
    category: 'bar_cocktails',
    badgeTitle: 'LEISURE & BAR - COCKTAILS',
    subHeader: 'Handcrafted cocktails, fine wines & ice cold shots',
    menu: "./menus/leisureNbar.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80', alt: 'Cocktail Bar' }
    ],
    sections: [
      {
        title: 'COCKTAILS (ALCOHOLICS)',
        items: [
          { name: 'Mojito', price: '$6.00' },
          { name: 'Strawberry Mojito', price: '$6.00' },
          { name: 'Nes Millz', price: '$5.00' },
          { name: 'Pink Countess', price: '$5.00' },
          { name: 'Classic Cosmo', price: '$5.00' },
          { name: 'Sangria (1 Litre)', price: '$10.00' },
          { name: 'Resort Sangria', price: '$11.00' },
          { name: 'Frozen Margarita', price: '$6.00' },
          { name: 'Spiced Margarita', price: '$7.00' },
          { name: 'Sex On The Beach', price: '$6.00' },
          { name: 'Electric Long Island', price: '$7.00' },
          { name: 'Raspberry Gin & Tonic', price: '$5.00' },
          { name: 'Long Island Iced Tea', price: '$8.00' },
          { name: 'Pina Colada', price: '$7.00' },
          { name: 'Strawberry Daiquiri', price: '$7.00' },
          { name: 'Glass Red Wine', price: '$3.00' },
          { name: 'White Wine', price: '$3.00' },
          { name: 'Blue Lagoon', price: '$5.00' }
        ]
      },
      {
        title: 'SHOTS',
        items: [
          { name: 'Jaeger Bomb', price: '$3.00' },
          { name: 'Tequila', price: '$4.00' },
          { name: 'Jameson', price: '$3.00' },
          { name: 'Vodka', price: '$2.00' },
          { name: 'Strettons', price: '$2.00' }
        ]
      }
    ]
  },
  {
    id: 'flyer-bar-drinks',
    category: 'bar_drinks',
    badgeTitle: 'LEISURE & BAR - SHAKES & MOCKTAILS',
    subHeader: 'Rich thick milkshakes & zero-proof refreshing mocktails',
    menu: "./menus/leisureNbar.jpeg",
    images: [
      { url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80', alt: 'Milkshake' },
      { url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80', alt: 'Tropical Mocktail' }
    ],
    sections: [
      {
        title: 'MILKSHAKES',
        items: [
          { name: 'Vanilla (Plain / Double)', price: '$3.00 / $4.00' },
          { name: 'Strawberry (Plain / Double)', price: '$3.00 / $4.00' },
          { name: 'Chocolate (Plain / Double)', price: '$3.00 / $4.00' },
          { name: 'Salted Caramel', price: '$5.00' },
          { name: 'Lime', price: '$3.00' },
          { name: 'Fruto', price: '$5.00' },
          { name: 'Chai Oreo', price: '$5.00' },
          { name: 'Red Velvet', price: '$5.00' },
          { name: 'Espresso Shake', price: '$5.00' },
          { name: 'Don Pedro', price: '$5.00' }
        ]
      },
      {
        title: 'MOCKTAILS (NON ALCOHOLICS)',
        items: [
          { name: 'Malawi Shandy', price: '$3.00' },
          { name: 'Rock Shandy', price: '$3.00' },
          { name: 'Stillworks', price: '$4.00' },
          { name: 'Virgin Mojito', price: '$5.00' },
          { name: 'Virgin Pina Colada', price: '$5.00' },
          { name: 'Virgin Strawberry Daiquiri', price: '$6.00' },
          { name: 'Salted Lime', price: '$4.00' },
          { name: 'Passion Fruit', price: '$4.00' },
          { name: 'Strawberry Mojito', price: '$5.00' }
        ]
      }
    ]
  }
];

export  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },    
    { name: "Our Galary", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  // Container staggers children automatically
export  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };  

  // Each child fades + slides up
export  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  // Slide-in from the right for the featured card
export  const cardVariant = {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };  

 export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: "Bunter's breakfast",
    url: './gallery/bunters-breakfast.jpeg',
    caption: 'Our signature sharing platters with grilled meats, wings, fries and dips.'
  },
  {
    id: 'g2',
    title: 'Leisure Bar Lounge',
    url: './gallery/kkfans1.jpeg',
    caption: 'Cozy, modern dining seating inside Kream n Koffee Masvingo.'
  },
  {
    id: 'g3',
    title: 'Cocktails & Mocktails',
    url: './gallery/cocktail.jpeg',
    caption: 'Refreshing strawberry mojito and signature bar drinks.'
  },
  {
    id: 'g4',
    title: 'Kream Koffee Signature dish',
    url: './gallery/cordon-bleu.jpeg',
    caption: 'Our signature dish'
  },
  {
    id: 'g5',
    title: 'Family time',
    url: './gallery/kkfans5.jpeg',
    caption: 'Bringing joy and happiness to everyone.'
  },
  {
    id: 'g6',
    title: 'Warm refreshing environment',
    url: './gallery/kkfans3.jpeg',
    caption: 'Perfect spot for family dinners, leisure drinks, and romantic evenings.'
  },
  {
    id: 'g7',
    title: 'Chicken Nuggets',
    url: './gallery/chicken-nuggets.jpeg',
    caption: 'Crispy seasoned chicken served hot with potato fries.'
  },
  {
    id: 'g8',
    title: 'Special Treatment',
    url: './gallery/kkentrance.jpeg',
    caption: 'Best in all of Masvingo'
  }
]; 

export const slogan = "Your Daily Dose of Delicious";
export const statement = "Start your day right with our breakfast, fuel your lunch break, or unwind after work with a satisfying supper. We also offer a welcoming ambience for leisure moments. Visit Kream Koffee where good vibes and great food meet"  
