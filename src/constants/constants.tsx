import { Award, Cake, Coffee, Flame, GlassWater, Leaf, Sparkles, Utensils } from "lucide-react";
import type { GalleryItem, MenuCategory } from "..";

export const categories = [
      { id: 'all', label: 'All Items' },
      { id: 'coffee', label: 'Koffee & Brews' },
      { id: 'drinks', label: 'Cold Beverages' },
      { id: 'desserts', label: 'Kream & Desserts' },
      { id: 'mains', label: 'Artisanal Mains' },
      { id: 'bakery', label: 'Bakery & Breakfast' },
    ];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Koffee & Hot Beverages',
    subtitle: 'Freshly roasted espresso, artisanal brews & specialty teas',
    icon: <Coffee className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Filter Coffee', price: '$2.00', description: 'Classic slow-brewed house dark roast.' },
      { name: 'Americano', price: '$2.00', description: 'Rich double espresso diluted with hot water.' },
      { name: 'Cappuccino', price: '$3.00', description: 'Espresso, steamed milk, and silky foam finish.', tag: 'Bestseller' },
      { name: 'Red Cappuccino', price: '$3.00', description: 'Naturally caffeine-free rooibos espresso topped with foam.' },
      { name: 'Babyccino', price: '$4.00', description: 'Warm frothed milk with a dusting of cocoa powder.' },
      { name: 'Grande Cappuccino', price: '$4.00', description: 'Extra large classic cappuccino.' },
      { name: 'Mochaccino', price: '$5.00', description: 'Espresso blended with rich cocoa and textured milk.' },
      { name: 'Double Espresso', price: '$4.00', description: 'Intense double shot of pure roasted Arabica.' },
      { name: 'Irish Coffee', price: '$6.00', description: 'Hot coffee, Irish whiskey, sugar, topped with whipped cream.' },
      { name: 'Iced Coffee', price: '$7.00', description: 'Chilled espresso over ice with milk and vanilla syrup.' },
      { name: 'Caffè Latte', price: '$6.00', description: 'Smooth espresso with abundant silky steamed milk.' },
      { name: 'Dirty Chai', price: '$5.00', description: 'Spiced chai tea infused with a bold shot of espresso.' },
      { name: 'Cafe Bombon', price: '$5.00', description: 'Layered espresso and sweetened condensed milk.' },
      { name: 'Hot Chocolate', price: '$5.00', description: 'Melted Belgian chocolate in steamed whole milk.' },
      { name: 'Rooibos / Tanganda Tea', price: '$1.00', description: 'Freshly brewed fine local tea.' },
      { name: 'Steamy Lemon Water', price: '$1.00', description: 'Hot water infused with fresh lemon.' },
      { name: 'Concussion', price: '$3.00', description: 'Signature spice-infused house warm brew.' },
      { name: 'Green Tea', price: '$2.00', description: 'Pure antioxidant-rich green tea leaves.' }
    ]
  },
  {
    id: 'breakfast',
    title: 'Breakfast Selection',
    subtitle: 'Served fresh every morning to power your day',
    icon: <Utensils className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Full English Breakfast', price: '$15.00', description: '2 Eggs, bacon, beef/pork sausage, potato fries, baked beans, mushroom, yogurt, fruits, cereals & toast served with tea.', tag: 'Signature' },
      { name: 'Basic Breakfast', price: '$5.00', description: '1 Egg, toast, 1 sausage, baked beans served with a cup of tea.' },
      { name: 'Bunters Breakfast', price: '$7.00', description: '1 Egg, 1 sausage, chicken stir fry, fries & toast served with tea.' },
      { name: 'Farmhouse Breakfast', price: '$10.00', description: '2 Eggs, 1 sausage, beef stir fry or chicken livers, bacon, fries & toast served with tea.' },
      { name: 'Vegetable Omelette with Toast', price: '$2.00', description: 'Fluffy eggs folded with diced fresh garden vegetables.' },
      { name: 'Cheese Omelette', price: '$3.00', description: 'Melted cheddar cheese stuffed inside fluffy eggs.' },
      { name: 'Tomato Omelette with Toast', price: '$2.00', description: 'Freshly sliced tomato omelette served with toast.' },
      { name: 'Ham Omelette', price: '$5.00', description: 'Savory ham and folded egg omelette.' }
    ]
  },
  {
    id: 'mains',
    title: 'Lunch & Dinner Mains',
    subtitle: 'Hearty entrees, gourmet burgers, pasta & flame-grilled steaks',
    icon: <Flame className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Spaghetti Bolognese', price: '$6.00', description: 'Classic minced beef ragù tossed with al dente spaghetti.' },
      { name: 'Beef Stew', price: '$5.00', description: 'Tender slow-cooked beef chuck in rich gravy.' },
      { name: 'Chicken Wings (BBQ / Peri-Peri)', price: '$6.99', description: 'Crispy fried wings tossed in your choice of sauce.' },
      { name: 'Dunked Wings', price: '$7.99', description: 'Generously dipped wings in signature sticky glaze.' },
      { name: 'Roadrunner Chicken Stew', price: '$8.00', description: 'Authentic free-range indigenous chicken stew.' },
      { name: 'Whole Bream', price: '$10.00', description: 'Fresh pan-fried or grilled Kariba bream.' },
      { name: 'Fish Fillet', price: '$12.00', description: 'Pan-seared white fish fillet with lemon butter.' },
      { name: 'Mac & Cheese', price: '$7.00', description: 'Creamy three-cheese baked macaroni.' },
      { name: 'Chicken Schnitzel', price: '$12.00', description: 'Crispy breaded chicken breast fillet.' },
      { name: 'Beef Stroganoff "Alfredo"', price: '$10.00', description: 'Sliced tender beef sautéed with mushrooms in garlic cream sauce.' },
      { name: 'Quarter Chicken & Chips', price: '$6.99', description: 'Flame-grilled quarter chicken (Barbecue, Peri-Peri, or Lemon & Herb).', tag: 'Popular' },
      { name: 'T-Bone Steak', price: '$12.00', description: 'Aged 300g T-Bone steak grilled to perfection.' },
      { name: 'Rump Steak', price: '$10.00', description: 'Juicy tender rump steak served with your choice of starch.' },
      { name: 'Pork Ribs', price: '$12.00', description: 'Slow-roasted sticky glaze pork ribs.' },
      { name: 'Beef Burger & Chips', price: '$4.00', description: 'Pure beef patty, lettuce, tomato & house burger sauce.' },
      { name: 'Chicken Burger & Chips', price: '$6.00', description: 'Crispy chicken breast fillet burger with seasoned fries.' },
      { name: 'Deluxe Burger + Chips & Free Drink', price: '$9.00', description: 'Double stack burger with cheese, bacon, fries & cold drink.', tag: 'Best Value' },
      { name: 'Shawarma & Chips', price: '$6.00', description: 'Wrapped seasoned meat strips, fresh salad & garlic sauce.' }
    ]
  },
  {
    id: 'traditional',
    title: 'Traditional Zimbabwean Meals',
    subtitle: 'Authentic local heritage dishes served with sadza or rice',
    icon: <Award className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Sadza & Cow Heels (Zondo)', price: '$15.00', description: 'Slow-simmered traditional cow heels (Available on booking).', tag: 'Specialty' },
      { name: 'Sadza & Goat Heels (Zondo)', price: '$10.00', description: 'Tender goat heels served with hot sadza.' },
      { name: 'Sadza & Spiderwisp (Nyevhe)', price: '$4.00', description: 'Traditional seasonal indigenous leafy greens.' },
      { name: 'Sadza & Pumpkin Leaves (Muboora)', price: '$4.00', description: 'Fresh pumpkin leaves cooked with peanut butter sauce.' },
      { name: 'Traditional Mushroom & Rapoko Sadza', price: '$4.00', description: 'Wild local mushrooms paired with finger millet sadza.' },
      { name: 'Roadrunner & Rapoko Sadza or White Rice', price: '$8.00', description: 'Indigenous free-range chicken served with rapoko sadza.', tag: 'Local Favorite' },
      { name: 'Turkey & Peanut Rice or Rapoko Sadza', price: '$10.00', description: 'Succulent roasted turkey with rich peanut butter rice.' },
      { name: 'Offal (Goat / Beef)', price: '$8.00', description: 'Slow-cooked traditional mixed offal stew.' },
      { name: 'Sadza & Peanut Veggies', price: '$3.00', description: 'Fresh green vegetables simmered in creamy peanut sauce.' }
    ]
  },
  {
    id: 'vegan',
    title: 'Vegan & Vegetarian Dishes',
    subtitle: 'Wholesome plant-based meals prepared with fresh ingredients',
    icon: <Leaf className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Crudités & Dipping Sauce', price: '$5.00', description: 'Striped baby marrows, cucumber, lettuce, carrots, cherry tomatoes & onions.' },
      { name: 'Classic Zucchini Pasta', price: '$6.00', description: 'Zucchini ribbons, sun-dried tomatoes, olive oil with spaghetti & lemon juice.' },
      { name: 'Plain Mac \'n\' Cheese', price: '$6.00', description: 'Macaroni pasta dipped in a rich creamy white cheese sauce.' },
      { name: 'Vegan Bunters Breakfast', price: '$8.00', description: 'Toasted bread, fried egg, chips, fresh crudités & baked beans.' },
      { name: 'Classic Mushroom Pasta', price: '$7.00', description: 'Chopped mushrooms in a rich creamy white sauce over spaghetti or macaroni.' },
      { name: 'Roasted Veg Quinoa Bowl with Avocado', price: '$8.00', description: 'Roasted sweet potatoes, carrots, garlic, cinnamon & fresh avocado.', tag: 'Healthy' },
      { name: 'Tabbouleh Salad', price: '$6.00', description: 'Fresh green salad with bulgur, parsley, tomato & celery dressing.' },
      { name: 'Cheese and Garlic Focaccia', price: '$6.00', description: 'Freshly baked pizza base topped with garlic & melted cheese.' }
    ]
  },
  {
    id: 'starters_desserts',
    title: 'Starters, Sandwiches & Desserts',
    subtitle: 'Soups, fresh toasted sandwiches & sweet treats',
    icon: <Cake className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Mushroom Soup', price: '$4.00', description: 'Rich cream of wild mushroom served warm.' },
      { name: 'Butternut Soup', price: '$4.00', description: 'Smooth roasted butternut soup with spices.' },
      { name: 'Chicken Soup', price: '$4.00', description: 'Clear broth chicken soup with shredded chicken.' },
      { name: 'Scotched Egg', price: '$3.00', description: 'Hard-boiled egg wrapped in sausage meat and breadcrumbs.' },
      { name: 'Club Sandwich', price: '$4.00', description: 'Triple decker toast with chicken, egg, lettuce & mayo.' },
      { name: 'Chicken Mayo Sandwich', price: '$4.00', description: 'Shredded chicken mixed with mayonnaise on toasted bread.' },
      { name: 'Fruit Salad & Yoghurt', price: '$4.00', description: 'Seasonal fresh fruit chunks topped with vanilla yogurt.' },
      { name: 'Cake Slice', price: '$4.00', description: 'Slice of our freshly baked daily cake.' },
      { name: 'Custard Tarts', price: '$4.00', description: 'Golden pastry shells filled with rich vanilla custard.' }
    ]
  },
  {
    id: 'confectionary',
    title: 'Confectionary & Bakery',
    subtitle: 'Daily baked savory pies, pastries & artisan cakes',
    icon: <Sparkles className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Steaky or Beefy Pies', price: '$2.00', description: 'Golden flaky pastry filled with rich seasoned minced beef.' },
      { name: 'Samosas (X2)', price: '$1.00', description: 'Crispy fried pastry triangles filled with spiced beef or veggies.' },
      { name: 'Fresh Scones (X2)', price: '$1.00', description: 'Classic buttery baked scones served with butter.' },
      { name: 'Sausage Rolls', price: '$1.00', description: 'Savory sausage meat rolled in flaky puff pastry.' },
      { name: 'Carrot Cake Slice', price: '$4.00', description: 'Moist spiced carrot cake topped with cream cheese frosting.', tag: 'Sweet' },
      { name: 'Fruity Cake Slice', price: '$5.00', description: 'Rich fruit sponge cake loaded with dried fruits.' },
      { name: 'Cheese Slice', price: '$6.00', description: 'Decadent baked cheese slice.' }
    ]
  },
  {
    id: 'bar',
    title: 'Leisure, Bar & Drinks',
    subtitle: 'Signature cocktails, shots, milkshakes & cold refreshments',
    icon: <GlassWater className="w-5 h-5 text-red-500" />,
    items: [
      { name: 'Classic Mojito', price: '$6.00', description: 'White rum, fresh mint leaves, lime juice, soda water.' },
      { name: 'Strawberry Mojito', price: '$6.00', description: 'Fresh strawberry puree, mint, lime & white rum.' },
      { name: 'Red Velvet Milkshake', price: '$5.00', description: 'Thick gourmet red velvet cake ice kream shake.', tag: 'Popular' },
      { name: 'Salted Caramel Milkshake', price: '$5.00', description: 'Creamy vanilla ice kream with salted caramel drizzle.' },
      { name: 'Virgin Pina Colada (Non-Alcoholic)', price: '$5.00', description: 'Blended pineapple juice and rich coconut cream.' },
      { name: 'Virgin Strawberry Daiquiri', price: '$6.00', description: 'Frozen blended strawberries, lime & sugar syrup.' },
      { name: 'Jaeger Bomb Shot', price: '$5.00', description: 'Jägermeister dropped into energy drink.' },
      { name: 'Sangria (1 Litre Jug)', price: '$10.00', description: 'Red wine jug infused with fresh sliced fruits & brandy.' }
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
