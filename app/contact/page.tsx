"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Copy, Check, Send, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ContactCTA } from "./ContactCTA"; // <-- BROUGHT THIS BACK!

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle, loading, success

  const email = "connect@buoyancee.com"; // Replace with your actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate network request
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <div className="bg-[#050505] min-h-[100dvh] text-white selection:bg-rose-900 selection:text-white flex flex-col">
      <Navbar />

      {/* --- RED/MAROON PREMIUM GLOWS --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <motion.div 
           animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute top-0 right-0 w-[150vw] md:w-[800px] h-[150vw] md:h-[800px] bg-rose-900/20 blur-[120px] rounded-full mix-blend-screen translate-x-1/4 -translate-y-1/4" 
         />
         <motion.div 
           animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.2, 1] }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute bottom-0 left-0 w-[150vw] md:w-[600px] h-[150vw] md:h-[600px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen -translate-x-1/4 translate-y-1/4" 
         />
      </div>

      <main className="flex-grow relative z-10 pt-32 pb-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-[0.2em] uppercase mb-12 md:mb-20 group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* --- LEFT: THE HOOK & INFO --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                Initialize the <br/>
                <span className="text-rose-700 italic">Shift.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-md font-light leading-relaxed">
                The next version of you, your team, or your institution is waiting on the other side of this conversation.
              </p>

              {/* PREMIUM COPY EMAIL COMPONENT */}
              <div className="mb-16">
                 <div className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase mb-6">Direct Line</div>
                 
                 <button 
                    onClick={handleCopy}
                    className="group relative w-full md:w-auto flex items-center justify-between gap-8 p-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden"
                 >
                    <div className="flex items-center gap-4 pl-2">
                       <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-rose-200">
                          <Mail size={16} />
                       </div>
                       <span className="text-sm md:text-base font-serif tracking-wide text-white pr-4">{email}</span>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border-l border-white/10">
                       <AnimatePresence mode="wait">
                          {copied ? (
                             <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-green-400">
                                <Check size={16} />
                             </motion.div>
                          ) : (
                             <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                <Copy size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-8 border-t border-white/10 pt-8">
                 <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-rose-400 transition-colors group">
                    <Linkedin size={18} /> <span className="text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">LinkedIn</span>
                 </Link>
                 <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-rose-400 transition-colors group">
                    <Instagram size={18} /> <span className="text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">Instagram</span>
                 </Link>
              </div>
            </motion.div>


            {/* --- RIGHT: THE MINIMALIST FORM --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 bg-[#0a0a0a]/50 p-6 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden backdrop-blur-xl"
            >
               {/* Loading/Success Overlay */}
               <AnimatePresence>
                  {formState === "success" && (
                     <motion.div 
                       initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
                       animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                       className="absolute inset-0 z-20 bg-[#0a0a0a]/90 flex flex-col items-center justify-center text-center p-12"
                     >
                        <motion.div 
                           initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
                           className="w-24 h-24 rounded-full bg-rose-900/20 border border-rose-500/30 flex items-center justify-center text-rose-500 mb-8"
                        >
                           <Check size={40} />
                        </motion.div>
                        <h3 className="text-4xl font-serif mb-4 text-white">Transmission Received.</h3>
                        <p className="text-gray-400 mb-8">Ajit or a member of the team will be in touch shortly.</p>
                        <button 
                           onClick={() => setFormState("idle")} 
                           className="px-8 py-3 rounded-full border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                        >
                           Send Another
                        </button>
                     </motion.div>
                  )}
               </AnimatePresence>

               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Full Name</label>
                        <input type="text" placeholder="John Doe" required className="w-full bg-transparent border-b border-white/10 p-2 text-white placeholder:text-white/20 focus:outline-none focus:border-rose-500 transition-colors text-lg" />
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Email Address</label>
                        <input type="email" placeholder="john@company.com" required className="w-full bg-transparent border-b border-white/10 p-2 text-white placeholder:text-white/20 focus:outline-none focus:border-rose-500 transition-colors text-lg" />
                     </div>
                  </div>

                  <div className="space-y-4 pt-4">
                     <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Area of Focus</label>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["Individual", "Corporate", "Campus", "Other"].map((interest) => (
                           <label key={interest} className="cursor-pointer">
                              <input type="radio" name="interest" className="peer sr-only" required />
                              <div className="p-3 md:p-4 text-center rounded-2xl border border-white/5 bg-white/5 text-gray-400 text-xs md:text-sm hover:bg-white/10 peer-checked:bg-rose-900/40 peer-checked:border-rose-500/50 peer-checked:text-white transition-all">
                                 {interest}
                              </div>
                           </label>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-3 pt-4">
                     <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">The Objective</label>
                     <textarea rows={4} placeholder="Briefly describe what you're looking to achieve..." required className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-white placeholder:text-white/20 focus:outline-none focus:border-rose-500 focus:bg-white/10 transition-colors resize-none text-base md:text-lg" />
                  </div>

                  <div className="pt-4">
                     <button 
                       disabled={formState === "loading"}
                       type="submit" 
                       className="w-full py-5 rounded-full bg-white text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                     >
                       {formState === "loading" ? "Transmitting..." : (
                          <>Send Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
                       )}
                     </button>
                  </div>

               </form>
            </motion.div>

          </div>
        </div>
      </main>
      
      {/* --- BROUGHT THIS BACK --- */}
      <ContactCTA />
    </div>
  );
}