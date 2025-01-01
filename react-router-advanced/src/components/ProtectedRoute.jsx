import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Use the hook to get the user

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;