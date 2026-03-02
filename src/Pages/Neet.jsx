import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../CSS/NEET.css";

// --- ADVANCED NEET DATA ---
const neetCourses = [
  {
    id: 1,
    title: "NEET 2027: YAKEEN Batch",
    subtitle: "Complete Class 11 Foundation (PCB)",
    category: "Class 11",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    faculty: "Dr. A.K. Gupta & Team",
    language: "Hinglish",
    batchStart: "20th Aug",
    originalPrice: 40000,
    price: 29999,
    rating: 4.9,
    seatsLeft: 80,
    features: ["NCERT Line-by-Line", "Biology Visualization", "Hardcopy Modules"],
    badge: "Bestseller",
    color: "#10b981",
    topic: "Biology",
  },
  {
    id: 2,
    title: "NEET 2026: TARGET Batch",
    subtitle: "Class 12 Board + NEET Prep",
    category: "Class 12",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80",
    faculty: "Top AIIMS Alumni",
    language: "English",
    batchStart: "10th Sept",
    originalPrice: 35000,
    price: 26999,
    rating: 4.8,
    seatsLeft: 25,
    features: ["Daily DPPs", "Assertion-Reason Special", "24/7 Doubt Engine"],
    badge: "Closing Soon",
    color: "#0ea5e9",
    topic: "PCB",
  },
  {
    id: 3,
    title: "UMMEED 3.0: Dropper's Batch",
    subtitle: "Dedicated Gap Year Course",
    category: "Dropper",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
    faculty: "Expert Faculty",
    language: "Hinglish",
    batchStart: "Started (Recorded Avail)",
    originalPrice: 22000,
    price: 17500,
    rating: 4.7,
    seatsLeft: 150,
    features: ["Rank Booster Strategy", "15 Years PYQs", "Errorless Chemistry"],
    badge: "Trending",
    color: "#f59e0b",
    topic: "PYQs",
  },
  {
    id: 4,
    title: "Zoology & Botany Special",
    subtitle: "Subject Mastery Module",
    category: "Biology Special",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1000&q=80",
    faculty: "Dr. Ritu Ma'am",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 5000,
    price: 2499,
    rating: 5.0,
    seatsLeft: 999,
    features: ["3D Anatomy Models", "Diagram Practice", "Short Tricks"],
    badge: "High Yield",
    color: "#8b5cf6",
    topic: "Zoology",
  },
  {
    id: 5,
    title: "All India NEET Test Series",
    subtitle: "NCERT Based Mock Tests",
    category: "Test Series",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80",
    faculty: "AI Analytics",
    language: "Eng/Hin",
    batchStart: "Every Sunday",
    originalPrice: 4000,
    price: 1299,
    rating: 4.6,
    seatsLeft: 999,
    features: ["NTA Pattern", "Detailed Analysis", "Predictive Rank"],
    badge: "Popular",
    color: "#ef4444",
    topic: "Mock Tests",
  },
  {
    id: 6,
    title: "Physics for Neet (Weak Students)",
    subtitle: "Basic to Advanced Bridge",
    category: "Subject Module",
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1000&q=80",
    faculty: "Phy Experts",
    language: "Hinglish",
    batchStart: "Rolling",
    originalPrice: 3000,
    price: 1499,
    rating: 4.8,
    seatsLeft: 40,
    features: ["Formula Sheets", "Numerical Solving", "Concept Clarity"],
    badge: "Recommended",
    color: "#ec4899",
    topic: "Physics",
  },
];

const toppers = [
  { name: "Priya M.", rank: "AIR 05", exam: "NEET 2024", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Rahul V.", rank: "AIR 12", exam: "NEET 2024", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ananya S.", rank: "AIR 28", exam: "NEET 2023", img: "https://randomuser.me/api/portraits/women/33.jpg" },
];

const SectionHeader = ({ title, subtitle }) => (
  <div className="neet-section-header hidden">
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
    <div className="neet-underline" />
  </div>
);

export default function NEET() {
  const [filter, setFilter] = useState("All");
  const [topic, setTopic] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");

  const observerRef = useRef(null);

  const categories = useMemo(() => {
    const set = new Set(neetCourses.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, []);

  const topicPills = useMemo(() => {
    const set = new Set([
      "Biology",
      "Zoology",
      "Botany",
      "Physics",
      "Chemistry",
      "NCERT",
      "PYQs",
      "DPPs",
      "Mock Tests",
      ...neetCourses.map((c) => c.topic).filter(Boolean),
    ]);
    return ["All Topics", ...Array.from(set)];
  }, []);

  const featured = useMemo(() => {
    const copy = [...neetCourses];
    copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return copy.slice(0, 4);
  }, []);

  const categoryGroups = useMemo(() => {
    const map = new Map();
    neetCourses.forEach((c) => map.set(c.category, [...(map.get(c.category) || []), c]));
    return Array.from(map.entries());
  }, []);

  const visibleCourses = useMemo(() => {
    let temp = [...neetCourses];

    if (filter !== "All") temp = temp.filter((c) => c.category === filter);

    if (topic !== "All Topics") {
      const q = topic.toLowerCase();
      temp = temp.filter((c) =>
        (c.title + " " + c.subtitle + " " + c.category + " " + (c.topic || "") + " " + c.features.join(" "))
          .toLowerCase()
          .includes(q)
      );
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      temp = temp.filter((c) => (c.title + " " + c.subtitle).toLowerCase().includes(q));
    }

    return temp;
  }, [filter, topic, searchTerm]);

  // reveal on scroll (optional) [web:34]
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
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToCategory = (cat) => {
    const safe = String(cat).toLowerCase().replaceAll(" ", "-");
    scrollToId(`neet-cat-${safe}`);
  };

  const applyQuickSearch = (q) => {
    setFilter("All");
    setTopic("All Topics");
    setSearchTerm(q);
    scrollToId("neet-packages");
  };

  const resetAll = () => {
    setFilter("All");
    setTopic("All Topics");
    setSearchTerm("");
  };

  return (
    <div className="page-container">
      <Navbar />

      {/* TOP TICKER */}
      <div className="neet-ticker">
        <div className="ticker-content">
          <span>🩺 <strong>Medical Alert:</strong> AIIMS Delhi Seminar Registration Open! | </span>
          <span>🌿 <strong>New Series:</strong> "NCERT Nichod" - Botany Special starting this Friday!</span>
        </div>
      </div>

      <div className="neet-wrapper">
        {/* HERO */}
        <section className="neet-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area hidden">
              <span className="pill-badge">🧬 Future Doctors</span>
              <h1>
                Your Journey to <span className="gradient-text">AIIMS</span> Starts Here.
              </h1>
              <p>Master NCERT with India's best medical faculty. Concept clarity from DNA to Diagnosis.</p>

              <div className="hero-btns">
                <button className="btn-primary-glow" type="button" onClick={() => scrollToId("neet-packages")}>
                  Start Learning
                </button>
                <button className="btn-secondary-glass" type="button" onClick={() => scrollToId("neet-packages")}>
                  <i className="fas fa-play" /> Biology Demo
                </button>
              </div>

              <div className="trust-badges">
                <div><i className="fas fa-user-md" /> Top Doctors Faculty</div>
                <div><i className="fas fa-book-medical" /> NCERT Centric</div>
                <div><i className="fas fa-microscope" /> Visual Learning</div>
              </div>
            </div>

            <div className="hero-visual-area hidden">
              <div className="floating-card c1">
                <i className="fas fa-dna" />
                <span>Genetics</span>
              </div>
              <div className="floating-card c2">
                <i className="fas fa-stethoscope" />
                <span>Clinical</span>
              </div>
              <div className="floating-card c3">
                <i className="fas fa-leaf" />
                <span>Botany</span>
              </div>
            </div>
          </div>
        </section>

        {/* TOPPERS */}
        <section className="toppers-strip hidden">
          <h2>🏆 Future Doctors Hall of Fame</h2>
          <div className="toppers-grid">
            {toppers.map((t, i) => (
              <div className="topper-card" key={i}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <div>
                  <h4>{t.name}</h4>
                  <span className="rank">{t.rank}</span>
                  <small>{t.exam}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: Explore by Category */}
        <section className="neet-section-wrap">
          <SectionHeader title="Explore by Sections" subtitle="Jump directly to Class-wise / Test Series sections." />
          <div className="topic-pills">
            {categories.filter((c) => c !== "All").map((cat) => (
              <button key={cat} type="button" className="topic-pill hidden" onClick={() => scrollToCategory(cat)}>
                {cat}
              </button>
            ))}
            <button type="button" className="topic-pill hidden" onClick={() => scrollToId("neet-packages")}>
              All Packages
            </button>
          </div>
        </section>

        {/* NEW: Explore by Topics */}
        <section className="neet-section-wrap">
          <SectionHeader title="Explore by Topic" subtitle="Use topics as quick filters (smart search)." />
          <div className="topic-pills">
            {topicPills.map((t) => (
              <button
                key={t}
                type="button"
                className={`topic-pill hidden ${topic === t ? "active" : ""}`}
                onClick={() => {
                  setTopic(t);
                  scrollToId("neet-packages");
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* NEW: Featured Picks */}
        <section className="neet-section-wrap">
          <SectionHeader title="Featured Picks" subtitle="Top rated batches & modules." />
          <div className="neet-featured-grid">
            {featured.map((c) => (
              <button
                key={c.id}
                type="button"
                className="neet-featured-card hidden"
                onClick={() => {
                  setSearchTerm(c.title);
                  scrollToId("neet-packages");
                }}
              >
                <div className="neet-featured-top">
                  <span className="neet-ft-tag">{c.category}</span>
                  <span className="neet-ft-rating">⭐ {c.rating}</span>
                </div>
                <div className="neet-ft-title">{c.title}</div>
                <div className="neet-ft-meta">{c.language} • Starts: {c.batchStart}</div>
              </button>
            ))}
          </div>
        </section>

        {/* NEW: Category-wise Sections (auto) */}
        <section className="neet-section-wrap">
          <SectionHeader title="Browse Category Sections" subtitle="Each section shows relevant packages." />
          <div className="neet-cat-sections">
            {categoryGroups.map(([cat, items]) => {
              const safe = String(cat).toLowerCase().replaceAll(" ", "-");
              return (
                <div key={cat} id={`neet-cat-${safe}`} className="neet-cat-block" style={{ scrollMarginTop: 90 }}>
                  <div className="neet-cat-head hidden">
                    <h3>{cat}</h3>
                    <button
                      type="button"
                      className="mini-btn"
                      onClick={() => {
                        setFilter(cat);
                        scrollToId("neet-packages");
                      }}
                    >
                      View in Grid
                    </button>
                  </div>

                  <div className="neet-mini-grid">
                    {items.map((course) => (
                      <div className="neet-mini-card hidden" key={course.id}>
                        <div className="neet-mini-left">
                          <div className="neet-mini-title">{course.title}</div>
                          <div className="neet-mini-sub">{course.subtitle}</div>
                          <div className="neet-mini-meta">{course.language} • {course.batchStart}</div>
                        </div>
                        <div className="neet-mini-right">
                          <div className="neet-mini-price">₹{course.price.toLocaleString()}</div>
                          <button
                            type="button"
                            className="neet-mini-btn"
                            style={{ "--accent-color": course.color }}
                            onClick={() => scrollToId("neet-packages")}
                          >
                            Explore
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MAIN CONTENT (Packages Grid) */}
        <section id="neet-packages" className="content-container" style={{ scrollMarginTop: 90 }}>
          <div className="controls-header hidden">
            <div className="search-glass">
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Search Batches (e.g. Zoology, Dropper...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={filter === cat ? "active" : ""}
                  onClick={() => setFilter(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="neet-results-row hidden">
            <div className="neet-results-text">
              Showing <strong>{visibleCourses.length}</strong> packs
            </div>
            <button type="button" className="reset-btn" onClick={resetAll}>
              Reset
            </button>
          </div>

          <div className="neet-grid">
            {visibleCourses.length > 0 ? (
              visibleCourses.map((course) => (
                <div className="tech-card hidden" key={course.id}>
                  {course.badge ? (
                    <div className={`card-badge ${course.badge === "Closing Soon" ? "urgent" : ""}`}>
                      {course.badge}
                    </div>
                  ) : null}

                  <div className="tech-card-img">
                    <img src={course.image} alt={course.title} loading="lazy" />
                    <div className="img-overlay">
                      <button type="button">
                        <i className="fas fa-play-circle" /> Preview
                      </button>
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
                      <span><i className="fas fa-language" /> {course.language}</span>
                      <span><i className="far fa-calendar-alt" /> Starts: {course.batchStart}</span>
                    </div>

                    <div className="divider-neon" />

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
                          {course.seatsLeft < 50 ? (
                            <span className="seats-alert">Only {course.seatsLeft} seats left!</span>
                          ) : null}
                        </div>
                      </div>

                      <button className="tech-btn" style={{ "--accent-color": course.color }} type="button">
                        Enroll <i className="fas fa-user-md" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-result-glass hidden">
                <h3>No Batches Found</h3>
                <p>Try resetting your filters.</p>
                <button type="button" className="reset-btn" onClick={resetAll}>Reset</button>
              </div>
            )}
          </div>
        </section>
      </div>

    </div>
  );
}
