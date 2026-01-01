'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Handshake, ArrowUpRight, Globe, ShieldCheck, Sparkles, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const partners = [
    "HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", 
    "Bajaj Allianz", "New India Assurance", "Care Health", "Niva Bupa"
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company Page) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Handshake size={16} /> TRUSTED ECOSYSTEM
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Partners.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Vestigo collaborates with India's top insurance providers to ensure our clients 
            receive the best premiums and expedited claim settlements.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="#partnership-types" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Explore Network <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. LIGHT BLUE PARTNER MARQUEE (Floating slightly over hero) */}
      <div className="relative z-20 -mt-10 py-20 bg-[#F0F7FF] border-y border-blue-100 overflow-hidden shadow-2xl shadow-slate-900/10">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 whitespace-nowrap items-center"
        >
          {[...partners, ...partners].map((p, i) => (
            <span 
              key={i} 
              className="text-6xl font-black text-blue-300/40 hover:text-blue-500 hover:scale-105 transition-all duration-700 uppercase italic tracking-tighter cursor-default select-none"
              style={{ textShadow: '0 2px 10px rgba(7, 20, 80, 0.1)' }}
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. PARTNERSHIP TYPES GRID */}
      <section id="partnership-types" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Categories of Collaboration</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Insurance Providers",
              desc: "Direct integration with top-tier insurers to provide instantaneous quotes and coverage.",
              icon: <ShieldCheck className="w-6 h-6" />
            },
            {
              title: "Tech Partners",
              desc: "Infrastructure and security partners enabling our seamless digital risk-hub experience.",
              icon: <Globe className="w-6 h-6" />
            },
            {
              title: "Audit Partners",
              desc: "Independent third-party specialists for unbiased risk evaluations and compliance.",
              icon: <ArrowUpRight className="w-6 h-6" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BECOME A PARTNER CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">Partner With Vestigo</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Are you an insurance provider or a fintech startup? 
            Let’s collaborate to modernize risk management and create industry-leading solutions.
          </p>
          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Request Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}