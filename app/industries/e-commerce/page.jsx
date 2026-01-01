'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Package, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  FileText,
  Boxes,
  Globe,
  ChevronRight,
  Sparkles,
  ShoppingCart
} from 'lucide-react';

const IndustrialMarketplace = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 'y' transform ko 100 tak limit kiya hai taaki cutting ka risk kam ho
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const products = [
    { id: 1, name: "Variable Frequency Drive (VFD)", price: "₹45,000", spec: "5.5kW / 440V", tag: "Electrical" },
    { id: 2, name: "ISO Safety Harness Kit", price: "₹2,800", spec: "Double Lanyard", tag: "Safety" },
    { id: 3, name: "Pneumatic Cylinder - 50mm", price: "₹5,200", spec: "Stainless Steel", tag: "Automation" },
    { id: 4, name: "Industrial Air Compressor", price: "₹1,25,000", spec: "10 HP / 300L", tag: "Machinery" }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. PREMIUM DARK HERO SECTION */}
      {/* FIX: pb-80 aur min-h-[100vh] se content cut hona band ho jayega */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] pt-32 pb-80">
        
        {/* Hero Background Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" 
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 px-6 text-center max-w-7xl mx-auto">
          <motion.div style={{ y, opacity }}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="inline-flex items-center gap-2 px-5 py-2 border border-blue-400/20 rounded-full bg-blue-500/5 text-blue-400 text-xs font-black mb-8 backdrop-blur-xl uppercase tracking-widest"
            >
              <Sparkles size={14} /> Global Industrial Marketplace
            </motion.div>
            
            <h1 className="text-6xl md:text-[7.5rem] font-black text-white mb-8 tracking-tighter leading-[1] uppercase">
              Precision Parts. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Supply Chain.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              The premier digital destination for factory-direct procurement. 
              Streamline bulk orders with automated digital tax invoicing and priority global logistics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-blue-600/20 uppercase tracking-widest text-sm flex items-center gap-3">
                  Request Bulk Quote <ArrowRight size={20} />
               </button>
               <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all backdrop-blur-sm uppercase tracking-widest text-sm">
                  Partner Portal
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROPS (Floating Overlap) */}
      <section className="relative z-20 -mt-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck size={28} />, label: "ISO Certified", desc: "Institutional Quality" },
            { icon: <FileText size={28} />, label: "GST Ready", desc: "Digital Invoicing" },
            { icon: <Truck size={28} />, label: "Express Shipping", desc: "Priority Logistics" },
            { icon: <Boxes size={28} />, label: "Bulk Inventory", desc: "Always in Stock" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-900/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">{item.label}</h4>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Market Essentials</h2>
              <div className="h-1.5 w-24 bg-blue-600 mt-5 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <motion.div 
                key={p.id} 
                whileHover={{ y: -10 }}
                className="group border border-slate-100 rounded-[2.5rem] p-7 hover:shadow-2xl hover:shadow-blue-600/5 transition-all bg-white flex flex-col"
              >
                <div className="h-56 bg-slate-50 rounded-[2rem] mb-6 flex items-center justify-center relative overflow-hidden">
                   <Package size={64} className="text-slate-200 group-hover:scale-110 group-hover:text-blue-100 transition-all duration-700" />
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-1 leading-tight">{p.name}</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.15em] mb-8">{p.spec}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                   <span className="text-2xl font-black text-slate-900">{p.price}</span>
                   <button className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/20">
                      <ShoppingCart size={22} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RFQ Section */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-6xl font-black mb-8 leading-[1] text-slate-900 tracking-tighter uppercase">
              Enterprise <br /> <span className="text-blue-600">Procurement.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Institutional grade ordering. Submit your Bill of Materials (BOM) to receive custom volume pricing.
            </p>
          </div>
          
          <div className="flex-1 w-full bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
             <h4 className="font-black text-2xl mb-10 uppercase tracking-tighter">Submit RFQ</h4>
             <form className="space-y-6">
               <input type="text" placeholder="Component Name or Part #" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm outline-none font-medium" />
               <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Order Quantity" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm outline-none" />
                  <input type="text" placeholder="Target Price" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm outline-none" />
               </div>
               <button className="w-full bg-[#0F172A] hover:bg-blue-600 text-white font-black py-6 rounded-[2rem] shadow-2xl transition-all uppercase tracking-[0.2em] text-xs">
                  Request Quotation <ChevronRight size={20} />
               </button>
             </form>
          </div>
        </div>
      </section>

    </main>
  );
};

export default IndustrialMarketplace;