import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from react-dom/client
import AuthProvider from './AuthContext';
import App from './App';
import './index.css';

// Get the root element
const container = document.getElementById('root');

// Create the root with createRoot API
const root = createRoot(container); 

// Render your application inside the root
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
