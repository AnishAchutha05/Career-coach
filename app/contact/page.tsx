"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const INQUIRY_TYPES = [
  "Corporate Training", "Campus Programme", "Individual Coaching",
  "MUKTI / College Programme", "Press / Media", "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5EDDB] min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[#F5EDDB] bg-net max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <motion.div className="pill mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Get in Touch</motion.div>
        <motion.h1 className="display-lg text-[#1A1009]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Let&apos;s start a <br />
          <em className="italic font-normal text-[#C62828]">conversation.</em>
        </motion.h1>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div className="lg:col-span-4 space-y-4" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="card-paper p-7">
              <p className="label-sm mb-3">Address</p>
              <div className="flex items-start gap-3 text-[#3D2B1F] text-sm leading-relaxed">
                <MapPin size={15} className="text-[#C62828] mt-0.5 shrink-0" />
                <span>1969, South End D Cross,<br />9th Block Jayanagar,<br />Bengaluru 560 069</span>
              </div>
            </div>
            <div className="card-paper p-7">
              <p className="label-sm mb-3">Phone</p>
              <a href="tel:+918026789508" className="flex items-center gap-3 text-[#1A1009] text-sm font-semibold hover:text-[#C62828] transition-colors">
                <Phone size={15} className="text-[#C62828]" />
                (+91) 80 2678 9508
              </a>
            </div>
            <div className="card-paper p-7">
              <p className="label-sm mb-3">Email</p>
              <a href="mailto:askbuoyancee@gmail.com" className="flex items-center gap-3 text-[#1A1009] text-sm font-semibold hover:text-[#C62828] transition-colors break-all">
                <Mail size={15} className="text-[#C62828] shrink-0" />
                askbuoyancee@gmail.com
              </a>
            </div>
            <div className="bg-[#C62828] rounded-2xl p-7 text-white">
              <p className="label-sm text-white/60 mb-3">Response Time</p>
              <div className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 opacity-70" />
                <p className="text-sm leading-relaxed opacity-90">
                  We respond within <strong>24 hours</strong> to all enquiries. Every engagement is customised — no generic packages.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-8" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {submitted ? (
              <motion.div className="card-paper p-14 text-center" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#C62828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="font-bold text-3xl text-[#1A1009] mb-3">Message received.</h2>
                <p className="text-[#7C6B5E]">We&apos;ll be in touch within 24 hours. Thank you for reaching out to Buoyancee.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-paper p-8 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-sm block mb-2">Your Name *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F5EDDB] text-[#1A1009] text-sm placeholder:text-[#B0A090] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 transition-all" />
                  </div>
                  <div>
                    <label className="label-sm block mb-2">Phone *</label>
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F5EDDB] text-[#1A1009] text-sm placeholder:text-[#B0A090] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="label-sm block mb-2">Email Address *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F5EDDB] text-[#1A1009] text-sm placeholder:text-[#B0A090] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 transition-all" />
                </div>
                <div>
                  <label className="label-sm block mb-2">Enquiry Type *</label>
                  <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F5EDDB] text-[#1A1009] text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select enquiry type</option>
                    {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-sm block mb-2">Message</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about what you're looking for..."
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F5EDDB] text-[#1A1009] text-sm placeholder:text-[#B0A090] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 transition-all resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-red w-full justify-center py-4 text-sm">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : "SEND MESSAGE →"}
                </button>
                <p className="text-center text-xs text-[#B0A090]">We respond within 24 hours · No spam, ever.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
