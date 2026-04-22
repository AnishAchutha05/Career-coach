"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About",     href: "/about" },
  { label: "Programs",  href: "/programs" },
  { label: "Corporate", href: "/corporate" },
  { label: "Campus",    href: "/campus" },
  { label: "Contact",   href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* No bounce — simple fade-in slide so it doesn't collide with hero headings */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border border-black"
        style={{ borderRadius: "0 0 2rem 2rem" }}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-18 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 shrink-0">
            <Image
              src="/logo-b.png"
              alt="Buoyancee B logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            />
            <Image
              src="/logo-text.jpeg"
              alt="Buoyancee"
              width={140}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#C62828] bg-red-50 font-bold"
                      : "text-black hover:text-[#C62828] hover:bg-red-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link href="/contact" className="btn-red text-xs py-2.5 px-5">
              Book a Session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-2xl bg-[#2D1B1B] text-white"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#2D1B1B]/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col shadow-2xl rounded-l-3xl"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#2D1B1B]/6">
                <div className="flex items-center gap-1.5">
                  <Image src="/logo-b.png" alt="Buoyancee B logo" width={32} height={32} className="h-8 w-8 object-contain" />
                  <Image src="/logo-text.jpeg" alt="Buoyancee" width={100} height={28} className="h-7 w-auto object-contain" />
                </div>
                <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-2xl bg-[#F5F3EE] text-[#2D1B1B]">
                  <X size={14} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-2xl text-base font-semibold transition-all ${
                        pathname === link.href ? "bg-[#C62828] text-white" : "text-[#2D1B1B] hover:bg-[#F5F3EE]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-4 border-t border-[#2D1B1B]/6">
                <Link href="/contact" className="btn-red w-full justify-center text-center block text-xs">
                  Book a Session
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
