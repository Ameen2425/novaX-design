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

  const getRelated = async () => {
    setLoading(true);
    const cat = currentCategory || "beauty";
    const response = await axios.get(`https://dummyjson.com/products/category/${cat}`);
    let items = response.data?.products || [];

    // Filter out current product
    items = items.filter((p) => p.id !== Number(currentId));

    if (items.length < 4) {
      const fallbackResponse = await axios.get("https://dummyjson.com/products?limit=10");
      const fallbackItems = (fallbackResponse.data?.products || []).filter(
        (p) => p.id !== Number(currentId)
      );
      items = [...items, ...fallbackItems].slice(0, 4);
    } else {
      items = items.slice(0, 4);
    }

    setRelated(items);
    setLoading(false);
  };

  useEffect(() => {
    if (currentCategory) {
      getRelated();
    }
  }, [currentCategory, currentId]);

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    const productPrice = parseFloat(item.price) || 49.0;
    const img = item.thumbnail || (item.images && item.images[0]) || "";

    dispatch(
      ADD({
        id: item.id,
        title: item.title,
        price: productPrice,
        thumbnail: img,
      })
    );

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
          const productImg = item.thumbnail || (item.images && item.images[0]) || "";
          const productTitle = item.title;
          const productPrice = parseFloat(item.price) || 49.0;
          const productCategory = item.category ? item.category.replace(/-/g, " ") : "Luxury";
          const productRating = item.rating ? parseFloat(item.rating) : 4.8;

          return (
            <motion.div
              key={item.id}
              className="pine-related-card"
              onClick={() => {
                navigate(`/products/${item.id}`);
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
                <img
                  src={productImg}
                  alt={productTitle}
                  loading="lazy"
                  className="pine-card-img"
                />
              </div>

              {/* Card Meta */}
              <div className="pine-card-info">
                <span className="pine-card-category">{productCategory}</span>
                <h3 className="pine-card-title">{productTitle}</h3>

                <div className="pine-card-rating">
                  <span className="pine-card-stars">★★★★★</span>
                  <span className="pine-card-score">{productRating.toFixed(1)}</span>
                </div>

                <div className="pine-card-bottom">
                  <div className="pine-card-price">
                    <strong>${productPrice.toFixed(2)}</strong>
                  </div>

                  <motion.button
                    type="button"
                    className="pine-card-add-btn"
                    onClick={(e) => handleQuickAdd(e, item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Add ${productTitle} to cart`}
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
