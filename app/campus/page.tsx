"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SCHOOL_PROGRAMS = [
  { name: "Busy Bee",  age: "Age 7–10",  desc: "Foundation level — confidence, curiosity, and social bonding through play-based activities." },
  { name: "Blossoms", age: "Age 11–14", desc: "Middle school — self-awareness, peer relationships, and communication breakthroughs." },
  { name: "Beacons",  age: "Age 15–17", desc: "Senior school — identity clarity, leadership seeds, and managing pressure with resilience." },
];

const COLLEGE_PROGRAMS = [
  { name: "MUKTI",                        tag: "Flagship",        desc: "Self-discovery and purpose-mapping for students before they enter the professional world. Experiential and transformational." },
  { name: "Career Planning & Placement",  tag: "Placement Ready", desc: "Interview skills, group discussion, resume presence, and first-impression grooming for campus placements." },
  { name: "Communication Skills",          tag: "Foundations",     desc: "Written, verbal, and non-verbal communication — built for professional environments across all industries." },
  { name: "Leadership Lab",                tag: "Advanced",        desc: "Student leadership councils, college events, and team facilitation skills for emerging campus leaders." },
];

export default function CampusPage() {
  const ref = useRef<HTMLDivElement>(null);
  // THE WHEATISH COLOR
  const wheatColor = "#F5EDDB"; 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".campus-card").forEach((card, i) => {
        gsap.from(card, {
          y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
          delay: (i % 3) * 0.12,
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
    <div ref={ref} className="min-h-screen pt-20 overflow-hidden" style={{ backgroundColor: wheatColor }}>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div className="pill mb-6 inline-block px-4 py-1 border border-[#1A1009]/10 rounded-full text-xs font-bold tracking-widest uppercase" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Campus Programmes
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-end">
          <motion.h1 className="text-5xl md:text-7xl font-black text-[#1A1009] md:w-7/12 leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Growing minds <em className="italic font-normal text-[#C62828]">at every age.</em>
          </motion.h1>
          <motion.p className="text-lg text-[#1A1009]/70 md:w-5/12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Age-sensitive and context-aware campus programmes — designed for the developmental stage of each student, from primary school through college.
          </motion.p>
        </div>
      </section>

      {/* School programmes - Dark section remains high contrast */}
      <section className="bg-[#1A1009] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[#C62828] text-xs font-bold uppercase tracking-widest mb-12">School Programmes</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="campus-card md:col-span-8 bg-[#C62828] rounded-2xl p-10 min-h-[260px] flex flex-col justify-between shadow-xl">
              <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{SCHOOL_PROGRAMS[0].age}</span>
              <div>
                <h3 className="text-white font-black text-3xl mb-3">{SCHOOL_PROGRAMS[0].name}</h3>
                <p className="text-white/80 leading-relaxed">{SCHOOL_PROGRAMS[0].desc}</p>
              </div>
            </div>
            <div className="campus-card md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[260px] flex flex-col justify-between hover:bg-white/10 transition-colors">
              <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{SCHOOL_PROGRAMS[1].age}</span>
              <div>
                <h3 className="text-white font-black text-2xl mb-2">{SCHOOL_PROGRAMS[1].name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{SCHOOL_PROGRAMS[1].desc}</p>
              </div>
            </div>
            <div className="campus-card md:col-span-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 min-h-[140px] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-colors">
              <div className="md:w-3/4">
                <span className="text-white/30 text-xs font-bold uppercase tracking-widest block mb-3">{SCHOOL_PROGRAMS[2].age}</span>
                <h3 className="text-white font-black text-2xl mb-2">{SCHOOL_PROGRAMS[2].name}</h3>
                <p className="text-white/60 text-sm">{SCHOOL_PROGRAMS[2].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College programmes - Now Wheatish */}
      <section className="py-20 md:py-24" style={{ backgroundColor: wheatColor }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[#C62828] text-xs font-bold uppercase tracking-widest mb-12">College Programmes</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="campus-card md:col-span-7 bg-[#C62828] rounded-2xl p-10 min-h-[280px] flex flex-col justify-between shadow-lg">
              <span className="inline-block w-fit px-3 py-1 border border-white/20 bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">{COLLEGE_PROGRAMS[0].tag}</span>
              <div>
                <h3 className="text-white font-black text-3xl mb-3">{COLLEGE_PROGRAMS[0].name}</h3>
                <p className="text-white/80 leading-relaxed">{COLLEGE_PROGRAMS[0].desc}</p>
              </div>
            </div>
            <div className="campus-card md:col-span-5 bg-white border border-[#1A1009]/5 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[#C62828] text-[10px] font-bold uppercase tracking-widest">{COLLEGE_PROGRAMS[1].tag}</span>
              <div>
                <h3 className="text-[#1A1009] font-black text-2xl mb-2">{COLLEGE_PROGRAMS[1].name}</h3>
                <p className="text-[#1A1009]/60 text-sm leading-relaxed">{COLLEGE_PROGRAMS[1].desc}</p>
              </div>
            </div>
            <div className="campus-card md:col-span-5 bg-white border border-[#1A1009]/5 rounded-2xl p-8 min-h-[240px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[#C62828] text-[10px] font-bold uppercase tracking-widest">{COLLEGE_PROGRAMS[2].tag}</span>
              <div>
                <h3 className="text-[#1A1009] font-black text-2xl mb-2">{COLLEGE_PROGRAMS[2].name}</h3>
                <p className="text-[#1A1009]/60 text-sm leading-relaxed">{COLLEGE_PROGRAMS[2].desc}</p>
              </div>
            </div>
            <div className="campus-card md:col-span-7 bg-[#1A1009] rounded-2xl p-10 min-h-[240px] flex flex-col justify-between shadow-xl">
              <span className="text-[#EF5350] text-[10px] font-bold uppercase tracking-widest">{COLLEGE_PROGRAMS[3].tag}</span>
              <div>
                <h3 className="text-white font-black text-3xl mb-3">{COLLEGE_PROGRAMS[3].name}</h3>
                <p className="text-white/70 leading-relaxed">{COLLEGE_PROGRAMS[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C62828] py-20 text-center relative overflow-hidden">
        {/* Subtle texture for the red section */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative z-10">
            <h2 className="text-white font-black text-4xl md:text-5xl mb-6">Bring Buoyancee to your campus.</h2>
            <p className="text-white/80 mb-10 max-w-md mx-auto px-6">Reach out to us to design a custom campus programme for your school or college.</p>
            <Link href="/contact" className="inline-block bg-white text-[#C62828] font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#1A1009] hover:text-white transition-all shadow-lg">
            Enquire Now →
            </Link>
        </div>
      </section>
    </div>
  );
}
