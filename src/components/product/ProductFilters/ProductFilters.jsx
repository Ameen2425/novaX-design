import "./ProductFilters.css";

const ProductFilters = ({ search, setSearch, category, setCategory, setPage, categoryList }) => {
  return (
    <div className="products-filter">
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
          placeholder="SEARCH AMEZA COLLECTION..."
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

      <select
        className="products-category-select"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setSearch("");
          setPage(1);
        }}
      >
        <option value="">ALL CATEGORIES</option>
        {categoryList.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilters;
