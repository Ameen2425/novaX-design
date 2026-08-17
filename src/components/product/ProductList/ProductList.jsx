import { useEffect, useMemo, useState } from "react";
import Loader from "../../common/Loader/Loader";
import axios from "axios";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductGrid from "../ProductGrid/ProductGrid";

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
    return products.slice(start, end);
  }, [products, page]);

  const viewBtn = useMemo(() => {
    return Math.ceil(products.length / productsPerPage);
  }, [products]);

  return (
    <div className="products-page">
      <div className="products-header">
        <span>THE NOVAX COLLECTION</span>

        <h1>Explore All Products</h1>

        <p>
          Discover our curated collection of premium products, apparel, and essentials.
        </p>
      </div>

      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        setPage={setPage}
        categoryList={categoryList}
      />

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
            <ProductGrid
              currentProducts={currentProducts}
              category={category}
              search={search}
              page={page}
            />

            {viewBtn > 1 && (
              <div className="pagination">
                {Array.from({ length: viewBtn }, (_, i) => i + 1).map((btn) => (
                  <button
                    key={btn}
                    className={page === btn ? "active" : ""}
                    onClick={() => {
                      setPage(btn);
                      window.scrollTo({
                        top: 150,
                        behavior: "smooth",
                      });
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;