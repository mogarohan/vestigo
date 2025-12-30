'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ShieldCheck, BarChart3, Users, Heart, ArrowRight, PlayCircle } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <main>
      
      {/* --- HERO SECTION WITH VIDEO BACKGROUND --- */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center text-white overflow-hidden">
        {/* Background Video/Animation Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent z-10" />
          {/* Replace this URL with your actual abstract video file */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-blue-lines-network-loop-22244-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Modern Risk Protection
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Legacy.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Beyond just insurance—we provide a digital-first safety net for forward-thinking enterprises.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link
                href="/contacts"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-2xl font-bold transition-all">
                <PlayCircle className="text-blue-400" /> Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block relative"
          >
            {/* Visual Glass Card Effect */}
            <div className="relative z-10 backdrop-blur-3xl bg-white/10 p-2 rounded-[3rem] border border-white/20 shadow-2xl">
              <div className="rounded-[2.5rem] overflow-hidden">
                 <Image
                  src="/logo.jpg" 
                  alt="Insurance Hero"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-20 border border-slate-100"
            >
              <div className="bg-blue-600 p-3 rounded-2xl">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <div>
                <p className="text-slate-900 font-black text-xl leading-none">100%</p>
                <p className="text-slate-500 text-sm font-medium">Secured Assets</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS & COMPANY OVERVIEW --- */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Empowering Businesses <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Since 2010</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Vestigo is not just about policies; it s about partnership. We integrate advanced data analytics with 15+ years of human expertise to ensure your growth is never interrupted.
              </p>
              
              <div className="grid grid-cols-2 gap-6" ref={statsRef}>
                {[
                  { label: "Experience", value: "15+ Yrs" },
                  { label: "Active Clients", value: "500+" },
                  { label: "Claims Settled", value: "99.2%" },
                  { label: "Expert Staff", value: "50+" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-blue-600 transition-colors duration-500"
                  >
                    <div className="text-3xl font-black text-blue-600 group-hover:text-white mb-1 transition-colors">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-1 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden"
                  >
                    <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
                    <p className="text-slate-400 text-lg relative z-10">
                      Delivering excellence through transparent, lightning-fast claim settlements. 
                    </p>
                    <ShieldCheck className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-10 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden"
                  >
                    <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
                    <p className="text-blue-100 text-lg relative z-10">
                      To be the world’s most trusted partner in navigating digital-era risks.
                    </p>
                    <BarChart3 className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10 rotate-12" />
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES WITH "FLOATING" CARDS --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Risk Assessment", icon: <BarChart3 />, color: "bg-emerald-500" },
              { name: "Claims Management", icon: <ShieldCheck />, color: "bg-blue-500" },
              { name: "Employee Benefits", icon: <Users />, color: "bg-violet-500" },
              { name: "Life Insurance", icon: <Heart />, color: "bg-rose-500" }
            ].map((sol, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group relative p-10 rounded-[2rem] bg-white border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${sol.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform`}>
                  {React.cloneElement(sol.icon, { size: 28 })}
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-4">{sol.name}</h3>
                <p className="text-slate-500 mb-8">Comprehensive coverage strategies for modern industry challenges.</p>
                <Link href="/solutions" className="flex items-center gap-2 text-blue-600 font-bold group/link">
                  Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PARTNERS MARQUEE --- */}
      <div className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {["HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", "Bajaj Allianz", "HDFC ERGO", "TATA AIG", "ICICI Lombard"].map((p, i) => (
            <span key={i} className="text-5xl font-black text-slate-100 hover:text-blue-600/20 transition-colors uppercase italic">
              {p}
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-[4rem] bg-[#0F172A] p-16 md:p-32 text-center relative overflow-hidden"
        >
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -ml-48 -mb-48" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter">Ready to secure <br />your journey?</h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              Contact Our Experts <ArrowRight />
            </Link>
          </div>
        </motion.div> 
      </section>
    </main>
  );
}