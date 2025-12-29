import React from 'react';
import { Leaf, Wind, Sun, BatteryCharging, ShieldCheck, ArrowRight } from 'lucide-react';

const GreenInsurance = () => {
  const initiatives = [
    {
      title: "Renewable Energy Support",
      desc: "Solar panels aur wind turbines ke liye specialized coverage taaki green energy ko mil sake poora protection.",
      icon: <Sun className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "EV Fleet Insurance",
      desc: "Electric vehicles ke liye customized plans jo carbon footprint kam karne mein aapki madad karte hain.",
      icon: <BatteryCharging className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Eco-Friendly Property",
      desc: "Green-certified buildings ke liye discounted premiums aur unique damage recovery solutions.",
      icon: <Leaf className="w-10 h-10 text-emerald-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Nature Vibe */}
      <section className="relative py-24 px-6 bg-[#f0f9f4] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Wind size={16} /> Eco-Conscious Protection
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Insurance that <span className="text-emerald-600">Protects</span> the Planet
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Vestigo s Green X Insurance un businesses ke liye hai jo sustainability ko priority dete hain. Hum de rahe hain behtar coverage un assets ko jo hamare kal ko behtar banate hain.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-emerald-200">
                Get Green Quote
              </button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex-1 relative">
             <div className="w-full h-[400px] bg-gradient-to-tr from-emerald-200 to-teal-100 rounded-[2rem] flex items-center justify-center relative shadow-2xl overflow-hidden">
                <Leaf className="w-48 h-48 text-emerald-600/20 absolute -bottom-10 -right-10 rotate-12" />
                <ShieldCheck className="w-32 h-32 text-emerald-600" />
             </div>
          </div>
        </div>
      </section>

      {/* Sustainable Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Humari Green Initiatives</h2>
          <p className="text-slate-500">Ek saaf aur surakshit bhavishya ke liye hamare pass hai customized solutions.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {initiatives.map((item, idx) => (
            <div key={idx} className="p-10 border border-emerald-50 rounded-3xl bg-white hover:bg-emerald-50/30 hover:border-emerald-200 transition-all group">
              <div className="bg-white w-20 h-20 rounded-2xl shadow-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-bold gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Trust Bar */}
      <section className="bg-slate-900 py-16 px-6 overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Together for a Greener Tomorrow</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            Hum sirf insurance nahi dete, hum sustainable practices ko reward karte hain. Kam carbon emission, zyada benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-white text-xl font-bold">ECO-CERTIFIED</span>
             <span className="text-white text-xl font-bold">SUSTAINABLE+</span>
             <span className="text-white text-xl font-bold">RENEWABLE FIRST</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenInsurance;