"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Copy, Check, Mail, Send, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ContactCTA } from "./ContactCTA";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle, loading, success

  const email = "connect@buoyancee.com"; // REPLACE with real email

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
    <div className="bg-[#030303] min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* --- BACKGROUND GLOW --- */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20">
          
          {/* --- LEFT: INFO & COPY EMAIL --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase mb-12">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Let's start the <br/>
              <span className="text-purple-400">conversation.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Ready to upgrade your identity, your team, or your institution? The journey begins here.
            </p>

            {/* THE COPY EMAIL COMPONENT */}
            <div className="mb-12">
               <div className="text-xs font-bold tracking-widest text-gray-600 uppercase mb-4">Direct Email</div>
               <button 
                  onClick={handleCopy}
                  className="group flex items-center gap-6 p-6 pr-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all w-full md:w-auto"
               >
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                     <Mail size={20} />
                  </div>
                  <div className="flex-grow text-left">
                     <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Click to Copy</div>
                     <div className="text-xl md:text-2xl font-serif text-white">{email}</div>
                  </div>
                  <div className="relative">
                     <AnimatePresence>
                        {copied ? (
                           <motion.div 
                             initial={{ scale: 0 }} 
                             animate={{ scale: 1 }} 
                             exit={{ scale: 0 }}
                             className="absolute inset-0 flex items-center justify-center text-green-400"
                           >
                              <Check />
                           </motion.div>
                        ) : (
                           <motion.div 
                             initial={{ scale: 0 }} 
                             animate={{ scale: 1 }} 
                             exit={{ scale: 0 }}
                           >
                              <Copy className="text-gray-500 group-hover:text-white transition-colors" />
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
               <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={20} /> <span className="text-sm uppercase tracking-wider">LinkedIn</span>
               </Link>
               <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                  <Instagram size={20} /> <span className="text-sm uppercase tracking-wider">Instagram</span>
               </Link>
            </div>
          </motion.div>


          {/* --- RIGHT: THE INTELLIGENT FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden"
          >
             {/* Loading/Success Overlay */}
             <AnimatePresence>
                {formState === "success" && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                     className="absolute inset-0 z-20 bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-12"
                   >
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                         <Check size={40} />
                      </div>
                      <h3 className="text-3xl font-serif mb-2">Message Sent</h3>
                      <p className="text-gray-500">We'll be in touch shortly.</p>
                      <button onClick={() => setFormState("idle")} className="mt-8 text-sm underline text-gray-400 hover:text-white">Send another</button>
                   </motion.div>
                )}
             </AnimatePresence>

             <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Your Name</label>
                   <input type="text" placeholder="John Doe" required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                   <input type="email" placeholder="john@company.com" required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">I am interested in</label>
                   <div className="grid grid-cols-2 gap-3">
                      <label className="cursor-pointer">
                         <input type="radio" name="interest" className="peer sr-only" />
                         <div className="p-3 text-center rounded-lg border border-white/10 bg-black/30 text-gray-500 text-sm hover:bg-white/5 peer-checked:bg-purple-900/20 peer-checked:border-purple-500 peer-checked:text-white transition-all">
                            Coaching
                         </div>
                      </label>
                      <label className="cursor-pointer">
                         <input type="radio" name="interest" className="peer sr-only" />
                         <div className="p-3 text-center rounded-lg border border-white/10 bg-black/30 text-gray-500 text-sm hover:bg-white/5 peer-checked:bg-purple-900/20 peer-checked:border-purple-500 peer-checked:text-white transition-all">
                            Corporate
                         </div>
                      </label>
                      <label className="cursor-pointer">
                         <input type="radio" name="interest" className="peer sr-only" />
                         <div className="p-3 text-center rounded-lg border border-white/10 bg-black/30 text-gray-500 text-sm hover:bg-white/5 peer-checked:bg-purple-900/20 peer-checked:border-purple-500 peer-checked:text-white transition-all">
                            University
                         </div>
                      </label>
                      <label className="cursor-pointer">
                         <input type="radio" name="interest" className="peer sr-only" />
                         <div className="p-3 text-center rounded-lg border border-white/10 bg-black/30 text-gray-500 text-sm hover:bg-white/5 peer-checked:bg-purple-900/20 peer-checked:border-purple-500 peer-checked:text-white transition-all">
                            Other
                         </div>
                      </label>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                   <textarea rows={4} placeholder="Tell us about your goals..." required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors resize-none" />
                </div>

                <button 
                  disabled={formState === "loading"}
                  type="submit" 
                  className="w-full py-5 bg-white text-black font-bold rounded-xl hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? "Sending..." : (
                     <>Send Message <Send size={18} /></>
                  )}
                </button>

             </form>
          </motion.div>

        </div>
      </div>
      
      <ContactCTA />
    </div>
  );
}