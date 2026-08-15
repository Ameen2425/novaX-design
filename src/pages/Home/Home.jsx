import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=12"
        );

        setProducts(data.products || []);

      } catch (error) {

        console.error("Failed to load products:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


  return (
    <main className="home-page">


      {/* =====================================================
          2-COLUMN EDITORIAL HERO — CREAM + BROWN LUXURY
      ===================================================== */}

      <section className="cream-hero-section">

        <div className="cream-hero-container">

          <div className="cream-hero-content">

            <p className="cream-hero-label">
              NOVAX / THE EVERYDAY EDIT
            </p>

            <h1 className="serif-title">
              EVERYTHING YOU NEED.
              <br />
              <span className="accent-text">ONE PLACE.</span>
            </h1>

            <p className="cream-hero-description">
              Discover premium products selected for modern everyday living.
            </p>

            <div className="cream-hero-buttons">

              <Link
                to="/products"
                className="btn-terracotta"
              >
                SHOP PRODUCTS →
              </Link>

              <Link
                to="/about"
                className="btn-outline-dark"
              >
                EXPLORE COLLECTION
              </Link>

            </div>

            <div className="cream-hero-trust">

              <span>PREMIUM QUALITY</span>

              <span>•</span>

              <span>FAST DELIVERY</span>

              <span>•</span>

              <span>SECURE PAYMENT</span>

            </div>

          </div>


          <div className="cream-hero-visual">

            <div className="cream-hero-image-frame">

              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                alt="NovaX Editorial Luxury Collection"
              />

              <div className="cream-hero-badge">
                <span>NEW ARRIVALS 2026</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section className="home-categories">

        <div className="home-section-heading">

          <div>

            <p className="home-label">
              SHOP BY CATEGORY
            </p>

            <h2>
              Find what you're looking for
            </h2>

          </div>

          <Link to="/products">
            View All →
          </Link>

        </div>


        <div className="home-category-list">

          <Link
            to="/products"
            className="home-category-item"
          >

            <span className="home-cat-num">01</span>

            <div>

              <h3>
                Electronics
              </h3>

              <p>
                Devices & accessories
              </p>

            </div>

          </Link>


          <Link
            to="/products"
            className="home-category-item"
          >

            <span className="home-cat-num">02</span>

            <div>

              <h3>
                Fashion
              </h3>

              <p>
                Style for everyone
              </p>

            </div>

          </Link>


          <Link
            to="/products"
            className="home-category-item"
          >

            <span className="home-cat-num">03</span>

            <div>

              <h3>
                Beauty
              </h3>

              <p>
                Care & cosmetics
              </p>

            </div>

          </Link>


          <Link
            to="/products"
            className="home-category-item"
          >

            <span className="home-cat-num">04</span>

            <div>

              <h3>
                Home & Living
              </h3>

              <p>
                Make your space better
              </p>

            </div>

          </Link>


          <Link
            to="/products"
            className="home-category-item"
          >

            <span className="home-cat-num">05</span>

            <div>

              <h3>
                Footwear
              </h3>

              <p>
                Everyday essentials
              </p>

            </div>

          </Link>

        </div>

      </section>


      {/* =====================================================
          TRENDING PRODUCTS
      ===================================================== */}

      <section className="home-products">

        <div className="home-section-heading">

          <div>

            <p className="home-label">
              TRENDING NOW
            </p>

            <h2>
              Popular products
            </h2>

          </div>

          <Link to="/products">
            View All Products →
          </Link>

        </div>


        {loading ? (

          <div className="home-products-loading">

            <div className="home-loader"></div>

            <span>
              Loading products...
            </span>

          </div>

        ) : products.length > 0 ? (

          <div className="home-product-grid">

            {products.slice(0, 8).map((product) => (

              <Link
                to={`/products/${product.id}`}
                className="home-product-card"
                key={product.id}
              >

                <div className="home-product-image">

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />

                  <span className="home-product-badge">
                    Popular
                  </span>

                </div>


                <div className="home-product-info">

                  <p className="home-product-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.title}
                  </h3>

                  <div className="home-product-bottom">

                    <strong>
                      ${product.price}
                    </strong>

                    <span>
                      ★ {product.rating}
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="home-products-empty">

            <p>
              Unable to load products.
            </p>

            <Link to="/products">
              Browse Products →
            </Link>

          </div>

        )}

      </section>


      {/* =====================================================
          SPECIAL OFFER
      ===================================================== */}

      <section className="home-offer">

        <div className="home-offer-content">

          <p>
            NOVAX SPECIAL
          </p>

          <h2>
            Better products.
            <br />
            Better prices.
          </h2>

          <span>
            Discover great products at prices you'll love.
            Start exploring our latest collection today.
          </span>

          <Link
            to="/products"
            className="home-shop-btn"
          >
            Explore Deals →
          </Link>

        </div>


        <div className="home-offer-symbol">
          %
        </div>

      </section>


      {/* =====================================================
          WHY NOVAX
      ===================================================== */}

      <section className="home-benefits-section">

        <div className="home-section-heading centered">

          <p className="home-label">
            WHY SHOP WITH US
          </p>

          <h2>
            Shopping without the hassle.
          </h2>

          <p>
            Everything is designed to make your shopping experience easier.
          </p>

        </div>


        <div className="home-benefits">

          <div className="benefit-card">

            <span className="benefit-num">01</span>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Get your orders delivered quickly and reliably.
            </p>

          </div>


          <div className="benefit-card">

            <span className="benefit-num">02</span>

            <h3>
              Secure Checkout
            </h3>

            <p>
              Your shopping experience is designed with security in mind.
            </p>

          </div>


          <div className="benefit-card">

            <span className="benefit-num">03</span>

            <h3>
              Easy Returns
            </h3>

            <p>
              Simple return options when something isn't right.
            </p>

          </div>


          <div className="benefit-card">

            <span className="benefit-num">04</span>

            <h3>
              Customer Support
            </h3>

            <p>
              Get assistance whenever you need it.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SHOPPING EXPERIENCE
      ===================================================== */}

      <section className="home-experience">

        <div className="home-experience-content">

          <p className="home-label">
            THE NOVAX DIFFERENCE
          </p>

          <h2>
            From discovery
            <br />
            to doorstep.
          </h2>

          <p>
            Browse products you love, add them to your cart,
            and enjoy a simple shopping journey from start to finish.
          </p>

          <Link
            to="/products"
            className="home-primary-btn"
          >
            Start Shopping
            <span>→</span>
          </Link>

        </div>


        <div className="home-experience-steps">

          <div>

            <span>
              01
            </span>

            <h3>
              Discover
            </h3>

            <p>
              Explore products and categories.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Choose
            </h3>

            <p>
              Find products that fit your needs.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Enjoy
            </h3>

            <p>
              Get your order delivered to you.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="home-stats-section">

        <div className="home-section-heading centered">

          <p className="home-label">
            NOVAX BY THE NUMBERS
          </p>

          <h2>
            Growing every day.
          </h2>

        </div>


        <div className="home-stats">

          <div className="home-stat">

            <strong>
              10K+
            </strong>

            <span>
              Happy Customers
            </span>

          </div>


          <div className="home-stat">

            <strong>
              500+
            </strong>

            <span>
              Products
            </span>

          </div>


          <div className="home-stat">

            <strong>
              50+
            </strong>

            <span>
              Brands
            </span>

          </div>


          <div className="home-stat">

            <strong>
              4.9★
            </strong>

            <span>
              Customer Rating
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORE
      ===================================================== */}

      <section className="location-section">

        <div className="section-heading">

          <p className="home-label">
            VISIT NOVAX
          </p>

          <h2>
            We'd love to meet you.
          </h2>

          <p>
            Find our store in Hyderabad.
          </p>

        </div>


        <div className="location-container">

          <div className="location-info">

            <span className="location-number">
              NOVAX STORE
            </span>

            <h3>
              Your local shopping destination.
            </h3>

            <p>
              📍 Kukatpally, Hyderabad, Telangana
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ support@novax.com
            </p>

            <p>
              🕒 Monday - Saturday : 9:00 AM - 9:00 PM
            </p>

          </div>


          <div className="location-map">

            <iframe
              title="NovaX Store"
              src="https://www.google.com/maps?q=Kukatpally,Hyderabad&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final">

        <p className="home-label">
          READY TO EXPLORE?
        </p>

        <h2>
          Your next favorite
          <br />
          <span>product is waiting.</span>
        </h2>

        <p>
          Explore the NovaX collection and find something made for you.
        </p>

        <Link
          to="/products"
          className="home-primary-btn"
        >
          Shop NovaX
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Home;