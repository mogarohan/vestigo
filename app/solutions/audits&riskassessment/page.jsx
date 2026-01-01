'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Search, BarChart, ClipboardCheck, 
  Sparkles, ArrowRight, Download 
} from 'lucide-react';
import Link from 'next/link';

const AuditsRiskAssessment = () => {
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
      title: "Comprehensive Auditing",
      desc: "Detailed evaluation of your current business processes and financial safety nets.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Risk Mitigation",
      desc: "Identifying potential threats before they impact your business operations.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Data Analysis",
      desc: "Using advanced analytics to predict trends and prepare for future uncertainties.",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Compliance Check",
      desc: "Ensuring all your insurance and financial policies meet industry regulations.",
      icon: <ClipboardCheck className="w-8 h-8" />
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Partners Page) */}
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
            <Sparkles size={16} /> PROACTIVE PROTECTION
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Audits & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Risk Assessment.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Secure your business future with Vestigo’s deep-dive auditing and 
            proactive risk management strategies.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Book an Assessment <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. WHY RISK ASSESSMENT MATTERS (Floating Content Section) */}
      <section className="relative z-20 -mt-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/10 p-8 md:p-16 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  Why Risk Assessment Matters?
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    In an ever-changing global market, being unaware of your business risks is the biggest risk of all. 
                    Our team specializes in identifying hidden vulnerabilities in your operational and financial structures.
                  </p>
                  <p>
                    We don’t just find problems; we provide actionable solutions to strengthen your 
                    resilience and ensure long-term stability.
                  </p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl"
                >
                  <Download size={18} /> Download Brochure
                </motion.button>
              </div>
              <div className="relative h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-inner">
                {/* Replace with actual image: src="/assessment-img.jpg" */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center">
                   <ShieldCheck size={120} className="text-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID (Refined Icons) */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Audit Framework</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Ready to secure your business?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Schedule a consultation with our expert risk analysts today and close the gaps in your business security.
          </p>
          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuditsRiskAssessment;