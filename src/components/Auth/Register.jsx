import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { registerUser } from '../../api'; // Adjust this import based on your project structure

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState(''); // State for referral code
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Create user data object
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      password,
      referral_code: referralCode, // Include referral code
    };

    try {
      const response = await registerUser(userData);
      console.log('User registered successfully:', response.data);
      navigate('/login'); // Navigate to the login page
    } catch (err) {
      setError(err.response?.data?.detail || 'Registration failed');
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full opacity-50" // Background image with opacity
        alt="Background"
      />
      <div className="relative bg-white rounded shadow-lg p-8 w-11/12 sm:max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referral_code">Referral Code (Optional)</label>
            <input
              type="text"
              id="referral_code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              placeholder="Enter referral code (if any)"
            />
          </div>
          <button type="submit" className="w-full bg-[#41024D] text-white p-2 rounded hover:bg-teal-600 transition duration-200">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In here
            </a>
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-600 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Register;
