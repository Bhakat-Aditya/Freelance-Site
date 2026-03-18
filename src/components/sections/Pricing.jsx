import React from 'react';

const PriceCard = ({ tier, title, price, desc, pros, cons, popular }) => (
  <div className={`relative p-8 rounded-3xl border ${popular ? 'border-blue-500/50 bg-white/[0.05]' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-2xl flex flex-col h-full transition-all hover:border-white/30 group`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    <span className="text-blue-400 font-mono text-xs mb-4 uppercase tracking-tighter">{tier}</span>
    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
    <div className="text-3xl font-black mb-6 text-white tracking-tight">{price}</div>
    
    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    
    <div className="space-y-4 pt-6 border-t border-white/10">
      <div>
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Strengths</span>
        <p className="text-xs text-gray-300 leading-snug">{pros}</p>
      </div>
      <div>
        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-1">Limitations</span>
        <p className="text-xs text-gray-500 leading-snug">{cons}</p>
      </div>
    </div>
  </div>
);

export default function Pricing() {
  return (
    // Changed h-screen to min-h-screen and added py-32 for extra breathing room
    <section id="section-pricing" className="min-h-screen w-full py-32 px-[5%] md:px-[10%] flex flex-col justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mb-16 z-10">
        <h2 className="text-sm font-mono tracking-[0.3em] text-blue-500 uppercase mb-4">Strategic Investment</h2>
        <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
          TRANSPARENT <br /> <span className="text-gray-500">PRICING.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 z-10 mb-12">
        <PriceCard 
          tier="01 // BASIC"
          title="Digital Identity"
          price="₹2,500"
          desc="The digital visiting card. A single-page solution featuring shop details and Google Maps integration."
          pros="Most affordable way to establish online trust instantly."
          cons="Static page with limited info; requires tech help for any changes."
        />
        <PriceCard 
          tier="02 // STANDARD"
          title="Business Suite"
          price="₹5,000+"
          desc="Multi-page React application optimized for mobile. Includes Menu/Services and WhatsApp integration."
          
          pros="Highly professional and fast. Gives your brand a corporate edge."
          cons="Static architecture; manual coding required for content updates."
        />
        <PriceCard 
          tier="03 // PREMIUM"
          title="Animated Experience"
          price="₹9,000+"
          popular={true}
          desc="High-end visual storytelling. Elements interact and slide as users scroll through your luxury brand."
          pros="Distinguishes your brand as a market leader with international-tier UI."
          cons="Dependent on our team for updates due to complex animation logic."
        />
        <PriceCard 
          tier="04 // DYNAMIC"
          title="Backend System"
          price="₹14,000+"
          desc="A complete software ecosystem. Includes a private Admin Dashboard to manage your business from your phone."
          pros="Total freedom. Upload photos and change prices instantly with zero tech skills."
          cons="Higher initial investment for complete business automation."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm z-10">
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 opacity-50">Maintenance & Server Policy</h4>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400 text-sm font-light">Basic Plan Hosting</span>
              <span className="text-white text-sm font-bold">₹50/mo</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400 text-sm font-light">Standard/Premium Hosting</span>
              <span className="text-white text-sm font-bold">₹75/mo</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400 text-sm font-light">Backend System Maintenance</span>
              <span className="text-white text-sm font-bold">₹100/mo</span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 leading-relaxed">
          <p className="mb-4">
            <strong className="text-gray-300 uppercase tracking-widest block mb-1 font-bold">Ownership & Support</strong>
            A 30% advance is required to initiate development. All packages include lifetime support for minor text corrections.
          </p>
          <p>
            <strong className="text-gray-300 uppercase tracking-widest block mb-1 font-bold">Manual Updates</strong>
            For non-backend plans, manual updates are billed at ₹5 per photo and ₹8 per video.
          </p>
        </div>
      </div>
    </section>
  );
}