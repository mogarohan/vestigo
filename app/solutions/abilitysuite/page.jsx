import React from 'react';
import { Cpu, Globe, Zap, BarChart3, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const AbilitySuite = () => {
  const modules = [
    {
      title: "Core Engine",
      desc: "Aapke business operations ko automate karne wala powerful central system.",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      tag: "Automation"
    },
    {
      title: "Global Connectivity",
      desc: "Seamless integration partners aur APIs ke saath duniya bhar mein connectivity.",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      tag: "API Ready"
    },
    {
      title: "Real-time Analytics",
      desc: "Data-driven decisions lene ke liye advanced reporting aur live dashboards.",
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      tag: "Big Data"
    },
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption aur multi-layer protection aapke sensitive data ke liye.",
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      tag: "Secure"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent with your other pages */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
            <Zap size={16} /> Digital Ecosystem
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Vestigo <span className="text-blue-600">Ability Suite</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ek comprehensive technology stack jo insurance workflows ko end-to-end digitize karta hai. Scale fast, stay secure, aur productivity ko 10x badhayein.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-200">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid - White Background style */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {m.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">{m.tag}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section - Clean & Informative */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 italic">Built for Modern Enterprise</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Humaari modular architecture allow karti hai ki aap sirf wahi modules select karein jin ki aapko zarurat hai, bina complex setup ke.
            </p>
            <div className="space-y-4">
              {[
                "Microservices based scalable design",
                "Seamless integration with legacy systems",
                "Advanced data encryption protocols"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500 w-5 h-5" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
             {/* Abstract Tech Graphic */}
             <div className="space-y-6">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-blue-600 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-400">MODULE A</div>
                   <div className="h-32 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-slate-300">MODULE B</div>
                </div>
                <div className="h-10 w-1/2 bg-slate-50 border border-slate-100 rounded-lg mx-auto" />
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - Dark consistent with your footer */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Empower your Team?</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Ability Suite ke saath apne purane workflows ko digital future mein convert karein.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto">
          Get Started <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
};

export default AbilitySuite;