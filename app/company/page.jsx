'use client';

import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, TrendingUp, CheckCircle2, 
  ShieldCheck, Zap, Headphones, Trophy, Users, 
  Linkedin, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

export default function CompanyOverview() {
  // --- DATA ---
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Clients Globally", value: "500+" },
    { label: "Projects Done", value: "1.2k" },
    { label: "Expert Advisors", value: "50+" },
  ];

  const reasons = [
    { title: "Fastest Claims", icon: <Zap />, color: "bg-amber-100 text-amber-600" },
    { title: "Expert Analysis", icon: <TrendingUp />, color: "bg-blue-100 text-blue-600" },
    { title: "24/7 Support", icon: <Headphones />, color: "bg-green-100 text-green-600" },
    { title: "Proven Track", icon: <Trophy />, color: "bg-purple-100 text-purple-600" }
  ];

  const partners = ["HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", "Bajaj Allianz"];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
          >
            Empowering Businesses Since <span className="text-blue-600">2010</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vestigo fakt insurance nathi, pan tamara business na growth mate nu ek safety shield che.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHY CHOOSE US (Brief) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Why Businesses Trust Us</h2>
              <div className="h-1 w-12 bg-blue-600"></div>
            </div>
            <Link href="../company/whyus" className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
              View All Benefits <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all text-center">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 bg-slate-900 rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Target className="text-blue-400 w-12 h-12" />
            <h3 className="text-4xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-400 text-lg">Protective future banavvu e amari priority che.</p>
          </div>
          <div className="space-y-6">
            <Eye className="text-purple-400 w-12 h-12" />
            <h3 className="text-4xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 text-lg">Digital insurance ma global benchmark banvu.</p>
          </div>
        </div>
      </section>

      {/* 5. PARTNERS SLIDER (Summary) */}
      <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-800">Our Strategic Partners</h2>
            <div className="h-1.5 w-16 bg-blue-600 rounded-full mt-2"></div>
          </div>
        </div>

        <div className="relative flex items-center">
          {/* Overlay Gradients for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

          <motion.div 
            className="flex gap-16 whitespace-nowrap items-center"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter transition-colors">
                <span className="text-blue-600/10 stroke-blue-600 stroke-1 select-none">
                  {p}
                </span>
                <span className="mx-8 text-blue-200">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Alternative style: Solid Blue Text with Hover effect */}
        <div className="mt-12 flex justify-center flex-wrap gap-8 opacity-60">
           {partners.map((p, i) => (
             <span key={i} className="text-blue-700 font-bold tracking-widest text-sm border-b-2 border-blue-100 hover:border-blue-600 transition-all cursor-default">
               {p}
             </span>
           ))}
        </div>
      </section>

      {/* 6. TEAM PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((m) => (
              <div key={m} className="bg-white p-4 rounded-[2rem] shadow-sm group">
                <div className="aspect-square bg-slate-200 rounded-[1.5rem] mb-4 overflow-hidden relative">
                   <Users className="w-12 h-12 absolute inset-0 m-auto text-slate-400" />
                </div>
                <h4 className="font-bold">Executive Member {m}</h4>
                <p className="text-sm text-blue-600">Strategic Director</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="../company/ourteam" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
              See Full Team <Users className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}