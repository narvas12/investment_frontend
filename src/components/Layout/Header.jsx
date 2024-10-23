// src/components/Layout/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleLanguageChange = (lang) => {

    console.log(`Language changed to: ${lang}`);
    setIsLangOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <Link to="/" className="text-2xl font-bold flex items-center">

          <svg
            className="h-8 w-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          WalletCompanisto
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/home" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>

            {/* Language Dropdown */}
            <li className="relative">
              <button
                onClick={toggleLangDropdown}
                className="flex items-center focus:outline-none"
              >
                {/* You can use a flag icon or any icon here */}
                <svg
                  className="h-5 w-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 010-5.156L12 5m0 0L5.84 8.422a12.083 12.083 0 000 5.156L12 14z" />
                </svg>
                Language
                {/* Dropdown Icon */}
                <svg
                  className="h-4 w-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-10">
                  <li
                    onClick={() => handleLanguageChange('en')}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    English
                  </li>
                  <li
                    onClick={() => handleLanguageChange('es')}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Spanish
                  </li>
                  <li
                    onClick={() => handleLanguageChange('fr')}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    French
                  </li>
                  {/* Add more languages as needed */}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
