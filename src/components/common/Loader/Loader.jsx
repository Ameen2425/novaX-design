import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import "./Loader.css";

const Loader = ({ count = 8, variant = "grid" }) => {
  if (variant === "inline") {
    return (
      <div className="loader-inline-container">
        <div className="loader-inline-logo-wrap">
          <BrandLogo variant="icon" className="loader-inline-logo" />
        </div>
        <span className="loader-inline-text">Loading collection...</span>
      </div>
    );
  }

  return (
    <div className="product-loader-grid">
      {Array.from({ length: count }, (_, i) => i + 1).map((item) => (
        <div className="product-card-skeleton" key={item}>
          {/* IMAGE AREA WITH BRAND WATERMARK */}
          <div className="skeleton-img-box skeleton-shimmer">
            <div className="skeleton-logo-watermark">
              <BrandLogo variant="icon" />
            </div>
            <div className="skeleton-badge-line skeleton-shimmer"></div>
          </div>

          {/* CONTENT AREA */}
          <div className="skeleton-body">
            <div className="skeleton-tag skeleton-shimmer"></div>
            <div className="skeleton-title skeleton-shimmer"></div>
            <div className="skeleton-title-sub skeleton-shimmer"></div>

            {/* RATING */}
            <div className="skeleton-rating-row">
              <div className="skeleton-stars skeleton-shimmer"></div>
              <div className="skeleton-rating-val skeleton-shimmer"></div>
            </div>

            {/* PRICE & BUTTON */}
            <div className="skeleton-price-row">
              <div className="skeleton-price-box">
                <div className="skeleton-price-lbl skeleton-shimmer"></div>
                <div className="skeleton-price skeleton-shimmer"></div>
              </div>
              <div className="skeleton-btn skeleton-shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;