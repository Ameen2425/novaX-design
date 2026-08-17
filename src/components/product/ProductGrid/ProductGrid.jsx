import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard";

const gridVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const ProductGrid = ({ currentProducts, category, search, page }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${category}-${search}-${page}`}
        className="products-grid"
        variants={gridVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {currentProducts.map((product) => (
          <motion.div key={product.id} variants={cardVariants}>
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
    </AnimatePresence>
  );
};

export default ProductGrid;
