import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import novaxAboutHero from "../../assets/novax-about-hero.jpg";
import "./About.css";

// Animation Variants
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

const About = () => {
  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}
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
                  Explore Products →
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

      {/* =====================================================
          2. QUICK STATS
      ===================================================== */}
      <section className="about-stats-section">
        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {[
            { val: "500+", label: "Curated Items" },
            { val: "10K+", label: "Happy Customers" },
            { val: "50+", label: "Global Brands" },
            { val: "4.9★", label: "Customer Rating" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="about-stat"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <strong>{stat.val}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          3. OUR STORY
      ===================================================== */}
      <section className="about-story-section" id="our-story">
        <div className="about-story-container">
          <motion.div
            className="about-section-label-wrap"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="about-section-num">01</span>
            <span className="about-section-label">OUR STORY</span>
          </motion.div>

          <div className="about-story-grid">
            <motion.div
              className="about-story-heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                Built around the
                <br />
                <span>joy of discovering.</span>
              </h2>
            </motion.div>

            <motion.div
              className="about-story-content"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.p className="about-lead" variants={fadeInUp}>
                NovaX started with a simple idea: online shopping shouldn't feel crowded, noisy, or complicated.
              </motion.p>

              <motion.p variants={fadeInUp}>
                We set out to create a serene digital shopping environment where discovering new products feels natural, navigation is effortless, and every detail feels thoughtfully designed.
              </motion.p>

              <motion.p variants={fadeInUp}>
                From everyday lifestyle goods to handpicked design essentials, NovaX bridges timeless craftsmanship with modern e-commerce convenience.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. VALUES SECTION
      ===================================================== */}
      <section className="about-values-section">
        <motion.div
          className="about-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="about-section-label">WHAT DRIVES US</span>
          <h2>
            Simple principles.
            <br />
            Better experiences.
          </h2>
          <p>
            Everything we build is guided by a few core values that shape every touchpoint.
          </p>
        </motion.div>

        <motion.div
          className="about-values-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            {
              num: "01",
              title: "Quality First",
              desc: "We curate products that offer authentic durability, refined design, and genuine everyday utility."
            },
            {
              num: "02",
              title: "Keep It Simple",
              desc: "From product exploration to rapid one-click checkout, every flow is frictionless and uncluttered."
            },
            {
              num: "03",
              title: "Customer First",
              desc: "Every design decision begins with one question: does this genuinely improve our customer's day?"
            },
            {
              num: "04",
              title: "Always Improving",
              desc: "We continuously evolve our platform, expanding curated collections and elevating user delight."
            }
          ].map((val) => (
            <motion.article
              key={val.num}
              className="about-value-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <span className="about-value-num">{val.num}</span>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          5. FEATURES SECTION
      ===================================================== */}
      <section className="about-features-section">
        <motion.div
          className="about-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="about-section-label">WHY NOVAX</span>
          <h2>Everything you need.</h2>
          <p>Engineered for speed, security, and utmost shopping peace of mind.</p>
        </motion.div>

        <motion.div
          className="about-features-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { num: "01", title: "Fast Delivery", desc: "Speedy and insured courier shipping straight to your door.", icon: "🚚" },
            { num: "02", title: "Secure Payments", desc: "Top-tier encryption protecting every payment method.", icon: "🔒" },
            { num: "03", title: "Easy Returns", desc: "Hassle-free 30-day money-back guarantee with simple returns.", icon: "↩️" },
            { num: "04", title: "Customer Support", desc: "Dedicated friendly concierge support ready to assist you 24/7.", icon: "💬" },
          ].map((feat) => (
            <motion.div
              key={feat.num}
              className="about-feature-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div className="about-feat-header">
                <span className="about-feat-num">{feat.num}</span>
                <span className="about-feat-icon">{feat.icon}</span>
              </div>
              <div className="about-feat-body">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          6. FINAL CTA
      ===================================================== */}
      <section className="about-final-section">
        <motion.div
          className="about-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-final-label">WELCOME TO NOVAX</span>
          <h2>
            Your next favorite
            <br />
            <span>find is waiting.</span>
          </h2>
          <p>Explore our carefully selected catalog and discover everyday luxury made just for you.</p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link to="/products" className="home-primary-btn" style={{ background: "#C6532F", margin: "0 auto" }}>
              Shop NovaX
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default About;