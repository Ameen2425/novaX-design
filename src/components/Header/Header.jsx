import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import novaxLogo from "../../assets/novax-logo.png";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Products", path: "/Products" },
    { name: "Cart", path: "/cart" },
    { name: "User", path: "/User" },
  ];

  const authLinks = [
    {
      name: "👤",
      path: "/signup",
      className: "signup-btn"
    },
  ];

  return (
    <>
      {/* MOBILE TOP BRAND BAR */}
      <div className="mobile-top-brand">
        <NavLink to="/" className="logo">
          <img src={novaxLogo} alt="NovaX Design Logo" className="logo-img" />
          <span className="logo-text">NovaX</span>
        </NavLink>
        <NavLink to="/signup" className="mobile-profile-btn" title="Profile">
          👤
        </NavLink>
      </div>

      {/* DESKTOP & TABLET FLOATING GLASS HEADER */}
      <header className="header desktop-header">
        <NavLink to="/" className="logo">
          <img src={novaxLogo} alt="NovaX Design Logo" className="logo-img" />
          <span className="logo-text">NovaX</span>
        </NavLink>

        <nav className="navbar">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-icon-group">
            <NavLink to="/products" className="header-action-icon" title="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </NavLink>

            <NavLink to="/products" className="header-action-icon relative-badge" title="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </NavLink>

            <NavLink to="/cart" className="header-action-icon relative-badge" title="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </NavLink>
          </div>

          {authLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={item.className}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </header>

      {/* MOBILE BOTTOM FLOATING CAPSULE NAVIGATION */}
      <nav className="mobile-bottom-nav">
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "mobile-nav-item active" : "mobile-nav-item"
            }
          >
            <div className="mobile-nav-icon-wrap">
              {item.name === "Home" && (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              )}
              {item.name === "Products" && (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              )}
              {item.name === "Cart" && (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              )}
              {item.name === "About" && (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              )}
              {item.name === "User" && (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              )}
            </div>
            <span className="mobile-nav-label">{item.name.toUpperCase()}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;