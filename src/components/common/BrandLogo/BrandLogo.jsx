import React from "react";
import "./BrandLogo.css";

const BrandLogo = ({ variant = "full", light = false, className = "", height, style = {} }) => {
  const isIcon = variant === "icon";
  const isCompact = variant === "compact";

  return (
    <div
      className={`ameza-brand-logo ${isCompact ? "is-compact" : ""} ${isIcon ? "is-icon" : ""} ${light ? "is-light" : ""} ${className}`}
      style={{ ...style, ...(height ? { height: `${height}px` } : {}) }}
      aria-label="AMEZA"
    >
      <div className="ameza-logo-symbol-wrap">
        <svg
          className="ameza-logo-symbol"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3CE" />
              <stop offset="40%" stopColor="#E5BE64" />
              <stop offset="80%" stopColor="#B88928" />
              <stop offset="100%" stopColor="#F3D37D" />
            </linearGradient>
            <linearGradient id="logoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,240,194,0.6)" />
              <stop offset="100%" stopColor="rgba(212,175,55,0.3)" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill={light ? "#2E1622" : "#140A0E"} />
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="20"
            stroke="url(#logoBorderGrad)"
            strokeWidth="2"
          />
          {/* Main Apex A Structure */}
          <path d="M50 18 L76 76 H62 L50 49 L38 76 H24 L50 18Z" fill="#FAF6F0" />
          {/* Negative Space */}
          <path d="M50 36 L60 60 H40 L50 36Z" fill={light ? "#2E1622" : "#140A0E"} />
          {/* 24K Imperial Liquid Gold Accent Chevron */}
          <path d="M33 63 L50 47 L67 63 L59 63 L50 55 L41 63 H33Z" fill="url(#logoGoldGrad)" />
        </svg>
      </div>

      {!isIcon && (
        <div className="ameza-wordmark-wrap">
          <span className="ameza-wordmark">AMEZA</span>
          <span className="ameza-dot"></span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
