import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { CLEAR } from "../../Redux/Features/cart/CartSlice";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [settings, setSettings] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("ameza_settings")) || {
        orderUpdatesEmail: true,
        orderUpdatesSms: true,
        conciergeNewsletter: false,
        theme: "pine-apricot",
        currency: "USD",
      }
    );
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleToggle = (key) => {
    const updated = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(updated);
    localStorage.setItem("ameza_settings", JSON.stringify(updated));
    showToast("✓ Preferences updated");
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2800);
  };

  const handleClearCart = () => {
    dispatch(CLEAR());
    showToast("✓ Shopping bag cleared");
  };

  const handleClearWishlist = () => {
    localStorage.setItem("ameza_wishlist", JSON.stringify([]));
    showToast("✓ Wishlist cleared");
  };

  const handleLogout = () => {
    showToast("Signed out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 600);
  };

  return (
    <div className="settings-page-root">
      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="settings-toast"
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.3 }}
          >
            <span className="toast-icon">✦</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="settings-container">
        {/* Navigation Bar */}
        <div className="settings-nav-bar">
          <Link to="/account" className="btn-back-account">
            ← Back to Account
          </Link>
          <span className="nav-meta">CLIENT SETTINGS</span>
        </div>

        {/* Editorial Header */}
        <div className="settings-header">
          <span className="settings-eyebrow">PREFERENCES</span>
          <h1 className="settings-title">Account Settings</h1>
          <p className="settings-subtitle">
            Configure client notifications, visual theme preferences, and localized settings.
          </p>
        </div>

        <div className="settings-cards-list">
          {/* Section 1: Notifications */}
          <div className="settings-card">
            <h3 className="card-title">Concierge & Order Notifications</h3>
            <p className="card-desc">
              Select which communication channels you prefer for dispatch milestones and atelier announcements.
            </p>

            <div className="settings-toggle-group">
              <div className="toggle-item">
                <div className="toggle-info">
                  <strong>Order Dispatch Updates (Email)</strong>
                  <span>Receive immediate tracking numbers and status changes via email.</span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch ${settings.orderUpdatesEmail ? "active" : ""}`}
                  onClick={() => handleToggle("orderUpdatesEmail")}
                  aria-label="Toggle Email Order Updates"
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className="toggle-item">
                <div className="toggle-info">
                  <strong>SMS Milestone Alerts</strong>
                  <span>Receive priority SMS alerts when your courier reaches your address.</span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch ${settings.orderUpdatesSms ? "active" : ""}`}
                  onClick={() => handleToggle("orderUpdatesSms")}
                  aria-label="Toggle SMS Alerts"
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className="toggle-item">
                <div className="toggle-info">
                  <strong>Private Atelier Newsletter</strong>
                  <span>Exclusive invitations to seasonal private edits and new collection launches.</span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch ${settings.conciergeNewsletter ? "active" : ""}`}
                  onClick={() => handleToggle("conciergeNewsletter")}
                  aria-label="Toggle Newsletter"
                >
                  <span className="toggle-slider" />
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Display & Regional Preferences */}
          <div className="settings-card">
            <h3 className="card-title">Theme & Regional Preferences</h3>
            <p className="card-desc">
              Your default atelier theme and pricing display format.
            </p>

            <div className="settings-options-row">
              <div className="setting-choice-block">
                <span className="choice-label">PALETTE THEME</span>
                <div className="theme-indicator-pill">
                  <span className="theme-color ruby" />
                  <span className="theme-color copper" />
                  <strong>Velvet Obsidian & Crimson Ruby (Signature)</strong>
                </div>
              </div>

              <div className="setting-choice-block">
                <span className="choice-label">CURRENCY FORMAT</span>
                <div className="currency-pill">
                  <strong>USD ($) • United States Dollar</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Data & Client Actions */}
          <div className="settings-card danger-zone">
            <h3 className="card-title">Client Data & Session Management</h3>
            <p className="card-desc">
              Perform local storage resets or terminate your current client session.
            </p>

            <div className="danger-buttons-row">
              <button
                type="button"
                className="btn-action-neutral"
                onClick={handleClearCart}
              >
                Clear Shopping Bag
              </button>

              <button
                type="button"
                className="btn-action-neutral"
                onClick={handleClearWishlist}
              >
                Clear Saved Wishlist
              </button>

              <button
                type="button"
                className="btn-action-danger"
                onClick={handleLogout}
              >
                Sign Out of Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
