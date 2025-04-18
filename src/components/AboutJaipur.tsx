import React from 'react';

const AboutJaipur: React.FC = () => {
  const images: { url: string; title: string; description: string }[] = [
    {
      url: '/images/jaipur1.jpg',
      title: 'Jal Mahal',
      description: 'A stunning palace floating in the middle of Man Sagar Lake, built in 1799 by Maharaja Madho Singh I. The palace appears to float on the lake surface, with only the top floor visible above water.'
    },
    {
      url: '/images/jaipur2.jpg',
      title: 'Hawa Mahal',
      description: 'The iconic "Palace of Winds" built in 1799 by Maharaja Sawai Pratap Singh. Its unique five-story exterior resembles a honeycomb with 953 small windows, designed to allow royal ladies to observe street festivals while remaining unseen.'
    },
    {
      url: '/images/jaipur3.jpg',
      title: 'Amer Fort',
      description: 'A magnificent fort-palace built in 1592 by Raja Man Singh I. Located high on a hill, it features stunning architecture, mirror work, and the famous Sheesh Mahal. The fort overlooks Maota Lake and is a UNESCO World Heritage Site.'
    },
    {
      url: '/images/jaipur4.jpg',
      title: 'Albert Hall Museum',
      description: 'The oldest museum in Rajasthan, designed by Sir Samuel Swinton Jacob and opened in 1887. Named after Albert Edward, Prince of Wales, it showcases an extensive collection of artifacts, paintings, and sculptures from across India.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-pink-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-extrabold text-pink-900 text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          ABOUT JAIPUR
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="prose prose-lg text-gray-600 text-justify transform hover:scale-[1.02] transition-all duration-300">
            <p className="mb-6 leading-relaxed">
              One of the most beautiful cities of Rajasthan known as Pink City Jaipur was the stronghold of a clan of
              rulers whose three hill forts and a series of palaces in the city are important attractions. It is known as
              the Pink City because of the color of the stones specifically used in the walled city, and Jaipur's bazaars
              sell embroidered leather shoes, blue pottery, tie-dye scarves, and other exotic goods.
            </p>
            <p className="mb-6 leading-relaxed">
              The western part of Rajasthan itself forms a convenient track in the heart of the Thar Desert, shaping its
              history, lifestyle, and architecture. It was founded on November 18, 1727, by the ruler of Amber, Maharaja
              Sawai Jai Singh II, the city named after him, the capital of Rajasthan with wide avenues and spacious
              gardens.
            </p>
          </div>
          
          <div className="prose prose-lg text-gray-600 text-justify transform hover:scale-[1.02] transition-all duration-300">
            <p className="mb-6 leading-relaxed">
              Here, the past comes to life in magnificent fortresses and palaces that are pink and once lived in
              maharajahs. Jaipur's bustling bazaar, famous for its Rajasthan jewelry fabrics and shoes, boasts timeless
              quality and is undoubtedly a treasure trove for shoppers.
            </p>
            <p className="leading-relaxed">
              This charming city, with its romantic charm, takes you into the era of royalty and tradition.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-pink-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={() => console.error(`Failed to load Jaipur image ${index + 1}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutJaipur;