'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Users, Heart, ArrowRight } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function HomePage() {
  return (
    <main className={`pt-16 ${poppins.className} overflow-hidden`}>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden py-24 lg:py-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400">
              Trusted Risk Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Future</span> With Confidence
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Smart insurance solutions tailored for modern businesses. We manage your risks so you can focus on growth.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1"
              >
                Get Started Now
              </Link>
              <Link
                href="/solutions"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Our Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image and Secured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-[400px]">
              <Image
                src="/logo" // Check karo ke tame 'public' folder ma aa name thi image rakhi che.
                alt="Insurance Hero"
                width={400}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Card - Exactly below the image */}
            <div className="mt-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 w-fit animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-lg">
                <ShieldCheck className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">100% Secured</p>
                <p className="text-slate-500 text-xs">Verified Protection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Features) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Businesses Trust Us</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              We combine years of expertise with modern technology to provide seamless insurance experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Expert Advisors", icon: <Users className="w-8 h-8" />, desc: "Industry veterans providing strategic risk guidance." },
              { title: "Customized Plans", icon: <BarChart3 className="w-8 h-8" />, desc: "Tailored policies that fit your specific business needs." },
              { title: "24/7 Priority Support", icon: <ShieldCheck className="w-8 h-8" />, desc: "We are always here when you need to file a claim." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="text-blue-600 mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- NEW: COMPANY OVERVIEW SECTION (Insert here) --- */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
      {/* Left Content */}
      <div className="lg:w-1/2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Company Overview
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Empowering Businesses <br /> Since <span className="text-blue-600">2010</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Vestigo fakt insurance nathi, pan tamara business na growth mate nu ek safety shield che. 
          Hum provide karte hain world-class risk management solutions jo aapke sapno ko suraksha dete hain.
        </p>
        <Link href="/company/overview" className="group inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
          Learn More About Our Journey <ArrowRight size={20} />
        </Link>
      </div>

      {/* Right Stats Grid */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        {[
          { label: "Years Experience", value: "15+" },
          { label: "Clients Globally", value: "500+" },
          { label: "Projects Done", value: "1.2k" },
          { label: "Expert Advisors", value: "50+" },
        ].map((stat, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Mission & Vision Cards */}
    <div className="grid md:grid-cols-2 gap-8 mb-24">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="group p-10 bg-slate-900 rounded-[2.5rem] relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Protective future banavvu e amari priority che. Delivering excellence in every claim settlement.
          </p>
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:rotate-12 transition-transform">
          <ShieldCheck size={180} className="text-white" />
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="group p-10 bg-blue-600 rounded-[2.5rem] relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            Digital insurance ma global benchmark banvu. To be the world s most trusted risk management partner.
          </p>
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:rotate-12 transition-transform">
          <BarChart3 size={180} className="text-white" />
        </div>
      </motion.div>
    </div>

    {/* Partners Slider (Subtle Blue Theme) */}
    <div className="pt-12 border-t border-slate-100">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Our Strategic Partners</p>
      <div className="relative flex items-center overflow-hidden">
        <motion.div 
          className="flex gap-20 whitespace-nowrap items-center"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {["HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", "Bajaj Allianz"].map((p, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-blue-600/10 hover:text-blue-600/40 transition-colors uppercase italic select-none">
              {p}
            </span>
          ))}
          {/* Repeat for seamless loop */}
          {["HDFC ERGO", "TATA AIG", "ICICI Lombard", "Star Health", "Bajaj Allianz"].map((p, i) => (
            <span key={i + 10} className="text-3xl md:text-5xl font-black text-blue-600/10 hover:text-blue-600/40 transition-colors uppercase italic select-none">
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Specialized Solutions</h2>
              <p className="text-gray-600">Explore our wide range of insurance products designed to cover every aspect of your enterprise.</p>
            </div>
            <Link href="/solutions" className="group text-blue-600 font-bold flex items-center gap-2 border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all">
              View All Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Risk Assessment", icon: <BarChart3 className="w-5 h-5" /> },
              { name: "Claims Management", icon: <ShieldCheck className="w-5 h-5" /> },
              { name: "Employee Benefits", icon: <Users className="w-5 h-5" /> },
              { name: "Life Insurance", icon: <Heart className="w-5 h-5" /> }
            ].map((sol, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all cursor-pointer">
                <div className="mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                  {sol.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{sol.name}</h3>
                <p className="text-sm text-gray-500 mb-4">Premium coverage for complex business assets.</p>
                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">Learn more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-700 to-indigo-900 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to secure your journey?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Join over 5,000+ businesses who trust our expert risk management solutions.
            </p>
            <Link
              href="/contacts"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}