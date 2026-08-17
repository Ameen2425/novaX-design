import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DealsHero.css";
import novaxHero3d from "../../../assets/novax-hero-3d.jpg";

const DealsHero = () => {
  return (
    <section className="deals-hero-section">
      <div className="deals-hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="deals-hero-left"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="deals-hero-eyebrow">
            NOVAX / SPECIAL OFFERS
          </span>

          <h1 className="deals-hero-heading">
            Exclusive deals.
            <br />
            <span className="copper-accent">Exceptional</span> value.
          </h1>

          <p className="deals-hero-description">
            Discover limited-time offers and curated products at exclusive NovaX prices.
          </p>

          <div className="deals-hero-actions">
            <a href="#todays-deals" className="btn-deals-primary">
              SHOP DEALS <span>→</span>
            </a>
            <Link to="/products" className="btn-deals-secondary">
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </motion.div>

        {/* RIGHT 3D VISUAL */}
        <motion.div
          className="deals-hero-right"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* FLOATING DISCOUNT BADGE */}
          <div className="deals-discount-badge">
            <span className="badge-sub">UP TO</span>
            <strong className="badge-pct">40%</strong>
            <span className="badge-sub">OFF</span>
          </div>

          <div className="deals-hero-image-wrap">
            <img
              src={novaxHero3d}
              alt="NovaX Exclusive 3D Deals Composition"
              className="deals-hero-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DealsHero;
