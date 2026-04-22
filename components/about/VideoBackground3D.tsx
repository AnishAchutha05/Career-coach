"use client";
import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating glowing orb ───────────────────────── */
function Orb({
  position,
  color,
  size,
  speed,
  amplitude,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  amplitude: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    t.current += delta * speed;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t.current) * amplitude;
      ref.current.position.x = position[0] + Math.cos(t.current * 0.7) * amplitude * 0.5;
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Sphere ref={ref} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.4}
        roughness={0.2}
        transparent
        opacity={0.75}
      />
    </Sphere>
  );
}

/* ── Spinning ring ──────────────────────────────── */
function Ring({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    t.current += delta * speed * 0.5;
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.8;
      ref.current.rotation.y += delta * speed * 0.5;
      ref.current.position.y = position[1] + Math.sin(t.current) * 0.5;
    }
  });

  return (
    <Torus ref={ref} args={[0.6, 0.06, 16, 80]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.6}
      />
    </Torus>
  );
}

/* ── Particle field ─────────────────────────────── */
function Particles({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const redColor   = new THREE.Color("#C62828");
    const goldColor  = new THREE.Color("#D4A012");
    const whiteColor = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const pick = Math.random();
      const c = pick < 0.3 ? redColor : pick < 0.5 ? goldColor : whiteColor;
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors,    3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Mouse-reactive camera ──────────────────────── */
function MouseCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.current.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Full scene ─────────────────────────────────── */
function Scene() {
  return (
    <>
      <MouseCamera />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]}   intensity={3}   color="#C62828" />
      <pointLight position={[-6, -3, 3]} intensity={2}   color="#D4A012" />
      <pointLight position={[0, 8, -4]}  intensity={1.5} color="#ffffff" />

      {/* Particles */}
      <Particles count={300} />

      {/* Large glowing orbs */}
      <Orb position={[-5,  1.5, -3]} color="#C62828" size={0.55} speed={0.5} amplitude={0.7} />
      <Orb position={[ 5, -1,   -4]} color="#8B0000" size={0.40} speed={0.7} amplitude={0.5} />
      <Orb position={[ 0,  2.5, -5]} color="#D4A012" size={0.30} speed={0.9} amplitude={0.8} />
      <Orb position={[-3, -2,   -2]} color="#C62828" size={0.20} speed={1.1} amplitude={0.4} />
      <Orb position={[ 4,  3,   -3]} color="#ff6b6b" size={0.18} speed={0.6} amplitude={0.6} />

      {/* Spinning rings */}
      <Ring position={[-4,  0,  -4]} color="#C62828" speed={0.8} />
      <Ring position={[ 4,  1,  -5]} color="#D4A012" speed={0.5} />
      <Ring position={[ 0, -2,  -3]} color="#ff4444" speed={1.0} />
    </>
  );
}

/* ── Export: drop-in canvas for the video section bg ── */
export function VideoBackground3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
