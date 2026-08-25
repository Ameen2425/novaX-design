import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./HomeHero.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1
    }
  }
};

const HomeHero = () => {
  return (
    <section className="home-hero-fixed-banner" aria-label="Hero">
      <div className="home-hero-bg-fixed" aria-hidden="true" />
      <div className="home-hero-overlay" aria-hidden="true" />

      <div className="home-hero-content-wrapper">
        <motion.div
          className="home-hero-center-content"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          {/* Main Headline matching Reference */}
          <motion.h1 className="hero-editorial-title" variants={fadeInUp}>
            <span className="hero-title-main">The beauty is in</span>
            <span className="hero-title-italic">the details.</span>
          </motion.h1>

          {/* Flagship Brand Line from Reference */}
          <motion.div className="hero-flagship-line" variants={fadeInUp}>
            <span className="flagship-dash" aria-hidden="true" />
            <span className="flagship-text">AMEZA • DIGITAL FLAGSHIP • EST. 2026</span>
            <span className="flagship-dash" aria-hidden="true" />
          </motion.div>

          {/* Subtitle description */}
          <motion.p className="hero-editorial-desc" variants={fadeInUp}>
            A curated collection of products designed around modern everyday living.
          </motion.p>

          {/* Action CTAs */}
          <motion.div className="hero-editorial-actions" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products" className="btn-hero-primary-gold">
                SHOP COLLECTION <span>→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products" className="btn-hero-glass-outline">
                EXPLORE THE EDIT <span>→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Refined Benefits Floating Strip */}
          <motion.div className="hero-editorial-benefits" variants={fadeInUp}>
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>PREMIUM QUALITY</strong>
                <p>Crafted with care</p>
              </div>
            </div>
            <div className="benefit-divider" />
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>SECURE PAYMENT</strong>
                <p>100% protected</p>
              </div>
            </div>
            <div className="benefit-divider" />
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>24/7 SUPPORT</strong>
                <p>We're here for you</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-badge"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="scroll-text">DISCOVER MORE</span>
        <div className="scroll-arrow-down">↓</div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
