import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Cart.css";

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

const Cart = () => {
  return (
    <motion.main
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* =====================================================
          EMPTY CART HERO
      ===================================================== */}
      <section className="empty-cart">
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

        {/* =====================================================
            SHOPPING BENEFITS
        ===================================================== */}
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
      </section>

      {/* =====================================================
          DISCOVER SECTION
      ===================================================== */}
      <motion.section
        className="cart-discover"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="cart-label">STILL LOOKING?</p>

          <h2>
            Find something
            <br />
            <span>you'll love.</span>
          </h2>

          <p>
            Browse our latest collection and add your favorites to your shopping
            cart.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
            <Link to="/products" className="cart-discover-btn">
              Explore Collection →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Cart;