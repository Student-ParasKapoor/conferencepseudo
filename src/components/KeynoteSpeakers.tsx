import React from 'react';
import { Award, Globe, Linkedin } from 'lucide-react';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Professor Ir. Dr. U. Johnson Alengaram",
      title: "Professor & Director",
      institution: "University of Malaya, Kuala Lumpur, Malaysia",
      image: "/images/Jhonson.jpg",
      linkedin: "https://www.linkedin.com/in/prof-ir-u-johnson-alengaram-b-e-me-phd-ciem-ceng-mice-uk-666a6b54/"
    },
    {
      name: "Mr. Raj Kapoor",
      title: "Founder, Chairman",
      institution: "India Blockchain Alliance, The Global Alliance for Artificial Intelligence and Innovation",
      image: "/images/raj.jpg",
      linkedin: "https://www.linkedin.com/in/indieblock/"
    },
    {
      name: "Dr. Shashi Bhushan",
      title: "Professor, Computer & Information Science Department",
      institution: "Universiti Teknologi Petronas, Malaysia",
      image: "/images/Shashi.jpg",
      linkedin: "https://www.linkedin.com/in/dr-naveen-bp-36930610/"
    },
    {
      name: "Prof. Duc Truong Pham",
      title: "Professor,Department of Mechanical Engineering, School of Engineering, College of Engineering and Physical Sciences,",
      institution: "The University of Birmingham, Birmingham, United Kingdom",
      // expertise: "Deep Learning and Neural Networks",
      image: "/images/DT.jpg",
      linkedin: "https://www.linkedin.com/in/duc-pham-17613347/?originalSubdomain=uk"
    },
    {
      name: "Dr. Naveen B.P.",
      title: "Professor, Department of Civil Engineering",
      institution: "NITTTR, Kolkata",
      image: "/images/naveen.jpg",
      linkedin: "https://www.linkedin.com/in/dr-naveen-bp-36930610/"
    },
    {
      name: "Dr. Randip Kumar Das",
      title: "Professor, Department of Mechanical Engineering",
      institution: "Indian Institute of Technology (ISM) Dhanbad",
      // expertise: "Cybersecurity and Blockchain",
      image: "/images/Randip.jpg",
      // linkedin: "https://www.linkedin.com/in/jameswilson"
    },
    {
      name: "Prof. Meghanshu Vashista",
      title: "Professor, Department of Mechanical Engineering",
      institution: "Indian Institute of Technology (Banaras Hindu University), Varanasi",
      // expertise: "Sustainable Engineering",
      image: "/images/Meghanshu.jpeg",
      linkedin: "https://www.linkedin.com/in/meghanshu-vashista-1a544665/"
    },
    {
      name: "Prof. Amit Rai Dixit",
      title: "Professor, Department of Mechanical Engineering",
      institution: "Indian Institute of Technology (ISM) Dhanbad",
      expertise: "Cloud Computing and Distributed Systems",
      image: "/images/Amit.jpg",
      linkedin: "https://www.linkedin.com/in/amit-rai-dixit-a6b408249/"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 transform hover:scale-105 transition-transform duration-300">
            Keynote Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Distinguished experts from around the world sharing cutting-edge research and insights
          </p>
        </div>

        {/* Changed grid to md:grid-cols-4 for 4 speakers per row on medium screens and above */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="group relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              {/* Main card */}
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* LinkedIn overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm">{speaker.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Expert Insights</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Latest developments in engineering and technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Future trends and emerging technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Industry-academia collaboration opportunities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Global Perspective</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">International research collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Cross-cultural innovation exchange</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">Global engineering challenges and solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;