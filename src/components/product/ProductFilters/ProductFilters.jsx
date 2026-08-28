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
  // Curated beauty category chips for instant luxury discovery
  const popularChips = [
    { label: "All Creations", value: "" },
    { label: "Makeup", value: "makeup" },
    { label: "Lipstick", value: "lipstick" },
    { label: "Foundation", value: "foundation" },
    { label: "Eyeshadow", value: "eyeshadow" },
    { label: "Mascara", value: "mascara" },
    { label: "Eyeliner", value: "eyeliner" },
    { label: "Blush", value: "blush" },
    { label: "Bronzer", value: "bronzer" },
    { label: "Nail Polish", value: "nail_polish" },
    { label: "Skincare", value: "skincare" },
    { label: "Fragrance", value: "fragrance" },
    { label: "Haircare", value: "haircare" },
    { label: "Accessories", value: "beauty_accessories" },
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
            placeholder="Search luxury lipstick, mascara, serum, perfume, eyeliner, blush..."
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
              Showing <strong>{totalCount}</strong> beauty formulations
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

          {/* Extended dropdown selector for beauty categories if any additional exist */}
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
                  const val = typeof cat === "object" ? cat.value : cat;
                  const label = typeof cat === "object" ? cat.label : cat;
                  return (
                    <option key={val} value={val}>
                      {String(label).replace(/_/g, " ").toUpperCase()}
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
