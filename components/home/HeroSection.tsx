"use client";
import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

/* ── Wireframe spinning globe ─────────────────────── */
function GlobeMesh() {
  const solidRef  = useRef<THREE.Mesh>(null);
  const wireRef   = useRef<THREE.Mesh>(null);
  const outerRef  = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    const speed = delta * 0.4;
    if (solidRef.current)  solidRef.current.rotation.y  += speed;
    if (wireRef.current)   wireRef.current.rotation.y   += speed;
    if (outerRef.current)  outerRef.current.rotation.y  += speed * 0.6;
  });

  return (
    <group>
      {/* Transparent inner sphere */}
      <Sphere ref={solidRef} args={[1.3, 48, 48]}>
        <meshStandardMaterial
          color="#C62828" metalness={0.2} roughness={0.6}
          transparent opacity={0.1}
        />
      </Sphere>

      {/* Wireframe lattice */}
      <Sphere ref={wireRef} args={[1.32, 28, 28]}>
        <meshBasicMaterial color="#C62828" wireframe transparent opacity={0.6} />
      </Sphere>

      {/* Outer glow wireframe */}
      <Sphere ref={outerRef} args={[1.58, 18, 18]}>
        <meshBasicMaterial color="#EF5350" wireframe transparent opacity={0.12} />
      </Sphere>
    </group>
  );
}

function GlobeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={3} color="#C62828" />
      <pointLight position={[-4, -3, 2]} intensity={1.2} color="#FF8A80" />
      <GlobeMesh />
    </Canvas>
  );
}

const STATS = [
  { value: "30+",  label: "Years" },
  { value: "50K+", label: "Lives" },
  { value: "6",    label: "Languages" },
  { value: "450+", label: "Corporates" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FAFAF7] bg-net flex items-center overflow-hidden pt-16">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#C62828] rounded-r-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill mb-7"
            >
              Since 1992 · Identity Coaching
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="display-xl text-[#2D1B1B] mb-6"
            >
              Identity
              <br />
              <em className="not-italic text-[#C62828]">over</em>
              <br />
              skills.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="body-lg max-w-lg mb-10"
            >
              Ajit Kaikini has spent 30+ years upgrading the internal operating system
              of individuals, teams, and organisations — so excellence flows naturally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link href="/contact" className="btn-red">Book a Session →</Link>
              <Link href="/about" className="btn-outline">Meet Ajit</Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-[#2D1B1B]/8"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-[#C62828]">{s.value}</div>
                  <div className="text-xs text-[#7C6B5E] uppercase tracking-widest font-semibold mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Spinning Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[420px] lg:h-[580px] rounded-[2.5rem] overflow-hidden bg-[#0F172A] shadow-2xl"
          >
            {/* Corner info badge */}
            <div className="absolute top-5 left-5 z-10 bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-4 py-2.5">
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">Global Coaching Impact</p>
            </div>

            {/* Globe canvas */}
            <div className="absolute inset-0">
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-[#C62828]/40 border-t-[#C62828] animate-spin" />
                </div>
              }>
                <GlobeScene />
              </Suspense>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent z-10">
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em] mb-0.5">Ajit Kaikini</p>
              <p className="text-white/75 text-sm font-bold">Principal Coach · Buoyancee</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
