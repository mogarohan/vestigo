import React from 'react';
import { HeartPulse, GraduationCap, Umbrella, Coffee, Sparkles, SmilePlus } from 'lucide-react';

const EmployeeBenefits = () => {
  const benefitCards = [
    {
      title: "Comprehensive Health",
      desc: "Medical, dental, aur vision coverage jo aapki family ko secure rakhta hai.",
      icon: <HeartPulse className="w-12 h-12 text-pink-500" />,
      bgColor: "bg-pink-50"
    },
    {
      title: "Wealth & Savings",
      desc: "Retirement plans aur financial wellness programs aapke future ke liye.",
      icon: <Umbrella className="w-12 h-12 text-blue-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Learning & Growth",
      desc: "Skills upskilling ke liye courses aur certifications ka poora support.",
      icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Work-Life Balance",
      desc: "Flexible working hours aur wellness leaves taaki aap fresh rahein.",
      icon: <Coffee className="w-12 h-12 text-orange-500" />,
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="bg-white">
      {/* Attractive Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm">
            <Sparkles className="text-yellow-500 w-4 h-4" />
            <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Invest in your people</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Happy Employees, <br /><span className="text-blue-600">Thriving Business</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Vestigo ke employee benefit solutions ke saath apne workplace ko ek winning culture mein badlein. Hum dete hain modern benefits jo retention aur productivity badhate hain.
          </p>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </section>

      {/* Interactive Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitCards.map((benefit, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 cursor-default"
              >
                <div className={`w-20 h-20 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun CTA Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-16 text-center text-white flex flex-col items-center gap-6 shadow-xl shadow-blue-500/20">
          <SmilePlus className="w-16 h-16 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold italic">Take care of your employees, and they all take care of your business.</h2>
          <p className="text-blue-100 text-lg">Humaare customized benefits package ke baare mein jaanne ke liye aaj hi connect karein.</p>
          <button className="mt-4 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmployeeBenefits;