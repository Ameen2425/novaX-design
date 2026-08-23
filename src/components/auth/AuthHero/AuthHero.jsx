import React from "react";
import { motion } from "framer-motion";
import "./AuthHero.css";

const AuthHero = ({ image, label, title, subtitle, benefits = [] }) => {
  return (
    <motion.div
      className="auth-hero-panel"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="auth-hero-card">
        {/* Background Image */}
        <img
          src={image}
          alt="AMEZA Luxury Lifestyle Experience"
          className="auth-hero-img"
        />

        {/* Gradient Overlay for high contrast text readability */}
        <div className="auth-hero-overlay"></div>

        {/* Floating Content ON TOP of the image */}
        <div className="auth-hero-content">
          <span className="auth-editorial-label">{label}</span>
          <h2 className="auth-editorial-title">{title}</h2>
          <p className="auth-editorial-desc">{subtitle}</p>

          {benefits.length > 0 && (
            <div className="auth-benefits-strip">
              {benefits.map((benefit, i) => (
                <div key={i} className="auth-benefit-pill">
                  <span className="auth-benefit-dot">✦</span>
                  <span className="auth-benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AuthHero;
