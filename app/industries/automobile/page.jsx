'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Settings, 
  Wrench, 
  ShieldCheck, 
  Truck, 
  Store, 
  ArrowRight, 
  Database,
  Cpu,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const AutomobileSuite = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Assembly Line AI",
      desc: "Intelligent automation for manufacturing plants that reduces production errors by up to 30%.",
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      tag: "Manufacturing"
    },
    {
      title: "Spare Parts Engine",
      desc: "Comprehensive inventory tracking and global supply chain management for genuine components.",
      icon: <Wrench className="w-10 h-10 text-blue-600" />,
      tag: "Supply Chain"
    },
    {
      title: "DMS Pro",
      desc: "Dealer Management System unifying showrooms, sales pipelines, and service bookings.",
      icon: <Store className="w-10 h-10 text-blue-600" />,
      tag: "Retail & Sales"
    },
    {
      title: "Quality Control",
      desc: "Automated inspection protocols ensuring industry-standard safety and quality benchmarks.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      tag: "Compliance"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden font-sans text-slate-900">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company Style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Background Image Layer (Using your uploaded footer2.jpg) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/footer2.jpg" 
            alt="Automotive Era" 
            className="w-full h-full object-cover opacity-30" 
          />
          {/* Animated Gradients over the image */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A] to-[#0F172A]" />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} /> AUTOMOTIVE ENTERPRISE SOLUTIONS
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Fueling the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Era.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vestigo Automobile Suite digitizes the entire lifecycle from manufacturing to dealership delivery. 
            Engineered for high-speed scale and robust industrial performance.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Get Enterprise Quote <ArrowRight size={18} />
             </button>
             <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Download Brochure
             </button>
          </div>
        </motion.div>
      </section>

      {/* 2. INDUSTRY MODULES GRID (Overlapping Hero) */}
      <section className="relative z-20 -mt-20 px-6 bg-white pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Core Automobile Modules</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 hover:border-blue-600/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="mb-8 p-4 rounded-2xl bg-blue-50 inline-block text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {m.icon}
                </div>
                <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">{m.tag}</p>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTION STATS */}
      <section className="py-20 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Uptime Guaranteed", value: "99.9%" },
              { label: "Integration APIs", value: "500+" },
              { label: "Inventory Accuracy", value: "98%" },
              { label: "Cost Reduction", value: "25%" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-blue-900">{stat.value}</div>
                <div className="text-xs text-blue-600 font-black mt-2 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNIFIED INFRASTRUCTURE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-8 text-slate-900 tracking-tighter uppercase leading-none">
              Unified <br /><span className="text-blue-600">Infrastructure</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="mt-1 bg-blue-50 p-4 rounded-2xl h-fit shadow-sm">
                  <Database className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">Central Data Warehouse</h4>
                  <p className="text-slate-500 leading-relaxed">Integrate every plant and dealership into a single digital source of truth.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 bg-blue-50 p-4 rounded-2xl h-fit shadow-sm">
                  <Cpu className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">IoT-Ready Architecture</h4>
                  <p className="text-slate-500 leading-relaxed">Direct support for robotic assembly and sensor-based real-time tracking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full p-12 bg-[#0F172A] rounded-[3rem] shadow-2xl relative">
            <div className="grid grid-cols-2 gap-6">
               <div className="h-44 rounded-3xl bg-slate-800 border border-slate-700 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-white">40%</span>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mt-1">Lower Downtime</span>
               </div>
               <div className="h-44 rounded-3xl bg-blue-600 border border-blue-500 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-white">12k+</span>
                  <span className="text-xs font-bold text-blue-100 uppercase tracking-widest mt-1">Units Managed</span>
               </div>
               <div className="h-44 rounded-3xl bg-slate-800 border border-slate-700 p-8 flex flex-col justify-end col-span-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-4xl font-black text-white italic uppercase tracking-tighter">Live</span>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Dealer Network Active</p>
                    </div>
                    <div className="flex gap-1.5 mb-2">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-8 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION (Premium Dark Style) */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#0F172A] rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase italic">Ready to accelerate?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Transform your automotive business with industry-leading technology. Empower your teams and optimize your lifecycle.
          </p>
          <div className="relative z-10">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
              Contact Sales Representative
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AutomobileSuite;