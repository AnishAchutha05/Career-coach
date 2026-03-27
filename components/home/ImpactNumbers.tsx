"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NUMBERS = [
  { value: 50000, suffix: "+", label: "Lives Transformed",    color: "text-[#EF5350]" },
  { value: 450,   suffix: "+", label: "Corporate Clients",    color: "text-white" },
  { value: 30,    suffix: "+", label: "Years of Experience",  color: "text-[#EF5350]" },
  { value: 6,     suffix: "",  label: "Languages Spoken",     color: "text-white" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
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
          if (ref.current) ref.current.textContent = Math.round(Number(ref.current.textContent)).toLocaleString() + suffix;
        },
      }
    );
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function ImpactNumbers() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #1E293B 0%, #0F172A 60%, #1a1f2e 100%)" }}>
      {/* Inward curves top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none z-10">
        <div className="w-full h-24 rounded-b-[100%] -translate-y-1/2" style={{ background: "#FAFAF7" }} />
      </div>
      {/* Inward curves bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none z-10">
        <div className="w-full h-24 rounded-t-[100%] translate-y-1/2" style={{ background: "#FAFAF7" }} />
      </div>

      {/* Accent glow blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C62828]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-sm text-[#EF5350] text-center mb-14"
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
              <div className={`text-4xl md:text-6xl font-black mb-2 ${n.color}`}>
                <Counter value={n.value} suffix={n.suffix} />
              </div>
              <div className="text-white/60 text-xs md:text-sm uppercase tracking-widest font-semibold">
                {n.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
