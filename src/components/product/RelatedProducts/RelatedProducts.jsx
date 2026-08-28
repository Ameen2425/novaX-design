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
      const cat = currentCategory || "lipstick";
      let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${cat}`;
      let res = await axios.get(url);
      let items = res.data || [];

      // Filter out current product
      items = items.filter((p) => p.id !== Number(currentId));

      if (items.length < 4) {
        const fallbackRes = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
        const fallbackItems = (fallbackRes.data || []).filter(
          (p) => p.id !== Number(currentId)
        );
        items = [...items, ...fallbackItems].slice(0, 4);
      } else {
        items = items.slice(0, 4);
      }

      setRelated(items);
      setLoading(false);
    };

    if (currentCategory) {
      fetchRelated();
    }
  }, [currentCategory, currentId]);

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    const productPrice = parseFloat(item.price) > 0 ? parseFloat(item.price) : 24.0;
    const img = item.api_featured_image
      ? (item.api_featured_image.startsWith("//") ? "https:" + item.api_featured_image : item.api_featured_image)
      : (item.image_link || item.thumbnail || "");

    dispatch(
      ADD({
        id: item.id,
        title: item.name || item.title || "Beauty Formulation",
        price: productPrice,
        thumbnail: img,
      })
    );

    if (onToast) {
      onToast(`✓ "${item.name || item.title}" added to cart!`);
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
          const productImg = item.api_featured_image
            ? (item.api_featured_image.startsWith("//") ? "https:" + item.api_featured_image : item.api_featured_image)
            : (item.image_link || item.thumbnail || "");
          const productTitle = item.name || item.title;
          const productPrice = parseFloat(item.price) > 0 ? parseFloat(item.price) : 24.0;
          const productCategory = item.product_type || item.category || "Beauty";
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
                <span className="pine-card-category">{productCategory.replace(/_/g, " ")}</span>
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
