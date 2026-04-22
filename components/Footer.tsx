"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const NAV = [
  { label: "About Ajit",       href: "/about" },
  { label: "Programs",         href: "/programs" },
  { label: "Corporate",        href: "/corporate" },
  { label: "Campus",           href: "/campus" },
  { label: "Contact",          href: "/contact" },
];



export function Footer() {
  return (
    <footer className="bg-[#1A1009] text-white">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand column */}
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/logo-b.png" alt="Buoyancee B logo" width={52} height={52} className="h-13 w-13 object-contain" style={{height:'52px',width:'52px'}} />
            <span className="bg-white rounded-xl px-2 py-1 inline-flex items-center">
              <Image src="/logo-text.jpeg" alt="Buoyancee" width={140} height={42} className="h-10 w-auto object-contain" />
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            India&apos;s premier identity and soft skills institute. 30+ years, 6 languages, 5 Lakh+ lives transformed.
          </p>
          <div className="space-y-3 text-sm text-white/50">
            <a href="mailto:askbuoyancee@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail size={14} className="text-[#C62828] shrink-0" />
              askbuoyancee@gmail.com
            </a>
            <a href="tel:+918026789508" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone size={14} className="text-[#C62828] shrink-0" />
              (+91) 80 2678 9508
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-[#C62828] shrink-0 mt-0.5" />
              <span>9th Block Jayanagar, Bengaluru 560 069</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-6">
          <p className="label-sm text-white/40 mb-5">Navigate</p>
          <ul className="space-y-3">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-white text-sm font-medium transition-colors hover:text-[#EF5350]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="md:col-span-3">
          <p className="label-sm text-white/40 mb-5">By the Numbers</p>
          <div className="space-y-5">
            {[
              { value: "30+",    label: "Years of practice" },
              { value: "5L+",    label: "Lives transformed" },
              { value: "450+",   label: "Corporate clients" },
              { value: "6",      label: "Languages" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-[#C62828]">{s.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} Buoyancee. All rights reserved.</span>
          <span>Crafted with purpose in Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}