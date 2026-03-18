import React from 'react';

export default function Pricing() {
  return (
    <section className="h-screen w-full flex items-center px-[10%]">
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold mb-4 text-emerald-400">Clear Pricing. No Surprises.</h2>
        <p className="text-lg text-gray-300 mb-6">
          Let's jump on a call and find the perfect package for your business needs.
        </p>
        <div className="w-full h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <h3 className="text-xl font-bold">Full-Stack Application</h3>
          <p className="text-gray-400 text-sm mt-2">Custom pricing based on scope.</p>
        </div>
      </div>
    </section>
  );
}