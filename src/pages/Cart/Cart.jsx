import { motion } from "framer-motion";
import "./Cart.css";

import EmptyCart from "../../components/cart/EmptyCart/EmptyCart";
import CartBenefits from "../../components/cart/CartBenefits/CartBenefits";
import CartDiscover from "../../components/cart/CartDiscover/CartDiscover";

const Cart = () => {
  return (
    <motion.main
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="empty-cart">
        <EmptyCart />
        <CartBenefits />
      </section>

      <CartDiscover />
    </motion.main>
  );
};

export default Cart;