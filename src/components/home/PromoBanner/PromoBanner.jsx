import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PromoBanner.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
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
          <span className="home-offer-badge">AMEZA SPECIAL</span>
          <h2>
            Better products.
            <br />
            <span>Better prices.</span>
          </h2>
          <p>
            Discover curated luxury products at everyday prices.
            Explore our latest seasonal deals and limited collections.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/products" className="home-shop-btn">
              Explore Deals →
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="home-offer-symbol"
          animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          %
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
