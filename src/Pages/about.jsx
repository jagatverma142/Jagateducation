import React, { useEffect, useRef, useState } from 'react';
import '../CSS/About.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Nav';

const About = () => {
  // Logic for scroll animations
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);


  // Logic for Number Counter
  const [counts, setCounts] = useState({ years: 0, students: 0, faculty: 0, commit: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        years: prev.years < 15 ? prev.years + 1 : 15,
        students: prev.students < 2000 ? prev.students + 50 : 2000,
        faculty: prev.faculty < 50 ? prev.faculty + 2 : 50,
        commit: prev.commit < 100 ? prev.commit + 5 : 100,
      }));
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="nav">
      <Navbar />

    </div>
     <div className="about-page">
      
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content hidden">
          <h1 className="float-text">About JAGAT EDUCATIONS</h1>
          <p className="float-text delay">Empowering minds, shaping the future.</p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="about-section container">
        <div className="story-grid">
          <div className="story-image hidden slide-left">
            <div className="img-frame-3d">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Campus" 
              />
            </div>
          </div>
          <div className="story-content hidden slide-right">
            <h2>Our Story</h2>
            <h3>A Legacy of Excellence</h3>
            <p>
              Founded in 2010, JAGAT EDUCATION has been dedicated to providing top-tier education.
              We fuse traditional values with modern technology to create leaders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 3D FLIP CARDS */}
      <section className="about-section bg-light">
        <div className="container">
          <div className="mv-grid">
            
            {/* Flip Card 1 */}
            <div className="flip-card hidden">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon">🎯</div>
                  <h2>Our Mission</h2>
                  <p>Hover to see details</p>
                </div>
                <div className="flip-card-back">
                  <h2>Mission</h2>
                  <p>To provide accessible, high-quality education that empowers students to achieve their full potential.</p>
                </div>
              </div>
            </div>

            {/* Flip Card 2 */}
            <div className="flip-card hidden">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon">🔭</div>
                  <h2>Our Vision</h2>
                  <p>Hover to see details</p>
                </div>
                <div className="flip-card-back">
                  <h2>Vision</h2>
                  <p>To be a leader in educational innovation, fostering an environment where every student thrives.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Animated Stats Banner */}
      <section className="stats-banner hidden">
        <div className="stat-item">
          <h2>{counts.years}+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h2>{counts.students}+</h2>
          <p>Happy Students</p>
        </div>
        <div className="stat-item">
          <h2>{counts.faculty}+</h2>
          <p>Expert Faculty</p>
        </div>
        <div className="stat-item">
          <h2>{counts.commit}%</h2>
          <p>Commitment</p>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="about-section container">
        <h2 className="section-title hidden">Meet Our Leadership</h2>
        <div className="team-grid">
          
          <div className="team-card hidden">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Principal" />
            </div>
            <h3>Mr. R. Sharma</h3>
            <span>Principal</span>
          </div>

          <div className="team-card hidden">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Vice Principal" />
            </div>
            <h3>Mrs. A. Verma</h3>
            <span>Vice Principal</span>
          </div>

          <div className="team-card hidden">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Director" />
            </div>
            <h3>Mr. K. Singh</h3>
            <span>Director</span>
          </div>

        </div>
      </section>

      {/* 6. NEW ADMISSION BANNER */}
      <section className="cta-banner hidden">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Admissions are now open for the upcoming academic session.</p>
          <button className="cta-btn">Apply Now</button>
        </div>
      </section>

    </div>



    <div className="Footer">
      <Footer />
    </div>
    
    </>
   
  );
};

export default About;