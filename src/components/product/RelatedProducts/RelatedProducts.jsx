import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { ADD } from "../../../Redux/Features/cart/CartSlice";
import "./RelatedProducts.css";

const RelatedProducts = ({ currentCategory, currentId, onToast }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRelated = async () => {
      setLoading(true);
      try {
        let url = `https://dummyjson.com/products/category/${currentCategory}?limit=8`;
        let res = await axios.get(url);
        let items = res.data?.products || [];

        // Filter out current product
        items = items.filter((p) => p.id !== Number(currentId));

        // If not enough items in same category, fetch general products
        if (items.length < 4) {
          const fallbackRes = await axios.get("https://dummyjson.com/products?limit=8");
          const fallbackItems = (fallbackRes.data?.products || []).filter(
            (p) => p.id !== Number(currentId)
          );
          items = [...items, ...fallbackItems].slice(0, 5);
        } else {
          items = items.slice(0, 5);
        }

        setRelated(items);
      } catch (err) {
        console.error("Failed to fetch related products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (currentCategory) {
      fetchRelated();
    }
  }, [currentCategory, currentId]);

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    dispatch(ADD(item));
    if (onToast) {
      onToast(`✓ "${item.title}" added to cart!`);
    }
  };

  if (loading || related.length === 0) return null;

  return (
    <section className="pine-related-section">
      <div className="pine-related-header">
        <div>
          <span className="pine-related-eyebrow">CURATED RECOMMENDATIONS</span>
          <h2 className="pine-related-heading">You May Also Like</h2>
        </div>
        <button
          type="button"
          className="pine-view-catalog-btn"
          onClick={() => navigate("/products")}
        >
          View All Collection →
        </button>
      </div>

      <div className="pine-related-grid">
        {related.map((item, idx) => {
          const discount = Math.round(item.discountPercentage || 0);
          return (
            <motion.div
              key={item.id}
              className="pine-related-card"
              onClick={() => {
                navigate(`/product/${item.id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
            >
              {/* Product Image Frame */}
              <div className="pine-card-img-wrap">
                {discount > 0 && (
                  <span className="pine-card-discount-badge">{discount}% OFF</span>
                )}
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  loading="lazy"
                  className="pine-card-img"
                />
              </div>

              {/* Card Meta */}
              <div className="pine-card-info">
                <span className="pine-card-category">{item.category?.replace(/-/g, " ")}</span>
                <h3 className="pine-card-title">{item.title}</h3>

                <div className="pine-card-rating">
                  <span className="pine-card-stars">★★★★★</span>
                  <span className="pine-card-score">{item.rating?.toFixed(1) || "4.8"}</span>
                </div>

                <div className="pine-card-bottom">
                  <div className="pine-card-price">
                    <strong>${typeof item.price === "number" ? item.price.toFixed(2) : item.price}</strong>
                  </div>

                  <motion.button
                    type="button"
                    className="pine-card-add-btn"
                    onClick={(e) => handleQuickAdd(e, item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Add ${item.title} to cart`}
                  >
                    + Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
