import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./BenefitsSection.css";

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

const BenefitsSection = () => {
  return (
    <>
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
    </>
  );
};

export default BenefitsSection;
