import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hairOilImg from "../../../assets/ameza-deal-hair-oil.jpg";
import "./DealCategories.css";

const categories = [
  {
    id: "makeup",
    name: "LIP ATELIER & MAKEUP",
    discount: "Up to 30% Off",
    link: "/products?category=beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "skincare",
    name: "BOTANICAL SKINCARE",
    discount: "Up to 25% Off",
    link: "/products?category=skin-care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "perfumes",
    name: "HAUTE PERFUMERY",
    discount: "Up to 35% Off",
    link: "/products?category=fragrances",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "haircare",
    name: "HAIRCARE & ELIXIRS",
    discount: "Up to 20% Off",
    link: "/products?category=beauty",
    image: hairOilImg,
  },
  {
    id: "accessories",
    name: "BEAUTY ACCESSORIES",
    discount: "Up to 30% Off",
    link: "/products?category=beauty",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
];

const DealCategories = () => {
  return (
    <section className="deal-categories-section">
      <div className="deal-section-header">
        <h2 className="deal-section-title">SHOP BEAUTY BY CATEGORY</h2>
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
