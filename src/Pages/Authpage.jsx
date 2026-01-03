import React, { useState } from "react";
import "../CSS/Authpage.css"; // CSS file import

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        {/* Logo */}
        <div className="auth-header">
          <h2>JAGAT<span>EDUCATION</span></h2>
          <p>Welcome to India's Leading Agri Institute</p>
        </div>

        {/* Sliding Toggle Button */}
        <div className="toggle-container">
          <div className={`slider ${isLogin ? "left" : "right"}`}></div>
          <button 
            className={isLogin ? "active" : ""} 
            onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button 
            className={!isLogin ? "active" : ""} 
            onClick={() => setIsLogin(false)}>
            Register
          </button>
        </div>

        {/* Form Section */}
        <form className="auth-form">
          
          {/* Register Name Field (Only visible when Register is active) */}
          {!isLogin && (
            <div className="input-group slide-in">
              <input type="text" required placeholder=" " />
              <label>Full Name</label>
            </div>
          )}

          {/* Email Field */}
          <div className="input-group">
            <input type="email" required placeholder=" " />
            <label>Email Address</label>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <input type="password" required placeholder=" " />
            <label>Password</label>
          </div>

          {!isLogin && (
            <div className="input-group slide-in">
              <input type="password" required placeholder=" " />
              <label>Confirm Password</label>
            </div>
          )}

          {/* Forgot Password Link */}
          {isLogin && <a href="#" className="forgot-pass">Forgot Password?</a>}

          {/* Action Button */}
          <button type="submit" className="btn-submit">
            {isLogin ? "Login Now" : "Create Account"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;