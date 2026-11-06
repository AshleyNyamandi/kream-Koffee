import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { MENU_CATEGORIES } from '../constants/constants';

export function Menu() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  const handleDownload = () => {
    // Triggers direct menu document download
    const link = document.createElement('a');
    link.href = './gallery/KnK Oct 2026 Menu.pdf';
    link.download = './gallery/KnK Oct 2026 Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      {/* Top Header & Download Action Button */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
          Kream Koffee Zimbabwe <span className="text-red-600">Menu</span>
        </h2>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
          Explore our complete food, beverage, traditional, and cocktail offerings below.
        </p>
        
        <div className="pt-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-red-600/30 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Menu</span>
          </button>
        </div>
      </div>

      {/* Accordion Categories Container */}
      <div className="space-y-4">
        {MENU_CATEGORIES.map((category) => {
          const isOpen = openCategoryId === category.id;

          return (
            <div
              key={category.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
            >
              {/* Category Header Button */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs text-zinc-500 font-medium hidden sm:inline-block">
                    {category.items.length} Items
                  </span>
                  <div className={`p-1.5 rounded-full bg-zinc-950 border border-zinc-800 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : 'text-zinc-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </button>

              {/* Accordion Content Body */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-800/60 divide-y divide-zinc-800/40">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="py-4 first:pt-2 last:pb-0 flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                            {item.name}
                          </h4>
                          {item.tag && (
                            <span className="bg-green-600/20 border border-green-500/40 text-zinc-100 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-zinc-400 font-light leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <span className="text-base font-extrabold text-zinc-100 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;