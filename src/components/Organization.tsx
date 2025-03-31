import React, { useState } from 'react';
import { Users, Award, Building } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Patrons Component (unchanged)
const Patrons: React.FC = () => {
  const patrons = [
    {
      name: "Sh Shashikant Singhi",
      position: "Chief Patron",
      title: "Chairperson, Poornima Group, Jaipur, India",
      photo: "/public/images/comittee/Shashikant.jpg",
    },
    {
      name: "Dr. Mahesh Bundele",
      position: "Patron",
      title: "Principal and Director, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Mahesh-Bundele.jpg",
    },
    {
      name: "Ar. Rahul Singhi",
      position: "Patron",
      title: "Director, Poornima Group, Jaipur, India",
      photo: "/public/images/comittee/Rahul.jpeg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Award className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Patrons</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patrons.map((patron, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
            <img
              src={patron.photo}
              alt={patron.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-gray-900">{patron.name}</h4>
            <p className="text-gray-600">{patron.position}</p>
            <p className="text-gray-600">{patron.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// General Chair & Convener Component (unchanged)
const GeneralChairAndConvener: React.FC = () => {
  const generalChairs = [
    {
      name: "Dr. Pankaj Dhemla",
      title: "Vice Principal, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Pankaj.jpeg",
    },
    {
      name: "Dr. Gautam Singh",
      title: "Registrar, Poornima College of Engineering, Jaipur, India",
      photo: "/images/gautam-singh.jpg",
    },
  ];

  const conveners = [
    {
      name: "Dr. Rekha Nair",
      position: "Conference Chair & Convener",
      title: "Professor & Dean, Poornima College of Engineering, Jaipur, India",
      photo: "/images/rekha-nair.jpg",
    },
    {
      name: "Dr. Ratnesh Sharma",
      position: "Co-Convener",
      title: "Associate Professor, Department of Mechanical Engineering, Poornima College of Engineering, Jaipur, India",
      photo: "/images/ratnesh-sharma.jpg",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">General Chair</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {generalChairs.map((chair, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <img
                src={chair.photo}
                alt={chair.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-gray-900">{chair.name}</h4>
              <p className="text-gray-600">{chair.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">Convener</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {conveners.map((convener, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <img
                src={convener.photo}
                alt={convener.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-gray-900">{convener.name}</h4>
              <p className="text-gray-600">{convener.position}</p>
              <p className="text-gray-600">{convener.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Advisory Committee Component (unchanged)
const AdvisoryCommittee: React.FC = () => {
  const advisors = [
    "Dr. Priyanka Lodha, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Dr. Mayank Gupta, Department of Civil Engineering, Poornima College of Engineering, Jaipur, India",
    "Dr. Hemant Kaushik, Department of Electrical Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Bhagirath Singh Chauhan, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Upendra Varshney, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Gyanendra Kumar Hansh, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
    "Ms. Nikita Gautam, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Rajesh Kumar, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Ms. Monika Kumawat, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Amarjeet Bharti, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Ms. Anu Arora, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Kamlesh Kumar, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Bhavanesh Chandra Sharma, Department of Electrical Engineering, Poornima College of Engineering, Jaipur, India",
    "Ms. Riddhi Shrivastava, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Dinesh Sharma, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Mr. Dhananjay Kumar, Department of Mechanical Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Garvit Juneja, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Farhan Amin Khan, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
    "Mr. Anand Geet, Department of Computer Engineering, Poornima College of Engineering, Jaipur, India",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Award className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Advisory Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisors.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900">{member}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// Technical Committee Component (unchanged)
const TechnicalCommittee: React.FC = () => {
  const technicalCommittee = [
    "Dr. Priyanka Lodha, Department of Humanities & Applied Sciences",
    "Dr. Mayank Gupta, Department of Civil Engineering",
    "Dr. Hemant Kaushik, Department of Electrical Engineering",
    "Mr. Bhagirath Singh Chauhan, Department of Computer Engineering",
    "Mr. Upendra Varshney, Department of Computer Engineering",
    "Mr. Gyanendra Kumar Hansh, Department of Computer Engineering",
    "Ms. Nikita Gautam, Department of Humanities & Applied Sciences",
    "Mr. Rajesh Kumar, Department of Humanities & Applied Sciences",
    "Ms. Monika Kumawat, Department of Humanities & Applied Sciences",
    "Mr. Amarjeet Bharti, Department of Humanities & Applied Sciences",
    "Ms. Anu Arora, Department of Humanities & Applied Sciences",
    "Mr. Kamlesh Kumar, Department of Humanities & Applied Sciences",
    "Mr. Bhavanesh Chandra Sharma, Department of Electrical Engineering",
    "Ms. Riddhi Shrivastava, Department of Humanities & Applied Sciences",
    "Mr. Dinesh Sharma, Department of Humanities & Applied Sciences",
    "Mr. Dhananjay Kumar, Department of Mechanical Engineering",
    "Mr. Garvit Juneja, Department of Computer Engineering",
    "Mr. Farhan Amin Khan, Department of Computer Engineering",
    "Mr. Anand Geet, Department of Computer Engineering",
  ];

  const publicationCommittee = [
    "Dr. Kuldeep Sharma, Department of Humanities & Applied Sciences",
    "Dr. Shikha Agarwal, Department of Humanities & Applied Sciences",
    "Dr. Sarveen Sachdeva, Department of Humanities & Applied Sciences",
    "Dr. Shalini Shah, Department of Humanities & Applied Sciences",
    "Ms. Tripti Verma, Department of Humanities & Applied Sciences",
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">Technical Committee</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCommittee.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">{member}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold">Publication and Media Committee</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationCommittee.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">{member}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Organizing Committee Component (unchanged)
const OrganizingCommittee: React.FC = () => {
  const organizingCommittee = [
    { name: "Dr. Shilpi Jain", photo: "/shilpi-jain.jpg" },
    { name: "Dr. Manoj Sharma", photo: "/manoj-sharma.jpg" },
    { name: "Dr. Siddharth Choudhary", photo: "/siddharth-choudhary.jpg" },
    { name: "Dr. Meena Tekriwal", photo: "/meena-tekriwal.jpg" },
    { name: "Mr. Brahmadutt Bohra", photo: "/brahmadutt-bohra.jpg" },
    { name: "Mr. Sumit Sharma", photo: "/sumit-sharma.jpg" },
    { name: "Ms. Richa Choudhary", photo: "/richa-choudhary.jpg" },
    { name: "Mr. Javed Moazzam", photo: "/javed-moazzam.jpg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Organizing Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {organizingCommittee.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-gray-900">{member.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// Publication and Media Committee Component (unchanged)
const PublicationAndMediaCommittee: React.FC = () => {
  const publicationCommittee = [
    "Dr. Kuldeep Sharma, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Dr. Shikha Agarwal, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Dr. Sarveen Sachdeva, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Dr. Shalini Shah, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
    "Ms. Tripti Verma, Department of Humanities & Applied Sciences, Poornima College of Engineering, Jaipur, India",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Building className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Publication and Media Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicationCommittee.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900">{member}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// New Organizing Secretary Component
const OrganizingSecretary: React.FC = () => {
  const secretaries = [
    {
      name: "Dr. Peeyush Vats",
      position: "Professor, Department of Mechanical Engineering",
      photo: "/images/peeyush-vats.jpg",
    },
    {
      name: "Dr. Ankit Tyagi",
      position: "Associate Professor, Department of Mechanical Engineering",
      photo: "/images/ankit-tyagi.jpg",
    },
    {
      name: "Dr. Piyusha Somwanshi",
      position: "Professor, Department of Humanities & Applied Sciences",
      photo: "/images/piyusha-somwanshi.jpg",
    },
    {
      name: "Dr. Anurika Mehta",
      position: "Professor, Department of Humanities & Applied Sciences",
      photo: "/images/anurika-mehta.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Organizing Secretary</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {secretaries.map((secretary, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
            <img
              src={secretary.photo}
              alt={secretary.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-gray-900">{secretary.name}</h4>
            <p className="text-gray-600">{secretary.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updated Organization Component with Tabs
const Organization: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname.split('/')[2] || 'patrons');

  const tabs = [
    { name: 'Patrons', path: '/organization/patrons' },
    { name: 'General Chair & Convener', path: '/organization/general-chair' },
    { name: 'Advisory Committee', path: '/organization/advisory' },
    { name: 'Technical Committee', path: '/organization/technical' },
    { name: 'Organizing Secretary', path: '/organization/organizing-secretary' },
    { name: 'Organizing Committee', path: '/organization/organizing' },
    { name: 'Publication and Media Committee', path: '/organization/publication-media' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Conference Organization
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the team behind ICRAE 2025
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              onClick={() => setActiveTab(tab.path.split('/')[2])}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                activeTab === tab.path.split('/')[2]
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-blue-900 hover:bg-blue-100'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/" element={<Patrons />} />
          <Route path="patrons" element={<Patrons />} />
          <Route path="general-chair" element={<GeneralChairAndConvener />} />
          <Route path="advisory" element={<AdvisoryCommittee />} />
          <Route path="technical" element={<TechnicalCommittee />} />
          <Route path="organizing-secretary" element={<OrganizingSecretary />} />
          <Route path="organizing" element={<OrganizingCommittee />} />
          <Route path="publication-media" element={<PublicationAndMediaCommittee />} />
        </Routes>
      </div>
    </div>
  );
};

export default Organization;