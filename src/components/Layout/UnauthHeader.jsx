import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useAuth } from '../../AuthContext'; // Import useAuth for authentication
import LogoutButton from "../miniComponents/LogoutButton"; // Assuming LogoutButton is a separate component

const UnauthHeader = () => {
  const { isAuthenticated } = useAuth(); // Get the isAuthenticated value from context
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Toggle the language dropdown
  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    setIsLangOpen(false); // Close the dropdown after selection
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Header has been scrolled past 50px
      } else {
        setIsScrolled(false); // Header is at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#ffffffff] text-black' : 'bg-gradient-to-br from-[#fffbbe] via-[#bfddff] via-[#ccffca] via-[#f8d1d1] to-[#ffe3f8] text-black'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img
              src={logo}
              className="h-8 me-3 bg-transparent"
              alt="WalletCompanisto Logo"
            />
            WalletCompanisto
          </Link>

          {/* Hamburger button for mobile menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`md:flex items-center space-x-6 ${
              isMenuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
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

              {/* Conditional Login/Logout */}
              <li>
                {isAuthenticated ? (
                  <LogoutButton /> // Show Logout button if authenticated
                ) : (
                  <Link to="/login" className="hover:text-gray-200">
                    Login
                  </Link> // Show Login button if not authenticated
                )}
              </li>

              {/* Language Dropdown */}
              <li className="relative z-50">
                <button
                  onClick={toggleLangDropdown}
                  className="flex items-center focus:outline-none border-black"
                >
                  <svg
                    className="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 010-5.156L12 5m0 0L5.84 8.422a12.083 12.083 0 000 5.156L12 14z" />
                  </svg>
                  Language
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
                  <ul className="absolute right-0 mt-2 w-32 bg-[#ffffff] text-black rounded-md shadow-lg z-10">
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

      {/* Outlet for rendering child routes */}
      <Outlet />
    </>
  );
};

export default UnauthHeader;
