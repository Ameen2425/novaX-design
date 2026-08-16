import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          <div className="footer-brand">
            <Link className="footer-logo" to="/">NovaX</Link>
            <p>Discover better. Shop smarter. Your one-stop destination for premium products and a better everyday experience.</p>
          </div>

          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>📧 support@novax.com</p>
            <p>📞 +91 98765 43210</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 NovaX. All Rights Reserved.</p>
          <p>Made with ❤️ for better shopping</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
