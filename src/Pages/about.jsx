import React, { useEffect, useMemo, useRef, useState } from "react";
import "../CSS/About.css";

const aboutConfig = {
  hero: {
    title: "About JAGAT EDUCATION",
    subtitle: "GATE (AG) focused learning with mentorship, practice and results.",
    bgImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2070&q=80",
    ctas: [
      { id: "h1", label: "Our Story", to: "story" },
      { id: "h2", label: "Mentorship", to: "mentorship" },
    ],
  },

  story: {
    id: "story",
    title: "Our Story",
    heading: "A Legacy of Results",
    text:
      "We help students prepare for GATE (Agriculture) with structured classes, PYQ mapping, mock tests, analysis and mentorship. Our goal is clarity, consistency and rank improvement.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
  },

  highlights: {
    title: "Our Highlights",
    subtitle: "Quick facts students care about.",
    cards: [
      { id: "hl1", title: "Focused for GATE (AG)", desc: "Content built around exam needs + PYQs." },
      { id: "hl2", title: "Notes + Practice", desc: "PDF notes + daily practice + tests." },
      { id: "hl3", title: "Support System", desc: "Doubts + mentorship + weekly review." },
    ],
  },

  mv: [
    {
      id: "m1",
      icon: "🎯",
      frontTitle: "Our Mission",
      backTitle: "Mission",
      backText: "Provide structured, high-quality GATE (AG) education with strong practice and support.",
    },
    {
      id: "m2",
      icon: "🔭",
      frontTitle: "Our Vision",
      backTitle: "Vision",
      backText: "Build the most trusted ecosystem for Agri Engineering aspirants through outcomes.",
    },
  ],

  strengths: {
    title: "What Makes Us Different",
    subtitle: "A complete ecosystem built for GATE (AG) success.",
    items: [
      { id: "s1", title: "Structured Roadmap", desc: "Daily/weekly targets + revision loops and test milestones." },
      { id: "s2", title: "PYQ + Concept Mapping", desc: "Every topic mapped with PYQs so you focus on high ROI." },
      { id: "s3", title: "Test Analysis", desc: "Error log + time analysis + weak-topic repair plan." },
      { id: "s4", title: "Mentorship & Doubts", desc: "Guidance for strategy + fast doubt resolution support." },
    ],
  },

  values: {
    title: "Our Values",
    subtitle: "How we teach and support students.",
    items: [
      { id: "v1", title: "Clarity First", desc: "Concept clarity before shortcuts." },
      { id: "v2", title: "Consistency", desc: "Small daily progress beats occasional sprints." },
      { id: "v3", title: "Practice Driven", desc: "PYQ + tests + analysis = rank improvement." },
      { id: "v4", title: "Student Support", desc: "Doubts + mentorship + accountability." },
    ],
  },

  timeline: {
    title: "Journey Timeline",
    subtitle: "How we evolved for better student outcomes.",
    items: [
      { id: "y1", year: "2010", text: "Started with classroom-based guidance." },
      { id: "y2", year: "2016", text: "Added structured test practice + analysis." },
      { id: "y3", year: "2020", text: "Hybrid learning: online + mentorship system." },
      { id: "y4", year: "2024", text: "Better notes, PYQ mapping, and performance tracking." },
    ],
  },

  mentorship: {
    id: "mentorship",
    title: "Mentorship Process",
    subtitle: "How we guide you from start to rank.",
    steps: [
      { id: "p1", title: "Level Check", desc: "We identify your strong/weak topics." },
      { id: "p2", title: "Custom Plan", desc: "Targets + timetable + revision strategy." },
      { id: "p3", title: "Weekly Review", desc: "Progress check with corrections." },
      { id: "p4", title: "Final Boost", desc: "Mocks + analysis + rapid revision." },
    ],
  },

  team: {
    title: "Meet Our Leadership",
    cards: [
      {
        id: "t1",
        name: "Mr. R. Sharma",
        role: "Principal",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        pos: "50% 20%",
      },
      {
        id: "t2",
        name: "Mrs. A. Verma",
        role: "Vice Principal",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        pos: "50% 25%",
      },
      {
        id: "t3",
        name: "Mr. K. Singh",
        role: "Director",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
        pos: "50% 18%",
      },
    ],
  },

  faq: {
    title: "FAQs",
    subtitle: "Common questions by students.",
    items: [
      { id: "q1", q: "Kya mentorship available hai?", a: "Haan, weekly review + guidance + doubt support included hai." },
      { id: "q2", q: "Notes aur PYQs milenge?", a: "Haan, topic-wise notes aur PYQ mapping supported hai." },
      { id: "q3", q: "Kaise start karun?", a: "Roadmap follow karo, daily practice + weekly mock + analysis." },
    ],
  },

  cta: {
    title: "Ready to Start Your GATE (AG) Journey?",
    subtitle: "Start with a demo or talk to mentor for a custom plan.",
    buttons: [
      { id: "b1", label: "Get Free Demo" },
      { id: "b2", label: "Talk to Mentor" },
    ],
  },
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="about-section-header">
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : null}
    <div className="about-underline" />
  </div>
);

const CounterBox = ({ label, value, suffix }) => (
  <div className="stat-item">
    <h2>
      {value}
      {suffix}
    </h2>
    <p>{label}</p>
  </div>
);

export default function About() {
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
  }, []);

  const targets = useMemo(() => ({ years: 15, students: 2000, faculty: 50, commit: 100 }), []);
  const [counts, setCounts] = useState({ years: 0, students: 0, faculty: 0, commit: 0 });

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setCounts({
        years: Math.round(targets.years * t),
        students: Math.round(targets.students * t),
        faculty: Math.round(targets.faculty * t),
        commit: Math.round(targets.commit * t),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [targets]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="about-page">
      <section className="about-hero" style={{ backgroundImage: `url(${aboutConfig.hero.bgImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content hidden">
          <h1 className="float-text">{aboutConfig.hero.title}</h1>
          <p className="float-text delay">{aboutConfig.hero.subtitle}</p>

          <div className="hero-cta">
            {aboutConfig.hero.ctas.map((b) => (
              <button key={b.id} type="button" className="hero-btn" onClick={() => scrollToId(b.to)}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id={aboutConfig.story.id} className="about-section container" style={{ scrollMarginTop: 90 }}>
        <div className="story-grid">
          <div className="story-image hidden slide-left">
            <div className="img-frame-3d">
              <img src={aboutConfig.story.image} alt="Our Institute" loading="lazy" />
            </div>
          </div>
          <div className="story-content hidden slide-right">
            <h2>{aboutConfig.story.title}</h2>
            <h3>{aboutConfig.story.heading}</h3>
            <p>{aboutConfig.story.text}</p>
          </div>
        </div>
      </section>

      <section className="about-section bg-light">
        <div className="container">
          <SectionHeader title={aboutConfig.highlights.title} subtitle={aboutConfig.highlights.subtitle} />
          <div className="highlight-grid">
            {aboutConfig.highlights.cards.map((c) => (
              <div className="highlight-card hidden" key={c.id}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section bg-light">
        <div className="container">
          <div className="mv-grid">
            {aboutConfig.mv.map((card) => (
              <div className="flip-card hidden" key={card.id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="icon">{card.icon}</div>
                    <h2>{card.frontTitle}</h2>
                    <p>Tap / Hover to see details</p>
                  </div>
                  <div className="flip-card-back">
                    <h2>{card.backTitle}</h2>
                    <p>{card.backText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-banner hidden">
        <CounterBox label="Years Experience" value={counts.years} suffix="+" />
        <CounterBox label="Happy Students" value={counts.students} suffix="+" />
        <CounterBox label="Expert Faculty" value={counts.faculty} suffix="+" />
        <CounterBox label="Commitment" value={counts.commit} suffix="%" />
      </section>

      <section className="about-section container">
        <SectionHeader title={aboutConfig.strengths.title} subtitle={aboutConfig.strengths.subtitle} />
        <div className="strength-grid">
          {aboutConfig.strengths.items.map((x) => (
            <div className="strength-card hidden" key={x.id}>
              <h3>{x.title}</h3>
              <p>{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section bg-light">
        <div className="container">
          <SectionHeader title={aboutConfig.values.title} subtitle={aboutConfig.values.subtitle} />
          <div className="value-grid">
            {aboutConfig.values.items.map((v) => (
              <div className="value-card hidden" key={v.id}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section container">
        <SectionHeader title={aboutConfig.timeline.title} subtitle={aboutConfig.timeline.subtitle} />
        <div className="timeline hidden">
          {aboutConfig.timeline.items.map((t) => (
            <div className="timeline-item" key={t.id}>
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-text">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id={aboutConfig.mentorship.id} className="about-section bg-light" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <SectionHeader title={aboutConfig.mentorship.title} subtitle={aboutConfig.mentorship.subtitle} />
          <div className="process-grid">
            {aboutConfig.mentorship.steps.map((s) => (
              <div className="process-card hidden" key={s.id}>
                <div className="step-badge">{s.id.toUpperCase()}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section container">
        <h2 className="section-title hidden">{aboutConfig.team.title}</h2>
        <div className="team-grid">
          {aboutConfig.team.cards.map((m) => (
            <article className="team-card hidden" key={m.id}>
              <div className="team-img-wrapper">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  style={{ objectPosition: m.pos || "50% 35%" }}
                />
              </div>
              <div className="team-meta">
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section bg-light">
        <div className="container">
          <SectionHeader title={aboutConfig.faq.title} subtitle={aboutConfig.faq.subtitle} />
          <div className="faq-wrap">
            {aboutConfig.faq.items.map((f, idx) => {
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
        </div>
      </section>

      <section className="cta-banner hidden">
        <div className="cta-content">
          <h2>{aboutConfig.cta.title}</h2>
          <p>{aboutConfig.cta.subtitle}</p>
          <div className="cta-actions">
            {aboutConfig.cta.buttons.map((b) => (
              <button key={b.id} className="cta-btn" type="button">
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
