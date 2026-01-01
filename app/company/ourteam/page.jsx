'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  Users, 
  Target, 
  Heart,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OurTeam() {
  const containerRef = useRef(null);
  
  // Hero Parallax Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const team = [
    {
      name: "Rajesh Mehta",
      role: "Founder & CEO",
      desc: "A visionary leader with over 20 years of experience in the insurance industry, steering Vestigo's strategic growth.",
      image: "/member1.jpg", 
      linkedin: "#"
    },
    {
      name: "Sneha Patel",
      role: "Head of Risk Analysis",
      desc: "Expert strategist specializing in deep-dive analysis and identifying business vulnerabilities through data.",
      image: "/member2.png", 
      linkedin: "#"
    },
    {
      name: "Amit Shah",
      role: "Claims Director",
      desc: "Committed to making claim settlements fast, transparent, and completely hassle-free for every client.",
      image: "/member3.png",
      linkedin: "#"
    },
    {
      name: "Priya Zaveri",
      role: "Customer Success Manager",
      desc: "Overseeing client relationships and our dedicated 24/7 global support infrastructure.",
      image: "/member4.png",
      linkedin: "#"
    }
  ];

  const values = [
    {
      title: "Transparency",
      desc: "We prioritize clear, honest, and jargon-free communication in every interaction.",
      icon: <Target className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      title: "Empathy",
      desc: "During the claims process, we stand by your side like family, providing unwavering support.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-600"
    },
    {
      title: "Innovation",
      desc: "Our goal is to simplify the insurance landscape using cutting-edge technology and predictive data.",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-600"
    }
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">
      
      {/* 1. NEW HERO SECTION (Dark Premium Style) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 10, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} /> MEET THE EXPERTS
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            The Faces Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vestigo.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our team consists of seasoned professionals dedicated to securing your dreams 
            and protecting your business interests through trust and precision.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/contacts" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all">
                Connect with Us <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. TEAM GRID (Floating over Hero) */}
      <section className="relative z-20 -mt-20 px-6 mb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 mb-6 aspect-[4/5] shadow-2xl border border-white/10">
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={member.linkedin} className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-slate-50 py-24 mx-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">What Drives Our Team</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`p-6 rounded-[2rem] bg-white shadow-xl mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 ${val.color}`}>
                  {val.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">{val.title}</h4>
                <p className="text-gray-500 max-w-xs">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECRUITMENT CTA */}
      <section className="mt-32 mb-20 text-center px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 p-16 rounded-[4rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">Want to join our mission?</h2>
          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            We are always looking for passionate and talented individuals who are ready to redefine the future of risk management.
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
              href="/careers" 
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 shadow-2xl"
            >
              View Openings <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}