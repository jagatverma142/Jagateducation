import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../CSS/JEE.css";

const jeeCourses = [
  {
    id: 1,
    title: "JEE (Main+Adv) 2027: ARJUNA Batch",
    subtitle: "Complete Class 11 Foundation",
    category: "Class 11",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
    faculty: "H.C. Verma Sir (Guest) & Team",
    language: "Hinglish",
    batchStart: "15th Aug",
    originalPrice: 45000,
    price: 34999,
    rating: 4.9,
    seatsLeft: 45,
    features: [
      "Physics, Chem, Math (PCM)",
      "Daily DPPs & Video Sol.",
      "Hardcopy Modules Sent Home",
    ],
    badge: "Bestseller",
    color: "#00d2ff",
  },
  {
    id: 2,
    title: "JEE 2026: LAKSHYA Batch",
    subtitle: "Class 12 Board + JEE Prep",
    category: "Class 12",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    faculty: "Kota Top Faculties",
    language: "English",
    batchStart: "1st Sept",
    originalPrice: 38000,
    price: 28999,
    rating: 4.8,
    seatsLeft: 12,
    features: [
      "NCERT to Advanced Level",
      "24/7 Doubt Engine",
      "Board Exam Special",
    ],
    badge: "Closing Soon",
    color: "#3a7bd5",
  },
  {
    id: 3,
    title: "PRAYAS 2.0: Dropper's Batch",
    subtitle: "Gap Year Intensive Course",
    category: "Dropper",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    faculty: "Ex-IITians",
    language: "Hinglish",
    batchStart: "Started (Recorded Avail)",
    originalPrice: 25000,
    price: 19500,
    rating: 4.7,
    seatsLeft: 100,
    features: [
      "Rank Booster Strategy",
      "15 Years PYQs Solved",
      "Errorless Physics",
    ],
    badge: "Trending",
    color: "#ff416c",
  },
  {
    id: 4,
    title: "Mathongo: Advanced Calculus",
    subtitle: "Subject Special Module",
    category: "Subject Module",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
    faculty: "NV Sir",
    language: "English",
    batchStart: "Instant Access",
    originalPrice: 4000,
    price: 1999,
    rating: 4.9,
    seatsLeft: 999,
    features: ["Visual Graphs", "Challenger Problems", "Limits to Integrals"],
    badge: null,
    color: "#9b59b6",
  },
  {
    id: 5,
    title: "AITS (All India Test Series) 2026",
    subtitle: "NTA Pattern CBT Mock Tests",
    category: "Test Series",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    faculty: "AI Analytics",
    language: "Eng/Hin",
    batchStart: "Every Sunday",
    originalPrice: 5000,
    price: 1499,
    rating: 4.6,
    seatsLeft: 999,
    features: [
      "Real Exam Interface",
      "Detailed Analysis Report",
      "Predictive Rank",
    ],
    badge: "Popular",
    color: "#2ecc71",
  },
  {
    id: 6,
    title: "Olympiad & KVPY Scholars",
    subtitle: "For Class 9, 10 & 11",
    category: "Foundation",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1000&q=80",
    faculty: "Research Scholars",
    language: "English",
    batchStart: "Rolling",
    originalPrice: 15000,
    price: 8999,
    rating: 5.0,
    seatsLeft: 20,
    features: ["High Order Thinking", "Research Projects", "International Level"],
    badge: "Elite",
    color: "#f39c12",
  },
];

const toppers = [
  { name: "Aarav S.", rank: "AIR 14", exam: "JEE Adv 2024", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sneha P.", rank: "AIR 45", exam: "JEE Main 2024", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan K.", rank: "AIR 92", exam: "JEE Adv 2023", img: "https://randomuser.me/api/portraits/men/85.jpg" },
];

const pageConfig = {
  ticker: [
    "⚡ Flash Sale: 50% Scholarship for Top 100 Rankers in JAGAT-SAT Exam!",
    '📢 New Batch: "ARJUNA 3.0" Starting Next Monday!',
  ],
  hero: {
    badge: "🚀 Engineering Entrance",
    titleA: "Crack",
    titleB: "IIT-JEE",
    subtitle:
      "India's most scientifically designed curriculum. We don't just teach Physics; we teach you how to think.",
    ctas: [
      { id: "c1", label: "Explore Batches", to: "packages", variant: "primary" },
      { id: "c2", label: "Watch Demo", to: "demo", variant: "secondary", icon: "fas fa-play" },
    ],
    trust: [
      { id: "t1", icon: "fas fa-user-graduate", text: "10k+ Selections" },
      { id: "t2", icon: "fas fa-video", text: "HD Live Classes" },
      { id: "t3", icon: "fas fa-brain", text: "AI Analytics" },
    ],
    floats: [
      { id: "f1", icon: "fas fa-atom", text: "Physics" },
      { id: "f2", icon: "fas fa-flask", text: "Chemistry" },
      { id: "f3", icon: "fas fa-square-root-alt", text: "Maths" },
    ],
  },

  exam: {
    title: "JEE Snapshot",
    subtitle: "Quick overview to plan your prep.",
    cards: [
      { id: "e1", k: "Targets", v: "JEE Main + Advanced" },
      { id: "e2", k: "Prep Track", v: "11th / 12th / Dropper" },
      { id: "e3", k: "Core", v: "Physics • Chemistry • Maths" },
      { id: "e4", k: "Support", v: "DPPs • Tests • Analysis" },
    ],
  },

  subjects: {
    title: "Subjects (Topic Sections)",
    subtitle: "Choose a subject and jump to relevant packs.",
    items: [
      { id: "s1", title: "Physics", desc: "Mechanics → Modern Physics, concept + numericals." },
      { id: "s2", title: "Chemistry", desc: "Physical, Organic, Inorganic with NCERT + PYQs." },
      { id: "s3", title: "Mathematics", desc: "Calculus, Algebra, Coordinate, Vectors." },
      { id: "s4", title: "Revision & Formula", desc: "Short notes + formula sheets + error log." },
      { id: "s5", title: "Mock Tests", desc: "NTA pattern CBT + analysis for rank improvement." },
      { id: "s6", title: "Foundation", desc: "Olympiad/KVPY style thinking from early classes." },
    ],
  },

  topics: {
    title: "High Yield Topics",
    subtitle: "Weekly focus list (use as quick search).",
    pills: [
      "Calculus",
      "Modern Physics",
      "Electrostatics",
      "Organic Reaction Mechanism",
      "Coord Geometry",
      "Mock Test",
      "Error Log",
    ],
  },

  roadmap: {
    title: "Study Roadmap",
    subtitle: "Simple phases to stay consistent.",
    steps: [
      { id: "r1", title: "Phase 1: Concepts", desc: "Lectures + notes + basic practice." },
      { id: "r2", title: "Phase 2: DPP + PYQs", desc: "Daily DPPs + chapter PYQs." },
      { id: "r3", title: "Phase 3: Mocks", desc: "Weekly mocks + deep analysis." },
      { id: "r4", title: "Phase 4: Revision", desc: "Formula sheets + error log + speed." },
    ],
  },

  faq: {
    title: "FAQs",
    subtitle: "Common student doubts.",
    items: [
      { id: "q1", q: "Class 11 students kis batch se start karein?", a: "ARJUNA-type foundation batch best rahega, daily DPPs ke saath." },
      { id: "q2", q: "Dropper ko kya focus karna chahiye?", a: "PYQs + mocks + analysis; weak topics ke liye subject modules add karein." },
      { id: "q3", q: "Test series kab start karein?", a: "Syllabus 40–60% complete hone ke baad weekly start kar do." },
    ],
  },
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="jee-section-header hidden">
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
    <div className="jee-underline" />
  </div>
);

export default function JEE() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const observerRef = useRef(null);

  const categories = useMemo(() => {
    const set = new Set(jeeCourses.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, []);

  const courses = useMemo(() => {
    let temp = [...jeeCourses];
    if (filter !== "All") temp = temp.filter((c) => c.category === filter);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      temp = temp.filter((c) => (c.title + " " + c.subtitle).toLowerCase().includes(q));
    }
    return temp;
  }, [filter, searchTerm]);

  // reveal on scroll
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
    <div className="page-container jee-page">
      <Navbar />

      {/* TICKER */}
      <div className="jee-ticker">
        <div className="ticker-content">
          {pageConfig.ticker.map((t, i) => (
            <span key={i}>{t} {" | "}</span>
          ))}
        </div>
      </div>

      <div className="jee-wrapper">
        {/* HERO */}
        <section className="jee-hero-modern">
          <div className="hero-grid">
            <div className="hero-text-area hidden">
              <span className="pill-badge">{pageConfig.hero.badge}</span>
              <h1>
                {pageConfig.hero.titleA} <span className="gradient-text">{pageConfig.hero.titleB}</span>
                <br />
                With Precision & Speed.
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
                    {b.icon ? <i className={b.icon} /> : null} {b.label}
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

        {/* SNAPSHOT */}
        <section className="jee-section-wrap">
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
          <h2>🏆 Our Hall of Fame</h2>
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

        {/* SUBJECT SECTIONS */}
        <section className="jee-section-wrap">
          <SectionHeader title={pageConfig.subjects.title} subtitle={pageConfig.subjects.subtitle} />
          <div className="subjects-grid">
            {pageConfig.subjects.items.map((s) => (
              <div className="subject-card hidden" key={s.id}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button type="button" className="mini-btn" onClick={() => setSearchTerm(s.title)}>
                  Search packs
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* HIGH YIELD TOPICS */}
        <section className="jee-section-wrap">
          <SectionHeader title={pageConfig.topics.title} subtitle={pageConfig.topics.subtitle} />
          <div className="topic-pills">
            {pageConfig.topics.pills.map((p) => (
              <button type="button" className="topic-pill hidden" key={p} onClick={() => setSearchTerm(p)}>
                {p}
              </button>
            ))}
          </div>
        </section>

        {/* ROADMAP */}
        <section className="jee-section-wrap">
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

        {/* PACKAGES */}
        <section id="packages" className="content-container" style={{ scrollMarginTop: 90 }}>
          <div className="controls-header hidden">
            <div className="search-glass">
              <i className="fas fa-search" />
              <input
                type="text"
                value={searchTerm}
                placeholder="Find your batch (e.g. Class 11, Dropper...)"
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

          <div className="jee-grid">
            {courses.length > 0 ? (
              courses.map((course) => (
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

                      <button
                        type="button"
                        className="tech-btn"
                        style={{ "--accent-color": course.color }}
                      >
                        Enroll <i className="fas fa-bolt" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-result-glass hidden">
                <h3>No Batches Found</h3>
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
        <section id="demo" className="jee-demo hidden" style={{ scrollMarginTop: 90 }}>
          <SectionHeader title="Free Demo Class" subtitle="Watch a demo and get your study plan." />
          <div className="demo-box">
            <div className="demo-left">
              <h3>What you get</h3>
              <ul>
                <li>Demo lecture access</li>
                <li>Topic roadmap</li>
                <li>Mentor guidance</li>
              </ul>
            </div>
            <div className="demo-right">
              <button type="button" className="btn-primary-glow">Watch Demo</button>
              <button type="button" className="btn-secondary-glass">Talk to Mentor</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="jee-section-wrap">
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

      <Footer />
    </div>
  );
}
