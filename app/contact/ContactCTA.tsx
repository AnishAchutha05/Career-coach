"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Copy, Check } from "lucide-react";

export const ContactCTA = () => {
  const [copied, setCopied] = React.useState(false);

  return (
    <section className="relative py-40 bg-[#020202] overflow-hidden flex flex-col items-center justify-center min-h-[80vh] border-t border-white/5">
      
      {/* --- THE VISIBLE NEBULA (Brighter Colors) --- */}
      <div className="absolute inset-0 pointer-events-none">
         
         {/* Layer 1: Indigo/Purple Core (The main glow) */}
         <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             rotate: [0, 45, 0],
             opacity: [0.4, 0.6, 0.4] 
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600 blur-[120px] rounded-full mix-blend-screen opacity-50"
         />

         {/* Layer 2: Cyan/Teal Flow (The movement) */}
         <motion.div
           animate={{ 
             x: [-100, 100, -100],
             y: [-50, 50, -50],
             scale: [1.2, 1, 1.2],
             opacity: [0.3, 0.5, 0.3]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-600 blur-[100px] rounded-full mix-blend-screen opacity-40"
         />

         {/* Layer 3: Magenta Accent (The warmth) */}
         <motion.div
           animate={{ 
             x: [50, -50, 50],
             y: [50, -50, 50],
             opacity: [0.3, 0.5, 0.3]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600 blur-[100px] rounded-full mix-blend-screen opacity-40"
         />
         
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase mb-6"
        >
          System Ready
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif mb-6 text-white drop-shadow-xl"
        >
          Initialize the Shift.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-xl mb-12 max-w-lg mx-auto leading-relaxed"
        >
           The next version of you is waiting on the other side of this conversation.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
           <Link href="/contact" className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden flex items-center gap-3 hover:scale-105 transition-transform">
              <span className="relative z-10">Start The Conversation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>

           <button 
             onClick={() => {
               navigator.clipboard.writeText("connect@buoyancee.com");
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
             }}
             className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3 backdrop-blur-md"
           >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Mail className="w-5 h-5" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
           </button>
        </motion.div>
      </div>

    </section>
  );
};