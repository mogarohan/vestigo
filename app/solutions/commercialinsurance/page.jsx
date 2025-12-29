import React from 'react';
import { Building2, ShieldCheck, Factory, Truck, Briefcase, Zap } from 'lucide-react';

const CommercialInsurance = () => {
  const services = [
    { title: "General Liability", desc: "Third-party claims aur property damage se apne business ko secure karein.", icon: <ShieldCheck className="w-10 h-10 text-blue-600" /> },
    { title: "Property Insurance", desc: "Aapke office, warehouse aur physical assets ki poori suraksha.", icon: <Building2 className="w-10 h-10 text-blue-600" /> },
    { title: "Workers Compensation", desc: "Employees ki safety aur medical recovery ke liye behtar coverage.", icon: <Briefcase className="w-10 h-10 text-blue-600" /> },
    { title: "Commercial Auto", desc: "Business vehicles aur logistics fleet ke liye specialized insurance.", icon: <Truck className="w-10 h-10 text-blue-600" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f8fafc] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <Zap size={16} /> Business Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive <span className="text-blue-600">Commercial Insurance</span> Solutions
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Vestigo aapke business ko har tarah ke risks se bachata hai. Chota startup ho ya badi enterprise, humare paas har scale ke liye customized insurance plans hain.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div key={index} className="group p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section / Why Us */}
      <section className="py-20 px-6 border-t border-slate-50">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Apne Business ko Aaj hi Secure Karein</h2>
            <p className="text-slate-400 mb-10">Hamare experts aapke business model ko samajh kar sabse sahi plan suggest karenge.</p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
              Free Consultation Lein
            </button>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default CommercialInsurance;