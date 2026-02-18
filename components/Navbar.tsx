"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

// The "Better Names"
const navLinks = [
  { name: "Vision", href: "/about" },
  { name: "Self", href: "/individual" },
  { name: "Teams", href: "/corporate" },
  { name: "Stories", href: "/testimonials" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Container */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-full px-4">
        
        {/* The Mobile Menu (Pops up when you click hamburger) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="w-full max-w-sm bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-2xl mb-2"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-white flex justify-between items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Actual Bar (Like your Image) */}
        <motion.nav 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="bg-[#111] border border-white/10 rounded-full pl-6 pr-2 py-2 flex items-center shadow-2xl backdrop-blur-md"
        >
          {/* Logo / Hamburger Area */}
          <div className="flex items-center gap-6 border-r border-white/10 pr-6">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="font-bold tracking-wider text-white text-lg">
              BYNC.
            </Link>
          </div>

          {/* Desktop Links (Hidden on small mobile, shown on tablet+) */}
          <div className="hidden md:flex items-center gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pl-2">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-purple-500 transition-all flex items-center gap-2"
            >
              Talk
            </Link>
          </div>
        </motion.nav>
      </div>
    </>
  );
};