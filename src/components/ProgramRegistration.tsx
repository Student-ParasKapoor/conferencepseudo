import React, { useState } from 'react';
import { CreditCard, FileText, Mail, Building, ArrowRight, Copy, Check } from 'lucide-react';

const ProgramRegistration = () => {
  const [copied, setCopied] = useState(false);
  const email = 'icrae04@poornima.org';

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // Try to open default email client
      window.location.href = `mailto:${email}?subject=ICRAE 2025 Query`;
    } catch (error) {
      console.error('Failed to open email client:', error);
      // Fallback to copying email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const registrationFees = [
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

  const bankDetails = {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 transform hover:scale-105 transition-transform duration-300">
            Conference Registration and Publication Fee Details
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Registration and publication fees for ICRAE 2025
          </p>
          <a
            href="#registration-form"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover-scale hover-glow animate-fadeIn"
            style={{ animationDelay: '200ms' }}
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 animate-slideIn">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Authors submitting paper for conference are required to participate in the contests and pay the registration fees for the contests immediately after submissions. Without payment of registration fees, submission will not be processed.
            </p>
            <p>
              Publication Fees must be paid only after receiving the acceptance for publication in Journal/book.
            </p>
          </div>
        </div>

        {/* Registration Fee Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 animate-slideInLeft">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
              Publication Charges for ICRAE 2025
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={2}>
                      Early Registration<br/>(Before 30 August, 2025)
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan={2}>
                      Late Registration<br/>(After 30 August, 2025)
                    </th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3" colSpan={2}></th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Indian (₹)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Foreign ($)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Indian (₹)</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Foreign ($)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee, index) => (
                    <tr key={fee.category} className="hover:bg-gray-50 transition-colors duration-200 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{fee.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.early.indian}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.early.foreign}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.late.indian}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{fee.late.foreign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Category Descriptions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
            {/* Decorative background */}
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            {/* Main card */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 transform group-hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Category A</h4>
              <p className="text-gray-600">
                Publication in special issues of SCOPUS / ESCI (WoS) Indexed Journals (Confirmed Publication for all accepted and registered papers)
              </p>
            </div>
          </div>
          <div className="group relative animate-fadeIn" style={{ animationDelay: '400ms' }}>
            {/* Decorative background */}
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            {/* Main card */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 transform group-hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Category B</h4>
              <p className="text-gray-600">
                Book Series/ Proceedings (To be submitted to SCOPUS and Web of Science by the publishers after publication, Indexing subject to SCOPUS/ WoS) (Confirmed Publication for all accepted and registered papers)
              </p>
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideInRight">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            Registration Process
          </h3>
          <p className="text-gray-600 mb-4">
            After the Payment, Download the Registration form, fill it and send it to mail id mentioned below.
          </p>
          <div className="flex items-center text-blue-600 hover-lift">
            <Mail className="h-5 w-5 mr-2" />
            <p>
              For any further query, write to:{' '}
              <div className="flex items-center space-x-2">
                <a
                  href={`mailto:${email}`}
                  onClick={handleEmailClick}
                  className="underline hover:text-blue-800 transition-colors duration-200"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyClick}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </p>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Building className="h-6 w-6 text-blue-600 mr-2" />
            Account Details
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative hover-scale">
              <dl className="space-y-4">
                <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Account Name</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountName}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Account Number</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountNo}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                  <dd className="text-base text-gray-900">{bankDetails.bankName}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Branch Address</dt>
                  <dd className="text-base text-gray-900">{bankDetails.branch}</dd>
                </div>
              </dl>
            </div>
            <div className="group relative hover-scale">
              <dl className="space-y-4">
                <div className="animate-fadeIn" style={{ animationDelay: '500ms' }}>
                  <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.ifsc}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '600ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Swift Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.swift}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '700ms' }}>
                  <dt className="text-sm font-medium text-gray-500">MICR Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.micr}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '800ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Bank Code</dt>
                  <dd className="text-base text-gray-900">{bankDetails.bankCode}</dd>
                </div>
                <div className="animate-fadeIn" style={{ animationDelay: '900ms' }}>
                  <dt className="text-sm font-medium text-gray-500">Account Type</dt>
                  <dd className="text-base text-gray-900">{bankDetails.accountType}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramRegistration;