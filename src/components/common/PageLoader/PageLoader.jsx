import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import "./PageLoader.css";

const PageLoader = ({ text = "Loading experience..." }) => {
  return (
    <div className="page-loader-screen" role="status" aria-live="polite">
      <div className="page-loader-backdrop-glow"></div>

      <div className="page-loader-box">
        {/* Orbital rings surrounding the central brand symbol */}
        <div className="page-loader-ring-wrapper">
          <div className="page-loader-ring ring-outer"></div>
          <div className="page-loader-ring ring-inner"></div>

          <div className="page-loader-logo-center">
            <BrandLogo variant="icon" className="page-loader-symbol" />
          </div>
        </div>

        {/* Brand name */}
        <div className="page-loader-brand-title">
          <span>AMEZA</span>
        </div>

        {/* Shimmer progress bar */}
        <div className="page-loader-progress-track">
          <div className="page-loader-progress-bar"></div>
        </div>

        <p className="page-loader-text">{text}</p>
      </div>
    </div>
  );
};

export default PageLoader;
