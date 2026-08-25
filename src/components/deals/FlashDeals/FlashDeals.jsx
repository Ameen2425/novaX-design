import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADD } from "../../../Redux/Features/cart/CartSlice";
import "./FlashDeals.css";

const flashDealsData = [
  {
    id: 101,
    title: "Chanel Coco Mademoiselle",
    discount: "-30%",
    oldPrice: "₹7,499",
    price: "₹5,249",
    rawPrice: 5249,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
  },
  {
    id: 102,
    title: "Sony WH-1000XM5 Noise Cancelling",
    discount: "-35%",
    oldPrice: "₹34,990",
    price: "₹22,690",
    rawPrice: 22690,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 103,
    title: "The Ordinary Niacinamide 10%",
    discount: "-25%",
    oldPrice: "₹599",
    price: "₹449",
    rawPrice: 449,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 104,
    title: "Nike Air Max 270 Special Edition",
    discount: "-30%",
    oldPrice: "₹11,499",
    price: "₹8,049",
    rawPrice: 8049,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
];

const FlashDeals = () => {
  let dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState("");
  const [flashTime, setFlashTime] = useState({ hours: 6, minutes: 14, seconds: 37 });

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2 = (n) => String(n).padStart(2, "0");

  const handleQuickAdd = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      ADD({
        id: item.id,
        title: item.title,
        price: item.rawPrice,
        thumbnail: item.image,
      })
    );

    setToastMessage(`✓ ${item.title} added!`);
    setTimeout(() => setToastMessage(""), 2800);
  };

  return (
    <section className="flash-deals-section">
      {toastMessage && (
        <div className="deal-toast-notification">
          {toastMessage}
        </div>
      )}

      <div className="deal-section-header">
        <div className="flash-header-left">
          <h2 className="deal-section-title">
            <span className="flash-icon">⚡</span> FLASH DEALS
          </h2>
          <div className="flash-countdown-pill">
            <span className="flash-ends-label">Ends in:</span>
            <span className="flash-timer-mono">
              {format2(flashTime.hours)} : {format2(flashTime.minutes)} : {format2(flashTime.seconds)}
            </span>
          </div>
        </div>

        <Link to="/products" className="deal-section-link">
          Ending Soon <span>→</span>
        </Link>
      </div>

      <div className="flash-deals-grid">
        {flashDealsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
          >
            <div className="flash-deal-card" onClick={(e) => handleQuickAdd(e, item)}>
              {/* IMAGE + DISCOUNT */}
              <div className="flash-deal-img-box">
                <span className="flash-deal-discount">{item.discount}</span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="flash-deal-img"
                  loading="lazy"
                />
              </div>

              {/* DETAILS */}
              <div className="flash-deal-details">
                <h3 className="flash-deal-name">{item.title}</h3>
                <div className="flash-deal-prices">
                  <del className="flash-old-price">{item.oldPrice}</del>
                  <strong className="flash-new-price">{item.price}</strong>
                </div>
                <button type="button" className="flash-quick-btn">
                  + QUICK ADD
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;
