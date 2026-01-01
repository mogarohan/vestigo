'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  HeartPulse, GraduationCap, Umbrella, Coffee, 
  Sparkles, SmilePlus, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const EmployeeBenefits = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const benefitCards = [
    {
      title: "Comprehensive Health",
      desc: "Premium medical, dental, and vision coverage that keeps your employees and their families secure.",
      icon: <HeartPulse className="w-10 h-10 text-pink-500" />,
      bgColor: "bg-pink-50"
    },
    {
      title: "Wealth & Savings",
      desc: "Strategic retirement planning and financial wellness programs designed for long-term stability.",
      icon: <Umbrella className="w-10 h-10 text-blue-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Learning & Growth",
      desc: "Full support for skill upscaling, professional courses, and industry-leading certifications.",
      icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Work-Life Balance",
      desc: "Flexible working arrangements and wellness leave policies to ensure a fresh and motivated workforce.",
      icon: <Coffee className="w-10 h-10 text-orange-500" />,
      bgColor: "bg-orange-50"
    }
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
            <Sparkles size={16} /> INVEST IN YOUR PEOPLE
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Employee <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Benefits.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transform your workplace into a winning culture with Vestigo. 
            We provide modern benefit solutions that drive retention and enterprise productivity.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                View Benefit Plans <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERACTIVE GRID SECTION (Floating Effect) */}
      <section className="relative z-20 -mt-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitCards.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-20 h-20 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">Our People-First Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                We believe that a business is only as strong as its team. Our benefit frameworks are built to mitigate 
                personal risks for your employees, allowing them to focus entirely on driving your company's mission forward.
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          
          <SmilePlus className="w-16 h-16 opacity-80 mx-auto mb-8 text-blue-400" />
          <h2 className="text-3xl md:text-5xl font-black italic mb-8 tracking-tight">
            "Take care of your employees, and they will take care of your business."
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Connect with us today to design a customized benefits package tailored to your industry and workforce needs.
          </p>
          
          <div className="relative z-10">
            <Link 
              href="/contacts"
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployeeBenefits;