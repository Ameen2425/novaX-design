import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductCard from "../ProductCard/ProductCard";
import productsHeroImg from "../../../assets/novax-products-hero.jpg";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const productsPerPage = 12;

  // =========================
  // Get Categories
  // =========================
  useEffect(() => {
    let isMounted = true;
    async function apiData() {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/category-list"
        );
        if (isMounted) setCategoryList(data || []);
      } catch (err) {
        console.error("Failed to load category list:", err);
      }
    }

    apiData();
    return () => {
      isMounted = false;
    };
  }, []);

  // =========================
  // Get Products
  // =========================
  useEffect(() => {
    let isMounted = true;
    async function productsApi() {
      setLoading(true);

      let api;
      if (category) {
        api = `https://dummyjson.com/products/category/${category}`;
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`;
      } else {
        api = "https://dummyjson.com/products?limit=100";
      }

      try {
        const { data } = await axios.get(api);
        if (isMounted) {
          setProducts(data.products || []);
          setPage(1);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        if (isMounted) setLoading(false);
      }
    }

    productsApi();
    return () => {
      isMounted = false;
    };
  }, [category, search]);

  // =========================
  // Sorting Pipeline
  // =========================
  const sortedProducts = useMemo(() => {
    let list = [...products];

    switch (sortBy) {
      case "price-low":
        return list.sort((a, b) => a.price - b.price);
      case "price-high":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest":
        return list.sort((a, b) => b.id - a.id);
      case "featured":
      default:
        return list;
    }
  }, [products, sortBy]);

  // =========================
  // Pagination Calculations
  // =========================
  const currentProducts = useMemo(() => {
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    return sortedProducts.slice(start, end);
  }, [sortedProducts, page]);

  const totalPages = useMemo(() => {
    return Math.ceil(sortedProducts.length / productsPerPage) || 1;
  }, [sortedProducts]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const catalogAnchor = document.getElementById("products-catalog-anchor");
    if (catalogAnchor) {
      catalogAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="products-page">
      {/* ── 1. EDITORIAL PRODUCT HERO ───────────────────────── */}
      <section className="products-hero-section">
        <div className="products-hero-container">
          <motion.div
            className="products-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="products-hero-badge">THE AMEZA COLLECTION</span>
            <h1 className="products-hero-title">
              Explore <span>All Products.</span>
            </h1>
            <p className="products-hero-desc">
              Discover our curated collection of fine creations, haute perfumery,
              leather goods, architectural decor, and daily luxury essentials.
            </p>

            <div className="products-hero-metrics">
              <div className="hero-metric-item">
                <strong>100+</strong>
                <span>Curated Pieces</span>
              </div>
              <div className="metric-sep" />
              <div className="hero-metric-item">
                <strong>100%</strong>
                <span>Verified Provenance</span>
              </div>
              <div className="metric-sep" />
              <div className="hero-metric-item">
                <strong>80+</strong>
                <span>Global Transit</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="products-hero-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="products-hero-image-frame">
              <img
                src={productsHeroImg}
                alt="AMEZA Curated Luxury Still Life"
                className="products-hero-img"
              />
              <div className="products-hero-image-overlay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anchor for smooth pagination scrolling */}
      <div id="products-catalog-anchor" />

      {/* ── 2. SEARCH, SORT & CATEGORY CHIPS TOOLBAR ───────── */}
      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setPage={setPage}
        categoryList={categoryList}
        totalCount={sortedProducts.length}
      />

      {/* ── 3. PRODUCT CATALOG GRID ─────────────────────────── */}
      <div className="products-container">
        {loading ? (
          /* Luxury Pulse Skeletons */
          <div className="products-skeleton-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="product-card-skeleton">
                <div className="skeleton-image-well" />
                <div className="skeleton-line category" />
                <div className="skeleton-line title" />
                <div className="skeleton-line text" />
                <div className="skeleton-line price" />
                <div className="skeleton-button" />
              </div>
            ))}
          </div>
        ) : sortedProducts.length === 0 ? (
          /* Editorial Empty State */
          <motion.div
            className="products-empty"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="empty-icon">✦</span>
            <h2>No Pieces Found</h2>
            <p>
              We couldn't find any creations matching your search or active category.
              Try adjusting your query or resetting filters.
            </p>
            <button
              type="button"
              className="btn-clear-empty"
              onClick={() => {
                setSearch("");
                setCategory("");
                setSortBy("featured");
                setPage(1);
              }}
            >
              Reset All Filters
            </button>
          </motion.div>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${search}-${sortBy}-${page}`}
                className="products-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.thumbnail}
                    category={product.category}
                    rating={product.rating}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* ── 4. PAGINATION ───────────────────────────────── */}
            {totalPages > 1 && (
              <div className="products-pagination-wrap">
                <button
                  type="button"
                  className="pagination-arrow-btn"
                  onClick={() => handlePageChange(Math.max(1, page - 1))}
                  disabled={page === 1}
                  aria-label="Previous Page"
                >
                  ← Previous
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((btn) => (
                    <button
                      key={btn}
                      type="button"
                      className={`pagination-num-btn ${page === btn ? "active" : ""}`}
                      onClick={() => handlePageChange(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="pagination-arrow-btn"
                  onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  aria-label="Next Page"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── 5. PREMIUM BRAND PLEDGE STATEMENT ───────────────── */}
      <section className="products-brand-pledge">
        <div className="pledge-content">
          <span className="pledge-tag">THE AMEZA PROMISE</span>
          <h3>Atelier Authenticity & Uncompromising Craftsmanship</h3>
          <p>
            Every piece in the AMEZA collection is independently verified for provenance,
            material integrity, and flawless condition prior to bespoke velvet archival dispatch.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductList;