import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Building, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mapApiKey, setMapApiKey] = useState<string | null>(null);

  useEffect(() => {
    // Check EmailJS environment variables
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!userId || !serviceId || !templateId) {
      setError('EmailJS configuration is missing. Please check your .env file.');
    }

    // Check Google Maps API key
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!googleMapsApiKey) {
      setError('Google Maps API key is missing. Please check your .env file.');
    } else {
      setMapApiKey(googleMapsApiKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');

    try {
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!userId || !serviceId || !templateId) {
        throw new Error('Missing EmailJS configuration');
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userId
      );

      if (result.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
      title: 'Phone',
      details: ['+91 9928015794', '+91 9887371157'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['icrae04@poornima.org'],
    },
    {
      icon: Building,
      title: 'Venue',
      details: [
        'Poornima College of Engineering',
        'Plot No. IS-2027-2031, Ramchandrapura',
        'P.O. Vidhani Vatika, Sitapura Extension',
        'Jaipur - 302022, Rajasthan, India',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How can I submit my paper?',
      answer:
        'Papers can be submitted through the conference submission portal. Please ensure you follow the submission guidelines and paper template.',
    },
    {
      question: 'What are the important dates?',
      answer:
        'Paper submission deadline is October 15, 2025. Acceptance notification will be sent by August 15, 2025. Final registration deadline is August 30, 2025.',
    },
    {
      question: 'Is virtual presentation allowed?',
      answer:
        'Yes, the conference will be conducted in hybrid mode. Authors can choose to present their papers either physically or virtually.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Contact Us</h2>
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
                  src="/images/comittee/Rekha.jpg"
                  alt="Dr. Rekha Nair"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                    console.error('Failed to load image:', target.src);
                  }}
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
                  src="/images/comittee/Ratnesh.jpeg"
                  alt="Dr. Co-Convener"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                    console.error('Failed to load image:', target.src);
                  }}
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                  disabled={isLoading}
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                  disabled={isLoading}
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                  disabled={isLoading}
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {status}
                </p>
              )}
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
            {mapApiKey ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=Poornima+College+of+Engineering,Jaipur+Rajasthan+India&zoom=15`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Poornima College of Engineering Location"
              />
            ) : (
              <div className="h-[450px] flex items-center justify-center bg-gray-100">
                <p className="text-red-600">Google Maps API key is missing. Please check your configuration.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;