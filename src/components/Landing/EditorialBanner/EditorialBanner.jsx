import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/novax-deals-hero.jpg";
import "./EditorialBanner.css";

const EditorialBanner = () => {
  return (
    <section className="editorial-banner-section">
      <div className="editorial-banner-bg-wrap">
        <img
          src={bannerImg}
          alt="AMEZA Atmospheric Detail"
          className="editorial-banner-img"
          loading="lazy"
        />
        <div className="editorial-banner-overlay"></div>
      </div>

      <div className="editorial-banner-container">
        <motion.div
          className="editorial-banner-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="editorial-banner-eyebrow">IMAGE MOMENT</span>

          <h2 className="editorial-banner-quote">
            The beauty is in <br />
            <span className="quote-highlight">the details.</span>
          </h2>

          <p className="editorial-banner-sub">
            When nothing is superfluous, every line, texture, and contour gains profound meaning.
          </p>

          <div className="editorial-banner-cta">
            <Link to="/" className="editorial-banner-btn">
              ENTER AMEZA
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialBanner;
