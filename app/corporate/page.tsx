"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES = [
  { icon: "01", title: "Induction Training",          desc: "First-day-ready programmes that align new hires with company culture, values, and expectations from day one." },
  { icon: "02", title: "Engagement & Retention",      desc: "Motivation and relationship-based programmes that build long-term loyalty and reduce attrition." },
  { icon: "03", title: "Functional Skill Building",   desc: "Communication, presentation, negotiation, and leadership skills delivered through experiential learning." },
  { icon: "04", title: "Senior Leadership Programmes",desc: "Identity-anchored leadership coaching for C-suite and senior managers ready to lead with purpose." },
];

const CLIENTS = [
  "adidas", "Cisco", "Accenture", "Indian Oil Corp.", "Standard Chartered",
  "SBI", "Taj Hotels", "ITC", "Godrej", "Abbott",
];

export default function CorporatePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bento-panel").forEach((panel, i) => {
        gsap.from(panel, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: (i % 4) * 0.1,
          scrollTrigger: {
            trigger: panel,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAFAF7] min-h-screen pt-20 overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div className="pill mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Corporate Solutions
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-end">
          <motion.h1
            className="display-lg text-[#1A1009] md:w-7/12"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Teams that <em className="italic font-normal text-[#C62828]">perform together.</em>
          </motion.h1>
          <motion.p
            className="body-lg md:w-5/12"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Buoyancee partners with organisations across India to build high-performing, emotionally intelligent teams — from new hire induction to senior leadership alignment.
          </motion.p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="section-divider" />
            <h2 className="display-md text-[#1A1009]">
              Four pillars of <em className="italic font-normal text-[#C62828]">corporate excellence</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="bento-panel md:col-span-8 bg-[#C62828] rounded-2xl p-10 min-h-[280px] flex flex-col justify-between">
              <span className="text-white/20 text-5xl font-black">{SERVICES[0].icon}</span>
              <div>
                <h3 className="text-white font-black text-3xl mb-3">{SERVICES[0].title}</h3>
                <p className="text-white/70">{SERVICES[0].desc}</p>
              </div>
            </div>
            <div className="bento-panel md:col-span-4 bg-[#1A1009] rounded-2xl p-8 min-h-[280px] flex flex-col justify-between">
              <span className="text-white/20 text-4xl font-black">{SERVICES[1].icon}</span>
              <div>
                <h3 className="text-white font-black text-2xl mb-2">{SERVICES[1].title}</h3>
                <p className="text-white/65 text-sm">{SERVICES[1].desc}</p>
              </div>
            </div>
            <div className="bento-panel md:col-span-5 bg-[#F5F3EE] rounded-2xl p-8 min-h-[250px] flex flex-col justify-between border border-black/5">
              <span className="text-black/10 text-4xl font-black">{SERVICES[2].icon}</span>
              <div>
                <h3 className="text-[#1A1009] font-black text-2xl mb-2">{SERVICES[2].title}</h3>
                <p className="text-[#7C6B5E] text-sm">{SERVICES[2].desc}</p>
              </div>
            </div>
            <div className="bento-panel md:col-span-7 bg-white rounded-2xl p-10 min-h-[250px] flex flex-col justify-between border border-black/8">
              <span className="text-black/8 text-4xl font-black">{SERVICES[3].icon}</span>
              <div>
                <h3 className="text-[#1A1009] font-black text-3xl mb-3">{SERVICES[3].title}</h3>
                <p className="text-[#7C6B5E]">{SERVICES[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-14 bg-[#1A1009] overflow-hidden">
        <p className="label-sm text-white/30 text-center mb-8">Organisations we&apos;ve worked with</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-0 w-max marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="font-bold text-xl text-white/20 hover:text-[#C62828] transition-colors px-12 whitespace-nowrap cursor-default">{c}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]/30 shrink-0" />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A1009] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1A1009] to-transparent z-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="section-divider mx-auto mb-6" style={{ margin: "0 auto 1.5rem" }} />
          <h2 className="display-md text-[#1A1009] mb-4">Ready to transform your team?</h2>
          <p className="body-lg mb-10">Every corporate engagement is bespoke. Tell us about your organisation and we&apos;ll design the right programme.</p>
          <Link href="/contact" className="btn-red">Get a Proposal →</Link>
        </div>
      </section>
    </div>
  );
}