import React from 'react';

const ConferenceInfo: React.FC = () => {
  const highlights = [
    {
      title: 'Hybrid Conference Mode',
      description: 'ICRAE 2025 will be conducted in Hybrid mode (Online & Offline)',
    },
    {
      title: 'Publication Opportunity',
      description:
        'All the Accepted, Registered and Presented Papers will be published in SCOPUS Indexed proceedings and journals given under Publication Partners',
    },
    {
      title: 'Journal Indexing',
      description: 'Special issues of journals indexed in SCOPUS/Web of Science/ ESCI/SCIE',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-8 transform hover:scale-105 transition-transform duration-300">
                ICRAE 2025 Publication Highlights
              </h2>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-xl font-semibold text-blue-900">{item.title}</p>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;