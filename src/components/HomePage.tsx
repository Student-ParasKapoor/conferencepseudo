import React from 'react';
import { Link } from 'react-router-dom';
import ConferenceInfo from './ConferenceInfo';
import AboutConference from './AboutConference';
import AboutPCE from './AboutPCE';
import AboutJaipur from './AboutJaipur';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/PCEVideo.mp4"
          onError={() => console.error('Failed to load background video')}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            4th INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING
            <br />
            <span className="text-4xl md:text-6xl">ICRAE 2025</span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 drop-shadow-md">
            November 21-22, 2025 | Exploring Innovations for a Sustainable Future
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/registration"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Register Now
            </a>
            <a
              href="/call-for-papers"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </section>
      <ConferenceInfo />
      <AboutConference />
      <AboutPCE />
      <AboutJaipur />
    </div>
  );
};

export default HomePage;