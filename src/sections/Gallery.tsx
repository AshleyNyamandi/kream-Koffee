import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../constants/constants";
import { useRef } from "react";

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-zinc-900/50 py-24 border-t border-zinc-800">
      <div className="section-padding">
        
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <span className="heading-accent">Visual Experience</span>
          <h2 className="heading-main">View Our Gallery</h2>
          <p className="heading-sub">
            Take a peak inside Kream n Koffee, from our warm dining lounge and signature platters to hand-crafted beverages.
          </p>
        </div>

        {/* Photo Slider */}
        <div className="relative">
          {/* Left fade + arrow */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-zinc-950 to-transparent z-10 rounded-l-2xl" />
          <button
            onClick={() => scrollBy("left")}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/90 hover:bg-red-600 border border-zinc-700 hover:border-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right fade + arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-zinc-950 to-transparent z-10 rounded-r-2xl" />
          <button
            onClick={() => scrollBy("right")}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/90 hover:bg-red-600 border border-zinc-700 hover:border-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            <div className="flex gap-6 w-max">
              {GALLERY_ITEMS.map((photo) => (
                <div 
                  key={photo.id}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300 hover:border-red-600/50 hover:shadow-xl w-72 flex-shrink-0"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      draggable={false}
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-white font-serif">{photo.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;