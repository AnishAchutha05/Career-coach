"use client";
import React from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    text: "Buoyancee didn't just teach me communication — they rewired how I see myself. I'm a completely different leader now.",
    author: "Rajesh K.",
    role: "VP, Tech Mahindra",
    initial: "R",
  },
  {
    text: "The emotional intelligence module is a game-changer. My team's ability to handle conflict has improved 10x.",
    author: "Sarah Jenkins",
    role: "Director, StartUp Inc",
    initial: "S",
  },
  {
    text: "I was skeptical about identity coaching. But Ajit's method goes deeper than anything I've encountered — including my MBA.",
    author: "Vikram S.",
    role: "Entrepreneur",
    initial: "V",
  },
  {
    text: "Finally, a programme that focuses on the human behind the professional. Transformational. Highly recommended.",
    author: "Ananya M.",
    role: "HR Head",
    initial: "A",
  },
  {
    text: "The shift in my leadership team was not just visible — it was immediately measurable in our quarterly results.",
    author: "Priya R.",
    role: "VP Engineering, Global Tech Co.",
    initial: "P",
  },
];

export function TestimonialsSection() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-20 md:py-28 bg-[#1A1009] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-14 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-sm text-[#C62828] mb-3"
        >
          Voices of change
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-md text-white"
        >
          What our clients say
        </motion.h2>
      </div>

      {/* Infinite scroll container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-5 w-max marquee-track">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-[340px] md:w-[400px] shrink-0 bg-white/5 border border-white/8 rounded-2xl p-7 flex flex-col justify-between hover:bg-white/8 hover:border-[#C62828]/30 transition-all duration-300"
            >
              <p className="text-white/80 text-base leading-relaxed font-light mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#C62828] flex items-center justify-center text-white font-black text-sm shrink-0">
                  {r.initial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{r.author}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fade */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#1A1009] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#1A1009] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
