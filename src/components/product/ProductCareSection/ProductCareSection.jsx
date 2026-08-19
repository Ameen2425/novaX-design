import { motion } from "framer-motion";
import "./ProductCareSection.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
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
      delayChildren: 0.05
    }
  }
};

const ProductCareSection = () => {
  return (
    <section className="single-details">
      <motion.div
        className="single-details-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <span>AMEZA PRODUCT CARE</span>
        <h2>Shop with confidence.</h2>
        <p>
          We focus on making every part of your shopping experience simple and
          reliable.
        </p>
      </motion.div>

      <motion.div
        className="single-details-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {[
          {
            num: "01",
            title: "Quality Products",
            desc: "Discover products selected for quality, value, and everyday use."
          },
          {
            num: "02",
            title: "Fast Delivery",
            desc: "Get your products delivered quickly and conveniently."
          },
          {
            num: "03",
            title: "Secure Shopping",
            desc: "Enjoy a simple and secure shopping experience with AMEZA."
          },
          {
            num: "04",
            title: "Customer Support",
            desc: "We're here to help whenever you need assistance with your order."
          }
        ].map((item) => (
          <motion.div
            key={item.num}
            variants={fadeInUp}
            whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}
          >
            <span>{item.num}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductCareSection;
