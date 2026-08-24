import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./BenefitsSection.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const BenefitsSection = () => {
  const steps = [
    {
      step: "01",
      tag: "DISCOVER",
      title: "Curated Discovery",
      desc: "Explore rare private editions, verified heritage ateliers, and seasonal haute couture hand-selected for discerning collectors.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      step: "02",
      tag: "AUTHENTICATE",
      title: "Vault Authentication",
      desc: "Every creation undergoes multi-point inspection by certified curators to verify material purity, serial matching, and provenance.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      step: "03",
      tag: "DELIVER",
      title: "White-Glove Delivery",
      desc: "Receive your piece in signature velvet archival packaging with insured carbon-neutral global courier transit straight to your doorstep.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  const guarantees = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Verified Authenticity",
      sub: "100% Guaranteed Pedigree",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global Express",
      sub: "Over 80 Countries Insured",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      ),
      title: "30-Day Effortless Return",
      sub: "Zero Questions Asked",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "24/7 VIP Concierge",
      sub: "Dedicated Client Advisors",
    },
  ];

  return (
    <section className="home-benefits-section" id="client-experience">
      <div className="home-benefits-container">
        {/* Heading */}
        <motion.div
          className="home-section-heading centered"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="home-section-label">THE CLIENT JOURNEY</span>
          <h2>
            From Discovery <span>To Doorstep</span>
          </h2>
          <p>
            An effortless three-stage concierge experience designed to exceed the highest standards of luxury commerce.
          </p>
        </motion.div>

        {/* 3 Step Journey Cards */}
        <motion.div
          className="home-steps-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              className="home-step-card"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div className="step-card-header">
                <div className="step-icon-box">{item.icon}</div>
                <div className="step-badge-wrap">
                  <span className="step-num-pill">{item.step}</span>
                  <span className="step-tag-pill">{item.tag}</span>
                </div>
              </div>
              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Guarantees Strip */}
        <motion.div
          className="home-guarantees-strip"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {guarantees.map((g) => (
            <div key={g.title} className="guarantee-box">
              <div className="guarantee-icon-wrap">{g.icon}</div>
              <div className="guarantee-text-wrap">
                <strong>{g.title}</strong>
                <span>{g.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          className="home-experience-cta-bar"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="cta-bar-text">
            <h4>Ready to Experience Exceptional Living?</h4>
            <p>Explore thousands of certified luxury items curated from the world’s most prestigious ateliers.</p>
          </div>
          <Link to="/products" className="btn-benefits-cta">
            Start Shopping
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
