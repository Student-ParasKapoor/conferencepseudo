import React, { useState } from 'react';
import { Users, Award, Building } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Patrons Component
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {patrons.map((patron, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden transition-all duration-300 ease-in-out rounded-full hover:rounded-none">
              <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 ease-in-out rounded-full hover:rounded-none"></div>
              <img
                src={patron.photo}
                alt={patron.name}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">{patron.name}</h4>
            <p className="text-blue-600 font-medium mb-1">{patron.position}</p>
            <p className="text-gray-600">{patron.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// General Chair Component
const GeneralChair: React.FC = () => {
  const generalChairs = [
    {
      name: "Dr. Pankaj Dhemla",
      title: "Vice Principal, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Pankaj.jpeg",
    },
    {
      name: "Dr. Gautam Singh",
      title: "Registrar, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Gautam.jpeg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Building className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">General Chair</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {generalChairs.map((chair, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden transition-all duration-300 rounded-full hover:rounded-none">
              <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 rounded-full hover:rounded-none"></div>
              <img
                src={chair.photo}
                alt={chair.name}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">{chair.name}</h4>
            <p className="text-gray-600">{chair.title}</p>
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
      photo: "/public/images/comittee/Gautam.jpeg",
    },
  ];

  const conveners = [
    {
      name: "Dr. Rekha Nair",
      position: "Conference Chair & Convener",
      title: "Professor & Dean, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Rekha.jpg",
    },
    {
      name: "Dr. Ratnesh Sharma",
      position: "Co-Convener",
      title: "Associate Professor, Department of Mechanical Engineering, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Ratnesh.jpeg",
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

// Advisory Committee Component
const AdvisoryCommittee: React.FC = () => {
  const advisors = [
    {
      name: "Mr. Raj Kapoor",
      designation: "Founder - India Blockchain Alliance, Chairman - India AI Alliance, Chairman - Global Alliance for Ethical AI",
      photo: "/public/images/Advisory Comittee/raj.jpg"
    },
    {
      name: "Dr. Shashi Bhushan",
      designation: "Computer & Information Science Department, Universiti Teknologi Petronas, Malaysia",
      photo: "/public/images/Advisory Comittee/Shashi.jpg"
    },
    {
      name: "Prof. Eswarahalli Dwarakadasa",
      designation: "CEO and MD at Karnataka Hybrid Micro Devices Limited, Bengluru, Karnataka",
      photo: "/public/images/Advisory Comittee/Eswarahalli.jpeg"
    },
    {
      name: "Prof. G R SINHA",
      designation: "Provost (Vice Chancellor), GSFC University Vadodara, Gujarat, India",
      photo: "/public/images/Advisory Comittee/GR.jpeg"
    },
    {
      name: "Professor Ir. Dr. U. Johnson Alengaram",
      designation: "Professor & Director, University of Malaya, Kuala Lumpur, Malaysia",
      photo: "/public/images/Advisory Comittee/Jhonson.jpg"
    },
    {
      name: "Dr. Shubhra Banerji",
      designation: "Academic Head, Testing Services Leader, Bengaluru, Karnataka, India",
      photo: "/public/images/Advisory Comittee/Shubhra.jpeg"
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "CIS Department, Universiti Teknologi Petronas, Malaysia",
      photo: "/public/images/Advisory Comittee/Manoj.png"
    },
    {
      name: "Dr. Jyoti Thanvi",
      designation: "FHEA, Dubai, United Arab Emirates",
      photo: "/public/images/Advisory Comittee/Jyoti.jpeg"
    },
    {
      name: "Dr. Surya Parkash Gupta",
      designation: "Professor, Division Head and Team Leader for CBRN, Cyber, GeoHydroMeteorological Disasters, EOC, Climate, Resilience, Public Health Emergency and Disaster Management and Project Director at NIDM, MHA, GoI",
      photo: "/public/images/Advisory Comittee/Surya.jpeg"
    },
    {
      name: "Prof. Swarup K Mahapatra",
      designation: "School of Mechanical Sciences, Indian Institute of Technology Bhubaneswar, Argul, Khordha, Odisha, India",
      photo: "/public/images/Advisory Comittee/Swarup.jpeg"
    },
    
    {
      name: "Dr. C. S. NAIR",
      designation: "Director, IIM-C, IIT-D, New delhi",
      photo: "/public/images/Advisory Comittee/CS Nair.jpeg"
    },
    {
      name: "Prof. D. Nagesh Kumar",
      designation: "Professor, Dept of Civil Engg, Indian Institute of Science, Begaluru, Karnatka",
      photo: "/public/images/Advisory Comittee/Nagesh.jpeg"
    },
    {
      name: "Prof. V.S. Raja",
      designation: "Emeritus Fellow, IIT Mumbai",
      photo: "/public/images/Advisory Comittee/VS Raja.jpeg"
    },
    {
      name: "Prof. S. C. KAUSHIK",
      designation: "FORMER EMERITUS PROFESSOR, CES/DESE, IIT, DELHI",
      photo: "/public/images/Advisory Comittee/SC.jpeg"
    },
    {
      name: "Prof. Randip Kumar Das",
      designation: "IIT(ISM) Dhanbad",
      photo: "/public/images/Advisory Comittee/Randip.jpg"
    },
    {
      name: "Dr. Tarumay Ghoshal",
      designation: "DIT University, Environment and Climate Scientist, Enthusiast in SDG",
      photo: "/public/images/Advisory Comittee/Tarumay.jpeg"
    },
    {
      name: "Dr. Nandyala Darga Kumar",
      designation: "Civil Engineering, JNTUH University College of Engineering, Hyderabad, Telangana",
      photo: "/public/images/Advisory Comittee/Nandyala.jpeg"
    },
    {
      name: "Prof. Rajveer Yaduvanshi",
      designation: "Director EQDC(S), Professor at NSUT Delhi",
      photo: "/public/images/Advisory Comittee/Rajveer.jpeg"
    },
    
    {
      name: "Prof. Amit Rai Dixit",
      designation: "Department of Mechanical Engineering, IIT",
      photo: "/public/images/Advisory Comittee/Amit.jpg"
    },
    {
      name: "Dr. Akash Saxena",
      designation: "Professor, Mahendragarh, Haryana, India",
      photo: "/public/images/Advisory Comittee/Akash.jpeg"
    },
    
    {
      name: "Dr. Santosh Rane",
      designation: "Chairman IIIE Mumbai Chapter, Vice Chairman SAEINDIA WS, Sardar Patel College of Engineering, Mumbai",
      photo: "/public/images/Advisory Comittee/Santosh.jpeg"
    },
    {
      name: "Dr. R. S. Dubey (Dr. Raghvendra S. Dubey)",
      designation: "Professor (CS&AI) & Associate Dean (R&D), Warangal, Telangana, India",
      photo: "/public/images/Advisory Comittee/RS.jpeg"
    },
    {
      name: "Prof. (Dr.) Swapnil Rai",
      designation: "Professor (EVS), Associate Dean-Research, Gwalior, Madhya Pradesh, India",
      photo: "/public/images/Advisory Comittee/Swapnil.jpeg"
    },
    {
      name: "Dr. Vinoth Kumar Kalimuthu",
      designation: "Professor & Head / AI&ML, CEO- SSMIET Foundation for Incubation and President IIC, SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY, Tiruchirappalli, Tamil Nadu, India",
      photo: "/public/images/Advisory Comittee/Vinoth.jpeg"
    },
    {
      name: "Prof. Prashant Ambad",
      designation: "Director IQAC, Professor and Director SMMS, JSPM University Pune with expertise in Industrial Engineering, Pune",
      photo: "/public/images/Advisory Comittee/Prashant.jpeg"
    },
    {
      name: "Dr. Vikash Kumar Saini",
      designation: "Khalifa University, UAE, Abu Dhabi Emirate, United Arab Emirates",
      photo: "/public/images/Advisory Comittee/Vikash.jpg"
    },
    {
      name: "Prof.(Dr.) Vedvyas Jayprakashnarayan Dwivedi",
      designation: "Executive Vice-President, Indus University Ahmedabad, Former Vice-Chancellor Gujrat",
      photo: "/public/images/Advisory Comittee/Vedvyas.jpeg"
    },
    {
      name: "Mr. Shailendra Kasera",
      designation: "Director at Incube | Net Zero| Green Building | GreenCo |GreenPro, Jaipur, Rajasthan, India",
      photo: "/public/images/Advisory Comittee/Shailendra.jpeg"
    },
    {
      name: "Dr. Pankaj Sharma",
      designation: "RTU, Kota",
      photo: "/public/images/Advisory Comittee/Pankaj.jpeg"
    },
    {
      name: "Dr. Damodar Reddy",
      designation: "Head, Institute of Aeronautical Engineering Hyderabad, Telangana",
      photo: "/public/images/Advisory Comittee/Damodar.jpg"
    },
    {
      name: "Dr. Prashant R. Nair",
      designation: "Head & Vice-Chairman - Internal Quality Assurance Cell (IQAC) at Amrita Vishwa Vidyapeetham Coimbatore, Tamil Nadu",
      photo: "/public/images/Advisory Comittee/Prashant.jpg"
    },
    {
      name: "Dr. Balachandra Pattanaik",
      designation: "Professor of Electrical and Computer Engineering, Wollega University",
      photo: "/public/images/Advisory Comittee/Balachandra.jpeg"
    },
    {
      name: "Dr. Mendus Jacob",
      designation: "Director MCA, Marian College Kuttikkanam, CEO, ipsr solutions ltd.",
      photo: "/public/images/Advisory Comittee/Mendus.jpeg"
    },
    {
      name: "Mr. Sankara Reddy Thamma",
      designation: "AI/ML Data Engg | Gen-AI | Cloud Migration - Strategy & Analytics @ Deloitte",
      // photo: "/public/images/Advisory Comittee/Sankara.jpeg"
    },
    {
      name: "Mr. Abrar Ahmed Syed",
      designation: "Data and Analytics, Gainwell Technologies LLC, Dallas, USA"
    },
    {
      name: "Md. Mortuza Ahmmed",
      designation: "Associate Professor, Department of Mathematics, American International University, Bangladesh"
    },
    {
      name: "Dr. Deepak Gupta",
      designation: "Graphic Era Hill University, Dehradun"
    },
    {
      name: "Dr. Neha Tyagi",
      designation: "Amity University, Noida"
    },
    {
      name: "Dr. Sudesh Kumar",
      designation: "NCERT, NEW DELHI"
    },
    {
      name: "Prof. R. D. Kaushik",
      designation: "Professor & Head, Department of Chemistry, Gurukul Kangri University, Haridwar (Uttarakhand), India"
    },
    {
      name: "Dr. Alka Sharma",
      designation: "Retd. Professor & Vice Principal, University Maharani's College, Jaipur"
    },
    {
      name: "Dr. Pradip Jawandhiya (Maheshwari) SMIEEE, PhD",
      designation: "Principal P R Pote Patil College of Engineering and Management, Amravati"
    },
    {
      name: "Prof(Dr.) Abhijit Nayak",
      designation: "DEAN(Administration) at Bhagwan Parshuram Institute Of Technology, IP university"
    },
    {
      name: "Dr. Suman Vij",
      designation: "Professor & Director-IQAC at Shree Guru Gobind Singh Tricentenary University (SGT University) Gurgaon, India"
    },
    {
      name: "Dr. DEVABALAN POUNRAJ",
      designation: "Professor of Computer Science and Engineering at BVC Engineering College (Autonomous), Andhrapradesh, Madurai, Tamil Nadu"
    },
    {
      name: "Dr. Amit Kumar Sharma",
      designation: "Professor and Placement Coordinator, GALGOTIAS EDUCATIONAL INSTITUTIONS, GREATER NOIDA"
    },
    {
      name: "Dr. Hemant Kasturiwale(Jain)",
      designation: "Professor & Head of Department of Electronics and Computer Science, Thakur college of Engineering and Technology, Mumbai"
    },
    {
      name: "Dr. Sumegh Tharewal",
      designation: "Dehradun, Uttarakhand, India"
    },
    {
      name: "Dr. Rajesh Kumar Dhanaraj",
      designation: "Symbiosis International (Deemed University), Pune, India"
    },
    {
      name: "Dr. C Kishor Kumar Reddy",
      designation: "Stanley College of Engineering and Technology for Women, KL University, Hyderabad, Telangana, India"
    },
    {
      name: "Dr. Bharathiraja Nagu",
      designation: "Chennai, Tamil Nadu, India"
    },
    {
      name: "Prof(Dr.) Ankur Saxena",
      designation: "Professor & Director_Guru Ram Das Institute of Management & Technology, Dehradun, Uttarakhand, India"
    },
    {
      name: "Dr. Vipin Kumar Jain",
      designation: "Dean, Faculty of Humanities, Director, Swarnjayanti University College, Bhiwani (Haryana) India"
    },
    {
      name: "Dr. Rajini Kanth T V",
      designation: "Professor in CSE & Dean R&D, Hyderabad, Telangana"
    },
    {
      name: "Prof.(Dr.) Deepshikha Bhargava",
      designation: "Professor & Domain Head, Engineering and Technology, Banasthali Vidyapith, Gautam Buddha Nagar, Uttar Pradesh, India"
    },
    {
      name: "Dr. Sugumaran Subramanian",
      designation: "Professor at Vishnu Institute of Technology, Vishnupur, Bhimavaram, Andhra Pradesh, India"
    },
    {
      name: "Prof.(Dr.) B.K. Verma",
      designation: "Professor and Head of the Department CSE- AI/Data Science, Pilani, Rajasthan, India"
    },
    {
      name: "Dr. Ram Prakash Bharti",
      designation: "Professor at IIT Roorkee Uttarakhand, India"
    },
    {
      name: "Prof.(Dr.) Sandeep Saxena",
      designation: "Professor & Head, JIMS Greater Noida, Senior Member IEEE, Noida, UP"
    },
    {
      name: "Dr. Ray Singh Meena",
      designation: "NIT Hamirpur"
    },
    {
      name: "Dr. Neha Patni",
      designation: "Nirma University"
    },
    {
      name: "Dr. Basant Sikarwar",
      designation: "Professor & Head, Mechanical Engineering, Amity University, Gautam Budh Nagar"
    },
    {
      name: "Dr. Prashant Malik",
      designation: "IIT Bombay, Hybrid Energy Systems, Mumbai"
    },
    {
      name: "Dr. Abhishek Majumder",
      designation: "Tripura University"
    },
    {
      name: "Dr. Jinesh Kumar Jain",
      designation: "Malaviya National Institute of Technology Jaipur"
    },
    {
      name: "Dr. Padipta Chakroborty",
      designation: "IIT, Patna"
    },
    {
      name: "Prof. Meghanshu Vashisht",
      designation: "Department of Mechanical Engineering, IIT (BHU)"
    },
    {
      name: "Prof. Dr. Shaikh Raju",
      designation: "Department of Physics, Nanotechnology, Research Guide, S.G.B. College, Ta. Purna, Dist. Parbhani"
    },
    {
      name: "Mr. Rajesh Kumar Dhanaraj",
      designation: "Symbiosis International (Deemed University), Pune, India"
    },
    {
      name: "Dr. Anuj Kumar Sharma",
      designation: "Dean Academics, Centre for Advanced Studies, Associate Dean Innovation, Dr. A.P.J. Abdul Kalam University, IIT Dhanbad"
    },
    {
      name: "Dr. Shwetambara Verma",
      designation: "Professor and Director Student Welfare, The Assam Kaziranga University, Jorhat, Assam, India"
    },
    {
      name: "Dr. Ravi Palanimuthu",
      designation: "Professor and Head at MS University, DoMS, Tirunelveli, Tamil Nadu"
    },
    {
      name: "Dr. Narayan Krishnaswamy",
      designation: "Founder & Managing Partner at OppenFynn Innovation Labs, Bengaluru, Karnataka, India"
    },
    {
      name: "Dr. Sudhansu Ranjan Das",
      designation: "Department of Production Engineering, Veer Surendra Sai University of Technology, Burla, Sambalpur, Odisha"
    },
    {
      name: "Dr. Shiv Ranjan Kumar",
      designation: "Department of Mechanical Engineering, Bhagalpur College of Engineering, Bhagalpur"
    },
    {
      name: "Dr. Sushant Singh",
      designation: "Professor, Sharda School of Basic Sciences & Research"
    },
    {
      name: "Dr. Gaurav Kumar Dhuria",
      designation: "DAVIET, Jalandhar, Punjab, India"
    },
    {
      name: "Dr. Gulshan Sachdeva",
      designation: "National Institute of Technology Kurukshetra"
    },
    {
      name: "Dr. Shailesh Kumar Patidar",
      designation: "Department of Environmental Science, School of Earth Sciences, Central University of Rajasthan"
    },
    {
      name: "Dr. Praveen Agarwal",
      designation: "Vice Principal, Anand International College of Engineering"
    },
    {
      name: "Dr. Arun Sharma",
      designation: "Carrier Point University, Kota"
    },
    {
      name: "Dr. Ruchika Mehta",
      designation: "Department of Mathematics & Statistics, Manipal University, Jaipur"
    },
    {
      name: "Dr. Shalini Puri",
      designation: "Department of Information Technology, Manipal University, Jaipur"
    },
    {
      name: "Dr. Jay Prakash Singh",
      designation: "Manipal University, Jaipur"
    },
    {
      name: "Dr. Pooja Gupta",
      designation: "SKIT, Jaipur"
    },
    {
      name: "Dr. Kamal Kishor Khatri",
      designation: "LNMIIT Jaipur"
    },
    {
      name: "Dr. J. Muralitharan Jothimani",
      designation: "Geology, Remote Sensing & GIS Expert, Tamil Nadu, India"
    },
    {
      name: "Dr. Ajay Kumar Sinha",
      designation: "Professor, Department of Civil Engineering, NIT Patna"
    },
    {
      name: "Dr. Yash Mittal",
      designation: "MNIT, Jaipur"
    },
    {
      name: "Prof. (Dr.) V. K. Patel",
      designation: "Govt. Engineering College Bhuj"
    },
    {
      name: "Prof. Gunjan Soni",
      designation: "MNIT Jaipur, India"
    },
    {
      name: "Prof. O. P. Yadav",
      designation: "NCAT, USA"
    },
    {
      name: "Prof. Mangey Ram",
      designation: "Graphic Era, Deemed to be University, Dehradun, India"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Advisory Committee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              {advisor.photo && (
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden transition-all duration-300 rounded-full hover:rounded-none">
                  <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 rounded-full hover:rounded-none"></div>
                  <img
                    src={advisor.photo}
                    alt={advisor.name}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{advisor.name}</h3>
              <p className="text-gray-600 text-sm">{advisor.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Technical Committee Component
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

  // const publicationCommittee = [
  //   "Dr. Kuldeep Sharma, Department of Humanities & Applied Sciences",
  //   "Dr. Shikha Agarwal, Department of Humanities & Applied Sciences",
  //   "Dr. Sarveen Sachdeva, Department of Humanities & Applied Sciences",
  //   "Dr. Shalini Shah, Department of Humanities & Applied Sciences",
  //   "Ms. Tripti Verma, Department of Humanities & Applied Sciences",
  // ];

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
      {/* <div className="bg-white rounded-lg shadow-lg p-8">
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
      </div> */}
    </div>
  );
};

// Organizing Committee Component
const OrganizingCommittee: React.FC = () => {
  const organizingCommittee = [
    { name: "Dr. Shilpi Jain", photo: "/public/images/comittee/Shilpi.jpg" },
    { name: "Dr. Manoj Sharma", photo: "/public/images/comittee/Manoj.jpg" },
    { name: "Dr. Siddharth Choudhary", photo: "/public/images/comittee/Siddharth.jpg" },
    { name: "Dr. Meena Tekriwal", photo: "/public/images/comittee/Meena.jpg" },
    { name: "Mr. Brahmdutt Bohra", photo: "/public/images/comittee/Brahmdutt.jpg" },
    { name: "Mr. Sumit Sharma", photo: "/public/images/comittee/Sumit.jpg" },
    { name: "Ms. Richa Choudhary", photo: "/public/images/comittee/Richa.jpg" },
    { name: "Mr. Javed Moazzam", photo: "/public/images/comittee/Javed.jpg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Organizing Committee</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {organizingCommittee.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden transition-all duration-300 rounded-full hover:rounded-none">
              <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 rounded-full hover:rounded-none"></div>
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
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
      photo: "/public/images/comittee/Peeyush.jpeg",
    },
    {
      name: "Dr. Ankit Tyagi",
      position: "Associate Professor, Department of Mechanical Engineering",
      photo: "/public/images/comittee/Ankit.jpeg",
    },
    {
      name: "Dr. Piyusha Somwanshi",
      position: "Professor, Department of Humanities & Applied Sciences",
      photo: "/public/images/comittee/Piyusha.jpeg",
    },
    {
      name: "Dr. Anurika Mehta",
      position: "Professor, Department of Humanities & Applied Sciences",
      photo: "/public/images/comittee/Anurika.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Organizing Secretary</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {secretaries.map((secretary, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden transition-all duration-300 rounded-full hover:rounded-none">
              <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 rounded-full hover:rounded-none"></div>
              <img
                src={secretary.photo}
                alt={secretary.name}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">{secretary.name}</h4>
            <p className="text-gray-600">{secretary.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// New Convenor Component
const Convenor: React.FC = () => {
  const conveners = [
    {
      name: "Dr. Rekha Nair",
      position: "Conference Chair & Convener",
      title: "Professor & Dean, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Rekha.jpg",
    },
    {
      name: "Dr. Ratnesh Sharma",
      position: "Co-Convener",
      title: "Associate Professor, Department of Mechanical Engineering, Poornima College of Engineering, Jaipur, India",
      photo: "/public/images/comittee/Ratnesh.jpeg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Building className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">Convener</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {conveners.map((convener, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden transition-all duration-300 rounded-full hover:rounded-none">
              <div className="absolute inset-0 border-4 border-blue-100 transition-all duration-300 rounded-full hover:rounded-none"></div>
              <img
                src={convener.photo}
                alt={convener.name}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-lg mb-2">{convener.name}</h4>
            <p className="text-blue-600 font-medium mb-1">{convener.position}</p>
            <p className="text-gray-600">{convener.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updated Organization Component with Tabs
const Organization: React.FC = () => {
  const location = useLocation();
  const activeTab = location.pathname.split('/')[2] || 'patrons';

  const tabs = [
    { name: 'Patron', path: '/organization/patrons' },
    { name: 'General Chair', path: '/organization/general-chair' },
    { name: 'Convenor', path: '/organization/convenor' },
    { name: 'Advisory Committee', path: '/organization/advisory' },
    { name: 'Organizing Secretary', path: '/organization/organizing-secretary' },
    { name: 'Organizing Committee', path: '/organization/organizing' },
    { name: 'Technical Committee', path: '/organization/technical' },
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
          <Route path="general-chair" element={<GeneralChair />} />
          <Route path="convenor" element={<Convenor />} />
          <Route path="advisory" element={<AdvisoryCommittee />} />
          <Route path="organizing-secretary" element={<OrganizingSecretary />} />
          <Route path="organizing" element={<OrganizingCommittee />} />
          <Route path="technical" element={<TechnicalCommittee />} />
          <Route path="publication-media" element={<PublicationAndMediaCommittee />} />
        </Routes>
      </div>
    </div>
  );
};

export default Organization;