"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NUMBERS = [
  { value: 500000, display: "5L", suffix: "+", label: "Lives Transformed",    color: "text-[#EF5350]" },
  { value: 450,                   suffix: "+", label: "Corporate Clients",    color: "text-white" },
  { value: 30,                    suffix: "+", label: "Years of Experience",  color: "text-[#EF5350]" },
  { value: 6,                     suffix: "",  label: "Languages Spoken",     color: "text-white" },
];

function Counter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    // If a display override is set, just show it instantly — no animation
    if (display) {
      ref.current.textContent = display + suffix;
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ref.current,
      { textContent: "0" },
      {
        textContent: value,
        duration: 2.2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate() {
          if (ref.current) {
            const currentVal = Math.round(Number(ref.current.textContent));
            ref.current.textContent = currentVal.toLocaleString() + suffix;
          }
        },
      }
    );
  }, [inView, value, suffix, display]);

  return <span ref={ref}>0{suffix}</span>;
}

export function ImpactNumbers() {
  // WHEATISH COLOR DEFINITION
  const wheatColor = "#F5EDDB"; // A sophisticated, warm wheat/cream hex

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #1E293B 0%, #0F172A 60%, #1a1f2e 100%)" }}>
      
      {/* Inward curves top - Now Wheatish */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none z-10">
        <div className="w-full h-24 rounded-b-[100%] -translate-y-1/2" style={{ background: wheatColor }} />
      </div>

      {/* Inward curves bottom - Now Wheatish */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none z-10">
        <div className="w-full h-24 rounded-t-[100%] translate-y-1/2" style={{ background: wheatColor }} />
      </div>

      {/* Accent glow blobs - subtle adjustment to keep the heat warm */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EF5350]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#EF5350] text-center mb-14 text-xs font-bold uppercase tracking-[0.2em]"
        >
          The numbers that matter
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {NUMBERS.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="text-center md:px-8"
            >
              <div className={`text-4xl md:text-6xl font-black mb-2 tracking-tight ${n.color}`}>
                <Counter value={n.value} suffix={n.suffix} display={(n as any).display} />
              </div>
              <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold">
                {n.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
