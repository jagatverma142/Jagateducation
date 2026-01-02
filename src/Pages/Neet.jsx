import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Nav'; 
import Footer from '../Components/Footer'; 
import '../CSS/NEET.css';

// --- ADVANCED NEET DATA ---
const neetCourses = [
  {
    id: 1,
    title: "NEET 2027: YAKEEN Batch",
    subtitle: "Complete Class 11 Foundation (PCB)",
    category: "Class 11",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    faculty: "Dr. A.K. Gupta & Team",
    language: "Hinglish",
    batchStart: "20th Aug",
    originalPrice: 40000,
    price: 29999,
    rating: 4.9,
    seatsLeft: 80,
    features: ["NCERT Line-by-Line", "Biology Visualization", "Hardcopy Modules"],
    badge: "Bestseller",
    color: "#10b981" // Emerald
  },
  {
    id: 2,
    title: "NEET 2026: TARGET Batch",
    subtitle: "Class 12 Board + NEET Prep",
    category: "Class 12",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80",
    faculty: "Top AIIMS Alumni",
    language: "English",
    batchStart: "10th Sept",
    originalPrice: 35000,
    price: 26999,
    rating: 4.8,
    seatsLeft: 25,
    features: ["Daily DPPs", "Assertion-Reason Special", "24/7 Doubt Engine"],
    badge: "Closing Soon",
    color: "#0ea5e9" // Sky Blue
  },
  {
    id: 3,
    title: "UMMEED 3.0: Dropper's Batch",
    subtitle: "Dedicated Gap Year Course",
    category: "Dropper",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
    faculty: "Expert Faculty",
    language: "Hinglish",
    batchStart: "Started (Recorded Avail)",
    originalPrice: 22000,
    price: 17500,
    rating: 4.7,
    seatsLeft: 150,
    features: ["Rank Booster Strategy", "15 Years PYQs", "Errorless Chemistry"],
    badge: "Trending",
    color: "#f59e0b" // Amber
  },
  {
    id: 4,
    title: "Zoology & Botany Special",
    subtitle: "Subject Mastery Module",
    category: "Biology Special",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1000&q=80",
    faculty: "Dr. Ritu Ma'am",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 5000,
    price: 2499,
    rating: 5.0,
    seatsLeft: 999,
    features: ["3D Anatomy Models", "Diagram Practice", "Short Tricks"],
    badge: "High Yield",
    color: "#8b5cf6" // Violet
  },
  {
    id: 5,
    title: "All India NEET Test Series",
    subtitle: "NCERT Based Mock Tests",
    category: "Test Series",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80",
    faculty: "AI Analytics",
    language: "Eng/Hin",
    batchStart: "Every Sunday",
    originalPrice: 4000,
    price: 1299,
    rating: 4.6,
    seatsLeft: 999,
    features: ["NTA Pattern", "Detailed Analysis", "Predictive Rank"],
    badge: "Popular",
    color: "#ef4444" // Red
  },
  {
    id: 6,
    title: "Physics for Neet (Weak Students)",
    subtitle: "Basic to Advanced Bridge",
    category: "Subject Module",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1000&q=80",
    faculty: "Phy Experts",
    language: "Hinglish",
    batchStart: "Rolling",
    originalPrice: 3000,
    price: 1499,
    rating: 4.8,
    seatsLeft: 40,
    features: ["Formula Sheets", "Numerical Solving", "Concept Clarity"],
    badge: "Recommended",
    color: "#ec4899" // Pink
  },
];

const toppers = [
  { name: "Priya M.", rank: "AIR 05", exam: "NEET 2024", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Rahul V.", rank: "AIR 12", exam: "NEET 2024", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ananya S.", rank: "AIR 28", exam: "NEET 2023", img: "https://randomuser.me/api/portraits/women/33.jpg" },
];

const NEET = () => {
  const [courses, setCourses] = useState(neetCourses);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dynamic Categories
  const categories = ["All", "Class 11", "Class 12", "Dropper", "Biology Special", "Test Series"];

  useEffect(() => {
    let temp = [...neetCourses];
    if (filter !== "All") temp = temp.filter(c => c.category === filter);
    if (searchTerm) temp = temp.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setCourses(temp);
  }, [filter, searchTerm]);

  return (
    <>
      <Navbar />
      
      {/* 1. TOP TICKER */}
      <div className="neet-ticker">
        <div className="ticker-content">
          <span>🩺 <strong>Medical Alert:</strong> AIIMS Delhi Seminar Registration Open! | </span>
          <span>🌿 <strong>New Series:</strong> "NCERT Nichod" - Botany Special starting this Friday!</span>
        </div>
      </div>

      <div className="neet-wrapper">
        
        {/* 2. HERO SECTION (Bio Theme) */}
        <section className="neet-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area">
              <span className="pill-badge">🧬 Future Doctors</span>
              <h1>Your Journey to <span className="gradient-text">AIIMS</span> Starts Here.</h1>
              <p>Master NCERT with India's best medical faculty. Concept clarity from DNA to Diagnosis.</p>
              
              <div className="hero-btns">
                <button className="btn-primary-glow">Start Learning</button>
                <button className="btn-secondary-glass"><i className="fas fa-play"></i> Biology Demo</button>
              </div>

              <div className="trust-badges">
                <div><i className="fas fa-user-md"></i> Top Doctors Faculty</div>
                <div><i className="fas fa-book-medical"></i> NCERT Centric</div>
                <div><i className="fas fa-microscope"></i> Visual Learning</div>
              </div>
            </div>

            <div className="hero-visual-area">
              {/* Abstract Floating Icons Visual */}
              <div className="floating-card c1">
                <i className="fas fa-dna"></i>
                <span>Genetics</span>
              </div>
              <div className="floating-card c2">
                <i className="fas fa-stethoscope"></i>
                <span>Clinical</span>
              </div>
              <div className="floating-card c3">
                <i className="fas fa-leaf"></i>
                <span>Botany</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TOPPERS STRIP */}
        <section className="toppers-strip">
          <h2>🏆 Future Doctors Hall of Fame</h2>
          <div className="toppers-grid">
            {toppers.map((t, i) => (
              <div className="topper-card" key={i}>
                <img src={t.img} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span className="rank">{t.rank}</span>
                  <small>{t.exam}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MAIN CONTENT AREA */}
        <section className="content-container">
          
          {/* Controls */}
          <div className="controls-header">
            <div className="search-glass">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search Batches (e.g. Zoology, Dropper...)" 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-pills">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={filter === cat ? 'active' : ''}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="neet-grid">
            {courses.length > 0 ? (
              courses.map(course => (
                <div className="tech-card" key={course.id}>
                  
                  {/* Card Badge */}
                  {course.badge && <div className={`card-badge ${course.badge === 'Closing Soon' ? 'urgent' : ''}`}>{course.badge}</div>}

                  <div className="tech-card-img">
                    <img src={course.image} alt={course.title} />
                    <div className="img-overlay">
                      <button><i className="fas fa-play-circle"></i> Preview</button>
                    </div>
                  </div>

                  <div className="tech-card-body">
                    <div className="body-top">
                      <span className="category-label">{course.category}</span>
                      <span className="rating-glass">⭐ {course.rating}</span>
                    </div>

                    <h3>{course.title}</h3>
                    <p className="subtitle">{course.subtitle}</p>

                    <div className="meta-info">
                      <span><i className="fas fa-language"></i> {course.language}</span>
                      <span><i className="far fa-calendar-alt"></i> Starts: {course.batchStart}</span>
                    </div>

                    <div className="divider-neon"></div>

                    <ul className="tech-features">
                      {course.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <div className="tech-pricing">
                      <div>
                        <span className="old-p">₹{course.originalPrice.toLocaleString()}</span>
                        <div className="new-p-box">
                          <span className="new-p">₹{course.price.toLocaleString()}</span>
                          {course.seatsLeft < 50 && <span className="seats-alert">Only {course.seatsLeft} seats left!</span>}
                        </div>
                      </div>
                      <button className="tech-btn" style={{ '--accent-color': course.color }}>
                        Enroll <i className="fas fa-user-md"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
               <div className="no-result-glass">
                 <h3>No Batches Found</h3>
                 <p>Try resetting your filters.</p>
               </div>
            )}
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default NEET;