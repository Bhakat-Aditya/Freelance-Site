import React from 'react';
import Scene from './components/3D/Scene';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Footer from './components/sections/Footer';

// A simple component for your black screen wipe transitions
const BlackTransition = ({ id }) => (
  <div id={id} className="h-screen w-full bg-black flex items-center justify-center z-20 relative">
    <div className="w-[2px] h-24 bg-white/20 overflow-hidden">
      <div className="w-full h-1/2 bg-white animate-bounce" />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden font-sans">
      
      {/* THE 3D CANVAS */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Scene />
      </div>

      {/* THE HTML SCROLL CONTENT */}
      <div className="relative z-10 w-full">
        
        {/* 1. Hero (Transparent bg to show 3D Idle) */}
        <div className="bg-transparent h-screen relative">
          <Hero />
        </div>

        {/* --- SWAP TO SERVICES --- */}
        <BlackTransition id="black-screen-1" />

        {/* 2. Services (Transparent bg to show 3D Typing) */}
        <div className="bg-transparent h-screen relative">
          <Services />
        </div>

        {/* --- SWAP TO PRICING --- */}
        <BlackTransition id="black-screen-2" />

        {/* 3. Pricing (Transparent bg to show 3D Phone) */}
        <div className="bg-transparent h-screen relative">
          <Pricing />
        </div>

        {/* --- HIDE ALL MODELS FOR TESTIMONIALS --- */}
        <BlackTransition id="black-screen-3" />

        {/* 4. Text & Video Testimonials (SOLID background to block 3D) */}
        <section className="min-h-screen bg-slate-900 z-20 relative flex items-center justify-center">
          <h2 className="text-4xl">Client Testimonials (No Models Here)</h2>
        </section>
        
        <section className="min-h-screen bg-slate-950 z-20 relative flex items-center justify-center">
          <h2 className="text-4xl">Video Reviews (No Models Here)</h2>
        </section>

        {/* --- SWAP TO FOOTER --- */}
        <BlackTransition id="black-screen-4" />

        {/* 5. Footer (Transparent bg to show 3D Greeting) */}
        <div className="bg-transparent h-screen relative">
          <Footer />
        </div>

      </div>
    </div>
  );
}