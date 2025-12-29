'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Briefcase, 
  HeartPulse, 
  Factory, 
  Truck, 
  Search,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

import Link from 'next/link';

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Corporate', 'Health', 'Logistics', 'Industrial'];

  const solutions = [
    {
      id: "commercialinsurance",
      category: 'Corporate',
      title: "Commercial Insurance",
      desc: "Tamara business assets ane liabilities ne secure karva mate expert cover.",
      features: ["Property Insurance", "Liability Cover", "Cyber Risk"],
      icon: <Briefcase className="w-6 h-6" />,
      color: "blue"
    },
    {
      id: "employeebenifits",
      category: 'Health',
      title: "Employee Benefits",
      desc: "Tamara team mate best-in-class health insurance ane wellness programs.",
      features: ["Group Medical", "Accident Cover", "Mental Wellness"],
      icon: <HeartPulse className="w-6 h-6" />,
      color: "green"
    },
    {
      id: "audits&riskassessment",
      category: 'Industrial',
      title: "Audits & Riskassessment",
      desc: "Heavy machinery ane industrial units mate specialized risk management.",
      features: ["Machinery Breakdown", "Fire & Special Perils", "Stock Insurance"],
      icon: <Factory className="w-6 h-6" />,
      color: "amber"
    },
    {
      id: "greenXinsurance",
      category: 'Logistics',
      title: "Green X Insurance",
      desc: "Goods ni safe delivery mate supply chain insurance solutions.",
      features: ["Cargo Insurance", "Transit Protection", "Fleet Management"],
      icon: <Truck className="w-6 h-6" />,
      color: "purple"
    },
    {
      id: "claimsmanagement",
      category: 'Corporate',
      title: "Claims Management",
      desc: "Leadership team ne legal ane financial risks thi bachavva mate.",
      features: ["Legal Defense", "Decision Protection", "Global Cover"],
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "red"
    },
    {
      id: "abilitysuite",
      category: 'Industrial',
      title: "Ability Suite",
      desc: "Insurance leta pehla tamara real risks nu expert assessment.",
      features: ["Safety Gap Analysis", "Premium Optimization", "Compliance"],
      icon: <Search className="w-6 h-6" />,
      color: "indigo"
    }
  ];

  const filteredSolutions = activeCategory === 'All' 
    ? solutions 
    : solutions.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-white pt-24 pb-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Customized <span className="text-blue-600">Solutions</span> for Your Growth
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Ame tamara industry mujab perfect insurance strategy design kariye chie.
          </p>

          {/* --- CATEGORY FILTER --- */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSolutions.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${item.color}-100 text-${item.color}-600`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow">{item.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/solutions/${item.id}`}
                  className="group flex items-center justify-between py-4 px-6 bg-slate-50 rounded-2xl font-bold text-slate-900 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Learn More 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl font-bold mb-6">Need a Tailored Solution?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Amara experts sathe vaat karo ane tamara business mate sacho plan banavo.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
            Talk to an Expert
          </button>
        </div>
      </section>
    </main>
  );
}