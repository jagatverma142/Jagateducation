import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Nav'; 
import Footer from '../Components/Footer'; 
import '../CSS/JEE.css';


const jeeCourses = [
  {
    id: 1,
    title: "JEE (Main+Adv) 2027: ARJUNA Batch",
    subtitle: "Complete Class 11 Foundation",
    category: "Class 11",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
    faculty: "H.C. Verma Sir (Guest) & Team",
    language: "Hinglish",
    batchStart: "15th Aug",
    originalPrice: 45000,
    price: 34999,
    rating: 4.9,
    seatsLeft: 45,
    features: ["Physics, Chem, Math (PCM)", "Daily DPPs & Video Sol.", "Hardcopy Modules Sent Home"],
    badge: "Bestseller",
    color: "#00d2ff" 
  },
  {
    id: 2,
    title: "JEE 2026: LAKSHYA Batch",
    subtitle: "Class 12 Board + JEE Prep",
    category: "Class 12",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    faculty: "Kota Top Faculties",
    language: "English",
    batchStart: "1st Sept",
    originalPrice: 38000,
    price: 28999,
    rating: 4.8,
    seatsLeft: 12,
    features: ["NCERT to Advanced Level", "24/7 Doubt Engine", "Board Exam Special"],
    badge: "Closing Soon",
    color: "#3a7bd5" // 
  },
  {
    id: 3,
    title: "PRAYAS 2.0: Dropper's Batch",
    subtitle: "Gap Year Intensive Course",
    category: "Dropper",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    faculty: "Ex-IITians",
    language: "Hinglish",
    batchStart: "Started (Recorded Avail)",
    originalPrice: 25000,
    price: 19500,
    rating: 4.7,
    seatsLeft: 100,
    features: ["Rank Booster Strategy", "15 Years PYQs Solved", "Errorless Physics"],
    badge: "Trending",
    color: "#ff416c" // Red/Pink accent
  },
  {
    id: 4,
    title: "Mathongo: Advanced Calculus",
    subtitle: "Subject Special Module",
    category: "Subject Module",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
    faculty: "NV Sir",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 4000,
    price: 1999,
    rating: 4.9,
    seatsLeft: 999,
    features: ["Visual Graphs", "Challenger Problems", "Limits to Integrals"],
    badge: null,
    color: "#9b59b6" // Purple
  },
  {
    id: 5,
    title: "AITS (All India Test Series) 2026",
    subtitle: "NTA Pattern CBT Mock Tests",
    category: "Test Series",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    faculty: "AI Analytics",
    language: "Eng/Hin",
    batchStart: "Every Sunday",
    originalPrice: 5000,
    price: 1499,
    rating: 4.6,
    seatsLeft: 999,
    features: ["Real Exam Interface", "Detailed Analysis Report", "Predictive Rank"],
    badge: "Popular",
    color: "#2ecc71" // Green
  },
  {
    id: 6,
    title: "Olympiad & KVPY Scholars",
    subtitle: "For Class 9, 10 & 11",
    category: "Foundation",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1000&q=80",
    faculty: "Research Scholars",
    language: "English",
    batchStart: "Rolling",
    originalPrice: 15000,
    price: 8999,
    rating: 5.0,
    seatsLeft: 20,
    features: ["High Order Thinking", "Research Projects", "International Level"],
    badge: "Elite",
    color: "#f39c12" // Gold
  },
];

const toppers = [
  { name: "Aarav S.", rank: "AIR 14", exam: "JEE Adv 2024", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sneha P.", rank: "AIR 45", exam: "JEE Main 2024", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan K.", rank: "AIR 92", exam: "JEE Adv 2023", img: "https://randomuser.me/api/portraits/men/85.jpg" },
];

const JEE = () => {
  const [courses, setCourses] = useState(jeeCourses);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dynamic Categories
  const categories = ["All", "Class 11", "Class 12", "Dropper", "Test Series", "Foundation"];

  useEffect(() => {
    let temp = [...jeeCourses];
    if (filter !== "All") temp = temp.filter(c => c.category === filter);
    if (searchTerm) temp = temp.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setCourses(temp);
  }, [filter, searchTerm]);

  return (
    <>
      <Navbar />
      
      {/* 1. TOP TICKER */}
      <div className="jee-ticker">
        <div className="ticker-content">
          <span>⚡ <strong>Flash Sale:</strong> 50% Scholarship for Top 100 Rankers in JAGAT-SAT Exam! | </span>
          <span>📢 <strong>New Batch:</strong> "ARJUNA 3.0" Starting Next Monday!</span>
        </div>
      </div>

      <div className="jee-wrapper">
        
        {/* 2. HERO SECTION (Tech Theme) */}
        <section className="jee-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area">
              <span className="pill-badge">🚀 Engineering Entrance</span>
              <h1>Crack <span className="gradient-text">IIT-JEE</span> With <br/> Precision & Speed.</h1>
              <p>India's most scientifically designed curriculum by Ex-IITians. We don't just teach Physics; we teach you how to think.</p>
              
              <div className="hero-btns">
                <button className="btn-primary-glow">Explore Batches</button>
                <button className="btn-secondary-glass"><i className="fas fa-play"></i> Watch Demo</button>
              </div>

              <div className="trust-badges">
                <div><i className="fas fa-user-graduate"></i> 10k+ Selections</div>
                <div><i className="fas fa-video"></i> HD Live Classes</div>
                <div><i className="fas fa-brain"></i> AI Analytics</div>
              </div>
            </div>

            <div className="hero-visual-area">
              {/* Abstract Floating Cards Visual */}
              <div className="floating-card c1">
                <i className="fas fa-atom"></i>
                <span>Physics</span>
              </div>
              <div className="floating-card c2">
                <i className="fas fa-flask"></i>
                <span>Chemistry</span>
              </div>
              <div className="floating-card c3">
                <i className="fas fa-square-root-alt"></i>
                <span>Maths</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TOPPERS STRIP */}
        <section className="toppers-strip">
          <h2>🏆 Our Hall of Fame</h2>
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
                placeholder="Find your batch (e.g. Class 11, Dropper...)" 
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
          <div className="jee-grid">
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
                        Enroll <i className="fas fa-bolt"></i>
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

export default JEE;