import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import '../CSS/Contact.css';
import '../CSS/Nav.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  // FAQ State
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I access the purchased study material?",
      answer: "Once purchased, go to your Dashboard > My Library. You can view PDFs online or download them if permitted."
    },
    {
      question: "Can I attempt a mock test multiple times?",
      answer: "Yes! Most of our mock tests allow unlimited attempts so you can practice until you are perfect."
    },
    {
      question: "Is there a refund policy for courses?",
      answer: "We offer a 7-day money-back guarantee if you are not satisfied with the course content. T&C apply."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus(null);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 2000);
  };

  return (
    <>
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="contact-page">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content fade-in-up">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Our team is always here to chat.</p>
          </div>
        </div>

        <div className="container contact-wrapper">
          
          {/* Left: Contact Info & FAQ */}
          <div className="contact-left fade-in-up delay-1">
            <div className="section-title">
              <h2>Contact Information</h2>
              <div className="underline"></div>
            </div>
            
            <div className="info-grid">
              <div className="info-card">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div>
                  <h3>Our Head Office</h3>
                  <p>123, Education Hub, Zone-II, Bhopal, MP</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><FaPhoneAlt /></div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h3>Email Support</h3>
                  <p>support@jagateducation.com</p>
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

          {/* Right: Modern Form */}
          <div className="contact-form-container fade-in-up delay-2">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Message</h2>
              <p className="form-subtitle">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="input-group">
                <div className="floating-input">
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label>Your Name</label>
                </div>
                <div className="floating-input">
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label>Email Address</label>
                </div>
              </div>

              <div className="floating-input">
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Subject</label>
              </div>

              <div className="floating-input">
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                ></textarea>
                <label>Message</label>
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

        {/* Full Width Map - REAL WORKING LINK for Zone-II Bhopal */}
        <div className="map-section">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.196328315263!2d77.43232141496734!3d23.235944184845187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426615967073%3A0x264871d31d102450!2sZone-II%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin" 
             width="100%" 
             height="450" 
             style={{border:0}} 
             allowFullScreen="" 
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             title="Jagat Education Location"
           ></iframe>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;