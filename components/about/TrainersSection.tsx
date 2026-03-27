"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TRAINERS = [
  {
    name: "Ajit Kaikini",
    title: "Founder & Master Trainer",
    bio: "30+ years of training experience. Former chief pharmacist who turned his passion for human potential into India's premier identity coaching institute. Operates in 6 languages.",
    initial: "A",
    highlight: true,
  },
  {
    name: "Sadhana Kaikini",
    title: "Co-Founder & Coach",
    bio: "Sadhana brings a deep understanding of interpersonal relationships and emotional intelligence to corporate and campus programmes.",
    initial: "S",
    highlight: false,
  },
  {
    name: "Yashwanth KN",
    title: "Senior Trainer",
    bio: "Specialises in youth empowerment, campus life skills, and creating breakthroughs for students entering the professional world.",
    initial: "Y",
    highlight: false,
  },
  {
    name: "Josephine Damiana",
    title: "Trainer & Facilitator",
    bio: "Brings warmth and precision to behavioural change workshops, with a focus on communication and team dynamics.",
    initial: "J",
    highlight: false,
  },
];

export default function TrainersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-pad bg-[#EDE9E0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.div className="pill mb-5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            The Team
          </motion.div>
          <motion.h2
            className="display-md text-[#1A1009]"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The people behind<br />
            <em className="italic text-[#C62828]">every transformation</em>
          </motion.h2>
        </div>

        {/* Asymmetric: featured trainer + 3 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Featured — large card (2 cols) */}
          <motion.div
            className="md:col-span-2 bg-[#C62828] rounded-2xl p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[#B71C1C] opacity-50" />
            <div>
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-white text-2xl font-serif font-bold mb-6">
                {TRAINERS[0].initial}
              </div>
              <h3 className="font-serif text-3xl text-white leading-tight mb-2">{TRAINERS[0].name}</h3>
              <p className="label-sm text-white/50 mb-5">{TRAINERS[0].title}</p>
            </div>
            <p className="text-sm text-white/75 leading-relaxed relative z-10">{TRAINERS[0].bio}</p>
          </motion.div>

          {/* 3 smaller cards (3 cols, each 1 col) */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TRAINERS.slice(1).map((t, i) => (
              <motion.div
                key={t.name}
                className="card-paper p-7 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#C62828]/10 text-[#C62828] flex items-center justify-center font-serif text-lg font-bold mb-4">
                  {t.initial}
                </div>
                <h3 className="font-serif text-xl text-[#1A1009] mb-1">{t.name}</h3>
                <p className="label-sm text-[#C62828] mb-4">{t.title}</p>
                <p className="text-sm text-[#7C6B5E] leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
