// src/components/UserDashboard.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthHeader from '../Layout/AuthHeader';

const UserDashboard = ({ user }) => {
  return (
    <Routes>
      {/* Dashboard layout with AuthHeader */}
      <Route element={<AuthHeader user={user} />}>
        {/* Redirect /dashboard to /dashboard/overview */}
        <Route path="" element={<Navigate to="dashboard/overview" />} />
        <Route path="dashboard/overview" element={<h2>Overview Page</h2>} />
        <Route path="dashboard/profile" element={<h2>Profile Page</h2>} />
        <Route path="dashboard/settings" element={<h2>Settings Page</h2>} />
        <Route path="dashboard/investments" element={<h2>Investments Page</h2>} />
        
      </Route>
    </Routes>
  );
};

export default UserDashboard;
