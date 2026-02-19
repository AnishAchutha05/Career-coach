"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Play, Pause, Milestone, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function StoryPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[#020202] min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* --- HYPNOTIC STARFIELD BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.05)_0%,_transparent_70%)]"
        />
        {/* Animated Twinkling Particles */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10">
        
        {/* --- SECTION 1: OSMO-STYLE VIDEO HERO --- */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm tracking-widest uppercase group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase block mb-6"
              >
                The Origin
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                The Story <br/> behind the <br/> <span className="italic font-light text-white/50">Shift.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Ajit Achutha didn't start with a business plan. He started with a question: Why do high-performers feel like imposters?
              </p>
            </div>

            {/* THE VIDEO CONTAINER */}
            <div className="lg:col-span-3 relative group">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl"
              >
                <video 
                  ref={videoRef}
                  poster="/founder-poster.jpg" // Placeholder for your thumbnail
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/story-video.mp4" type="video/mp4" />
                </video>
                
                {/* Floating Play Trigger */}
                <button 
                  onClick={toggleVideo}
                  className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl z-20"
                >
                  {isPlaying ? <Pause /> : <Play className="ml-1" />}
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE 3D PORTAL ZONE (Outsource Ready) --- */}
        <section className="py-40 relative flex flex-col items-center">
           <div className="text-center mb-24 max-w-2xl px-6">
              <h2 className="text-4xl font-serif mb-6">Engineering Composure</h2>
              <p className="text-gray-500">We don't just teach communication; we architect the internal state from which all communication flows.</p>
           </div>

           {/* 3D PLACEHOLDER: This is where we will insert your Spline/ThreeJS model */}
           <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
              {/* Pedestal Glow */}
              <div className="absolute bottom-10 w-64 h-12 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-12 w-48 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-4 text-indigo-400 opacity-30"
              >
                 <Sparkles size={48} />
                 <span className="text-xs font-mono uppercase tracking-[0.5em]">3D Element Slot</span>
              </motion.div>
           </div>
        </section>

        {/* --- SECTION 3: THE TIMELINE --- */}
        <section className="py-32 px-6 border-t border-white/5">
           <div className="max-w-4xl mx-auto space-y-32">
              <div className="relative pl-12 border-l border-white/10">
                 <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_indigo]" />
                 <span className="text-indigo-400 font-mono text-xs mb-4 block">2010 — The Vision</span>
                 <h3 className="text-3xl font-serif mb-4 text-white">The Breakthrough</h3>
                 <p className="text-gray-500 text-lg">Buoyancee was founded in a small room with a large vision: to treat personality as a programmable operating system.</p>
              </div>

              <div className="relative pl-12 border-l border-white/10">
                 <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white/20" />
                 <span className="text-gray-600 font-mono text-xs mb-4 block">2018 — The Method</span>
                 <h3 className="text-3xl font-serif mb-4 text-white">Scaling the Soul</h3>
                 <p className="text-gray-500 text-lg">Partnering with Fortune 500s to prove that emotional intelligence is the primary driver of corporate velocity.</p>
              </div>
           </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-40 text-center bg-gradient-to-b from-transparent to-indigo-950/10">
           <h2 className="text-5xl md:text-7xl font-serif mb-12">The Shift is waiting.</h2>
           <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all group">
              Build Your Story <Zap className="group-hover:fill-current" />
           </Link>
        </section>

        <Footer />
      </div>
    </div>
  );
}