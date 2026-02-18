"use client";
import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Buoyancee didn't just teach me communication; they rewired how I see myself. I'm a different leader now.",
    author: "Rajesh K.",
    role: "VP, Tech Mahindra"
  },
  {
    text: "The emotional intelligence module is a game changer. My team's conflict resolution has improved 10x.",
    author: "Sarah Jenkins",
    role: "Director, StartUp Inc"
  },
  {
    text: "I was skeptical about 'identity coaching', but Ajit's method is profound. It goes deeper than any MBA.",
    author: "Vikram S.",
    role: "Entrepreneur"
  },
  {
    text: "Finally, a program that focuses on the human behind the professional. Highly recommended.",
    author: "Ananya M.",
    role: "HR Head"
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-black overflow-hidden border-t border-white/5 relative">
      
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Voices of Change</h2>
        <div className="flex justify-center gap-1 text-purple-500">
           {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* We duplicate the list to make it seamless */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="w-[400px] p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-purple-500/30 transition-colors flex-shrink-0"
            >
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-serif">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-white font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade Gradients (To hide edges) */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
      </div>

    </section>
  );
};