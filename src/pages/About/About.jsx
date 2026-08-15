import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-label">
            THE NOVAX STORY
          </p>

          <h1>
            Shopping should feel
            <span> effortless.</span>
          </h1>

          <p className="about-hero-description">
            NovaX brings quality products, thoughtful design, and a smoother
            online shopping experience together in one place.
          </p>

          <div className="about-hero-actions">

            <Link
              to="/products"
              className="about-primary-btn"
            >
              Explore Products
              <span>→</span>
            </Link>

            <a
              href="#our-story"
              className="about-secondary-btn"
            >
              Our Story
            </a>

          </div>

        </div>


        <div className="about-hero-visual">

          <div className="about-hero-image">

            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="NovaX shopping experience"
            />

          </div>

          <div className="about-floating-card">

            <span>✦</span>

            <div>
              <strong>NovaX</strong>
              <p>Made for modern shoppers</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="about-stat">
          <strong>500+</strong>
          <span>Products</span>
        </div>

        <div className="about-stat">
          <strong>10K+</strong>
          <span>Customers</span>
        </div>

        <div className="about-stat">
          <strong>50+</strong>
          <span>Brands</span>
        </div>

        <div className="about-stat">
          <strong>4.9</strong>
          <span>Customer Rating</span>
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        className="about-story"
        id="our-story"
      >

        <div className="about-section-label">
          <span>01</span>
          OUR STORY
        </div>


        <div className="about-story-grid">

          <div className="about-story-heading">

            <h2>
              Built around the
              <em> joy of discovering.</em>
            </h2>

          </div>


          <div className="about-story-content">

            <p className="about-lead">
              NovaX started with a simple idea: online shopping doesn't need
              to be complicated.
            </p>

            <p>
              We wanted to create a place where discovering products feels
              natural, browsing feels effortless, and every interaction feels
              thoughtfully designed.
            </p>

            <p>
              From everyday essentials to products worth discovering, NovaX
              brings everything together through a clean and convenient
              shopping experience.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values">

        <div className="about-section-heading">

          <p className="about-label">
            WHAT DRIVES US
          </p>

          <h2>
            Simple principles.
            <br />
            Better experiences.
          </h2>

          <p>
            Everything we build is guided by a few things that matter most.
          </p>

        </div>


        <div className="about-values-grid">

          <article className="about-value-card">

            <div className="about-value-number">
              01
            </div>

            <h3>
              Quality First
            </h3>

            <p>
              We believe great shopping starts with products that offer real
              value, quality, and usefulness.
            </p>

          </article>


          <article className="about-value-card">

            <div className="about-value-number">
              02
            </div>

            <h3>
              Keep It Simple
            </h3>

            <p>
              From discovering products to completing an order, we keep the
              experience clear and easy to understand.
            </p>

          </article>


          <article className="about-value-card">

            <div className="about-value-number">
              03
            </div>

            <h3>
              Customer First
            </h3>

            <p>
              Every decision starts with one question: does this make the
              customer's experience better?
            </p>

          </article>


          <article className="about-value-card">

            <div className="about-value-number">
              04
            </div>

            <h3>
              Always Improving
            </h3>

            <p>
              We continue learning, improving, and creating better ways to
              make online shopping enjoyable.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="about-features-section">

        <div className="about-section-heading">

          <p className="about-label">
            WHY NOVAX
          </p>

          <h2>
            Everything you need.
          </h2>

        </div>


        <div className="about-feature-list">

          <div className="about-feature-item">

            <span className="about-feat-num">01</span>

            <div>
              <h3>Fast Delivery</h3>
              <p>
                Quick and reliable delivery for your orders.
              </p>
            </div>

          </div>


          <div className="about-feature-item">

            <span className="about-feat-num">02</span>

            <div>
              <h3>Secure Payments</h3>
              <p>
                Safe and trusted payment experience.
              </p>
            </div>

          </div>


          <div className="about-feature-item">

            <span className="about-feat-num">03</span>

            <div>
              <h3>Easy Returns</h3>
              <p>
                A simple return experience when you need it.
              </p>
            </div>

          </div>


          <div className="about-feature-item">

            <span className="about-feat-num">04</span>

            <div>
              <h3>Customer Support</h3>
              <p>
                We're here whenever you need assistance.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final">

        <p className="about-label">
          WELCOME TO NOVAX
        </p>

        <h2>
          Your next favorite
          <br />
          <span>find is waiting.</span>
        </h2>

        <p>
          Take a look around and discover what's waiting for you.
        </p>

        <Link
          to="/products"
          className="about-primary-btn"
        >
          Shop NovaX
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default About;