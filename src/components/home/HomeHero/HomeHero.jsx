import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import amezaHero3d from "../../../assets/novax-hero-3d.jpg";
import "./HomeHero.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="espresso-hero-container">
        <motion.div
          className="espresso-hero-content"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.span className="espresso-hero-label" variants={fadeInUp}>
            CURATED FOR THE MODERN LIFESTYLE
          </motion.span>

          <motion.h1 className="espresso-hero-title" variants={fadeInUp}>
            Everything Worth
            <br />
            <span>Discovering.</span>
          </motion.h1>

          <motion.p className="espresso-hero-description" variants={fadeInUp}>
            A curated collection of products designed around modern everyday living.
          </motion.p>

          <motion.div className="espresso-hero-actions" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/products" className="btn-hero-copper">
                SHOP COLLECTION <span>→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/products" className="btn-hero-editorial-link">
                Explore the edit →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="espresso-hero-benefits" variants={fadeInUp}>
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>PREMIUM QUALITY</strong>
                <p>Crafted with care</p>
              </div>
            </div>
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>SECURE PAYMENT</strong>
                <p>100% protected</p>
              </div>
            </div>
            <div className="hero-benefit-item">
              <span className="benefit-icon">✦</span>
              <div className="benefit-text">
                <strong>24/7 SUPPORT</strong>
                <p>We're here for you</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="espresso-hero-3d-scene"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <div className="espresso-3d-glow"></div>
          <div className="espresso-3d-render-wrap">
            <img
              src={amezaHero3d}
              alt="AMEZA Cinematic 3D Luxury Product Scene"
              className="espresso-3d-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
