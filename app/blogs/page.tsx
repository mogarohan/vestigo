import { Search, ArrowRight, Bookmark, Share2 } from "lucide-react";
import Link from "next/link";
 // Client components logic handle karne ke liye

export type Blog = {
  id: number;
  slug: string;
  title: string;
  image: string;
  paragraph: string;
  content: string;
  created_at: string;
  tags?: string[];
  author?: string;
  readTime?: string;
};

// API Fetching function
async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("https://happy.techstrota.com/api/blogs", {
    next: { revalidate: 3600 }, // Cache refresh every hour
  });
  if (!res.ok) return [];
  const data = await res.json();
  
  // Sorting: Latest first
  return data.sort(
    (a: Blog, b: Blog) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

const brandBlue = "#070B7F";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  if (!blogs?.length) {
    return <div className="text-center mt-20 py-10">No blogs available.</div>;
  }

  const categories = ["All", "Risk Management", "Claims", "Technology", "Industry News", "Guides"];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Top Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 inline-block">
              Vestigo Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Mastering <span className="text-blue-500 italic">Risk</span>, One Story at a Time.
            </h1>
            <div className="relative group max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
              <input 
                type="text" 
                placeholder="Search insights..." 
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Section (Using API Data) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Featured Post - Blogs[0] */}
          <div className="lg:col-span-8 group cursor-pointer">
            <Link href={`/blogs/${blogs[0].slug}`}>
              <div className="aspect-[16/9] rounded-[2.5rem] mb-8 overflow-hidden relative shadow-2xl">
                <img 
                  src={blogs[0].image} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  alt={blogs[0].title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent" />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-1.5 rounded-lg bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Latest Featured
                  </span>
                </div>
              </div>
            </Link>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                {blogs[0].title}
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed line-clamp-2">
                {blogs[0].paragraph}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=Admin&background=070B7F&color=fff`} alt="author" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Vestigo Team</p>
                    <p className="text-sm text-slate-400">
                      {new Date(blogs[0].created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Trending (Next 3 Blogs) */}
          <div className="lg:col-span-4 space-y-10">
            <h3 className="text-xl font-bold flex items-center gap-2">
              Trending Now <div className="h-px flex-1 bg-slate-100" />
            </h3>
            {blogs.slice(1, 4).map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id} className="block group">
                <div className="flex gap-4 items-start">
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                    <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={blog.title} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600 uppercase">
                      {blog.tags?.[0] || "Insurance"}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dynamic Grid for All Blogs */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <article 
                key={blog.id} 
                className="bg-white p-4 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="aspect-video rounded-[2rem] mb-6 overflow-hidden relative shadow-inner">
                    <img 
                      src={blog.image} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      alt={blog.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F]/40 via-transparent" />
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-widest">
                      {blog.tags?.[0] || "General"}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#070B7F] transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                    {blog.paragraph}
                  </p>
                  <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={18} style={{ color: brandBlue }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}