import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import Login from './components/Login';

const isAuthenticated = () => {
    // Simulate authentication check (replace with real auth logic in production)
    return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
          <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;