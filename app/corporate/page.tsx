"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Users, TrendingUp, ShieldCheck, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const problems = [
  { title: "The Silo Effect", desc: "Departments hoarding information instead of collaborating." },
  { title: "Leadership Gap", desc: "Managers who are excellent at execution but poor at empathy." },
  { title: "Talent Churn", desc: "Losing high-performers because they feel undervalued or unseen." }
];

const solutions = [
  {
    title: "Leadership Pipeline",
    desc: "We transition your best individual contributors into capable, emotionally intelligent leaders.",
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Culture Engineering",
    desc: "Aligning the internal values of the team with the external goals of the company.",
    icon: <Users className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Conflict to Creativity",
    desc: "Teaching teams to use friction as a source of innovation rather than toxicity.",
    icon: <Target className="w-6 h-6 text-cyan-400" />
  }
];

export default function CorporatePage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* --- SHARED NEBULA BACKGROUND (Strategic Blue Theme) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             rotate: [0, -45, 0],
             opacity: [0.3, 0.5, 0.3] 
           }}
           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-700 blur-[140px] rounded-full mix-blend-screen transform-gpu"
         />
         <motion.div
           animate={{ 
             x: [50, -50, 50],
             y: [20, -20, 20],
             opacity: [0.2, 0.4, 0.2]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600 blur-[120px] rounded-full mix-blend-screen transform-gpu"
         />
      </div>

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
          {/* Back Link - Vision Style */}
          <div className="max-w-7xl mx-auto w-full mb-12 relative z-20">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm tracking-widest uppercase group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>

          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-6 block">
                Corporate Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                Build a culture that <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-500">
                  scales with you.
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
                Strategy can be copied. Culture cannot. We engineer high-performance teams by upgrading the emotional intelligence of your leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                 <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                   Consult for Teams
                 </button>
                 <button className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                   Download Brochure
                 </button>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
            >
               <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex justify-between items-end mb-8">
                     <div>
                        <div className="text-gray-500 text-sm uppercase tracking-widest mb-2 font-mono">Team Velocity</div>
                        <div className="text-6xl font-serif text-white">3.5x</div>
                     </div>
                     <TrendingUp className="text-green-400 w-12 h-12" />
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "85%" }}
                       transition={{ duration: 1.5, ease: "circOut" }}
                       className="h-full bg-blue-500" 
                     />
                  </div>
                  <p className="text-sm text-gray-400">Increase in project delivery speed after conflict resolution training.</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: THE FRICTION --- */}
        <section className="py-32 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <div className="md:w-1/2 mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif mb-6">Where Teams Break.</h2>
                 <p className="text-gray-400 text-lg">
                    Most organizations fail not because of market conditions, but because of internal friction.
                 </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {problems.map((p, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-black/60 border border-white/5 hover:border-blue-900/50 transition-colors group">
                       <div className="w-10 h-10 bg-red-900/20 rounded-full flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-900/40 transition-colors">
                          <ShieldCheck size={20} />
                       </div>
                       <h3 className="text-xl font-serif text-white mb-3">{p.title}</h3>
                       <p className="text-gray-500">{p.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- SECTION 3: THE BLUEPRINT --- */}
        <section className="py-32 px-6 bg-transparent">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">Our Approach</span>
                 <h2 className="text-4xl md:text-6xl font-serif">Corporate Engineering</h2>
              </div>

              <div className="space-y-6">
                 {solutions.map((s, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="group flex flex-col md:flex-row items-center p-10 rounded-[2rem] bg-black/60 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all"
                    >
                       <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 mb-6 md:mb-0 md:mr-10 group-hover:scale-110 transition-transform">
                          {s.icon}
                       </div>
                       <div className="flex-grow text-center md:text-left">
                          <h3 className="text-3xl font-serif mb-2 group-hover:text-blue-200 transition-colors">{s.title}</h3>
                          <p className="text-gray-500 text-lg">{s.desc}</p>
                       </div>
                       <div className="shrink-0 mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-20px] group-hover:translate-x-0 duration-500">
                          <ArrowRight className="text-blue-400 w-8 h-8" />
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- SECTION 4: TRUST LOGOS --- */}
        <section className="py-20 bg-black/40 border-t border-white/5 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mb-12">
                 Powering Teams At
              </p>
              <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                 {["Google", "Amazon", "Wipro", "Infosys", "Dell"].map((logo) => (
                    <span key={logo} className="text-3xl font-serif text-white">{logo}</span>
                 ))}
              </div>
           </div>
        </section>

        {/* --- SECTION 5: CTA --- */}
        <section className="py-32 px-6 text-center border-t border-white/5 bg-black/20">
           <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Optimize?</h2>
           <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
              Book a discovery call to discuss your team's specific challenges and design a custom intervention.
           </p>
           <button className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_50px_-15px_rgba(37,99,235,0.5)]">
              Schedule Discovery Call
           </button>
        </section>

        <Footer />
      </div>
    </div>
  );
}