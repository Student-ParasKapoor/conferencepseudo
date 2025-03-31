import { FileText, ClipboardList, Info, BookCheck, Building, Globe, Award, Users, History as HistoryIcon } from 'lucide-react';

export const tracks = {
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

export const registrationFees = [
  {
    category: "Category A",
    description: "For SCOPUS Indexed Journals & ESCI Journal (JOPC) (WoS)",
    early: {
      indian: "10000",
      foreign: "200"
    },
    late: {
      indian: "11000",
      foreign: "250"
    }
  },
  {
    category: "Category B",
    description: "For Book series and Special issues in journals",
    early: {
      indian: "8000",
      foreign: "150"
    },
    late: {
      indian: "9000",
      foreign: "180"
    }
  }
];

export const bankDetails = {
  accountName: "POORNIMA COLLEGE PART TWO",
  accountNo: "50200067803774",
  bankName: "HDFC BANK LTD",
  branch: "F129, RIICO INDUSTRIAL AREA, SITAPURA, SANGANER, JAIPUR 302022, RAJASTHAN, INDIA",
  ifsc: "HDFC0003873",
  swift: "HDFCINBBXXX",
  micr: "302240028",
  bankCode: "3873",
  accountType: "CURRENT ACCOUNT"
};

export const documents = [
  {
    category: "Templates",
    items: [
      { name: "Paper Template", format: "DOCX", size: "245 KB" },
      { name: "Presentation Template", format: "PPT", size: "1.2 MB" },
      { name: "Poster Template", format: "PDF", size: "850 KB" }
    ]
  },
  {
    category: "Guidelines",
    items: [
      { name: "Author Guidelines", format: "PDF", size: "420 KB" },
      { name: "Formatting Instructions", format: "PDF", size: "380 KB" },
      { name: "Publication Manual", format: "PDF", size: "1.5 MB" }
    ]
  },
  {
    category: "Forms",
    items: [
      { name: "Registration Form", format: "PDF", size: "125 KB" },
      { name: "Copyright Form", format: "PDF", size: "180 KB" },
      { name: "Travel Grant Application", format: "DOCX", size: "290 KB" }
    ]
  }
];

export const conferences = [
  { year: 2024, url: "https://www.poornima.org/technovation-2024/" },
  { year: 2023, url: "https://www.poornima.org/technovation-2023/" },
  { year: 2022, url: "https://www.poornima.org/technovation-2022/" },
  { year: 2021, url: "https://www.poornima.org/technovation-2021/" },
  { year: 2020, url: "https://www.poornima.org/technovation-2020/" },
];

export const milestones = [
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

export const statistics = [
  { icon: Globe, label: "Countries", value: "25+" },
  { icon: Users, label: "Total Participants", value: "1000+" },
  { icon: Award, label: "Published Papers", value: "580+" }
];

export const authorInstructions = [
  "The manuscript should be written in English with a maximum paper length of eight pages including tables / diagrams / figures / illustrations/ equations and etc.",
  "After submission of paper in CMT, you will receive an ID that will have to be used for all further communications.",
  "All the papers are eligible for the contests. They can participate in the contests. Hence, authors are required to register immediately by paying the registration fees. Without payment of registration fees, submission will not be processed.",
  "Accepted papers for conference and are not participating in the contests will be notified if the paper is accepted for publication. They will have to submit publication charges once it is accepted. Papers for contests are will be notified for further in associated journals.",
  "All the papers will be processed further. Initial screening will be done by the Technical Program Committee of TECHNOVATION 2024, which includes the scope the conference, plagiarism, organization of the manuscripts, quality of tables / diagrams / figures / illustrations/ equations and etc. Authors will be required to submit camera-ready paper, copy right form before presentation",
  "Paper accepted for journals shall be required to pay additional publication charges as well as will be required to submit the final manuscript as per journal requirements.",
  "Schedule of presentation of papers in conference and the contests shall be communicated in advance.",
  "All the papers will be published in the TECHNOVATION- 2024 proceedings except those accepted for journal publication.",
  "Certificate of Participation will be issued to all the participants who register and present the paper."
]; 