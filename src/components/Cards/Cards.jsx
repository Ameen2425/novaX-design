import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({
  id,
  title,
  description,
  price,
  image
}) => {

  return (

    <Link
      to={`/products/${id}`}
      className="product-card"
    >

      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <div className="product-image-container">

        <img
          src={image}
          className="product-image"
          alt={title}
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
          NOVAX COLLECTION
        </span>


        <h3 className="product-title">
          {title}
        </h3>


        <p className="product-description">
          {description.slice(0, 100)}...
        </p>


        {/* RATING */}

        <div className="product-rating">

          <span>
            ★★★★★
          </span>

          <small>
            4.5
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
              ₹{price.toLocaleString("en-IN")}
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
            🔒 Secure Checkout
          </span>

        </div>


        {/* ADD TO CART */}

        <div className="product-bottom">

          <button
            className="add-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </Link>

  );

};

export default Cards;