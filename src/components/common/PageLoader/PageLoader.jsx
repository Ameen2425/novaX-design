import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="page-loader-screen">
      <div className="page-loader-box">
        <div className="page-loader-spinner-wrap">
          <div className="page-loader-ring"></div>
          <div className="page-loader-pulse-core">
            <span className="page-loader-emblem">A</span>
          </div>
        </div>
        <span className="page-loader-label">AMEZA</span>
        <p className="page-loader-text">Loading experience...</p>
      </div>
    </div>
  );
};

export default PageLoader;
