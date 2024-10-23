import React, { useState } from 'react';
import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 

const Login = () => {
  const { login: authLogin } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!identifier || !password) {
      setError('Please fill in all fields.');
      return;
    }
  
    try {
      const { access, refresh, user } = await loginUser({ identifier, password });  
  
      if (access) {
        authLogin(access); 
        localStorage.setItem('accessToken', access); 
        localStorage.setItem('refreshToken', refresh); 
        navigate('/dashboard');
      } else {
        setError('Login failed, please try again.');
      }
    } catch (err) {
      console.error(err); 
      setError(err.response?.data?.detail || 'Invalid credentials'); 
    }
  };
  

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full opacity-50" 
        alt="Background"
      />
      <div className="relative w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#41024D' }}>
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#77018C' }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#77018C' }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            style={{ backgroundColor: '#490b53' }}
          >
            Login
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="hover:underline" style={{ color: '#77018C' }}>
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
