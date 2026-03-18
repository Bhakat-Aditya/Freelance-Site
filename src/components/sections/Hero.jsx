import React from 'react';

export default function Hero() {
  return (
    // Added overflow-hidden to kill the hero scrollbar
    <section id="section-hero" className="h-screen w-full flex items-center px-[5%] md:px-[10%] relative overflow-hidden bg-transparent">
      
      {/* 1. LAYERED DECORATIVE TEXT */}
      <div className="absolute top-[10%] left-[-5%] text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none z-0">
        ADITYA
      </div>

      <div className="max-w-4xl z-10 relative">
        {/* 2. THE STATUS INDICATOR */}
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
            IIT Roorkee Certified // MERN Stack Specialist
          </span>
        </div>
        
        {/* 3. HEADING */}
        <h1 className="text-5xl md:text-[7vw] font-black mb-6 leading-[0.95] tracking-tighter text-white">
          CRAFTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-500 bg-[length:200%_auto] animate-gradient italic">
            DIGITAL ASSETS
          </span>
        </h1>
        
        {/* 4. COPY */}
        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light mb-10">
          Bridging the gap between <span className="text-white">business logic</span> and 
          <span className="text-white"> technical innovation</span>. Engineering 
          high-performance MERN solutions for global brands.
        </p>

        {/* 5. BUTTONS */}
        <div className="flex flex-wrap gap-6 mb-16">
          <button className="px-8 py-3 bg-white text-black font-black rounded-full hover:scale-105 transition-all duration-500 cursor-pointer text-xs tracking-widest uppercase">
            Start a Project
          </button>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 transition-colors">
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-blue-500" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 group-hover:text-white">
              Explore Services
            </span>
          </div>
        </div>

        {/* 6. CORNER STATS - Integrated into the main flow for mobile safety */}
        <div className="flex gap-12 border-t border-white/5 pt-8">
          <div>
            <div className="text-xl font-bold text-white uppercase tracking-tighter">MERN Stack</div>
            <div className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Core Architecture</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white uppercase tracking-tighter">IIT Certified</div>
            <div className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Technical Authority</div>
          </div>
        </div>
      </div>
    </section>
  );
}