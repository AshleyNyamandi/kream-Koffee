const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
                <img
                  src="./gallery/logo.jpeg"
                  alt="Kream Koffee Logo"
                  className="h-10 w-auto object-contain"
                />
            </a>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Passionately Crafting Exceptional Cuisines Since 2023
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.tiktok.com/@kream.n.koffee?_r=1&_t=ZS-9B8kNtYegRF" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="TikTok"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
              </svg>
                
              </a>
              <a href="https://www.instagram.com/kream_n_koffee?obrf=cnN0djg5NnE0eTI2" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Instagram"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              </a>
              <a href="https://www.facebook.com/share/1CG71Eb3SB/?mibextid=wwXIfr" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Facebook"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-red-500 transition-colors">Full Menu</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Contact & Hours</h4>
            <p className="text-xs">Number 2 Shuvai Mahofa St, Opposite Passport Offices, Masvingo</p>
            <p className="text-xs">+263 787 575 393</p>
            <p className="text-xs">+263 772 979 815</p>
            <p className="text-xs text-zinc-500">Mon - Sun: 6:00 AM - 10:00 PM</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Kream Koffee Zimbabwe. All Rights Reserved.</p>
           <a href="https://www.ashleynymd.co.zw" className="hover:text-zinc-400">Website done by <span className="text-blue-500">Ashley</span></a>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;