import { Award, CheckCircle } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="sectionPadding">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Gallery Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img 
                src="./gallery/banner1.jpeg" 
                alt="kream koffee Zimbawe" 
                className="rounded-2xl border border-zinc-800 shadow-lg object-cover h-64 w-full"
              />
              <img 
                src="./gallery/kkentrance.jpeg" 
                alt="kream koffee Zimbawe"  
                className="rounded-2xl border border-zinc-800 shadow-lg object-cover h-48 w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="./gallery/kkburgers.jpeg" 
                alt="kream koffee Zimbawe burgers"  
                className="rounded-2xl border border-zinc-800 shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="./gallery/logo.jpeg" 
                alt="kream koffee Zimbawe logo" 
                className="rounded-2xl border border-zinc-800 shadow-lg object-cover h-64 w-full"
              />
            </div>
            
            {/* Center Emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-4 shadow-2xl border-4 border-zinc-950 hidden sm:block">
              <Award className="w-8 h-8" />
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="heading-accent">Our Culinary Heritage</span>
            <h2 className="heading-main">Passionately Crafting Exceptional Cuisines Since 2023</h2>

            <p className="text-zinc-300 leading-relaxed">
              At <strong className="text-white">Kream Koffee Zimbabwe</strong>, we believe that dining should be a sensory ritual from sunrise to sunset. Proudly standing as Masvingo’s premier specialty café and restaurant, we blend a modern upscale vibe with local warmth to serve you more than just a meal—we serve an experience.
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm">
              Whether you are stopping by for your morning brew, a casual lunch, or an elegant dinner, we promise unforgettable flavors, a welcoming atmosphere, and unbeatable value.
            </p>

            {/* Value Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Specialty Coffee & Beverages</h4>
                  <p className="text-zinc-500 text-xs">Premium espresso, signature mocktails, and cocktails crafted to perfection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Diverse Culinary Menu</h4>
                  <p className="text-zinc-500 text-xs">From budget-friendly student bites to premium full-course meals.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;