"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Vision", path: "/about" },
  { name: "Self", path: "/individual" },
  { name: "Teams", path: "/corporate" },
  { name: "Campus", path: "/schools" }, // <-- ADDED THIS LINK
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 p-2 pr-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80">
        
        {/* Home / Logo */}
        <Link href="/" className="px-6 py-3 font-serif font-bold text-white tracking-widest border-r border-white/10 mr-2 hover:text-gray-300 transition-colors">
          BYNC.
        </Link>

        {/* The Links */}
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`relative px-4 md:px-6 py-3 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* The "Talk" Button (Contact) */}
        <div className="pl-2 border-l border-white/10 ml-2">
           <Link 
             href="/contact" 
             className="flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-500 transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]"
           >
             Talk
           </Link>
        </div>

      </div>
    </div>
  );
};