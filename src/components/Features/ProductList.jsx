import { useEffect, useMemo, useState } from "react";
import Loader from "../Loader/Loader";
import Cards from "../Cards/Cards";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const productsPerPage = 10;

  // =========================
  // Get Categories
  // =========================
  useEffect(() => {
    async function apiData() {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/category-list"
        );

        setCategoryList(data);
      } catch (error) {
        console.log("Category Error:", error);
      }
    }

    apiData();
  }, []);

  // =========================
  // Get Products
  // =========================
  useEffect(() => {
    async function productsApi() {
      try {
        setLoading(true);

        let api;

        if (category) {
          api = `https://dummyjson.com/products/category/${category}`;
        } else if (search) {
          api = `https://dummyjson.com/products/search?q=${search}`;
        } else {
          api = "https://dummyjson.com/products?limit=100";
        }

        const { data } = await axios.get(api);

        const allProducts = data.products || [];

        setProducts(allProducts);
        setPage(1);
      } catch (error) {
        console.log("Products Error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    productsApi();
  }, [category, search]);

  const currentProducts = useMemo(() => {
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    return products.slice(start, end);}, [products, page]);

  const viewBtn = useMemo(() => {
  return Math.ceil(products.length / productsPerPage);}, [products]);


const gridVariants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

  return (
    <>
    <div className="products-page">

      <div className="products-header">
        <span>THE NOVAX COLLECTION</span>

        <h1>
          Explore All Products
        </h1>

        <p>
          Discover our curated collection of premium products, apparel, and essentials.
        </p>
      </div>

      <div className="products-filter">

        <input
          type="search"
          placeholder="SEARCH NOVAX COLLECTION..."
          value={search}
          onChange={(e) => {
            setCategory("");
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearch("");
            setPage(1);
          }}
        >
          <option value="">
            ALL CATEGORIES
          </option>

          {
          categoryList.map((category) => (
            <option
              key={category}
              value={category}>
              {category.toUpperCase()}
            </option>
          ))
          }
        </select>
      </div>


      <div className="products-container">

        {loading ? (
          <Loader />
        ) : products.length === 0 ? (
          <div className="products-empty">
            <h2>No Products Found</h2>
            <p>We couldn't find any products matching your current search or category filter.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setPage(1);
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>    
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${search}-${page}`}
                className="products-grid"
                variants={gridVariants}
                initial="hidden"
                animate="show"
                exit="exit">

                {
                currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}>
                    <Cards
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.thumbnail}
                      category={product.category}
                      rating={product.rating}
                    />
                  </motion.div>
                ))
                }
              </motion.div>
            </AnimatePresence>

            {viewBtn > 1 && (
              <div className="pagination">

                {Array.from({ length: viewBtn },(_, i) => i + 1).map((btn) => (

                  <button
                    key={btn}
                    className={page === btn ? "active" : ""}
                    onClick={() => {
                      setPage(btn)
                      window.scrollTo({
                        top: 150,
                        behavior: "smooth",
                      })
                    }}>
                    {btn}
                  </button>

                ))}

              </div>
            )}

          </>
        )}

      </div>
    </div>
    </>
  )
}

export default ProductList;