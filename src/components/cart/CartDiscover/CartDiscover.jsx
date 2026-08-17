import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CartDiscover.css";

const CartDiscover = () => {
  return (
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
  );
};

export default CartDiscover;
