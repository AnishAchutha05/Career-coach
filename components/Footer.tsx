// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-32 border-t border-white/5 relative z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* CTA Section */}
          <div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">
              Let's Talk.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Ready to upgrade your identity, your team, or your institution? 
              The journey begins with a conversation.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all"
            >
              Start a Conversation 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-bold mb-6 text-gray-500 uppercase tracking-widest text-xs">Menu</h4>
              <ul className="space-y-4 text-gray-300">
                <li><Link href="/about" className="hover:text-purple-400 transition">The Story</Link></li>
                <li><Link href="/individual" className="hover:text-purple-400 transition">Individual Coaching</Link></li>
                <li><Link href="/corporate" className="hover:text-purple-400 transition">Corporate Training</Link></li>
                <li><Link href="/testimonials" className="hover:text-purple-400 transition">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-500 uppercase tracking-widest text-xs">Connect</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="flex items-center gap-2 hover:text-purple-400 transition"><Linkedin size={16}/> LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-purple-400 transition"><Instagram size={16}/> Instagram</a></li>
                <li><a href="mailto:contact@buoyancee.com" className="flex items-center gap-2 hover:text-purple-400 transition"><Mail size={16}/> Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-sm">
          <div>© {new Date().getFullYear()} Buoyancee. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};