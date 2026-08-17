import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import novax3dCta from "../../../assets/novax-3d-cta.jpg";
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="home-final-section">
      <motion.div
        className="home-final"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="home-final-content">
          <span className="home-final-label">READY TO EXPLORE?</span>
          <h2>
            Your next favorite
            <br />
            <span>product is waiting.</span>
          </h2>
          <p>
            Explore the NovaX collection and discover something thoughtfully
            crafted for you.
          </p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link to="/products" className="home-primary-btn">
              Shop NovaX
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="home-final-visual">
          <div className="home-final-3d-wrap">
            <div className="home-final-3d-glow"></div>
            <img
              src={novax3dCta}
              alt="NovaX Premium 3D Luxury Product Composition"
              className="home-final-3d-img"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
