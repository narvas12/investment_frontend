// src/components/Layout/UnauthFooter.js
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const UnauthFooter = () => (
  <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="h-8 me-3"
              alt="WalletCompanisto Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WalletCompanisto
              
            </span>
            
          </a>
          
        </div>
        
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Starter Plan
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Angel Club
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Account
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
                
              </li>
              <li>
                Email: onboard@walletcompanisto.com
              </li>
              
            </ul>

          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            WalletCompanisto
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
);

export default UnauthFooter;
