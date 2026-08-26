import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductGallery.css";

const ProductGallery = ({ product, selectedImage, setSelectedImage, discount }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const images = product.images && product.images.length > 0
    ? product.images
    : [product.thumbnail || selectedImage];

  return (
    <motion.div
      className="pine-gallery-wrap"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── THUMBNAILS (VERTICAL DESKTOP / HORIZONTAL MOBILE) ── */}
      {images.length > 1 && (
        <div className="pine-thumbnails-strip">
          {images.map((imgUrl, idx) => (
            <button
              key={`thumb-${idx}`}
              type="button"
              className={`pine-thumbnail-btn ${selectedImage === imgUrl ? "active" : ""}`}
              onClick={() => setSelectedImage(imgUrl)}
              aria-label={`View product image ${idx + 1}`}
            >
              <img src={imgUrl} alt={`${product.title} view ${idx + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* ── MAIN FEATURED IMAGE CONTAINER ── */}
      <div className="pine-main-showcase">
        {/* Atmospheric Ambient Glow */}
        <div className="pine-showcase-glow" />

        {/* Top-Left Discount Badge */}
        {discount > 0 && (
          <div className="pine-discount-badge">
            <span>{discount}% OFF</span>
          </div>
        )}

        {/* Top-Right Circular Wishlist Button */}
        <motion.button
          type="button"
          className={`pine-wishlist-btn ${isWishlisted ? "wishlisted" : ""}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "#B9826D" : "none"}
            stroke={isWishlisted ? "#B9826D" : "#F0EEE7"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.button>

        {/* Product Image */}
        <div className="pine-image-frame">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage || product.thumbnail}
              src={selectedImage || product.thumbnail}
              alt={product.title}
              className="pine-hero-img"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductGallery;
