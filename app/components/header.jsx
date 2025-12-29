'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { ChevronDown } from 'lucide-react';
/* Google Font */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Company',
    href: '/company',
    subLinks: [
      { name: 'Who We Are', href: '/company/whoweare' },
      { name: 'Why Us', href: '/company/whyus' },
      { name: 'Our Team', href: '/company/ourteam' },
      { name: 'Our Partners', href: '/company/ourpartners' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    subLinks: [
      { name: 'Audits & Risk Assessment', href: '/solutions/audits&riskassessment' },
      { name: 'Claims Management', href: '/solutions/claimsmanagement' },
      { name: 'Commercial Insurance', href: '/solutions/commercialinsurance' },
      { name: 'Employee Benefits', href: '/solutions/employeebenifits' },
      { name: 'Green X Insurance', href: '/solutions/greenXinsurance' },
      { name: 'Life Insurance', href: '/solutions/lifeinsurance' },
      { name: 'Surety Bond & Credit Insurance', href: '/solutions/suretybond&creditinsurance' },
      { name: 'Ability Suite', href: '/solutions/abilitysuite' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    subLinks: [
      { name: 'Auto Mobile', href: '/industries/automobile' },
      { name: 'BFSI', href: '/industries/BFSI' },
      { name: 'Chemical & Pharmaceuticals', href: '/industries/chemical-pharmaceuticals' },
      { name: 'E-Commerce', href: '/industries/e-commerce' },
      { name: 'Engineering', href: '/industries/engineering' },
      { name: 'Green Energy', href: '/industries/greenenergy' },
      { name: 'Hospital & Education', href: '/industries/hospital-education' },
      { name: 'Hospitality', href: '/industries/hospitality' },
      { name: 'IT', href: '/industries/it' },
      { name: 'Packaging', href: '/industries/packaging' },
      { name: 'Papermills', href: '/industries/papermills' },
      { name: 'Plastic', href: '/industries/plastic' },
      { name: 'Shipping & ODC Cargo', href: '/industries/shipping-odc-cargo' },
      { name: 'SME & MSME', href: '/industries/sme-msme' },
      { name: 'Textile', href: '/industries/textile' },
      { name: 'Wood & Laminates', href: '/industries/wood-laminates' },
    ],
  },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contacts' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={80}
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl font-bold text-[#1E2A8A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

<nav
  className={`fixed md:static top-[70px] left-0 w-full md:w-auto 
  bg-white md:bg-transparent shadow-xl md:shadow-none transition-all duration-300
  ${menuOpen ? 'block' : 'hidden md:block'}`}
>
  <ul className="md:flex gap-8 p-6 md:p-0 text-base font-medium max-h-[80vh] md:max-h-none overflow-y-auto no-scrollbar">
    {navLinks.map((link) => (
      <li
        key={link.name}
        className="relative border-b border-gray-100 md:border-none group"
        // Mouse events removed for pure click-based logic
      >
        <div 
          className="flex items-center justify-between cursor-pointer md:gap-1"
          onClick={() => {
            // Toggles dropdown on both Mobile and Desktop on click
            if (link.subLinks) {
              toggleDropdown(link.name);
            }
          }}
        >
          <Link
            href={link.href}
            className="block py-4 md:py-2 text-[#1E2A8A] group-hover:text-blue-600 transition font-bold md:font-semibold text-lg md:text-base"
            onClick={(e) => {
              // Stop propagation so the parent div's toggleDropdown doesn't fire
              e.stopPropagation(); 
              
              if (window.innerWidth <= 768 && link.subLinks) {
                // On mobile: Parent links with sub-items only toggle, they don't navigate
                e.preventDefault();
                toggleDropdown(link.name);
              } else {
                // Close all menus when a destination link is clicked
                setMenuOpen(false);
                setOpenDropdown(null);
              }
            }}
          >
            {link.name}
          </Link>

          {link.subLinks && (
            <ChevronDown 
              size={window.innerWidth > 768 ? 16 : 20} 
              className={`transition-transform duration-300 ease-in-out
                ${openDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-gray-400'}
              `} 
            />
          )}
        </div>

        {/* Dropdown Section */}
        {link.subLinks && openDropdown === link.name && (
          <div 
            className="
              md:fixed md:top-[70px] md:left-0 md:w-screen md:bg-white md:shadow-2xl md:border-t md:border-gray-100 md:z-[100]
              relative w-full bg-slate-50 md:bg-white rounded-xl md:rounded-none overflow-hidden
            "
            style={window.innerWidth > 768 ? { left: '50%', transform: 'translateX(-50%)' } : {}}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                
                <div className="hidden md:block border-r border-gray-100 pr-8">
                  <h3 className="text-[#1E2A8A] font-extrabold text-xl mb-3 tracking-tight">{link.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">Professional insurance and risk solutions.</p>
                  <Link 
                    href="/contacts" 
                    className="text-blue-600 font-bold text-sm hover:underline"
                    onClick={() => { 
                      setMenuOpen(false); 
                      setOpenDropdown(null); 
                    }}
                  >
                    Get a Quote →
                  </Link>
                </div>

                <div className="md:col-span-3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-x-10 md:gap-y-2">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          href={subLink.href}
                          className="flex flex-col py-3 px-4 rounded-xl hover:bg-blue-100 md:hover:bg-blue-50 transition-all group/sub"
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <span className="text-[#1E2A8A] font-bold text-[15px] group-hover/sub:text-blue-600">
                            {subLink.name}
                          </span>
                          <span className="hidden md:block text-gray-400 text-[11px]">
                            Explore our {subLink.name.toLowerCase()} expertise.
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
</nav>
        </div>
      </div>
    </header>
  );
}
