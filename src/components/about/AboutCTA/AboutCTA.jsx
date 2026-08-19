import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import amezaAboutCta from "../../../assets/novax-about-cta.jpg";
import "./AboutCTA.css";

const AboutCTA = () => {
  return (
    <section className="about-final-section">
      <motion.div
        className="about-final"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-final-content">
          <span className="about-final-label">WELCOME TO AMEZA</span>
          <h2>
            Your next favorite
            <br />
            <span>find is waiting.</span>
          </h2>
          <p>
            Explore our carefully selected catalog and discover everyday luxury
            made just for you.
          </p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link to="/products" className="btn-terracotta">
              Shop AMEZA
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="about-final-visual">
          <div className="about-final-3d-wrap">
            <div className="about-final-3d-glow"></div>
            <img
              src={amezaAboutCta}
              alt="AMEZA Luxury Curated Lifestyle Collection"
              className="about-final-3d-img"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
