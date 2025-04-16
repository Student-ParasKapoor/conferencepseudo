import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Building, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 141 2345678",
        "+91 141 2345679"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "icrae2025@poornima.org",
        "conference@poornima.org"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ]
    },
    {
      icon: Building,
      title: "Address",
      details: [
        "Poornima College of Engineering",
        "Plot No. IS-2027-2031, Ramchandrapura",
        "P.O. Vidhani Vatika, Sitapura Extension",
        "Jaipur - 302022, Rajasthan, India"
      ]
    }
  ];

  const faqs = [
    {
      question: "How can I submit my paper?",
      answer: "Papers can be submitted through the conference submission portal. Please ensure you follow the submission guidelines and paper template."
    },
    {
      question: "What are the important dates?",
      answer: "Paper submission deadline is October 15, 2025. Acceptance notification will be sent by November 1, 2025. Final registration deadline is November 15, 2025."
    },
    {
      question: "Is virtual presentation allowed?",
      answer: "Yes, the conference will be conducted in hybrid mode. Authors can choose to present their papers either physically or virtually."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries about the conference
          </p>
        </div>

        {/* Conference Convener and Co-Convener Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Convener */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slideInLeft">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Conference Convener</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src="/public/images/comittee/Rekha.jpg"
                  alt="Dr. Rekha Nair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-gray-900">Dr. Rekha Nair</h4>
                <p className="text-blue-600 mb-2">Professor & Dean, Poornima College of Engineering</p>
                <p className="text-gray-600 mb-2">Convener, ICRAE 2025</p>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center justify-center md:justify-start">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <a href="mailto:rekhanairr@poornima.org" className="hover:text-blue-600">
                      rekhanairr@poornima.org
                    </a>
                  </p>
                  <p className="text-gray-600 flex items-center justify-center md:justify-start">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    <a href="tel:+919928015794" className="hover:text-blue-600">
                      +91-9928015794
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Convener */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slideInRight">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Conference Co-Convener</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src="/public/images/comittee/Ratnesh.jpeg"
                  alt="Dr. Co-Convener"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-gray-900">Dr. Ratnesh Sharma</h4>
                <p className="text-blue-600 mb-2">Professor, Poornima College of Engineering</p>
                <p className="text-gray-600 mb-2">Co-Convener, ICRAE 2025</p>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center justify-center md:justify-start">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <a href="mailto:ratnesh.sharma@poornima.org" className="hover:text-blue-600">
                      ratnesh.sharma@poornima.org
                    </a>
                  </p>
                  <p className="text-gray-600 flex items-center justify-center md:justify-start">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    <a href="tel:+919887371157" className="hover:text-blue-600">
                      +91-9887371157
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover-scale animate-slideInLeft">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex items-start hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                    {item.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className="text-gray-600 animate-fadeIn"
                        style={{ animationDelay: `${index * 100 + detailIndex * 50}ms` }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover-scale animate-slideInRight">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover-lift"
                  required
                />
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover-lift"
                  required
                />
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover-lift"
                  required
                />
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover-lift"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 hover-scale hover-glow animate-fadeIn"
                style={{ animationDelay: '500ms' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 animate-slideIn">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 pb-6 last:border-0 hover-scale animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.201201202344!2d75.8055!3d26.8475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b5c0b5b5c0%3A0x5b5c0b5c0b5c0b5c!2sPoornima%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Poornima College of Engineering Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;