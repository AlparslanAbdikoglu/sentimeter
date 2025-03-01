import React, { useState, useEffect } from 'react';
import { BarChart2, Home, History, Settings, HelpCircle } from 'lucide-react';

const HoverNavbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const showNavbar = () => {
    if (timer) clearTimeout(timer);
    setIsVisible(true);
  };

  const hideNavbar = () => {
    const newTimer = setTimeout(() => {
      setIsVisible(false);
    }, 500);
    setTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={showNavbar}
      onMouseLeave={hideNavbar}
    >
      <div 
        className={`bg-white shadow-md transition-transform duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BarChart2 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">SentiMeter</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 bg-gray-100"
                  >
                    <Home className="inline-block w-4 h-4 mr-1" />
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    <History className="inline-block w-4 h-4 mr-1" />
                    History
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    <Settings className="inline-block w-4 h-4 mr-1" />
                    Settings
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  >
                    <HelpCircle className="inline-block w-4 h-4 mr-1" />
                    Help
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign In
              </button>
              <button className="ml-2 px-4 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hover trigger area */}
      <div 
        className={`h-3 bg-transparent ${isVisible ? 'hidden' : ''}`}
        onMouseEnter={showNavbar}
      ></div>
    </div>
  );
};

export default HoverNavbar;