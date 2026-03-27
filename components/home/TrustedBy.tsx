"use client";
import React from "react";
import { motion } from "framer-motion";

const CLIENTS = [
  "adidas", "Cisco", "Accenture", "Indian Oil Corp.", "Standard Chartered",
  "SBI", "Taj Hotels", "ITC", "Godrej", "Abbott", "Hindustan Unilever",
  "Wockhardt", "Sun Pharma", "Reliance", "Prestige Group",
];

export function TrustedBy() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 bg-[#F5EDDB] bg-net border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center">
        <p className="label-sm text-[#7C6B5E]">Trusted by India&apos;s leading organisations</p>
      </div>

      {/* Row 1 — left */}
      <div className="relative overflow-hidden mb-3">
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-bold text-lg text-[#1A1009]/20 hover:text-[#C62828] hover:text-opacity-100 transition-all duration-300 cursor-default px-8 whitespace-nowrap">
                {c}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]/30 shrink-0" />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5EDDB] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5EDDB] to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — right (reversed) */}
      <div className="relative overflow-hidden">
        <div className="marquee-track-slow">
          {[...doubled].reverse().map((c, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-bold text-base text-[#1A1009]/12 hover:text-[#C62828] transition-all duration-300 cursor-default px-8 whitespace-nowrap">
                {c}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#1A1009]/15 shrink-0" />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5EDDB] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5EDDB] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
