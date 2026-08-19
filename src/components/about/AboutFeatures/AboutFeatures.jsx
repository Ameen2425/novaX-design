import { motion } from "framer-motion";
import "./AboutFeatures.css";

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

const AboutFeatures = () => {
  return (
    <section className="about-features-section">
      <motion.div
        className="about-section-heading centered"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <span className="about-section-label">WHY AMEZA</span>
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
  );
};

export default AboutFeatures;
