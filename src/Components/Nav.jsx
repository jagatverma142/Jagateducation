import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../CSS/Nav.css";

const navItems = [
  { id: "home", name: "Home", path: "/", type: "link" },
  { id: "about", name: "About Us", path: "/about", type: "link" },
  {
    id: "features",
    name: "Features",
    type: "dropdown",
    items: [
      { id: "online", name: "Online Classes", path: "/online-classes" },
      { id: "material", name: "Study Material", path: "/study-material" },
      { id: "mock", name: "Mock Tests", path: "/mock-tests" },
    ],
  },
  {
    id: "packages",
    name: "Test Packages",
    type: "dropdown",
    items: [
      { id: "gate", name: "GATE Package", path: "/gate-package" },
      { id: "jee", name: "JEE Package", path: "/jee-package" },
      { id: "neet", name: "NEET Package", path: "/neet-package" },
    ],
  },
  { id: "contact", name: "Contact", path: "/contact", type: "link" },
  { id: "login", name: "Login/Register", path: "/login", type: "button" },
];

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const closeAll = () => {
    setMenuActive(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setMenuActive((v) => !v);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const isParentActive = (children) =>
    children?.some((c) => c.path === location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuActive]);

  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  useEffect(() => {
    const onDown = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeAll();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="navbar" ref={navRef}>
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeAll}>
          <div className="logo-symbol">J</div>
          <div className="logo-text">
            <span className="text-main">AGAT</span>
            <span className="text-sub">EDUCATION</span>
          </div>
        </Link>

        {/* HAMBURGER (Mobile) */}
        <button
          type="button"
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuActive}
          aria-controls="primary-navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* MENU LINKS */}
        <ul
          id="primary-navigation"
          className={`nav-links ${menuActive ? "active" : ""}`}
        >
          {navItems.map((item, index) => {
            const isDropdown = item.type === "dropdown";
            const dropdownOpen = isDropdown && activeDropdown === item.id;

            return (
              <li
                key={item.id}
                className={isDropdown ? "dropdown-parent" : ""}
                style={{ transitionDelay: `${index * 0.05}s` }}
                onMouseEnter={() => {
                  if (!menuActive && isDropdown) setActiveDropdown(item.id);
                }}
                onMouseLeave={() => {
                  if (!menuActive && isDropdown) setActiveDropdown(null);
                }}
              >
                {item.type === "link" && (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={closeAll}
                  >
                    {item.name}
                  </NavLink>
                )}

                {isDropdown && (
                  <>
                    <button
                      type="button"
                      className={`dropdown-trigger ${
                        isParentActive(item.items) ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(item.id)}
                      aria-haspopup="menu"
                      aria-expanded={dropdownOpen}
                    >
                      {item.name}
                      <svg
                        className={`chevron ${dropdownOpen ? "rotate" : ""}`}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <ul
                      className={`dropdown ${
                        dropdownOpen ? "show-mobile" : ""
                      }`}
                      role="menu"
                    >
                      {item.items.map((subItem) => (
                        <li key={subItem.id} role="none">
                          <NavLink
                            to={subItem.path}
                            role="menuitem"
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                            onClick={closeAll}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {item.type === "button" && (
                  <NavLink
                    to={item.path}
                    className="btn-login"
                    onClick={closeAll}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
