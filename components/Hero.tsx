"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex flex-col bg-black">
      
      {/* --- PART 1: THE HOOK --- */}
      <div className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-20">
        
        {/* Responsive Nebula Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <motion.div
             animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[700px] md:h-[700px] bg-indigo-600 blur-[100px] md:blur-[130px] rounded-full mix-blend-screen transform-gpu"
           />
           <motion.div
             animate={{ x: [-50, 50, -50], y: [-30, 30, -30], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-1/4 w-[120vw] h-[120vw] md:w-[550px] md:h-[550px] bg-rose-900 blur-[90px] md:blur-[110px] rounded-full mix-blend-screen transform-gpu"
           />
        </div>

        {/* Content Overlay */}
        <div className="container px-6 mx-auto text-center z-10 w-full flex flex-col justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <span className="px-4 py-2 border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-rose-200 bg-white/5 backdrop-blur-sm text-center">
              Developing Human Excellence
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-medium leading-[1] tracking-tight mb-6 md:mb-8">
            <motion.span 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="block text-white"
            >
              Identity over
            </motion.span>
            <motion.span 
               initial={{ opacity: 0, y: 30 }}
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
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Upgrading the internal operating system of individuals and organizations.
          </motion.p>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 animate-bounce hidden sm:block"
        >
          <ArrowDown className="text-white/20 w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </div>

      
      {/* --- PART 2: THE FOUNDER TEASER --- */}
      {/* ADDED pb-32 so the Navbar doesn't cover the bottom content on mobile! */}
      <div className="min-h-[50vh] py-16 pb-32 md:py-24 md:pb-24 border-t border-white/5 relative overflow-hidden flex items-center bg-black">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Right Text: Placed FIRST on mobile so they read it before seeing the picture */}
          <div className="flex flex-col justify-center text-center md:text-left order-1 md:order-2">
             <h3 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight text-white">
               The Architect <br className="hidden md:block"/> of <span className="text-rose-700 italic">Identity.</span>
             </h3>
             <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
               &quot;We don&apos;t just teach communication; we engineer the internal self.&quot;
             </p>

             {/* THE SLIDE BUTTON */}
             <div className="flex justify-center md:justify-start">
               <Link href="/about" className="group relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-6 md:px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 border border-white/10">
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/10" />
                  </div>
                  <span className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider">
                    Meet Ajit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                  </span>
               </Link>
             </div>
          </div>

          {/* Left Image: Placed SECOND on mobile, locked to a max height of 300px */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[50vh] w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group order-2 md:order-1"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl md:text-2xl group-hover:scale-105 transition-transform duration-700">
               [Founder Photo]
             </div>
             
             <div className="absolute bottom-6 left-6 z-20 text-left">
               <div className="text-white font-serif text-xl">Ajit Kaikini</div>
               <div className="text-rose-400/80 text-[10px] md:text-xs tracking-widest uppercase mt-1">Principal Coach</div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};