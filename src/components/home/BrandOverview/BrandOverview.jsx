import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./BrandOverview.css";

const BrandOverview = () => {
  const pillars = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(225, 29, 72, 0.25)" />
        </svg>
      ),
      tag: "Curation",
      title: "Handpicked Global Maisons",
      desc: "Every creation is vetted by our international style council, bridging classic heritage craftsmanship and avant-garde luxury.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(16, 185, 129, 0.15)" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      tag: "Authentication",
      title: "100% Provenance Guarantee",
      desc: "Direct partnership with verified global ateliers ensures uncompromising material purity, certificate of authenticity, and zero counterfeits.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" fill="rgba(225, 29, 72, 0.25)" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      tag: "Concierge",
      title: "White-Glove Service",
      desc: "Dedicated personal advisors, bespoke velvet gift packaging, and end-to-end insured express transit to over 80 countries worldwide.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(225, 29, 72, 0.25)" />
        </svg>
      ),
      tag: "Innovation",
      title: "Next-Gen Fluid Shopping",
      desc: "An intuitive digital boutique engineered with obsidian aesthetics, instant search, dynamic filter systems, and seamless checkout.",
    },
  ];

  const highlights = [
    "Over 12,000+ verified luxury creations curated globally",
    "Carbon-neutral worldwide insured delivery to your doorstep",
    "Complimentary signature velvet unboxing with every order",
    "30-day effortless returns with zero-questions-asked guarantee",
  ];

  return (
    <section className="brand-overview-section" id="about-website">
      <div className="brand-overview-container">
        {/* Section Header */}
        <motion.div
          className="brand-overview-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="brand-overview-eyebrow">WHAT IS AMEZA</span>
          <h2 className="brand-overview-title">
            The Digital Maison For <span>Everything Worth Discovering</span>
          </h2>
          <p className="brand-overview-subtitle">
            AMEZA is a modern luxury e-commerce destination built to redefine online
            shopping. We unite the world’s most prestigious ateliers, master artisans,
            and iconic innovators into a single, seamless digital sanctuary.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="brand-pillars-grid">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.tag}
              className="brand-pillar-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <div className="pillar-top">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Experience Showcase Banner */}
        <motion.div
          className="brand-story-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="story-banner-content">
            <span className="story-badge">THE AMEZA PROMISE</span>
            <h3 className="story-heading">
              Curated for Connoisseurs, Designed for Seamless Living
            </h3>
            <p className="story-text">
              Whether you are discovering timeless haute couture, investing in fine
              timepieces, or transforming your living spaces with bespoke artisan
              furnishings, AMEZA guarantees an elevated shopping experience tailored to
              discerning tastes.
            </p>

            <ul className="story-highlights-list">
              {highlights.map((item) => (
                <li key={item} className="story-highlight-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="highlight-icon">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="story-banner-actions">
              <Link to="/products" className="btn-explore-catalog">
                Explore Full Catalog
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/about" className="btn-learn-heritage">
                Read Our Story
              </Link>
            </div>
          </div>

          <div className="story-banner-metrics">
            <div className="metric-box">
              <strong>100%</strong>
              <span>Verified Authentic</span>
            </div>
            <div className="metric-box">
              <strong>80+</strong>
              <span>Countries Shipped</span>
            </div>
            <div className="metric-box">
              <strong>24/7</strong>
              <span>Concierge Support</span>
            </div>
            <div className="metric-box">
              <strong>4.9★</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandOverview;
