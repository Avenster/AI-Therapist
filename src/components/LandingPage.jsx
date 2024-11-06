import React from 'react';
import { MessageCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const LandingPage = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gray-900' 
        : 'bg-white'
    }`}>
      {/* Base background color wrapper */}
      <div className={`min-h-screen ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-white'
      }`}>
        {/* Gradient overlay */}
        <div className={`min-h-screen ${
          isDarkMode 
            ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800' 
            : 'bg-gradient-to-b from-blue-50 via-white to-white'
        }`}>
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className={`text-4xl lg:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Your Supportive AI Companion for Mental Wellness
                </h1>
                <p className={`text-lg mb-8 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Experience compassionate and confidential conversations with our AI therapist. Available 24/7 to listen, support, and guide you through life's challenges.
                </p>
                <button 
                  onClick={() => navigate('/chat')}
                  className={`${
                    isDarkMode 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors`}
                >
                  <span>Start Chatting</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className={`w-full max-w-md rounded-2xl shadow-xl p-6 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 max-w-[80%] ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p>Hello! I'm here to listen and support you. How are you feeling today?</p>
                    </div>
                    <div className="bg-blue-500 rounded-lg p-4 max-w-[80%] ml-auto">
                      <p className="text-white">I've been feeling a bit overwhelmed lately...</p>
                    </div>
                    <div className={`rounded-lg p-4 max-w-[80%] ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p>I understand how challenging that can feel. Let's talk about what's been overwhelming you...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className={`py-16 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          }`}>
            <div className="container mx-auto px-4">
              <h2 className={`text-3xl font-bold text-center mb-12 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose Our AI Therapist?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Clock className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
                    title: "24/7 Availability",
                    description: "Get support whenever you need it, day or night, without scheduling appointments."
                  },
                  {
                    icon: <Shield className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
                    title: "Complete Privacy",
                    description: "Your conversations are private and secure, ensuring confidentiality at all times."
                  },
                  {
                    icon: <MessageCircle className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
                    title: "Judgment-Free Zone",
                    description: "Share your thoughts freely in a safe, non-judgmental environment."
                  }
                ].map((feature, index) => (
                  <div key={index} className={`rounded-xl p-6 text-center ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-blue-50'
                  }`}>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`py-16 ${
            isDarkMode ? 'bg-gray-900/50' : 'bg-blue-600'
          }`}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className={`mb-8 max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Take the first step towards better mental wellness. Our AI therapist is here to support you through your journey of self-discovery and growth.
              </p>
              <button 
                onClick={() => navigate('/chat')}
                className={`${
                  isDarkMode 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                } px-8 py-3 rounded-lg font-semibold transition-colors`}
              >
                Begin Your Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;