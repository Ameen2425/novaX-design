import { motion } from "framer-motion";
import "./StatsSection.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

const StatsSection = () => {
  return (
    <section className="home-stats-section">
      <motion.div
        className="home-section-heading centered"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <span className="home-section-label">AMEZA BY THE NUMBERS</span>
        <h2>Excellence In Every Metric.</h2>
        <p>A trusted global standard for curated luxury e-commerce.</p>
      </motion.div>

      <motion.div
        className="home-stats"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {[
          { val: "12K+", label: "Curated Creations", sub: "Handpicked globally", icon: "✨" },
          { val: "80+", label: "Countries Shipped", sub: "Insured express delivery", icon: "✈️" },
          { val: "100%", label: "Authentic Provenance", sub: "Verified master ateliers", icon: "🛡️" },
          { val: "4.9★", label: "Client Satisfaction", sub: "Over 10,000+ reviews", icon: "✦" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="home-stat"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="home-stat-icon-top">{stat.icon}</div>
            <strong>{stat.val}</strong>
            <span className="stat-label">{stat.label}</span>
            <small className="stat-sub">{stat.sub}</small>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
