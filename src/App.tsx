import React, { Suspense, lazy } from 'react';
import { Menu, X, MessageCircle, Target } from 'lucide-react';
import { Link, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy-loaded components to improve initial load time
const CallForPapers = lazy(() => import('./components/CallForPapers'));
const ProgramRegistration = lazy(() => import('./components/ProgramRegistration'));
const PublishingPartners = lazy(() => import('./components/PublishingPartners'));
const PublicationEthics = lazy(() => import('./components/PublicationEthics'));
const KeynoteSpeakers = lazy(() => import('./components/KeynoteSpeakers'));
const Downloads = lazy(() => import('./components/Downloads'));
const Gallery = lazy(() => import('./components/Gallery'));
const History = lazy(() => import('./components/History'));
const Contact = lazy(() => import('./components/Contact'));
const Organization = lazy(() => import('./components/Organization'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Fallback UI for ErrorBoundary
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div className="text-center py-20 text-red-600">
    <h2>Something went wrong!</h2>
    <p>{error.message}</p>
  </div>
);

// ConferenceInfo Component
const ConferenceInfo: React.FC = () => {
  const highlights = [
    {
      title: 'Hybrid Conference Mode',
      description: 'ICRAE 2025 will be conducted in Hybrid mode (Online & Offline)',
    },
    {
      title: 'Publication Opportunity',
      description:
        'All the Accepted, Registered and Presented Papers will be published in SCOPUS Indexed proceedings and journals given under Publication Partners',
    },
    {
      title: 'Journal Indexing',
      description: 'Special issues of journals indexed in SCOPUS/Web of Science/ ESCI/SCIE',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-8 transform hover:scale-105 transition-transform duration-300">
                ICRAE 2025 Publication Highlights
              </h2>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-xl font-semibold text-blue-900">{item.title}</p>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// AboutConference Component
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
                of Engineering, Jaipur during March 25-27, 2025. In the previous three editions of conference, the event
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
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8 transform hover:scale-105 transition-transform duration-300">
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

// AboutPCE Component
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
                PCE is moving ahead successfully to attain its vision mission to transform students into high-quality
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

// AboutJaipur Component
const AboutJaipur: React.FC = () => {
  const images: string[] = ['/images/jaipur1.jpg', '/images/jaipur2.jpg', '/images/jaipur3.jpg', '/images/jaipur4.jpg'];

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
          <div className="prose prose-lg text-gray-600 transform hover:scale-[1.02] transition-all duration-300">
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
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={image}
                  alt={`Jaipur Scene ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={() => console.error(`Failed to load Jaipur image ${index + 1}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">Jaipur Heritage</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Experience the rich cultural heritage of the Pink City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-900 mb-2">Pink City</h3>
            <p className="text-sm text-gray-600">Famous for its pink-hued architecture</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-900 mb-2">Royal Heritage</h3>
            <p className="text-sm text-gray-600">Rich history of Rajputana culture</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-900 mb-2">Modern City</h3>
            <p className="text-sm text-gray-600">Blend of tradition and technology</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-pink-900 mb-2">Tourist Hub</h3>
            <p className="text-sm text-gray-600">Major tourist destination in India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = React.useState<number>(0);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: { name: string; path: string; subItems?: { name: string; path: string }[] }[] = [
    { name: 'Home', path: '/' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Publishing Partners', path: '/publishing-partners' },
    { name: 'Publication Ethics', path: '/publication-ethics' },
    { name: 'Keynote Speakers', path: '/keynote-speakers' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    {
      name: 'Committee',
      path: '/organization/patrons',
      subItems: [
        { name: 'Patron', path: '/organization/patrons' },
        { name: 'General Chair', path: '/organization/general-chair' },
        { name: 'Convenor', path: '/organization/convenor' },
        { name: 'Advisory Committee', path: '/organization/advisory' },
        { name: 'Organizing Secretary', path: '/organization/organizing-secretary' },
        { name: 'Organizing Committee', path: '/organization/organizing' },
        { name: 'Technical Committee', path: '/organization/technical' },
        { name: 'Publication and Media Committee', path: '/organization/publication-media' },
      ],
    },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCommitteeActive = location.pathname.startsWith('/organization');

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-[#1a2a5e] py-2 px-4 text-white text-center">
        <p className="text-base md:text-lg font-semibold drop-shadow-md">
          Conference Dates: March 25-27, 2025 | Submission Deadline: January 15, 2025
        </p>
      </div>
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="/images/pcelogo.jpg"
              alt="Poornima College of Engineering Logo"
              className="h-16 w-auto object-contain"
              onError={() => console.error('Failed to load PCE logo')}
            />
            <div className="hidden md:block h-12 w-px bg-gray-300" />
            <img
              src="/images/naaclogo.jpg"
              alt="NAAC Logo"
              className="h-14 w-auto"
              onError={() => console.error('Failed to load NAAC logo')}
            />
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h1 className="text-xl font-bold text-[#1a2a5e]">International Conference 2025</h1>
            <p className="text-sm text-gray-600">Advancing Innovations in Engineering & Technology</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#1a2a5e] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.subItems && setIsCommitteeDropdownOpen(true)}
                  onMouseLeave={() => item.subItems && setIsCommitteeDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      scrollToTop();
                      if (item.subItems) setIsCommitteeDropdownOpen(true);
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${
                      (item.subItems && isCommitteeActive) || location.pathname === item.path
                        ? 'bg-[#2b3d7b]'
                        : 'hover:bg-[#2b3d7b]'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && isCommitteeDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-60 bg-white text-gray-800 rounded-md shadow-lg z-10">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            scrollToTop();
                            setIsCommitteeDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 text-sm transition duration-200 ${
                            location.pathname === subItem.path
                              ? 'bg-[#1a2a5e] text-white'
                              : 'hover:bg-[#1a2a5e] hover:text-white'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#1a2a5e] px-2 pt-2 pb-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-white hover:bg-[#2b3d7b] rounded-md text-base font-medium transition duration-200"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-white hover:bg-[#2b3d7b] rounded-md text-sm transition duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// HomePage Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative text-white py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/background.mp4"
          onError={() => console.error('Failed to load background video')}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING
            <br />
            <span className="text-4xl md:text-6xl">ICRAE 2025</span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 drop-shadow-md">
            March 25-27, 2025 | Exploring Innovations for a Sustainable Future
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

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2a5e] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">ICRAE 2025</h3>
          <p className="text-sm">Organized by Poornima College of Engineering</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/registration" className="hover:underline">
                Registration
              </Link>
            </li>
            <li>
              <Link to="/call-for-papers" className="hover:underline">
                Call for Papers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            Email: info@conference2025.org
            <br />
            Phone: +91-123-456-7890
          </p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        <p>© 2025 INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025). All Rights Reserved.</p>
        <p className="mt-2 text-gray-400">
          Website Developed by{' '}
          <a
            href="https://www.linkedin.com/in/paras-kapoor-0a990315b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 hover:underline transition-colors duration-200"
          >
            Paras Kapoor
          </a>{' '}
          &{' '}
          <a
            href="https://www.linkedin.com/in/priyansh-manglani-70222424b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 hover:underline transition-colors duration-200"
          >
            Priyansh Manglani
          </a>
        </p>
      </div>
    </footer>
  );
};

// App Component
const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <main className="flex-grow pt-[180px]">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/call-for-papers" element={<CallForPapers />} />
                  <Route path="/registration" element={<ProgramRegistration />} />
                  <Route path="/publishing-partners" element={<PublishingPartners />} />
                  <Route path="/publication-ethics" element={<PublicationEthics />} />
                  <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
                  <Route path="/downloads" element={<Downloads />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/organization/*" element={<Organization />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<div className="text-center py-20">404 - Page Not Found</div>} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <Suspense fallback={<div>Loading Chatbot...</div>}>
            <Chatbot />
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;