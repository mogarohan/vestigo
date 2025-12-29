'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Trophy, 
  LineChart, 
  Clock,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function WhyUs() {
  const reasons = [
    {
      title: "Fastest Claims Processing",
      desc: "Amari digital-first approach thi claims settlement 40% jhadpi thai che.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Expert Risk Analysis",
      desc: "Fakt insurance nahi, ame tamara business na risks ne deep-dive analyze kariye chie.",
      icon: <LineChart className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Emergency ma tame hamesha amari team sathe direct connect kari sako cho.",
      icon: <Headphones className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Proven Track Record",
      desc: "15 years thi 500+ global clients amara par bharoso kare che.",
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* --- HEADER SECTION --- */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              What Sets <span className="text-blue-600">Vestigo</span> Apart?
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Ame fakt tamara insurance provider nathi, ame tamara Safety Architects chie. 
              Jane kem businesses Vestigo ne pasand kare che.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN REASONS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="bg-slate-900 py-24 rounded-[3rem] mx-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Vestigo Advantage</h2>
            <p className="text-slate-400">Traditional Insurance vs. Modern Risk Management</p>
          </div>

          <div className="space-y-4">
            {[
              "Real-time digital dashboard access",
              "Proactive risk mitigation strategies",
              "Transparent claim processing (No hidden fees)",
              "Global compliance standards"
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <span className="text-white font-medium text-lg">{feature}</span>
                <div className="bg-blue-500 p-1.5 rounded-full">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="mt-32 text-center px-6">
        <div className="max-w-4xl mx-auto bg-blue-50 p-12 rounded-[3rem] border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the difference today</h2>
          <p className="text-gray-600 mb-10">Amara experts sathe vaat karo ane tamara business mate sacho plan banavo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Get a Free Audit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}