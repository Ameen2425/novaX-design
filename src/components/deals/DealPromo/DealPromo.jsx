import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DealPromo.css";
import novax3dCta from "../../../assets/novax-3d-cta.jpg";

const DealPromo = () => {
  return (
    <section className="deal-promo-section">
      <div className="deal-promo-container">
        {/* LEFT EDITORIAL CONTENT */}
        <motion.div
          className="deal-promo-content"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="deal-promo-eyebrow">THE NOVAX DEAL EDIT</span>

          <h2 className="deal-promo-heading">
            Good products shouldn't
            <br />
            require a compromise.
          </h2>

          <p className="deal-promo-sub">
            Premium quality. Exclusive prices. Limited time.
          </p>

          <Link to="/products" className="btn-promo-explore">
            EXPLORE MORE DEALS <span>→</span>
          </Link>
        </motion.div>

        {/* RIGHT 3D SCENE */}
        <motion.div
          className="deal-promo-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="deal-promo-img-wrap">
            <img
              src={novax3dCta}
              alt="NovaX 3D Headphones and Luxury Shopping Bag"
              className="deal-promo-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DealPromo;
