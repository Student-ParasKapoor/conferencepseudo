import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import * as fuzzball from 'fuzzball';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hello! How can I assist you today? Ask me about ICRAE 2025!' },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const qaDatabase: { [key: string]: string } = {
    // Conference Basics
    'when is the conference': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'conference dates': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'when does the conference happen': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'dates of conference': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'conference schedule': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'when is icrae 2025': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'icrae 2025 dates': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'conference timing': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'when is the event': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'event dates': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for November 21-22, 2025.',
    'what is the submission deadline': 'The submission deadline for papers is August 30, 2025.',
    'deadline for submission': 'The submission deadline for papers is August 30, 2025.',
    'when do i submit papers': 'The submission deadline for papers is August 30, 2025.',
    'where is the conference held': 'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',
    'conference location': 'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',
    'where is it happening': 'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',

    // Registration Information
    'how do i register': 'You can register by clicking the "Register Now" button on the homepage or visiting the /registration page.',
    'how to register': 'You can register by clicking the "Register Now" button on the homepage or visiting the /registration page.',
    'registration process': 'You can register by clicking the "Register Now" button on the homepage or visiting the /registration page.',
    'registration fees': 'Registration fees vary by category (students, professionals, etc.). Please visit the /registration page for detailed pricing information.',
    'how much is registration': 'Registration fees vary by category. Please visit the /registration page for detailed pricing information.',
    'registration cost': 'Registration fees vary by category. Please visit the /registration page for detailed pricing information.',

    // Paper Submission
    'how to submit paper': 'Papers can be submitted through the conference submission portal. Please ensure you follow the submission guidelines and paper template available on the /call-for-papers page.',
    'paper submission process': 'Papers can be submitted through the conference submission portal. Please ensure you follow the submission guidelines and paper template available on the /call-for-papers page.',
    'submission guidelines': 'Detailed submission guidelines and paper templates are available on the /call-for-papers page.',
    'paper format': 'Please refer to the paper template and guidelines available on the /call-for-papers page for the correct format.',
    'who can submit papers': 'Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.',
    'who is eligible to submit': 'Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.',
    'can students submit papers': 'Yes, students, along with researchers and professionals in engineering and technology fields, are welcome to submit papers.',

    // Conference Details
    'what is the conference about': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    "what's the conference theme": 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    'conference purpose': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    'what are the tracks': 'The conference is divided into three parallel tracks. The best papers in each technical field will receive awards.',
    'conference tracks': 'The conference is divided into three parallel tracks. The best papers in each technical field will receive awards.',
    'what are the key dates': 'Key dates are: Submission Deadline - August 30, 2025, and Conference Dates - November 21-22, 2025.',
    'important dates': 'Key dates are: Submission Deadline - August 30, 2025, and Conference Dates - November 21-22, 2025.',
    'key conference dates': 'Key dates are: Submission Deadline - August 30, 2025, and Conference Dates - November 21-22, 2025.',

    // Publication Information
    'where will papers be published': 'All accepted, registered, and presented papers will be published in SCOPUS Indexed proceedings and journals listed under Publication Partners.',
    'publication opportunities': 'All accepted, registered, and presented papers will be published in SCOPUS Indexed proceedings and journals listed under Publication Partners.',
    'journal indexing': 'Special issues of journals indexed in SCOPUS/Web of Science/ESCI/SCIE will be available for publication.',
    'publication partners': 'Please visit the /publishing-partners page for a list of our publication partners and their indexing details.',

    // Committee Information
    'who are the keynote speakers': 'The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!',
    'keynote speakers': 'The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!',
    'who is the convener': 'Dr. Rekha Nair, Professor & Dean at Poornima College of Engineering, is the Conference Convener.',
    'who is the co convener': 'Dr. Ratnesh Sharma, Professor at Poornima College of Engineering, is the Conference Co-Convener.',
    'advisory committee': 'The Advisory Committee consists of distinguished professors and industry experts. Visit the /organization/advisory page for the complete list.',
    'technical committee': 'The Technical Committee includes faculty members from various departments. Visit the /organization/technical page for details.',
    'organizing committee': 'The Organizing Committee includes faculty and staff members. Visit the /organization/organizing page for the complete list.',

    // Venue Information
    'what is pce': 'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'tell me about pce': 'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'what does pce stand for': 'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'tell me about jaipur': 'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',
    "what's jaipur like": 'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',
    'info about jaipur': 'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',

    // Contact Information
    'how to contact': 'You can contact us through the contact form on the /contact page or email us at icrae04@poornima.org.',
    'contact information': 'You can reach us at icrae04@poornima.org or through the contact form on the /contact page.',
    'email address': 'The conference email address is icrae04@poornima.org.',
    'phone number': 'For phone inquiries, please check the contact information on the /contact page.',

    // Conference Mode
    'is it online or offline': 'ICRAE 2025 will be conducted in Hybrid mode (both Online & Offline).',
    'conference mode': 'ICRAE 2025 will be conducted in Hybrid mode (both Online & Offline).',
    'virtual attendance': 'Yes, virtual attendance is possible as the conference will be conducted in Hybrid mode.',
    'can i attend online': 'Yes, you can attend online as the conference will be conducted in Hybrid mode.',

    // Additional Information
    'what are the benefits': 'Benefits include publication in SCOPUS indexed journals, networking opportunities, and exposure to latest research in engineering.',
    'why should i attend': 'Benefits include publication in SCOPUS indexed journals, networking opportunities, and exposure to latest research in engineering.',
    'conference benefits': 'Benefits include publication in SCOPUS indexed journals, networking opportunities, and exposure to latest research in engineering.',
    'what will i gain': 'Benefits include publication in SCOPUS indexed journals, networking opportunities, and exposure to latest research in engineering.',
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.toLowerCase().trim();
      setMessages([...messages, { sender: 'user', text: input }]);
      setIsLoading(true);

      // Fuzzy matching
      const questions = Object.keys(qaDatabase);
      let bestMatch = { question: '', score: 0 };

      questions.forEach((question) => {
        const score = fuzzball.ratio(userMessage, question);
        if (score > bestMatch.score) {
          bestMatch = { question, score };
        }
      });

      // Lower the threshold to 50 for better matching
      const response =
        bestMatch.score > 50
          ? qaDatabase[bestMatch.question]
          : "I'm not sure about that. Try asking about the conference dates, submission deadline, or registration process!";

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
        setIsLoading(false);
      }, 500);
      setInput('');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#1a2a5e] text-white p-3 rounded-full shadow-lg hover:bg-[#2b3d7b] transition duration-300 z-50"
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="bg-[#1a2a5e] text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close chatbot">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-[#1a2a5e] text-white ml-auto' : 'bg-gray-300 text-gray-800'
                } max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="mb-2 p-2 rounded-lg bg-gray-300 text-gray-800 max-w-[80%] flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-gray-800" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Typing...
              </div>
            )}
          </div>
          <div className="p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a5e]"
              placeholder="Ask me anything..."
              aria-label="Chatbot input"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className={`mt-2 w-full p-2 rounded-lg text-white transition duration-300 ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1a2a5e] hover:bg-[#2b3d7b]'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;