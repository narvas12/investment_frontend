import React from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom'; 

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/home'); 
  };

  return <button className='text-[#ffffff] font-medium border-solid bg-[#ff0202] px-14 py-3 rounded-md ' onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
