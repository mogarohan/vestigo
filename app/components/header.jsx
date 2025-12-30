'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, ArrowRight, ShieldCheck, 
  Zap, Briefcase, Globe 
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
    featured: "Leading the industry in risk management since 2010.",
    subLinks: [
      { name: 'Who We Are', href: '/company/whoweare', desc: 'Our mission and legacy' },
      { name: 'Why Us', href: '/company/whyus', desc: 'The Vestigo advantage' },
      { name: 'Our Team', href: '/company/ourteam', desc: 'Meet our specialists' },
      { name: 'Our Partners', href: '/company/ourpartners', desc: 'Strategic global alliances' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Zap className="w-5 h-5" />,
    featured: "Bespoke protection tailored for modern enterprises.",
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
    featured: "Specialized safety shields for every sector.",
    subLinks: [
      { name: 'Auto Mobile', href: '/industries/automobile' },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* FIX: 'fixed' ki jagah 'sticky' use kiya hai taaki content niche se start ho, 
         aur top-0 rakha hai taaki scroll karne par wahi rahe.
      */}
      <header
        className={`sticky top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' 
          : 'bg-white py-5 border-b border-slate-50'
        } ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="relative z-[110]">
            <Image src="/logo.svg" alt="Logo" width={130} height={50} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_DATA.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm transition-all
                    ${pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}
                    ${activeDropdown === link.name ? 'bg-slate-50' : ''}`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                    >
                      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex">
                        <div className="w-1/3 bg-slate-50 p-6">
                          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4">
                            {link.icon || <ShieldCheck size={20} />}
                          </div>
                          <h4 className="font-bold text-slate-900 mb-2">{link.name}</h4>
                          <p className="text-slate-500 text-[10px] leading-relaxed">{link.featured}</p>
                        </div>

                        <div className="w-2/3 p-4 grid grid-cols-1 gap-1">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 group/item transition-all"
                            >
                              <span className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600">{sub.name}</span>
                              <ArrowRight size={14} className="text-blue-200 group-hover/item:text-blue-600 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/contacts"
              className="ml-4 bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-blue-600"
            >
              Contact Us
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 bg-slate-100 rounded-xl text-slate-900"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MODAL */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[210] lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-slate-50">
                <Image src="/logo.svg" alt="Logo" width={110} height={40} />
                <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
                {NAV_DATA.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div>
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex items-center justify-between py-4 text-slate-900 font-black text-2xl"
                        >
                          {link.name}
                          <ChevronDown size={24} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-slate-300'}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden space-y-4 pl-4 border-l-2 border-blue-100 mt-2"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block text-slate-500 font-bold text-lg hover:text-blue-600 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block py-4 text-slate-900 font-black text-2xl transition-colors hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-slate-50">
                <Link
                  href="/contacts"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full bg-blue-600 text-white h-16 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 active:scale-95 transition-transform"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}