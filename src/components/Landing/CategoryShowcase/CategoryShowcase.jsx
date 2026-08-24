import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CategoryShowcase.css";

const CategoryShowcase = () => {
  return (
    <section className="category-showcase-section" id="the-edit">
      <div className="category-showcase-container">
        <div className="editorial-story-grid">
          {/* Main Visual */}
          <motion.div
            className="editorial-story-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="story-large-img-frame">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="AMEZA Luxury Craftsmanship"
                className="story-large-img"
                loading="lazy"
              />
              <div className="story-img-tag">02 / ARCHITECTURAL HARMONY</div>
            </div>
          </motion.div>

          {/* Editorial Text & Secondary Accent Visual */}
          <motion.div
            className="editorial-story-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <span className="category-eyebrow">OUR APPROACH</span>
            <h2 className="category-heading">
              Curating what <br />
              <span className="category-italic">truly endures.</span>
            </h2>

            <p className="editorial-lead-para">
              We reject the transient rush of seasonal churn. Instead, we curate
              exceptional artefacts spanning fine horology, bespoke tailoring,
              sculptural living, and sensory fragrances.
            </p>

            <div className="story-secondary-card">
              <div className="story-thumb-img-box">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"
                  alt="Sensory Essence"
                  className="story-thumb-img"
                  loading="lazy"
                />
              </div>
              <div className="story-thumb-text">
                <strong>Sensory & Material Purity</strong>
                <p>Natural woods, Italian leathers, botanical extracts, and brushed metals.</p>
              </div>
            </div>

            <Link to="/" className="btn-primary-gold" style={{ alignSelf: "flex-start", marginTop: "12px" }}>
              ENTER AMEZA WORLD
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
