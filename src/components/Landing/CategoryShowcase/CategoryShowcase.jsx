import { motion } from "framer-motion";
import editorialImg from "../../../assets/ameza-landing-editorial.jpg";
import philosophyImg from "../../../assets/ameza-landing-philosophy.jpg";
import "./CategoryShowcase.css";

const CategoryShowcase = () => (
  <section className="editorial-story-section" aria-labelledby="es-heading">
    <div className="editorial-story-inner">
      {/* Large Image */}
      <motion.div
        className="es-main-image-wrap"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={editorialImg}
          alt="Artisan bespoke leather goods with gold hardware on dark obsidian surface"
          className="es-main-image"
          loading="lazy"
        />
        <div className="es-image-caption">Craft / Material / Intention</div>
      </motion.div>

      {/* Text Column */}
      <motion.div
        className="es-text-col"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="es-label">Editorial Story</span>
        <div className="es-accent-line" aria-hidden="true" />

        <h2 id="es-heading" className="es-heading">
          OUR<br />
          <em>APPROACH</em>
        </h2>

        <p className="es-body">
          We move slowly and choose carefully. Every object in the AMEZA
          edit has been considered for its material, its character
          and the story it carries into your life.
        </p>

        <div className="es-small-image-wrap" aria-hidden="true">
          <img
            src={philosophyImg}
            alt="Sculptural brass and travertine art vessel in architectural space"
            className="es-small-image"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default CategoryShowcase;
