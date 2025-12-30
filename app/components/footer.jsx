'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
    { name: 'Google', icon: <Globe size={20} />, href: 'https://google.com' },
  ];

  return (
  <footer className="bg-[#0B1120] pt-20 pb-10 text-slate-400 border-t border-slate-800/50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Main Grid: Using 5-column layout on large screens for perfect spacing */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
      
      {/* 1. Logo & About (1 Column) */}
      <div className="lg:col-span-1 space-y-6">
        <Image
          src="/logo.svg"
          alt="Vestigo Logo"
          width={130}
          height={40}
          className="invert opacity-90"
        />
        <p className="text-sm leading-relaxed pr-4">
          Innovative digital insurance solutions protecting businesses in an ever-changing global market.
        </p>
        <div className="flex gap-3 pt-2">
          {socialLinks.map((social) => (
            <Link 
              key={social.name} 
              href={social.href}
              className="w-9 h-9 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-700/50"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Company (1 Column) */}
      <div className="lg:col-span-1">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-7 relative">
          Company
          <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
        </h3>
        <ul className="space-y-4 text-[13px]">
          <li><Link href="/company/whoweare" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Who We Are</Link></li>
          <li><Link href="/company/whyus" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Why Us</Link></li>
          <li><Link href="/company/ourteam" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Our Team</Link></li>
          <li><Link href="/company/ourpartners" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Our Partners</Link></li>
        </ul>
      </div>

      {/* 3. Industries (2 Columns Spanning) */}
      <div className="lg:col-span-2">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest ml-20 mb-7 relative">
          Industries Works
          <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
        </h3>
        <div className="grid grid-cols-2 gap-4 text-[13px]">
          <ul className="space-y-4">
            <li><Link href="/industries/automobile" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Auto Mobile</Link></li>
            <li><Link href="/industries/BFSI" className="hover:text-blue-400 transition-all hover:translate-x-1 block">BFSI</Link></li>
            <li><Link href="/industries/chemical&pharmaceuticals" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Chemical & Pharma</Link></li>
            <li><Link href="/industries/e-commerce" className="hover:text-blue-400 transition-all hover:translate-x-1 block">E-Commerce</Link></li>
            <li><Link href="/industries/engineering" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Engineering</Link></li>
            <li><Link href="/industries/greenenergy" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Green Energy</Link></li>
            <li><Link href="/industries/hospital&education" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Hospital & Education</Link></li>
            <li><Link href="/industries/hospitality" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Hospitality</Link></li>
          </ul>
          <ul className="space-y-4">
            <li><Link href="/industries/it" className="hover:text-blue-400 transition-all hover:translate-x-1 block">IT & TECH</Link></li>
            <li><Link href="/industries/packging" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Packaging</Link></li>
            <li><Link href="/industries/papermills" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Paper Mills</Link></li>
            <li><Link href="/industries/plastic" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Plastic</Link></li>
            <li><Link href="/industries/shipping&odccargo" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Shipping & Cargo</Link></li>
            <li><Link href="/industries/textile" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Textile</Link></li>
            <li><Link href="/industries/SME&MSME" className="hover:text-blue-400 transition-all hover:translate-x-1 block">SME & MSME</Link></li>
            <li><Link href="/industries/wood&lanivates" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Wood & Lamination</Link></li>
          </ul>
        </div>
      </div>

      {/* 4. Services (1 Column) */}
      <div className="lg:col-span-1">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-7 relative">
          Services
          <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
        </h3>
        <ul className="space-y-4 text-[13px]">
          <li><Link href="/solutions" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Risk Solutions</Link></li>
          <li><Link href="/industries" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Industries</Link></li>
          <li><Link href="/blogs" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Latest Insights</Link></li>
          <li><Link href="/careers" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Careers</Link></li>
        </ul>
<div className="mt-10 lg:col-span-1">
  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-7 relative inline-block">
    Contact Us
    <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
  </h3>
  
  <ul className="space-y-6 text-[13px]">
    {/* Dynamic Phone Link */}
    <li>
      <a 
        href="tel:+1234567890" 
        className="group flex items-center gap-4 hover:text-white transition-all"
      >
        <div className="w-9 h-9 rounded-xl bg-slate-800/40 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 border border-slate-700/50">
          <Phone size={14} className="text-blue-400 group-hover:text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold leading-none mb-1">Call Us</span>
          <span className="font-semibold">+1 (234) 567-890</span>
        </div>
      </a>
    </li>

    {/* Dynamic Email Link */}
    <li>
      <a 
        href="mailto:info@vestigo.com" 
        className="group flex items-center gap-4 hover:text-white transition-all"
      >
        <div className="w-9 h-9 rounded-xl bg-slate-800/40 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 border border-slate-700/50">
          <Mail size={14} className="text-blue-400 group-hover:text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold leading-none mb-1">Email Support</span>
          <span className="font-semibold">info@vestigo.com</span>
        </div>
      </a>
    </li>

    {/* Location Display */}
    <li className="group flex items-center gap-4 transition-all">
      <div className="w-9 h-9 rounded-xl bg-slate-800/40 flex items-center justify-center border border-slate-700/50">
        <MapPin size={14} className="text-blue-400" />
      </div>
      <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold leading-none mb-1">Our Office</span>
          <span className="font-semibold leading-snug">Financial District,<br />New York, NY</span>
      </div>
    </li>
  </ul>
</div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 uppercase tracking-widest">
      <p>&copy; {new Date().getFullYear()} Vestigo Risk Solutions. All rights reserved. CREATED BY ROHAN MOGA</p>
      <div className="flex gap-6">
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </div>
  </div>
</footer>
  );
}