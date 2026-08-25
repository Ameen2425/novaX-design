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
  categoryList,
  totalCount,
}) => {
  // Top curated category pills for instant discovery
  const popularChips = [
    { label: "All Products", value: "" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Beauty", value: "beauty" },
    { label: "Skin Care", value: "skin-care" },
    { label: "Women's Bags", value: "womens-bags" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Home Decor", value: "home-decoration" },
    { label: "Laptops", value: "laptops" },
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
            placeholder="Search creations, perfumes, apparel, technology..."
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
              Showing <strong>{totalCount}</strong> pieces
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
              <option value="newest">Newest Additions</option>
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

          {/* Extended dropdown selector for all 25+ categories */}
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
              {categoryList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.replace(/-/g, " ").toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
