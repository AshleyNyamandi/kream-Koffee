import { ChevronRight, MapPin, Phone, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { container, item, statement } from "../constants/constants";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/70" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-6"
        >

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight max-w-4xl"
          >
            Kream Koffee{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700">
              Zimbabwe
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-3xl sm:text-2xl text-zinc-200 mt-4 max-w-2xl"
          >
            Your daily dose of delicious
          </motion.p>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            {statement}
          </motion.p>

          {/* Address and Phone Badge */}
          <motion.div
            variants={item}
            className="w-full max-w-xl bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 space-y-2 backdrop-blur-md text-left"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 bg-inherit text-zinc-100 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-zinc-300">
                <strong>Address:</strong> Number 2 Shuvai Mahofa St, Opposite Passport Offices, Masvingo
              </p>
            </div>
            <div className="flex items-center gap-3 pt-1 border-t border-zinc-800/80">
              <Phone className="w-4 h-4 bg-inherit text-zinc-100 shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                +263 787 575 393 &nbsp;|&nbsp; +263 772 979 815
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="pt-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn-primary"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#menu"
              className="btn-secondary"
            >
              <Utensils className="w-4 h-4 text-red-500" />
              <span>Explore Our Menu</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;