import React, { useEffect, useMemo, useState } from "react";
import Aboutsection from "../Components/Aboutsection";

import "../App.css";
import "../CSS/Home.css";

/* -------------------- DATA (Same as your config) -------------------- */
const pageConfig = {
  hero: {
    badge: "#1 Agri Engineering Institute",
    title: "Crack GATE with Confidence",
    subtitle:
      "Live classes, mock tests, notes, mentorship and a focused roadmap for GATE Agriculture.",
    ctas: [
      { label: "View Courses", href: "#courses", variant: "primary" },
      { label: "Free Roadmap", href: "#roadmap", variant: "secondary" },
    ],
  },

  stats: [
    { id: "s1", target: 15000, suffix: "+", label: "Happy Students" },
    { id: "s2", target: 1200, suffix: "+", label: "GATE Selections" },
    { id: "s3", target: 4.8, suffix: "/5", label: "Average Rating", isDecimal: true },
    { id: "s4", target: 10, suffix: "+ Years", label: "Experience" },
  ],

  roadmap: {
    id: "roadmap",
    title: "Preparation Roadmap",
    subtitle: "Topic-wise plan: concepts → practice → tests → revision.",
    steps: [
      { id: "r1", title: "Phase 1: Foundation", desc: "Concept clarity + short notes + daily practice set." },
      { id: "r2", title: "Phase 2: PYQ Mastery", desc: "Previous year questions, pattern understanding, shortcuts." },
      { id: "r3", title: "Phase 3: Test Series", desc: "Full-length mocks, analysis, weak topic repair." },
      { id: "r4", title: "Phase 4: Revision", desc: "Formula book, error log, quick mock loops." },
    ],
  },

  essentials: {
    title: "GATE Preparation Essentials",
    subtitle: "Exam-ready system: syllabus coverage, practice, tests and mentorship.",
    cards: [
      { id: "e1", title: "Exam Pattern", points: ["General Aptitude + Core", "MCQ/MSQ/NAT mix", "Time management matters most"] },
      { id: "e2", title: "Syllabus Coverage", points: ["Topic-wise lectures", "Short notes + DPPs", "PYQ mapping with topics"] },
      { id: "e3", title: "Study Resources", points: ["PDF notes", "Formula book", "Solved PYQ bank"] },
      { id: "e4", title: "Mentorship", points: ["Personal guidance", "Doubt support", "Weekly targets & review"] },
    ],
  },

  subjects: {
    title: "Subjects We Cover",
    subtitle: "Topic-wise teaching with PYQ mapping and revision support.",
    items: [
      { id: "sub1", name: "Engineering Mathematics", desc: "High ROI + scoring, practice driven." },
      { id: "sub2", name: "Soil & Water Engineering", desc: "Concept + numericals + PYQs." },
      { id: "sub3", name: "Farm Machinery", desc: "Mechanisms, power, field operations." },
      { id: "sub4", name: "Agronomy", desc: "Theory + applied questions focus." },
      { id: "sub5", name: "Post Harvest Engineering", desc: "Preservation, storage, processing basics." },
      { id: "sub6", name: "Irrigation & Drainage", desc: "Numericals + formula revision." },
    ],
  },

  plan: {
    title: "Weekly Study Plan",
    subtitle: "Simple structure that most toppers follow consistently.",
    items: [
      { id: "p1", day: "Mon–Fri", plan: "Concept lecture + class notes + 25–40 MCQs/NAT practice" },
      { id: "p2", day: "Saturday", plan: "PYQ mixed set + error log update + weak topics repair" },
      { id: "p3", day: "Sunday", plan: "Full/section mock + deep analysis + next week targets" },
    ],
  },

  resources: {
    title: "Free Resources",
    subtitle: "Start preparation today—free materials for quick momentum.",
    cards: [
      { id: "rs1", title: "Free Roadmap PDF", desc: "Week-wise plan + revision schedule.", cta: "Download" },
      { id: "rs2", title: "Free Demo Class", desc: "Get teaching style + notes quality.", cta: "Watch Demo" },
      { id: "rs3", title: "PYQ Starter Pack", desc: "Topic-tagged PYQs for quick start.", cta: "Get PYQs" },
    ],
  },

  courses: {
    id: "courses",
    title: "Our Popular Courses",
    subtitle: "Choose a course and start today.",
    items: [
      {
        id: "c1",
        category: "Live",
        tag: "BESTSELLER",
        title: "GATE (AG 26/27) LIVE MASTERCOURSE",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b39b7a5f1rec-app.png",
        validity: "Until Exam 2026",
        rating: 4.9,
        originalPrice: 35000,
        currentPrice: 29999,
      },
      {
        id: "c2",
        category: "Recorded",
        tag: "POPULAR",
        title: "GATE (AG 26/27) RECORDED PRO",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b2f404884live-app.png",
        validity: "Until Exam 2026",
        rating: 4.7,
        originalPrice: 30000,
        currentPrice: 24999,
      },
      {
        id: "c3",
        category: "Crash Course",
        tag: "FAST TRACK",
        title: "GATE 2026 RANK BOOSTER",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c57f649a2dblive-app.png",
        validity: "6 Months",
        rating: 4.8,
        originalPrice: 15000,
        currentPrice: 9999,
      },
      {
        id: "c4",
        category: "Notes",
        tag: "SELF PACED",
        title: "COMPLETE STUDY MATERIAL KIT",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b41b6d2c6app-study-matn.png",
        validity: "Lifetime Access",
        rating: 4.6,
        originalPrice: 8000,
        currentPrice: 4999,
      },
      {
        id: "c5",
        category: "Test Series",
        tag: "PRACTICE",
        title: "ALL INDIA TEST SERIES (AITS)",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b3e7c3ccdapp-test-series.png",
        validity: "1 Year",
        rating: 4.9,
        originalPrice: 2000,
        currentPrice: 999,
      },
      {
        id: "c6",
        category: "Notes",
        tag: "REVISION",
        title: "QUICK REVISION FORMULA BOOK",
        image:
          "https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b47d780f1live-app-shorts.png",
        validity: "Hard Copy",
        rating: 4.5,
        originalPrice: 1500,
        currentPrice: 799,
      },
    ],
  },

  whyChoose: {
    title: "Why Choose Us?",
    subtitle: "Learning ecosystem designed for real results.",
    items: [
      { id: "f1", iconClass: "fas fa-chalkboard-teacher", title: "Expert Faculty", desc: "Learn from GATE toppers & experienced mentors." },
      { id: "f2", iconClass: "fas fa-mobile-alt", title: "Anytime Access", desc: "Study on Mobile, Tablet & Desktop." },
      { id: "f3", iconClass: "fas fa-file-pdf", title: "PDF Notes", desc: "Downloadable detailed topic-wise notes." },
      { id: "f4", iconClass: "fas fa-comments", title: "Doubt Support", desc: "Dedicated doubt solving & community." },
      { id: "f5", iconClass: "fas fa-chart-line", title: "Analytics", desc: "Deep performance analysis & insights." },
      { id: "f6", iconClass: "fas fa-book-reader", title: "PYQ Bank", desc: "Solved previous year questions with solutions." },
    ],
  },

  topics: {
    title: "High Weightage Topics",
    subtitle: "Focus areas that usually decide rank.",
    pills: ["Engineering Mathematics", "Soil Science", "Agronomy", "Irrigation & Drainage", "Farm Machinery", "Post Harvest Engineering"],
  },

  testimonials: {
    title: "Success Stories",
    items: [
      { id: "t1", name: "Rahul Kumar", result: "GATE AIR 12", text: "The test series helped me analyze my weak points perfectly." },
      { id: "t2", name: "Sneha Singh", result: "GATE AIR 45", text: "Live lectures were interactive and the notes were concise." },
      { id: "t3", name: "Amit Verma", result: "GATE AIR 05", text: "Best platform for Agri Engineering. Highly recommended." },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      { id: "q1", question: "Can I watch the videos offline?", answer: "Yes, our mobile app allows you to download videos for offline viewing." },
      { id: "q2", question: "Is the test series included?", answer: "Yes, the Mastercourse includes the full test series for free." },
      { id: "q3", question: "What is the language?", answer: "We use Hinglish (Hindi + English mix) to ensure concepts are clear." },
    ],
  },

  finalCta: {
    title: "Ready to start your GATE journey?",
    subtitle: "Choose a course or talk to our mentor for the best path.",
    cards: [
      { id: "cta1", title: "Talk to Mentor", desc: "Get a personalized plan based on your level.", btn: "Book Call" },
      { id: "cta2", title: "Join Test Series", desc: "AITS + analysis + rank improvement strategy.", btn: "Start Now" },
    ],
  },
};

/* -------------------- Reusable Components -------------------- */
const SectionHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
    <div className="title-underline" />
  </div>
);

const Counter = ({ target, duration = 1800, isDecimal = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();
    const end = Number(target);

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(end * progress);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return <span>{isDecimal ? count.toFixed(1) : Math.round(count)}</span>;
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(pageConfig.courses.items.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredCourses = useMemo(() => {
    if (filter === "All") return pageConfig.courses.items;
    return pageConfig.courses.items.filter((c) => c.category === filter);
  }, [filter]);

  // Fixed header offset scroll (better than raw scrollIntoView) [web:6]
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80; // aapke navbar ke approx height
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const top = elementTop - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="page-container">
      <div className="home-wrapper">
        {/* HERO */}
        <section className="hero-modern">
          <div className="hero-content">
            <span className="hero-badge">{pageConfig.hero.badge}</span>
            <h1>{pageConfig.hero.title}</h1>
            <p>{pageConfig.hero.subtitle}</p>

            <div className="hero-buttons">
              {pageConfig.hero.ctas.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  className={c.variant === "primary" ? "btn-primary" : "btn-secondary"}
                  onClick={() => scrollToId(c.href.replace("#", ""))}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-bar" aria-label="Stats">
          {pageConfig.stats.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <h2>
                <Counter target={stat.target} duration={2000} isDecimal={stat.isDecimal} />
                {stat.suffix}
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <div className="about-wrapper">
          <Aboutsection />
        </div>

        {/* ROADMAP */}
        <section
          id={pageConfig.roadmap.id}
          className="section-padding bg-light"
          style={{ scrollMarginTop: "90px" }} // fixed header safe [web:6][web:15]
        >
          <SectionHeader title={pageConfig.roadmap.title} subtitle={pageConfig.roadmap.subtitle} />
          <div className="roadmap-grid">
            {pageConfig.roadmap.steps.map((s) => (
              <div className="roadmap-card" key={s.id}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESSENTIALS */}
        <section className="section-padding">
          <SectionHeader title={pageConfig.essentials.title} subtitle={pageConfig.essentials.subtitle} />
          <div className="info-grid">
            {pageConfig.essentials.cards.map((box) => (
              <div className="info-card" key={box.id}>
                <h3>{box.title}</h3>
                <ul className="info-list">
                  {box.points.map((p, i) => (
                    <li key={`${box.id}-${i}`}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SUBJECTS */}
        <section className="section-padding bg-light">
          <SectionHeader title={pageConfig.subjects.title} subtitle={pageConfig.subjects.subtitle} />
          <div className="subjects-grid">
            {pageConfig.subjects.items.map((s) => (
              <div className="subject-card" key={s.id}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WEEKLY PLAN */}
        <section className="section-padding">
          <SectionHeader title={pageConfig.plan.title} subtitle={pageConfig.plan.subtitle} />
          <div className="plan-grid">
            {pageConfig.plan.items.map((p) => (
              <div className="plan-card" key={p.id}>
                <div className="plan-day">{p.day}</div>
                <div className="plan-text">{p.plan}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="section-padding bg-light">
          <SectionHeader title={pageConfig.resources.title} subtitle={pageConfig.resources.subtitle} />
          <div className="resources-grid">
            {pageConfig.resources.cards.map((r) => (
              <div className="resource-card" key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <button className="btn-primary" type="button">
                  {r.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section
          id={pageConfig.courses.id}
          className="courses-section bg-light section-padding"
          style={{ scrollMarginTop: "90px" }} // fixed header safe [web:6][web:15]
        >
          <SectionHeader title={pageConfig.courses.title} subtitle={pageConfig.courses.subtitle} />

          <div className="filter-container" aria-label="Course filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.length ? (
              filteredCourses.map((course) => (
                <div className="course-card-modern fade-in" key={course.id}>
                  <div className="card-badge">{course.tag}</div>

                  <div className="card-image-box">
                    <img src={course.image} alt={course.title} loading="lazy" />
                  </div>

                  <div className="card-details">
                    <div className="rating-row">
                      <span className="star">
                        <i className="fas fa-star" /> {course.rating}
                      </span>
                      <span className="category-tag">{course.category}</span>
                    </div>

                    <h3>{course.title}</h3>

                    <div className="meta-row">
                      <span className="meta-pill">
                        <i className="fas fa-clock" /> {course.validity}
                      </span>
                    </div>

                    <div className="price-row">
                      <div>
                        <span className="price-strike">₹{course.originalPrice}</span>
                        <span className="price-main">₹{course.currentPrice}</span>
                      </div>
                      <button className="btn-cart" type="button" aria-label="Add to cart">
                        <i className="fas fa-shopping-cart" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No courses found in this category.</p>
            )}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="section-padding">
          <SectionHeader title={pageConfig.whyChoose.title} subtitle={pageConfig.whyChoose.subtitle} />
          <div className="feature-grid">
            {pageConfig.whyChoose.items.map((feature) => (
              <div className="feature-card-modern" key={feature.id}>
                <div className="icon-circle">
                  <i className={feature.iconClass} aria-hidden="true" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TOPICS */}
        <section className="section-padding bg-light">
          <SectionHeader title={pageConfig.topics.title} subtitle={pageConfig.topics.subtitle} />
          <div className="topics-grid">
            {pageConfig.topics.pills.map((t) => (
              <div className="topic-pill" key={t}>
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding bg-light testimonials-section">
          <SectionHeader title={pageConfig.testimonials.title} />
          <div className="testimonial-grid">
            {pageConfig.testimonials.items.map((student) => (
              <div className="testimonial-card" key={student.id}>
                <div className="quote-icon">
                  <i className="fas fa-quote-left" aria-hidden="true" />
                </div>
                <p>"{student.text}"</p>
                <div className="student-info">
                  <h4>{student.name}</h4>
                  <span>{student.result}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding faq-section">
          <SectionHeader title={pageConfig.faq.title} />
          <div className="faq-container">
            {pageConfig.faq.items.map((item, index) => {
              const open = activeFaq === index;
              return (
                <div className="faq-item" key={item.id}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaq(open ? null : index)}
                    aria-expanded={open}
                  >
                    {item.question}
                    <span>{open ? "-" : "+"}</span>
                  </button>
                  {open ? <div className="faq-answer">{item.answer}</div> : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-strip">
          <div className="cta-inner">
            <div className="cta-left">
              <h2>{pageConfig.finalCta.title}</h2>
              <p>{pageConfig.finalCta.subtitle}</p>
            </div>

            <div className="cta-right">
              {pageConfig.finalCta.cards.map((c) => (
                <div className="cta-mini-card" key={c.id}>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <button className="btn-secondary" type="button">
                    {c.btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
