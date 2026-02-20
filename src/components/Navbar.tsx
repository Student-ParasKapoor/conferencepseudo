import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
          Conference Dates: February 20-21, 2026 | Submission Deadline: December 31, 2025
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
            <div className="hidden md:block h-12 w-px bg-gray-300" />
            <img
              src="/images/DST image.jpeg"
              alt="DST image"
              className="h-14 w-auto object-contain"
              onError={() => console.error('Failed to load DST Rajasthan logo')}
            />
          </div>
          <img
            src="/images/Conference Logo.jpeg"
            alt="Conference Logo"
            className="h-20 w-20 object-contain mt-4 md:mt-0"
            onError={() => console.error('Failed to load conference logo')}
          />
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
          <div className="md:hidden bg-[#1a2a5e] px-2 pt-2 pb-4 overflow-y-auto max-h-[calc(100vh-140px)] hide-scrollbar">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
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
                        onClick={() => {
                          scrollToTop();
                          setIsOpen(false);
                        }}
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

export default Navbar;