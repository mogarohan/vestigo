'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Heart, Coffee, Star, ArrowRight, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Risk Analyst",
      dept: "Insurance Strategy",
      type: "Full-Time",
      location: "Ahmedabad / Remote",
    },
    {
      title: "Customer Success Manager",
      dept: "Operations",
      type: "Full-Time",
      location: "Ahmedabad",
    },
    {
      title: "Full Stack Developer",
      dept: "Tech - Ability Suite",
      type: "Full-Time",
      location: "Remote",
    }
  ];

  const benefits = [
    { title: "Health Insurance", icon: <Heart className="text-rose-500" />, desc: "Comprehensive cover for you and your family." },
    { title: "Skill Growth", icon: <Rocket className="text-blue-500" />, desc: "Regular workshops and certification support." },
    { title: "Work-Life Balance", icon: <Coffee className="text-amber-500" />, desc: "Flexible hours and remote work options." },
    { title: "Recognition", icon: <Star className="text-purple-500" />, desc: "Monthly awards and performance bonuses." },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"
          >
            <Briefcase size={16} /> Join the Vestigo Team
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-6">
            Build the Future of <span className="text-blue-600">Insurance</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hum sirf employees nahi, leaders banate hain. Agar aap innovative, driven, aur passionate hain, toh Vestigo aapke liye sahi jagah hai.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all">
            View Open Roles
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Life at Vestigo</h2>
            <p className="text-slate-500">Hum apne logon ka khayal rakhte hain, taaki woh hamare clients ka khayal rakh sakein.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings List */}
      <section className="py-24 px-6 bg-slate-50 rounded-[3rem] mx-4 md:mx-10 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 italic">Current Openings</h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-slate-500 font-medium">Showing {jobs.length} open positions</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="group p-6 md:p-8 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-500 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{job.dept}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{job.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <MapPin size={14} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <Clock size={14} /> {job.type}
                    </div>
                  </div>
                </div>
                <button className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 group-hover:scale-105">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-12 bg-white rounded-[2rem] border border-dashed border-slate-300">
            <h4 className="text-xl font-bold text-slate-800 mb-2">Don't see a perfect fit?</h4>
            <p className="text-slate-500 mb-6">Apna CV humein bhej dijiye, hum future opportunities ke liye contact karenge.</p>
            <a href="mailto:careers@vestigo.in" className="text-blue-600 font-bold hover:underline underline-offset-4">
              careers@vestigo.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;