import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Nav.css";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Navigation data
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

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          JAGAT<span>EDUCATION</span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`} id="navLinks">
          {navItems.map((item, index) => (
            <li key={index} style={{ "--i": index + 1 }} className={item.type === "dropdown" ? "dropdown-parent" : ""}>
              {item.type === "link" && (
                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                  {item.name}
                </NavLink>
              )}

              {item.type === "button" && (
                <NavLink to={item.path} className="btn-login">
                  {item.name}
                </NavLink>
              )}

              {item.type === "dropdown" && (
                <>
                  <span>
                    {item.name} <i className="fas fa-caret-down"></i>
                  </span>
                  <ul className="dropdown">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink to={subItem.path}>{subItem.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
