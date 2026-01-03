import React, { useState } from 'react';
import '../CSS/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// --- CONFIGURATION: EDIT YOUR CONTENT HERE ---
const footerContent = {
  brand: {
    title: "JAGAT",
    highlight: "EDUCATION",
    desc: "India's Leading Agri GATE Institute. Empowering students with quality resources and expert guidance since 2015.",
  },
  socials: [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ],
  linkSections: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Test Packages", url: "/packages" },
        { label: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Our Programs",
      links: [
        { label: "Agri GATE Coaching", url: "/coaching" },
        { label: "Test Series 2026", url: "/test-series" },
        { label: "Free Study Material", url: "/material" },
        { label: "Previous Year Papers", url: "/papers" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    desc: "Subscribe to get the latest updates on exam dates.",
    placeholder: "Enter your email",
    buttonText: "SUBSCRIBE",
  },
  bottom: {
    copyright: "Jagat Education. All Rights Reserved.",
    links: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
    ],
  },
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // Add backend logic here
    setEmail('');
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* 1. Brand Section */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">
            {footerContent.brand.title}
            <span>{footerContent.brand.highlight}</span>
          </h2>
          <p className="footer-desc">{footerContent.brand.desc}</p>
          <div className="footer-socials">
            {footerContent.socials.map((social, idx) => (
              <a key={idx} href={social.link} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Dynamic Link Sections */}
        {footerContent.linkSections.map((section, idx) => (
          <div key={idx} className="footer-col links-col">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 3. Newsletter Section */}
        <div className="footer-col newsletter-col">
          <h3>{footerContent.newsletter.title}</h3>
          <p>{footerContent.newsletter.desc}</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder={footerContent.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{footerContent.newsletter.buttonText}</button>
          </form>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {currentYear} {footerContent.bottom.copyright}</p>
          <div className="legal-links">
            {footerContent.bottom.links.map((link, idx) => (
              <a key={idx} href={link.url}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;