import React from 'react';
import { BookOpen, Award, CheckCircle, BookMarked, FileText, Globe } from 'lucide-react';

const PublishingPartners = () => {
  const publisher = {
    name: "STM",
    description: "Leading publisher in scientific, technical, and medical research",
    logo: "/images/stm logo.png",
    journals: [
      "Journal of Polymer and Composites"
      // "Scientific Reports"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 transform hover:scale-105 transition-transform duration-300">
            Publishing Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working with leading publisher to ensure high-quality publication of your research
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div 
            className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{publisher.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{publisher.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Associated Journals:</h4>
                  <ul className="space-y-3">
                    {publisher.journals.map((journal, index) => (
                      <li 
                        key={journal} 
                        className="flex items-center text-gray-700 group animate-fadeIn"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 transition-transform group-hover:scale-125" />
                        <span className="transition-colors group-hover:text-green-600">{journal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ml-8 flex-shrink-0">
                <img 
                  src={publisher.logo} 
                  alt={`${publisher.name} Logo`} 
                  className="h-24 w-24 object-contain transform transition-transform duration-300 hover:scale-110 animate-fadeIn"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold ml-3">Publication Benefits</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Publication in SCOPUS/Web of Science indexed journals",
              "Fast-track review process for conference papers",
              "Special issue publications for selected papers",
              "High visibility and impact factor journals",
              "Professional editing and formatting support",
              "Digital Object Identifier (DOI) for all papers"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600 transition-transform group-hover:scale-125" />
                </div>
                <span className="text-gray-700 transition-colors group-hover:text-green-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingPartners;