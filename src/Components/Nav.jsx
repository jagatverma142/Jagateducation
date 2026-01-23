import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../CSS/Nav.css";

// Data moved outside component to prevent re-creation on render
const navItems = [
  { name: "Home", path: "/", type: "link" },
  { name: "About Us", path: "/about", type: "link" },
  {
    name: "Features",
    type: "dropdown",
    items: [
      { name: "Online Classes", path: "/online-classes" },
      { name: "Study Material", path: "/study-material" },
      { name: "Mock Tests", path: "/mock-tests" },
    ],
  },
  {
    name: "Test Packages",
    type: "dropdown",
    items: [
      { name: "GATE Package", path: "/gate-package" },
      { name: "JEE Package", path: "/jee-package" },
      { name: "NEET Package", path: "/neet-package" },
    ],
  },
  { name: "Contact", path: "/contact", type: "link" },
  { name: "Login/Register", path: "/login", type: "button" },
];

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Mobile dropdown state
  const location = useLocation(); // To detect current URL

  // Toggle Main Menu
  const toggleMenu = () => setMenuActive(!menuActive);

  // Toggle Mobile Dropdowns
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(index); // Open specific dropdown
    }
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuActive);
  }, [menuActive]);

  // Close Menu on Route Change (Dynamic UX)
  useEffect(() => {
    setMenuActive(false);
    setActiveDropdown(null);
  }, [location]);

  // Check if a Dropdown Parent should be active
  const isParentActive = (children) => {
    return children.some((child) => child.path === location.pathname);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="navbar">
        
        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
          <div className="logo-symbol">J</div>
          <div className="logo-text">
            <span className="text-main">AGAT</span>
            <span className="text-sub">EDUCATION</span>
          </div>
        </Link>

        {/* HAMBURGER TOGGLE */}
        <div 
          className={`menu-toggle ${menuActive ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={item.type === "dropdown" ? "dropdown-parent" : ""}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              
              {/* --- STANDARD LINK --- */}
              {item.type === "link" && (
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.name}
                </NavLink>
              )}

              {/* --- DROPDOWN (Dynamic Mobile Handling) --- */}
              {item.type === "dropdown" && (
                <>
                  <div 
                    className={`dropdown-trigger ${isParentActive(item.items) ? "active" : ""}`} 
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    {/* SVG Chevron Icon */}
                    <svg 
                      className={`chevron ${activeDropdown === index ? "rotate" : ""}`} 
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>

                  {/* Dropdown Menu */}
                  <ul className={`dropdown ${activeDropdown === index ? "show-mobile" : ""}`}>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink to={subItem.path}>
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* --- BUTTON TYPE --- */}
              {item.type === "button" && (
                <NavLink to={item.path} className="btn-login">
                  {item.name}
                </NavLink>
              )}

            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;