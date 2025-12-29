'use client';

import { motion } from 'framer-motion';
import { Handshake, ArrowUpRight, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  // Tamara Partner Companies na Logo Names
  const partners = [
    "HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", 
    "Bajaj Allianz", "New India Assurance", "Care Health", "Niva Bupa"
  ];

  // Infinite slider mate list ne double kari nakhiye
  const duplicatedPartners = [...partners, ...partners];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Handshake className="w-4 h-4" /> Trusted Ecosystem
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Strategic <span className="text-blue-600">Partners</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Vestigo ma ame bharat ni top insurance companies sathe collab kariye chie, 
            jethi tamne best premium ane fast settlement mali shake.
          </p>
        </div>
      </section>

      {/* --- INFINITE SLIDER SECTION --- */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="relative">
          {/* Left & Right Gradient Overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider Container */}
          <motion.div 
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedPartners.map((partner, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center min-w-[200px] h-32 px-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors"
              >
                {/* Replace this with <img src={...} /> for actual logos */}
                <span className="text-xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors tracking-tight">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PARTNERSHIP TYPES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Insurance Providers",
              desc: "Top-tier insurers sathe direct integration jethi tamne quick quotes male.",
              icon: <ShieldCheck className="w-6 h-6" />
            },
            {
              title: "Tech Partners",
              desc: "Digital solutions mate amara infrastructure partners.",
              icon: <Globe className="w-6 h-6" />
            },
            {
              title: "Audit Partners",
              desc: "Risk evaluation mate expert third-party auditors.",
              icon: <ArrowUpRight className="w-6 h-6" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BECOME A PARTNER CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Vestigo</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Shu tame ek insurance provider cho ke fintech startup? 
            Chalo sathe mali ne risk management ne modernize kariye.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </main>
  );
}