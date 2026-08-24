import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingHeader.css";

const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "About", href: "#brand-statement" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "The Edit", href: "#ameza-world" },
  ];

  return (
    <>
      <header className={`landing-header${isScrolled ? " landing-header-scrolled" : ""}`}>
        <div className="landing-header-container">
          <Link to="/landing" className="landing-logo" aria-label="AMEZA">
            <span className="landing-logo-wordmark">AMEZA</span>
            <span className="landing-logo-dot" aria-hidden="true" />
          </Link>

          <nav className="landing-nav" aria-label="Landing navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="landing-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="landing-header-actions">
            <Link to="/" className="landing-enter-btn">
              <span>Enter AMEZA</span>
            </Link>
            <button
              type="button"
              className="landing-mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <rect width="18" height="1.5" fill="currentColor" />
                <rect y="5.25" width="12" height="1.5" fill="currentColor" />
                <rect y="10.5" width="18" height="1.5" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`landing-mobile-menu${mobileOpen ? " menu-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          className="landing-mobile-menu-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="landing-mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <Link
          to="/"
          className="landing-mobile-enter"
          onClick={() => setMobileOpen(false)}
        >
          Enter AMEZA
        </Link>
      </div>
    </>
  );
};

export default LandingHeader;
