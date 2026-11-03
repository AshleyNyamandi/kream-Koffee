import { Sparkles, Utensils } from "lucide-react";
import { useState } from "react";
import { FLYER_BOARDS } from "../constants/constants";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredBoards = activeCategory === 'all' 
    ? FLYER_BOARDS 
    : FLYER_BOARDS.filter(b => b.category === activeCategory);

  const categoryTabs = [
    { id: 'all', label: 'All' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'starters', label: 'Starters & Desserts' },
    { id: 'mains', label: 'Lunch & Dinner' },
    { id: 'platters', label: 'Platters & Specials' },
    { id: 'bar_cocktails', label: 'Bar: Cocktails' },
    { id: 'bar_drinks', label: 'Bar: Shakes & Mocktails' },
  ];

  return (
    <section id="menu" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="section-padding">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="heading-accent">Official Masvingo Menu</span>
          <h2 className="heading-main">Kream Koffee Menu Boards</h2>
          <p className="heading-sub">
            Directly digitized from our restaurant flyer boards. Browse exact prices, breakfast sets, sharing platters, and bar drinks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-zinc-900/60 p-2 rounded-2xl border border-zinc-800">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === tab.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Display Digitized Flyer Boards */}
        <div className="space-y-16">
          {filteredBoards.map((board) => (
            <div 
              key={board.id}
              className="bg-zinc-900/90 border-2 border-zinc-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl backdrop-blur-md"
            >
              {/* Header Chalk/Grunge Style matching flyer */}
              <div className="border-b-2 border-zinc-800 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <div className="inline-block bg-zinc-950 border border-zinc-700 px-3 py-1 rounded-md mb-2">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      KREAM KOFFEE ZIMBABWE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-wider uppercase">
                    MENU: <span className="text-red-500">{board.badgeTitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">{board.subHeader}</p>
                </div>
                
                <a 
                  href={board.menu}
                  download={board.menu}
                  className="flex items-center gap-2 bg-zinc-950 border border-zinc-700 text-zinc-100 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer hover:border-zinc-100 hover:scale-101 transition-all duration-200">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span>Download Menu</span>
                </a>
              </div>

              {/* Main Board Layout: Items on Left, Flyer Photo Collage on Right */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Menu Text Content (Left Column) */}
                <div className="lg:col-span-8 space-y-8">
                  {board.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-sm font-bold text-red-500 tracking-wider uppercase border-b border-zinc-800 pb-1.5 flex items-center gap-2">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>{section.title}</span>
                      </h4>
                      <div className="divide-y divide-zinc-800/50">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="py-2.5 flex justify-between items-start gap-4 hover:bg-zinc-800/30 px-2 rounded-lg transition-colors">
                            <div className="space-y-0.5">
                              <span className="text-sm font-semibold text-zinc-100 block">
                                {item.name}
                              </span>
                              {item.desc && (
                                <p className="text-xs text-zinc-400 leading-snug">{item.desc}</p>
                              )}
                            </div>
                            <span className="text-sm font-bold text-zinc-100 font-mono shrink-0">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photos matching flyer style (Right Column) */}
                <div className="lg:col-span-4 space-y-4">
                  {board.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="rounded-2xl overflow-hidden border border-zinc-800 shadow-md group relative">
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-zinc-800">
                        {img.alt}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Flyer Footer Stamp */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-500 gap-2">
                <span>📍 Number 2 Shuvai Mahofa St, Opposite Passport Offices, Masvingo</span>
                <span className="font-mono">📞 +263 787 575 393 / +263 788 114 205</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;