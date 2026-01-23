import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../CSS/Nav.css"; // Ensure ye path sahi ho

// Data Array
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Toggle Menu
  const toggleMenu = () => setMenuActive(!menuActive);

  // Toggle Dropdown (Mobile)
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "auto";
  }, [menuActive]);

  // Close Menu on Link Click
  const closeMenu = () => {
    setMenuActive(false);
    setActiveDropdown(null);
  };

  // Auto Close on Route Change
  useEffect(() => {
    closeMenu();
  }, [location]);

  const isParentActive = (children) => {
    return children.some((child) => child.path === location.pathname);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-symbol">J</div>
          <div className="logo-text">
            <span className="text-main">AGAT</span>
            <span className="text-sub">EDUCATION</span>
          </div>
        </Link>

        {/* HAMBURGER BUTTON */}
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* MENU LINKS */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={item.type === "dropdown" ? "dropdown-parent" : ""}
              // Inline style for delay is optional as CSS handles it too, but this is safe
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item.type === "link" && (
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                  {item.name}
                </NavLink>
              )}

              {item.type === "dropdown" && (
                <>
                  <div
                    className={`dropdown-trigger ${isParentActive(item.items) ? "active" : ""}`}
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    <svg
                      className={`chevron ${activeDropdown === index ? "rotate" : ""}`}
                      width="12" height="12" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <ul className={`dropdown ${activeDropdown === index ? "show-mobile" : ""}`}>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink to={subItem.path} onClick={closeMenu}>
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {item.type === "button" && (
                <NavLink to={item.path} className="btn-login" onClick={closeMenu}>
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