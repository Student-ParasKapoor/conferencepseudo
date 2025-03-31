import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const PublicationEthics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12 animate-fade-in-down">
          Publication Ethics
        </h2>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3 animate-pulse" />
            <h3 className="text-2xl font-semibold text-gray-800">Publication Ethics Statement</h3>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed animate-fade-in">
            ICRAE 2025 is committed to maintaining the highest standards of publication ethics and quality. 
            All submitted papers will undergo rigorous peer review and plagiarism check to ensure originality 
            and scientific merit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center animate-fade-in-left">
              <AlertTriangle className="text-red-500 mr-2 animate-bounce" />
              Unethical Practices
            </h3>
            <ul className="space-y-4">
              {[
                "Plagiarism in any form",
                "Duplicate submission of papers",
                "Data fabrication or falsification",
                "Improper author attribution"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-red-500 mr-3 transition-transform group-hover:scale-125">•</span>
                  <span className="text-gray-700 transition-colors group-hover:text-red-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center animate-fade-in-right">
              <CheckCircle className="text-green-500 mr-2 animate-bounce" />
              Author Responsibilities
            </h3>
            <ul className="space-y-4">
              {[
                "Submit original research work",
                "Properly cite all references",
                "Declare any conflicts of interest",
                "Follow submission guidelines"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-green-500 mr-3 transition-transform group-hover:scale-125">•</span>
                  <span className="text-gray-700 transition-colors group-hover:text-green-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-fade-in">Review Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Initial Screening", desc: "Plagiarism check and basic quality assessment" },
              { step: "2", title: "Peer Review", desc: "Double-blind review by expert reviewers" },
              { step: "3", title: "Final Decision", desc: "Editorial board review and decision" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition-all group _

-hover:bg-blue-100 group-hover:scale-110">
                  <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                </div>
                <h4 className="font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these custom animations to your Tailwind config or CSS file
/*
@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in;
  }
  .animate-fade-in-down {
    animation: fadeInDown 0.6s ease-in;
  }
  .animate-fade-in-left {
    animation: fadeInLeft 0.6s ease-in;
  }
  .animate-fade-in-right {
    animation: fadeInRight 0.6s ease-in;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-in;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
*/

export default PublicationEthics;