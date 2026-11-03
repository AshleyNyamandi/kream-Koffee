import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";

export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Menu  />
          <AboutUs />
          <Gallery />
          <Contact />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}