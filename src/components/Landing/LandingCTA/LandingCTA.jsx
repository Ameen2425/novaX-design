import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ctaPortalImg from "../../../assets/ameza-landing-cta.jpg";
import "./LandingCTA.css";

const LandingCTA = () => (
  <section className="final-cta-section" aria-labelledby="final-cta-heading">
    <img
      src={ctaPortalImg}
      alt="Atmospheric architectural luxury portal with radiant golden interior"
      className="final-cta-image"
      aria-hidden="true"
      loading="lazy"
    />
    <div className="final-cta-bg" aria-hidden="true" />

    <div className="final-cta-inner">
      <motion.span
        className="final-cta-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        Step Inside
      </motion.span>

      <motion.h2
        id="final-cta-heading"
        className="final-cta-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        Every-thing<br />
        <em>Worth</em>
        Discovering.
      </motion.h2>

      <motion.p
        className="final-cta-sub"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        Step into the AMEZA world. A considered edit of things
        worth discovering, keeping and living with.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/home" className="final-cta-btn">
          <span>Enter AMEZA</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </motion.div>
    </div>

    <div className="final-cta-footer-line" aria-hidden="true">
      <span className="final-cta-footer-meta">AMEZA</span>
      <span className="final-cta-footer-dot" />
      <span className="final-cta-footer-meta">Digital Flagship</span>
      <span className="final-cta-footer-dot" />
      <span className="final-cta-footer-meta">EST. 2026</span>
    </div>
  </section>
);

export default LandingCTA;
