import React from 'react';

const AboutJaipur = () => {
  const images = [
    "/public/jaipur1.jpg", // Replace with your actual image paths
    "/public/jaipur2.jpg",
    "/public/jaipur3.jpg",
    "/public/jaipur4.jpg"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
          ABOUT JAIPUR
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose prose-lg text-gray-600 text-justify">
            <p className="mb-4">
              One of the most beautiful cities of Rajasthan known as Pink City Jaipur was the
              stronghold of a clan of rulers whose three hill forts and a series of palaces in the city
              are important attractions. It is known as the Pink City because of the color of the stones
              specifically used in the walled city, and Jaipur's bazaars sell embroidered leather shoes,
              blue pottery, tie-dye scarves, and other exotic goods.
            </p>
            <p className="mb-4">
              The western part of Rajasthan itself forms a convenient track in the heart of the Thar Desert,
              shaping its history, lifestyle, and architecture. It was founded on November 18, 1727, by the ruler of
              Amber, Maharaja Sawai Jai Singh II, the city named after him, the capital of Rajasthan
              with wide avenues and spacious gardens.
            </p>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Here, the past comes to life in magnificent fortresses and palaces that are pink and once
              lived in maharajahs. Jaipur's bustling bazaar, famous for its Rajasthan jewelry fabrics
              and shoes, boasts timeless quality and is undoubtedly a treasure trove for shoppers.
              This charming city, with its romantic charm, takes you into the era of royalty and tradition.
            </p>
            <p>
              It was founded on November 18, 1727, by the ruler of Amber, Maharaja Sawai Jai
              Singh II, the city named after him, the capital of Rajasthan with wide avenues and
              spacious gardens. This charming city, with its romantic charm, takes you into
              the era of royalty and tradition.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Jaipur Scene ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutJaipur;
