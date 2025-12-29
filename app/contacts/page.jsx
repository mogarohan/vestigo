'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"
          >
            Connect With Us
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Let's Start a <span className="text-blue-600">Conversation</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Aapke business ki security hamari priority hai. Reach out to our experts today for customized risk management solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Get In Touch</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Hamari team 24/7 available hai aapki queries solve karne ke liye. Niche diye gaye details par contact karein ya form bharein.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Headquarters</h4>
                  <p className="text-slate-500 italic">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                  <p className="text-slate-500">info@vestigo.in</p>
                  <p className="text-slate-500">support@vestigo.in</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Support</h4>
                  <p className="text-slate-500">+91 98765 43210</p>
                  <p className="text-slate-500">+91 12345 67890</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10">
              <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-500/5 border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                  <option>General Inquiry</option>
                  <option>Claims Support</option>
                  <option>New Policy Inquiry</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-3 group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Embedded Map Placeholder */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[450px] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
             <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-bold">Interactive Google Map Integration</p>
                <p className="text-sm">Embed your office location here</p>
             </div>
          </div>
          {/* Yahan Google Map iframe add kar sakte hain */}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;