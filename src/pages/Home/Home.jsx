import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=12"
        );
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* =====================================================
          2-COLUMN EDITORIAL HERO — CREAM + BROWN LUXURY
      ===================================================== */}
      <section className="cream-hero-section">
        <div className="cream-hero-container">
          <motion.div
            className="cream-hero-content"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.p className="cream-hero-label" variants={fadeInUp}>
              NOVAX / THE EVERYDAY EDIT
            </motion.p>

            <motion.h1 className="serif-title" variants={fadeInUp}>
              EVERYTHING YOU NEED.
              <br />
              <span className="accent-text">ONE PLACE.</span>
            </motion.h1>

            <motion.p className="cream-hero-description" variants={fadeInUp}>
              Discover premium products selected for modern everyday living.
            </motion.p>

            <motion.div className="cream-hero-buttons" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/products" className="btn-terracotta">
                  SHOP PRODUCTS →
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/about" className="btn-outline-dark">
                  EXPLORE COLLECTION
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="cream-hero-trust" variants={fadeInUp}>
              <span>PREMIUM QUALITY</span>
              <span>•</span>
              <span>FAST DELIVERY</span>
              <span>•</span>
              <span>SECURE PAYMENT</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="cream-hero-visual"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <motion.div
              className="cream-hero-image-frame"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                alt="NovaX Editorial Luxury Collection"
              />

              <motion.div
                className="cream-hero-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>NEW ARRIVALS 2026</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}
      <section className="home-categories">
        <motion.div
          className="home-section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div>
            <p className="home-label">THE NOVAX EDIT</p>
            <h2>Shop by Category</h2>
            <p>Curated collections designed for effortless everyday discovery.</p>
          </div>

          <motion.div whileHover={{ x: 5 }}>
            <Link to="/products">View All Categories →</Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-category-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { num: "01", name: "Electronics", desc: "Devices & accessories", icon: "⚡" },
            { num: "02", name: "Fashion", desc: "Curated styles & wear", icon: "✨" },
            { num: "03", name: "Beauty", desc: "Care, skin & cosmetics", icon: "🌿" },
            { num: "04", name: "Home & Living", desc: "Thoughtful spaces", icon: "🛋️" },
            { num: "05", name: "Footwear", desc: "Modern daily essentials", icon: "👟" },
          ].map((cat) => (
            <motion.div
              key={cat.num}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="home-category-card-wrap"
            >
              <Link to="/products" className="home-category-card">
                <div className="home-cat-card-header">
                  <span className="home-cat-num">{cat.num}</span>
                  <span className="home-cat-icon">{cat.icon}</span>
                </div>
                <div className="home-cat-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
                <div className="home-cat-card-footer">
                  <span>Explore</span>
                  <span className="home-cat-arrow">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* =====================================================
          TRENDING PRODUCTS
      ===================================================== */}
      <section className="home-products">
        <motion.div
          className="home-section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div>
            <p className="home-label">TRENDING NOW</p>
            <h2>Popular products</h2>
          </div>

          <motion.div whileHover={{ x: 5 }}>
            <Link to="/products">View All Products →</Link>
          </motion.div>
        </motion.div>

        {loading ? (
          <div className="home-products-loading">
            <div className="home-loader"></div>
            <span>Loading products...</span>
          </div>
        ) : products.length > 0 ? (
          <motion.div
            className="home-product-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {products.slice(0, 8).map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="home-grid-card-wrap"
              >
                <Cards
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.thumbnail}
                  category={product.category}
                  rating={product.rating}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="home-products-empty">
            <p>Unable to load products.</p>
            <Link to="/products">Browse Products →</Link>
          </div>
        )}
      </section>


      {/* =====================================================
          SPECIAL OFFER
      ===================================================== */}
      <motion.section
        className="home-offer"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div className="home-offer-content" variants={staggerContainer}>
          <p>NOVAX SPECIAL</p>
          <h2>
            Better products.
            <br />
            Better prices.
          </h2>
          <span>
            Discover great products at prices you'll love.
            Start exploring our latest collection today.
          </span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/products" className="home-shop-btn">
              Explore Deals →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-offer-symbol"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          %
        </motion.div>
      </motion.section>

      {/* =====================================================
          WHY NOVAX
      ===================================================== */}
      <section className="home-benefits-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="home-label">WHY SHOP WITH US</p>
          <h2>Shopping without the hassle.</h2>
          <p>Everything is designed to make your shopping experience easier.</p>
        </motion.div>

        <motion.div
          className="home-benefits"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { num: "01", title: "Fast Delivery", text: "Get your orders delivered quickly and reliably." },
            { num: "02", title: "Secure Checkout", text: "Your shopping experience is designed with security in mind." },
            { num: "03", title: "Easy Returns", text: "Simple return options when something isn't right." },
            { num: "04", title: "Customer Support", text: "Get assistance whenever you need it." },
          ].map((benefit) => (
            <motion.div
              key={benefit.num}
              className="benefit-card"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 12px 25px rgba(0,0,0,0.08)" }}
            >
              <span className="benefit-num">{benefit.num}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          SHOPPING EXPERIENCE
      ===================================================== */}
      <section className="home-experience">
        <motion.div
          className="home-experience-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="home-label">THE NOVAX DIFFERENCE</p>
          <h2>
            From discovery
            <br />
            to doorstep.
          </h2>
          <p>
            Browse products you love, add them to your cart,
            and enjoy a simple shopping journey from start to finish.
          </p>

          <motion.div whileHover={{ x: 5 }} style={{ display: "inline-block" }}>
            <Link to="/products" className="home-primary-btn">
              Start Shopping
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-experience-steps"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {[
            { step: "01", title: "Discover", desc: "Explore products and categories." },
            { step: "02", title: "Choose", desc: "Find products that fit your needs." },
            { step: "03", title: "Enjoy", desc: "Get your order delivered to you." },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          STATISTICS
      ===================================================== */}
      <section className="home-stats-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="home-label">NOVAX BY THE NUMBERS</p>
          <h2>Growing every day.</h2>
        </motion.div>

        <motion.div
          className="home-stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {[
            { val: "10K+", label: "Happy Customers" },
            { val: "500+", label: "Products" },
            { val: "50+", label: "Brands" },
            { val: "4.9★", label: "Customer Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="home-stat"
              variants={fadeInUp}
              whileHover={{ scale: 1.06 }}
            >
              <strong>{stat.val}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          STORE
      ===================================================== */}
      <section className="location-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="home-label">VISIT NOVAX</p>
          <h2>We'd love to meet you.</h2>
          <p>Find our store in Hyderabad.</p>
        </motion.div>

        <div className="location-container">
          <motion.div
            className="location-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="location-number">NOVAX STORE</span>
            <h3>Your local shopping destination.</h3>
            <p>📍 Kukatpally, Hyderabad, Telangana</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@novax.com</p>
            <p>🕒 Monday - Saturday : 9:00 AM - 9:00 PM</p>
          </motion.div>

          <motion.div
            className="location-map"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="NovaX Store"
              src="https://www.google.com/maps?q=Kukatpally,Hyderabad&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <motion.section
        className="home-final"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="home-label">READY TO EXPLORE?</p>
        <h2>
          Your next favorite
          <br />
          <span>product is waiting.</span>
        </h2>
        <p>Explore the NovaX collection and find something made for you.</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" className="home-primary-btn">
            Shop NovaX
            <span>→</span>
          </Link>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Home;