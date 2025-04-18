import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <Link to="/registration" onClick={scrollToTop} className="hover:underline">
                Registration
              </Link>
            </li>
            <li>
              <Link to="/call-for-papers" onClick={scrollToTop} className="hover:underline">
                Call for Papers
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop} className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            Email: icrae04@poornima.org
            <br />
            Phone: +91-992-801-5794
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

export default Footer;