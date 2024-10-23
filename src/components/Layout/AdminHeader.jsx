import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-0 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-64`}
      >
        <div className="flex flex-col justify-between h-screen">
          <div>
            <div className="p-4 text-xl font-semibold text-center">Admin</div>
            <nav className="mt-5">
              <ul>
                <li>
                  <Link
                    to="/admin/send-bonus"
                    className="block py-2 px-4 hover:bg-gray-700"
                  >
                    Add Bonus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/update-deposits"
                    className="block py-2 px-4 hover:bg-gray-700"
                  >
                    Update Deposits
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/update-withdrawals"
                    className="block py-2 px-4 hover:bg-gray-700"
                  >
                    Update Withdrawals
                  </Link>
                </li>
                
                
              </ul>
            </nav>
          </div>
        </div>
      </aside>

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
        <nav className="bg-gray-800 shadow py-4 px-6 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-white md:hidden">
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
          <div className="text-2xl font-bold text-white">Admin Dashboard</div>
        </nav>

        {/* Page Content */}
        <div className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
