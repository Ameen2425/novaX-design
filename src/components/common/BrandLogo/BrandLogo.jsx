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
          <rect width="100" height="100" rx="22" fill={light ? "#FCFAF6" : "#241E1A"} />
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="20"
            stroke={light ? "#D8CFC3" : "rgba(255,255,255,0.15)"}
            strokeWidth="2"
          />
          {/* Main Apex A Structure */}
          <path d="M50 18 L76 76 H62 L50 49 L38 76 H24 L50 18Z" fill={light ? "#241E1A" : "#FCFAF6"} />
          {/* Negative Space */}
          <path d="M50 36 L60 60 H40 L50 36Z" fill={light ? "#FCFAF6" : "#241E1A"} />
          {/* Dynamic Muted Cognac Accent */}
          <path d="M33 63 L50 47 L67 63 L59 63 L50 55 L41 63 H33Z" fill="#A96F45" />
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
