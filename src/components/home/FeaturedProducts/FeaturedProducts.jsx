import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../../product/ProductCard/ProductCard";
import "./FeaturedProducts.css";

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

const FeaturedProducts = ({ products, loading }) => {
  return (
    <section className="home-products">
      <motion.div
        className="home-section-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div>
          <span className="home-section-label">TRENDING NOW</span>
          <h2>Popular Products</h2>
        </div>

        <Link to="/products" className="home-view-all-link">
          View All Products →
        </Link>
      </motion.div>

      {loading ? (
        <div className="home-products-loading">
          <div className="home-loader"></div>
          <span>Loading popular products...</span>
        </div>
      ) : products.length > 0 ? (
        <motion.div
          className="home-product-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {products.slice(0, 8).map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className="home-grid-card-wrap"
            >
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.thumbnail}
                category={product.category}
                rating={product.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="home-products-empty">
          <p>Unable to load products at this moment.</p>
          <Link to="/products" className="btn-terracotta">Browse Products →</Link>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
