'use client';

import { motion } from 'framer-motion';
import { Users2, ShieldCheck, Globe2, Lightbulb, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAre() {
  const values = [
    {
      title: "Our Expertise",
      desc: "With over a decade of experience, we specialize in navigating complex risk landscapes.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Global Reach",
      desc: "Serving businesses across 15+ countries with localized support and global standards.",
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      title: "Client-Centric",
      desc: "Your success is our priority. We build long-term partnerships based on trust.",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      title: "Innovative Mindset",
      desc: "We leverage AI and modern data analytics to provide predictive risk insights.",
      icon: <Lightbulb className="w-6 h-6" />,
    }
  ];

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 bg-slate-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm"
          >
            Since 2010
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mt-4 mb-6"
          >
            We are <span className="text-blue-500">Vestigo</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A dedicated team of risk strategists, tech innovators, and insurance experts 
            working together to build a safer tomorrow for your business.
          </p>
        </div>
      </section>

      {/* --- STORY SECTION (Left Image, Right Text) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/about-us.jpg" // Image add karva 'public' folder ma rakho
              alt="Our Team Working"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story & Purpose</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Vestigo ni sharuat ek simple vichar sathe thai hati: Insurance complex kem hovun joie  
                Ame technology ane expertise ne bhegu kari ne ek evo platform banavyo che jya 
                business owners ne security ane shanti banne male.
              </p>
              <p>
                Aaje, ame fakt insurance agency nathi, pan tamara growth partner chie. 
                Ame tamara data ne analyze kariye chie ane tamara business mate customize 
                risk management strategy banaviye chie.
              </p>
              <ul className="space-y-4 pt-4">
                {['Direct Claim Settlement', 'Real-time Risk Alerts', 'Expert Consulting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                    <div className="bg-blue-100 p-1 rounded-full text-blue-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY WE ARE DIFFERENT (Grid) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Makes Us Different</h2>
            <p className="text-gray-500">Ame biji insurance companies thi alag kem chie?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 italic text-slate-800">Your Protection is Our Passion.</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-10"></div>
          <p className="mb-8 text-gray-500">Ready to secure your business future with us?</p>
          <Link 
            href="/contacts" 
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  );
}