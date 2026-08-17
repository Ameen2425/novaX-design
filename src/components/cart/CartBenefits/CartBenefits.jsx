import { motion } from "framer-motion";
import "./CartBenefits.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const CartBenefits = () => {
  return (
    <motion.div
      className="cart-benefits"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div
        className="cart-benefit"
        variants={fadeInUp}
        whileHover={{ y: -5, scale: 1.03 }}
      >
        <span>🚚</span>
        <div>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery</p>
        </div>
      </motion.div>

      <motion.div
        className="cart-benefit"
        variants={fadeInUp}
        whileHover={{ y: -5, scale: 1.03 }}
      >
        <span>🔒</span>
        <div>
          <h3>Secure Shopping</h3>
          <p>Safe and protected checkout</p>
        </div>
      </motion.div>

      <motion.div
        className="cart-benefit"
        variants={fadeInUp}
        whileHover={{ y: -5, scale: 1.03 }}
      >
        <span>↩️</span>
        <div>
          <h3>Easy Returns</h3>
          <p>Simple return experience</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartBenefits;
