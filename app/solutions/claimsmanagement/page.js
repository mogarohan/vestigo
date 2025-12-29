import React from 'react';
import { ClipboardCheck, ShieldCheck, Clock, BarChart3 } from 'lucide-react'; // Icons ke liye lucide-react use karein

const ClaimsManagement = () => {
  const features = [
    { title: "End-to-End Processing", desc: "Claim darj karne se lekar settlement tak ka poora digital safar.", icon: <ClipboardCheck className="w-8 h-8 text-blue-600" /> },
    { title: "Fraud Detection", desc: "Advanced analytics ke saath galat claims ki pehchaan.", icon: <ShieldCheck className="w-8 h-8 text-blue-600" /> },
    { title: "Fast Settlements", desc: "Automated workflows jo processing time ko 40% tak kam karte hain.", icon: <Clock className="w-8 h-8 text-blue-600" /> },
    { title: "Real-time Reporting", desc: "Live dashboard jahan aap har claim ki status dekh sakte hain.", icon: <BarChart3 className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Claims Management <span className="text-blue-600">Reimagined</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vestigo ke sath apne claims processing ko tez, transparent aur error-free banayein. Hum provide karte hain behtar customer experience aur smarter decision making.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Apne Claims Process ko Optimize Karein</h2>
        <p className="mb-8 opacity-80">Aaj hi hamare experts se baat karein aur demo book karein.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default ClaimsManagement;