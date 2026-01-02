import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Nav'; 
import Footer from '../Components/Footer'; 
import '../CSS/Gate.css';

// --- ADVANCED GATE (AG) DATA ---
const gateCourses = [
  {
    id: 1,
    title: "GATE (AG) 2026: SANKALP Batch",
    subtitle: "Premium Live Full Course",
    category: "Live Class",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd47f26?auto=format&fit=crop&w=1000&q=80",
    faculty: "Er. Rakesh & Team",
    language: "Hinglish",
    batchStart: "12th Aug",
    originalPrice: 35000,
    price: 28999,
    rating: 4.9,
    seatsLeft: 35,
    features: ["Daily Live Classes", "Hardcopy Study Material", "1-on-1 Mentorship"],
    badge: "Bestseller",
    color: "#e67e22" // Orange
  },
  {
    id: 2,
    title: "Farm Machinery & Power",
    subtitle: "Subject Special Module",
    category: "Subject Module",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d9?auto=format&fit=crop&w=1000&q=80",
    faculty: "Dr. Singh (IIT Kgp)",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 5000,
    price: 2499,
    rating: 4.8,
    seatsLeft: 999,
    features: ["3D Engine Animations", "Numerical Solving", "Topic-wise Tests"],
    badge: "High Yield",
    color: "#d35400" // Dark Orange
  },
  {
    id: 3,
    title: "GATE (AG) 2026: Recorded",
    subtitle: "Self-Paced Video Course",
    category: "Recorded",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    faculty: "Top Experts",
    language: "Hinglish",
    batchStart: "Start Anytime",
    originalPrice: 28000,
    price: 21999,
    rating: 4.6,
    seatsLeft: 999,
    features: ["Full Syllabus Covered", "Doubt Clearing Sessions", "PDF Notes"],
    badge: "Flexible",
    color: "#27ae60" // Green
  },
  {
    id: 4,
    title: "Soil & Water Conservation",
    subtitle: "Advanced Numericals Module",
    category: "Subject Module",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
    faculty: "Er. Amit Kumar",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 4500,
    price: 1999,
    rating: 4.7,
    seatsLeft: 120,
    features: ["Watershed Management", "Hydrology Deep Dive", "Formula Sheets"],
    badge: null,
    color: "#16a085" // Teal
  },
  {
    id: 5,
    title: "All India Mock Test (AG)",
    subtitle: "Real GATE Pattern CBT",
    category: "Test Series",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    faculty: "AI Analytics",
    language: "English",
    batchStart: "Every Sunday",
    originalPrice: 4000,
    price: 1499,
    rating: 4.5,
    seatsLeft: 999,
    features: ["60+ Mock Tests", "Virtual Calculator", "AIR Prediction"],
    badge: "Popular",
    color: "#2980b9" // Blue
  },
  {
    id: 6,
    title: "General Aptitude & Math",
    subtitle: "Score Booster Pack (28 Marks)",
    category: "Study Material",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
    faculty: "Math Experts",
    language: "Hinglish",
    batchStart: "Instant Access",
    originalPrice: 6000,
    price: 2999,
    rating: 4.9,
    seatsLeft: 50,
    features: ["Short Tricks", "PYQ Solutions", "Practice Sheets"],
    badge: "Must Have",
    color: "#8e44ad" // Purple
  },
];

const toppers = [
  { name: "Vikram S.", rank: "AIR 01", exam: "GATE AG 2024", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Pooja R.", rank: "AIR 03", exam: "GATE AG 2024", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Amit K.", rank: "AIR 07", exam: "GATE AG 2023", img: "https://randomuser.me/api/portraits/men/12.jpg" },
];

const Gate = () => {
  const [courses, setCourses] = useState(gateCourses);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dynamic Categories
  const categories = ["All", "Live Class", "Recorded", "Subject Module", "Test Series", "Study Material"];

  useEffect(() => {
    let temp = [...gateCourses];
    if (filter !== "All") temp = temp.filter(c => c.category === filter);
    if (searchTerm) temp = temp.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setCourses(temp);
  }, [filter, searchTerm]);

  return (
    <>
      <Navbar />
      
      {/* 1. TOP TICKER */}
      <div className="gate-ticker">
        <div className="ticker-content">
          <span>🚜 <strong>New Batch:</strong> "SANKALP 2.0" for GATE 2027 Registrations Open! | </span>
          <span>📢 <strong>Result Update:</strong> 45+ Selections in CIAE & IIT Kharagpur this year!</span>
        </div>
      </div>

      <div className="gate-wrapper">
        
        {/* 2. HERO SECTION (Agri-Tech Theme) */}
        <section className="gate-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area">
              <span className="pill-badge">🌾 Agricultural Engineering</span>
              <h1>Powering India's <span className="gradient-text">Green Revolution</span></h1>
              <p>Join the #1 Platform for GATE AG. From Farm Machinery to Food Processing, master it all.</p>
              
              <div className="hero-btns">
                <button className="btn-primary-glow">View Packages</button>
                <button className="btn-secondary-glass"><i className="fas fa-play"></i> Free Demo</button>
              </div>

              <div className="trust-badges">
                <div><i className="fas fa-certificate"></i> ISO Certified</div>
                <div><i className="fas fa-user-graduate"></i> IITian Mentors</div>
                <div><i className="fas fa-book-reader"></i> Updated Syllabus</div>
              </div>
            </div>

            <div className="hero-visual-area">
              {/* Abstract Floating Icons Visual */}
              <div className="floating-card c1">
                <i className="fas fa-tractor"></i>
                <span>Machinery</span>
              </div>
              <div className="floating-card c2">
                <i className="fas fa-seedling"></i>
                <span>Soil & Water</span>
              </div>
              <div className="floating-card c3">
                <i className="fas fa-cogs"></i>
                <span>Process</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TOPPERS STRIP */}
        <section className="toppers-strip">
          <h2>🏆 Our GATE Toppers</h2>
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
                placeholder="Search Courses (e.g. Farm Power, Test Series...)" 
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
          <div className="gate-grid">
            {courses.length > 0 ? (
              courses.map(course => (
                <div className="tech-card" key={course.id}>
                  
                  {/* Card Badge */}
                  {course.badge && <div className={`card-badge ${course.badge === 'Bestseller' ? 'hot' : ''}`}>{course.badge}</div>}

                  <div className="tech-card-img">
                    <img src={course.image} alt={course.title} />
                    <div className="img-overlay">
                      <button><i className="fas fa-eye"></i> Explore</button>
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
                      <span><i className="far fa-clock"></i> Starts: {course.batchStart}</span>
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
                          {course.seatsLeft < 100 && <span className="seats-alert">Only {course.seatsLeft} seats left!</span>}
                        </div>
                      </div>
                      <button className="tech-btn" style={{ '--accent-color': course.color }}>
                        Buy Now <i className="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
               <div className="no-result-glass">
                 <h3>No Courses Found</h3>
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

export default Gate;