'use client';

import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  Users, 
  Target, 
  Heart,
  ChevronRight 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OurTeam() {
  const team = [
    {
      name: "Rajesh Mehta",
      role: "Founder & CEO",
      desc: "20+ years no insurance industry ma anubhav ane visionary leadership.",
      image: "/team/member1.jpg", // Potana images add karva
      linkedin: "#"
    },
    {
      name: "Sneha Patel",
      role: "Head of Risk Analysis",
      desc: "Complex business risks ne analyze karva ma expert.",
      image: "/team/member2.jpg",
      linkedin: "#"
    },
    {
      name: "Amit Shah",
      role: "Claims Director",
      desc: "Tamara claims ne fast ane hassle-free settle karva ma madad kare che.",
      image: "/team/member3.jpg",
      linkedin: "#"
    },
    {
      name: "Priya Zaveri",
      role: "Customer Success Manager",
      desc: "Client relationship ane 24/7 support team na head.",
      image: "/team/member4.jpg",
      linkedin: "#"
    }
  ];

  const values = [
    {
      title: "Transparency",
      desc: "Ame hamesha clear communication ma mane chie.",
      icon: <Target className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      title: "Empathy",
      desc: "Claims na samay e ame tamari sathe ek parivar ni jem ubha rahie chie.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-600"
    },
    {
      title: "Innovation",
      desc: "Modern technology thi insurance ne saral banavvu e amaro dhyey che.",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* --- HERO SECTION --- */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Meet the Experts</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
              The Faces Behind <span className="text-blue-600">Vestigo</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Amari team ma che tajagna professionals je tamara sapnao ane business ne secure karva mate cutibaddh che.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 mb-6 aspect-[4/5]">
                {/* Image Placeholder - Replace with <Image /> component */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <Users className="w-12 h-12 text-slate-400" />
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
              <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-slate-50 py-24 mx-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Drives Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl bg-white shadow-sm mb-6 ${val.color}`}>
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-gray-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECRUITMENT CTA --- */}
      <section className="mt-32 text-center px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 p-12 rounded-[3rem] text-white">
          <h2 className="text-3xl font-bold mb-6">Want to join our mission?</h2>
          <p className="text-slate-400 mb-10">
            Ame hamesha utshahi ane talented loko ni shodhkhol ma hoiye chie.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/careers" 
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
            >
              View Openings <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}