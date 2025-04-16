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
    'when is the conference': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for March 25-27, 2025.',
    'conference dates?': 'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for March 25-27, 2025.',
    'when does the conference happen':
      'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) is scheduled for March 25-27, 2025.',
    'what is the submission deadline': 'The submission deadline for papers is January 15, 2025.',
    'deadline for submission?': 'The submission deadline for papers is January 15, 2025.',
    'when do i submit papers': 'The submission deadline for papers is January 15, 2025.',
    'where is the conference held':
      'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',
    'conference location?': 'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',
    'where is it happening': 'The conference will be held at Poornima College of Engineering in Jaipur, Rajasthan, India.',
    'how do i register':
      "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    'how to register?':
      "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    'registration process?':
      "You can register by clicking the 'Register Now' button on the homepage or visiting the /registration page.",
    'what is the conference about':
      'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    "what's the conference theme":
      'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    'conference purpose?':
      'The INTERNATIONAL CONFERENCE ON RECENT ADVANCES IN ENGINEERING (ICRAE 2025) focuses on recent advancements in engineering for a sustainable future.',
    'who can submit papers':
      'Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.',
    'who is eligible to submit':
      'Researchers, students, and professionals in engineering and technology fields are welcome to submit papers.',
    'can students submit papers':
      'Yes, students, along with researchers and professionals in engineering and technology fields, are welcome to submit papers.',
    'what is pce':
      'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'tell me about pce':
      'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'what does pce stand for':
      'Poornima College of Engineering (PCE) is a leading engineering college in Rajasthan, established in 2000, known for its NAAC A+ accreditation and strong research culture.',
    'tell me about jaipur':
      'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',
    "what's jaipur like":
      'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',
    'info about jaipur':
      'Jaipur, known as the Pink City, is the capital of Rajasthan, famous for its historic forts, palaces, and vibrant bazaars.',
    'what are the key dates': 'Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.',
    'important dates': 'Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.',
    'key conference dates': 'Key dates are: Submission Deadline - January 15, 2025, and Conference Dates - March 25-27, 2025.',
    'who are the keynote speakers':
      'The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!',
    'keynote speakers': 'The list of keynote speakers will be announced soon. Check the /keynote-speakers page for updates!',
    'how much is registration':
      'Registration fees vary by category (e.g., students, professionals). Visit the /registration page for detailed pricing.',
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

      // Use a threshold to determine if the match is good enough
      const response =
        bestMatch.score > 70
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