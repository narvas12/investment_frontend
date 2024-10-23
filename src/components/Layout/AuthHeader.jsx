import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import LogoutButton from "../miniComponents/LogoutButton";

const AuthHeader = () => {
  const { user } = useAuth(); // Fetch authenticated user data
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown when email is clicked
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-[#000000] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64`}
      >
        <div className="flex flex-col justify-between h-screen">
          <div>
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav className="mt-10">
              <Link
                to="/dashboard/overview"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Overview
              </Link>
              <Link
                to="/dashboard/investments"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Investments
              </Link>

              <Link
                to="/dashboard/withdrawals"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Withdrawals
              </Link>
              
              <Link
                to="/"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
              </Link>

              <Link
                to="/dashboard/deposits"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Deposits
              </Link>
              <Link
                to="/dashboard/earnings"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Earnings
              </Link>
              <Link
                to="/"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
              </Link>
              <Link
                to="/dashboard/add-deposit"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Make Investment
              </Link>
              <Link
                to="/dashboard/add-withdrawal"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Make Withdrawal
              </Link>


              <Link
                to="/"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                
              </Link>


              <Link
                to="/dashboard/add-payment-account"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Add Withdrwal Accounts
              </Link>


              <Link
                to="/dashboard/withdrawal-accounts"
                className="block py-2.5 px-4 hover:bg-[#78038C]"
              >
                Withdrawal Accounts
              </Link>
              
            </nav>
          </div>
          <div className="p-4">
            <div className="px-4 py-2 text-sm text-[#ffffff]">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Nav Bar */}
        <nav className="bg-[#000000] shadow py-4 px-6 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-indigo-800 md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Display Welcome Message */}
          <div className="text-2xl font-bold text-[#ffffff] m-0">
            {/* {user?.first_name ? `${user.first_name}` : 'Guest'} */}
          </div>

          <div className="relative flex items-center space-x-4">
            {/* Display User Profile Picture */}
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
                N/A
              </div>
            )}

            {/* Email with Dropdown Trigger */}
            <div className="relative">
              <div
                className="cursor-pointer text-gray-300"
                onClick={toggleDropdown}
                onMouseEnter={() => setIsDropdownOpen(true)} // Show on hover
                onMouseLeave={() => setIsDropdownOpen(false)} // Hide on mouse leave
              >
                {user?.email || "No email"}
              </div>

              {/* Profile Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <div className="px-4 py-2 text-sm text-gray-600">
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    <strong>First Name:</strong> {user.first_name || "N/A"}
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    <strong>Last Name:</strong> {user.last_name || "N/A"}
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    <LogoutButton />
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
