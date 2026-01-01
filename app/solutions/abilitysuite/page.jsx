'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Zap, BarChart3, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

const AbilitySuite = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Core Engine",
      desc: "A powerful central system designed to automate your business operations and core insurance logic.",
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      tag: "Automation"
    },
    {
      title: "Global Connectivity",
      desc: "Seamlessly connect with global partners and legacy platforms via our production-ready API stack.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      tag: "API Ready"
    },
    {
      title: "Real-time Analytics",
      desc: "Drive growth with advanced data-driven insights through our integrated live reporting dashboards.",
      icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
      tag: "Big Data"
    },
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption and multi-layer data protection to safeguard your most sensitive information.",
      icon: <Lock className="w-10 h-10 text-blue-500" />,
      tag: "Secure"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Solutions) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A] pt-32 pb-40">
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

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Zap size={16} /> DIGITAL ECOSYSTEM
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Vestigo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ability Suite.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            A comprehensive technology stack engineered to digitize insurance workflows end-to-end. 
            Scale faster, stay secure, and amplify productivity by 10x.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Request a Demo <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. MODULE GRID (Floating over Hero) */}
      <section className="relative z-20 -mt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 hover:border-blue-200 transition-all duration-300"
            >
              <div className="mb-6 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2 block">{m.tag}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{m.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ARCHITECTURE SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Built for Modern Enterprise</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our modular architecture allows you to select only the specific components required for your operations, eliminating complex setup procedures.
            </p>
            
            

            <div className="grid grid-cols-1 gap-4">
              {[
                "Microservices-based scalable cloud design",
                "Seamless integration with legacy insurance systems",
                "Advanced SOC2 compliant data encryption protocols"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="bg-blue-600 p-1.5 rounded-full">
                    <ShieldCheck className="text-white w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
             <div className="space-y-8">
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full" 
                   />
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="h-40 rounded-[2rem] bg-blue-50 border border-blue-100 flex flex-col items-center justify-center gap-2">
                      <Zap className="text-blue-500" />
                      <span className="font-black text-blue-600 text-xs tracking-widest uppercase">Logic A</span>
                   </div>
                   <div className="h-40 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-2">
                      <Cpu className="text-slate-300" />
                      <span className="font-black text-slate-400 text-xs tracking-widest uppercase">Logic B</span>
                   </div>
                </div>
                <div className="h-12 w-3/4 bg-slate-50 border border-slate-100 rounded-2xl mx-auto flex items-center justify-center">
                   <div className="flex gap-2">
                      {[1,2,3,4].map(dot => <div key={dot} className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" />)}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION (Premium Dark Style) */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Empower Your Global Team
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Convert your legacy workflows into a high-speed digital future with the Ability Suite. 
            Request a personalized walkthrough today.
          </p>
          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AbilitySuite;