import React from 'react';

const AboutPCE: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          ABOUT POORNIMA COLLEGE OF ENGINEERING
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="prose prose-lg text-gray-600 text-justify">
              <p className="mb-6 leading-relaxed">
                Poornima College of Engineering (PCE) has been practicing superior education standards since its inception
                in 2000. The College has maintained its eminence as a leading Engineering college in Rajasthan, India. It
                is NAAC A+ Accredited and ranked second among all the technical colleges affiliated with Rajasthan
                Technical University, Kota, India.
              </p>
              <p className="mb-6 leading-relaxed">
                PCE is moving ahead successfully to attain its vision mission to transforma students into high-quality
                engineers and managers who may also enrich society by adhering to ethical culture, human values, and a
                sense of service to society and the nation. PCE came into existence to promote quality in professional &
                technical education in Jaipur, Rajasthan, and has a very strong research orientation and culture.
              </p>
              <p className="leading-relaxed">
                What sets apart Poornima College of Engineering from other colleges in Jaipur, is its commitment to
                high-quality and industry-recognized delivery of education, ensuring the cultural and social enrichment of
                its students. Poornima brand symbolizes excellence through innovations, reliability, transparency, and
                professionalism of the highest order and instills faith and confidence among all members concerned in India
                and abroad.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">2000+</h3>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">9</h3>
                <p className="text-sm text-gray-600">Specializations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">NAAC A+</h3>
                <p className="text-sm text-gray-600">Accreditation</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">2000</h3>
                <p className="text-sm text-gray-600">Established</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/images/pce_image.jpg"
                alt="Poornima College of Engineering Campus"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={() => console.error('Failed to load PCE image')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPCE;