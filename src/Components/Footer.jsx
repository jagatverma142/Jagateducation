import React from 'react';
import '../CSS/Style.css'; // Ensure your styles are imported

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-col brand-section">
          <h2 className="footer-logo">JAGAT<span>EDUCATION</span></h2>
          <p>India's Leading Agri GATE Institute. Empowering students with quality resources and expert guidance since 2015.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube" className="social-icon"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {/* Note: In React, we usually remove .html extensions */}
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/packages">Test Packages</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <h3>Our Programs</h3>
          <ul className="footer-links">
            <li><a href="#">Agri GATE Coaching</a></li>
            <li><a href="#">Test Series {new Date().getFullYear()}</a></li>
            <li><a href="#">Free Study Material</a></li>
            <li><a href="#">Previous Year Papers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates on exam dates.</p>
          <div className="input-group">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">LOGIN</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; <span>{new Date().getFullYear()}</span> Jagat Education. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;