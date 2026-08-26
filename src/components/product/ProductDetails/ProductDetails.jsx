import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductDetails.css";
import beautyCareImg from "../../../assets/pine-beauty-care.jpg";

const tabs = [
  { id: "description", label: "DESCRIPTION" },
  { id: "ingredients", label: "INGREDIENTS" },
  { id: "how-to-use", label: "HOW TO USE" },
  { id: "reviews", label: "REVIEWS" },
  { id: "shipping", label: "SHIPPING & RETURNS" },
];

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="pine-details-section">
      <div className="pine-details-header">
        <span className="pine-details-eyebrow">PRODUCT SPECIFICATIONS</span>
        <h2 className="pine-details-heading">Details & Craftsmanship</h2>
      </div>

      {/* ── TABS NAVIGATION BAR ── */}
      <div className="pine-tabs-nav-wrap">
        <div className="pine-tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`pine-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  className="pine-tab-active-indicator"
                  layoutId="pineTabIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB CONTENT & EDITORIAL CARE PANEL ── */}
      <div className="pine-details-content-grid">
        {/* Left Column: Tab Content */}
        <div className="pine-tab-body">
          <AnimatePresence mode="wait">
            {activeTab === "description" && (
              <motion.div
                key="desc"
                className="pine-tab-pane"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pine-pane-lead">
                  {product.description ||
                    "This highly pigmented formula features a refined blend of premium textures designed for effortless everyday versatility and evening elegance."}
                </p>

                <h4 className="pine-checklist-title">Key Formulation Features</h4>
                <ul className="pine-feature-list">
                  <li>
                    <span className="pine-check-icon">✓</span>
                    <div>
                      <strong>Multiple versatile shades & tones</strong>
                      <p>Carefully balanced pigmentation for custom depth and seamless blending.</p>
                    </div>
                  </li>
                  <li>
                    <span className="pine-check-icon">✓</span>
                    <div>
                      <strong>Matte, shimmer and satin finishes</strong>
                      <p>Ultra-fine milled powders deliver soft-focus radiance without fallout.</p>
                    </div>
                  </li>
                  <li>
                    <span className="pine-check-icon">✓</span>
                    <div>
                      <strong>Smooth, long-wear blendable formula</strong>
                      <p>Infused with nourishing natural oils for 12-hour weightless comfort.</p>
                    </div>
                  </li>
                  <li>
                    <span className="pine-check-icon">✓</span>
                    <div>
                      <strong>Travel-friendly luxury packaging</strong>
                      <p>Weighted architectural compact with high-clarity distortion-free mirror.</p>
                    </div>
                  </li>
                  <li>
                    <span className="pine-check-icon">✓</span>
                    <div>
                      <strong>Suitable for sensitive & all skin types</strong>
                      <p>Hypoallergenic, non-comedogenic, and rigorously dermatologically evaluated.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "ingredients" && (
              <motion.div
                key="ingr"
                className="pine-tab-pane"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pine-pane-lead">
                  Formulated with 100% ethically sourced clean botanicals, pure mineral pigments, and nourishing antioxidants.
                </p>
                <div className="pine-ingredients-grid">
                  <div className="pine-ingredient-tag">Organic Jojoba Oil</div>
                  <div className="pine-ingredient-tag">Plant-Derived Squalane</div>
                  <div className="pine-ingredient-tag">Vitamin E Tocopherol</div>
                  <div className="pine-ingredient-tag">Ethical Mica</div>
                  <div className="pine-ingredient-tag">Shea Butter Extract</div>
                  <div className="pine-ingredient-tag">Wild Rosehip Seed</div>
                  <div className="pine-ingredient-tag">Hyaluronic Spheres</div>
                  <div className="pine-ingredient-tag">Chamomile Flower</div>
                </div>
                <p className="pine-ingredients-note">
                  Free of parabens, phthalates, synthetic fragrance, mineral oils, and microplastics.
                </p>
              </motion.div>
            )}

            {activeTab === "how-to-use" && (
              <motion.div
                key="use"
                className="pine-tab-pane"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pine-pane-lead">
                  Maximize longevity and effortless application with our signature multi-step ritual:
                </p>
                <div className="pine-steps-list">
                  <div className="pine-step-item">
                    <span className="pine-step-num">01</span>
                    <div>
                      <strong>Prepare & Prime</strong>
                      <p>Begin with cleansed, hydrated skin. Apply a sheer primer base to enhance intensity.</p>
                    </div>
                  </div>
                  <div className="pine-step-item">
                    <span className="pine-step-num">02</span>
                    <div>
                      <strong>Layer & Blend</strong>
                      <p>Use a soft dense brush for saturated payoff, or fingertips for an ambient satin finish.</p>
                    </div>
                  </div>
                  <div className="pine-step-item">
                    <span className="pine-step-num">03</span>
                    <div>
                      <strong>Set & Perfect</strong>
                      <p>Mist lightly with hydrating setting spray for seamless 14-hour editorial hold.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div
                key="rev"
                className="pine-tab-pane"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pine-review-scorecard">
                  <div className="pine-scorecard-left">
                    <h3>{product.rating ? product.rating.toFixed(1) : "4.8"}</h3>
                    <div className="pine-stars">★★★★★</div>
                    <span>Based on verified boutique reviews</span>
                  </div>
                  <div className="pine-scorecard-right">
                    <div className="pine-bar-row">
                      <span>5 Star</span>
                      <div className="pine-bar-track"><div className="pine-bar-fill" style={{ width: "88%" }} /></div>
                      <span>88%</span>
                    </div>
                    <div className="pine-bar-row">
                      <span>4 Star</span>
                      <div className="pine-bar-track"><div className="pine-bar-fill" style={{ width: "10%" }} /></div>
                      <span>10%</span>
                    </div>
                    <div className="pine-bar-row">
                      <span>3 Star</span>
                      <div className="pine-bar-track"><div className="pine-bar-fill" style={{ width: "2%" }} /></div>
                      <span>2%</span>
                    </div>
                  </div>
                </div>

                <div className="pine-user-review">
                  <div className="pine-user-header">
                    <strong>Genevieve L. — Verified Collector</strong>
                    <span>2 days ago</span>
                  </div>
                  <div className="pine-stars">★★★★★</div>
                  <p>
                    "Exquisite texture and presentation. The packaging feels substantial, and the formula blends like a dream. Truly high luxury caliber."
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "shipping" && (
              <motion.div
                key="ship"
                className="pine-tab-pane"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="pine-pane-lead">
                  AMEZA provides insured, temperature-controlled, carbon-neutral concierge delivery worldwide.
                </p>
                <div className="pine-shipping-grid">
                  <div className="pine-ship-card">
                    <h4>Complimentary Express</h4>
                    <p>Delivered in 2–4 business days on all orders over $75.</p>
                  </div>
                  <div className="pine-ship-card">
                    <h4>Concierge Packaging</h4>
                    <p>Enclosed in our signature Pine velvet gift box with archival tissue.</p>
                  </div>
                  <div className="pine-ship-card">
                    <h4>30-Day Hassle-Free Returns</h4>
                    <p>Prepaid return label included in every shipment with zero restocking fees.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Beauty & Product Care Panel */}
        <div className="pine-care-showcase-panel">
          <div className="pine-care-img-wrap">
            <img src={beautyCareImg} alt="AMEZA botanical care craftsmanship" loading="lazy" />
            <div className="pine-care-img-overlay" />
          </div>

          <div className="pine-care-info-wrap">
            <span className="pine-care-eyebrow">CLEAN LUXURY ETHOS</span>
            <h3>Formulated with Uncompromising Integrity</h3>
            <p>
              Each batch is handcrafted in small artisanal quantities adhering to European botanical standards.
            </p>

            <div className="pine-care-badges-grid">
              <div className="pine-care-badge">
                <span className="pine-badge-dot" />
                <span>Paraben Free</span>
              </div>
              <div className="pine-care-badge">
                <span className="pine-badge-dot" />
                <span>Cruelty Free</span>
              </div>
              <div className="pine-care-badge">
                <span className="pine-badge-dot" />
                <span>100% Vegan</span>
              </div>
              <div className="pine-care-badge">
                <span className="pine-badge-dot" />
                <span>Dermatologically Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
