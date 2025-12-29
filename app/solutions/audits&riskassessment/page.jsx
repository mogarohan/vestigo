import React from 'react';
import { ShieldCheck, Search, BarChart, ClipboardCheck } from 'lucide-react'; // icons માટે (જો lucide-react ન હોય તો કાઢી નાખવા)

const AuditsRiskAssessment = () => {
  const features = [
    {
      title: "Comprehensive Auditing",
      desc: "Detailed evaluation of your current business processes and financial safety nets.",
      icon: <Search className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Risk Mitigation",
      desc: "Identifying potential threats before they impact your business operations.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Data Analysis",
      desc: "Using advanced analytics to predict trends and prepare for future uncertainties.",
      icon: <BarChart className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Compliance Check",
      desc: "Ensuring all your insurance and financial policies meet industry regulations.",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Audits & Risk Assessment
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Secure your business future with Vestigo s deep-dive auditing and 
            proactive risk management strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Risk Assessment Matters?
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In an ever-changing global market, being unaware of your business risks is the biggest risk of all. 
              Our team at Vestigo specializes in identifying hidden vulnerabilities in your operational and 
              financial structures.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don t just find problems; we provide actionable solutions to strengthen your 
              resilience and ensure long-term stability.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Download Brochure
            </button>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center border border-dashed border-gray-300 h-80">
             <span className="text-gray-400 font-medium">[ High-Quality Image / Illustration ]</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="p-6 border rounded-xl hover:shadow-lg transition duration-300 bg-white">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            Ready to secure your business?
          </h2>
          <p className="text-gray-700 mb-8">
            Schedule a consultation with our expert risk analysts today.
          </p>
          <a href="/contacts" className="inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition">
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default AuditsRiskAssessment;