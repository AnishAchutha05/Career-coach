"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    title: "Individual Coaching", 
    desc: "1:1 Personal development & emotional regulation.", 
    icon: <User className="w-6 h-6"/>, 
    col: "md:col-span-2", 
    bg: "bg-[#1a1a1a]",
    href: "/individual"
  },
  { 
    title: "Corporate", 
    desc: "Leadership pipeline & culture.", 
    icon: <Briefcase className="w-6 h-6"/>, 
    col: "md:col-span-1", 
    bg: "bg-purple-900",
    href: "/corporate"
  },
  { 
    title: "Schools", 
    desc: "Student behavior & identity building.", 
    icon: <GraduationCap className="w-6 h-6"/>, 
    col: "md:col-span-1", 
    bg: "bg-[#1a1a1a]",
    href: "/schools"
  },
  { 
    title: "Emotional Intelligence", 
    desc: "The core of Buoyancee's philosophy. Conflict management & relationship skills.", 
    icon: <Heart className="w-6 h-6"/>, 
    col: "md:col-span-2", 
    bg: "bg-white text-black",
    href: "/about"
  },
];

export const Methodology = () => {
  return (
    <section className="py-32 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Our Methodology</h2>
          <p className="text-gray-500 text-xl max-w-2xl">
            Tailored programs designed to create lasting behavioral transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link key={i} href={s.href} className={s.col}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full p-10 rounded-[2rem] border border-white/5 flex flex-col justify-between min-h-[300px] transition-colors ${s.bg}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${s.bg.includes('white') ? 'bg-black text-white' : 'bg-white/10 text-white'}`}>
                    {s.icon}
                  </div>
                  <h3 className="text-3xl font-serif mb-2">{s.title}</h3>
                  <p className={`text-lg ${s.bg.includes('white') ? 'text-gray-600' : 'text-gray-400'}`}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};