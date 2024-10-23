
import React from 'react';
import { useAuth } from '../../AuthContext'; // Import the custom hook for authentication

const Profile = () => {
  const { user, loading } = useAuth(); // Access user and loading state from AuthContext

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching user data
  }

  if (!user) {
    return <div>No user data available.</div>; // Display message if user data is unavailable
  }

  return (
    <div className="min-h-full flex items-center justify-center bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <div className="space-y-4">
          <div>
            <span className="block text-gray-600 font-medium">Username:</span>
            <p className="text-gray-800">{user.username}</p>
          </div>
          <div>
            <span className="block text-gray-600 font-medium">Email:</span>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <span className="block text-gray-600 font-medium">First Name:</span>
            <p className="text-gray-800">{user.first_name || 'N/A'}</p>
          </div>
          <div>
            <span className="block text-gray-600 font-medium">Last Name:</span>
            <p className="text-gray-800">{user.last_name || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
