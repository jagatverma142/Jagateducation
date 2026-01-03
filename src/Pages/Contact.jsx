import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import '../CSS/Contact.css';
import '../CSS/Nav.css';
import '../App.css';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, 
  FaCheckCircle, FaChevronDown, FaChevronUp, FaCopy, FaExternalLinkAlt, FaExclamationCircle 
} from 'react-icons/fa';

const Contact = () => {
  // --- 1. State Management ---
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'
  const [activeIndex, setActiveIndex] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [copiedField, setCopiedField] = useState(null);

  // --- 2. Refs for Scroll Animations ---
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- 3. Intersection Observer (Scroll Animation Logic) ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);
    if (leftRef.current) observer.observe(leftRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  // --- 4. Helper Functions ---
  
  // Validation Logic
  const validateField = (name, value) => {
    let error = '';
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) error = 'Invalid email address';
    if (name === 'name' && value.length < 3) error = 'Name must be at least 3 chars';
    if (name === 'message' && value.length < 10) error = 'Message is too short';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final Validation Check
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Please fix the errors in the form.', 'error');
      return;
    }

    setStatus('submitting');

    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      showToast('Message sent successfully! We will contact you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 2000);
  };

  // Click to Copy Logic
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    showToast(`${type} copied to clipboard!`, 'success');
    setTimeout(() => setCopiedField(null), 2000);
  };

  // FAQ Toggle
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    { question: "How do I access purchased study material?", answer: "Go to Dashboard > My Library. You can view PDFs online or download them if permitted." },
    { question: "Can I attempt a mock test multiple times?", answer: "Yes! Most mock tests allow unlimited attempts for better practice." },
    { question: "Is there a refund policy?", answer: "We offer a 7-day money-back guarantee if you are not satisfied. T&C apply." }
  ];

  return (
    <>
      <div className="nav-wrapper"><Navbar /></div>

      {/* --- TOAST NOTIFICATION --- */}
      <div className={`toast-notification ${toast.show ? 'show' : ''} ${toast.type}`}>
        {toast.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
        <span>{toast.message}</span>
      </div>

      <div className="contact-page">
        {/* --- HERO SECTION --- */}
        <div className="contact-hero" ref={heroRef}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Our team is always here to chat.</p>
          </div>
        </div>

        <div className="container contact-wrapper">
          
          {/* --- LEFT COLUMN: INFO & FAQ --- */}
          <div className="contact-left scroll-hidden" ref={leftRef}>
            <div className="section-title">
              <h2>Contact Information</h2>
              <div className="underline"></div>
            </div>
            
            <div className="info-grid">
              {/* Address */}
              <div className="info-card">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h3>Our Head Office</h3>
                  <p>123, Education Hub, Zone-II, Bhopal, MP</p>
                </div>
              </div>

              {/* Phone (Interactive) */}
              <div 
                className="info-card interactive" 
                onClick={() => handleCopy('+919876543210', 'Phone Number')}
              >
                <div className="icon-box"><FaPhoneAlt /></div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 98765 43210</p>
                </div>
                <div className="copy-icon">
                  {copiedField === 'Phone Number' ? <FaCheckCircle color="#2ecc71"/> : <FaCopy />}
                </div>
              </div>

              {/* Email (Interactive) */}
              <div 
                className="info-card interactive"
                onClick={() => handleCopy('support@jagateducation.com', 'Email')}
              >
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h3>Email Support</h3>
                  <p>support@jagateducation.com</p>
                </div>
                <div className="copy-icon">
                  {copiedField === 'Email' ? <FaCheckCircle color="#2ecc71"/> : <FaCopy />}
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
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
            </div>
          </div>

          {/* --- RIGHT COLUMN: DYNAMIC FORM --- */}
          <div className="contact-form-container scroll-hidden delay-200" ref={formRef}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Message</h2>
              <p className="form-subtitle">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="input-group">
                {/* Name Input */}
                <div className={`floating-input ${errors.name ? 'has-error' : ''}`}>
                  <input 
                    type="text" name="name" placeholder=" "
                    value={formData.name} onChange={handleChange}
                  />
                  <label>Your Name</label>
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                {/* Email Input */}
                <div className={`floating-input ${errors.email ? 'has-error' : ''}`}>
                  <input 
                    type="email" name="email" placeholder=" "
                    value={formData.email} onChange={handleChange}
                  />
                  <label>Email Address</label>
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="floating-input">
                <input 
                  type="text" name="subject" placeholder=" " required
                  value={formData.subject} onChange={handleChange}
                />
                <label>Subject</label>
              </div>

              {/* Message Input */}
              <div className={`floating-input ${errors.message ? 'has-error' : ''}`}>
                <textarea 
                  name="message" rows="4" placeholder=" "
                  value={formData.message} onChange={handleChange}
                ></textarea>
                <label>Message</label>
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${status}`} 
                disabled={status === 'submitting' || status === 'success'}
              >
                {status === 'submitting' ? <div className="loader"></div> : 
                 status === 'success' ? <>Message Sent <FaCheckCircle /></> : 
                 <>Send Message <FaPaperPlane /></>}
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION WITH OVERLAY --- */}
        <div className="map-section-wrapper">
          <div className="map-overlay-btn">
             <a href="https://goo.gl/maps/bhopal" target="_blank" rel="noreferrer" className="directions-btn">
                Get Directions <FaExternalLinkAlt />
             </a>
          </div>
          <div className="map-section">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58656.81534932067!2d77.38477755519864!3d23.238466635811776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
               width="100%" height="450" style={{border:0}} 
               allowFullScreen="" loading="lazy" 
               title="Jagat Education Location"
             ></iframe>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;