import React from 'react';

const ServiceBox = ({ number, title, desc, stack }) => (
  <div className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full">
    <span className="text-blue-500 font-mono text-sm mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">
      // 0{number}
    </span>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-500 uppercase tracking-widest font-bold">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="section-services" className="min-h-screen w-full py-32 px-[5%] md:px-[10%] flex flex-col justify-center relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        EXPERT
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">
        <div>
          <h2 className="text-sm font-mono tracking-[0.3em] text-blue-500 uppercase mb-4">Core Capabilities</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            TECHNICAL <br /> <span className="text-gray-500">PROWESS.</span>
          </h3>
        </div>
        <p className="text-gray-400 text-lg border-l-2 border-blue-600 pl-8 leading-relaxed max-w-md">
          Combining IIT Roorkee-certified engineering with a focus on high-performance web architecture and conversion psychology.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ServiceBox 
          number="1"
          title="MERN Systems"
          desc="Engineering scalable backend architectures and real-time database management systems for complex platforms."
          stack={['Node.js', 'Express', 'MongoDB', 'MySQL']}
        />
        <ServiceBox 
          number="2"
          title="Premium UX"
          desc="Crafting immersive, Awards-level frontend experiences with complex motion design and seamless interactivity."
          stack={['React', 'Next.js', 'GSAP', 'TypeScript']}
        />
        <ServiceBox 
          number="3"
          title="Commerce Flow"
          desc="Building secure, automated booking and e-commerce systems with integrated payment gateways."
          stack={['Stripe', 'Paypal', 'Auth', 'APIs']}
        />
        <ServiceBox 
          number="4"
          title="Performance"
          desc="Optimizing core web vitals and SEO architecture to ensure global-standard speed and search dominance."
          stack={['Vite', 'Vercel', 'Tailwind', 'Lighthouse']}
        />
      </div>
    </section>
  );
}