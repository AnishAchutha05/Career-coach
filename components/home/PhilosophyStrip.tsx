"use client";
import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  { number: "01", title: "Identity First",    desc: "We believe sustainable excellence starts with knowing who you are — not just what you do." },
  { number: "02", title: "Inside-Out",        desc: "External skills crumble under pressure. Internal rewiring creates lasting transformation." },
  { number: "03", title: "Experiential",      desc: "Insight happens through doing, not just listening. Every session is hands-on and felt." },
];

export function PhilosophyStrip() {
  return (
    <section className="bg-[#EFE3CA] bg-net py-20 md:py-28 relative overflow-hidden">
      {/* Large decorative character */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[20rem] font-black text-black/[0.025] select-none pointer-events-none leading-none">
        B
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="section-divider" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-md text-[#1A1009] mb-5"
            >
              The Buoyancee Philosophy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-lg"
            >
              Three principles that have guided 30 years of transformational work across India and beyond.
            </motion.p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-[#F5EDDB] rounded-2xl p-7 border border-black/5 shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black text-[#C62828]/20 mb-4 group-hover:text-[#C62828]/40 transition-colors">{p.number}</div>
                <h3 className="text-lg font-bold text-[#1A1009] mb-2">{p.title}</h3>
                <p className="text-sm text-[#7C6B5E] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
