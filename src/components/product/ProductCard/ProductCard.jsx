import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, title, description, price, image, category, rating}) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      cart.push({
        id,
        title,
        description,
        price,
        thumbnail: image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${title} added to cart!`);
  };

  return (
    <Link to={`/products/${id}`} className="product-card">
      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}
      <div className="product-image-container">
        <img
          src={image}
          className="product-image"
          alt={title}
          loading="lazy"
        />

        <span className="product-badge">
          Popular
        </span>

        <span className="product-quick-label">
          NovaX Pick
        </span>
      </div>

      {/* =================================================
          PRODUCT CONTENT
      ================================================= */}
      <div className="product-card-body">
        <span className="product-category">
          {category ? category.toUpperCase() : "NOVAX COLLECTION"}
        </span>

        <h3 className="product-title">
          {title}
        </h3>

        {description && (
          <p className="product-description">
            {description.slice(0, 80)}{description.length > 80 ? "..." : ""}
          </p>
        )}

        {/* RATING */}
        <div className="product-rating">
          <span>
            ★★★★★
          </span>
          <small>
            {rating ? Number(rating).toFixed(1) : "4.5"}
          </small>
          <em>
            Customer Rating
          </em>
        </div>

        {/* PRICE */}
        <div className="product-price-row">
          <div>
            <span className="price-label">
              Starting from
            </span>
            <h4 className="product-price">
              ${price}
            </h4>
          </div>

          <span className="price-offer">
            Best Value
          </span>
        </div>

        {/* SERVICES */}
        <div className="product-services">
          <span>
            🚚 Free Delivery
          </span>
          <span>
            🔒 Secure
          </span>
        </div>

        {/* ADD TO CART */}
        <div className="product-bottom">
          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
