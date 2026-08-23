import { motion } from "framer-motion";
import "./ProductInfo.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const ProductInfo = ({
  product,
  discount,
  originalPrice,
  quantity,
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  buyNow,
}) => {
  const isLowStock = product.stock > 0 && product.stock <= 10;
  const isOutOfStock = product.stock <= 0;

  return (
    <motion.div
      className="single-info"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <motion.span className="single-category" variants={fadeInUp}>
        {product.category}
      </motion.span>

      <motion.h1 variants={fadeInUp}>{product.title}</motion.h1>

      {/* RATING */}
      <motion.div className="single-rating" variants={fadeInUp}>
        <span>★★★★★</span>
        <strong>{product.rating?.toFixed(1)}</strong>
        <p>Customer Rating</p>
      </motion.div>

      <div className="single-divider"></div>

      {/* DESCRIPTION */}
      <motion.p className="single-description" variants={fadeInUp}>
        {product.description}
      </motion.p>

      {/* PRICE */}
      <motion.div className="single-price" variants={fadeInUp}>
        <strong>${product.price}</strong>
        {discount > 0 && (
          <>
            <del>${originalPrice}</del>
            <span className="price-discount-badge">{discount}% OFF</span>
          </>
        )}
      </motion.div>

      {/* SEMANTIC STOCK */}
      <motion.div
        className={`single-stock ${isOutOfStock ? "out-of-stock" : isLowStock ? "low-stock" : "in-stock"}`}
        variants={fadeInUp}
      >
        <span className="stock-indicator-dot"></span>
        <strong>
          {isOutOfStock ? "Out of Stock" : isLowStock ? "Low Stock" : "In Stock"}
        </strong>
        <p>
          {isOutOfStock
            ? "Currently unavailable"
            : isLowStock
            ? `Only ${product.stock} items remaining`
            : `${product.stock} items available`}
        </p>
      </motion.div>

      {/* PRODUCT INFORMATION */}
      <motion.div className="single-specifications" variants={fadeInUp}>
        <div>
          <span>Brand</span>
          <strong>{product.brand || "AMEZA"}</strong>
        </div>

        <div>
          <span>Category</span>
          <strong>{product.category}</strong>
        </div>

        <div>
          <span>Availability</span>
          <strong className={isOutOfStock ? "text-out-stock" : isLowStock ? "text-low-stock" : "text-in-stock"}>
            {isOutOfStock ? "Out of Stock" : isLowStock ? "Limited" : "Verified In Stock"}
          </strong>
        </div>
      </motion.div>

      {/* QUANTITY */}
      <motion.div className="single-quantity-row" variants={fadeInUp}>
        <span>Quantity</span>
        <div className="single-quantity">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={decreaseQuantity}
          >
            −
          </motion.button>
          <strong>{quantity}</strong>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={increaseQuantity}
          >
            +
          </motion.button>
        </div>
      </motion.div>

      {/* BUTTONS */}
      <motion.div className="single-actions" variants={fadeInUp}>
        <motion.button
          className="single-cart-button"
          onClick={addToCart}
          disabled={product.stock <= 0}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          🛒 Add to Cart
        </motion.button>

        <motion.button
          className="single-buy-button btn-crimson"
          onClick={buyNow}
          disabled={product.stock <= 0}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          Buy Now
          <span>→</span>
        </motion.button>
      </motion.div>

      {/* DELIVERY / TRUST SERVICES */}
      <motion.div className="single-services" variants={fadeInUp}>
        <div className="single-service trust-service">
          <span className="service-icon">🚚</span>
          <div>
            <strong>Fast Delivery</strong>
            <p>Direct to your doorstep</p>
          </div>
        </div>

        <div className="single-service trust-service">
          <span className="service-icon">🔒</span>
          <div>
            <strong>Secure Payment</strong>
            <p>100% encrypted & protected</p>
          </div>
        </div>

        <div className="single-service trust-service">
          <span className="service-icon">↩️</span>
          <div>
            <strong>Easy Returns</strong>
            <p>Simple 30-day return policy</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductInfo;
