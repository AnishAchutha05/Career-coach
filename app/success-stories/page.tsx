"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote, Star, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const metrics = [
  { label: "Individual Shifts", value: "12,000+", icon: <Users size={20}/> },
  { label: "Corporate Projects", value: "450+", icon: <TrendingUp size={20}/> },
  { label: "Global Locations", value: "12", icon: <Star size={20}/> }
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-violet-500">
+

      {/* --- VIOLET NEBULA BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <motion.div
           animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-violet-600 blur-[150px] rounded-full mix-blend-screen transform-gpu"
         />
         <motion.div
           animate={{ x: [-50, 50, -50], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-900 blur-[130px] rounded-full mix-blend-screen transform-gpu"
         />
      </div>

      <div className="relative z-10">
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm tracking-widest uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-9xl font-serif mb-16"
            >
              The <span className="italic text-violet-400">Evidence.</span>
            </motion.h1>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-32">
               {metrics.map((m, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                     <div className="text-violet-400 mb-4">{m.icon}</div>
                     <div className="text-4xl font-serif mb-1">{m.value}</div>
                     <div className="text-xs uppercase tracking-widest text-gray-500">{m.label}</div>
                  </div>
               ))}
            </div>

            {/* Featured Transformation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-serif">
                     [High-Res Workshop Action Shot]
                  </div>
               </div>
               <div className="space-y-8">
                  <Quote className="text-violet-500 w-12 h-12 opacity-50" />
                  <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                    &quot;The shift in my leadership team wasn&apos;t just visible; it was measurable.&quot;
                  </h2>
                  <p className="text-xl text-gray-400 font-light">
                    How we helped a Fortune 500 tech lead reduce team churn by 40% in six months through Identity-First coaching.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                     <div className="text-lg font-serif">VP of Engineering</div>
                     <div className="text-sm text-gray-500 uppercase tracking-widest">Global Logistics Giant</div>
                  </div>
               </div>
            </div>

            {/* Logo Wall */}
            <div className="py-20 border-y border-white/5 text-center">
               <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-600 block mb-12">Trusted Partners</span>
               <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
                  {["Google", "Amazon", "Wipro", "Infosys", "Dell", "Airtel"].map((l) => (
                     <span key={l} className="text-2xl font-serif hover:opacity-100 transition-opacity cursor-default">{l}</span>
                  ))}
               </div>
            </div>

            {/* Image Gallery Slot */}
            <div className="py-32">
               <h3 className="text-2xl font-serif mb-12">Visual Records</h3>
               <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                     <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5"
                     >
                        <div className="aspect-[4/5] flex items-center justify-center text-white/5 italic">
                           Gallery Item {i}
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Final Success CTA */}
        <section className="py-40 text-center bg-[#050505]">
           <div className="max-w-2xl mx-auto px-6">
              <Award className="w-16 h-16 text-violet-500 mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Your story is next.</h2>
              <Link href="/contact" className="inline-block px-12 py-5 bg-violet-600 text-white rounded-full font-bold text-lg hover:bg-violet-500 transition-all">
                 Define Your Transformation
              </Link>
           </div>
        </section>

      </div>
    </div>
  );
}