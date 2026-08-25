import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DealCategories.css";

const categories = [
  {
    id: "beauty",
    name: "BEAUTY & CARE",
    discount: "Up to 40% Off",
    link: "/products?category=beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fashion",
    name: "LUXURY FASHION",
    discount: "Up to 35% Off",
    link: "/products?category=womens-bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "electronics",
    name: "AUDIO & TECH",
    discount: "Up to 45% Off",
    link: "/products?category=smartphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "home",
    name: "HOME & LIVING",
    discount: "Up to 30% Off",
    link: "/products?category=home-decoration",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "perfumes",
    name: "HAUTE PERFUMERY",
    discount: "Up to 40% Off",
    link: "/products?category=fragrances",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
  },
];

const DealCategories = () => {
  return (
    <section className="deal-categories-section">
      <div className="deal-section-header">
        <h2 className="deal-section-title">SHOP BY CATEGORY</h2>
        <Link to="/products" className="deal-section-link">
          View All Categories <span>→</span>
        </Link>
      </div>

      <div className="deal-categories-grid">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
          >
            <Link to={cat.link} className="deal-category-card">
              <div className="deal-category-img-box">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="deal-category-img"
                  loading="lazy"
                />
              </div>

              <div className="deal-category-info">
                <div>
                  <h3 className="deal-category-name">{cat.name}</h3>
                  <span className="deal-category-discount">{cat.discount}</span>
                </div>
                <span className="deal-category-arrow">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DealCategories;
