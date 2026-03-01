import React, { useEffect, useMemo, useRef, useState } from "react";
import "../CSS/Gate.css";

/* -------------------- DATA (Same) -------------------- */
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
    color: "#e67e22",
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
    color: "#d35400",
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
    color: "#27ae60",
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
    color: "#16a085",
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
    color: "#2980b9",
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
    color: "#8e44ad",
  },
];

const toppers = [
  { name: "Vikram S.", rank: "AIR 01", exam: "GATE AG 2024", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Pooja R.", rank: "AIR 03", exam: "GATE AG 2024", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Amit K.", rank: "AIR 07", exam: "GATE AG 2023", img: "https://randomuser.me/api/portraits/men/12.jpg" },
];

const pageConfig = {
  ticker: [
    '🚜 New Batch: "SANKALP 2.0" for GATE 2027 Registrations Open!',
    "📢 Result Update: 45+ selections in CIAE & IIT Kharagpur this year!",
  ],

  hero: {
    badge: "🌾 Agricultural Engineering",
    titleA: "Powering India's",
    titleB: "Green Revolution",
    subtitle:
      "Join the #1 Platform for GATE AG. From Farm Machinery to Food Processing, master it all.",
    ctas: [
      { id: "c1", label: "View Packages", to: "packages", variant: "primary" },
      { id: "c2", label: "Free Demo", to: "demo", variant: "secondary" },
    ],
    trust: [
      { id: "t1", icon: "fas fa-certificate", text: "ISO Certified" },
      { id: "t2", icon: "fas fa-user-graduate", text: "IITian Mentors" },
      { id: "t3", icon: "fas fa-book-reader", text: "Updated Syllabus" },
    ],
    floats: [
      { id: "f1", icon: "fas fa-tractor", text: "Machinery" },
      { id: "f2", icon: "fas fa-seedling", text: "Soil & Water" },
      { id: "f3", icon: "fas fa-cogs", text: "Process" },
    ],
  },

  exam: {
    title: "GATE (AG) Exam Snapshot",
    subtitle: "Quick overview to plan better.",
    cards: [
      { id: "e1", k: "Mode", v: "CBT (Online)" },
      { id: "e2", k: "Duration", v: "3 Hours" },
      { id: "e3", k: "Total Marks", v: "100" },
      { id: "e4", k: "Sections", v: "GA + Core" },
    ],
  },

  subjects: {
    title: "Syllabus / Subjects",
    subtitle: "Topic-wise preparation starts here.",
    items: [
      { id: "s1", title: "Engineering Mathematics", desc: "Scoring base for rank boost." },
      { id: "s2", title: "Soil & Water Engineering", desc: "Numericals + formulas + PYQs." },
      { id: "s3", title: "Farm Machinery & Power", desc: "Mechanics + machines + numericals." },
      { id: "s4", title: "Irrigation & Drainage", desc: "High weightage numericals." },
      { id: "s5", title: "Post Harvest / Process", desc: "Concepts + applications." },
      { id: "s6", title: "General Aptitude", desc: "Easy marks if practiced well." },
    ],
  },

  topics: {
    title: "High Weightage Topics",
    subtitle: "Use this as your weekly focus list.",
    pills: [
      "Engineering Mathematics",
      "Hydrology Basics",
      "Irrigation Scheduling",
      "Farm Power & Tractors",
      "Soil Mechanics",
      "Drying & Storage",
      "Mock Analysis",
    ],
  },

  roadmap: {
    title: "Study Roadmap",
    subtitle: "A simple 4-phase approach.",
    steps: [
      { id: "r1", title: "Phase 1: Concepts", desc: "Concept clarity + short notes." },
      { id: "r2", title: "Phase 2: PYQs", desc: "Topic-wise PYQs + pattern understanding." },
      { id: "r3", title: "Phase 3: Tests", desc: "Mocks + time strategy." },
      { id: "r4", title: "Phase 4: Revision", desc: "Formula book + error log." },
    ],
  },

  resources: {
    title: "Free Resources",
    subtitle: "Start quickly with free support.",
    cards: [
      { id: "rs1", title: "Roadmap PDF", desc: "Week-wise plan + revision structure.", btn: "Download" },
      { id: "rs2", title: "PYQ Starter", desc: "Topic-tagged PYQs for quick start.", btn: "Get PYQs" },
      { id: "rs3", title: "Formula Sheet", desc: "One-page formulas for fast revision.", btn: "Get Sheet" },
    ],
  },

  faq: {
    title: "FAQs",
    subtitle: "Common student questions.",
    items: [
      { id: "q1", q: "Which package is best for beginners?", a: "Start with Live/Recorded full course + aptitude pack, then add test series." },
      { id: "q2", q: "How many mocks should I give?", a: "Weekly mocks in mid phase, then 2–3 per week near exam with analysis." },
      { id: "q3", q: "Do subject modules help?", a: "Yes, for weak subjects they are fastest way to improve." },
    ],
  },
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="gate-section-header hidden">
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
    <div className="gate-underline" />
  </div>
);

export default function Gate() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const observerRef = useRef(null);

  const categories = useMemo(() => {
    const set = new Set(gateCourses.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, []);

  const courses = useMemo(() => {
    let temp = [...gateCourses];
    if (filter !== "All") temp = temp.filter((c) => c.category === filter);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      temp = temp.filter((c) => (c.title + " " + c.subtitle).toLowerCase().includes(q));
    }
    return temp;
  }, [filter, searchTerm]);

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

  return (
    <div className="page-container gate-page">
      {/* TICKER */}
      <div className="gate-ticker">
        <div className="ticker-content">
          {pageConfig.ticker.map((t, i) => (
            <span key={i}>{t} {" | "}</span>
          ))}
        </div>
      </div>

      <div className="gate-wrapper">
        {/* HERO */}
        <section className="gate-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area hidden">
              <span className="pill-badge">{pageConfig.hero.badge}</span>
              <h1>
                {pageConfig.hero.titleA} <span className="gradient-text">{pageConfig.hero.titleB}</span>
              </h1>
              <p>{pageConfig.hero.subtitle}</p>

              <div className="hero-btns">
                {pageConfig.hero.ctas.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={b.variant === "primary" ? "btn-primary-glow" : "btn-secondary-glass"}
                    onClick={() => scrollToId(b.to)}
                  >
                    {b.variant === "secondary" ? <i className="fas fa-play" /> : null} {b.label}
                  </button>
                ))}
              </div>

              <div className="trust-badges">
                {pageConfig.hero.trust.map((x) => (
                  <div key={x.id}>
                    <i className={x.icon} /> {x.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual-area hidden">
              {pageConfig.hero.floats.map((f, idx) => (
                <div key={f.id} className={`floating-card c${idx + 1}`}>
                  <i className={f.icon} />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: EXAM SNAPSHOT */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.exam.title} subtitle={pageConfig.exam.subtitle} />
          <div className="snapshot-grid">
            {pageConfig.exam.cards.map((c) => (
              <div className="snapshot-card hidden" key={c.id}>
                <div className="k">{c.k}</div>
                <div className="v">{c.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TOPPERS */}
        <section className="toppers-strip hidden">
          <h2>🏆 Our GATE Toppers</h2>
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

        {/* NEW: SUBJECTS */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.subjects.title} subtitle={pageConfig.subjects.subtitle} />
          <div className="subjects-grid">
            {pageConfig.subjects.items.map((s) => (
              <div className="subject-card hidden" key={s.id}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button type="button" className="mini-btn" onClick={() => setSearchTerm(s.title)}>
                  Search modules
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: TOPICS */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.topics.title} subtitle={pageConfig.topics.subtitle} />
          <div className="topic-pills">
            {pageConfig.topics.pills.map((p) => (
              <button type="button" className="topic-pill hidden" key={p} onClick={() => setSearchTerm(p)}>
                {p}
              </button>
            ))}
          </div>
        </section>

        {/* NEW: ROADMAP */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.roadmap.title} subtitle={pageConfig.roadmap.subtitle} />
          <div className="roadmap-grid">
            {pageConfig.roadmap.steps.map((r) => (
              <div className="roadmap-card hidden" key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: RESOURCES */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.resources.title} subtitle={pageConfig.resources.subtitle} />
          <div className="resources-grid">
            {pageConfig.resources.cards.map((r) => (
              <div className="resource-card hidden" key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <button type="button" className="btn-secondary-glass">{r.btn}</button>
              </div>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="content-container" style={{ scrollMarginTop: 90 }}>
          <div className="controls-header hidden">
            <div className="search-glass">
              <i className="fas fa-search" />
              <input
                type="text"
                value={searchTerm}
                placeholder="Search Courses (e.g. Farm Power, Test Series...)"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-pills" aria-label="Course filters">
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

          <div className="gate-grid">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div className="tech-card hidden" key={course.id}>
                  {course.badge ? (
                    <div className={`card-badge ${course.badge === "Bestseller" ? "hot" : ""}`}>
                      {course.badge}
                    </div>
                  ) : null}

                  <div className="tech-card-img">
                    <img src={course.image} alt={course.title} loading="lazy" />
                    <div className="img-overlay">
                      <button type="button">
                        <i className="fas fa-eye" /> Explore
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
                      <span><i className="far fa-clock" /> Starts: {course.batchStart}</span>
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
                          {course.seatsLeft < 100 ? (
                            <span className="seats-alert">Only {course.seatsLeft} seats left!</span>
                          ) : null}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="tech-btn"
                        style={{ "--accent-color": course.color }}
                      >
                        Buy Now <i className="fas fa-shopping-cart" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-result-glass hidden">
                <h3>No Courses Found</h3>
                <p>Try resetting your filters.</p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => { setFilter("All"); setSearchTerm(""); }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="gate-demo hidden" style={{ scrollMarginTop: 90 }}>
          <SectionHeader title="Free Demo & Guidance" subtitle="Get a demo class and a quick roadmap to start." />
          <div className="demo-box">
            <div className="demo-left">
              <h3>What you get</h3>
              <ul>
                <li>Demo class access</li>
                <li>Preparation roadmap</li>
                <li>Mentor guidance</li>
              </ul>
            </div>
            <div className="demo-right">
              <button type="button" className="btn-primary-glow">Get Free Demo</button>
              <button type="button" className="btn-secondary-glass">Talk to Mentor</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="gate-section-wrap">
          <SectionHeader title={pageConfig.faq.title} subtitle={pageConfig.faq.subtitle} />
          <div className="faq-wrap">
            {pageConfig.faq.items.map((f, idx) => {
              const open = openFaq === idx;
              return (
                <div className="faq-item hidden" key={f.id}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : idx)}
                  >
                    {f.q}
                    <span>{open ? "−" : "+"}</span>
                  </button>
                  {open ? <div className="faq-a">{f.a}</div> : null}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
