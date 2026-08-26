import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { ADD, INC, DEC } from "../../../Redux/Features/cart/CartSlice";
import "./ProductInfo.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

const ProductInfo = ({
  product,
  discount,
  originalPrice,
  addToCart,
  buyNow,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || []);
  const cartItem = cart.find((item) => item.id === product.id);

  // Local quantity for pre-cart selection if needed
  const [localQty, setLocalQty] = useState(1);

  const currentQty = cartItem ? cartItem.quantity : localQty;

  const handleIncrement = () => {
    if (cartItem) {
      dispatch(INC(product.id));
    } else {
      setLocalQty((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (cartItem) {
      dispatch(DEC(product.id));
    } else {
      setLocalQty((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(INC(product.id));
      addToCart();
    } else {
      // Add initial item
      dispatch(ADD(product));
      // If localQty > 1, increment remaining
      for (let i = 1; i < localQty; i++) {
        dispatch(INC(product.id));
      }
      addToCart();
    }
  };

  const isLowStock = product.stock > 0 && product.stock <= 10;
  const isOutOfStock = product.stock <= 0;

  // Review count based on ID or fallback
  const reviewCount = (product.id * 17) % 240 + 45;

  return (
    <motion.div
      className="pine-info-container"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {/* ── 1. CATEGORY EYEBROW ── */}
      <motion.div className="pine-category-eyebrow" variants={fadeInUp}>
        <span>{product.category ? product.category.replace(/-/g, " ").toUpperCase() : "LUXURY ESSENTIAL"}</span>
      </motion.div>

      {/* ── 2. PRODUCT TITLE ── */}
      <motion.h1 className="pine-product-title" variants={fadeInUp}>
        {product.title}
      </motion.h1>

      {/* ── 3. RATING & REVIEWS ── */}
      <motion.div className="pine-rating-strip" variants={fadeInUp}>
        <div className="pine-stars">
          {"★".repeat(5)}
        </div>
        <strong className="pine-rating-score">{product.rating ? product.rating.toFixed(1) : "4.8"}</strong>
        <span className="pine-rating-divider">·</span>
        <span className="pine-rating-label">Customer Rating</span>
        <span className="pine-rating-count">({reviewCount} Reviews)</span>
      </motion.div>

      {/* ── 4. PRODUCT DESCRIPTION ── */}
      <motion.p className="pine-description" variants={fadeInUp}>
        {product.description || "Crafted with precision and uncompromising standards. Designed for timeless performance and refined luxury living."}
      </motion.p>

      {/* ── 5. PRICE & SAVINGS ── */}
      <motion.div className="pine-price-row" variants={fadeInUp}>
        <div className="pine-main-price">
          <span className="pine-currency">$</span>
          <span className="pine-amount">{typeof product.price === "number" ? product.price.toFixed(2) : product.price}</span>
        </div>

        {discount > 0 && (
          <div className="pine-price-meta">
            <del className="pine-old-price">${originalPrice.toFixed ? originalPrice.toFixed(2) : originalPrice}</del>
            <span className="pine-savings-pill">{discount}% OFF</span>
          </div>
        )}
      </motion.div>

      {/* ── 6. STOCK STATUS ── */}
      <motion.div
        className={`pine-stock-pill ${isOutOfStock ? "out-stock" : isLowStock ? "low-stock" : "in-stock"}`}
        variants={fadeInUp}
      >
        <span className="pine-stock-dot" />
        <span className="pine-stock-title">
          {isOutOfStock ? "Out of Stock" : isLowStock ? "Limited Availability" : "In Stock"}
        </span>
        <span className="pine-stock-sep">—</span>
        <span className="pine-stock-count">
          {isOutOfStock
            ? "Currently unavailable"
            : isLowStock
            ? `Only ${product.stock} items remaining`
            : `${product.stock || 34} items available`}
        </span>
      </motion.div>

      {/* ── 7. PRODUCT SPECIFICATION PANEL ── */}
      <motion.div className="pine-specs-panel" variants={fadeInUp}>
        <div className="pine-spec-item">
          <span className="pine-spec-label">BRAND</span>
          <strong className="pine-spec-val">{product.brand || "AMEZA Atelier"}</strong>
        </div>

        <div className="pine-spec-item">
          <span className="pine-spec-label">CATEGORY</span>
          <strong className="pine-spec-val">{product.category ? product.category.replace(/-/g, " ") : "Lifestyle"}</strong>
        </div>

        <div className="pine-spec-item">
          <span className="pine-spec-label">AVAILABILITY</span>
          <strong className={`pine-spec-val ${isOutOfStock ? "text-out" : "text-verified"}`}>
            {isOutOfStock ? "Unavailable" : "Verified In Stock"}
          </strong>
        </div>
      </motion.div>

      {/* ── 8. QUANTITY & CALL TO ACTIONS ── */}
      <motion.div className="pine-actions-wrap" variants={fadeInUp}>
        {/* Quantity Selector */}
        <div className="pine-qty-box">
          <button
            type="button"
            className="pine-qty-btn"
            onClick={handleDecrement}
            disabled={isOutOfStock || currentQty <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="pine-qty-num">{currentQty}</span>
          <button
            type="button"
            className="pine-qty-btn"
            onClick={handleIncrement}
            disabled={isOutOfStock}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Primary CTA: ADD TO CART */}
        <motion.button
          type="button"
          className="pine-btn-primary-sage"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          whileHover={{ translateY: -2 }}
          whileTap={{ translateY: 0 }}
        >
          <span>ADD TO CART</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.button>

        {/* Secondary CTA: BUY NOW */}
        <motion.button
          type="button"
          className="pine-btn-accent-apricot"
          onClick={buyNow}
          disabled={isOutOfStock}
          whileHover={{ translateY: -2 }}
          whileTap={{ translateY: 0 }}
        >
          <span>BUY NOW</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.button>
      </motion.div>

      {/* ── 9. PRODUCT BENEFITS ── */}
      <motion.div className="pine-benefits-grid" variants={fadeInUp}>
        <div className="pine-benefit-card">
          <div className="pine-benefit-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B9826D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div>
            <h4>Fast Delivery</h4>
            <p>Direct to your doorstep</p>
          </div>
        </div>

        <div className="pine-benefit-card">
          <div className="pine-benefit-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B9826D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <h4>Secure Payment</h4>
            <p>100% encrypted & protected</p>
          </div>
        </div>

        <div className="pine-benefit-card">
          <div className="pine-benefit-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B9826D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </div>
          <div>
            <h4>Easy Returns</h4>
            <p>Simple 30-day return policy</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductInfo;
