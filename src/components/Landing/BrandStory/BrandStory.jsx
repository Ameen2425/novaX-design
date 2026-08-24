import { motion } from "framer-motion";
import "./BrandStory.css";

const BrandStory = () => (
  <section className="typo-interlude-section" aria-label="Brand interlude">
    <div className="typo-interlude-inner">
      <motion.h2
        className="typo-interlude-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        FIND<br />
        WHAT<br />
        <em>STAYS.</em>
      </motion.h2>

      <motion.div
        className="typo-accent-dot"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
    </div>
  </section>
);

export default BrandStory;
