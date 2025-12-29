import React from 'react';
import { Heart, Umbrella, Banknote, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const LifeInsurance = () => {
  const plans = [
    {
      title: "Term Life Insurance",
      desc: "Kam premium mein zyada coverage, taaki aapki family ka future hamesha secure rahe.",
      icon: <Umbrella className="w-10 h-10 text-blue-500" />,
      features: ["Pure Protection", "Tax Benefits", "High Coverage"]
    },
    {
      title: "Whole Life Plan",
      desc: "Zindagi bhar ka saath aur savings ka fayda, jo aapke retirement mein kaam aaye.",
      icon: <Heart className="w-10 h-10 text-red-500" />,
      features: ["Lifetime Cover", "Cash Value", "Guaranteed Returns"]
    },
    {
      title: "Child Future Plan",
      desc: "Aapke bachon ki education aur marriage ke liye ek mazboot financial base.",
      icon: <Users className="w-10 h-10 text-purple-500" />,
      features: ["Wealth Creation", "Premium Waiver", "Fixed Milestones"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Suraksha Jo Aapke <br />
            <span className="text-blue-600">Apno Ka Saath Nibhaye</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zindagi ke har mod par Vestigo aapke saath hai. Hum dete hain wahi bharosa jo aapki family ko aapke na hone par bhi financial azadi de sake.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
              Check Premiums
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
              Talk to Expert
            </button>
          </div>
        </div>
        
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="flex flex-col p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{plan.title}</h3>
              <p className="text-slate-500 mb-8 flex-grow">{plan.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {feat}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                Plan Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Vestigo Hi Kyun?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 h-12 w-12 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Banknote />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hassle-Free Claims</h4>
                  <p className="text-slate-500">Hamara claim settlement ratio industry mein sabse behtar hai.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 h-12 w-12 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Users />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Personalized Advisory</h4>
                  <p className="text-slate-500">Aapki income aur zarurat ke hisab se sahi plan ki chayan.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Claim Ratio</div>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Happy Lives</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInsurance;