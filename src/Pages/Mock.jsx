import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../CSS/Mock.css";
import "../CSS/Nav.css";
import {
  FaClock,
  FaQuestionCircle,
  FaTrophy,
  FaCheckCircle,
  FaLock,
  FaPlay,
  FaFilter,
  FaSearch,
  FaLanguage,
  FaChartLine,
  FaSort,
  FaStar,
  FaRegBell,
} from "react-icons/fa";

const Mock = () => {
  const testsData = useMemo(
    () => [
      {
        id: 1,
        title: "Agri GATE 2026 - All India Open Mock",
        category: "Full Mock",
        status: "Live",
        difficulty: "Hard",
        language: "English",
        price: "Free",
        questions: 65,
        marks: 100,
        duration: "180 Min",
        attempts: "12.5k Students",
        syllabus: "Complete Syllabus (Engineering + General Aptitude)",
        topic: "Full Mock",
        featured: true,
      },
      {
        id: 2,
        title: "Farm Machinery - Topic Wise Test",
        category: "Subject Wise",
        status: "Attempted",
        difficulty: "Medium",
        language: "Eng/Hindi",
        price: "Premium",
        questions: 30,
        marks: 50,
        duration: "60 Min",
        attempts: "You Scored: 42/50",
        syllabus: "Tillage, Sowing, and Harvesting Equipment",
        topic: "Farm Machinery",
        featured: true,
      },
      {
        id: 3,
        title: "Soil Science & Water Conservation",
        category: "Subject Wise",
        status: "Upcoming",
        difficulty: "Medium",
        language: "English",
        price: "Free",
        questions: 45,
        marks: 75,
        duration: "90 Min",
        attempts: "Starts: 15 Jan, 10:00 AM",
        syllabus: "Soil Mechanics, Erosion Control, Watershed Management",
        topic: "Soil & Water",
        featured: true,
      },
      {
        id: 4,
        title: "General Aptitude Booster",
        category: "Aptitude",
        status: "Live",
        difficulty: "Easy",
        language: "English",
        price: "Free",
        questions: 20,
        marks: 30,
        duration: "45 Min",
        attempts: "5.2k Students",
        syllabus: "Numerical Ability and Verbal Reasoning",
        topic: "Aptitude",
        featured: false,
      },
      {
        id: 5,
        title: "Thermodynamics & Heat Engine",
        category: "Subject Wise",
        status: "Locked",
        difficulty: "Hard",
        language: "English",
        price: "Premium",
        questions: 40,
        marks: 60,
        duration: "80 Min",
        attempts: "Unlock to Access",
        syllabus: "Laws of Thermodynamics, Cycles, and Heat Transfer",
        topic: "Thermodynamics",
        featured: false,
      },
      {
        id: 6,
        title: "Jagat Scholarship Test 2026",
        category: "Scholarship",
        status: "Live",
        difficulty: "Hard",
        language: "Eng/Hindi",
        price: "Free",
        questions: 50,
        marks: 100,
        duration: "120 Min",
        attempts: "8.9k Students",
        syllabus: "General Agriculture & Basic Engineering",
        topic: "Scholarship",
        featured: true,
      },
      {
        id: 7,
        title: "Irrigation Engineering - Level 1",
        category: "Subject Wise",
        status: "Live",
        difficulty: "Easy",
        language: "English",
        price: "Premium",
        questions: 25,
        marks: 25,
        duration: "40 Min",
        attempts: "1.1k Students",
        syllabus: "Canal Design, Crop Water Requirement",
        topic: "Irrigation",
        featured: false,
      },
      {
        id: 8,
        title: "Fluid Mechanics Advanced",
        category: "Subject Wise",
        status: "Locked",
        difficulty: "Hard",
        language: "English",
        price: "Premium",
        questions: 35,
        marks: 50,
        duration: "70 Min",
        attempts: "Unlock to Access",
        syllabus: "Fluid Kinematics, Dynamics, and Pumps",
        topic: "Fluid Mechanics",
        featured: true,
      },
    ],
    []
  );

  const [filter, setFilter] = useState("All");
  const [topic, setTopic] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");

  const isPremium = (t) => t.price === "Premium";

  const difficultyScore = (d) => (d === "Easy" ? 1 : d === "Medium" ? 2 : 3);
  const statusScore = (s) => (s === "Live" ? 3 : s === "Upcoming" ? 2 : s === "Attempted" ? 1 : 0);

  const getDifficultyColor = (level) => {
    if (level === "Easy") return "var(--success)";
    if (level === "Medium") return "var(--warning)";
    return "var(--danger)";
  };

  const filters = useMemo(() => ["All", "Full Mock", "Subject Wise", "Aptitude", "Scholarship", "Free", "Premium"], []);

  const topicPills = useMemo(() => {
    const set = new Set(testsData.map((t) => t.topic).filter(Boolean));
    return ["All Topics", ...Array.from(set)];
  }, [testsData]);

  const tracks = useMemo(
    () => [
      { id: "m1", title: "Start with Full Mock", desc: "All syllabus mock + real exam feel.", topic: "Full Mock" },
      { id: "m2", title: "Topic-wise Practice", desc: "Subject-wise tests for weak areas.", filter: "Subject Wise" },
      { id: "m3", title: "Aptitude Booster", desc: "Easy marks section practice.", filter: "Aptitude" },
      { id: "m4", title: "Free Tests", desc: "Only free tests, no premium.", filter: "Free" },
    ],
    []
  );

  const featured = useMemo(() => testsData.filter((t) => t.featured).slice(0, 6), [testsData]);
  const liveTests = useMemo(() => testsData.filter((t) => t.status === "Live"), [testsData]);
  const upcomingTests = useMemo(() => testsData.filter((t) => t.status === "Upcoming"), [testsData]);

  const topicGroups = useMemo(() => {
    const map = new Map();
    testsData.forEach((t) => {
      const key = t.topic || "Other";
      map.set(key, [...(map.get(key) || []), t]);
    });
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [testsData]);

  const filteredTests = useMemo(() => {
    let results = [...testsData];

    // filter category/price
    if (filter !== "All") {
      results = results.filter((test) => {
        if (filter === "Free") return test.price === "Free";
        if (filter === "Premium") return test.price === "Premium";
        return test.category === filter;
      });
    }

    if (topic !== "All Topics") results = results.filter((t) => t.topic === topic);

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.syllabus.toLowerCase().includes(q) ||
          (t.topic || "").toLowerCase().includes(q)
      );
    }

    // sort
    if (sortBy === "Recommended") {
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === "Live first") {
      results.sort((a, b) => statusScore(b.status) - statusScore(a.status));
    } else if (sortBy === "Difficulty") {
      results.sort((a, b) => difficultyScore(b.difficulty) - difficultyScore(a.difficulty));
    } else if (sortBy === "Premium first") {
      results.sort((a, b) => (isPremium(b) ? 1 : 0) - (isPremium(a) ? 1 : 0));
    }

    return results;
  }, [testsData, filter, topic, searchTerm, sortBy]);

  const clearAll = () => {
    setFilter("All");
    setTopic("All Topics");
    setSearchTerm("");
    setSortBy("Recommended");
  };

  // reveal on scroll (IntersectionObserver) [web:34]
  const observerRef = useRef(null);
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
  }, [filteredTests.length]);

  return (
    <div className="page-container">
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="mock-page">
        {/* HERO */}
        <section className="mock-hero">
          <div className="hero-overlay" />
          <div className="hero-content hidden">
            <span className="hero-pill">📝 Test Series</span>
            <h1>Test Series & Mock Exams</h1>
            <p>Practice with India's trusted Agri GATE platform. Real-time analysis and All India Rank.</p>

            <div className="hero-stats">
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span>15+ Toppers</span>
              </div>
              <div className="stat-item">
                <FaCheckCircle className="stat-icon" />
                <span>Error Free</span>
              </div>
              <div className="stat-item">
                <FaLanguage className="stat-icon" />
                <span>Eng & Hindi</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRACKS */}
        <section className="container tracks-section">
          <div className="section-head hidden">
            <h2>Practice Tracks</h2>
            <p>One tap = smart filtering.</p>
          </div>

          <div className="tracks-grid">
            {tracks.map((t) => (
              <button
                key={t.id}
                type="button"
                className="track-card hidden"
                onClick={() => {
                  if (t.topic) setTopic(t.topic);
                  if (t.filter) setFilter(t.filter);
                  window.scrollTo({ top: 740, behavior: "smooth" });
                }}
              >
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <span className="track-cta">Apply filter →</span>
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="container featured-section">
          <div className="section-head hidden">
            <h2>Featured Tests</h2>
            <p>Top picks for fast improvement.</p>
          </div>

          <div className="featured-grid">
            {featured.map((t) => (
              <button
                key={t.id}
                type="button"
                className="featured-card hidden"
                onClick={() => {
                  setSearchTerm(t.title);
                  window.scrollTo({ top: 740, behavior: "smooth" });
                }}
              >
                <div className="featured-left">
                  <div className="featured-top">
                    <FaStar className="star" />
                    <span className="featured-tag">{t.topic}</span>
                  </div>
                  <h3>{t.title}</h3>
                  <p>
                    {t.category} • {t.status} • {t.price}
                  </p>
                </div>
                <div className="featured-right">
                  <span className={`price-pill ${t.price === "Premium" ? "premium" : "free"}`}>{t.price}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* LIVE + UPCOMING */}
        <section className="container duo-section">
          <div className="duo-grid">
            <div className="duo-card hidden">
              <div className="duo-head">
                <h3>Live Now</h3>
                <span className="duo-count">{liveTests.length} tests</span>
              </div>
              <div className="duo-list">
                {liveTests.slice(0, 4).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="duo-link"
                    onClick={() => {
                      setSearchTerm(t.title);
                      window.scrollTo({ top: 740, behavior: "smooth" });
                    }}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="duo-card hidden">
              <div className="duo-head">
                <h3>Upcoming</h3>
                <span className="duo-count">{upcomingTests.length} tests</span>
              </div>
              <div className="duo-list">
                {upcomingTests.slice(0, 4).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="duo-link"
                    onClick={() => {
                      setSearchTerm(t.title);
                      window.scrollTo({ top: 740, behavior: "smooth" });
                    }}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TOPIC COLLECTIONS */}
        <section className="container collections-section">
          <div className="section-head hidden">
            <h2>Topic Collections</h2>
            <p>Choose a topic and see all tests in it.</p>
          </div>

          <div className="collections-grid">
            {topicGroups.slice(0, 8).map(([topicName, items]) => (
              <div className="collection-card hidden" key={topicName}>
                <div className="collection-head">
                  <h3>{topicName}</h3>
                  <span className="collection-count">{items.length} tests</span>
                </div>

                <ul className="collection-list">
                  {items.slice(0, 3).map((x) => (
                    <li key={x.id}>
                      <button
                        type="button"
                        className="collection-link"
                        onClick={() => {
                          setTopic(topicName);
                          setSearchTerm(x.title);
                          window.scrollTo({ top: 740, behavior: "smooth" });
                        }}
                      >
                        {x.title}
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="collection-btn"
                  onClick={() => {
                    setTopic(topicName);
                    setSearchTerm("");
                    window.scrollTo({ top: 740, behavior: "smooth" });
                  }}
                >
                  View all in {topicName}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* TOPIC PILLS */}
        <section className="container topic-section">
          <div className="section-head hidden">
            <h2>Explore by Topic</h2>
            <p>Tap a topic to filter instantly.</p>
          </div>

          <div className="topic-pills">
            {topicPills.map((t) => (
              <button
                key={t}
                type="button"
                className={`topic-pill hidden ${topic === t ? "active" : ""}`}
                onClick={() => setTopic(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* CONTROLS */}
        <div className="mock-controls container sticky-controls">
          <div className="search-wrapper hidden">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search tests (e.g., Soil, Full Mock, Aptitude)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="controls-row hidden">
            <div className="filter-tabs">
              {filters.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {filter === cat ? <FaFilter size={12} className="mini-ico" /> : null}
                  {cat}
                </button>
              ))}
            </div>

            <div className="sort-box">
              <span className="sort-label">
                <FaSort /> Sort
              </span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Recommended</option>
                <option>Live first</option>
                <option>Difficulty</option>
                <option>Premium first</option>
              </select>
            </div>
          </div>
        </div>

        {/* GRID */}
        <section className="tests-container container">
          <div className="results-header hidden">
            <span>
              Showing <strong>{filteredTests.length}</strong> Tests
            </span>
            <button type="button" className="reset-btn small" onClick={clearAll}>
              Reset filters
            </button>
          </div>

          {filteredTests.length > 0 ? (
            <div className="tests-grid">
              {filteredTests.map((test) => (
                <div key={test.id} className={`test-card hidden ${test.price === "Premium" ? "premium-border" : ""}`}>
                  {/* Badges Row */}
                  <div className="card-badges">
                    <span className={`status-badge ${test.status.toLowerCase()}`}>
                      {test.status === "Live" ? <span className="dot live" /> : null}
                      {test.status}
                    </span>

                    <span className="difficulty-badge" style={{ color: getDifficultyColor(test.difficulty) }}>
                      <FaChartLine /> {test.difficulty}
                    </span>

                    <span className={`price-badge ${test.price.toLowerCase()}`}>{test.price}</span>
                  </div>

                  {/* Content */}
                  <div className="test-content">
                    <span className="category-tag">{test.category}</span>
                    <h3>{test.title}</h3>
                    <p className="syllabus">{test.syllabus}</p>

                    <div className="meta-grid">
                      <div className="meta-item"><FaQuestionCircle /> {test.questions} Qs</div>
                      <div className="meta-item"><FaTrophy /> {test.marks} Marks</div>
                      <div className="meta-item"><FaClock /> {test.duration}</div>
                      <div className="meta-item"><FaLanguage /> {test.language}</div>
                    </div>
                  </div>

                  {/* Footer / Action */}
                  <div className="test-footer">
                    <div className="attempts-info">
                      {test.status === "Attempted" ? (
                        <span className="score-text">{test.attempts}</span>
                      ) : (
                        <span>{test.attempts}</span>
                      )}
                    </div>

                    {test.status === "Locked" ? (
                      <button type="button" className="action-btn locked">
                        Unlock <FaLock />
                      </button>
                    ) : test.status === "Attempted" ? (
                      <button type="button" className="action-btn result">
                        View Result <FaChartLine />
                      </button>
                    ) : test.status === "Upcoming" ? (
                      <button type="button" className="action-btn upcoming">
                        Notify <FaRegBell />
                      </button>
                    ) : (
                      <button type="button" className="action-btn start">
                        Attempt Now <FaPlay />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results hidden">
              <h3>No tests found.</h3>
              <p>Try clearing your search or filters.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Mock;
