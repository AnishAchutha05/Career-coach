"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PROGRAMS = [
  {
    id: "nyn", tag: "Individual", title: "Nurture Your Nature",
    subtitle: "Personality-based personal development",
    desc: "This flagship programme is built on the insight that every person has a dominant personality type. Nurture Your Nature helps individuals discover their type, understand their blind spots, and align their behaviour with their authentic self.",
    outcomes: ["Self-awareness and identity clarity", "Emotional regulation techniques", "Personal leadership skills", "Meaningful goal setting"],
    dark: true,
  },
  {
    id: "nyn-teams", tag: "Teams", title: "Nurture Your Nature — Team Edition",
    subtitle: "Behavioural alignment in groups",
    desc: "The same methodology adapted for intact teams. Maps personality types across the team, reveals friction points, and creates shared language for better collaboration.",
    outcomes: ["Team personality mapping", "Conflict resolution frameworks", "Shared identity and purpose", "Communication style alignment"],
    dark: false,
  },
  {
    id: "corporate-ex", tag: "Corporate", title: "Corporate Excellence Series",
    subtitle: "End-to-end enterprise transformation",
    desc: "A modular series of trainings spanning Induction, Engagement, Functional Skills, and Leadership — each custom-designed for the organisation and its specific cultural context.",
    outcomes: ["Onboarding excellence", "Leadership pipeline building", "Functional communication skills", "Culture transformation"],
    dark: true,
  },
  {
    id: "sankalp", tag: "College", title: "SANKALP",
    subtitle: "From confusion to confident decision-making",
    desc: "SANKALP is a structured framework designed to facilitate both personal and professional growth through a disciplined, purposeful approach to life and work. Built on three core pillars — Awareness, Alignment, and Advancement — it bridges the gap between mere effort and meaningful results.",
    outcomes: ["Self-awareness and identity clarity", "Aligning daily actions with purpose", "Structured advancement toward goals", "Confident career decision-making"],
    dark: false,
  },
  {
    id: "school", tag: "School", title: "Busy Bee, Blossoms & Beacons",
    subtitle: "Age-banded school programmes",
    desc: "Three age-specific programmes that meet students where they are developmentally — building confidence, social skills, and emotional resilience from foundation through senior school.",
    outcomes: ["Age-appropriate facilitation", "Confidence and curiosity building", "Peer relationship skills", "Resilience and identity seeds"],
    dark: true,
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[#F5EDDB] bg-net max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <motion.div className="pill mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>All Programmes</motion.div>
        <motion.h1 className="display-lg text-[#1A1009] max-w-2xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Every programme, <br />
          <em className="italic font-normal text-[#C62828]">one philosophy.</em>
        </motion.h1>
        <motion.p className="body-lg mt-5 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          From school corridors to boardrooms — Buoyancee&apos;s methodology remains constant: unlock intrinsic potential, build identity, and transform behaviour from the inside out.
        </motion.p>
      </section>

      {/* Program sections */}
      {PROGRAMS.map((p, i) => (
        <section key={p.id} id={p.id} className={`py-16 md:py-24 ${p.dark ? "bg-[#1A1009]" : "bg-[#F5EDDB] bg-net"}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-last" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="label-sm block mb-4 text-[#C62828]">{p.tag}</span>
                <h2 className={`font-black text-3xl md:text-4xl leading-tight mb-3 ${p.dark ? "text-white" : "text-[#1A1009]"}`}>{p.title}</h2>
                <p className="font-semibold mb-5 text-sm text-[#C62828]">{p.subtitle}</p>
                <p className={`text-sm leading-relaxed mb-8 ${p.dark ? "text-white/65" : "text-[#7C6B5E]"}`}>{p.desc}</p>
                <Link href="/contact" className={p.dark ? "btn-red" : "btn-outline-red"}>
                  Enquire About This Programme →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className={`rounded-2xl p-8 border ${p.dark ? "bg-white/5 border-white/8" : "bg-[#EFE3CA] border-black/8"}`}>
                  <p className="label-sm mb-5">Programme Outcomes</p>
                  <ul className="space-y-3.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C62828] mt-2 shrink-0" />
                        <span className={`text-sm leading-relaxed ${p.dark ? "text-white/70" : "text-[#3D2B1F]"}`}>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#C62828] py-20 text-center">
        <h2 className="text-white font-black text-4xl md:text-5xl mb-6">Not sure where to start?</h2>
        <p className="text-white/70 mb-10 max-w-md mx-auto">Share your context and we&apos;ll recommend the programme that fits your needs best.</p>
        <Link href="/contact" className="bg-white text-[#C62828] font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#1A1009] hover:text-white transition-all">
          Talk to Us →
        </Link>
      </section>
    </div>
  );
}
