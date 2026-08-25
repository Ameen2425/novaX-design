import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PromoBanner.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const PromoBanner = () => {
  return (
    <section className="home-offer-section">
      <motion.div
        className="home-offer"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="home-offer-content">
          <span className="home-offer-badge">THE PRIVATE EDIT</span>
          <h2>
            Exceptional Pieces.
            <br />
            <span>Seasonal Privileges.</span>
          </h2>
          <p>
            Enjoy privileged pricing on select global designer collections, haute
            perfumery, and architectural home decor. Limited allocations available.
          </p>

          <div className="home-offer-perks">
            <span className="offer-perk-item">✦ Up to 40% Off</span>
            <span className="offer-perk-item">✦ Complimentary Archival Gift Box</span>
            <span className="offer-perk-item">✦ Worldwide Insured Transit</span>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/deals" className="home-shop-btn">
              EXPLORE PRIVATE DEALS <span>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="home-offer-visual-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="home-offer-badge-card">
            <span className="badge-card-sub">LIMITED TIME</span>
            <strong className="badge-card-pct">40%</strong>
            <span className="badge-card-tag">SEASONAL PRIVILEGE</span>
            <div className="badge-card-glow" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
