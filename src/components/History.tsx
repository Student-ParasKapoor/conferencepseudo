import React from 'react';
import { History as HistoryIcon, Award, Users, Globe } from 'lucide-react';

const History = () => {
  const conferences = [
    { year: 2024, url: "https://www.poornima.org/technovation-2024/" },
    { year: 2023, url: "https://www.poornima.org/technovation-2023/" },
    { year: 2022, url: "https://www.poornima.org/technovation-2022/" },
    { year: 2021, url: "https://www.poornima.org/technovation-2021/" },
    { year: 2020, url: "https://www.poornima.org/technovation-2020/" },
  ];

    const milestones = [
    {
      year: 2022,
      title: "First International Conference",
      achievements: [
        "200+ participants from 15 countries",
        "150 research papers presented",
        "Special issue in Taylor & Francis journals"
      ]
    },
    {
      year: 2023,
      title: "Growing Global Presence",
      achievements: [
        "300+ participants from 20 countries",
        "180 research papers presented",
        "Collaboration with Springer Nature"
      ]
    },
    {
      year: 2024,
      title: "Expanding Horizons",
      achievements: [
        "500+ participants from 25 countries",
        "250 research papers presented",
        "Multiple special issues in SCOPUS journals"
      ]
    }
  ];

  const statistics = [
    { icon: Globe, label: "Countries", value: "25+" },
    { icon: Users, label: "Total Participants", value: "1000+" },
    { icon: Award, label: "Published Papers", value: "580+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Conference History
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of academic excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {statistics.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white rounded-lg shadow-lg p-8 text-center hover-scale animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative animate-slideIn">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-50 px-3 text-lg font-semibold text-gray-900">
              Conference Timeline
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className="bg-white rounded-lg shadow-lg p-8 hover-scale animate-fadeIn"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex items-center mb-6">
                <HistoryIcon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.year}</h3>
                  <p className="text-blue-600">{milestone.title}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {milestone.achievements.map((achievement, achievementIndex) => (
                  <li 
                    key={achievementIndex} 
                    className="flex items-start hover-lift animate-fadeIn"
                    style={{ animationDelay: `${index * 300 + achievementIndex * 100}ms` }}
                  >
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 animate-slideInRight">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Past Conferences</h3>
          <ul className="space-y-4">
            {conferences.map((conference, index) => (
              <li 
                key={conference.year} 
                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-all duration-300 hover-scale animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={conference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium hover-glow"
                >
                  Conference {conference.year}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 animate-slideIn">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">Global Impact</h3>
          </div>
          <p className="text-gray-700">
            Over the years, ICRAE has grown from a regional conference to a globally recognized platform
            for engineering research and innovation. Our commitment to excellence has attracted
            participants from across the world, fostering international collaboration and knowledge exchange.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
