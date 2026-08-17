import { motion } from "framer-motion";
import "./AboutStats.css";

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

const AboutStats = () => {
  return (
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
  );
};

export default AboutStats;
