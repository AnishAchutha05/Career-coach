"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Roadmap data ─────────────────────────────────── */
const ROADMAP = [
  {
    year: "1978",
    title: "The Seed",
    desc: "The dream of Buoyancee was sown in Oman, where Ajit observed the chasm between formal education and lived human potential.",
    milestone: "Vision born",
  },
  {
    year: "1982",
    title: "The Pharmacist's Insight",
    desc: "As India's first chief pharmacist at the country's first high-tech hospital, Ajit watched high-achievers crumble under pressure — and understood why: a skills gap was never the real problem.",
    milestone: "Root cause identified",
  },
  {
    year: "1992",
    title: "Buoyancee Founded",
    desc: "Founded in Bengaluru in a small room with a large vision: treat personality as a programmable operating system. The first cohorts changed lives immediately.",
    milestone: "Company launch",
  },
  {
    year: "1998",
    title: "First Corporate Mandate",
    desc: "Buoyancee's first Fortune 500 engagement validated the corporate training model. Word spread without a single advertisement.",
    milestone: "Corporate entry",
  },
  {
    year: "2005",
    title: "The NYN Method",
    desc: "Nurture Your Nature was formalised — a rigorous personality-first coaching framework now used by thousands of individuals and teams.",
    milestone: "Flagship programme",
  },
  {
    year: "2012",
    title: "Pan-India Scale",
    desc: "Buoyancee expanded across 6 languages, reaching organisations in technology, pharma, banking, FMCG, and manufacturing sectors.",
    milestone: "National reach",
  },
  {
    year: "2018",
    title: "Campus & Schools",
    desc: "Identity-first work extended to youth. Campus and school programmes (Busy Bee, Blossoms, Beacons) launched across Karnataka.",
    milestone: "Youth extension",
  },
  {
    year: "Today",
    title: "The Legacy Continues",
    desc: "50,000+ lives transformed. 450+ corporate clients. 6 languages. The mission remains the same: unlock the intrinsic qualities every human is born with.",
    milestone: "Living legacy",
  },
];

const AWARDS = [
  "Asian Age", "The Hindu", "Indian Express", "Economic Times",
  "Deccan Herald", "Times of India — Best Training Company",
  "National Award for Excellence in Training",
];

/* ── Roadmap Component ───────────────────────────────── */
function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".roadmap-node").forEach((node, i) => {
        const isLeft = i % 2 === 0;
        gsap.from(node, {
          x: isLeft ? -60 : 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".roadmap-year").forEach((el) => {
        gsap.from(el, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C62828]/25 rounded-full -translate-x-1/2 hidden md:block"
        style={{ transformOrigin: "top center" }}
      />

      <div className="space-y-8 md:space-y-0">
        {ROADMAP.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={item.year}
              className={`roadmap-node relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:mb-14 ${
                isLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className={`w-full md:w-[44%] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                <div className="card-paper p-6 md:p-8 group hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="pill text-[0.6rem]">{item.milestone}</span>
                  </div>
                  <h3 className="font-bold text-[#2D1B1B] text-xl mb-2">{item.title}</h3>
                  <p className="text-[#7C6B5E] text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 w-8 h-0.5 bg-[#C62828]/30 group-hover:w-16 group-hover:bg-[#C62828] transition-all duration-500 rounded-full" />
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center justify-center w-[12%] relative">
                <div className="roadmap-year relative">
                  <div className="absolute inset-0 rounded-full bg-[#C62828]/20 roadmap-dot-ping" />
                  <div className="relative w-12 h-12 rounded-full bg-white border-2 border-[#C62828] flex items-center justify-center shadow-lg z-10">
                    <span className="text-[#C62828] font-black text-[10px] leading-tight text-center">{item.year}</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-[44%]" />

              <div className="md:hidden flex items-center gap-3 -mt-2">
                <div className="w-2 h-2 rounded-full bg-[#C62828] shrink-0" />
                <span className="text-[#C62828] font-black text-xs uppercase tracking-widest">{item.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Full Page ────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-[#F5EDDB] min-h-screen overflow-x-hidden">

      {/* ── VIDEO HERO ──────────────────────────── */}
      <section className="relative w-full bg-[#0F172A] overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/YJXhXd_NQHA?autoplay=1&mute=1&loop=1&playlist=YJXhXd_NQHA&controls=0&modestbranding=1&rel=0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ border: "none", pointerEvents: "none", width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/50 to-[#0F172A] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 pb-20 flex flex-col justify-end h-full" style={{ minHeight: "70vh" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pill mb-5 border-white/20 bg-white/8 text-white"
          >
            The Founder&apos;s Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="display-lg text-white max-w-2xl mb-5"
          >
            Not an org.<br />
            <em className="italic font-normal text-[#EF5350]">A calling.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 max-w-xl text-base md:text-lg mb-8"
          >
            Ajit Kaikini left a career in healthcare to answer a deeper question: why do educated, talented people still crumble? The answer became Buoyancee.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/contact" className="btn-red">Work with Ajit →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ────────────────────── */}
      <section className="bg-[#F5EDDB] bg-net py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="section-divider mx-auto mb-8" style={{ margin: "0 auto 2rem" }} />
          <blockquote className="font-serif text-2xl md:text-3xl text-[#2D1B1B] leading-snug mb-5 italic">
            &ldquo;Just like a ball bounces back in water because of its intrinsic qualities, we help people rediscover and deploy their core self.&rdquo;
          </blockquote>
          <p className="text-[#C62828] label-sm">The Buoyancee Philosophy — Ajit Kaikini</p>
        </div>
      </section>

      {/* ── ROADMAP JOURNEY ─────────────────────── */}
      <section className="bg-[#F5EDDB] bg-net py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className="label-sm mb-3">The Journey</p>
            <h2 className="display-md text-[#2D1B1B]">
              Thirty years. <em className="italic font-normal text-[#C62828]">One mission.</em>
            </h2>
          </div>
          <Roadmap />
        </div>
      </section>

      {/* ── AWARDS ──────────────────────────────── */}
      <section className="bg-[#F5EDDB] bg-net py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="section-divider" />
              <h2 className="display-md text-[#2D1B1B]">
                Covered by<br />
                <em className="italic font-normal text-[#C62828]">India&apos;s finest.</em>
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {AWARDS.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="card-paper p-5 flex items-start gap-3"
                >
                  <div className="w-1 min-h-[1.5rem] h-full bg-[#C62828] rounded-full shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#2D1B1B] leading-tight">{a}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="bg-[#C62828] bg-net-dark py-20 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-white/60 label-sm mb-4">Start the conversation</p>
          <h2 className="text-white font-black text-4xl md:text-5xl mb-8">Work with Ajit directly.</h2>
          <Link href="/contact" className="bg-white text-[#C62828] font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#0F172A] hover:text-white transition-all">
            Book a Session →
          </Link>
        </div>
      </section>

    </div>
  );
}
