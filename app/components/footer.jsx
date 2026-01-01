'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
    { name: 'Google', icon: <Globe size={18} />, href: 'https://google.com' },
  ];

  return (
    <div className='w-full flex flex-col bg-[url(/footer2.jpeg)] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <footer className="relative w-full text-slate-300 overflow-hidden min-h-fit">
        
        {/* --- FULL BACKGROUND IMAGE --- */}
        
        
        {/* --- DARK OVERLAY + BOTTOM GRADIENT --- */}
        <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-[1px]" />
        
        {/* Niche wala gradient layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-100" />

        {/* --- 1. CTA SECTION --- */}
        <div className="relative z-10 w-full min-h-[100px] py-8 flex items-center justify-center text-center px-6 ">
  <div className="px-6 w-full max-w-1xl md:text-3x1 flex flex-col items-center justify-center">
    {/* Heading: Size optimized for a cleaner look */}
    <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-2 leading-tight">
      Protect your business with the <br /> right insurance strategy
    </h2>
    
    {/* Paragraph: Reduced margin to keep it compact */}
    <p className="text-white/70 text-sm mb-5 font-light">
      Schedule a no-obligation consultation with our experts today
    </p>

    {/* Button: Fixed width remove karke simple padding rakhi hai */}
    <button className="bg-[#4169E1] hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-lg transition-all uppercase text-[10px] tracking-widest shadow-lg transform hover:scale-105 active:scale-95">
      Request Your Consultation
    </button>
  </div>
</div>

        {/* --- 2. MAIN LINKS CONTENT --- */}
        <div className="relative z-10 max-w-7xl mx-auto  py-5 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
            
            {/* Logo & About */}
            <div className="lg:col-span-1 space-y-4">
              <Image
                src="/logo.svg"
                alt="Vestigo Logo"
                width={110}
                height={30}
                className="invert opacity-90"
              />
              <p className="text-[11px] leading-relaxed pr-2 text-slate-300">
                Innovative digital insurance solutions protecting businesses worldwide.
              </p>
              <div className="flex gap-2 pt-1">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-[#4169E1] hover:text-white transition-all duration-300 border border-white/10"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li><Link href="/company/whoweare" className="hover:text-white transition-all hover:translate-x-1 block">Who We Are</Link></li>
                <li><Link href="/company/whyus" className="hover:text-white transition-all hover:translate-x-1 block">Why Us</Link></li>
                <li><Link href="/company/ourteam" className="hover:text-white transition-all hover:translate-x-1 block">Our Team</Link></li>
                <li><Link href="/company/ourpartners" className="hover:text-white transition-all hover:translate-x-1 block">Our Partners</Link></li>
              </ul>
            </div>

            {/* Industries Works */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-5 lg:ml-20 relative inline-block">
                Industries Works
                <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-2 text-[11px]">
                <ul className="space-y-2">
                  <li><Link href="/industries/automobile" className="hover:text-white transition-all hover:translate-x-1 block truncate">Auto Mobile</Link></li>
                  <li><Link href="/industries/BFSI" className="hover:text-white transition-all hover:translate-x-1 block">BFSI</Link></li>
                  <li><Link href="/industries/chemical&pharmaceuticals" className="hover:text-white transition-all hover:translate-x-1 block truncate">Chemical</Link></li>
                  <li><Link href="/industries/e-commerce" className="hover:text-white transition-all hover:translate-x-1 block">E-Commerce</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link href="/industries/engineering" className="hover:text-white transition-all hover:translate-x-1 block">Engineering</Link></li>
                  <li><Link href="/industries/greenenergy" className="hover:text-white transition-all hover:translate-x-1 block truncate">Green Energy</Link></li>
                  <li><Link href="/industries/hospital&education" className="hover:text-white transition-all hover:translate-x-1 block">Education</Link></li>
                  <li><Link href="/industries/hospitality" className="hover:text-white transition-all hover:translate-x-1 block">Hospitality</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link href="/industries/it" className="hover:text-white transition-all hover:translate-x-1 block">IT & TECH</Link></li>
                  <li><Link href="/industries/packaging" className="hover:text-white transition-all hover:translate-x-1 block">Packaging</Link></li>
                  <li><Link href="/industries/shipping&odccargo" className="hover:text-white transition-all hover:translate-x-1 block truncate">Shipping</Link></li>
                  <li><Link href="/industries/SME&MSME" className="hover:text-white transition-all hover:translate-x-1 block">SME</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link href="/industries/papermills" className="hover:text-white transition-all hover:translate-x-1 block truncate">Paper Mills</Link></li>
                  <li><Link href="/industries/plastic" className="hover:text-white transition-all hover:translate-x-1 block">Plastic</Link></li>
                  <li><Link href="/industries/texttile" className="hover:text-white transition-all hover:translate-x-1 block">TextTile</Link></li>
                  <li><Link href="/industries/wood&laminates" className="hover:text-white transition-all hover:translate-x-1 block truncate">Wood</Link></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li><Link href="/solutions" className="hover:text-white transition-all hover:translate-x-1 block">Risk Solutions</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-all hover:translate-x-1 block">Industries</Link></li>
                <li><Link href="/blogs" className="hover:text-white transition-all hover:translate-x-1 block">Latest Insights</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-all hover:translate-x-1 block">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
              </h3>
              <ul className="space-y-3 text-[11px]">
                <li>
                  <a href="tel:+1234567890" className="group flex items-center gap-2 hover:text-white transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4169E1] transition-all border border-white/10 flex-shrink-0">
                      <Phone size={10} className="text-[#4169E1] group-hover:text-white" />
                    </div>
                    <span className="font-medium">+1 234 567 890</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vestigo.com" className="group flex items-center gap-2 hover:text-white transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4169E1] transition-all border border-white/10 flex-shrink-0">
                      <Mail size={10} className="text-[#4169E1] group-hover:text-white" />
                    </div>
                    <span className="font-medium truncate">info@vestigo.com</span>
                  </a>
                </li>
                <li className="group flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4169E1] transition-all border border-white/10 flex-shrink-0">
                    <MapPin size={10} className="text-[#4169E1] group-hover:text-white" />
                  </div>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    123 Business Ave, New York, NY
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar with Gradient Background */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between text-white/50 items-center gap-2 text-[9px] uppercase tracking-widest relative">
            <p>&copy; {new Date().getFullYear()} Vestigo Risk Solutions. CREATED BY ROHAN MOGA</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}