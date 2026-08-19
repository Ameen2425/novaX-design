import { motion } from "framer-motion";
import "./AuthHero.css";

const AuthHero = ({ image, label, title, subtitle, features = [] }) => {
  return (
    <motion.div
      className="auth-hero-section"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <img
        src={image}
        alt="AMEZA Shopping Experience"
        className="auth-bg-img"
      />
      <div className="auth-image-overlay"></div>
      <div className="auth-image-content">
        <span className="auth-image-label">{label}</span>

        <h2>{title}</h2>

        <p>{subtitle}</p>

        {features.length > 0 && (
          <div className="signup-image-features">
            {features.map((feat, i) => (
              <motion.span key={i} whileHover={{ scale: 1.05 }}>
                {feat}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AuthHero;
