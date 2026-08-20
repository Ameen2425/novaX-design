import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import BrandLogo from "../../common/BrandLogo/BrandLogo";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "User", path: "/user" },
  ];

  return (
    <>
      {/* MOBILE COMPACT FLOATING TOP HEADER */}
      <header className="mobile-top-brand">
        <NavLink to="/" className="logo" aria-label="AMEZA Home">
          <BrandLogo variant="compact" />
        </NavLink>
        <div className="mobile-top-actions">
          <NavLink to="/cart" className="mobile-action-btn" title="Shopping Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </NavLink>
          <NavLink to="/signup" className="mobile-action-btn" title="Profile / Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </NavLink>
        </div>
      </header>

      {/* DESKTOP & TABLET FLOATING GLASS HEADER */}
      <header className="header desktop-header">
        <NavLink to="/" className="logo" aria-label="AMEZA Home">
          <BrandLogo variant="full" />
        </NavLink>

        <nav className="navbar">
          {navLinks.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="nav-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="nav-link-text">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="header-icon-group">
            <NavLink to="/cart" className={({ isActive }) => isActive ? "header-action-btn active" : "header-action-btn"} title="Cart">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </NavLink>
          </div>

          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? "header-action-btn signup-btn active" : "header-action-btn signup-btn"}
            title="Sign In / Register"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </NavLink>
        </div>
      </header>

      {/* MOBILE BOTTOM FLOATING CAPSULE NAVIGATION */}
      <nav className="mobile-bottom-nav">
        {navLinks.map((item) => {
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${isActive ? "active" : ""}`}
            >
              <div className="mobile-nav-icon-wrap">
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveNavPill"
                    className="mobile-nav-active-bg"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {item.name === "Home" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )}
                {item.name === "Products" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                  </svg>
                )}
                {item.name === "Deals" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                )}
                {item.name === "About" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                )}
                {item.name === "User" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
              </div>
              <span className="mobile-nav-label">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Header;