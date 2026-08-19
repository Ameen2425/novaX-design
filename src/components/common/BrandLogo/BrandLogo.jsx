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
          <rect width="100" height="100" rx="24" fill={light ? "#17100C" : "#21150F"} />
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="22"
            stroke="#F1DEC3"
            strokeOpacity="0.22"
            strokeWidth="3.5"
          />
          {/* Main Apex A Structure */}
          <path d="M50 16 L77 78 H62 L50 49 L38 78 H23 L50 16Z" fill="#F1DEC3" />
          {/* Negative Space */}
          <path d="M50 35 L61 61 H39 L50 35Z" fill={light ? "#17100C" : "#21150F"} />
          {/* Dynamic Copper Accent */}
          <path d="M33 64 L50 47 L67 64 L59 64 L50 55 L41 64 H33Z" fill="#E35D32" />
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
