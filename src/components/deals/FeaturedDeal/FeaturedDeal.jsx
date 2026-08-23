import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FeaturedDeal.css";
import amezaFeaturedDeal from "../../../assets/novax-featured-deal.jpg";

const FeaturedDeal = () => {
  const [toastMessage, setToastMessage] = useState("");

  const handleBuyFeatured = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = {
      id: 999,
      title: "Oud Noir Eau de Parfum",
      price: 3599,
      thumbnail: amezaFeaturedDeal,
      quantity: 1,
    };

    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setToastMessage("✓ Oud Noir Eau de Parfum added to cart!");
    setTimeout(() => setToastMessage(""), 2800);
  };

  return (
    <section className="featured-deal-section">
      {toastMessage && (
        <div className="deal-toast-notification">
          {toastMessage}
        </div>
      )}

      <div className="featured-deal-card">
        {/* LEFT 3D PRODUCT SHOWCASE */}
        <motion.div
          className="featured-deal-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="featured-deal-img-frame">
            <img
              src={amezaFeaturedDeal}
              alt="Oud Noir Eau de Parfum 3D Composition"
              className="featured-deal-img"
            />
            {/* FLOATING DISCOUNT BADGE */}
            <div className="featured-badge-float">
              -40%
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="featured-deal-content"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="featured-deal-eyebrow">FEATURED DEAL</span>

          <h2 className="featured-deal-title">
            Oud Noir
            <br />
            <span>Eau de Parfum</span>
          </h2>

          <p className="featured-deal-desc">
            A timeless signature scent crafted for those who appreciate sophistication and depth.
          </p>

          <div className="featured-deal-pricing">
            <div className="featured-price-main">
              <del className="featured-price-old">₹5,999</del>
              <strong className="featured-price-new">₹3,599</strong>
            </div>

            <span className="featured-savings-tag">SAVE ₹2,400</span>
          </div>

          <button
            className="btn-featured-shop"
            onClick={handleBuyFeatured}
            type="button"
          >
            SHOP THIS DEAL <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDeal;
