import { motion } from "framer-motion";
import pinePhilosophyImg from "../../../assets/pine-philosophy.jpg";
import "./EditorialBanner.css";

const EditorialBanner = () => (
  <section className="image-moment-section" aria-label="Editorial visual moment">
    <img
      src={pinePhilosophyImg}
      alt="A ceramic vessel in a serene pine green architectural space"
      className="image-moment-bg"
      loading="lazy"
    />
    <div className="image-moment-overlay" aria-hidden="true" />

    <div className="image-moment-text">
      <motion.h2
        className="image-moment-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        The beauty is in<br />
        <em>the details.</em>
      </motion.h2>
      <motion.p
        className="image-moment-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.35 }}
      >
        AMEZA · Digital Flagship · EST. 2026
      </motion.p>
    </div>
  </section>
);

export default EditorialBanner;
