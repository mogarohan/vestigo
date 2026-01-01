'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, Eye, TrendingUp, ShieldCheck, Zap, 
  Headphones, Trophy, Users, ChevronRight, 
  Sparkles, Building2, Globe, ArrowRight, Handshake
} from 'lucide-react';
import Link from 'next/link';

export default function CompanyOverview() {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { label: "Years Experience", value: "15+", icon: <Trophy size={20} /> },
    { label: "Clients Globally", value: "500+", icon: <Users size={20} /> },
    { label: "Expert Advisors", value: "50+", icon: <Building2 size={20} /> },
    { label: "Global Presence", value: "10+", icon: <Globe size={20} /> },
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
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
            <Sparkles size={16} /> SECURING YOUR FUTURE SINCE 2010
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resilience.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vestigo isn't just insurance—it's a safety shield for your dreams. 
            We turn uncertainty into opportunity through trust and technology.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/company/whoweare" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                Learn Who We Are <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. STATS GRID (Overlap Effect) */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY US SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-2 leading-tight">
              The Vestigo <span className="italic font-serif text-blue-600">Advantage.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our unique approach combines AI-driven risk mapping with human-centric support, 
              ensuring that you are always protected by the best in the industry.
            </p>
            <Link href="/company/whyus" className="inline-flex items-center gap-2 font-bold text-slate-900 group">
              Explore our unique values <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Fast Claims", icon: <Zap />, color: "bg-amber-100 text-amber-600" },
              { title: "Expert Support", icon: <Headphones />, color: "bg-blue-100 text-blue-600" },
              { title: "Global Trust", icon: <ShieldCheck />, color: "bg-emerald-100 text-emerald-600" },
              { title: "Proven Track", icon: <Trophy />, color: "bg-purple-100 text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden rounded-[3rem] mx-6">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full" />
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
               <Target className="text-blue-400 mb-6" size={40} />
               <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                 To build a protective future for every client. We deliver excellence in every claim through transparent and simplified settlements.
               </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-blue-600 shadow-2xl shadow-blue-900/50">
               <Eye className="text-white mb-6" size={40} />
               <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
               <p className="text-blue-50 text-lg leading-relaxed">
                 To be the global benchmark in digital insurance. To become the world's most trusted partner in navigating business risks.
               </p>
            </div>
         </div>
      </section>

      {/* 5. TEAM & PARTNERS PREVIEW */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <Users className="text-blue-600 mb-6" size={48} />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Specialists</h3>
              <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                Meet the minds behind your security. Our advisors bring decades of combined expertise to your doorstep.
              </p>
              <Link href="/company/ourteam" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
                Meet the Team <ChevronRight size={18} />
              </Link>
            </div>

            <div className="group bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-emerald-300 transition-all shadow-sm">
              <Handshake className="text-emerald-600 mb-6" size={48} />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Strategic Alliances</h3>
              <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                We work with global industry leaders and underwriters to provide the most robust coverage possible.
              </p>
              <Link href="/company/ourpartners" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors">
                Our Partners <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA HUB */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Start Your Journey With Us</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Explore the different facets of our company and see why 500+ clients trust Vestigo for their security.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link href="/company/whoweare" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-50 transition-all">
              Who We Are
            </Link>
            <Link href="/contacts" className="bg-blue-900/30 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Contact Specialists
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}