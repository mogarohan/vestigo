'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Briefcase, 
  HeartPulse, 
  Factory, 
  Truck, 
  Search,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import Link from 'next/link';
import { 
  faBuildingShield, 
  faClipboardCheck, 
  faUsersGear, 
  faHeartPulse, 
  faFileShield, 
  faTruckFast, 
  faFileContract, 
  faMagnifyingGlassChart 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    icon: <FontAwesomeIcon icon={faBuildingShield} />,
    accent: "from-blue-500 to-cyan-400",
    lightBg: "bg-blue-50"
  },
  {
    id: "audits-riskassessment",
    category: 'Industrial',
    title: "Audits & Risk Assessment",
    desc: "Heavy machinery ane industrial units mate specialized risk management.",
    features: ["Machinery Breakdown", "Fire & Special Perils", "Stock Insurance"],
    icon: <FontAwesomeIcon icon={faClipboardCheck} />,
    accent: "from-orange-500 to-amber-400",
    lightBg: "bg-amber-50"
  },
  {
    id: "employeebenifits",
    category: 'Health',
    title: "Employee Benefits",
    desc: "Tamara team mate best-in-class health insurance ane wellness programs.",
    features: ["Group Medical", "Accident Cover", "Mental Wellness"],
    icon: <FontAwesomeIcon icon={faUsersGear} />,
    accent: "from-emerald-500 to-teal-400",
    lightBg: "bg-emerald-50"
  },
  {
    id: "lifeinsurance",
    category: 'Health',
    title: "Life Insurance",
    desc: "Tamara parivaar ane employees ni financial security mate long-term protection.",
    features: ["Term Insurance", "Group Life Cover", "Keyman Insurance"],
    icon: <FontAwesomeIcon icon={faHeartPulse} />,
    accent: "from-rose-500 to-pink-400",
    lightBg: "bg-rose-50"
  },
  {
    id: "claimsmanagement",
    category: 'Corporate',
    title: "Claims Management",
    desc: "Leadership team ne legal ane financial risks thi bachavva mate.",
    features: ["Legal Defense", "Decision Protection", "Global Cover"],
    icon: <FontAwesomeIcon icon={faFileShield} />,
    accent: "from-slate-500 to-slate-400",
    lightBg: "bg-slate-50"
  },
  {
    id: "greenXinsurance",
    category: 'Logistics',
    title: "Green X Insurance",
    desc: "Goods ni safe delivery mate supply chain insurance solutions.",
    features: ["Cargo Insurance", "Transit Protection", "Fleet Management"],
    icon: <FontAwesomeIcon icon={faTruckFast} />,
    accent: "from-purple-500 to-indigo-400",
    lightBg: "bg-purple-50"
  },
  {
    id: "suretybond-creditinsurance",
    category: 'Corporate',
    title: "Surety Bond",
    desc: "Contractual obligations ane financial guarantees mate secure bonds.",
    features: ["Performance Bonds", "Bid Bonds", "Credit Insurance"],
    icon: <FontAwesomeIcon icon={faFileContract} />,
    accent: "from-cyan-500 to-blue-400",
    lightBg: "bg-cyan-50"
  },
  {
    id: "abilitysuite",
    category: 'Industrial',
    title: "Ability Suite",
    desc: "Insurance leta pehla tamara real risks nu expert assessment.",
    features: ["Safety Gap Analysis", "Premium Optimization", "Compliance"],
    icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
    accent: "from-indigo-500 to-blue-400",
    lightBg: "bg-indigo-50"
  }
];

  const filteredSolutions = useMemo(() => 
    activeCategory === 'All' 
      ? solutions 
      : solutions.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      
      {/* --- DYNAMIC HEADER --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6"
          >
            <Sparkles size={16} /> Our Specialized Portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            Precision <span className="text-blue-600">Protection.</span>
          </motion.h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            We don't offer generic plans. We engineer insurance architectures 
            specifically designed for your industry's DNA.
          </p>

          {/* --- PILL FILTER --- */}
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-slate-100/50 backdrop-blur-md rounded-[2.5rem] w-fit mx-auto border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'text-white' 
                  : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSolutions.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col h-full relative overflow-hidden"
              >
                {/* Decoration: Subtle Circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full transition-colors duration-500 ${item.lightBg} group-hover:bg-opacity-50`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${item.accent} text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                
                <div className="space-y-4 mb-10">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.accent}`} />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/solutions/${item.id}`}
                  className="group/btn flex items-center justify-between py-5 px-8 bg-slate-900 rounded-[2rem] font-bold text-white hover:bg-blue-600 transition-all duration-300"
                >
                  Configure Solution 
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- INTERACTIVE CTA SECTION --- */}
      <section className="py-20 px-6">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-[#0F172A] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div 
             animate={{ x: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 8, repeat: Infinity }}
             className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px]" 
          />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <Layers className="text-blue-400" size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              Can't find a <span className="text-blue-400 italic font-serif">Perfect</span> Fit?
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Every business is a unique entity. If our standard suites don't match your specific risk profile, our underwriters will build a bespoke plan for you from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-2xl">
                Consult an Underwriter
              </button>
              <button className="bg-white/5 border border-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}