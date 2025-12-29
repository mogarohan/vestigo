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
    <footer className="relative z-10 bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Logo & About */}
          <div className="space-y-6">
            <Image
              src="/logo.svg"
              alt="Vestigo Logo"
              width={140}
              height={50}
              className="invert"
            />
            <p className="text-sm leading-relaxed">
              Vestigo delivers innovative digital insurance solutions that help businesses 
              grow, scale, and stay protected in an ever-changing global market.
            </p>
            {/* Social Media Links with Circles */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/company/whoweare" className="hover:text-blue-400 transition-colors">Who We Are</Link></li>
              <li><Link href="/company/whyus" className="hover:text-blue-400 transition-colors">Why Us</Link></li>
              <li><Link href="/company/ourteam" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link href="/company/ourpartners" className="hover:text-blue-400 transition-colors">Our Partners</Link></li>
            </ul>
          </div>

          {/* 3. Services & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/solutions" className="hover:text-blue-400 transition-colors">Risk Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-colors">Industries</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-400 transition-colors">Latest Insights</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* 4. Direct Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span className="text-slate-300">info@vestigo.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span className="text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span className="text-slate-300">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs">
              © {new Date().getFullYear()} Vestigo Insurance Brokers. All rights reserved.
            </p>

            <div className="flex gap-8 text-xs font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}