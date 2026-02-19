"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronUp } from "lucide-react";

const mainNav = [
  { name: "Vision", path: "/about" },
  { name: "Self", path: "/individual" },
  { name: "Teams", path: "/corporate" },
  { name: "Campus", path: "/schools" },
];

const secondaryNav = [
  { name: "The Story", path: "/story" },
  { name: "Success Stories", path: "/success-stories" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-[100] flex justify-center px-2 md:px-6 pointer-events-none">
      <div className="pointer-events-auto relative flex flex-col items-center gap-2 max-w-full">
        
        {/* --- EXPANDABLE MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              key="more-menu"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-full mb-4 w-48 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden"
            >
              {secondaryNav.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN DOCK --- */}
        <div className="flex items-center p-1 md:p-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-[98vw] md:max-w-fit">
          
          {/* Logo / Home */}
          <Link href="/" className="px-2 md:px-5 py-2 md:py-3 font-serif font-bold text-white tracking-widest border-r border-white/10 hover:text-gray-300 transition-colors text-[10px] md:text-sm shrink-0">
            BYNC.
          </Link>

          {/* Main Links - Ultra compact for mobile! */}
          <div className="flex items-center shrink-0">
            {mainNav.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={`relative px-1.5 sm:px-2 md:px-4 py-2 md:py-3 text-[7px] sm:text-[9px] md:text-xs uppercase tracking-widest font-bold transition-colors ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {isActive && (
                    <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* THE "MORE" TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 md:p-3 shrink-0 rounded-full transition-colors ${isOpen ? "bg-white/10 text-white" : "text-gray-500 hover:text-white"}`}
          >
            {isOpen ? <X size={14} className="md:w-5 md:h-5" /> : <ChevronUp size={14} className="md:w-5 md:h-5" />}
          </button>

          {/* Talk Button */}
          <div className="pl-1 md:pl-2 border-l border-white/10 shrink-0">
             <Link 
               href="/contact" 
               className="flex items-center justify-center px-3 md:px-6 py-2 md:py-3 rounded-full bg-rose-900 text-white font-bold text-[8px] md:text-xs uppercase tracking-widest hover:bg-rose-800 transition-all shadow-[0_0_20px_-5px_rgba(159,18,57,0.5)]"
             >
               Talk
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};