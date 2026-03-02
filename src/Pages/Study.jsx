import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";
import "../CSS/Study.css";
import "../CSS/Nav.css";
import {
  FaSearch,
  FaFilePdf,
  FaVideo,
  FaBook,
  FaDownload,
  FaFilter,
  FaStar,
  FaSort,
} from "react-icons/fa";

const Study = () => {
  const materialsData = useMemo(
    () => [
      {
        id: 1,
        title: "Agri Engineering Basics",
        category: "Notes",
        type: "pdf",
        size: "2.4 MB",
        date: "Oct 2025",
        description:
          "Comprehensive handwritten notes covering fundamental concepts of Agriculture Engineering.",
        topic: "Basics",
        featured: true,
      },
      {
        id: 2,
        title: "GATE 2024 Solved Paper",
        category: "Previous Papers",
        type: "pdf",
        size: "1.1 MB",
        date: "Jan 2025",
        description:
          "Complete solution set for the 2024 Agri GATE examination with detailed explanations.",
        topic: "PYQs",
        featured: true,
      },
      {
        id: 3,
        title: "Fluid Mechanics Masterclass",
        category: "Video Lectures",
        type: "video",
        size: "Link",
        date: "Dec 2025",
        description:
          "Link to the exclusive masterclass video covering advanced fluid dynamics.",
        topic: "Fluid Mechanics",
        featured: true,
      },
      {
        id: 4,
        title: "Soil Science Handbook",
        category: "Books",
        type: "pdf",
        size: "15 MB",
        date: "Sep 2025",
        description:
          "Standard reference book for Soil Science and conservation techniques.",
        topic: "Soil & Water",
        featured: false,
      },
      {
        id: 5,
        title: "Farm Machinery Formula Sheet",
        category: "Notes",
        type: "pdf",
        size: "500 KB",
        date: "Nov 2025",
        description:
          "Quick revision cheat sheet containing all necessary formulas for Farm Machinery.",
        topic: "Farm Machinery",
        featured: true,
      },
      {
        id: 6,
        title: "General Aptitude Mock Test",
        category: "Previous Papers",
        type: "pdf",
        size: "3.0 MB",
        date: "Dec 2025",
        description:
          "Practice set for General Aptitude section tailored for GATE aspirants.",
        topic: "Aptitude",
        featured: false,
      },
      {
        id: 7,
        title: "Irrigation Engineering Guide",
        category: "Books",
        type: "book",
        size: "12 MB",
        date: "Jan 2026",
        description:
          "Advanced concepts of canal design, drip irrigation, and water management.",
        topic: "Irrigation",
        featured: true,
      },
      {
        id: 8,
        title: "Thermodynamics Visualized",
        category: "Video Lectures",
        type: "video",
        size: "Link",
        date: "Jan 2026",
        description:
          "3D animated video explanations of the Laws of Thermodynamics.",
        topic: "Thermodynamics",
        featured: false,
      },
      {
        id: 9,
        title: "GATE 2023 Solved Paper",
        category: "Previous Papers",
        type: "pdf",
        size: "1.4 MB",
        date: "Aug 2025",
        description: "Previous year question paper with answer key and hints.",
        topic: "PYQs",
        featured: false,
      },
      {
        id: 10,
        title: "Engineering Mathematics Notes",
        category: "Notes",
        type: "pdf",
        size: "4.2 MB",
        date: "Dec 2025",
        description:
          "Calculus, Linear Algebra, and Probability notes for GATE exam.",
        topic: "Mathematics",
        featured: true,
      },
      {
        id: 11,
        title: "Renewable Energy Sources",
        category: "Books",
        type: "book",
        size: "8.5 MB",
        date: "Nov 2025",
        description:
          "Detailed study on Solar, Wind, and Bio-energy applications in agriculture.",
        topic: "Renewable",
        featured: false,
      },
      {
        id: 12,
        title: "Post Harvest Tech Summary",
        category: "Notes",
        type: "pdf",
        size: "1.8 MB",
        date: "Jan 2026",
        description:
          "Short summary notes for Post Harvest Technology and Food Processing.",
        topic: "Post Harvest",
        featured: true,
      },
    ],
    []
  );

  const categories = useMemo(
    () => ["All", "Notes", "Previous Papers", "Video Lectures", "Books"],
    []
  );

  const [filter, setFilter] = useState("All");
  const [topic, setTopic] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");
  const [visibleMaterials, setVisibleMaterials] = useState(materialsData);

  const isNew = (date) => date.includes("Jan 2026") || date.includes("Dec 2025");

  const topicPills = useMemo(() => {
    const set = new Set(materialsData.map((m) => m.topic).filter(Boolean));
    return ["All Topics", ...Array.from(set)];
  }, [materialsData]);

  const tracks = useMemo(
    () => [
      { id: "tr1", title: "Start Here", desc: "Basics + notes to build base.", topic: "Basics" },
      { id: "tr2", title: "Score with PYQs", desc: "Solved papers for exam pattern.", topic: "PYQs" },
      { id: "tr3", title: "Concept Booster", desc: "Watch video lectures to strengthen concepts.", category: "Video Lectures" },
      { id: "tr4", title: "Revision Sprint", desc: "Formula sheets + short notes.", keyword: "Formula" },
    ],
    []
  );

  const featured = useMemo(() => materialsData.filter((m) => m.featured).slice(0, 6), [materialsData]);

  const topicGroups = useMemo(() => {
    const map = new Map();
    materialsData.forEach((m) => {
      const key = m.topic || "Other";
      map.set(key, [...(map.get(key) || []), m]);
    });
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [materialsData]);

  const latestItems = useMemo(() => {
    const copy = [...materialsData];
    copy.sort((a, b) => (isNew(b.date) ? 1 : 0) - (isNew(a.date) ? 1 : 0));
    return copy.slice(0, 6);
  }, [materialsData]);

  const parseSize = (size) => {
    const s = String(size).toLowerCase().trim();
    if (s.includes("link")) return 9999;
    const mb = s.match(/([0-9.]+)\s*mb/);
    if (mb) return Number(mb[1]);
    const kb = s.match(/([0-9.]+)\s*kb/);
    if (kb) return Number(kb[1]) / 1024;
    return 0;
  };

  const clearAll = () => {
    setFilter("All");
    setTopic("All Topics");
    setSearchTerm("");
    setSortBy("Recommended");
  };

  // filtering + sorting
  useEffect(() => {
    let results = [...materialsData];

    if (filter !== "All") results = results.filter((item) => item.category === filter);
    if (topic !== "All Topics") results = results.filter((item) => item.topic === topic);

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.topic || "").toLowerCase().includes(q)
      );
    }

    if (sortBy === "New first") {
      results.sort((a, b) => (isNew(b.date) ? 1 : 0) - (isNew(a.date) ? 1 : 0));
    } else if (sortBy === "A-Z") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Size") {
      results.sort((a, b) => parseSize(b.size) - parseSize(a.size));
    } else if (sortBy === "Recommended") {
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setVisibleMaterials(results);
  }, [filter, topic, searchTerm, sortBy, materialsData]);

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
  }, [visibleMaterials.length]);

  const getIcon = (type) => {
    switch (type) {
      case "video":
        return <FaVideo className="card-icon video" />;
      case "book":
        return <FaBook className="card-icon book" />;
      default:
        return <FaFilePdf className="card-icon pdf" />;
    }
  };

  return (
    <div className="page-container">
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="study-page">
        {/* HERO */}
        <section className="study-hero">
          <div className="hero-overlay" />
          <div className="hero-content hidden">
            <span className="hero-pill">📚 Study Hub</span>
            <h1>Study Material & Resources</h1>
            <p>Unlock your potential with curated notes, papers, videos, and books.</p>
          </div>
        </section>

        {/* RESOURCE TRACKS */}
        <section className="container tracks-section">
          <div className="section-head hidden">
            <h2>Resource Tracks</h2>
            <p>Pick a track and apply smart filters instantly.</p>
          </div>

          <div className="tracks-grid">
            {tracks.map((t) => (
              <button
                key={t.id}
                type="button"
                className="track-card hidden"
                onClick={() => {
                  if (t.topic) setTopic(t.topic);
                  if (t.category) setFilter(t.category);
                  if (t.keyword) setSearchTerm(t.keyword);
                  window.scrollTo({ top: 720, behavior: "smooth" });
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
            <h2>Featured Resources</h2>
            <p>High-impact picks for quick improvement.</p>
          </div>

          <div className="featured-grid">
            {featured.map((item) => (
              <button
                key={item.id}
                type="button"
                className="featured-card hidden"
                onClick={() => {
                  setSearchTerm(item.title);
                  window.scrollTo({ top: 720, behavior: "smooth" });
                }}
              >
                <div className="featured-left">
                  <div className="featured-top">
                    <FaStar className="star" />
                    <span className="featured-tag">{item.topic}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.category} • {item.date}
                  </p>
                </div>
                <div className="featured-right">
                  <span className="featured-size">{item.size}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* LATEST UPLOADS */}
        <section className="container latest-section">
          <div className="section-head hidden">
            <h2>Latest Uploads</h2>
            <p>New and recently updated resources.</p>
          </div>

          <div className="latest-grid">
            {latestItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="latest-card hidden"
                onClick={() => {
                  setSearchTerm(item.title);
                  window.scrollTo({ top: 720, behavior: "smooth" });
                }}
              >
                <div className="latest-top">
                  <span className="latest-type">{item.category}</span>
                  {isNew(item.date) ? <span className="latest-new">NEW</span> : null}
                </div>
                <div className="latest-title">{item.title}</div>
                <div className="latest-meta">
                  {item.topic} • {item.size}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* TOPIC COLLECTIONS */}
        <section className="container collections-section">
          <div className="section-head hidden">
            <h2>Topic Collections</h2>
            <p>Explore topic bundles and open the exact resource you need.</p>
          </div>

          <div className="collections-grid">
            {topicGroups.slice(0, 8).map(([topicName, items]) => (
              <div className="collection-card hidden" key={topicName}>
                <div className="collection-head">
                  <h3>{topicName}</h3>
                  <span className="collection-count">{items.length} items</span>
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
                          window.scrollTo({ top: 720, behavior: "smooth" });
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
                    window.scrollTo({ top: 720, behavior: "smooth" });
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
        <div className="study-controls container sticky-controls">
          <div className="search-bar hidden">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search topics (e.g., Soil, Maths, Fluid)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="controls-row hidden">
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {filter === cat ? <FaFilter className="mini-ico" /> : null}
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
                <option>New first</option>
                <option>A-Z</option>
                <option>Size</option>
              </select>
            </div>
          </div>
        </div>

        {/* GRID */}
        <section className="materials-container container">
          <div className="results-row hidden">
            <div className="results-count">
              Showing <strong>{visibleMaterials.length}</strong> results
            </div>
            <button type="button" className="reset-btn small" onClick={clearAll}>
              Reset filters
            </button>
          </div>

          {visibleMaterials.length > 0 ? (
            <div className="materials-grid">
              {visibleMaterials.map((item) => (
                <div key={item.id} className="material-card hidden">
                  {isNew(item.date) ? <span className="new-badge">NEW</span> : null}

                  <div className="card-header">
                    {getIcon(item.type)}
                    <span className={`category-tag ${item.category.replaceAll(" ", "-").toLowerCase()}`}>
                      {item.category}
                    </span>
                    {item.topic ? <span className="topic-tag">#{item.topic}</span> : null}
                  </div>

                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <div className="meta-info">
                      <span className="meta-item">
                        <strong>Size:</strong> {item.size}
                      </span>
                      <span className="meta-item">
                        <strong>Date:</strong> {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="button" className="download-btn">
                      {item.type === "video" ? "Watch Now" : "Download"} <FaDownload />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results hidden">
              <h3>No materials found.</h3>
              <p>Try searching for something else like “Fluid” or “Math”.</p>
              <button type="button" className="reset-btn" onClick={clearAll}>
                Reset Filters
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Study;
