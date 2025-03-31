import React from 'react';

const AboutPCE: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/white-diamond.png')] opacity-10 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header with Animation */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-12 animate-fade-in-down">
          About Poornima College of Engineering
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content with Fade-In Effect */}
          <div className="prose prose-lg text-gray-700 text-justify space-y-6 animate-fade-in-up">
            <p className="leading-relaxed">
              Established in <span className="font-semibold text-blue-800">2000</span>, Poornima College of Engineering (PCE) stands as a beacon of excellence in technical education in Rajasthan, India. With its <span className="text-green-600 font-semibold">NAAC A+ Accreditation</span> and a prestigious rank of second among all technical colleges affiliated with Rajasthan Technical University, Kota, PCE is committed to transforming students into skilled engineers and ethical leaders.
            </p>
            <p className="leading-relaxed">
              What distinguishes PCE is its unwavering dedication to delivering industry-aligned education, fostering a vibrant research culture, and promoting values of innovation and service. With over <span className="font-semibold text-blue-800">2000 students</span> across 9 engineering specializations, cutting-edge infrastructure, and a sprawling <span className="font-semibold text-blue-800">3.5 Lac sq. ft. campus</span>, PCE continues its journey with the motto: <span className="italic text-indigo-600">"Success is not a destination, it's a journey."</span>
            </p>
          </div>

          {/* Image with Hover Effect and Graphics */}
          <div className="relative group animate-fade-in-right">
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
              <img
                src="/images/Poornimaimage.png"
                alt="Poornima College of Engineering Campus"
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              {/* Overlay Graphic */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Graphic Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-75 animate-pulse" />
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full opacity-75 animate-bounce delay-200" />

            {/* Caption */}
            <p className="mt-4 text-center text-gray-600 text-sm italic group-hover:text-blue-900 transition-colors duration-300">
              A Glimpse of PCE’s Vibrant Campus
            </p>
          </div>
        </div>

        {/* Stats Section with Animated Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in">
            <div className="text-4xl font-bold text-blue-900">2000+</div>
            <p className="text-gray-600 mt-2">Students Enrolled</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in delay-100">
            <div className="text-4xl font-bold text-blue-900">9</div>
            <p className="text-gray-600 mt-2">Engineering Specializations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in delay-200">
            <div className="text-4xl font-bold text-blue-900">3.5L</div>
            <p className="text-gray-600 mt-2">Square Feet Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPCE;