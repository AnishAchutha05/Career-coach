"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, X, Zap, MessageCircle, Eye, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const symptoms = [
  { title: "The Imposter", desc: "You are successful on paper, but waiting to be 'found out' in person." },
  { title: "The Volcanic", desc: "You react emotionally to pressure instead of responding strategically." },
  { title: "The People Pleaser", desc: "You cannot say 'No' without feeling intense guilt or fear." },
  { title: "The Silenced", desc: "You have brilliant ideas but freeze when it's time to speak up." }
];

const curriculum = [
  {
    title: "Emotional Regulation",
    desc: "Mastering the gap between stimulus and response. Stop reacting, start choosing.",
    icon: <Zap className="w-6 h-6 text-blue-200" />,
    col: "md:col-span-2",
    bg: "bg-gradient-to-br from-blue-950/50 via-[#0a0a0a] to-black border-blue-900/30 hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_50px_-20px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Strategic Communication",
    desc: "Saying less to mean more. The art of high-impact brevity.",
    icon: <MessageCircle className="w-6 h-6 text-emerald-200" />,
    col: "md:col-span-1",
    bg: "bg-gradient-to-br from-emerald-950/50 via-[#0a0a0a] to-black border-emerald-900/30 hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_50px_-20px_rgba(16,185,129,0.3)]"
  },
  {
    title: "Executive Presence",
    desc: "Commanding the room without saying a word. Posture, tone, and energy.",
    icon: <Eye className="w-6 h-6 text-purple-200" />,
    col: "md:col-span-1",
    bg: "bg-gradient-to-br from-purple-950/50 via-[#0a0a0a] to-black border-purple-900/30 hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_50px_-20px_rgba(168,85,247,0.3)]"
  },
  {
    title: "Shadow Work",
    desc: "Uncovering the blind spots and hidden beliefs that sabotage your success.",
    icon: <Brain className="w-6 h-6 text-red-200" />,
    col: "md:col-span-2",
    bg: "bg-gradient-to-br from-red-950/50 via-[#0a0a0a] to-black border-red-900/30 hover:border-red-500/50",
    glow: "group-hover:shadow-[0_0_50px_-20px_rgba(239,68,68,0.3)]"
  }
];

export default function IndividualPage() {
  return (
    <div className="bg-[#030303] min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-28 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Navigation Link - Matches Vision Page Style */}
        <div className="max-w-5xl mx-auto w-full mb-12 md:mb-20">
           <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm tracking-widest uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
           </Link>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-6 block">
              1:1 Executive Coaching
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] mb-10">
              Who are you <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                when the pressure hits?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Skills crumble under stress. Identity does not. <br/>
              We rebuild your internal operating system to handle the weight of leadership.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Start The Upgrade
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE DIAGNOSTIC --- */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-4">System Diagnostics</h2>
            <p className="text-gray-500">Do you recognize these patterns?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {symptoms.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] hover:border-red-900/30 transition-all duration-500 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-red-400 transition-colors">{s.title}</h3>
                  <X className="text-gray-700 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE COLORFUL BENTO GRID --- */}
      <section className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16">
              <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-4 block">The Curriculum</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white">Focus Areas</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {curriculum.map((item, i) => (
                 <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`${item.col} ${item.bg} ${item.glow} p-10 rounded-[2rem] border flex flex-col justify-between min-h-[320px] group transition-all duration-500`}
                 >
                    <div>
                       <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform backdrop-blur-sm">
                          {item.icon}
                       </div>
                       <h3 className="text-3xl font-serif mb-3 text-white">{item.title}</h3>
                       <p className="text-gray-300 leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SECTION 4: THE PROTOCOL --- */}
      <section className="py-40 px-6 bg-[#050505] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
             <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-4 block">The Methodology</span>
             <h2 className="text-4xl md:text-6xl font-serif">The Protocol</h2>
          </div>

          <div className="relative border-l border-white/10 pl-12 md:pl-20 space-y-32">
            <div className="relative">
              <span className="absolute -left-[3.4rem] md:-left-[5.4rem] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-mono text-gray-500">01</span>
              <h3 className="text-3xl font-serif text-white mb-6">Decode.</h3>
              <p className="text-xl text-gray-400 leading-relaxed">We map the hidden beliefs and "glitches" in your current identity.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[3.4rem] md:-left-[5.4rem] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-900/20 border border-purple-500 text-purple-400 flex items-center justify-center text-xs font-mono">02</span>
              <h3 className="text-3xl font-serif text-white mb-6">Reprogram.</h3>
              <p className="text-xl text-gray-400 leading-relaxed">We rewrite the code. Constructing a resilient self-image that doesn't need external validation.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[3.4rem] md:-left-[5.4rem] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-mono text-gray-500">03</span>
              <h3 className="text-3xl font-serif text-white mb-6">Deploy.</h3>
              <p className="text-xl text-gray-400 leading-relaxed">We test your new identity in real-world scenarios—board meetings and high-stakes negotiations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: THE SHIFT --- */}
      <section className="py-32 px-6 bg-[#080808] border-y border-white/5">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif mb-16 text-center">The Identity Shift</h2>
            <div className="grid md:grid-cols-2">
               <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 bg-black/50 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
                  <span className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-8">Legacy OS</span>
                  <ul className="space-y-8">
                     <li className="flex gap-4 text-lg text-gray-400 line-through decoration-red-900/50">"I hope they like me."</li>
                     <li className="flex gap-4 text-lg text-gray-400 line-through decoration-red-900/50">Avoiding conflict to keep peace.</li>
                  </ul>
               </div>
               <div className="p-12 bg-gradient-to-b from-purple-900/5 to-transparent">
                  <span className="block text-xs font-bold tracking-widest uppercase text-purple-400 mb-8">Upgraded OS</span>
                  <ul className="space-y-8">
                     <li className="flex gap-4 text-lg text-white font-serif">"I know my value."</li>
                     <li className="flex gap-4 text-lg text-white font-serif">Navigating conflict to find truth.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 6: THE INVESTMENT --- */}
      <section className="py-32 px-6 bg-black text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Ready to Upgrade?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-bold">
                  View Syllabus
               </button>
               <button className="px-10 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-all font-bold flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={18}/>
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}