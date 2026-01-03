import React, { useState, useEffect } from 'react';
// Components
import Footer from '../Components/Footer';
import Navbar from '../Components/Nav';
import Aboutsection from '../Components/Aboutsection';

// CSS
import "../App.css";
import '../CSS/Nav.css';

// Icons Imports
import expertIcon from '../Icons/icons8-expert-48.png';
import pdfIcon from '../Icons/icons8-pdf-48.png';
import supportIcon from '../Icons/icons8-online-support-48.png';
import aiIcon from '../Icons/icons8-electronic-brain-50.png';
import papersIcon from '../Icons/icons8-test-results-50.png';
// Placeholder for missing icon or using external link
const accessIcon = "https://img.icons8.com/?size=50&id=10475&format=png";

// --- DATA CONFIGURATION ---

// 1. Stats Data
const statsData = [
  { id: 1, target: 15000, suffix: "+", label: "Happy Students" },
  { id: 2, target: 1200, suffix: "+", label: "GATE Selections" },
  { id: 3, target: 4.8, suffix: "/5", label: "Average Rating", isDecimal: true },
  { id: 4, target: 10, suffix: "+ Years", label: "Experience" },
];

// 2. Courses Data
const coursesData = [
  {
    id: 1,
    category: "Live",
    tag: "BESTSELLER",
    title: "GATE (AG 26/27) LIVE MASTERCOURSE",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b39b7a5f1rec-app.png",
    validity: "Until Exam 2026",
    rating: 4.9,
    originalPrice: 35000,
    currentPrice: 29999,
  },
  {
    id: 2,
    category: "Recorded",
    tag: "POPULAR",
    title: "GATE (AG 26/27) RECORDED PRO",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b2f404884live-app.png",
    validity: "Until Exam 2026",
    rating: 4.7,
    originalPrice: 30000,
    currentPrice: 24999,
  },
  {
    id: 3,
    category: "Crash Course",
    tag: "FAST TRACK",
    title: "GATE 2026 RANK BOOSTER",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c57f649a2dblive-app.png",
    validity: "6 Months",
    rating: 4.8,
    originalPrice: 15000,
    currentPrice: 9999,
  },
  {
    id: 4,
    category: "Notes",
    tag: "SELF PACED",
    title: "COMPLETE STUDY MATERIAL KIT",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b41b6d2c6app-study-matn.png",
    validity: "Lifetime Access",
    rating: 4.6,
    originalPrice: 8000,
    currentPrice: 4999,
  },
  {
    id: 5,
    category: "Test Series",
    tag: "PRACTICE",
    title: "ALL INDIA TEST SERIES (AITS)",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b3e7c3ccdapp-test-series.png",
    validity: "1 Year",
    rating: 4.9,
    originalPrice: 2000,
    currentPrice: 999,
  },
  {
    id: 6,
    category: "Notes",
    tag: "REVISION",
    title: "QUICK REVISION FORMULA BOOK",
    image: "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b47d780f1live-app-shorts.png",
    validity: "Hard Copy",
    rating: 4.5,
    originalPrice: 1500,
    currentPrice: 799,
  }
];

// 3. Features Data (Using FontAwesome Classes for 3D Icon Circle)
const featuresData = [
  { id: 1, iconClass: "fas fa-chalkboard-teacher", title: "Expert Faculty", desc: "Learn from GATE toppers & experienced mentors." },
  { id: 2, iconClass: "fas fa-mobile-alt", title: "Anytime Access", desc: "Study seamlessly on Mobile, Tablet & Desktop." },
  { id: 3, iconClass: "fas fa-file-pdf", title: "PDF Notes", desc: "Downloadable detailed topic-wise notes." },
  { id: 4, iconClass: "fas fa-comments", title: "Doubt Support", desc: "24/7 dedicated discussion forum." },
  { id: 5, iconClass: "fas fa-chart-line", title: "Analytics", desc: "AI-driven deep performance analysis." },
  { id: 6, iconClass: "fas fa-book-reader", title: "PYQ Bank", desc: "15+ years of solved question papers." },
];

// 4. Testimonials Data
const testimonialsData = [
  { id: 1, name: "Rahul Kumar", result: "GATE AIR 12", text: "The test series helped me analyze my weak points perfectly." },
  { id: 2, name: "Sneha Singh", result: "GATE AIR 45", text: "Live lectures were very interactive and the notes were concise." },
  { id: 3, name: "Amit Verma", result: "GATE AIR 05", text: "Best platform for Agri Engineering. Highly recommended." },
];

// 5. FAQ Data
const faqData = [
  { question: "Can I watch the videos offline?", answer: "Yes, our mobile app allows you to download videos for offline viewing." },
  { question: "Is the test series included?", answer: "Yes, the Mastercourse includes the full test series for free." },
  { question: "What is the language?", answer: "We use Hinglish (Hindi + English mix) to ensure concepts are clear." },
];

// --- COUNTER COMPONENT ---
const Counter = ({ target, duration, isDecimal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.toString().replace(/,/g, "")); 
    if (start === end) return;

    let totalMilSec = duration;
    let incrementTime = (totalMilSec / end) * 10;
    if (incrementTime < 1) incrementTime = 1;

    let timer = setInterval(() => {
      start += isDecimal ? 0.1 : Math.ceil(end / 100);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [target, duration, isDecimal]);

  return <span>{isDecimal ? count.toFixed(1) : count}</span>;
};


const Home = () => {
  const [filter, setFilter] = useState('All');
  const [activeFaq, setActiveFaq] = useState(null);

  const filteredCourses = filter === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === filter);

  const categories = ['All', 'Live', 'Recorded', 'Notes', 'Test Series'];

  return (
    <div className="home-wrapper">
      <div className="nav-container">
        <Navbar />
      </div>      

      {/* --- HERO SECTION --- */}
      <section className="hero-modern">
        <div className="hero-content">
          <span className="hero-badge">#1 Agri Engineering Institute</span>
          <h1>Crack GATE with Confidence</h1>
          <p>Join India's most trusted learning platform. Live classes, Mock Tests, and Mentorship.</p>
          <div className="hero-buttons">
            <button className="btn-primary">View Courses</button>
            <button className="btn-secondary">Free Demo</button>
          </div>
        </div>
      </section>

      {/* --- ANIMATED STATS BAR --- */}
      <section className="stats-bar">
        {statsData.map((stat) => (
          <div className="stat-item" key={stat.id}>
            <h2>
              <Counter target={stat.target} duration={2000} isDecimal={stat.isDecimal} />
              {stat.suffix}
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <div className="about-wrapper">
        <Aboutsection />
      </div>

      {/* --- DYNAMIC FILTERABLE COURSES --- */}
      <section className="courses-section bg-light section-padding">
        <div className="section-header">
          <h2>Our Popular Courses</h2>
          <p>Choose your course and get started.</p>
          <div className="title-underline"></div>
          
          {/* Filter Buttons */}
          <div className="filter-container">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              // Using 'course-card-modern' to trigger 3D tilt from CSS
              <div className="course-card-modern fade-in" key={course.id}>
                <div className="card-badge">{course.tag}</div>
                <div className="card-image-box">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="card-details">
                  <div className="rating-row">
                    <span className="star"><i className="fas fa-star"></i> {course.rating}</span>
                    <span className="category-tag">{course.category}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <div className="price-row">
                    <div>
                      <span className="price-strike">₹{course.originalPrice}</span>
                      <span className="price-main">₹{course.currentPrice}</span>
                    </div>
                    <button className="btn-cart"><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No courses found in this category.</p>
          )}
        </div>
      </section>

      {/* --- WHY CHOOSE US (3D CARDS) --- */}
      <section className="section-padding">
        <div className="section-header">
          <h2>Why Choose Us?</h2>
          <p>Comprehensive learning ecosystem designed for success.</p>
          <div className="title-underline"></div>
        </div>
        
        {/* Using 'feature-grid' and 'feature-card-modern' for 3D Effects */}
        <div className="feature-grid">
          {featuresData.map((feature) => (
            <div className="feature-card-modern" key={feature.id}>
              <div className="icon-circle">
                {/* Ensure you have FontAwesome loaded in index.html for these classes */}
                <i className={feature.iconClass}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding bg-light testimonials-section">
        <div className="section-header">
          <h2>Success Stories</h2>
          <div className="title-underline"></div>
        </div>
        <div className="testimonial-grid">
          {testimonialsData.map((student) => (
            <div className="testimonial-card" key={student.id}>
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p>"{student.text}"</p>
              <div className="student-info">
                <h4>{student.name}</h4>
                <span>{student.result}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="section-padding faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="title-underline"></div>
        </div>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
              <div className="faq-question">
                {item.question}
                <span>{activeFaq === index ? '-' : '+'}</span>
              </div>
              {activeFaq === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;