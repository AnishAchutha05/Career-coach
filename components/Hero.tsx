"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react"; // Added ArrowRight
import Link from "next/link"; // Added Link import

export const Hero = () => {
  return (
    <section className="relative flex flex-col bg-black">
      
      {/* --- PART 1: THE HOOK (100vh) --- */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* --- THE NEBULA BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
           {/* Primary Indigo Glow */}
           <motion.div
             animate={{ 
               scale: [1, 1.3, 1],
               rotate: [0, 45, 0],
               opacity: [0.3, 0.5, 0.3] 
             }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600 blur-[130px] rounded-full mix-blend-screen transform-gpu"
           />

           {/* Cyan/Teal Movement */}
           <motion.div
             animate={{ 
               x: [-120, 120, -120],
               y: [-60, 60, -60],
               opacity: [0.2, 0.4, 0.2]
             }}
             transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-teal-500 blur-[110px] rounded-full mix-blend-screen transform-gpu"
           />

           {/* Subtle Magenta Pulse */}
           <motion.div
             animate={{ 
               x: [80, -80, 80],
               y: [80, -80, 80],
               opacity: [0.2, 0.3, 0.2]
             }}
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 blur-[110px] rounded-full mix-blend-screen transform-gpu"
           />
        </div>

        {/* --- CONTENT OVERLAY --- */}
        <div className="container px-4 mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <span className="px-5 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-indigo-200 bg-white/5 backdrop-blur-sm">
              Developing Human Excellence
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight mb-8">
            <motion.span 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="block text-white"
            >
              Identity over
            </motion.span>
            <motion.span 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="block italic text-white/40"
            >
              skills.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Upgrading the internal operating system of individuals and organizations.
          </motion.p>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ArrowDown className="text-white/20" />
        </motion.div>
      </div>

      
      {/* --- PART 2: THE FOUNDER TEASER (60vh) --- */}
      <div className="h-[60vh] border-t border-white/5 relative overflow-hidden flex items-center bg-black">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[40vh] w-full max-w-md rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl group-hover:scale-105 transition-transform duration-700">
               {/* Replace with <img src="/ajit.jpg" className="object-cover w-full h-full" /> */}
               [Founder Photo]
             </div>
             
             <div className="absolute bottom-6 left-6 z-20">
               <div className="text-white font-serif text-xl">Ajit Achutha</div>
               <div className="text-white/50 text-xs tracking-widest uppercase">Principal Coach</div>
             </div>
          </motion.div>

          {/* Right: The Intro & Slide Button */}
          <div className="flex flex-col justify-center">
             <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight text-white">
               The Architect <br/> of <span className="text-indigo-400">Identity.</span>
             </h3>
             <p className="text-gray-500 mb-10 max-w-md">
               "We don't just teach communication; we engineer the internal self."
             </p>

             {/* THE SLIDE BUTTON */}
             <div>
               <Link href="/about" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 border border-white/10">
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  <span className="flex items-center gap-2 text-sm uppercase tracking-wider">
                    Meet Ajit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                  </span>
               </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};