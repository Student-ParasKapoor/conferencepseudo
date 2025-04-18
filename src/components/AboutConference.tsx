import React from 'react';
import { Target } from 'lucide-react';

const AboutConference: React.FC = () => {
  const objectives = [
    'To provide a platform to researchers from industry and academia, scientists, and the students of undergraduate, postgraduate, and doctoral programs on current thrust areas of various disciplines of Engineering and Technology',
    'To bring together students and researchers from industry and academia to exchange their innovative ideas',
    'To promote networking and engagement of students, researchers, academicians and industry persons',
    'To provide a competitive environment among the researchers and the innovators and recognize their best contributions',
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-12">
          <div className="transform hover:scale-[1.02] transition-transform duration-500">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8 transform hover:scale-105 transition-transform duration-300">
              ABOUT THE CONFERENCE
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 text-justify bg-white p-8 rounded-xl shadow-lg">
              <p className="mb-6 leading-relaxed">
                Fourth International conference on "Recent Advances in Engineering" will be organized by Poornima College
                of Engineering, Jaipur during November 21-22, 2025. In the previous three editions of conference, the event
                was organized as International Conference and contests.
              </p>
              <p className="mb-6 leading-relaxed">
                Third editions of Paper have been already organized and selected good quality papers were published in UGC
                and SCOPUS indexed journals. The first Conference received publication support of Taylor & Francis and the
                second conference received publication support of SCOPUS Indexed Journals under Scientific.net and Web of
                Science indexed Journal of Polymer & Composites (SCIE).
              </p>
              <p className="mb-6 leading-relaxed">
                ICRAE 2024 also received a publication support from ESCI Journal, Frontiers in Mechanical Engineering. This
                year's edition also has been upgraded as International level with a separate conference track in each
                domain.
              </p>
              <p className="leading-relaxed">
                The conference is divided into three parallel tracks. The best papers in each technical field will receive
                awards. Beyond that, selected papers will be published in ISBN proceedings. Good Quality papers will be
                published in Scopus indexed journal with additional charges. This additional charge will depend on the type
                of journal and article processing fee of the particular journal.
              </p>
            </div>
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-500">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8 transform hover:scale-8
            transition-transform duration-300">
              OBJECTIVES OF THE CONFERENCE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-blue-900" />
                    </div>
                    <p className="text-gray-700 text-justify group-hover:text-gray-900 transition-colors duration-300">
                      {objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;