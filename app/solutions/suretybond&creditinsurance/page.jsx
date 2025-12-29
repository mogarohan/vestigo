import React from 'react';
import { ShieldCheck, FileText, Gavel, BarChart4, CheckCircle, ArrowRight, Landmark } from 'lucide-react';

const SuretyBondPage = () => {
  const categories = [
    {
      title: "Surety Bonds",
      desc: "Contract performance aur legal obligations ki guarantee. Perfect for construction aur government projects.",
      icon: <Gavel className="w-10 h-10 text-indigo-600" />,
      items: ["Bid Bonds", "Performance Bonds", "Payment Bonds", "Customs Bonds"]
    },
    {
      title: "Credit Insurance",
      desc: "Apne business receivables ko bad debts se bachayein aur cash flow ko hamesha maintain rakhein.",
      icon: <BarChart4 className="w-10 h-10 text-indigo-600" />,
      items: ["Trade Credit", "Export Credit", "Accounts Receivable", "Political Risk"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional & Corporate */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Landmark size={16} /> Financial Risk Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Surety Bond & <br />
            <span className="text-indigo-400">Credit Insurance</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Apne trade aur contracts ko financial uncertainty se surakshit karein. Vestigo ke specialized solutions aapke business trust aur credibility ko naye level par le jate hain.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-indigo-500/20">
              Apply for Bond
            </button>
          </div>
        </div>
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Main Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all">
              <div className="bg-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                {cat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">{cat.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{cat.desc}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-indigo-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 shadow-md mb-4 z-10">1</div>
              <h4 className="font-bold text-lg mb-2">Analysis</h4>
              <p className="text-slate-500 text-sm">Hamaare experts aapke risk profile ka gehra evaluation karte hain.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 shadow-md mb-4 z-10">2</div>
              <h4 className="font-bold text-lg mb-2">Structure</h4>
              <p className="text-slate-500 text-sm">Customized bond ya credit policy structure ki jati hai.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 shadow-md mb-4 z-10">3</div>
              <h4 className="font-bold text-lg mb-2">Issuance</h4>
              <p className="text-slate-500 text-sm">Digital verification ke sath fast policy issuance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white flex flex-col items-center gap-6">
          <ShieldCheck className="w-16 h-16 text-indigo-200" />
          <h2 className="text-3xl font-bold">Risk Management Experts Se Sallah Lein</h2>
          <p className="text-indigo-100 max-w-xl">Surety bonds aur credit insurance se judi har sawal ka jawab payein.</p>
          <button className="bg-white text-indigo-600 px-12 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
            Speak to a Specialist <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuretyBondPage;