import React from 'react';
import '../CSS/Aboutsection.css';

const Aboutsection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-row">
          
          {/* Text Content */}
          <div className="about-content">
            <h2 className="section-title">
              <span className="title-line"></span>
              Our Journey
            </h2>
            <div className="about-text-wrapper">
              <p>
                Founded in 2015, <span className="text-bold">JAGATEDUCATION</span> (formerly Trans Easy) has been a pioneer in coaching for Agri GATE examinations. We started with a small group of passionate educators and have grown into India's leading institute for agricultural engineering aspirants.
              </p>
              <p>
                We provide comprehensive study materials, live interactive sessions, and a test series designed by top-rankers to ensure our students achieve their career goals in PSUs, Research, and Higher Education.
              </p>
              <p className="highlight-text">
                Join thousands of successful engineers who trusted Jagat Education for their career growth.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="about-image-wrapper">
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Classroom" 
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            {/* Experience badge */}
            <div className="experience-badge">
              <span className="badge-number">9+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutsection;