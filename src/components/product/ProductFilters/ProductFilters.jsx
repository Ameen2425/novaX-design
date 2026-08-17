import "./ProductFilters.css";

const ProductFilters = ({ search, setSearch, category, setCategory, setPage, categoryList }) => {
  return (
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
