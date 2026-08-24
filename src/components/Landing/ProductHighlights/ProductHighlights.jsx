import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProductHighlights.css";

const worlds = [
  {
    id: "style",
    title: "Style & Silhouettes",
    subtitle: "Tailoring & Outerwear",
    desc: "Structured cashmere, architectural cuts, and tactile organic wools.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    number: "01",
  },
  {
    id: "ritual",
    title: "Scent & Ritual",
    subtitle: "Fragrance & Care",
    desc: "Rare resinous extraits, cedarwood incense, and botanical extractions.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    number: "02",
  },
  {
    id: "design",
    title: "Form & Living",
    subtitle: "Interior Objects",
    desc: "Handcrafted ceramics, patinated bronze, and tactile sanctuary pieces.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    number: "03",
  },
  {
    id: "everyday",
    title: "Everyday Artefacts",
    subtitle: "Daily Precision",
    desc: "Tools for considered living, fine horology, and minimalist leather goods.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    number: "04",
  },
];

const ProductHighlights = () => {
  return (
    <section className="product-highlights-section" id="world">
      <div className="product-highlights-container">
        {/* Header */}
        <div className="highlights-header">
          <div>
            <span className="highlights-eyebrow">THE AMEZA WORLD</span>
            <h2 className="highlights-heading">
              Disciplined universes. <br />
              <span className="highlights-italic">One cohesive aesthetic.</span>
            </h2>
          </div>

          <Link to="/" className="highlights-view-all-btn">
            Enter AMEZA
            <span>→</span>
          </Link>
        </div>

        {/* 4 Atmospheric Panels (Zero Ecommerce) */}
        <div className="highlights-worlds-grid">
          {worlds.map((world, idx) => (
            <motion.div
              key={world.id}
              className="world-panel-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="world-panel-img-box">
                <img
                  src={world.image}
                  alt={world.title}
                  className="world-panel-img"
                  loading="lazy"
                />
                <div className="world-panel-overlay"></div>
                <span className="world-panel-num">{world.number}</span>
              </div>

              <div className="world-panel-content">
                <span className="world-panel-sub">{world.subtitle}</span>
                <h3 className="world-panel-title">{world.title}</h3>
                <p className="world-panel-desc">{world.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
