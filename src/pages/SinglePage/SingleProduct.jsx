import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./SingleProduct.css";

const SingleProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");


  useEffect(() => {

    const getProduct = async () => {

      setLoading(true);

      const { data } = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(data);
      setSelectedImage(data.thumbnail);

      setLoading(false);

    };

    getProduct();

  }, [id]);


  /* =====================================================
     QUANTITY
  ===================================================== */

  const increaseQuantity = () => {

    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }

  };


  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  };


  /* =====================================================
     ADD TO CART
  ===================================================== */

  const addToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];


    const existingProduct = cart.find(
      (item) => item.id === product.id
    );


    if (existingProduct) {

      existingProduct.quantity += quantity;

    } else {

      cart.push({
        ...product,
        quantity: quantity,
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product added to cart!");

  };


  /* =====================================================
     BUY NOW
  ===================================================== */

  const buyNow = () => {

    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          ...product,
          quantity: quantity,
        },
      ])
    );

    navigate("/cart");

  };


  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {

    return (

      <main className="single-loading">

        <div className="single-loading-spinner"></div>

        <p>
          Loading product...
        </p>

      </main>

    );

  }


  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */

  if (!product.id) {

    return (

      <main className="single-not-found">

        <h1>
          Product Not Found
        </h1>

        <p>
          We couldn't find the product you're looking for.
        </p>

        <button
          onClick={() => navigate("/products")}
        >
          Browse Products →
        </button>

      </main>

    );

  }


  const discount = Math.round(
    product.discountPercentage || 0
  );


  const originalPrice = Math.round(
    product.price +
    (product.price * discount / 100)
  );


  return (

    <main className="single-page">


      {/* =================================================
          BREADCRUMB
      ================================================= */}

      <div className="single-breadcrumb">

        <span onClick={() => navigate("/")}>
          Home
        </span>

        <b>/</b>

        <span onClick={() => navigate("/products")}>
          Products
        </span>

        <b>/</b>

        <span>
          {product.title}
        </span>

      </div>


      {/* =================================================
          MAIN PRODUCT
      ================================================= */}

      <section className="single-product">


        {/* =================================================
            LEFT — IMAGE
        ================================================= */}

        <div className="single-gallery">


          <div className="single-main-image">

            {discount > 0 && (

              <span className="single-discount">
                {discount}% OFF
              </span>

            )}


            <img
              src={selectedImage}
              alt={product.title}
            />

          </div>


          {/* THUMBNAILS */}

          <div className="single-thumbnails">

            {product.images?.map(
              (image, index) => (

                <button
                  key={index}
                  className={
                    selectedImage === image
                      ? "single-thumbnail active"
                      : "single-thumbnail"
                  }
                  onClick={() => setSelectedImage(image)}
                >

                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                  />

                </button>

              )
            )}

          </div>

        </div>


        {/* =================================================
            RIGHT — PRODUCT INFORMATION
        ================================================= */}

        <div className="single-info">


          <span className="single-category">
            {product.category}
          </span>


          <h1>
            {product.title}
          </h1>


          {/* RATING */}

          <div className="single-rating">

            <span>
              ★★★★★
            </span>

            <strong>
              {product.rating?.toFixed(1)}
            </strong>

            <p>
              Customer Rating
            </p>

          </div>


          <div className="single-divider"></div>


          {/* DESCRIPTION */}

          <p className="single-description">
            {product.description}
          </p>


          {/* PRICE */}

          <div className="single-price">

            <strong>
              ₹{product.price?.toLocaleString("en-IN")}
            </strong>

            {discount > 0 && (

              <>
                <del>
                  ₹{originalPrice.toLocaleString("en-IN")}
                </del>

                <span>
                  {discount}% OFF
                </span>
              </>

            )}

          </div>


          {/* STOCK */}

          <div className="single-stock">

            <span></span>

            <strong>
              In Stock
            </strong>

            <p>
              {product.stock} items available
            </p>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="single-specifications">

            <div>

              <span>
                Brand
              </span>

              <strong>
                {product.brand || "NovaX"}
              </strong>

            </div>


            <div>

              <span>
                Category
              </span>

              <strong>
                {product.category}
              </strong>

            </div>


            <div>

              <span>
                Availability
              </span>

              <strong>
                {product.stock > 0
                  ? "Available"
                  : "Out of Stock"
                }
              </strong>

            </div>

          </div>


          {/* QUANTITY */}

          <div className="single-quantity-row">

            <span>
              Quantity
            </span>

            <div className="single-quantity">

              <button
                onClick={decreaseQuantity}
              >
                −
              </button>

              <strong>
                {quantity}
              </strong>

              <button
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="single-actions">

            <button
              className="single-cart-button"
              onClick={addToCart}
              disabled={product.stock <= 0}
            >
              🛒 Add to Cart
            </button>


            <button
              className="single-buy-button"
              onClick={buyNow}
              disabled={product.stock <= 0}
            >
              Buy Now
              <span>→</span>
            </button>

          </div>


          {/* DELIVERY */}

          <div className="single-services">

            <div className="single-service">

              <span>
                🚚
              </span>

              <div>

                <strong>
                  Fast Delivery
                </strong>

                <p>
                  Quick delivery to your doorstep
                </p>

              </div>

            </div>


            <div className="single-service">

              <span>
                🔒
              </span>

              <div>

                <strong>
                  Secure Payment
                </strong>

                <p>
                  Safe and secure checkout
                </p>

              </div>

            </div>


            <div className="single-service">

              <span>
                ↩️
              </span>

              <div>

                <strong>
                  Easy Returns
                </strong>

                <p>
                  Simple and hassle-free returns
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PRODUCT DETAILS
      ================================================= */}

      <section className="single-details">

        <div className="single-details-heading">

          <span>
            NOVAX PRODUCT CARE
          </span>

          <h2>
            Shop with confidence.
          </h2>

          <p>
            We focus on making every part of your
            shopping experience simple and reliable.
          </p>

        </div>


        <div className="single-details-grid">

          <div>

            <span>
              01
            </span>

            <h3>
              Quality Products
            </h3>

            <p>
              Discover products selected for quality,
              value, and everyday use.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Get your products delivered quickly
              and conveniently.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Secure Shopping
            </h3>

            <p>
              Enjoy a simple and secure shopping
              experience with NovaX.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <h3>
              Customer Support
            </h3>

            <p>
              We're here to help whenever you need
              assistance with your order.
            </p>

          </div>

        </div>

      </section>

    </main>

  );

};

export default SingleProduct;