import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./SingleProduct.css";

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

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        setSelectedImage(data.thumbnail);
      } catch (error) {
        console.error("Failed to load product details:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  /* =====================================================
     QUANTITY
  ===================================================== */
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  /* =====================================================
     ADD TO CART
  ===================================================== */
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  /* =====================================================
     BUY NOW
  ===================================================== */
  const buyNow = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          ...product,
          quantity: quantity,
        },
      ])
    );
    navigate("/cart");
  };

  /* =====================================================
     LOADING
  ===================================================== */
  if (loading) {
    return (
      <main className="single-loading">
        <div className="single-loading-spinner"></div>
        <p>Loading product...</p>
      </main>
    );
  }

  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */
  if (!product.id) {
    return (
      <main className="single-not-found">
        <h1>Product Not Found</h1>
        <p>We couldn't find the product you're looking for.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/products")}
        >
          Browse Products →
        </motion.button>
      </main>
    );
  }

  const discount = Math.round(product.discountPercentage || 0);
  const originalPrice = Math.round(
    product.price + (product.price * discount) / 100
  );

  return (
    <motion.main
      className="single-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* =================================================
          BREADCRUMB
      ================================================= */}
      <motion.div
        className="single-breadcrumb"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span onClick={() => navigate("/")}>Home</span>
        <b>/</b>
        <span onClick={() => navigate("/products")}>Products</span>
        <b>/</b>
        <span>{product.title}</span>
      </motion.div>

      {/* =================================================
          MAIN PRODUCT
      ================================================= */}
      <section className="single-product">
        {/* =================================================
            LEFT — IMAGE
        ================================================= */}
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

        {/* =================================================
            RIGHT — PRODUCT INFORMATION
        ================================================= */}
        <motion.div
          className="single-info"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.span className="single-category" variants={fadeInUp}>
            {product.category}
          </motion.span>

          <motion.h1 variants={fadeInUp}>{product.title}</motion.h1>

          {/* RATING */}
          <motion.div className="single-rating" variants={fadeInUp}>
            <span>★★★★★</span>
            <strong>{product.rating?.toFixed(1)}</strong>
            <p>Customer Rating</p>
          </motion.div>

          <div className="single-divider"></div>

          {/* DESCRIPTION */}
          <motion.p className="single-description" variants={fadeInUp}>
            {product.description}
          </motion.p>

          {/* PRICE */}
          <motion.div className="single-price" variants={fadeInUp}>
            <strong>₹{product.price?.toLocaleString("en-IN")}</strong>
            {discount > 0 && (
              <>
                <del>₹{originalPrice.toLocaleString("en-IN")}</del>
                <span>{discount}% OFF</span>
              </>
            )}
          </motion.div>

          {/* STOCK */}
          <motion.div className="single-stock" variants={fadeInUp}>
            <span></span>
            <strong>In Stock</strong>
            <p>{product.stock} items available</p>
          </motion.div>

          {/* PRODUCT INFORMATION */}
          <motion.div className="single-specifications" variants={fadeInUp}>
            <div>
              <span>Brand</span>
              <strong>{product.brand || "NovaX"}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>
                {product.stock > 0 ? "Available" : "Out of Stock"}
              </strong>
            </div>
          </motion.div>

          {/* QUANTITY */}
          <motion.div className="single-quantity-row" variants={fadeInUp}>
            <span>Quantity</span>
            <div className="single-quantity">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={decreaseQuantity}
              >
                −
              </motion.button>
              <strong>{quantity}</strong>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={increaseQuantity}
              >
                +
              </motion.button>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div className="single-actions" variants={fadeInUp}>
            <motion.button
              className="single-cart-button"
              onClick={addToCart}
              disabled={product.stock <= 0}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              🛒 Add to Cart
            </motion.button>

            <motion.button
              className="single-buy-button"
              onClick={buyNow}
              disabled={product.stock <= 0}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Buy Now
              <span>→</span>
            </motion.button>
          </motion.div>

          {/* DELIVERY */}
          <motion.div className="single-services" variants={fadeInUp}>
            <div className="single-service">
              <span>🚚</span>
              <div>
                <strong>Fast Delivery</strong>
                <p>Quick delivery to your doorstep</p>
              </div>
            </div>

            <div className="single-service">
              <span>🔒</span>
              <div>
                <strong>Secure Payment</strong>
                <p>Safe and secure checkout</p>
              </div>
            </div>

            <div className="single-service">
              <span>↩️</span>
              <div>
                <strong>Easy Returns</strong>
                <p>Simple and hassle-free returns</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =================================================
          PRODUCT DETAILS
      ================================================= */}
      <section className="single-details">
        <motion.div
          className="single-details-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span>NOVAX PRODUCT CARE</span>
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
              desc: "Enjoy a simple and secure shopping experience with NovaX."
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
    </motion.main>
  );
};

export default SingleProduct;