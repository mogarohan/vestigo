'use client';

import { Blog } from "../type/blog";
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogsClientProps {
  initialBlogs: Blog[];
}

const BlogsClient = ({ initialBlogs = [] }: BlogsClientProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollYProgress } = useScroll();

  // 1. Safe Category Extraction
  const categories = ["All", ...Array.from(new Set(initialBlogs.flatMap(b => b.tags || [])))];

  // 2. Filter Logic
  const filteredBlogs = initialBlogs.filter(blog => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.tags?.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  // 3. Safe Featured Blog Selection
  // We use the first item of filtered results, or fallback to first initial blog
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  // Remaining blogs for the grid (excluding the featured one)
  const secondaryBlogs = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 inline-block">
              Vestigo Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Mastering <span className="text-blue-500 italic">Risk</span>, One Story at a Time.
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 overflow-x-auto no-scrollbar justify-center">
          {categories.slice(0, 8).map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                activeCategory === cat ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {featuredBlog ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Featured Post */}
            <div className="lg:col-span-8 group">
              <Link href={`/blogs/${featuredBlog.slug}`}>
                <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-slate-200">
                  {/* Using optional chaining and fallback for src */}
                  {/* <Image 
                    src={featuredBlog.image || "/api/placeholder/800/450"} 
                    alt={featuredBlog.title || "Blog Image"} 
                    fill 
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  /> */}
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-lg bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl">Featured</span>
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mt-8 group-hover:text-blue-600 transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-slate-500 text-xl mt-4 line-clamp-2">
                  {featuredBlog.paragraph}
                </p>
              </Link>
            </div>

            {/* Sidebar (Trending) */}
            <div className="lg:col-span-4 space-y-10">
              <h3 className="text-xl font-bold flex items-center gap-2">Trending <div className="h-px flex-1 bg-slate-100" /></h3>
              {secondaryBlogs.slice(0, 3).map((blog) => (
                // <Link href={`/blogs/${blog.slug}`} key={blog.id} className="flex gap-6 items-start group">
                //   <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden relative bg-slate-100">
                //     <Image src={blog.image || "/api/placeholder/100/100"} alt={blog.title} fill className="object-cover" />
                //   </div>
                //   <div>
                //     <span className="text-[10px] font-bold text-blue-600 uppercase">{blog.tags?.[0] || "News"}</span>
                //     <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h4>
                //   </div>
                // </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-400">No blogs match your search.</h3>
          </div>
        )}
      </section>

      {/* More Stories Grid */}
      {secondaryBlogs.length > 0 && (
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {secondaryBlogs.map((blog) => (
              <motion.article 
                key={blog.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="bg-white p-4 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className="aspect-video rounded-[2rem] overflow-hidden relative mb-6">
                  <Image src={blog.image || "/api/placeholder/400/225"} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="px-4">
                  <span className="text-blue-600 text-[10px] font-bold uppercase">{blog.tags?.[0]}</span>
                  <h3 className="text-2xl font-bold text-slate-900 my-3 group-hover:text-blue-600 line-clamp-2">{blog.title}</h3>
                  <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    Read Story <ArrowRight size={18} className="text-blue-600" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogsClient;