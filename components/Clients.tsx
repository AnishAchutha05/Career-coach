"use client";
import React from "react";

const clients = [
  "Google", "Microsoft", "Infosys", "Wipro", "Accenture", "Unilever"
];

export const Clients = () => {
  return (
    <section className="pb-28 border-t border-white/5 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-10">
          Trusted by leading organizations
        </p>
        
        {/* Simple Flex Grid for Logos */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <span key={i} className="text-2xl md:text-3xl font-serif text-white/40 hover:text-white transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};