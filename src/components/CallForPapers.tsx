import React from 'react';
import { FileText, ClipboardList, Info, BookCheck, Target } from 'lucide-react';

const CallForPapers = () => {
  const tracks = {
    track1: {
      title: "Track-1: Sustainable Development",
      topics: [
        "Sustainable Development Goals (SDGs)",
        "Technology for waste management and recycling",
        "Regenerative agriculture and soil health",
        "Sustainable manufacturing & innovative materials",
        "Computational Models & AI techniques for Sustainable Development",
        "Sustainable cities and communities",
        "Disaster resilience and climate-adaptive infrastructure",
        "Bio engineering for sustainable development",
        "Sustainable practices in current scenario",
        "Global sustainability practices in supply chain",
        "Sustainable practices in Food & agriculture"
      ]
    },
    track2: {
      title: "Track-2: Environment",
      topics: [
        "Pollution Control through AI",
        "Waste management and minimization",
        "Carbon Economy & trading",
        "Renewable Energy optimization",
        "Resource management and Environment",
        "Climate change Mitigation and adaptation",
        "Bio-energy, Biomass and Bio-fuels",
        "Circular economy & waste valorization",
        "Environment Monitoring by remote sensing & GIS",
        "Environmental Risk assessment & management"
      ]
    },
    track3: {
      title: "Track-3: Emerging Green Technologies",
      topics: [
        "Green Nanotechnology",
        "Green Power Systems and Smart Grids",
        "Green Technologies in Information",
        "Green building Urbanization and rural development",
        "Green supply chain and logistics",
        "Green Energy Trade for Economic Development",
        "Green Energy Policies and Programmes",
        "Sustainable Cities, Architecture and Green Buildings",
        "Green Design, Products and Manufacturing Processes",
        "Industry 6.0 and allied green technologies",
        "Energy Efficient Designs and Standards",
        "Sustainable transportation (EVs, hydrogen fuel, public transit)",
        "Industry innovation & Infrastructure"
      ]
    }
  };

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
            CALL FOR PAPERS
          </h2>
        </div>
        
        <div className="prose prose-lg mx-auto text-gray-600 text-justify mb-12 animate-slideIn">
          <p className="mb-6">
            ICRAE 2025 invites different research articles from researchers from various institutions
            across the world. The conference shall be conducted for three parallel tracks.
          </p>
          <p className="mb-6">
            All the papers should be prepared in accordance with the author's guidelines. Before
            submitting, the manuscript written should be thoroughly checked for grammatical or
            typographical errors.
          </p>
          <p className="mb-6">
            The manuscript should not exceed eight pages and must conform to the IEEE dual-
            column format.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.values(tracks).map((track, index) => (
            <div 
              key={track.title} 
              className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                  {track.title}
                </h3>
                <div className="bg-blue-100 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-5 w-5 text-blue-900" />
                </div>
              </div>
              <ul className="space-y-3">
                {track.topics.map((topic, topicIndex) => (
                  <li 
                    key={topicIndex}
                    className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                    style={{ animationDelay: `${topicIndex * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto mb-12 animate-slideInLeft">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            Paper Submission
          </h3>
          <div className="flex justify-center">
            <a
              href="https://easychair.org/conferences/?conf=icrae2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all duration-300 hover-scale hover-glow"
            >
              Submit Your Paper
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 animate-slideInRight">
          <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center flex items-center justify-center">
            <ClipboardList className="mr-3 h-6 w-6 text-blue-600" />
            Author Instructions
          </h3>
          <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <Info className="mr-3 h-5 w-5 text-blue-600" />
            Full Paper Submission Guidelines
          </h4>
          <ul className="space-y-4 text-gray-700 text-justify">
            {[
              "The manuscript should be written in English with a maximum paper length of eight pages including tables / diagrams / figures / illustrations/ equations and etc.",
              "After submission of paper in CMT, you will receive an ID that will have to be used for all further communications.",
              "All the papers are eligible for the contests. They can participate in the contests. Hence, authors are required to register immediately by paying the registration fees. Without payment of registration fees, submission will not be processed.",
              "Accepted papers for conference and are not participating in the contests will be notified if the paper is accepted for publication. They will have to submit publication charges once it is accepted. Papers for contests are will be notified for further in associated journals.",
              "All the papers will be processed further. Initial screening will be done by the Technical Program Committee of TECHNOVATION 2024, which includes the scope the conference, plagiarism, organization of the manuscripts, quality of tables / diagrams / figures / illustrations/ equations and etc. Authors will be required to submit camera-ready paper, copy right form before presentation",
              "Paper accepted for journals shall be required to pay additional publication charges as well as will be required to submit the final manuscript as per journal requirements.",
              "Schedule of presentation of papers in conference and the contests shall be communicated in advance.",
              "All the papers will be published in the TECHNOVATION- 2024 proceedings except those accepted for journal publication.",
              "Certificate of Participation will be issued to all the participants who register and present the paper."
            ].map((text, index) => (
              <li key={index} className="flex items-start hover-lift animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-blue-600 mr-3">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 animate-fadeIn">
          <div className="prose prose-lg mx-auto text-gray-600 text-justify mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
              <BookCheck className="mr-3 h-6 w-6 text-blue-600" />
              Additional Instructions
            </h3>
            <p className="mb-4">
              Authors submitting paper for conference are required to participate in the contests and pay the registration fees for the contests immediately after submissions. Without payment of registration fees, submission will not be processed.
            </p>
            <p>
              Publication Fees must be paid only after receiving the acceptance for publication in Journal/book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;