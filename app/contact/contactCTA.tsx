"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="relative py-40 bg-[#020202] overflow-hidden flex flex-col items-center justify-center min-h-[85vh] border-t border-white/5">
      
      {/* --- THE MESMERIZING NEBULA (New 3D Element) --- */}
      <div className="absolute inset-0 pointer-events-none">
         
         {/* Layer 1: Deep Blue/Purple Drift (Slow & Large) */}
         <motion.div
           animate={{ 
             scale: [1, 1.1, 1],
             rotate: [0, 90, 0],
             opacity: [0.3, 0.5, 0.3]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-950 via-purple-950/50 to-transparent blur-[150px] rounded-full mix-blend-screen"
         />

         {/* Layer 2: Deep Teal/Cyan Flow (Medium Speed) */}
         <motion.div
           animate={{ 
             x: [-50, 50, -50],
             y: [-50, 50, -50],
             opacity: [0.2, 0.4, 0.2]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-teal-950 via-cyan-900/30 to-transparent blur-[120px] rounded-full mix-blend-screen"
         />

         {/* Layer 3: Muted Magenta/Red Shift (Slower, different axis) */}
         <motion.div
           animate={{ 
             scale: [1.2, 1, 1.2],
             rotate: [0, -60, 0],
             opacity: [0.2, 0.3, 0.2]
           }}
           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
           className="absolute bottom-1/3 right-1/3 w-[700px] h-[700px] bg-gradient-to-bl from-rose-950/40 via-magenta-950/20 to-transparent blur-[180px] rounded-full mix-blend-screen"
         />
         
         {/* Subtle Vignette to keep edges dark */}
         <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, #020202 70%)" />
      </div>


      {/* --- THE CONTENT OVERLAY --- */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase mb-6"
        >
          Final Step
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif mb-6 text-white drop-shadow-2xl"
        >
          Begin the Shift.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed"
        >
           The next version of you is waiting on the other side of this conversation.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row gap-6 justify-center"
        >
           <Link href="/contact" className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden flex items-center gap-3 hover:bg-[#1a1a1a] hover:text-white transition-all shadow-[0_0_50px_-15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-15px_rgba(168,85,247,0.4)]">
              <span className="relative z-10">Start The Conversation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>

           <button 
             onClick={() => {
               navigator.clipboard.writeText("connect@buoyancee.com");
               // Optional: Add a toast notification here in real app
             }}
             className="px-10 py-5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors flex items-center gap-3 backdrop-blur-md"
           >
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Copy Email</span>
           </button>
        </motion.div>
      </div>

    </section>
  );
};