import React from "react";
import { motion } from "framer-motion";
import "./BrandStatement.css";

const BrandStatement = () => {
  return (
    <section className="brand-statement-section" id="the-edit">
      <div className="brand-statement-container">
        <motion.div
          className="brand-statement-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="statement-eyebrow">THE AMEZA EDIT</span>

          <h2 className="statement-heading">
            Less noise. <br />
            <span className="statement-italic">Better choices.</span>
          </h2>

          <div className="statement-divider"></div>

          <p className="statement-desc">
            AMEZA is a considered collection of things worth discovering, keeping and
            living with. Designed with timeless precision, crafted from noble materials,
            and curated to bring intentional beauty to your everyday life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStatement;
