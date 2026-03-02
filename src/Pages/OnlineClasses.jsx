import React, { useEffect, useMemo, useRef, useState } from "react";
import "../CSS/OnlineClasses.css";
import Navbar from "../Components/Nav";

const OnlineClasses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const observerRef = useRef(null);

  const allCourses = useMemo(
    () => [
      {
        id: 1,
        title: "GATE 2026 - Agri Engineering (Premium)",
        instructor: "Dr. R.K. Sharma",
        duration: "12 Months",
        price: "₹18,000",
        rating: "4.9 ⭐",
        language: "Hinglish",
        image:
          "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=400",
        category: "Live Batch",
        type: "Full Course",
        topic: "GATE (AG)",
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
        type: "Subject Wise",
        topic: "Farm Machinery",
      },
      {
        id: 3,
        title: "Soil & Water Conservation",
        instructor: "Dr. P. Patel",
        duration: "4 Months",
        price: "₹6,000",
        rating: "4.8 ⭐",
        language: "English",
        image:
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400",
        category: "Best Seller",
        type: "Subject Wise",
        topic: "Soil & Water",
      },
      {
        id: 4,
        title: "Food Process Engineering",
        instructor: "Prof. S. Gupta",
        duration: "5 Months",
        price: "₹7,200",
        rating: "4.6 ⭐",
        language: "Hinglish",
        image:
          "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400",
        category: "New",
        type: "Subject Wise",
        topic: "Food Process",
      },
      {
        id: 5,
        title: "General Agriculture for GATE",
        instructor: "Dr. A. Singh",
        duration: "3 Months",
        price: "₹4,500",
        rating: "4.5 ⭐",
        language: "Hindi",
        image:
          "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS_BLOGS/666a4a86-5fcd-4259-b14b-412d6bfc3104.jpg",
        category: "Crash Course",
        type: "Crash Course",
        topic: "General Agriculture",
      },
      {
        id: 6,
        title: "GATE 2027 Foundation Batch",
        instructor: "Dr. R.K. Sharma & Team",
        duration: "24 Months",
        price: "₹25,000",
        rating: "5.0 ⭐",
        language: "Hinglish",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
        category: "Foundation",
        type: "Full Course",
        topic: "Foundation",
      },
      {
        id: 7,
        title: "Renewable Energy Sources",
        instructor: "Eng. M. Khan",
        duration: "2 Months",
        price: "₹3,500",
        rating: "4.4 ⭐",
        language: "English",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400",
        category: "Recorded",
        type: "Subject Wise",
        topic: "Renewable Energy",
      },
      {
        id: 8,
        title: "All India Mock Test Series",
        instructor: "Jagat Edu Team",
        duration: "Exam Till",
        price: "₹999",
        rating: "4.9 ⭐",
        language: "English",
        image:
          "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400",
        category: "Test Series",
        type: "Test Series",
        topic: "Mock Tests",
      },
      {
        id: 9,
        title: "Green Agriculture for GATE",
        instructor: "Dr. A. Singh",
        duration: "3 Months",
        price: "₹9,500",
        rating: "4.5 ⭐",
        language: "Hindi",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.z1L0mnxcnULEzbpxJAVf6QHaEK?w=1200&h=675&rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "Crash Course",
        type: "Crash Course",
        topic: "Green Agriculture",
      },
    ],
    []
  );

  const reviews = useMemo(
    () => [
      {
        id: 1,
        name: "Rahul Verma",
        rank: "AIR 12 (GATE '24)",
        text:
          "The Farm Machinery lectures by Anjali Ma'am were a game changer. Cleared all my concepts!",
        image:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
      },
      {
        id: 2,
        name: "Sneha Gupta",
        rank: "AIR 45 (GATE '24)",
        text:
          "Jagat Education's test series is exactly like the real exam. Highly recommended.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      },
      {
        id: 3,
        name: "Amit Kumar",
        rank: "Student",
        text:
          "Affordable and high quality. The doubt clearing sessions are very helpful.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Can I watch the recorded videos multiple times?",
        a: "Yes! You get unlimited views on all recorded lectures until your course validity expires.",
      },
      {
        q: "Is the study material provided in hard copy?",
        a: "We provide downloadable PDF notes. Hard copies can be ordered separately for select courses.",
      },
      {
        q: "Do you provide doubt solving?",
        a: "Yes, all live batches come with a dedicated Telegram group for 24/7 doubt resolution.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes, for courses above ₹10,000, we offer a 2-part EMI option. Contact support for details.",
      },
    ],
    []
  );

  const typeTabs = useMemo(
    () => ["All", "Full Course", "Subject Wise", "Crash Course", "Test Series"],
    []
  );

  const topicPills = useMemo(() => {
    const set = new Set(allCourses.map((c) => c.topic).filter(Boolean));
    return Array.from(set);
  }, [allCourses]);

  // helpers for sorting
  const parsePrice = (p) => Number(String(p).replace(/[^\d]/g, "")) || 0;
  const parseRating = (r) => Number(String(r).replace(/[^\d.]/g, "")) || 0;
  const parseDurationMonths = (d) => {
    const s = String(d).toLowerCase();
    if (s.includes("exam")) return 999;
    const m = s.match(/(\d+)\s*month/);
    return m ? Number(m[1]) : 0;
  };

  // init load
  useEffect(() => {
    const t = setTimeout(() => {
      setCourses(allCourses);
      setLoading(false);
    }, 650);
    return () => clearTimeout(t);
  }, [allCourses]);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(q) ||
          course.instructor.toLowerCase().includes(q) ||
          (course.topic || "").toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((course) => course.type === selectedCategory);
    }

    if (sortBy === "Rating") {
      result.sort((a, b) => parseRating(b.rating) - parseRating(a.rating));
    } else if (sortBy === "Price: Low to High") {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "Duration") {
      result.sort((a, b) => parseDurationMonths(a.duration) - parseDurationMonths(b.duration));
    }

    return result;
  }, [courses, searchTerm, selectedCategory, sortBy]);

  // reveal on scroll (IntersectionObserver) [web:34]
  useEffect(() => {
    const els = document.querySelectorAll(".hidden");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("show"));
      return;
    }
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, [loading, filteredCourses.length]);

  const clearAll = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("Recommended");
  };

  return (
    <div className="page-container online-page">
      <Navbar />

      <div className="online-classes-page">
        <section className="page-hero">
          <div className="hero-content hidden">
            <h1>Online Classes</h1>
            <p>Master Agricultural Engineering with India's Top Educators</p>
            <div className="hero-actions">
              <button className="hero-btn primary" type="button" onClick={() => window.scrollTo({ top: 520, behavior: "smooth" })}>
                Browse Courses
              </button>
              <button className="hero-btn ghost" type="button" onClick={() => document.getElementById("topics")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Topics
              </button>
            </div>
          </div>
        </section>

        <section className="stats-bar hidden">
          <div className="stat-item">
            <h2>{loading ? "—" : `${courses.length}`}</h2>
            <p>Total Courses</p>
          </div>
          <div className="stat-item">
            <h2>10k+</h2>
            <p>Students Taught</p>
          </div>
          <div className="stat-item">
            <h2>4.8/5</h2>
            <p>Average Rating</p>
          </div>
        </section>

        <div className="container">
          {/* Topics */}
          <section id="topics" className="topic-section">
            <div className="section-head hidden">
              <h2>Explore by Topic</h2>
              <p>Tap a topic to auto-search courses.</p>
            </div>

            <div className="topic-pills">
              {topicPills.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`topic-pill hidden ${searchTerm === t ? "active" : ""}`}
                  onClick={() => setSearchTerm(t)}
                >
                  {t}
                </button>
              ))}
              <button type="button" className="topic-pill hidden" onClick={() => setSearchTerm("")}>
                Clear
              </button>
            </div>
          </section>

          {/* Sticky Controls */}
          <div className="sticky-wrapper" style={{ top: 0 }}>
            <div className="controls-bar hidden">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search courses / instructor / topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="right-controls">
                <div className="filter-tabs">
                  {typeTabs.map((cat) => (
                    <button
                      key={cat}
                      className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat)}
                      type="button"
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="sort-box">
                  <label htmlFor="sortBy">Sort</label>
                  <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option>Recommended</option>
                    <option>Rating</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration</option>
                  </select>
                </div>
              </div>

              <div className="results-row">
                <div className="results-text">
                  Showing <strong>{filteredCourses.length}</strong> of <strong>{courses.length}</strong>
                </div>
                <button type="button" className="clear-btn" onClick={clearAll}>
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {/* Courses */}
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner" />
              <p>Loading Batches...</p>
            </div>
          ) : (
            <section className="courses-section">
              <div className="section-head hidden">
                <h2>All Courses</h2>
                <p>Search, filter and enroll in minutes.</p>
              </div>

              <div className="courses-grid">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div key={course.id} className="course-card hidden">
                      <div className="card-image">
                        <span className={`course-tag ${course.category.replaceAll(" ", "-").toLowerCase()}`}>
                          {course.category}
                        </span>

                        <img src={course.image} alt={course.title} loading="lazy" />

                        <div className="overlay">
                          <button type="button" className="preview-btn">
                            Watch Demo
                          </button>
                        </div>
                      </div>

                      <div className="card-details">
                        <div className="card-header-row">
                          <span className="rating-badge">{course.rating}</span>
                          <span className="lang-badge">🗣️ {course.language}</span>
                          {course.topic ? <span className="topic-badge">#{course.topic}</span> : null}
                        </div>

                        <h3>{course.title}</h3>
                        <p className="instructor">👨‍🏫 {course.instructor}</p>

                        <div className="card-features">
                          <span>⏱️ {course.duration}</span>
                          <span>📦 {course.type}</span>
                        </div>

                        <div className="meta-info">
                          <span className="price">{course.price}</span>
                          <button type="button" className="enroll-btn">
                            Enroll
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results hidden">
                    <h3>No courses found</h3>
                    <p>Try clearing filters or searching a different keyword.</p>
                    <button type="button" onClick={clearAll}>
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Reviews */}
          <section className="testimonials-section">
            <div className="section-head hidden">
              <h2>Success Stories</h2>
              <p>Real feedback from students.</p>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <div key={review.id} className="review-card hidden">
                  <div className="review-header">
                    <img src={review.image} alt={review.name} className="avatar" loading="lazy" />
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

          {/* FAQ */}
          <section className="faq-section">
            <div className="section-head hidden">
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers before you enroll.</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item hidden ${activeFaq === index ? "active" : ""}`}>
                  <button type="button" className="faq-question" onClick={() => toggleFaq(index)}>
                    <h3>{faq.q}</h3>
                    <span className="toggle-icon">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
