import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DealProducts.css";

const dealProductsData = [
  {
    id: 1,
    title: "Luxury Mascara Lash Princess",
    discount: "-35%",
    rating: 4.8,
    reviews: 124,
    oldPrice: "₹2,199",
    price: "₹1,429",
    rawPrice: 1429,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    discount: "-40%",
    rating: 4.7,
    reviews: 98,
    oldPrice: "₹3,499",
    price: "₹2,099",
    rawPrice: 2099,
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    discount: "-30%",
    rating: 4.9,
    reviews: 76,
    oldPrice: "₹49,900",
    price: "₹34,930",
    rawPrice: 34930,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Powder Cushion Foundation",
    discount: "-25%",
    rating: 4.6,
    reviews: 110,
    oldPrice: "₹1,799",
    price: "₹1,349",
    rawPrice: 1349,
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
  },
  {
    id: 5,
    title: "Matte Lipstick Premium",
    discount: "-35%",
    rating: 4.7,
    reviews: 85,
    oldPrice: "₹899",
    price: "₹584",
    rawPrice: 584,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
  },
];

const DealProducts = () => {
  const [wishlist, setWishlist] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.rawPrice,
        thumbnail: product.image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setToastMessage(`✓ ${product.title} added to cart!`);
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
        <h2 className="deal-section-title">TODAY'S BEST DEALS</h2>
        <Link to="/products" className="deal-section-link">
          View All Deals <span>→</span>
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={wishlist[item.id] ? "#A34755" : "none"} stroke={wishlist[item.id] ? "#A34755" : "currentColor"} strokeWidth="1.8">
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
