"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROGRAMS = [
  {
    tag: "Flagship",
    name: "Nurture Your Nature",
    target: "Individual",
    desc: "Discover your dominant personality type, understand blind spots, and align behaviour with your authentic self.",
    href: "/individual",
    colSpan: "md:col-span-7",
    bg: "bg-[#C62828]",
    textLight: true,
  },
  {
    tag: "Corporate",
    name: "Corporate Excellence Series",
    target: "Teams",
    desc: "A modular suite of corporate interventions — from induction to senior leadership alignment.",
    href: "/corporate",
    colSpan: "md:col-span-5",
    bg: "bg-[#1A1009]",
    textLight: true,
  },
  {
    tag: "College",
    name: "MUKTI",
    target: "Campus",
    desc: "Liberation from limiting beliefs. Purpose-mapping before graduation.",
    href: "/campus",
    colSpan: "md:col-span-5",
    bg: "bg-[#F5F3EE]",
    textLight: false,
  },
  {
    tag: "School",
    name: "Busy Bee, Blossoms & Beacons",
    target: "Schools",
    desc: "Age-specific programmes building confidence, social skills, and resilience from foundation up.",
    href: "/campus",
    colSpan: "md:col-span-7",
    bg: "bg-white border border-black/8",
    textLight: false,
  },
];

export function ProgramsGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".program-card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-divider" />
            <h2 className="display-md text-[#1A1009]">
              Programmes for <br />
              <em className="italic font-normal text-[#C62828]">every stage of life.</em>
            </h2>
          </div>
          <Link href="/programs" className="btn-outline shrink-0">
            View all programmes →
          </Link>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {PROGRAMS.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`program-card ${p.colSpan} ${p.bg} rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[260px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`pill text-xs ${p.textLight ? "border-white/20 bg-white/10 text-white" : ""}`}>
                    {p.tag}
                  </span>
                  <span className={`text-xs uppercase tracking-widest font-bold ${p.textLight ? "text-white/40" : "text-[#7C6B5E]"}`}>
                    {p.target}
                  </span>
                </div>
                <h3 className={`font-black text-xl md:text-2xl mb-3 leading-tight ${p.textLight ? "text-white" : "text-[#1A1009]"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm leading-relaxed ${p.textLight ? "text-white/65" : "text-[#7C6B5E]"}`}>
                  {p.desc}
                </p>
              </div>
              <div className={`text-sm font-bold uppercase tracking-widest mt-6 group-hover:gap-3 flex items-center gap-2 transition-all ${p.textLight ? "text-white/70" : "text-[#C62828]"}`}>
                Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
