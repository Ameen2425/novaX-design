import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page-root">
      <div className="not-found-page-container">
        <motion.div
          className="not-found-card"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <span className="not-found-eyebrow">ERROR 404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The atelier archive or creation you requested does not exist or has been relocated within our catalog.
          </p>

          <div className="not-found-actions-group">
            <Link to="/home" className="btn-not-found-primary">
              Return to Home →
            </Link>
            <Link to="/products" className="btn-not-found-secondary">
              Explore All Products
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
