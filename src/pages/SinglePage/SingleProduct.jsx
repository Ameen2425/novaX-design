import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Features/cart/CartSlice";
import "./SingleProduct.css";

import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import ProductCareSection from "../../components/product/ProductCareSection/ProductCareSection";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      if (res && res.data) {
        setProduct(res.data);
        setSelectedImage(res.data.thumbnail || res.data.images?.[0] || "");
      }
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  /* =====================================================
     ADD TO CART
  ===================================================== */
  const addToCart = () => {
    dispatch(ADD(product));
    showToast(`✓ "${product.title}" added to your cart!`);
  };

  /* =====================================================
     BUY NOW
  ===================================================== */
  const buyNow = () => {
    dispatch(ADD(product));
    navigate("/cart");
  };

  /* =====================================================
     LOADING
  ===================================================== */
  if (loading) {
    return (
      <main className="single-loading">
        <div className="single-loading-spinner"></div>
        <p>Loading luxury product details...</p>
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
          Browse AMEZA Collection →
        </motion.button>
      </main>
    );
  }

  const discount = Math.round(product.discountPercentage || 0);
  const originalPrice = Math.round(
    product.price + (product.price * discount) / 100
  );

  return (
    <>
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="single-toast-notification"
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.3 }}
          >
            <span className="toast-icon">✦</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

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
          <ProductGallery
            product={product}
            selectedImage={selectedImage || product.thumbnail || product.images?.[0]}
            setSelectedImage={setSelectedImage}
            discount={discount}
          />

          <ProductInfo
            product={product}
            discount={discount}
            originalPrice={originalPrice}
            addToCart={addToCart}
            buyNow={buyNow}
          />
        </section>

        {/* =================================================
            PRODUCT DETAILS & CARE
        ================================================= */}
        <ProductCareSection />
      </motion.main>
    </>
  );
};

export default SingleProduct;