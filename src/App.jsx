import React from 'react';
import Scene from './components/3D/Scene';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative w-full bg-slate-900 text-white overflow-x-hidden font-sans">
      
      {/* 3D CANVAS: Fixed in the background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Scene />
      </div>

      {/* HTML UI: Cleanly imported sections scrolling on top */}
      <div className="relative z-10 w-full">
        <Hero />
        <Services />
        <Pricing />
        <Footer />
      </div>
      
    </div>
  );
}