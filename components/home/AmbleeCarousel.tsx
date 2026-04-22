"use client";
import React, { useRef } from "react";
import Image from "next/image";

const AMBLEE_IMAGES = [
  { src: "/Amblee Activity.jpg",                         alt: "Amblee Activity" },
  { src: "/Amblee Bird.jpg",                              alt: "Amblee Bird" },
  { src: "/Amblee Bird Sanctury.jpg",                    alt: "Amblee Bird Sanctuary" },
  { src: "/Amblee Coordinating .jpg",                    alt: "Amblee Coordinating" },
  { src: "/Amblee Emotional challenges.jpg",             alt: "Amblee Emotional Challenges" },
  { src: "/Amblee Learning activities.jpg",              alt: "Amblee Learning Activities" },
  { src: "/Amblee mor.jpg",                              alt: "Amblee Morning" },
  { src: "/Amblee morn ex.jpg",                          alt: "Amblee Morning Exercise" },
  { src: "/Amblee Morning Ex.jpg",                       alt: "Amblee Morning Exercises" },
  { src: "/Amblee Physical .jpg",                        alt: "Amblee Physical" },
  { src: "/Amblee Pic.jpg",                              alt: "Amblee" },
  { src: "/Amblee Power of Team work & leadership.png",  alt: "Amblee Teamwork & Leadership" },
  { src: "/Amblee Silence & nature.jpg",                 alt: "Amblee Silence & Nature" },
];

// Duplicate for seamless infinite scroll
const DOUBLED = [...AMBLEE_IMAGES, ...AMBLEE_IMAGES];

export function AmbleeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#F5EDDB] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
        <div className="section-divider" />
        <h2 className="display-md text-[#1A1009]">
          Amblee in <em className="italic font-normal text-[#C62828]">action.</em>
        </h2>
        <p className="body-lg mt-3 max-w-xl">
          A glimpse into the transformative experiences our campus programmes create.
        </p>
      </div>

      {/* Infinite marquee track */}
      <div
        className="relative flex overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {DOUBLED.map((img, i) => (
            <div
              key={i}
              className="relative h-56 md:h-72 w-80 md:w-96 rounded-2xl overflow-hidden shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-semibold uppercase tracking-widest">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
