import { motion } from "framer-motion";
import "./OurValues.css";

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

const OurValues = () => {
  return (
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
  );
};

export default OurValues;
