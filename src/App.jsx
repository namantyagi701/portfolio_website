import React from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import BackgroundNoise from './components/layout/BackgroundNoise';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStrip from './components/sections/TechStrip';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Stats from './components/sections/Stats';
import Experience from './components/sections/Experience';
import MarqueeCTA from './components/sections/MarqueeCTA';
import Footer from './components/sections/Footer';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col font-sans selection:bg-[#d90f1e] selection:text-white">
      {/* Background Ambience & Hairline Vertical Grid Guides */}
      <BackgroundNoise />

      {/* Floating Minimal Navigation Bar */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex-1 w-full">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: About Statement */}
        <About />

        {/* Section 03: Tech Strip */}
        <TechStrip />

        {/* Section 04: Featured Projects */}
        <FeaturedProjects />

        {/* Section 05: Verified Numbers / Stats */}
        <Stats />

        {/* Section 06: Timeline Experience & Education */}
        <Experience />

        {/* Section 07 (Writing skipped: no blog posts in resume) */}

        {/* Section 08: Film Sprocket Marquee CTA */}
        <MarqueeCTA />
      </main>

      {/* Section 09: Footer */}
      <Footer />
    </div>
  );
}
