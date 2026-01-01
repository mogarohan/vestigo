'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Wind, Sun, BatteryCharging, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const GreenInsurance = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const initiatives = [
    {
      title: "Renewable Energy Support",
      desc: "Specialized coverage for solar panels and wind turbines, ensuring complete protection for green energy assets.",
      icon: <Sun className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "EV Fleet Insurance",
      desc: "Customized plans for electric vehicle fleets, designed to help businesses minimize their carbon footprint.",
      icon: <BatteryCharging className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "Eco-Friendly Property",
      desc: "Discounted premiums for green-certified buildings and unique sustainable damage recovery solutions.",
      icon: <Leaf className="w-10 h-10 text-emerald-500" />,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Nature Accents) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A] pt-32 pb-40">
        {/* Animated Background Gradients (Emerald/Teal for Green vibe) */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-emerald-400/30 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Wind size={16} /> ECO-CONSCIOUS PROTECTION
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Insurance that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Protects the Planet.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Vestigo’s Green Insurance is designed for forward-thinking businesses. 
            We provide superior coverage for assets that build a sustainable tomorrow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="#initiatives" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20">
                Get Green Quote <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. INITIATIVES GRID (Floating over Hero) */}
      <section id="initiatives" className="relative z-20 -mt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 border border-slate-100 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 hover:shadow-emerald-500/10 transition-all group"
            >
              <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">{item.desc}</p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-bold gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUSTAINABILITY TRUST SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">Rewarding Sustainable Practices</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                We don’t just offer insurance; we incentivize the transition to green energy. 
                Our framework rewards lower carbon emissions with enhanced benefits and competitive premiums.
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* 4. PREMIUM DARK CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
            Together for a <span className="text-emerald-400">Greener</span> Tomorrow
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the network of sustainable businesses. Let’s modernize your risk management while protecting the environment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all mb-12">
             <span className="text-white text-xl font-black tracking-tighter">ECO-CERTIFIED</span>
             <span className="text-white text-xl font-black tracking-tighter">SUSTAINABLE+</span>
             <span className="text-white text-xl font-black tracking-tighter">RENEWABLE FIRST</span>
          </div>

          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-block bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-500 transition-all shadow-xl"
            >
              Request Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GreenInsurance;