import React from 'react';
import { Mail, Globe, Linkedin } from 'lucide-react';

const Committee = () => {
  const committeeMembers = [
    {
      name: "Dr. John Smith",
      designation: "Conference Chair",
      image: "public/images/committee/john-smith.jpg",
      email: "john.smith@example.com",
      website: "https://example.com/john-smith",
      linkedin: "https://linkedin.com/in/john-smith"
    },
    {
      name: "Dr. Sarah Johnson",
      designation: "Technical Program Chair",
      image: "public/images/committee/sarah-johnson.jpg",
      email: "sarah.johnson@example.com",
      website: "https://example.com/sarah-johnson",
      linkedin: "https://linkedin.com/in/sarah-johnson"
    },
    {
      name: "Dr. Michael Chen",
      designation: "Publication Chair",
      image: "public/images/committee/michael-chen.jpg",
      email: "michael.chen@example.com",
      website: "https://example.com/michael-chen",
      linkedin: "https://linkedin.com/in/michael-chen"
    }
  ];

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
            Organizing Committee
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the team behind ICRAE 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.designation}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee; 