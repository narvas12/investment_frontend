import React, { createContext, useState, useContext, useEffect } from 'react';
import userService from './services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (userId) => {  // Accept userId as parameter
    try {
      const userData = await userService.getAuthenticatedUser(userId);  // Fetch authenticated user
      setUser(userData);
      
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId'); // Retrieve userId

    if (token && userId) {
      fetchUser(userId);  // Pass userId to fetchUser
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (token) => {
    localStorage.setItem('accessToken', token);
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    await fetchUser(userId);  // Fetch user after login
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId'); // Remove userId on logout
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth context
const useAuth = () => useContext(AuthContext);

export { useAuth };
export default AuthProvider;
