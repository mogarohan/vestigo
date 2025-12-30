'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, ArrowRight, ShieldCheck, 
  Zap, Briefcase, Globe, PhoneCall
} from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const NAV_DATA = [
  { name: 'Home', href: '/' },
  {
    name: 'Company',
    href: '/company',
    icon: <Globe className="w-5 h-5" />,
    featured: "Securing your future with trust since 2010.",
    subLinks: [
      { name: 'Who We Are', href: '/company/whoweare', desc: 'Our mission and legacy' },
      { name: 'Why Us', href: '/company/whyus', desc: 'The Vestigo advantage' },
      { name: 'Our Team', href: '/company/ourteam', desc: 'Meet our specialists' },
      { name: 'Our Partners', href: '/company/ourpartners', desc: 'Strategic alliances' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Zap className="w-5 h-5" />,
    featured: "Customized risk protection.",
    subLinks: [
      { name: 'Risk Assessment', href: '/solutions/audits&riskassessment' },
      { name: 'Claims Management', href: '/solutions/claimsmanagement' },
      { name: 'Commercial Insurance', href: '/solutions/commercialinsurance' },
      { name: 'Employee Benefits', href: '/solutions/employeebenifits' },
      { name: 'Life Insurance', href: '/solutions/lifeinsurance' },
      { name: 'Surety & Credit', href: '/solutions/suretybond&creditinsurance' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: <Briefcase className="w-5 h-5" />,
    featured: "Safety shields for every sector.",
    subLinks: [
      { name: 'Automotive', href: '/industries/automobile' },
      { name: 'BFSI', href: '/industries/BFSI' },
      { name: 'E-Commerce', href: '/industries/e-commerce' },
      { name: 'IT & Tech', href: '/industries/it' },
      { name: 'Manufacturing', href: '/industries/engineering' },
      { name: 'Shipping', href: '/industries/shipping&odccargo' },
    ],
  },
  { name: 'Insights', href: '/blogs' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'py-1.5' : 'py-3' // Ultra-slim outer padding
        } ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`relative flex items-center justify-between transition-all duration-300 px-4 py-1.5 rounded-full ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border border-slate-100' : 'bg-transparent'
          }`}>
            
            {/* LOGO - Minimal Height */}
            <Link href="/" className="relative z-[110] flex-shrink-0">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={100} 
                height={32} 
                className="w-auto h-7 md:h-8 object-contain" 
                priority 
              />
            </Link>

            {/* DESKTOP NAV - Compact Spacing */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_DATA.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full font-bold text-[12px] transition-all
                      ${pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <ChevronDown size={11} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* COMPACT DROPDOWN */}
                  <AnimatePresence>
                    {link.subLinks && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-1 min-w-[500px]"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex">
                          <div className="w-36 bg-slate-50 p-5 flex flex-col justify-center border-r border-slate-100">
                            <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white mb-2 shadow-sm">
                              {link.icon || <ShieldCheck size={16} />}
                            </div>
                            <h4 className="font-bold text-slate-900 text-[11px] mb-0.5">{link.name}</h4>
                            <p className="text-slate-500 text-[9px] leading-tight line-clamp-2">{link.featured}</p>
                          </div>

                          <div className="flex-1 p-3 grid grid-cols-2 gap-x-2 gap-y-1">
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="group/item p-2 rounded-lg hover:bg-blue-50 transition-all"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-900 font-bold text-[11px] group-hover/item:text-blue-600">
                                    {sub.name}
                                  </span>
                                  <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-all text-blue-600" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ACTION BUTTONS - Minimalist */}
            <div className="hidden lg:flex items-center gap-2">
               <button className="text-slate-400 hover:text-blue-600 transition-colors p-1.5 rounded-full">
                  <PhoneCall size={14} />
               </button>
               <Link
                href="/contacts"
                className="bg-slate-900 text-white px-5 py-1.5 rounded-full font-bold text-[10px] tracking-wider uppercase transition-all hover:bg-blue-600 active:scale-95 shadow-sm"
              >
                Contact
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-1.5 bg-slate-50 rounded-lg text-slate-900"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-[210] lg:hidden shadow-xl flex flex-col"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-50">
                <span className="font-black text-blue-600">VESTIGO</span>
                <button onClick={() => setIsMobileOpen(false)} className="p-1.5 text-slate-400">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-1">
                {NAV_DATA.map((link) => (
                  <div key={link.name} className="py-2 border-b border-slate-50 last:border-0">
                    <Link href={link.href} onClick={() => setIsMobileOpen(false)} className="font-bold text-slate-800 text-lg">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}