import { motion } from "framer-motion";
import "./BrandStatement.css";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 },
  }),
};

const BrandStatement = () => (
  <section
    className="brand-statement-section"
    id="brand-statement"
    aria-labelledby="bs-heading"
  >
    <div className="brand-statement-inner">
      <motion.span
        className="bs-label"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={0}
      >
        THE AMEZA EDIT
      </motion.span>

      <motion.h2
        id="bs-heading"
        className="bs-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={1}
      >
        LESS NOISE.<br />
        <em>BETTER CHOICES.</em>
      </motion.h2>

      <motion.div
        className="bs-divider"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      <motion.p
        className="bs-body"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={2}
      >
        AMEZA is a considered collection of things worth discovering,
        keeping and living with. Curated with intention. Chosen with care.
      </motion.p>

      <motion.span
        className="bs-meta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={3}
      >
        Curated / Considered / Collected
      </motion.span>
    </div>
  </section>
);

export default BrandStatement;
