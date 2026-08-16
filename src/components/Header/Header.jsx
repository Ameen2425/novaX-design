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
    <header className="header">
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
  );
};

export default Header;