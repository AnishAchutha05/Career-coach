"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const values = [
  {
    title: "Empathy First",
    desc: "We don't fix people; we understand them. Transformation starts with being heard."
  },
  {
    title: "Internal Clarity",
    desc: "Confusion breeds stress. We help you clean the lens through which you see the world."
  },
  {
    title: "Behavioral Mastery",
    desc: "Knowing isn't enough. We focus on doing, repeating, and becoming."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
    {/* --- UPDATED NEBULA BACKGROUND --- */}
<div className="fixed inset-0 pointer-events-none z-0">
   <motion.div
     animate={{ 
       scale: [1, 1.2, 1],
       opacity: [0.3, 0.5, 0.3] 
     }}
     transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600 blur-[150px] rounded-full mix-blend-screen transform-gpu"
   />
   <motion.div
     animate={{ 
       x: [-50, 50, -50],
       opacity: [0.2, 0.4, 0.2]
     }}
     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
     className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 blur-[120px] rounded-full mix-blend-screen transform-gpu"
   />
</div>

      <div className="relative z-10">
        {/* --- SECTION 1: THE MANIFESTO HERO --- */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* THE BACK BUTTON */}
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 text-sm tracking-widest uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-9xl font-serif leading-[1.1] mb-12"
            >
              We are architects of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-500 italic font-medium">
                Human Potential.
              </span>
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Buoyancee was founded on a simple truth: <strong>Skills are temporary, but identity is permanent.</strong> 
                Most training programs focus on the external—how to speak, how to manage, how to sell. 
                We focus on the internal—who you are when you speak, manage, and sell.
              </p>
              <div className="flex flex-col justify-end">
                <div className="flex gap-12 border-t border-white/10 pt-8">
                   <div>
                      <span className="block text-4xl font-serif text-white mb-2">15+</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</span>
                   </div>
                   <div>
                      <span className="block text-4xl font-serif text-white mb-2">50k+</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Lives Touched</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE FOUNDER'S DESK --- */}
        <section className="py-32 px-6 bg-black/40 backdrop-blur-md border-y border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
             <div className="relative h-[600px] w-full bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl group-hover:scale-105 transition-transform duration-700">
                  [Ajit Sir Portrait]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                   <h3 className="text-3xl font-serif text-white">Ajit Achutha</h3>
                   <p className="text-indigo-400 text-sm tracking-widest uppercase mt-2">Founder & Principal Coach</p>
                </div>
             </div>

             <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">The Man Behind the Method.</h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Ajit brings a unique blend of corporate sharpness and emotional wisdom. 
                  With decades of experience navigating high-pressure environments, he realized that the 
                  missing link wasn't competence—it was <em>composure</em>.
                </p>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  He built Buoyancee to be a sanctuary where leaders, students, and professionals 
                  could strip away the noise and rebuild their internal operating systems.
                </p>
                <div className="p-8 bg-indigo-500/5 rounded-2xl border border-indigo-500/20 backdrop-blur-xl">
                  <p className="italic text-indigo-100 font-serif text-lg">
                    "My goal isn't just to teach you a skill. It's to help you become the kind of person 
                    for whom that skill is natural."
                  </p>
                </div>
             </div>
          </div>
        </section>

        {/* --- SECTION 3: OUR CORE VALUES --- */}
        <section className="py-32 px-6 bg-transparent">
           <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                 <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our DNA</span>
                 <h2 className="text-4xl md:text-6xl font-serif text-white">What We Stand For</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {values.map((v, i) => (
                   <div key={i} className="p-10 bg-black/60 backdrop-blur-md rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-2xl font-serif mb-4 text-white">{v.title}</h3>
                      <p className="text-gray-500 leading-relaxed font-light">{v.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- SECTION 4: GALLERY STRIP --- */}
        <section className="py-20 bg-black/40 backdrop-blur-md border-t border-white/5">
           <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
              <h2 className="text-3xl font-serif">Life at Buoyancee</h2>
              <Link href="/gallery" className="text-sm text-gray-500 hover:text-white underline underline-offset-4 uppercase tracking-widest">View All</Link>
           </div>
           
           <div className="flex gap-4 px-6 overflow-x-auto pb-10 scrollbar-hide">
              {[1,2,3,4].map((i) => (
                 <div key={i} className="min-w-[300px] h-[400px] bg-neutral-900 rounded-2xl relative flex-shrink-0 border border-white/10 group overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-serif text-xl group-hover:scale-110 transition-transform duration-700">
                       [Workshop Image {i}]
                    </div>
                 </div>
              ))}
           </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}