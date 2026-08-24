import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pineHeroImg from "../../../assets/pine-hero.jpg";
import "./LandingHero.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const LandingHero = () => {
  return (
    <section className="landing-hero" aria-label="Hero">
      {/* ── Left: Editorial Typography ── */}
      <div className="hero-text-col">
        <motion.div
          className="hero-eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.2)}
        >
          <span className="hero-eyebrow-line" aria-hidden="true" />
          <span className="hero-eyebrow-text">AMEZA / EST. 2026</span>
        </motion.div>

        <motion.h1
          className="hero-heading"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.45)}
        >
          EVERY-THING
          <span className="hero-heading-italic"> Worth</span>
          <br />
          Discovering.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.7)}
        >
          A considered world of objects,
          design and everyday rituals.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.9)}
        >
          <Link to="/" className="hero-primary-cta">
            <span>Enter AMEZA</span>
            <svg
              className="hero-cta-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a href="#brand-statement" className="hero-secondary-cta">
            Discover more
          </a>
        </motion.div>
      </div>

      {/* ── Right: Editorial Image ── */}
      <motion.div
        className="hero-image-col"
        initial="hidden"
        animate="visible"
        variants={fadeIn(0)}
      >
        <img
          src={pineHeroImg}
          alt="An atmospheric editorial interior — ceramic vessel, linen and candlelight on dark wood"
          className="hero-image-main"
        />
        <div className="hero-image-overlay" aria-hidden="true" />

        <div className="hero-image-meta" aria-hidden="true">
          <span className="hero-meta-label">01 / Introduction</span>
          <span className="hero-meta-index">01</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        aria-hidden="true"
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
};

export default LandingHero;
