'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, FileText, Gavel, BarChart4, 
  CheckCircle, ArrowRight, Landmark, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const SuretyBondPage = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const categories = [
    {
      title: "Surety Bonds",
      desc: "Guaranteed contract performance and legal compliance. Ideal for infrastructure, construction, and government tenders.",
      icon: <Gavel className="w-10 h-10 text-indigo-500" />,
      items: ["Bid Bonds", "Performance Bonds", "Payment Bonds", "Customs Bonds"]
    },
    {
      title: "Credit Insurance",
      desc: "Protect your accounts receivable against bad debt and insolvency to ensure consistent cash flow.",
      icon: <BarChart4 className="w-10 h-10 text-indigo-500" />,
      items: ["Trade Credit", "Export Credit", "Accounts Receivable", "Political Risk"]
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company Style) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A] pt-32 pb-40">
        {/* Animated Background Gradients (Indigo theme) */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-indigo-400/30 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} /> FINANCIAL RISK MANAGEMENT
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Surety Bonds & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">Credit Insurance.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Secure your international trade and domestic contracts against financial uncertainty. 
            Vestigo provides the credibility your business needs to scale.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20">
                Apply for Bond <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES GRID (Floating over Hero) */}
      <section className="relative z-20 -mt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 hover:border-indigo-200 transition-all"
            >
              <div className="bg-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                {cat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{cat.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">{cat.desc}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-indigo-500" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="bg-slate-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              { title: "Risk Analysis", desc: "Our specialists conduct a deep-dive evaluation of your operational and financial risk profile." },
              { title: "Structuring", desc: "We engineer a customized bond or credit insurance policy tailored to your specific project needs." },
              { title: "Digital Issuance", desc: "Fast-track policy issuance through our secure digital verification and underwriting platform." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-black text-indigo-600 shadow-xl mb-6 border border-slate-100">
                  {i + 1}
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]" />
          
          <ShieldCheck className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Consult With Risk Specialists
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Get expert guidance on surety bonds and credit insurance. Close your security gaps today.
          </p>
          
          <div className="relative z-10">
            <Link 
              href="/contacts" 
              className="inline-flex items-center gap-3 bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl"
            >
              Speak to a Specialist <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuretyBondPage;