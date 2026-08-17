import { motion, AnimatePresence } from "framer-motion";
import "./ProductGallery.css";

const ProductGallery = ({ product, selectedImage, setSelectedImage, discount }) => {
  return (
    <motion.div
      className="single-gallery"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="single-main-image">
        {discount > 0 && (
          <span className="single-discount">{discount}% OFF</span>
        )}

        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={product.title}
            initial={{ opacity: 0.4, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
          />
        </AnimatePresence>
      </div>

      {/* THUMBNAILS */}
      <div className="single-thumbnails">
        {product.images?.map((image, index) => (
          <motion.button
            key={index}
            className={
              selectedImage === image
                ? "single-thumbnail active"
                : "single-thumbnail"
            }
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <img src={image} alt={`${product.title} ${index + 1}`} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGallery;
