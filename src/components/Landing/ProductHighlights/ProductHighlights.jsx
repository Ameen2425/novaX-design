import { motion } from "framer-motion";
import pineHeroImg from "../../../assets/pine-hero.jpg";
import "./ProductHighlights.css";

const qualities = [
  "Considered material selection",
  "Objects with a sense of place",
  "Designed for daily life",
  "Honest craft and intention",
];

const ProductHighlights = () => (
  <section className="artisan-story-section" aria-labelledby="artisan-heading">
    <div className="artisan-story-inner">
      {/* Text */}
      <motion.div
        className="artisan-text-col"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="artisan-label">Made with Intention</span>

        <h2 id="artisan-heading" className="artisan-heading">
          OBJECTS<br />
          WITH A <em>SENSE<br />OF PLACE.</em>
        </h2>

        <div className="artisan-divider" aria-hidden="true" />

        <p className="artisan-body">
          What we choose to live with reveals how we choose to live.
          AMEZA brings together design, craft and material with a
          quiet confidence — selecting things that hold their value
          not in price, but in how they feel over time.
        </p>

        <div className="artisan-meta-row">
          {qualities.map((q) => (
            <span key={q} className="artisan-meta-item">
              <span className="artisan-meta-dot" aria-hidden="true" />
              {q}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="artisan-image-col"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={pineHeroImg}
          alt="A serene studio interior with ceramic vessel and candlelight"
          className="artisan-image"
          loading="lazy"
        />
        <span className="artisan-image-index" aria-hidden="true">06</span>
      </motion.div>
    </div>
  </section>
);

export default ProductHighlights;
