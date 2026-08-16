import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import novaxAboutHero from "../../assets/novax-about-hero.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
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
      transition={{ duration: 0.4 }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.p className="about-label" variants={fadeInUp}>
            THE NOVAX STORY
          </motion.p>

          <motion.h1 variants={fadeInUp}>
            Shopping should feel
            <span> effortless.</span>
          </motion.h1>

          <motion.p className="about-hero-description" variants={fadeInUp}>
            NovaX brings quality products, thoughtful design, and a smoother
            online shopping experience together in one place.
          </motion.p>

          <motion.div className="about-hero-actions" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/products" className="about-primary-btn">
                Explore Products
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a href="#our-story" className="about-secondary-btn">
                Our Story
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <motion.div
            className="about-hero-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={novaxAboutHero}
              alt="NovaX Editorial Luxury Collection"
            />
          </motion.div>

          <motion.div
            className="about-floating-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>✦</span>
            <div>
              <strong>NovaX</strong>
              <p>Made for modern shoppers</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          QUICK STATS
      ===================================================== */}
      <motion.section
        className="about-stats"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {[
          { val: "500+", label: "Products" },
          { val: "10K+", label: "Customers" },
          { val: "50+", label: "Brands" },
          { val: "4.9", label: "Customer Rating" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            className="about-stat"
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <strong>{stat.val}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="about-story" id="our-story">
        <motion.div
          className="about-section-label"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span>01</span>
          OUR STORY
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
              <em> joy of discovering.</em>
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
              NovaX started with a simple idea: online shopping doesn't need
              to be complicated.
            </motion.p>

            <motion.p variants={fadeInUp}>
              We wanted to create a place where discovering products feels
              natural, browsing feels effortless, and every interaction feels
              thoughtfully designed.
            </motion.p>

            <motion.p variants={fadeInUp}>
              From everyday essentials to products worth discovering, NovaX
              brings everything together through a clean and convenient
              shopping experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="about-values">
        <motion.div
          className="about-section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="about-label">WHAT DRIVES US</p>
          <h2>
            Simple principles.
            <br />
            Better experiences.
          </h2>
          <p>
            Everything we build is guided by a few things that matter most.
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
              desc: "We believe great shopping starts with products that offer real value, quality, and usefulness."
            },
            {
              num: "02",
              title: "Keep It Simple",
              desc: "From discovering products to completing an order, we keep the experience clear and easy to understand."
            },
            {
              num: "03",
              title: "Customer First",
              desc: "Every decision starts with one question: does this make the customer's experience better?"
            },
            {
              num: "04",
              title: "Always Improving",
              desc: "We continue learning, improving, and creating better ways to make online shopping enjoyable."
            }
          ].map((val) => (
            <motion.article
              key={val.num}
              className="about-value-card"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="about-value-number">{val.num}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="about-features-section">
        <motion.div
          className="about-section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="about-label">WHY NOVAX</p>
          <h2>Everything you need.</h2>
        </motion.div>

        <motion.div
          className="about-features-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { num: "01", title: "Fast Delivery", desc: "Quick and reliable delivery for your orders.", icon: "🚚" },
            { num: "02", title: "Secure Payments", desc: "Safe and trusted payment experience.", icon: "🔒" },
            { num: "03", title: "Easy Returns", desc: "A simple return experience when you need it.", icon: "↩️" },
            { num: "04", title: "Customer Support", desc: "We're here whenever you need assistance.", icon: "💬" },
          ].map((feat) => (
            <motion.div
              key={feat.num}
              className="about-feature-card"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
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
          FINAL CTA
      ===================================================== */}
      <motion.section
        className="about-final"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="about-label">WELCOME TO NOVAX</p>
        <h2>
          Your next favorite
          <br />
          <span>find is waiting.</span>
        </h2>
        <p>Take a look around and discover what's waiting for you.</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" className="about-primary-btn">
            Shop NovaX
            <span>→</span>
          </Link>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default About;