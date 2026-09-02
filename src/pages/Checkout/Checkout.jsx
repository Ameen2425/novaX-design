import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CLEAR } from "../../Redux/Features/cart/CartSlice";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart || []);
  const savedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [contact, setContact] = useState({
    fullName: savedUser.name || "",
    email: savedUser.email || "",
    phone: savedUser.mobile || "",
  });

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: savedUser.name || "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const shippingCost = deliveryMethod === "express" ? 15.0 : 0.0;
  const discount = 0.0;
  const grandTotal = subtotal + shippingCost - discount;

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3200);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      showError("Your cart is empty. Please add items before checking out.");
      return;
    }

    if (!contact.fullName || !contact.email || !contact.phone) {
      showError("Please complete all contact information fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (!address.street || !address.city || !address.state || !address.postalCode) {
      showError("Please complete all shipping address fields.");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.nameOnCard) {
        showError("Please fill in the demo payment card details.");
        return;
      }
    }

    setIsSubmitting(true);

    const orderId = `AMEZA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1,
        thumbnail: item.thumbnail || (item.images && item.images[0]) || "",
        category: item.category || "Luxury",
      })),
      subtotal: Number(subtotal.toFixed(2)),
      shipping: shippingCost,
      discount: discount,
      total: Number(grandTotal.toFixed(2)),
      customer: { ...contact },
      address: { ...address },
      deliveryMethod: deliveryMethod === "express" ? "Express Courier (1-2 Days)" : "Complimentary Standard Delivery (3-5 Days)",
      paymentMethod: paymentMethod === "card" ? "Credit / Debit Card (Demo)" : "Cash on Delivery",
      status: "Order Placed",
    };

    const existingOrders = JSON.parse(localStorage.getItem("ameza_orders")) || [];
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem("ameza_orders", JSON.stringify(updatedOrders));

    // Save latest placed order reference
    localStorage.setItem("ameza_latest_order", JSON.stringify(newOrder));

    // Clear Redux Cart & LocalStorage
    dispatch(CLEAR());

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/order-success", { state: { orderId: newOrder.id, order: newOrder } });
    }, 600);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page-root">
        <div className="checkout-empty-container">
          <span className="checkout-empty-icon">✦</span>
          <h2>Your bag is empty</h2>
          <p>You cannot proceed to checkout without luxury items in your shopping bag.</p>
          <Link to="/products" className="checkout-return-btn">
            Explore AMEZA Catalog →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page-root">
      {/* ── TOAST NOTIFICATION ── */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="checkout-toast-error"
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.3 }}
          >
            <span className="toast-icon">✦</span>
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="checkout-container">
        {/* Editorial Header */}
        <div className="checkout-header">
          <span className="checkout-eyebrow">AMEZA DIGITAL ATELIER</span>
          <h1 className="checkout-title">Secure Checkout</h1>
          <p className="checkout-subtitle">
            Provide your dispatch credentials and review your curated selection before final confirmation.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="checkout-layout-grid" noValidate>
          {/* ── LEFT COLUMN: INPUT FORMS ── */}
          <div className="checkout-forms-column">
            {/* Section A: Contact Information */}
            <div className="checkout-section-card">
              <div className="checkout-section-header">
                <span className="section-number">01</span>
                <h3>Contact Information</h3>
              </div>
              <div className="form-grid-2">
                <div className="form-group full-width">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={contact.fullName}
                    onChange={handleContactChange}
                    placeholder="e.g. Lady Genevieve Vance"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    placeholder="genevieve@atelier.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleContactChange}
                    placeholder="+1 (555) 019-2834"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section B: Shipping Address */}
            <div className="checkout-section-card">
              <div className="checkout-section-header">
                <span className="section-number">02</span>
                <h3>Shipping & Dispatch Address</h3>
              </div>
              <div className="form-grid-2">
                <div className="form-group full-width">
                  <label htmlFor="street">Street Address *</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleAddressChange}
                    placeholder="e.g. 742 Evergreen Terrace, Suite 4B"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    placeholder="New York"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State / Province *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    placeholder="NY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    placeholder="10001"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={address.country}
                    onChange={handleAddressChange}
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Japan">Japan</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section C: Delivery Method */}
            <div className="checkout-section-card">
              <div className="checkout-section-header">
                <span className="section-number">03</span>
                <h3>Delivery Method</h3>
              </div>
              <div className="delivery-options-group">
                <label
                  className={`delivery-option-card ${deliveryMethod === "standard" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={deliveryMethod === "standard"}
                    onChange={() => setDeliveryMethod("standard")}
                  />
                  <div className="option-info">
                    <strong>Complimentary Standard Delivery</strong>
                    <span>Archival Velvet packaging • 3 to 5 business days</span>
                  </div>
                  <span className="option-price">FREE</span>
                </label>

                <label
                  className={`delivery-option-card ${deliveryMethod === "express" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={deliveryMethod === "express"}
                    onChange={() => setDeliveryMethod("express")}
                  />
                  <div className="option-info">
                    <strong>Express White-Glove Courier</strong>
                    <span>Priority insured dispatch • 1 to 2 business days</span>
                  </div>
                  <span className="option-price">$15.00</span>
                </label>
              </div>
            </div>

            {/* Section D: Payment Method */}
            <div className="checkout-section-card">
              <div className="checkout-section-header">
                <span className="section-number">04</span>
                <h3>Payment Method</h3>
              </div>
              <div className="payment-options-group">
                <label
                  className={`payment-option-tab ${paymentMethod === "card" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <span>Credit / Debit Card (Demo)</span>
                </label>

                <label
                  className={`payment-option-tab ${paymentMethod === "cod" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="card-fields-wrapper">
                  <div className="demo-payment-alert">
                    <span>✦</span>
                    <small>Demo Mode: No real financial transaction is conducted. Enter simulated card data.</small>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group full-width">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="•••• •••• •••• 4242"
                        maxLength={19}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="nameOnCard">Name on Card</label>
                      <input
                        type="text"
                        id="nameOnCard"
                        name="nameOnCard"
                        value={cardDetails.nameOnCard}
                        onChange={handleCardChange}
                        placeholder="e.g. Genevieve Vance"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="expiry">Expiration Date</label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        placeholder="MM / YY"
                        maxLength={5}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">Security Code (CVV)</label>
                      <input
                        type="password"
                        id="cvv"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        placeholder="•••"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: ORDER SUMMARY ── */}
          <div className="checkout-summary-column">
            <div className="checkout-summary-sticky-card">
              <h3 className="summary-card-title">Order Summary</h3>

              {/* Items List Preview */}
              <div className="summary-items-preview">
                {cartItems.map((item) => (
                  <div key={item.id} className="preview-item-row">
                    <div className="preview-item-img-box">
                      <img
                        src={item.thumbnail || (item.images && item.images[0]) || ""}
                        alt={item.title}
                        className="preview-item-img"
                      />
                      <span className="preview-item-qty">{item.quantity}</span>
                    </div>
                    <div className="preview-item-details">
                      <strong className="preview-title" title={item.title}>
                        {item.title}
                      </strong>
                      <span className="preview-category">
                        {item.category ? item.category.replace(/-/g, " ") : "Luxury"}
                      </span>
                    </div>
                    <div className="preview-item-price">
                      ${((Number(item.price) || 0) * (Number(item.quantity) || 1)).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-pricing-breakdown">
                <div className="pricing-row">
                  <span>Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
                <div className="pricing-row">
                  <span>Estimated Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                {discount > 0 && (
                  <div className="pricing-row discount">
                    <span>Atelier Privilege Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="pricing-divider" />
                <div className="pricing-row total-row">
                  <span>Grand Total</span>
                  <strong>${grandTotal.toFixed(2)}</strong>
                </div>
              </div>

              <button
                type="submit"
                className="btn-place-order"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Confirming Atelier Order..." : "Place Order →"}
              </button>

              <div className="checkout-security-guarantee">
                <div className="sec-item">
                  <span>🔒</span>
                  <small>256-Bit SSL Encrypted & Protected</small>
                </div>
                <div className="sec-item">
                  <span>✦</span>
                  <small>Verified Atelier Provenance & Insured Delivery</small>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
