import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../common/BrandLogo/BrandLogo";
import "./LandingHeader.css";

const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`landing-header ${isScrolled ? "landing-header-scrolled" : ""}`}>
      <div className="landing-header-container">
        {/* Brand Wordmark */}
        <Link to="/landing" className="landing-logo" aria-label="AMEZA Flagship">
          <BrandLogo variant="compact" />
        </Link>

        {/* Center Editorial Navigation */}
        <nav className={`landing-nav ${mobileMenuOpen ? "landing-nav-open" : ""}`}>
          <a href="#about" className="landing-nav-link" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#the-edit" className="landing-nav-link" onClick={() => setMobileMenuOpen(false)}>
            The Edit
          </a>
          <a href="#philosophy" className="landing-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Philosophy
          </a>
          <a href="#world" className="landing-nav-link" onClick={() => setMobileMenuOpen(false)}>
            World
          </a>
        </nav>

        {/* Right Action: Pure Brand Portal */}
        <div className="landing-header-actions">
          <Link to="/" className="landing-enter-store-btn">
            Enter AMEZA
            <span className="btn-arrow">→</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="landing-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
