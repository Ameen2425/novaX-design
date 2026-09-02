import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADD } from "../../../Redux/Features/cart/CartSlice";
import "./DealProducts.css";

const dealProductsData = [
  {
    id: 1048,
    title: "Lippie Sculpt Contour Pencil",
    discount: "-30%",
    rating: 4.9,
    reviews: 124,
    oldPrice: "$28.00",
    price: "$19.60",
    rawPrice: 19.60,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1046,
    title: "Lippie Stix Satin Radiance",
    discount: "-25%",
    rating: 4.8,
    reviews: 98,
    oldPrice: "$32.00",
    price: "$24.00",
    rawPrice: 24.00,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1045,
    title: "Pure Velvet Filter Foundation",
    discount: "-35%",
    rating: 4.9,
    reviews: 142,
    oldPrice: "$48.00",
    price: "$31.20",
    rawPrice: 31.20,
    image: "https://images.unsplash.com/photo-1631730486784-5456119f69ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1044,
    title: "Artisan Mineral Powder Foundation",
    discount: "-20%",
    rating: 4.7,
    reviews: 110,
    oldPrice: "$36.00",
    price: "$28.80",
    rawPrice: 28.80,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1043,
    title: "Botanical Matte Rouge Formulation",
    discount: "-30%",
    rating: 4.8,
    reviews: 85,
    oldPrice: "$34.00",
    price: "$23.80",
    rawPrice: 23.80,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  },
];

const DealProducts = () => {
  let dispatch = useDispatch();
  const [wishlist, setWishlist] = useState(() => {
    const list = JSON.parse(localStorage.getItem("ameza_wishlist")) || [];
    const map = {};
    list.forEach((id) => (map[id] = true));
    return map;
  });
  const [toastMessage, setToastMessage] = useState("");

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const currentList = JSON.parse(localStorage.getItem("ameza_wishlist")) || [];
    let updated;
    if (currentList.includes(id)) {
      updated = currentList.filter((item) => item !== id);
      setWishlist((prev) => ({ ...prev, [id]: false }));
    } else {
      updated = [...currentList, id];
      setWishlist((prev) => ({ ...prev, [id]: true }));
    }
    localStorage.setItem("ameza_wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      ADD({
        id: product.id,
        title: product.title,
        price: product.rawPrice,
        thumbnail: product.image,
      })
    );

    setToastMessage(`✓ "${product.title}" added to cart!`);
    setTimeout(() => setToastMessage(""), 2800);
  };

  return (
    <section className="deal-products-section" id="todays-deals">
      {toastMessage && (
        <div className="deal-toast-notification">
          {toastMessage}
        </div>
      )}

      <div className="deal-section-header">
        <h2 className="deal-section-title">TODAY'S ATELIER BEAUTY OFFERS</h2>
        <Link to="/products" className="deal-section-link">
          View All Formulations <span>→</span>
        </Link>
      </div>

      <div className="deal-products-grid">
        {dealProductsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
          >
            <div className="deal-product-card">
              {/* TOP HEADER: DISCOUNT + WISHLIST */}
              <div className="deal-card-top">
                <span className="deal-card-discount-badge">{item.discount}</span>
                <button
                  className={`deal-card-wishlist-btn ${wishlist[item.id] ? "active" : ""}`}
                  onClick={(e) => toggleWishlist(e, item.id)}
                  title="Save to Wishlist"
                  type="button"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={wishlist[item.id] ? "#B9826D" : "none"} stroke={wishlist[item.id] ? "#B9826D" : "currentColor"} strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>

              {/* PRODUCT IMAGE */}
              <Link to={`/products/${item.id}`} className="deal-card-img-link">
                <div className="deal-card-img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="deal-card-img"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* CARD DETAILS */}
              <div className="deal-card-body">
                <Link to={`/products/${item.id}`} className="deal-card-title-link">
                  <h3 className="deal-card-title">{item.title}</h3>
                </Link>

                {/* RATING */}
                <div className="deal-card-rating">
                  <span className="star-icon">★</span>
                  <strong>{item.rating}</strong>
                  <span className="review-count">({item.reviews})</span>
                </div>

                {/* PRICE ROW */}
                <div className="deal-card-price-row">
                  <del className="deal-card-old-price">{item.oldPrice}</del>
                  <strong className="deal-card-new-price">{item.price}</strong>
                </div>

                {/* ADD TO CART CTA */}
                <button
                  className="deal-card-cart-btn"
                  onClick={(e) => handleAddToCart(e, item)}
                  type="button"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DealProducts;
