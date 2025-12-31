'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

import { 
  faCar, 
  faLandmark, 
  faCartShopping, 
  faLaptopCode, 
  faCogs, 
  faShip, 
  faFlaskVial, 
  faLeaf, 
  faHospitalUser, 
  faHotel, 
  faBoxOpen, 
  faScroll, 
  faPrescriptionBottle, 
  faShirt, 
  faIndustry, 
  faTree, 
  faGlobe, 
  faShieldHalved,
  faUsers, 
  faBuilding, 
  faBolt, 
  faArrowRight, 
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const IndustriesHome = () => {
  // Mapping your directory with Font Awesome
  const industriesDirectory = [
    { name: 'Automotive', href: '/industries/automobile', icon: <FontAwesomeIcon icon={faCar} /> },
    { name: 'BFSI', href: '/industries/BFSI', icon: <FontAwesomeIcon icon={faLandmark} /> },
    { name: 'E-Commerce', href: '/industries/e-commerce', icon: <FontAwesomeIcon icon={faCartShopping} /> },
    { name: 'IT & Tech', href: '/industries/it', icon: <FontAwesomeIcon icon={faLaptopCode} /> },
    { name: 'Engineering', href: '/industries/engineering', icon: <FontAwesomeIcon icon={faCogs} /> },
    { name: 'Shipping', href: '/industries/shipping&odccargo', icon: <FontAwesomeIcon icon={faShip} /> },
    { name: 'Chemical & Pharmacy', href: '/industries/chemical&pharmaceuticals', icon: <FontAwesomeIcon icon={faFlaskVial} /> },
    { name: 'Green Energy', href: '/industries/greenenergy', icon: <FontAwesomeIcon icon={faLeaf} /> },
    { name: 'Hospital & Education', href: '/industries/hospital&education', icon: <FontAwesomeIcon icon={faHospitalUser} /> },
    { name: 'Hospitality', href: '/industries/hospitality', icon: <FontAwesomeIcon icon={faHotel} /> },
    { name: 'Packaging', href: '/industries/packaging', icon: <FontAwesomeIcon icon={faBoxOpen} /> },
    { name: 'Paper Mills', href: '/industries/papermills', icon: <FontAwesomeIcon icon={faScroll} /> },
    { name: 'Plastic', href: '/industries/plastic', icon: <FontAwesomeIcon icon={faPrescriptionBottle} /> },
    { name: 'Textile', href: '/industries/textile', icon: <FontAwesomeIcon icon={faShirt} /> },
    { name: 'SME & MSME', href: '/industries/SME&MSME', icon: <FontAwesomeIcon icon={faIndustry} /> },
    { name: 'Wood & Laminates', href: '/industries/wood&laminates', icon: <FontAwesomeIcon icon={faTree} /> },
  ];

  const featuredSectors = [
    { title: "Manufacturing", desc: "Industry 4.0 aur IoT integration.", icon: <FontAwesomeIcon icon={faIndustry} className="text-3xl" /> },
    { title: "Energy & Power", desc: "Smart grid aur resource management.", icon: <FontAwesomeIcon icon={faBolt} className="text-3xl" /> },
    { title: "Infrastructure", icon: <FontAwesomeIcon icon={faBuilding} className="text-3xl" />, desc: "Large-scale project tracking tools." },
    { title: "BFSI", icon: <FontAwesomeIcon icon={faLandmark} className="text-3xl" />, desc: "High-security financial digital shields." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. Global Hero Section */}
      <section className="relative bg-[#0a192f] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20 uppercase tracking-widest">
              <FontAwesomeIcon icon={faGlobe} /> Global Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Scaling <span className="text-blue-500">Industries</span> <br /> 
              with Intelligence.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-10">
              Vestigo Enterprise Suite provides specialized technology stacks for the world's most demanding industrial sectors. Efficiency, digitized.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/industries" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-3">
                Explore Solutions <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full lg:block hidden">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-blue-400 font-mono text-sm uppercase">System_Status: Active</div>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                  </div>
                  <div className="space-y-4">
                    {[75, 40, 90].map((val, i) => (
                      <div key={i} className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: `${val}%`}}></div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Sectors Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Sectors We Empower</h2>
              <p className="text-slate-500">Comprehensive digital transformation across diverse industrial landscapes.</p>
            </div>
            <Link href="/industries" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-all">
              View Full Directory <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {featuredSectors.map((s, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/20">
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{s.title}</h3>
                <p className="text-slate-500 text-sm group-hover:text-blue-100 mb-6">{s.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-white/30 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Directory List */}
          <div className="border-t border-slate-100 pt-16">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-px bg-blue-600 w-12"></div>
               <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Safety Shields for Every Sector</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {industriesDirectory.map((ind, i) => (
                <Link 
                  key={i} 
                  href={ind.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
                    {ind.icon}
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700 text-sm md:text-base">
                    {ind.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Reach / Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-bold mb-6">Built for the <br /><span className="text-blue-600">Global Economy</span></h2>
               <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                 Humaara platform global standards (ISO, GDPR, NIST) ko follow karta hai, taaki aapka business duniya mein kahin bhi scale kar sake.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div><h4 className="font-bold text-2xl">500+</h4><p className="text-xs text-slate-500 uppercase font-bold">Clients</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div><h4 className="font-bold text-2xl">40+</h4><p className="text-xs text-slate-500 uppercase font-bold">Countries</p></div>
                  </div>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
               <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3">
                 <FontAwesomeIcon icon={faShieldHalved} className="text-green-500" /> Security & Compliance
               </h4>
               <ul className="space-y-4">
                 {["End-to-end data encryption", "24/7 Security Operations Center", "Multi-region cloud hosting", "Zero-trust architecture"].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm border-b border-slate-50 pb-3 last:border-0">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Ready to modernize your Industry?</h2>
          <p className="text-slate-500 text-lg mb-12">
            Apne operations ko digitize karein aur productivity ko nayi oonchaiyon par le jayein.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacts" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-600/20 text-center flex items-center justify-center gap-3">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contacts" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 rounded-full font-bold transition-all text-center">
              Talk to Specialist
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default IndustriesHome;