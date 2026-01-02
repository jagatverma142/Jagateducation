import React, { useState } from 'react';
import '../CSS/AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Register views
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API integration logic here
    console.log("Form Submitted");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Logo Section matching your site */}
        <div className="auth-header">
          <h2 className="brand-logo">
            JAGAT<span className="brand-highlight">EDUCATION</span>
          </h2>
          <p className="auth-subtitle">
            {isLogin ? "Welcome back! Please login to your account." : "Join India's Leading Agri GATE Institute."}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
          )}
          
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#forgot">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleAuthMode} className="link-text">
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;