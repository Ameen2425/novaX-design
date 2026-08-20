import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../../common/LazyImage/LazyImage";
import "./ProductCard.css";

const ProductCard = ({ id, title, description, price, image, category, rating }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation angles (max tilt ~12deg)
    const rotateY = ((mouseX / width) - 0.5) * 16;
    const rotateX = ((0.5 - (mouseY / height))) * 16;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`);
    setSheenPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.45,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setSheenPos({ x: 50, y: 50, opacity: 0 });
  };

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
    <div className="product-card-wrapper">
      <Link
        to={`/products/${id}`}
        className="product-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {/* Dynamic Liquid Gold Sheen Reflection */}
        <div
          className="product-card-sheen"
          style={{
            background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(245, 230, 200, 0.35) 0%, rgba(213, 174, 95, 0.12) 35%, transparent 70%)`,
            opacity: sheenPos.opacity,
          }}
        />

        {/* IMAGE CONTAINER WITH 3D DEPTH */}
        <div className="product-image-container">
          <LazyImage
            src={image}
            className="product-image"
            alt={title}
          />

          <span className="product-badge">
            Popular
          </span>

          <span className="product-quick-label">
            AMEZA Pick
          </span>
        </div>

        {/* BODY CONTENT WITH 3D DEPTH */}
        <div className="product-card-body">
          <span className="product-category">
            {category ? category.toUpperCase() : "AMEZA COLLECTION"}
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
    </div>
  );
};

export default ProductCard;
