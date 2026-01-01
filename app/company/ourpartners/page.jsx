'use client';

import { motion } from 'framer-motion';
import { Handshake, ArrowUpRight, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  // Tamara Partner Companies na Logo Names
  const partners = [
    "HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", 
    "Bajaj Allianz", "New India Assurance", "Care Health", "Niva Bupa"
  ];

  // Infinite slider mate list ne double kari nakhiye
  const duplicatedPartners = [...partners, ...partners];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Handshake className="w-4 h-4" /> Trusted Ecosystem
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Strategic <span className="text-blue-600">Partners</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Vestigo ma ame bharat ni top insurance companies sathe collab kariye chie, 
            jethi tamne best premium ane fast settlement mali shake.
          </p>
        </div>
      </section>

    {/* --- LIGHT BLUE PARTNER MARQUEE --- */}
<div className="py-20 bg-[#F0F7FF] border-y border-blue-100 overflow-hidden">
  <motion.div 
    animate={{ x: [0, -1200] }}
    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
    className="flex gap-24 whitespace-nowrap items-center"
  >
    {["HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", "Bajaj Allianz", "HDFC ERGO", "TATA AIG", "ICICI Lombard", "HDFC ERGO", "TATA AIG"].map((p, i) => (
      <span 
        key={i} 
        className="text-6xl font-black text-blue-300/40 hover:text-blue-500 hover:scale-105 transition-all duration-700 uppercase italic tracking-tighter cursor-default select-none"
        style={{ textShadow: '0 2px 10px rgba(7, 20, 80, 0.1)' }}
      >
        {p}
      </span>
    ))}
  </motion.div>
</div>

      {/* --- PARTNERSHIP TYPES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Insurance Providers",
              desc: "Top-tier insurers sathe direct integration jethi tamne quick quotes male.",
              icon: <ShieldCheck className="w-6 h-6" />
            },
            {
              title: "Tech Partners",
              desc: "Digital solutions mate amara infrastructure partners.",
              icon: <Globe className="w-6 h-6" />
            },
            {
              title: "Audit Partners",
              desc: "Risk evaluation mate expert third-party auditors.",
              icon: <ArrowUpRight className="w-6 h-6" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BECOME A PARTNER CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Vestigo</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Shu tame ek insurance provider cho ke fintech startup? 
            Chalo sathe mali ne risk management ne modernize kariye.
          </p>
          <Link 
            href="/contacts" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </main>
  );
}



