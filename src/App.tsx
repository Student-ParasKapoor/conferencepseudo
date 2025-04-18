import React, { Suspense, lazy } from 'react';
import { MessageCircle, Target } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
const ConferenceInfo = lazy(() => import('./components/ConferenceInfo'));
const AboutConference = lazy(() => import('./components/AboutConference'));
const AboutPCE = lazy(() => import('./components/AboutPCE'));
const AboutJaipur = lazy(() => import('./components/AboutJaipur'));
const HomePage = lazy(() => import('./components/HomePage'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

// Fallback UI for ErrorBoundary
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div className="text-center py-20 text-red-600">
    <h2>Something went wrong!</h2>
    <p>{error.message}</p>
  </div>
);

// App Component
const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen flex flex-col relative">
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
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
          <Suspense fallback={<div>Loading Footer...</div>}>
            <Footer />
          </Suspense>
          <Suspense fallback={<div>Loading Chatbot...</div>}>
            <Chatbot />
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;