import React from "react";
import { useAuth } from '../../AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Pricing = ({ openModal }) => {
  const { isAuthenticated } = useAuth(); // Get the isAuthenticated value from context
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard'); // Redirect to the dashboard if authenticated
    } else {
      navigate('/register'); // Redirect to the registration page if not authenticated
    }
  };

  return (
    <div className="relative min-h-full pb-28 sm:pb-0 bg-gradient-to-br from-[#fffbbe] via-[#bfddff] via-[#ccffca] via-[#ffdede] to-[#bfd3ff]">
      {/* SVG Background with Faint Red Circles */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Random Circles */}
          <circle cx="100" cy="150" r="50" fill="rgba(255, 0, 0, 0.1)" />
          <circle cx="400" cy="100" r="30" fill="rgba(255, 0, 0, 0.1)" />
          <circle cx="700" cy="200" r="60" fill="rgba(255, 0, 0, 0.1)" />
          <circle cx="1000" cy="80" r="40" fill="rgba(255, 0, 0, 0.1)" />
          <circle cx="1200" cy="220" r="80" fill="rgba(255, 0, 0, 0.1)" />
          <circle cx="1300" cy="300" r="50" fill="rgba(255, 0, 0, 0.1)" />
        </svg>
        {/* Gradient Overlay with Light Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-10"></div>
      </div>

      {/* Content on top of the overlay */}
      <div className="relative z-10 lg:h-[767px]">
        <div className="max-w-full mx-auto sm:p-10 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:h-full gap-8 lg:gap-0">
            {/* Startup Plan */}
            <div className="min-w-[250px] mx-5 bg-gray-100 xl:p-12 lg:p-8 sm:p-6 p-4 rounded-lg shadow-lg w-full lg:w-1/2 transition-transform transform hover:scale-105 duration-300 ease-out lg:h-full">
              <div className="text-left lg:text-center p-2">
                <p className="text-lg sm:text-xl xl:text-2xl text-gray-600 font-medium mb-4">
                  A perfect start for every investor:
                </p>
                <h2 className="text-4xl sm:text-5xl xl:text-8xl font-extrabold text-[#000000] mb-4">
                  Startup Plan
                </h2>
                <p className="text-base sm:text-lg text-gray-500 font-medium">
                  Starting at{" "}
                  <span className="font-semibold text-gray-900">€400</span>
                </p>
              </div>

              <div className="bg-gray-100 rounded-b-xl border-t-2 border-gray-200 p-4 sm:p-8">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Great returns with minimal risks.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Build a strong financial future.
                    </span>
                  </li>
                </ul>
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                  onClick={handleButtonClick} // Change to handleButtonClick
                >
                  {isAuthenticated ? 'Welcome Back' : 'Join Our Journey'}
                </button>
                <span className="mt-4 block text-left">
                  <a
                    href="#"
                    className="learn-more-link text-[#38c714] font-medium text-base sm:text-lg transition duration-300 hover:text-[#41024D] hover:underline"
                    onClick={openModal}
                  >
                    Learn more ...
                  </a>
                </span>
              </div>
            </div>

            {/* Angel Club Plan */}
            <div className="min-w-[250px] mx-5 bg-gray-100 xl:p-12 lg:p-8 sm:p-6 p-4 rounded-lg shadow-lg w-full lg:w-1/2 transition-transform transform hover:scale-105 duration-300 ease-out lg:h-full">
              <div className="text-center lg:text-center p-2">
                <p className="text-lg sm:text-xl xl:text-2xl text-gray-600 font-medium mb-4">
                  For financially strong investors:
                </p>
                <h2 className="text-4xl sm:text-5xl xl:text-8xl font-extrabold text-[#000000] mb-4">
                  Angel Club
                </h2>

                <p className="text-base sm:text-lg text-gray-500 font-medium">
                  Starting at{" "}
                  <span className="font-semibold text-gray-900">€5000</span>
                </p>
              </div>

              <div className="bg-gray-100 rounded-b-xl border-t-2 border-gray-200 p-4 sm:p-8 text-left lg:text-right">
                <ul className="space-y-3">
                  <li className="flex items-center lg:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3 lg:ml-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Secure your financial future.
                    </span>
                  </li>
                  <li className="flex items-center lg:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3 lg:ml-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Invest in high-growth opportunities.
                    </span>
                  </li>
                </ul>
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                  onClick={handleButtonClick} // Change to handleButtonClick
                >
                  {isAuthenticated ? 'Exclusive Member Access' : 'Join The Club'}
                </button>
                <span className="mt-4 block text-left lg:text-right">
                  <a
                    href="#"
                    className="learn-more-link text-[#38c714] font-medium text-base sm:text-lg transition duration-300 hover:text-[#41024D] hover:underline"
                    onClick={openModal}
                  >
                    Learn more ...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
