import React from 'react';

export default function Footer() {
  return (
    <section id="section-footer" className="min-h-screen w-full flex flex-col justify-between pt-32 pb-10 px-[5%] md:px-[10%] relative overflow-hidden bg-transparent">
      
      {/* 1. THE BIG CALL TO ACTION (Magnetic Style) */}
      <div className="flex flex-col items-center text-center z-10">
        <h2 className="text-sm font-mono tracking-[0.4em] text-blue-500 uppercase mb-8 animate-pulse">
          // Ready to dominate the market?
        </h2>
        
        <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="group relative">
          <h3 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none hover:italic transition-all duration-700 cursor-pointer">
            LET'S <span className="text-transparent outline-text group-hover:text-white transition-all">WORK</span> <br /> 
            TOGETHER
          </h3>
          {/* Underline Animation */}
          <div className="w-0 group-hover:w-full h-2 bg-blue-600 transition-all duration-700 mt-4 mx-auto" />
        </a>
      </div>

      {/* 2. THE MULTINATIONAL INFORMATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pb-20 border-b border-white/10 z-10">
        
        {/* Contact Pillar */}
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Direct Contact</h4>
          <ul className="space-y-3 font-medium">
            <li className="hover:text-blue-400 transition-colors cursor-pointer text-lg">aditya.bhakat@email.com</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer text-lg">+91 00000 00000</li>
          </ul>
        </div>

        {/* Services Pillar */}
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Expertise</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition-colors cursor-default">Full-Stack Dev</li>
            <li className="hover:text-white transition-colors cursor-default">UX Psychology</li>
            <li className="hover:text-white transition-colors cursor-default">SEO Authority</li>
            <li className="hover:text-white transition-colors cursor-default">Commerce Engines</li>
            <li className="hover:text-white transition-colors cursor-default">IIT Certified</li>
            <li className="hover:text-white transition-colors cursor-default">Global Standards</li>
          </ul>
        </div>

        {/* Location/Social Pillar */}
        <div className="text-left md:text-right">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Location</h4>
          <p className="text-lg mb-2">Midnapore, West Bengal</p>
          <p className="text-gray-500 text-sm">Operating Globally // 24°N, 87°E</p>
        </div>
      </div>

      {/* 3. THE LEGAL & FINAL FOOTER */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 z-10">
        <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 md:mb-0">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
        </div>
        
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} ADITYA BHAKAT — ALL RIGHTS RESERVED
        </p>
      </div>

      {/* Subtle Styling for the "Outline" text effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}} />
    </section>
  );
}