import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./Header.css";
import BrandLogo from "../../common/BrandLogo/BrandLogo";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const cartData = useSelector((state) => state.cart);
  const cartValue = cartData.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header className={`mobile-top-bar ${isScrolled ? "mobile-top-scrolled" : ""}`}>
        <div className="mobile-top-left">
          <NavLink to="/" className="logo" aria-label="AMEZA Home">
            <BrandLogo variant="compact" />
          </NavLink>
        </div>
        <div className="mobile-top-right">
          <NavLink to="/cart" className="mobile-action-btn" title="Shopping Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <motion.span
              key={`mobile-cart-${cartValue}`}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="header-badge"
            >
              {cartValue}
            </motion.span>
          </NavLink>
          <NavLink to="/signup" className="mobile-action-btn" title="Sign Up / Register">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </NavLink>
        </div>
      </header>

      {/* TOP SCRIM TO SEAMLESSLY FADE SCROLLED CONTENT BEHIND CAPSULE */}
      <div className={`header-top-scrim ${isScrolled ? "scrim-visible" : ""}`} aria-hidden="true" />

      {/* DESKTOP & TABLET FLOATING GLASS HEADER */}
      <header className={`header desktop-header ${isScrolled ? "header-scrolled" : ""}`}>
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
              <motion.span
                key={`desktop-cart-${cartValue}`}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="header-badge"
              >
                {cartValue}
              </motion.span>
            </NavLink>
          </div>

          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? "header-action-btn signup-btn active" : "header-action-btn signup-btn"}
            title="Sign Up / Register"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </NavLink>
        </div>
      </header>

      {/* MOBILE BOTTOM FLOATING CAPSULE NAVIGATION (ICON ONLY LUXURY DOCK) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
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
              title={item.name}
              aria-label={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavActivePill"
                  className="mobile-nav-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 32,
                  }}
                />
              )}

              <div className="mobile-nav-icon-wrap">
                {item.name === "Home" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )}
                {item.name === "Products" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                  </svg>
                )}
                {item.name === "Deals" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                )}
                {item.name === "About" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                )}
                {item.name === "User" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )}
              </div>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Header;