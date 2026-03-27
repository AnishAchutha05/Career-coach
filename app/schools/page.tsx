"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Rocket, Users, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const stats = [
  { label: "Placement Rate", value: "+40%" },
  { label: "Student Confidence", value: "9/10" },
  { label: "Universities Partnered", value: "25+" }
];

const modules = [
  {
    title: "The Interview Hack",
    desc: "Psychological tricks to own the room. It's not about the 'right' answer; it's about the right delivery.",
    icon: <Mic className="w-6 h-6 text-green-400" />
  },
  {
    title: "Campus to Corporate",
    desc: "Bridging the gap between academic theory and professional reality. Email etiquette, meeting protocols, and hierarchy.",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Group Discussion Mastery",
    desc: "How to lead without dominating. The art of active listening and strategic intervention.",
    icon: <Users className="w-6 h-6 text-emerald-400" />
  }
];

export default function SchoolsPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-green-500 selection:text-black">
+

      {/* --- SHARED NEBULA BACKGROUND (Green/Teal Theme) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             rotate: [0, 90, 0],
             opacity: [0.2, 0.4, 0.2] 
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600 blur-[130px] rounded-full mix-blend-screen transform-gpu"
         />
         <motion.div
           animate={{ 
             x: [-100, 100, -100],
             y: [-50, 50, -50],
             opacity: [0.2, 0.3, 0.2]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600 blur-[110px] rounded-full mix-blend-screen transform-gpu"
         />
      </div>

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
          <div className="max-w-7xl mx-auto w-full mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm tracking-widest uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>

          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
              <span className="text-green-400 font-mono text-xs tracking-widest uppercase mb-6 block">
                For Universities & Students
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                Don&apos;t just graduate. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-cyan-500 font-medium">
                  Launch.
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
                Technical skills get you the interview. Personality gets you the job. We build the &quot;Human Skills&quot; that engineering and MBA degrees often miss.
              </p>
              <div className="flex gap-4">
                 <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-green-500 hover:text-black transition-all shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                   Partner with Us
                 </button>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
            >
               <div className="p-10 rounded-[2rem] bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-green-900/5 group-hover:bg-green-900/10 transition-colors" />
                  <GraduationCap className="w-16 h-16 text-white mb-8" />
                  <div className="grid grid-cols-2 gap-8">
                     {stats.map((s, i) => (
                       <div key={i}>
                          <div className="text-4xl font-serif text-white mb-2">{s.value}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: THE GAP --- */}
        <section className="py-32 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-16">The Employability Gap</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-8 border-l border-white/10 text-left hover:bg-white/5 transition-colors">
                    <span className="text-5xl font-serif text-gray-700 block mb-6">01</span>
                    <h3 className="text-xl text-white mb-4">Technical Overload</h3>
                    <p className="text-gray-500">Students are coding wizards but struggle to articulate their ideas in a boardroom.</p>
                 </div>
                 <div className="p-8 border-l border-white/10 text-left hover:bg-white/5 transition-colors">
                    <span className="text-5xl font-serif text-gray-700 block mb-6">02</span>
                    <h3 className="text-xl text-white mb-4">Fear of Rejection</h3>
                    <p className="text-gray-500">Paralyzing anxiety during interviews leads to blanking out, despite knowing the answers.</p>
                 </div>
                 <div className="p-8 border-l border-white/10 text-left hover:bg-white/5 transition-colors">
                    <span className="text-5xl font-serif text-gray-700 block mb-6">03</span>
                    <h3 className="text-xl text-white mb-4">Identity Crisis</h3>
                    <p className="text-gray-500">Entering the corporate world without a strong sense of self leads to fast burnout.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 3: THE CURRICULUM --- */}
        <section className="py-32 px-6 bg-transparent">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                 <div>
                    <span className="text-green-500 font-mono text-xs tracking-widest uppercase mb-4 block">Syllabus</span>
                    <h2 className="text-4xl md:text-6xl font-serif">Future Ready</h2>
                 </div>
                 <p className="text-gray-500 max-w-md mt-6 md:mt-0">
                    A high-energy intervention designed to shake students out of their comfort zones.
                 </p>
              </div>

              <div className="grid gap-6">
                 {modules.map((m, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="group p-8 md:p-12 rounded-3xl bg-black/60 backdrop-blur-md border border-white/5 hover:border-green-500/30 transition-all flex flex-col md:flex-row gap-8 items-center"
                    >
                       <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {m.icon}
                       </div>
                       <div className="flex-grow text-center md:text-left">
                          <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-green-300 transition-colors">{m.title}</h3>
                          <p className="text-gray-500 text-lg">{m.desc}</p>
                       </div>
                       <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                          <ArrowRight size={20} />
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- SECTION 4: CTA --- */}
        <section className="py-32 px-6 text-center border-t border-white/5 bg-black/20">
           <h2 className="text-4xl md:text-6xl font-serif mb-8">Empower Your Campus</h2>
           <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
              We conduct 2-day intensive workshops and semester-long credit courses tailored for modern universities.
           </p>
           <button className="bg-green-500 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-green-400 transition-all shadow-[0_0_50px_-15px_rgba(34,197,94,0.5)]">
              Download Placement Brochure
           </button>
        </section>

      </div>
    </div>
  );
}