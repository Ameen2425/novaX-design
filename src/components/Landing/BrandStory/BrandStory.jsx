import React from "react";
import { motion } from "framer-motion";
import "./BrandStory.css";

const BrandStory = () => {
  return (
    <section className="brand-story-section">
      <div className="brand-story-container">
        <motion.div
          className="typography-interlude-content"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="brand-story-eyebrow">INTERLUDE</span>

          <h2 className="typography-interlude-title">
            Find what <br />
            <span className="story-italic">stays.</span>
          </h2>

          <div className="interlude-line"></div>

          <p className="typography-interlude-text">
            The objects you live with shape the cadence of your days. <br />
            Choose what is worthy of your space, your touch, and your time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
