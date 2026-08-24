import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LandingCTA.css";

const LandingCTA = () => {
  return (
    <section className="landing-cta-section">
      <div className="landing-cta-container">
        <motion.div
          className="landing-cta-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="landing-cta-eyebrow">FINAL CHAPTER</span>

          <h2 className="landing-cta-heading">
            Everything worth <br />
            <span className="cta-italic">discovering.</span>
          </h2>

          <p className="landing-cta-desc">
            Step into the AMEZA world. Discover curated objects, timeless design, and
            elevated everyday rituals.
          </p>

          <div className="landing-cta-actions">
            <Link to="/" className="landing-cta-primary-btn">
              ENTER AMEZA
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCTA;
