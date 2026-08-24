import React from "react";
import { motion } from "framer-motion";
import "./WhyAmeza.css";

const artisanPillars = [
  {
    id: 1,
    title: "Noble Materials",
    desc: "Uncompromising selection of full-grain leathers, long-staple cashmere, solid brass, and pure botanicals.",
    tag: "MATERIALITY",
  },
  {
    id: 2,
    title: "Artisanal Lineage",
    desc: "Partnering with master workshops that respect generational craftsmanship and slow production tempos.",
    tag: "PROVENANCE",
  },
  {
    id: 3,
    title: "Quiet Functionalism",
    desc: "Every object serves a tangible purpose, bringing calm clarity and elevated tactile joy to daily use.",
    tag: "UTILITY",
  },
  {
    id: 4,
    title: "Enduring Longevity",
    desc: "Resisting fleeting obsolescence with timeless proportions designed to be cherished for decades.",
    tag: "PERMANENCE",
  },
];

const WhyAmeza = () => {
  return (
    <section className="why-ameza-section">
      <div className="why-ameza-container">
        {/* Header */}
        <div className="why-ameza-header">
          <span className="why-ameza-eyebrow">MADE WITH INTENTION</span>
          <h2 className="why-ameza-heading">
            Objects with a sense <br />
            <span className="why-ameza-italic">of place and soul.</span>
          </h2>
        </div>

        {/* 4 Artisan Pillars Grid */}
        <div className="why-ameza-grid">
          {artisanPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              className="why-benefit-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <span className="artisan-tag">{pillar.tag}</span>
              <h3 className="benefit-card-title">{pillar.title}</h3>
              <p className="benefit-card-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmeza;
