import { motion } from "framer-motion";
import "./LocationSection.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const LocationSection = () => {
  return (
    <section className="location-section" id="visit-boutique">
      <motion.div
        className="home-section-heading centered"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <span className="home-section-label">VISIT OUR ATELIER</span>
        <h2>Experience The Physical Flagship.</h2>
        <p>Immerse yourself in our private viewing rooms and bespoke fragrance sanctuary in Hyderabad.</p>
      </motion.div>

      <div className="location-container">
        <motion.div
          className="location-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="location-header-row">
            <span className="location-badge">FLAGSHIP BOUTIQUE</span>
            <span className="location-status-live">● Open Today 9:00 AM – 9:00 PM</span>
          </div>

          <h3>Your Local Luxury Sanctuary.</h3>
          <p className="location-intro">
            Schedule a private appointment with our master stylists or explore our
            exclusive archival physical collections in person.
          </p>

          <div className="location-details">
            <div className="loc-item">
              <span className="loc-icon">📍</span>
              <div>
                <strong>Boutique Address</strong>
                <p>Kukatpally, Hyderabad, Telangana, 500072</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">📞</span>
              <div>
                <strong>VIP Concierge Line</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">✉️</span>
              <div>
                <strong>Client Advisor Email</strong>
                <p>concierge@ameza.com</p>
              </div>
            </div>
            <div className="loc-item">
              <span className="loc-icon">🕒</span>
              <div>
                <strong>Boutique Hours</strong>
                <p>Monday – Saturday : 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="location-actions">
            <a
              href="https://www.google.com/maps?q=Kukatpally,Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-location-directions"
            >
              Get Directions ↗
            </a>
            <a href="tel:+919876543210" className="btn-location-call">
              Call Concierge 📞
            </a>
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
            title="AMEZA Store Location"
            src="https://www.google.com/maps?q=Kukatpally,Hyderabad&output=embed"
            width="100%"
            height="380"
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
