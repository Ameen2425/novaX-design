import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Features/cart/CartSlice";
import "./SingleProduct.css";

import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import ProductDetails from "../../components/product/ProductDetails/ProductDetails";
import RelatedProducts from "../../components/product/RelatedProducts/RelatedProducts";
import TrustBar from "../../components/product/TrustBar/TrustBar";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      if (res && res.data) {
        const data = res.data;
        const img = data.api_featured_image
          ? (data.api_featured_image.startsWith("//") ? "https:" + data.api_featured_image : data.api_featured_image)
          : (data.image_link || data.thumbnail || "");
        
        const cleanDesc = data.description
          ? data.description.replace(/<[^>]*>?/gm, "").trim()
          : "Premium beauty product curated by AMEZA.";

        const normalizedProduct = {
          ...data,
          title: data.name || data.title || "Beauty Product",
          thumbnail: img,
          images: [img],
          category: data.product_type || data.category || "Beauty",
          rating: data.rating ? parseFloat(data.rating) : 4.8,
          price: parseFloat(data.price) > 0 ? parseFloat(data.price) : 24.0,
          description: cleanDesc,
          stock: "Available",
          brand: data.brand ? data.brand.charAt(0).toUpperCase() + data.brand.slice(1) : "AMEZA Atelier",
        };

        setProduct(normalizedProduct);
        setSelectedImage(img);
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
    dispatch(
      ADD({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        category: product.category,
      })
    );
    showToast(`✓ "${product.title}" added to your cart!`);
  };

  /* =====================================================
     BUY NOW
  ===================================================== */
  const buyNow = () => {
    dispatch(
      ADD({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        category: product.category,
      })
    );
    navigate("/cart");
  };

  /* =====================================================
     LOADING STATE
  ===================================================== */
  if (loading) {
    return (
      <main className="pine-single-loading">
        <div className="pine-loading-spinner" />
        <p>Curating luxury product editorial...</p>
      </main>
    );
  }

  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */
  if (!product.id) {
    return (
      <main className="pine-single-not-found">
        <h1>Product Not Found</h1>
        <p>The requested bespoke piece is currently unavailable in the atelier catalog.</p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
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
    <div className="pine-single-page-root">
      {/* ── TOAST NOTIFICATION ── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="pine-toast-notification"
            initial={{ opacity: 0, y: -24, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -24, x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="pine-toast-icon">✦</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="pine-single-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* =================================================
            1. BREADCRUMB
        ================================================= */}
        <motion.nav
          className="pine-breadcrumb"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Breadcrumb"
        >
          <span onClick={() => navigate("/")}>Home</span>
          <b className="pine-breadcrumb-sep">/</b>
          <span onClick={() => navigate("/products")}>Products</span>
          <b className="pine-breadcrumb-sep">/</b>
          <span className="pine-breadcrumb-current">{product.title}</span>
        </motion.nav>

        {/* =================================================
            2. PRODUCT SHOWCASE (2-COLUMN EDITORIAL)
        ================================================= */}
        <section className="pine-product-showcase">
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
            3. PRODUCT DETAILS & CARE
        ================================================= */}
        <ProductDetails product={product} />

        {/* =================================================
            4. YOU MAY ALSO LIKE (RELATED PRODUCTS)
        ================================================= */}
        <RelatedProducts
          currentCategory={product.product_type || product.category}
          currentId={product.id}
          onToast={showToast}
        />

        {/* =================================================
            5. TRUST & CONCIERGE BAR
        ================================================= */}
        <TrustBar />
      </motion.main>
    </div>
  );
};

export default SingleProduct;