import React from 'react';

export default function Footer() {
  return (
    <section className="h-screen w-full flex items-center justify-center text-center px-[10%]">
      <div>
        <h2 className="text-5xl font-bold mb-4">Let's Build Something Great</h2>
        <p className="text-lg text-gray-400 mb-2">Based in Midnapore, West Bengal</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 cursor-pointer rounded-full font-bold transition-all">
          Start a Project
        </button>
      </div>
    </section>
  );
}