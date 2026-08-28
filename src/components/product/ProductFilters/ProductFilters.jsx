import React from "react";
import "./ProductFilters.css";

const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
  setPage,
  categoryList = [],
  totalCount,
}) => {
  // Curated category chips for instant luxury discovery
  const popularChips = [
    { label: "All Creations", value: "" },
    { label: "Haute Perfumery", value: "fragrances" },
    { label: "Beauty & Cosmetics", value: "beauty" },
    { label: "Botanical Skincare", value: "skin-care" },
    { label: "Women's Watches", value: "womens-watches" },
    { label: "Men's Watches", value: "mens-watches" },
    { label: "Fine Jewellery", value: "womens-jewellery" },
    { label: "Atelier Bags", value: "womens-bags" },
    { label: "Designer Eyewear", value: "sunglasses" },
    { label: "Haute Couture", value: "womens-dresses" },
    { label: "Luxury Footwear", value: "womens-shoes" },
  ];

  return (
    <div className="products-filter-container">
      {/* ── TOOLBAR: SEARCH & SORT ──────────────────────────── */}
      <div className="products-toolbar">
        {/* Search Bar */}
        <div className="products-search-wrapper">
          <svg
            className="products-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="search"
            className="products-search-input"
            placeholder="Search luxury fragrances, watches, jewellery, bags, skincare, eyewear..."
            value={search}
            onChange={(e) => {
              setCategory("");
              setSearch(e.target.value);
              setPage(1);
            }}
          />

          {search && (
            <button
              type="button"
              className="products-search-clear"
              onClick={() => {
                setSearch("");
                setPage(1);
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results Counter & Sort */}
        <div className="products-toolbar-right">
          {totalCount !== undefined && (
            <span className="products-count-label">
              Showing <strong>{totalCount}</strong> luxury creations
            </span>
          )}

          {/* Sort Dropdown */}
          <div className="products-sort-wrapper">
            <span className="sort-prefix">Sort by:</span>
            <select
              className="products-sort-select"
              value={sortBy || "featured"}
              onChange={(e) => {
                setSortBy(e.target.value);
                setPage(1);
              }}
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Formulations</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── CATEGORY FILTER CHIPS STRIP ─────────────────────── */}
      <div className="category-chips-strip">
        <div className="chips-scroll-container">
          {popularChips.map((chip) => {
            const isChipActive = category === chip.value;
            return (
              <button
                key={chip.value}
                type="button"
                className={`category-chip ${isChipActive ? "active" : ""}`}
                onClick={() => {
                  setCategory(chip.value);
                  setSearch("");
                  setPage(1);
                }}
              >
                {chip.label}
              </button>
            );
          })}

          {/* Extended dropdown selector for all 100+ categories */}
          {categoryList.length > 0 && (
            <div className="category-select-pill-wrap">
              <select
                className="category-dropdown-pill"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSearch("");
                  setPage(1);
                }}
              >
                <option value="">More Categories...</option>
                {categoryList.map((cat) => {
                  const val = typeof cat === "object" ? cat.slug || cat.name : cat;
                  const label = typeof cat === "object" ? cat.name || cat.slug : cat;
                  return (
                    <option key={val} value={val}>
                      {String(label).replace(/-/g, " ").toUpperCase()}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
