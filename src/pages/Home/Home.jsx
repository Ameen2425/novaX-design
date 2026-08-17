import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
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
      transition={{ duration: 0.35 }}
    >
      {/* =====================================================
          1. HERO SECTION — EDITORIAL LUXURY BANNER
      ===================================================== */}
      <section className="home-hero">
        <div className="cream-hero-container">
          <motion.div
            className="cream-hero-content"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.span className="cream-hero-label" variants={fadeInUp}>
              NOVAX / THE EVERYDAY EDIT
            </motion.span>

            <motion.h1 className="cream-hero-title" variants={fadeInUp}>
              EVERYTHING YOU NEED.
              <br />
              <span>ONE PLACE.</span>
            </motion.h1>

            <motion.p className="cream-hero-description" variants={fadeInUp}>
              Discover premium products selected for modern everyday living.
            </motion.p>

            <motion.div className="cream-hero-actions" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/products" className="btn-terracotta">
                  SHOP PRODUCTS →
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/about" className="btn-outline-dark">
                  EXPLORE STORY
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="cream-hero-trust" variants={fadeInUp}>
              <span>PREMIUM QUALITY</span>
              <span className="bullet">•</span>
              <span>FAST DELIVERY</span>
              <span className="bullet">•</span>
              <span>SECURE PAYMENT</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="cream-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div className="cream-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                alt="NovaX Editorial Luxury Collection"
              />

              <motion.div
                className="cream-hero-badge"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>✦ NEW ARRIVALS 2026</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. CATEGORY SECTION
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
            <span className="home-section-label">THE NOVAX EDIT</span>
            <h2>Shop by Category</h2>
            <p>Curated collections designed for effortless everyday discovery.</p>
          </div>

          <Link to="/products" className="home-view-all-link">
            View All Categories →
          </Link>
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
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
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
          3. TRENDING PRODUCTS
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
            <span className="home-section-label">TRENDING NOW</span>
            <h2>Popular Products</h2>
          </div>

          <Link to="/products" className="home-view-all-link">
            View All Products →
          </Link>
        </motion.div>

        {loading ? (
          <div className="home-products-loading">
            <div className="home-loader"></div>
            <span>Loading popular products...</span>
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
            <p>Unable to load products at this moment.</p>
            <Link to="/products" className="btn-terracotta">Browse Products →</Link>
          </div>
        )}
      </section>

      {/* =====================================================
          4. SPECIAL OFFER BANNER
      ===================================================== */}
      <section className="home-offer-section">
        <motion.div
          className="home-offer"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="home-offer-content">
            <span className="home-offer-badge">NOVAX SPECIAL</span>
            <h2>
              Better products.
              <br />
              <span>Better prices.</span>
            </h2>
            <p>
              Discover curated luxury products at everyday prices.
              Explore our latest seasonal deals and limited collections.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/products" className="home-shop-btn">
                Explore Deals →
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="home-offer-symbol"
            animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            %
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          5. WHY NOVAX (BENEFITS)
      ===================================================== */}
      <section className="home-benefits-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="home-section-label">WHY SHOP WITH US</span>
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
            { num: "01", title: "Fast Delivery", text: "Get your orders delivered quickly and reliably straight to your doorstep." },
            { num: "02", title: "Secure Checkout", text: "Your transactions are encrypted with bank-level security protections." },
            { num: "03", title: "Easy Returns", text: "Enjoy effortless 30-day return options when something isn't perfect." },
            { num: "04", title: "Customer Support", text: "Our concierge support team is ready to assist you round the clock." },
          ].map((benefit) => (
            <motion.div
              key={benefit.num}
              className="benefit-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <span className="benefit-num">{benefit.num}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          6. SHOPPING EXPERIENCE
      ===================================================== */}
      <section className="home-experience">
        <motion.div
          className="home-experience-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="home-section-label">THE NOVAX DIFFERENCE</span>
          <h2>
            From discovery
            <br />
            to doorstep.
          </h2>
          <p>
            Browse products you love, add them to your cart,
            and enjoy a seamless luxury shopping journey from start to finish.
          </p>

          <motion.div whileHover={{ x: 4 }} style={{ display: "inline-block" }}>
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
            { step: "01", title: "Discover", desc: "Explore curated collections and rare brand exclusives." },
            { step: "02", title: "Choose", desc: "Find thoughtful products that elevate your everyday lifestyle." },
            { step: "03", title: "Enjoy", desc: "Receive fast, beautifully packaged deliveries to your door." },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="experience-step-card"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              <span className="step-num">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          7. STATISTICS
      ===================================================== */}
      <section className="home-stats-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="home-section-label">NOVAX BY THE NUMBERS</span>
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
            { val: "500+", label: "Curated Items" },
            { val: "50+", label: "Global Brands" },
            { val: "4.9★", label: "Customer Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="home-stat"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <strong>{stat.val}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          8. STORE LOCATION
      ===================================================== */}
      <section className="location-section">
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="home-section-label">VISIT NOVAX</span>
          <h2>We'd love to meet you.</h2>
          <p>Experience our physical flagship studio in Hyderabad.</p>
        </motion.div>

        <div className="location-container">
          <motion.div
            className="location-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="location-number">FLAGSHIP BOUTIQUE</span>
            <h3>Your local luxury shopping destination.</h3>
            <div className="location-details">
              <p><span className="loc-icon">📍</span> Kukatpally, Hyderabad, Telangana</p>
              <p><span className="loc-icon">📞</span> +91 98765 43210</p>
              <p><span className="loc-icon">✉️</span> support@novax.com</p>
              <p><span className="loc-icon">🕒</span> Monday – Saturday : 9:00 AM – 9:00 PM</p>
            </div>
          </motion.div>

          <motion.div
            className="location-map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="NovaX Store Location"
              src="https://www.google.com/maps?q=Kukatpally,Hyderabad&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          9. FINAL CTA
      ===================================================== */}
      <section className="home-final-section">
        <motion.div
          className="home-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="home-final-label">READY TO EXPLORE?</span>
          <h2>
            Your next favorite
            <br />
            <span>product is waiting.</span>
          </h2>
          <p>Explore the NovaX collection and discover something thoughtfully crafted for you.</p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link to="/products" className="home-primary-btn">
              Shop NovaX
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Home;