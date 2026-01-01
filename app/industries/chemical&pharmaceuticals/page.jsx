'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Beaker, 
  TestTube, 
  ClipboardCheck, 
  FlaskConical, 
  ShieldAlert, 
  Database, 
  ArrowRight, 
  Layers,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const PharmaChemicalSuite = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Range restricted to 150 to prevent content from cutting off
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Batch Management",
      desc: "End-to-end batch tracking and automated genealogy providing complete production transparency.",
      icon: <Layers className="w-10 h-10 text-blue-600" />,
      tag: "Production"
    },
    {
      title: "LIMS Integration",
      desc: "Laboratory Information Management System for real-time tracking of quality control samples.",
      icon: <TestTube className="w-10 h-10 text-blue-600" />,
      tag: "Quality Lab"
    },
    {
      title: "Compliance (GxP)",
      desc: "FDA 21 CFR Part 11 compliant digital signatures and audit trails for validation readiness.",
      icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
      tag: "Regulatory"
    },
    {
      title: "R&D Analytics",
      desc: "Advanced tools for formulation management and stability testing data analysis.",
      icon: <Beaker className="w-10 h-10 text-blue-600" />,
      tag: "Research"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company Style) */}
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
            <Sparkles size={16} /> GXP COMPLIANT INFRASTRUCTURE
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Chemistry.</span> <br /> 
            Digital by Design.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Vestigo Pharma Suite empowers chemical and pharmaceutical enterprises with advanced 
            batch processing, quality assurance, and automated regulatory compliance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Talk to a Consultant <ArrowRight size={18} />
             </Link>
             <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Validation Kit
             </button>
          </div>
        </motion.div>
      </section>

      {/* 2. SPECIALIZED MODULES GRID (Floating Overlap) */}
      <section className="relative z-20 -mt-24 py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Life Sciences Modules</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="mb-8 p-3 rounded-lg bg-blue-50 inline-block text-blue-600">
                  {m.icon}
                </div>
                <p className="text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">{m.tag}</p>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAFETY & PERFORMANCE METRICS */}
      <section className="py-20 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Audit Readiness", value: "100%" },
              { label: "Data Integrity", value: "ALCOA+" },
              { label: "Yield Increase", value: "18%" },
              { label: "Risk Reduction", value: "65%" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-blue-900">{stat.value}</div>
                <div className="text-xs text-blue-600 font-bold mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED ECOSYSTEM SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-8 text-slate-900 tracking-tighter uppercase leading-none">
              Sterile Digital <br /><span className="text-blue-600">Infrastructure</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="mt-1 bg-blue-100 p-3 rounded-2xl h-fit">
                  <ShieldAlert className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 tracking-tight">EHS Monitoring</h4>
                  <p className="text-slate-600 leading-relaxed">Continuous monitoring of Environment, Health, and Safety parameters with critical alert systems for plant safety.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 bg-blue-100 p-3 rounded-2xl h-fit">
                  <FlaskConical className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 tracking-tight">Formula Protection</h4>
                  <p className="text-slate-600 leading-relaxed">Highly encrypted digital vaults designed to secure intellectual property and proprietary chemical formulations.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 bg-blue-100 p-3 rounded-2xl h-fit">
                  <Database className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 tracking-tight">Electronic Batch Record (EBR)</h4>
                  <p className="text-slate-600 leading-relaxed">Paperless manufacturing workflows engineered to eliminate human error and ensure GxP compliance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full p-12 bg-[#0F172A] rounded-[3rem] shadow-2xl relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="h-40 rounded-2xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end">
                  <span className="text-3xl font-bold text-white uppercase tracking-tighter italic">CFR 11</span>
                  <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Compliant</span>
               </div>
               <div className="h-40 rounded-2xl bg-blue-600 border border-blue-500 p-6 flex flex-col justify-end">
                  <span className="text-3xl font-bold text-white uppercase tracking-tighter italic">Batch</span>
                  <span className="text-xs text-blue-100 font-bold uppercase tracking-widest">Release Live</span>
               </div>
               <div className="h-40 rounded-2xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end col-span-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-3xl font-bold text-white uppercase tracking-tighter">98.2%</span>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Consistency Status</p>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-6 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHARMA FOOTER CTA */}
      <section className="py-24 px-6 bg-slate-950 text-white text-center border-t border-blue-600/30">
        <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase">Secure Your Digital Molecule</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          Transform your chemical and pharmaceutical manufacturing operations with global safety standards and integrated GxP digital solutions.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95">
          Request Lab Consultation
        </button>
      </section>
    </main>
  );
};

export default PharmaChemicalSuite;