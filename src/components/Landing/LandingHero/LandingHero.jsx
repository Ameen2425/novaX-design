import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../../assets/novax-hero-3d.jpg";
import "./LandingHero.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
};

const LandingHero = () => {
  return (
    <section className="landing-hero" id="about">
      <div className="landing-hero-container">
        <motion.div
          className="landing-hero-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Left Column: Editorial Typography */}
          <div className="landing-hero-left">
            <motion.div className="landing-hero-eyebrow" variants={fadeInUp}>
              <span className="eyebrow-line"></span>
              <span>AMEZA / EST. 2026</span>
            </motion.div>

            <motion.h1 className="landing-hero-title" variants={fadeInUp}>
              Everything Worth <br />
              <span className="editorial-italic">Discovering.</span>
            </motion.h1>

            <motion.p className="landing-hero-desc" variants={fadeInUp}>
              A considered world of objects, design and everyday rituals.
              Curated for those who appreciate quiet luxury and intentional craftsmanship.
            </motion.p>

            <motion.div className="landing-hero-actions" variants={fadeInUp}>
              <Link to="/" className="hero-btn-primary">
                ENTER AMEZA
                <span>→</span>
              </Link>

              <a href="#the-edit" className="hero-btn-secondary">
                DISCOVER THE EDIT
              </a>
            </motion.div>

            {/* Editorial Metadata Strip */}
            <motion.div className="landing-hero-meta" variants={fadeInUp}>
              <div className="meta-block">
                <strong>01</strong>
                <small>INTRODUCTION</small>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-block">
                <strong>CURATED</strong>
                <small>CONSIDERED / COLLECTED</small>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-block">
                <strong>DIGITAL</strong>
                <small>FLAGSHIP EDITION</small>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Lifestyle Imagery */}
          <motion.div className="landing-hero-right" variants={imageReveal}>
            <div className="hero-image-frame">
              <img
                src={heroImg}
                alt="AMEZA Editorial Luxury Flagship"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>

              {/* Floating Luxury Seal */}
              <div className="hero-floating-seal">
                <span className="seal-text">AMEZA</span>
                <span className="seal-sub">EST. 2026</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <div className="landing-scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-indicator-line"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
