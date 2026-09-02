import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { INC, DEC, REMOVE } from "../../Redux/Features/cart/CartSlice";
import "./Cart.css";

import EmptyCart from "../../components/cart/EmptyCart/EmptyCart";
import CartBenefits from "../../components/cart/CartBenefits/CartBenefits";
import CartDiscover from "../../components/cart/CartDiscover/CartDiscover";

const Cart = () => {
  const navigate = useNavigate();
  let cartData = useSelector(
    (state) => state.cart
  );

  let dispatch = useDispatch();

  let subtotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let totalQuantity = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  let shipping = 0;
  let totalAmount = subtotal + shipping;

  if (cartData.length === 0) {
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
  }

  return (
    <motion.main
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="cart-container">
        {/* Cart Header */}
        <div className="cart-header-section">
          <p className="cart-label">AMEZA LUXURY BOUTIQUE</p>
          <h1 className="cart-title">
            Shopping Cart
            <span className="cart-count-badge">
              ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
            </span>
          </h1>
        </div>

        {/* Main Grid: Items List & Order Summary */}
        <div className="cart-grid">
          {/* Left: Cart Items List */}
          <div className="cart-items-wrapper">
            <div className="cart-items-header">
              <span>Product</span>
              <span className="col-price">Price</span>
              <span className="col-qty">Quantity</span>
              <span className="col-subtotal">Subtotal</span>
              <span className="col-action">Action</span>
            </div>

            <div className="cart-items-list">
              <AnimatePresence>
                {cartData.map((item) => {
                  let itemImage = item.thumbnail || item.images?.[0] || "";
                  let itemSubtotal = (item.price * item.quantity).toFixed(2);

                  return (
                    <motion.div
                      key={item.id}
                      className="cart-item-card"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                    >
                      {/* Product Image */}
                      <div className="cart-item-image-box">
                        <img
                          src={itemImage}
                          alt={item.title}
                          className="cart-item-img"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="cart-item-details">
                        {item.category && (
                          <span className="cart-item-category">
                            {item.category.toUpperCase()}
                          </span>
                        )}
                        <Link
                          to={`/products/${item.id}`}
                          className="cart-item-title"
                        >
                          {item.title}
                        </Link>
                        <div className="cart-item-unit-price">
                          ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="cart-item-quantity-col">
                        <div className="cart-quantity-controls">
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => dispatch(DEC(item.id))}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="cart-qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => dispatch(INC(item.id))}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Item Subtotal */}
                      <div className="cart-item-subtotal-col">
                        <span className="mobile-subtotal-label">Subtotal: </span>
                        <strong className="cart-item-subtotal-val">
                          ${itemSubtotal}
                        </strong>
                      </div>

                      {/* Remove Button */}
                      <div className="cart-item-remove-col">
                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => dispatch(REMOVE(item.id))}
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                          <span className="remove-text">Remove</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Bottom Actions */}
            <div className="cart-bottom-actions">
              <Link to="/products" className="cart-continue-btn">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="cart-summary-wrapper">
            <div className="cart-summary-card">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-row">
                <span>Items Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <div className="summary-row">
                <span>Total Quantity</span>
                <span>{totalQuantity} {totalQuantity === 1 ? "unit" : "units"}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping-tag">FREE</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row summary-total-row">
                <span>Total Amount</span>
                <strong className="summary-total-val">
                  ${totalAmount.toFixed(2)}
                </strong>
              </div>

              <button
                type="button"
                className="cart-checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </button>

              <div className="cart-guarantees">
                <div className="guarantee-item">
                  <span>🔒</span>
                  <small>Encrypted 256-Bit SSL Checkout</small>
                </div>
                <div className="guarantee-item">
                  <span>🚚</span>
                  <small>Complimentary Insured Delivery</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartBenefits />
      <CartDiscover />
    </motion.main>
  );
};

export default Cart;