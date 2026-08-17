import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./EmptyCart.css";

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

const EmptyCart = () => {
  return (
    <motion.div
      className="empty-cart-content"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <motion.p className="cart-label" variants={fadeInUp}>
        YOUR SHOPPING CART
      </motion.p>

      <motion.div className="cart-visual" variants={fadeInUp}>
        <motion.div
          className="cart-circle"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="cart-bag">🛒</span>
        </motion.div>

        <motion.span
          className="cart-dot cart-dot-one"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        ></motion.span>

        <motion.span
          className="cart-dot cart-dot-two"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
        ></motion.span>

        <motion.span
          className="cart-dot cart-dot-three"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        ></motion.span>
      </motion.div>

      <motion.h1 variants={fadeInUp}>
        Your cart is
        <span> waiting for you.</span>
      </motion.h1>

      <motion.p className="cart-message" variants={fadeInUp}>
        Looks like you haven't added anything to your cart yet.
      </motion.p>

      <motion.p className="cart-subtext" variants={fadeInUp}>
        Explore our collection and discover products you'll love. Your next
        favorite item could be just one click away.
      </motion.p>

      <motion.div className="cart-actions" variants={fadeInUp}>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link to="/products" className="cart-primary-btn">
            Start Shopping
            <span>→</span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link to="/" className="cart-secondary-btn">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EmptyCart;
