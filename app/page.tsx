'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ShieldCheck, BarChart3, Users, Heart, ArrowRight, PlayCircle ,Briefcase} from 'lucide-react';
import Hero from './components/Hero';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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
    <main className={poppins.className}>
      
      {/* --- HERO SECTION --- *
      <section className="relative h-[90vh] min-h-[700px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent z-10" />
          <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-110">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-blue-lines-network-loop-22244-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Modern Risk Protection
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Legacy.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Beyond just insurance—we provide a digital-first safety net for forward-thinking enterprises.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contacts" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all hover:-translate-y-1 flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-2xl font-bold transition-all">
                <PlayCircle className="text-blue-400" /> Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="hidden md:block relative">
            <div className="relative z-10 backdrop-blur-3xl bg-white/10 p-2 rounded-[3rem] border border-white/20 shadow-2xl">
              <div className="rounded-[2.5rem] overflow-hidden">
                 <Image src="/logo.jpg" alt="Insurance Hero" width={500} height={600} className="w-full h-auto object-cover" priority />
              </div>
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-30 ml-42 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-20 border border-slate-100"
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
      </section>*/}
      <Hero/>

      {/* --- STATS SECTION --- */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Empowering Businesses <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Since 2010</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Vestigo integrates advanced data analytics with 15+ years of human expertise to ensure your growth is never interrupted.
              </p>
              <div className="grid grid-cols-2 gap-6" ref={statsRef}>
                {[{ label: "Experience", value: "15+ Yrs" }, { label: "Active Clients", value: "500+" }, { label: "Claims Settled", value: "99.2%" }, { label: "Expert Staff", value: "50+" }].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isStatsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-blue-600 transition-colors duration-500">
                    <div className="text-3xl font-black text-blue-600 group-hover:text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-slate-400 text-lg">Delivering excellence through transparent, lightning-fast settlements.</p>
                  <ShieldCheck className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
                </div>
                <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 text-lg">To be the world’s most trusted partner in navigating digital-era risks.</p>
                  <BarChart3 className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10 rotate-12" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES SECTION --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold uppercase tracking-widest text-sm">What we offer</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Our Specialized Services</motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Risk Assessment", icon: <BarChart3 />, color: "bg-emerald-500", desc: "Identify and mitigate potential threats before they impact your operations." },
              { name: "Claims Management", icon: <ShieldCheck />, color: "bg-blue-500", desc: "A streamlined process designed for speed and complete transparency." },
              { name: "Employee Benefits", icon: <Users />, color: "bg-violet-500", desc: "Retain top talent with comprehensive health and wellness packages." },
              { name: "Life Insurance", icon: <Heart />, color: "bg-rose-500", desc: "Secure the financial future of your loved ones and business partners." }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="group relative p-10 rounded-[2rem] bg-white border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <div className={`w-14 h-14 ${sol.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform`}>
                  {React.cloneElement(sol.icon, { size: 28 })}
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-4">{sol.name}</h3>
                <p className="text-slate-500 mb-8">{sol.desc}</p>
                <Link href="/solutions" className="flex items-center gap-2 text-blue-600 font-bold group/link">
                  Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- OUR PARTNERS SECTION --- */}
      <section className="py-24 bg-[#F0F7FF] border-y border-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900">Our Strategic Partners</h2>
            <p className="text-blue-600/70 font-medium mt-1">Global leaders powering our protection network</p>
          </div>
          <div className="h-px flex-grow bg-blue-200/50 hidden md:block mx-10"></div>
          <div className="px-6 py-2 bg-white rounded-full border border-blue-200 text-blue-600 text-sm font-bold shadow-sm">
            Trusted by 500+ Companies
          </div>
        </div>

        <motion.div animate={{ x: [0, -1200] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="flex gap-24 whitespace-nowrap items-center">
          {["HDFC ERGO", "TATA AIG", "ICICI BANK", "Star Health", "Bajaj Allianz", "HDFC BANK", "TATA AIG", "ICICI Lombard", "HDFC ERGO", "TATA AIG"].map((p, i) => (
            <span key={i} className="text-6xl font-black text-blue-300/40 hover:text-blue-500 hover:scale-105 transition-all duration-700 uppercase italic tracking-tighter cursor-default select-none" style={{ textShadow: '0 2px 10px rgba(59, 130, 246, 0.1)' }}>
              {p}
            </span>
          ))}
        </motion.div>
      </section>
{/* --- INDUSTRIES GRID: SHORT LIST --- */}
<section className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="text-blue-600 font-bold uppercase tracking-widest text-sm"
      >
        Sectors we protect
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="text-4xl md:text-5xl font-bold text-slate-900 mt-3"
      >
        Safety Shields for Every Sector
      </motion.h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[
        { name: 'Automotive', href: '/industries/automobile' },
        { name: 'BFSI', href: '/industries/BFSI' },
        { name: 'IT & Tech', href: '/industries/it' },
        { name: 'Engineering', href: '/industries/engineering' },
        { name: 'Green Energy', href: '/industries/greenenergy' },
        { name: 'Chemical & Pharma', href: '/industries/chemical&pharmaceuticals' },
        { name: 'Hospitality', href: '/industries/hospitality' },
        { name: 'SME & MSME', href: '/industries/SME&MSME' },
      ].map((industry, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-blue-600 hover:shadow-xl"
        >
          <Link href={industry.href} className="flex h-full flex-col justify-between">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors">
              {industry.name}
            </h3>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-100">
              Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          {/* Subtle background icon/graphic effect */}
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <Briefcase size={80} />
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="mt-16 text-center"
    >
      <Link 
        href="/industries" 
        className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-3 font-bold text-slate-600 transition-all hover:border-blue-600 hover:text-blue-600"
      >
        View All 16+ Industries <ArrowRight size={18} />
      </Link>
    </motion.div>
  </div>
</section>
      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto rounded-[4rem] bg-[#0F172A] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -ml-48 -mb-48" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-[5rem] font-bold text-white mb-10 tracking-tighter leading-tight">Ready to secure <br />your journey?</h2>
            <Link href="/contacts" className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all">
              Contact Our Experts <ArrowRight />
            </Link>
          </div>
        </motion.div> 
      </section>
    </main>
  );
}