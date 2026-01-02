import React, { useState, useEffect } from 'react';
import '../CSS/OnlineClasses.css';
import '../CSS/Nav.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Nav';

const OnlineClasses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // New State for FAQ Accordion
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // --- DATABASE ---
  const allCourses = [
    {
      id: 1,
      title: "GATE 2026 - Agri Engineering (Premium)",
      instructor: "Dr. R.K. Sharma",
      duration: "12 Months",
      price: "₹18,000",
      rating: "4.9 ⭐",
      language: "Hinglish",
      image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=400",
      category: "Live Batch",
      type: "Full Course"
    },
    {
      id: 2,
      title: "Farm Machinery & Power Mastery",
      instructor: "Eng. Anjali Verma",
      duration: "6 Months",
      price: "₹8,500",
      rating: "4.7 ⭐",
      language: "Hindi",
      image: "https://i.ytimg.com/vi/Lf0ivifGdJU/maxresdefault.jpg",
      category: "Recorded",
      type: "Subject Wise"
    },
    {
      id: 3,
      title: "Soil & Water Conservation",
      instructor: "Dr. P. Patel",
      duration: "4 Months",
      price: "₹6,000",
      rating: "4.8 ⭐",
      language: "English",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400",
      category: "Best Seller",
      type: "Subject Wise"
    },
    {
      id: 4,
      title: "Food Process Engineering",
      instructor: "Prof. S. Gupta",
      duration: "5 Months",
      price: "₹7,200",
      rating: "4.6 ⭐",
      language: "Hinglish",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400",
      category: "New",
      type: "Subject Wise"
    },
    {
      id: 5,
      title: "General Agriculture for GATE",
      instructor: "Dr. A. Singh",
      duration: "3 Months",
      price: "₹4,500",
      rating: "4.5 ⭐",
      language: "Hindi",
      image: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS_BLOGS/666a4a86-5fcd-4259-b14b-412d6bfc3104.jpg",
      category: "Crash Course",
      type: "Crash Course"
    },
    {
      id: 6,
      title: "GATE 2027 Foundation Batch",
      instructor: "Dr. R.K. Sharma & Team",
      duration: "24 Months",
      price: "₹25,000",
      rating: "5.0 ⭐",
      language: "Hinglish",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
      category: "Foundation",
      type: "Full Course"
    },
    {
      id: 7,
      title: "Renewable Energy Sources",
      instructor: "Eng. M. Khan",
      duration: "2 Months",
      price: "₹3,500",
      rating: "4.4 ⭐",
      language: "English",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400",
      category: "Recorded",
      type: "Subject Wise"
    },
    {
      id: 8,
      title: "All India Mock Test Series",
      instructor: "Jagat Edu Team",
      duration: "Exam Till",
      price: "₹999",
      rating: "4.9 ⭐",
      language: "English",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400",
      category: "Test Series",
      type: "Test Series"
    },
    {
      id: 9,
      title: "Green Agriculture for GATE",
      instructor: "Dr. A. Singh",
      duration: "3 Months",
      price: "₹9,500",
      rating: "4.5 ⭐",
      language: "Hindi",
      image: "https://tse3.mm.bing.net/th/id/OIP.z1L0mnxcnULEzbpxJAVf6QHaEK?w=1200&h=675&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Crash Course",
      type: "Crash Course"
    }
  ];

  // --- UPDATED REVIEWS WITH IMAGES ---
  const reviews = [
    { 
      id: 1, 
      name: "Rahul Verma", 
      rank: "AIR 12 (GATE '24)", 
      text: "The Farm Machinery lectures by Anjali Ma'am were a game changer. Cleared all my concepts!",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      id: 2, 
      name: "Sneha Gupta", 
      rank: "AIR 45 (GATE '24)", 
      text: "Jagat Education's test series is exactly like the real exam. Highly recommended.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      id: 3, 
      name: "Amit Kumar", 
      rank: "Student", 
      text: "Affordable and high quality. The doubt clearing sessions are very helpful.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" 
    }
  ];

  const faqs = [
    { q: "Can I watch the recorded videos multiple times?", a: "Yes! You get unlimited views on all recorded lectures until your course validity expires." },
    { q: "Is the study material provided in hard copy?", a: "We provide downloadable PDF notes. Hard copies can be ordered separately for select courses." },
    { q: "Do you provide doubt solving?", a: "Yes, all live batches come with a dedicated Telegram group for 24/7 doubt resolution." },
    { q: "Can I pay in installments?", a: "Yes, for courses above ₹10,000, we offer a 2-part EMI option. Contact support for details." }
  ];

  useEffect(() => {
    setTimeout(() => {
      setCourses(allCourses);
      setFilteredCourses(allCourses);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let result = courses;
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter(course => course.type === selectedCategory);
    }
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, courses]);

  return (
    <>
    <div className="nav">
        <Navbar />
    </div>
    <div className="online-classes-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Online Classes</h1>
          <p>Master Agricultural Engineering with India's Top Educators</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat-item">
          <h2>10k+</h2>
          <p>Students Taught</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Selections</p>
        </div>
        <div className="stat-item">
          <h2>4.8/5</h2>
          <p>Average Rating</p>
        </div>
      </section>

      <div className="container">
        
        {/* Sticky Controls Bar */}
        <div className="sticky-wrapper">
          <div className="controls-bar">
            <div className="search-box">
              <span style={{fontSize: '1.2rem'}}>🔍</span>
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-tabs">
              {['All', 'Full Course', 'Subject Wise', 'Crash Course', 'Test Series'].map((cat) => (
                <button 
                  key={cat} 
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading Batches...</p>
          </div>
        ) : (
          <section className="courses-section">
            <div className="courses-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <div key={course.id} className="course-card fade-in">
                    <div className="card-image">
                      <span className={`course-tag ${course.category.replace(' ', '-').toLowerCase()}`}>
                        {course.category}
                      </span>
                      <img src={course.image} alt={course.title} />
                      <div className="overlay">
                        <button className="preview-btn">Watch Demo</button>
                      </div>
                    </div>
                    <div className="card-details">
                      <div className="card-header-row">
                        <span className="rating-badge">{course.rating}</span>
                        <span className="lang-badge">🗣️ {course.language}</span>
                      </div>
                      <h3>{course.title}</h3>
                      <p className="instructor">👨‍🏫 {course.instructor}</p>
                      <div className="card-features">
                        <span>⏱️ {course.duration}</span>
                        <span>📹 Live/Rec</span>
                      </div>
                      <div className="meta-info">
                        <span className="price">{course.price}</span>
                        <button className="enroll-btn">Enroll</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <h3>No courses found matching "{searchTerm}"</h3>
                  <button onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}>Clear Filters</button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="testimonials-section">
          <h2 className="section-title">Success Stories</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  {/* UPDATED TO USE IMG TAG */}
                  <img src={review.image} alt={review.name} className="avatar" />
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.rank}</span>
                  </div>
                </div>
                <p>"{review.text}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
    </>
    
  );
};

export default OnlineClasses;