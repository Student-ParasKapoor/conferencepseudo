import React from 'react';
import { FileText, Download, FileCheck, FileWarning, FileCode, FileSpreadsheet, FileImage } from 'lucide-react';

const Downloads = () => {
  const documents = [
    {
      category: "Templates",
      items: [
        { name: "Paper Template", format: "DOCX", size: "245 KB" },
        { name: "Presentation Template", format: "PPT", size: "1.2 MB" },
        { name: "Poster Template", format: "PDF", size: "850 KB" }
      ]
    },
    {
      category: "Guidelines",
      items: [
        { name: "Author Guidelines", format: "PDF", size: "420 KB" },
        { name: "Formatting Instructions", format: "PDF", size: "380 KB" },
        { name: "Publication Manual", format: "PDF", size: "1.5 MB" }
      ]
    },
    {
      category: "Forms",
      items: [
        { name: "Registration Form", format: "PDF", size: "125 KB" },
        { name: "Copyright Form", format: "PDF", size: "180 KB" },
        { name: "Travel Grant Application", format: "DOCX", size: "290 KB" }
      ]
    }
  ];

  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'docx':
        return <FileCode className="h-5 w-5 text-blue-500" />;
      case 'ppt':
        return <FileSpreadsheet className="h-5 w-5 text-green-500" />;
      default:
        return <FileImage className="h-5 w-5 text-purple-500" />;
    }
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
            Downloads
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all necessary documents, templates, and forms for the conference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className={`bg-${categoryIndex === 0 ? 'blue' : categoryIndex === 1 ? 'green' : 'purple'}-100 p-3 rounded-full`}>
                  {categoryIndex === 0 ? (
                    <FileCode className="h-6 w-6 text-blue-600" />
                  ) : categoryIndex === 1 ? (
                    <FileText className="h-6 w-6 text-green-600" />
                  ) : (
                    <FileSpreadsheet className="h-6 w-6 text-purple-600" />
                  )}
                </div>
                <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name} 
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 animate-fadeIn"
                    style={{ animationDelay: `${categoryIndex * 200 + itemIndex * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getFileIcon(item.format)}
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.format} • {item.size}</p>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FileCheck className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold ml-3">Important Note</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">Please ensure you download and carefully read all relevant documents before submission.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FileCheck className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700">All submissions must follow the provided templates and guidelines to be considered for review.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <FileCheck className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-gray-700">Check file size before downloading to ensure sufficient storage space.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <FileCheck className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-gray-700">For large files, ensure a stable internet connection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
