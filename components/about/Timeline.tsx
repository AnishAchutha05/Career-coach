"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MILESTONES = [
  { year: "1978", title: "The Seed", desc: "Concept of Buoyancy conceived in Oman while witnessing youth struggling with identity and enterprise." },
  { year: "1983", title: "First Experiments", desc: "Trial and error, research and development — the philosophy crystallised across discussions and early trainings." },
  { year: "1992", title: "Bangalore Launch", desc: "Buoyancy officially founded in January 1992 — India's first dedicated identity coaching institute." },
  { year: "1993", title: "First Corporate Client", desc: "Breakthrough into corporate training with the first enterprise engagement." },
  { year: "1995", title: "Multi-City Expansion", desc: "Programmes extended beyond Bangalore to other Indian cities." },
  { year: "2000", title: "Campus Programmes", desc: "Expansion into schools and colleges — the Busy Bee, Blossoms, and Beacons trilogy launched." },
  { year: "2005", title: "Multilingual Reach", desc: "Training delivered across 6 languages to deepen impact in vernacular communities." },
  { year: "2012", title: "SANKALP Launched", desc: "Innovative college programme SANKALP — guiding students from confusion to clarity through Awareness, Alignment, and Advancement." },
  { year: "2018", title: "Press Recognition", desc: "Featured in Asian Age, The Hindu, Indian Express, Economic Times, and Deccan Herald." },
  { year: "2024", title: "Still Growing", desc: "More than 50,000 lives touched. The mission continues — one identity at a time." },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Line drawing effect using ScrollTrigger scrub
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // Fade in each milestone as it enters viewport
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 parallax-header">
          <motion.div className="pill mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our History
          </motion.div>
          <motion.h2
            className="display-md text-white"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Four decades of{" "}
            <em className="italic text-accent">building people</em>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2 origin-top"
          />

          {MILESTONES.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={m.year}
                className={`timeline-item relative flex items-start mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row w-full`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-4 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(245,166,35,0.6)] z-10" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 glass-panel p-6 ${
                    isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="font-sans font-bold text-accent/50 text-4xl leading-none block mb-3">{m.year}</span>
                  <h3 className="font-sans font-bold text-2xl text-white mb-3">{m.title}</h3>
                  <p className="text-base text-white/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
