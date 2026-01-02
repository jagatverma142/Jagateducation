import React from 'react';
import '../CSS/Aboutsec.css';

const Aboutsec = () => {
  return (
    <section className="about-2-section">
      <div className="about-2-container">
        
        {/* Text Side */}
        <div className="about-2-content">
          
          {/* Header */}
          <div className="about-header">
            <h2 className="section-heading">ABOUT COMPANY</h2>
            <div className="dynamic-divider">
              <span className="line"></span>
              <span className="dot"></span>
              <span className="line"></span>
            </div>
          </div>

          {/* Main Intro */}
          <p className="main-intro">
            Welcome to <span className="highlight">JAGATEDUCATION</span>, India's First & Leading Agri GATE institute since 2015. 
            At Trans Easy, we're your dedicated allies on the path to success. With a passion for education and a commitment to excellence, we stand as a trusted beacon for aspiring engineers.
          </p>

          {/* Feature Cards (Reorganized Text for Readability) */}
          <div className="features-grid">
            
            <div className="feature-card">
              <div className="card-icon">👨‍🏫</div>
              <div className="card-text">
                <h3>Expert Faculty</h3>
                <p>What sets us apart: Our faculty members with years of experience in their respective fields provide unparalleled guidance and support to help students excel.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">📚</div>
              <div className="card-text">
                <h3>Comprehensive Material</h3>
                <p>Our study material includes textbooks, practice questions, and mock tests, curated by experts and updated regularly to align with the latest exam patterns.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">📈</div>
              <div className="card-text">
                <h3>Structured Growth</h3>
                <p>We believe in the power of feedback. Through regular assessments and feedback sessions, we track each student's progress to ensure a strong foundation.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Image Side */}
        <div className="about-2-visuals">
          <div className="image-blob"></div>
          <img 
            src="https://static.onlinetestpanel.com/assets/templet/t3/images/aboutus.png" 
            alt="Jagat Education Team" 
            className="floating-image"
          />
          
          {/* Floating Badge */}
          <div className="stat-badge">
            <span className="stat-num">10k+</span>
            <span className="stat-label">Students Mentored</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutsec;