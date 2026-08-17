import { motion } from "framer-motion";
import "./OurStory.css";

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

const OurStory = () => {
  return (
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
  );
};

export default OurStory;
