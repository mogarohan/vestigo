'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Search, Clock, User, ArrowRight, ChevronRight, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollYProgress } = useScroll();

  const categories = ["All", "Risk Management", "Claims", "Technology", "Industry News", "Guides"];
  
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Insurance in 2025",
      excerpt: "Digital transformation kaise insurance sector ko revolutionize kar raha hai, aur businesses ko iske liye kyun taiyar rehna chahiye.",
      category: "Technology",
      author: "Arjun Mehta",
      date: "Oct 12, 2025",
      readTime: "5 min read",
      color: "from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "5 Common Mistakes in Commercial Claims",
      excerpt: "Aksar businesses claims file karte waqt chhoti galatiyan karte hain jo bade losses ka karan banti hain. Inse kaise bachein?",
      category: "Claims",
      author: "Sarah Khan",
      date: "Oct 10, 2025",
      readTime: "8 min read",
      color: "from-emerald-500 to-teal-700"
    },
    {
      id: 3,
      title: "Risk Management Strategies for SMEs",
      excerpt: "Small aur medium enterprises ke liye cost-effective risk management tips jo long-term growth mein madad karengi.",
      category: "Risk Management",
      author: "Rajesh Varma",
      date: "Oct 05, 2025",
      readTime: "6 min read",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Top Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 2. PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-600/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 inline-block">
              Vestigo Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Mastering <span className="text-blue-500 italic">Risk</span>, One Story at a Time.
            </h1>
            
            <div className="relative group max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={22} />
              <input 
                type="text" 
                placeholder="Search for topics, guides or trends..." 
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:bg-white/10 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. STICKY CATEGORY NAV */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 justify-start md:justify-center">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-xl scale-105' 
                  : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 4. FEATURED / RECENT GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Featured Post (Left) */}
            <motion.div 
              className="lg:col-span-8 group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className={`aspect-[16/9] rounded-[2.5rem] bg-gradient-to-br ${blogs[0].color} mb-8 overflow-hidden relative shadow-2xl shadow-blue-500/20`}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                 <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-lg bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Featured Article
                    </span>
                 </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {blogs[0].title}
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed">
                  {blogs[0].excerpt}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100" /> {/* Author Image */}
                    <div>
                      <p className="font-bold text-slate-900">{blogs[0].author}</p>
                      <p className="text-sm text-slate-400">{blogs[0].date} • {blogs[0].readTime}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="p-3 rounded-full hover:bg-slate-50 text-slate-400 hover:text-blue-600 transition-all"><Bookmark size={20} /></button>
                    <button className="p-3 rounded-full hover:bg-slate-50 text-slate-400 hover:text-blue-600 transition-all"><Share2 size={20} /></button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar Posts (Right) */}
            <div className="lg:col-span-4 space-y-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                Trending Now <div className="h-px flex-1 bg-slate-100" />
              </h3>
              {blogs.slice(1).map((blog) => (
                <Link href={`/blogs/${blog.id}`} key={blog.id} className="block group">
                  <div className="flex gap-6 items-start">
                    <div className={`w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br ${blog.color} shadow-lg`} />
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">{blog.category}</span>
                      <h4 className="font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{blog.title}</h4>
                      <p className="text-xs text-slate-400">{blog.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Promotion Box */}
              <div className="p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-2">Need expert advice?</h4>
                  <p className="text-blue-100 text-sm mb-6">Hamare experts se direct consult karein.</p>
                  <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm inline-block shadow-lg">
                    Book a Call
                  </Link>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-20">
                  <ArrowRight size={120} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THE NEW GRID STYLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...blogs, ...blogs].map((blog, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className={`aspect-video rounded-[2rem] bg-gradient-to-br ${blog.color} mb-6 overflow-hidden relative shadow-inner`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-widest">{blog.category}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6">{blog.excerpt}</p>
                  <Link href={`/blogs/${blog.id}`} className="flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all">
                    Read Story <ArrowRight size={18} className="text-blue-600" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;