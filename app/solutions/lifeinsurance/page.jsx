'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, Umbrella, Banknote, Users, 
  CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const LifeInsurance = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values ko thoda kam kiya hai taaki content screen se bahar na jaye
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const plans = [
    {
      title: "Term Life Insurance",
      desc: "Maximum coverage at affordable premiums, ensuring your family's financial future remains secure.",
      icon: <Umbrella className="w-10 h-10 text-blue-500" />,
      features: ["Pure Protection", "Tax Benefits", "High Sum Assured"]
    },
    {
      title: "Whole Life Plan",
      desc: "Lifetime protection with a savings component that builds cash value for your retirement.",
      icon: <Heart className="w-10 h-10 text-red-500" />,
      features: ["Lifetime Cover", "Cash Value", "Guaranteed Returns"]
    },
    {
      title: "Child Future Plan",
      desc: "Create a robust financial foundation for your children's higher education and marriage milestones.",
      icon: <Users className="w-10 h-10 text-purple-500" />,
      features: ["Wealth Creation", "Premium Waiver", "Fixed Milestones"]
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      
      {/* 1. PREMIUM DARK HERO SECTION - Fixed Height & Padding */}
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

        {/* Content Container - Added relative and z-10 */}
        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} /> LIFETIME PROTECTION
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Family’s Future.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Vestigo stands by you at every stage of life. We provide the financial 
            independence your family deserves, ensuring peace of mind even in your absence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="#plans" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Check Premiums <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. PLANS GRID (Floating Effect) - Fixed Margin */}
      <section id="plans" className="relative z-20 -mt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="flex flex-col p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="mb-6">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{plan.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{plan.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {feat}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  Plan Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Baki ka code same rahega ... */}
      
      {/* 3. WHY VESTIGO */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Why Choose Vestigo?</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-blue-600 h-14 w-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Banknote size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">Hassle-Free Claims</h4>
                  <p className="text-slate-500 leading-relaxed">Our claim settlement ratio is among the highest in the industry, ensuring your family isn't burdened by paperwork.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-blue-600 h-14 w-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">Personalized Advisory</h4>
                  <p className="text-slate-500 leading-relaxed">Expert guidance to select plans based on your current income, liabilities, and future aspirations.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
             <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center border border-slate-100 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black text-blue-600 mb-2">99%</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Settlement Ratio</div>
             </div>
             <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center border border-slate-100 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black text-blue-600 mb-2">10M+</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Policies Secured</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Start Your Legacy Today</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">Don't leave your family's future to chance. Consult with our expert advisors to find a life cover that truly protects.</p>
          <div className="relative z-10">
            <Link href="/contacts" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">Consult an Expert</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeInsurance;