import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import "../CSS/Contact.css";
import "../CSS/Nav.css";
import "../App.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaCopy,
  FaExternalLinkAlt,
  FaExclamationCircle,
  FaHeadset,
  FaBookOpen,
  FaBug,
  FaMoneyBillWave,
  FaGraduationCap,
} from "react-icons/fa";

const Contact = () => {
  // --- 1) State ---
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | submitting | success | error
  const [activeIndex, setActiveIndex] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [copiedField, setCopiedField] = useState(null);
  const [activeTopic, setActiveTopic] = useState("All");

  // --- 2) Refs ---
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const topicsRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- 3) Intersection Observer ---
  useEffect(() => {
    const els = [heroRef.current, leftRef.current, formRef.current, topicsRef.current, mapRef.current].filter(Boolean);
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("animate-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("animate-active")),
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- 4) Helpers ---
  const validateField = (name, value) => {
    let error = "";
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) error = "Invalid email address";
    if (name === "name" && value && value.length < 3) error = "Name must be at least 3 chars";
    if (name === "message" && value && value.length < 10) error = "Message is too short";
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fix the errors in the form.", "error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      showToast("Message sent successfully! We will contact you soon.", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus(null), 2500);
    }, 1500);
  };

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(type);
      showToast(`${type} copied to clipboard!`, "success");
      setTimeout(() => setCopiedField(null), 1600);
    } catch {
      showToast("Copy failed. Please copy manually.", "error");
    }
  };

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // --- 5) Topic sections (dynamic) ---
  const topics = useMemo(
    () => [
      { key: "All", label: "All" , icon: <FaHeadset /> },
      { key: "Admissions", label: "Admissions", icon: <FaGraduationCap /> },
      { key: "Study Material", label: "Study Material", icon: <FaBookOpen /> },
      { key: "Mock Tests", label: "Mock Tests", icon: <FaBookOpen /> },
      { key: "Technical Issue", label: "Technical Issue", icon: <FaBug /> },
      { key: "Refund/Payment", label: "Refund/Payment", icon: <FaMoneyBillWave /> },
    ],
    []
  );

  const supportCards = useMemo(
    () => [
      {
        id: "s1",
        topic: "Admissions",
        title: "Course & Batch Counseling",
        desc: "Help choosing batch, eligibility, schedule.",
        cta: "Ask Admissions",
        onClick: () => {
          setActiveTopic("Admissions");
          setFormData((p) => ({ ...p, subject: "Admissions Query" }));
          scrollToRef(formRef);
        },
      },
      {
        id: "s2",
        topic: "Study Material",
        title: "Notes / PDFs / Library Help",
        desc: "Access purchased material and downloads.",
        cta: "Get Library Help",
        onClick: () => {
          setActiveTopic("Study Material");
          setFormData((p) => ({ ...p, subject: "Study Material Support" }));
          scrollToRef(formRef);
        },
      },
      {
        id: "s3",
        topic: "Mock Tests",
        title: "Mock / Result / Attempt Issues",
        desc: "Attempt, score, analysis, rank & access.",
        cta: "Report Mock Issue",
        onClick: () => {
          setActiveTopic("Mock Tests");
          setFormData((p) => ({ ...p, subject: "Mock Test Support" }));
          scrollToRef(formRef);
        },
      },
      {
        id: "s4",
        topic: "Technical Issue",
        title: "Login / App / Website Bug",
        desc: "Site not working, login, playback issues.",
        cta: "Report Bug",
        onClick: () => {
          setActiveTopic("Technical Issue");
          setFormData((p) => ({ ...p, subject: "Technical Issue" }));
          scrollToRef(formRef);
        },
      },
      {
        id: "s5",
        topic: "Refund/Payment",
        title: "Payment / Refund / Invoice",
        desc: "Payment failed, refund status, invoice.",
        cta: "Payment Support",
        onClick: () => {
          setActiveTopic("Refund/Payment");
          setFormData((p) => ({ ...p, subject: "Refund/Payment Support" }));
          scrollToRef(formRef);
        },
      },
    ],
    []
  );

  const visibleSupportCards = useMemo(() => {
    if (activeTopic === "All") return supportCards;
    return supportCards.filter((c) => c.topic === activeTopic);
  }, [activeTopic, supportCards]);

  const faqs = useMemo(
    () => [
      {
        topic: "Study Material",
        question: "How do I access purchased study material?",
        answer: "Go to Dashboard > My Library. You can view PDFs online or download them if permitted.",
      },
      {
        topic: "Mock Tests",
        question: "Can I attempt a mock test multiple times?",
        answer: "Yes! Most mock tests allow unlimited attempts for better practice.",
      },
      {
        topic: "Refund/Payment",
        question: "Is there a refund policy?",
        answer: "We offer a 7-day money-back guarantee if you are not satisfied. T&C apply.",
      },
      {
        topic: "Technical Issue",
        question: "Video/playback not working, what should I do?",
        answer: "Try refresh, switch network, clear cache; if still failing, report with screenshot + device details.",
      },
    ],
    []
  );

  const visibleFaqs = useMemo(() => {
    if (activeTopic === "All") return faqs;
    return faqs.filter((f) => f.topic === activeTopic);
  }, [activeTopic, faqs]);

  return (
    <div className="page-container">
      <div className="nav-wrapper"><Navbar /></div>

      {/* TOAST */}
      <div className={`toast-notification ${toast.show ? "show" : ""} ${toast.type}`}>
        {toast.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
        <span>{toast.message}</span>
      </div>

      <div className="contact-page">
        {/* HERO */}
        <div className="contact-hero scroll-hidden" ref={heroRef}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-pill">Support Center</span>
            <h1>Get in Touch</h1>
            <p>Choose a topic and message us—our team replies within 24 hours.</p>

            <div className="hero-actions">
              <button type="button" className="hero-btn primary" onClick={() => scrollToRef(formRef)}>
                Send Message <FaPaperPlane />
              </button>
              <button type="button" className="hero-btn secondary" onClick={() => scrollToRef(mapRef)}>
                View Location <FaMapMarkerAlt />
              </button>
            </div>
          </div>
        </div>

        {/* TOPIC SECTION */}
        <section className="container topic-section scroll-hidden" ref={topicsRef}>
          <div className="section-title center">
            <h2>Choose a Topic</h2>
            <div className="underline" />
            <p className="muted">Filters support cards + FAQs, and helps prefill your subject.</p>
          </div>

          <div className="topic-pills">
            {topics.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`topic-pill ${activeTopic === t.key ? "active" : ""}`}
                onClick={() => {
                  setActiveTopic(t.key);
                  if (t.key !== "All") setFormData((p) => ({ ...p, subject: `${t.key} Support` }));
                }}
              >
                <span className="tp-ico">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </section>

        <div className="container contact-wrapper">
          {/* LEFT */}
          <div className="contact-left scroll-hidden" ref={leftRef}>
            <div className="section-title">
              <h2>Contact Information</h2>
              <div className="underline" />
            </div>

            <div className="info-grid">
              <div className="info-card">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h3>Our Head Office</h3>
                  <p>123, Education Hub, Zone-II, Bhopal, MP</p>
                </div>
              </div>

              <div
                className="info-card interactive"
                onClick={() => handleCopy("+919876543210", "Phone Number")}
                role="button"
                tabIndex={0}
              >
                <div className="icon-box"><FaPhoneAlt /></div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 98765 43210</p>
                </div>
                <div className="copy-icon">
                  {copiedField === "Phone Number" ? <FaCheckCircle color="#10b981" /> : <FaCopy />}
                </div>
              </div>

              <div
                className="info-card interactive"
                onClick={() => handleCopy("support@jagateducation.com", "Email")}
                role="button"
                tabIndex={0}
              >
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h3>Email Support</h3>
                  <p>support@jagateducation.com</p>
                </div>
                <div className="copy-icon">
                  {copiedField === "Email" ? <FaCheckCircle color="#10b981" /> : <FaCopy />}
                </div>
              </div>
            </div>

            {/* SUPPORT CHANNELS */}
            <div className="support-section">
              <h3>Support Channels</h3>
              <div className="support-grid">
                {visibleSupportCards.map((c) => (
                  <button key={c.id} type="button" className="support-card" onClick={c.onClick}>
                    <div className="support-top">
                      <span className="support-tag">{c.topic}</span>
                      <span className="support-cta">{c.cta} →</span>
                    </div>
                    <div className="support-title">{c.title}</div>
                    <div className="support-desc">{c.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>

              {visibleFaqs.length === 0 ? (
                <div className="empty-glass">
                  <h4>No FAQs for this topic</h4>
                  <p>Try selecting “All” topics or send us a message.</p>
                </div>
              ) : (
                <div className="accordion">
                  {visibleFaqs.map((faq, index) => (
                    <div
                      key={`${faq.question}-${index}`}
                      className={`faq-item ${activeIndex === index ? "active" : ""}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="faq-header">
                        <span>{faq.question}</span>
                        {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                      <div className="faq-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form-container scroll-hidden delay-200" ref={formRef}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Message</h2>
              <p className="form-subtitle">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="form-badge-row">
                <span className="form-badge">
                  Active topic: <strong>{activeTopic}</strong>
                </span>
                <button type="button" className="link-btn" onClick={() => { setActiveTopic("All"); }}>
                  Clear topic
                </button>
              </div>

              <div className="input-group">
                <div className={`floating-input ${errors.name ? "has-error" : ""}`}>
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label>Your Name</label>
                  {errors.name ? <span className="error-msg">{errors.name}</span> : null}
                </div>

                <div className={`floating-input ${errors.email ? "has-error" : ""}`}>
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                  {errors.email ? <span className="error-msg">{errors.email}</span> : null}
                </div>
              </div>

              <div className={`floating-input ${errors.subject ? "has-error" : ""}`}>
                <input
                  type="text"
                  name="subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label>Subject</label>
                {errors.subject ? <span className="error-msg">{errors.subject}</span> : null}
              </div>

              <div className={`floating-input ${errors.message ? "has-error" : ""}`}>
                <textarea
                  name="message"
                  rows="4"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                />
                <label>Message</label>
                {errors.message ? <span className="error-msg">{errors.message}</span> : null}
              </div>

              <button
                type="submit"
                className={`submit-btn ${status || ""}`}
                disabled={status === "submitting" || status === "success"}
              >
                {status === "submitting" ? (
                  <div className="loader" />
                ) : status === "success" ? (
                  <>
                    Message Sent <FaCheckCircle />
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="map-section-wrapper scroll-hidden" ref={mapRef}>
          <div className="map-overlay-btn">
            <a
              href="https://goo.gl/maps/bhopal"
              target="_blank"
              rel="noreferrer"
              className="directions-btn"
            >
              Get Directions <FaExternalLinkAlt />
            </a>
          </div>

          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58656.81534932067!2d77.38477755519864!3d23.238466635811776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Jagat Education Location"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
