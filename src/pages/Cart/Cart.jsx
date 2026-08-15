import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <main className="cart-page">

      {/* =====================================================
          EMPTY CART HERO
      ===================================================== */}

      <section className="empty-cart">

        <div className="empty-cart-content">

          <p className="cart-label">
            YOUR SHOPPING CART
          </p>

          <div className="cart-visual">

            <div className="cart-circle">

              <span className="cart-bag">
                🛒
              </span>

            </div>

            <span className="cart-dot cart-dot-one"></span>
            <span className="cart-dot cart-dot-two"></span>
            <span className="cart-dot cart-dot-three"></span>

          </div>


          <h1>
            Your cart is
            <span> waiting for you.</span>
          </h1>


          <p className="cart-message">
            Looks like you haven't added anything to your cart yet.
          </p>


          <p className="cart-subtext">
            Explore our collection and discover products you'll
            love. Your next favorite item could be just one click away.
          </p>


          <div className="cart-actions">

            <Link
              to="/products"
              className="cart-primary-btn"
            >
              Start Shopping
              <span>→</span>
            </Link>

            <Link
              to="/"
              className="cart-secondary-btn"
            >
              Back to Home
            </Link>

          </div>

        </div>


        {/* =====================================================
            SHOPPING BENEFITS
        ===================================================== */}

        <div className="cart-benefits">

          <div className="cart-benefit">

            <span>🚚</span>

            <div>
              <h3>
                Fast Delivery
              </h3>

              <p>
                Quick and reliable delivery
              </p>
            </div>

          </div>


          <div className="cart-benefit">

            <span>🔒</span>

            <div>
              <h3>
                Secure Shopping
              </h3>

              <p>
                Safe and protected checkout
              </p>
            </div>

          </div>


          <div className="cart-benefit">

            <span>↩️</span>

            <div>
              <h3>
                Easy Returns
              </h3>

              <p>
                Simple return experience
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DISCOVER SECTION
      ===================================================== */}

      <section className="cart-discover">

        <div>

          <p className="cart-label">
            STILL LOOKING?
          </p>

          <h2>
            Find something
            <br />
            <span>you'll love.</span>
          </h2>

          <p>
            Browse our latest collection and add your favorites
            to your shopping cart.
          </p>

          <Link
            to="/products"
            className="cart-discover-btn"
          >
            Explore Collection →
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Cart;