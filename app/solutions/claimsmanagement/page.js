'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ClipboardCheck, ShieldCheck, Clock, BarChart3, 
  Sparkles, ArrowRight, Zap 
} from 'lucide-react';
import Link from 'next/link';

const ClaimsManagement = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { 
      title: "End-to-End Processing", 
      desc: "A complete digital journey from claim intimation to final settlement.", 
      icon: <ClipboardCheck className="w-8 h-8" /> 
    },
    { 
      title: "Fraud Detection", 
      desc: "Identifying irregular claim patterns using advanced predictive analytics.", 
      icon: <ShieldCheck className="w-8 h-8" /> 
    },
    { 
      title: "Expedited Settlements", 
      desc: "Automated workflows that reduce processing time by up to 40%.", 
      icon: <Clock className="w-8 h-8" /> 
    },
    { 
      title: "Real-time Reporting", 
      desc: "Live transparency through a dashboard tracking every claim stage.", 
      icon: <BarChart3 className="w-8 h-8" /> 
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Solutions) */}
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
            <Sparkles size={16} /> FAST & TRANSPARENT
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Claims <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Management.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Reimagine your claims experience with Vestigo. We deliver high-speed, 
            error-free processing through automated digital workflows.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Initiate a Claim <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. THE EFFICIENCY SECTION (Floating Impact Box) */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/10 p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">40% Faster Processing</h3>
                <p className="text-slate-500">Our automated engine slashes settlement wait times.</p>
              </div>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-slate-100" />
            <div className="text-center md:text-left">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Direct Support</p>
              <p className="text-slate-700 font-medium">Dedicated Claims Manager for every case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID (Professional English Refinement) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Service Capabilities</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all bg-white"
            >
              <div className="mb-6 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION (Premium Dark Style) */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Optimize Your Claims Process
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Consult with our experts today to integrate Vestigo’s smart claims engine into your business operations.
          </p>
          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClaimsManagement;