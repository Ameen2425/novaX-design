import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import novaxAboutHero from "../../../assets/novax-about-hero.jpg";
import "./AboutHero.css";

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

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.span className="about-hero-label" variants={fadeInUp}>
            THE NOVAX STORY
          </motion.span>

          <motion.h1 className="about-hero-title" variants={fadeInUp}>
            Shopping should feel
            <br />
            <span>effortless.</span>
          </motion.h1>

          <motion.p className="about-hero-description" variants={fadeInUp}>
            NovaX brings quality products, thoughtful design, and a smoother
            online shopping experience together in one refined destination.
          </motion.p>

          <motion.div className="about-hero-actions" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products" className="btn-terracotta">
                Explore Products <span>→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href="#our-story" className="btn-outline-dark">
                Our Story
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <div className="about-hero-image-frame">
            <img
              src={novaxAboutHero}
              alt="NovaX Editorial Luxury Collection"
            />

            <motion.div
              className="about-floating-badge"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="about-badge-icon">✦</span>
              <div className="about-badge-text">
                <strong>NovaX Studio</strong>
                <p>Made for modern living</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
