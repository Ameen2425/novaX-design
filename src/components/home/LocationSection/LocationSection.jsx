import { motion } from "framer-motion";
import "./LocationSection.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const LocationSection = () => {
  return (
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
  );
};

export default LocationSection;
