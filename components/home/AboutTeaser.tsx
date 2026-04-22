"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutTeaser() {
  return (
    <section className="bg-[#F5EDDB] bg-net py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-[#1A1009] rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#C62828] rounded-2xl z-[-1]" />
              <Image
                src="/ajit.jpg"
                alt="Ajit Kaikini — Founder, Buoyancee"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-xl">Ajit Kaikini</p>
                <p className="text-[#EF5350] text-sm font-semibold uppercase tracking-widest">Principal Coach</p>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="absolute -right-4 top-1/3 bg-[#F5EDDB] rounded-2xl shadow-xl px-5 py-4 border border-black/5">
              <p className="text-3xl font-black text-[#C62828]">1992</p>
              <p className="text-xs text-[#7C6B5E] uppercase tracking-widest">Founded</p>
            </div>
          </motion.div>

          {/* Right — Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-divider" />
              <h2 className="display-md text-[#1A1009] mb-6">
                The Architect <br />
                <em className="italic font-normal text-[#C62828]">of Identity.</em>
              </h2>
              <p className="body-lg mb-5">
                Ajit Kaikini was the first chief pharmacist at India&apos;s first high-tech hospital.
                When he saw high-achievers crumbling under pressure, he realised the real gap wasn&apos;t
                in skills — it was in identity.
              </p>
              <p className="body-lg mb-8">
                Buoyancee was born from that realisation. Today, it is India&apos;s most trusted
                identity-first coaching institute — working across languages, industries, and borders.
              </p>

              <blockquote className="border-l-4 border-[#C62828] pl-5 mb-8 py-2">
                <p className="text-[#1A1009] font-serif text-lg leading-relaxed italic">
                  &ldquo;Just like a ball bounces back in water because of its intrinsic qualities, we help 
                  people rediscover and deploy their core self.&rdquo;
                </p>
              </blockquote>

              <Link href="/about" className="btn-outline-red inline-flex items-center gap-2">
                Read the full story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
