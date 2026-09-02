import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    return JSON.parse(localStorage.getItem("ameza_wishlist")) || [];
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlistProducts = async () => {
    setLoading(true);
    const response = await axios.get("https://dummyjson.com/products?limit=194");
    const allItems = response.data?.products || [];
    setProducts(allItems);
    setLoading(false);
  };

  useEffect(() => {
    fetchWishlistProducts();
  }, []);

  const handleWishlistStorageChange = () => {
    const updated = JSON.parse(localStorage.getItem("ameza_wishlist")) || [];
    setWishlistIds(updated);
  };

  useEffect(() => {
    window.addEventListener("storage", handleWishlistStorageChange);
    return () => window.removeEventListener("storage", handleWishlistStorageChange);
  }, []);

  const wishlistedProducts = products.filter((p) =>
    wishlistIds.some((wid) => String(wid) === String(p.id))
  );

  return (
    <div className="wishlist-page-root">
      <div className="wishlist-container">
        {/* Editorial Header */}
        <div className="wishlist-header">
          <span className="wishlist-eyebrow">CURATED SELECTION</span>
          <h1 className="wishlist-title">
            My Wishlist
            <span className="wishlist-count-badge">
              ({wishlistedProducts.length} {wishlistedProducts.length === 1 ? "Piece" : "Pieces"})
            </span>
          </h1>
          <p className="wishlist-subtitle">
            Your personal treasury of saved luxury creations, ready for acquisition when you desire.
          </p>
        </div>

        {loading ? (
          <div className="wishlist-skeleton-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="wishlist-skeleton-card" />
            ))}
          </div>
        ) : wishlistedProducts.length === 0 ? (
          /* Empty State */
          <motion.div
            className="wishlist-empty-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="wishlist-empty-icon">♡</span>
            <h2>Your wishlist is waiting.</h2>
            <p>Save your favorite luxury creations and return to them anytime.</p>
            <Link to="/products" className="btn-explore-products">
              Explore Products →
            </Link>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="wishlist-products-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {wishlistedProducts.map((product) => {
                const productImg = product.thumbnail || (product.images && product.images[0]) || "";
                const productCategory = product.category
                  ? product.category.replace(/-/g, " ")
                  : "Luxury";

                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={productImg}
                    category={productCategory}
                    rating={product.rating}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
