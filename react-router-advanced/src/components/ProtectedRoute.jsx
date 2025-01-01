import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    // Simulate authentication check (replace with real auth logic in production)
    return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;