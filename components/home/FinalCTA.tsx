"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-[#C62828] relative overflow-hidden py-24 md:py-32">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-black/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/70 text-xs uppercase tracking-[0.3em] font-bold mb-5"
        >
          The shift is waiting
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-white font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8"
        >
          Ready to upgrade <br />
          <span className="text-white/60">your identity?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/70 text-lg mb-12 max-w-xl mx-auto"
        >
          Book a discovery session with Ajit. Zero pressure, maximum clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-white text-[#C62828] font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#1A1009] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-xl"
          >
            Book a Session →
          </Link>
          <Link
            href="/programs"
            className="bg-transparent border-2 border-white/40 text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Explore Programmes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
