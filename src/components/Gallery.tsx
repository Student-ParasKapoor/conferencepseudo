import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      title: "Conference Hall",
      description: "Main conference venue during inaugural session"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      title: "Technical Session",
      description: "Researchers presenting their work"
    },
    {
      url: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1000",
      title: "Workshop Session",
      description: "Interactive workshop on emerging technologies"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
      title: "Panel Discussion",
      description: "Expert panel discussing future trends"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1000",
      title: "Award Ceremony",
      description: "Recognition of outstanding research papers"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
      title: "Networking Session",
      description: "Participants engaging in discussions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Conference Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highlights from previous ICRAE conferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative animate-fadeIn hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 animate-slideIn">
          <div className="flex items-center mb-6">
            <ImageIcon className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Previous Conferences</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: "2024", stats: "Over 500 participants" },
              { year: "2023", stats: "300+ research papers" },
              { year: "2022", stats: "25 countries represented" }
            ].map((conference, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-blue-50 rounded-lg hover-scale animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h4 className="font-semibold text-blue-900">ICRAE {conference.year}</h4>
                <p className="text-gray-600">{conference.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
