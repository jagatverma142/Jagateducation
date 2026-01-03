import React from 'react';
import Footer from '../Components/Footer'; // You need to create a Footer.jsx component
import '../App.css'; // Make sure these CSS files are in your src folder
import '../CSS/Nav.css';


import Navbar from '../Components/Nav'; // You need to create a Navbar.jsx component

const About = () => {
  return (
    <>
      {/* Load Navbar Component */}
      <Navbar />

      {/* About Hero Section */}
      <section className="about-hero">
        <h1>
          <center>About Our Institute</center>
        </h1>
        <p>
          <center>Empowering Agriculture Engineers since 2015</center>
        </p>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Journey</h2>
            <p>
              Founded in 2015, <strong>JAGATEDUCATION</strong> (formerly Trans
              Easy) has been a pioneer in coaching for Agri GATE examinations. We
              started with a small group of passionate educators and have grown
              into India's leading institute for agricultural engineering
              aspirants.
            </p>
            <p>
              We provide comprehensive study materials, live interactive sessions,
              and a test series designed by top-rankers to ensure our students
              achieve their career goals in PSUs, Research, and Higher Education.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
              alt="Education Image"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="section-padding">
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To provide affordable, high-quality technical education and
                guidance to every agricultural student in India.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To become the global benchmark for Agriculture GATE preparation
                and skill development.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gem"></i>
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, and Student-First approach in everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Load Footer Component */}
      <Footer />
    </>
  );
};

export default About;