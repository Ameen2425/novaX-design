import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [orders, setOrders] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("ameza_orders")) || [];
    setOrders(savedOrders);

    const savedWishlist = JSON.parse(localStorage.getItem("ameza_wishlist")) || [];
    setWishlistCount(savedWishlist.length);
  }, []);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!editForm.name || !editForm.email) {
      setToastMessage("Name and Email are required");
      setTimeout(() => setToastMessage(""), 2800);
      return;
    }

    const updatedUser = {
      ...(user || {}),
      name: editForm.name,
      email: editForm.email,
      mobile: editForm.mobile,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    setToastMessage("✓ Profile credentials updated successfully");
    setTimeout(() => setToastMessage(""), 2800);
  };

  const handleLogout = () => {
    // Keep user registered in localStorage or clear session
    setToastMessage("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 600);
  };

  return (
    <div className="account-page-root">
      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="account-toast"
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.3 }}
          >
            <span className="toast-icon">✦</span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="account-container">
        {/* Editorial Header */}
        <div className="account-header">
          <div className="account-header-info">
            <span className="account-eyebrow">CLIENT DOSSIER</span>
            <h1 className="account-title">My Account</h1>
            <p className="account-subtitle">
              Welcome back, {user?.name || "Client"}. Manage your profile credentials, orders, and curated wishlist.
            </p>
          </div>

          <button
            type="button"
            className="btn-logout-header"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>

        <div className="account-grid">
          {/* ── LEFT: PROFILE CARD ── */}
          <div className="account-profile-card">
            <div className="profile-card-top">
              <div className="profile-avatar">
                {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
              </div>
              <div className="profile-headings">
                <h3>{user?.name || "AMEZA Client"}</h3>
                <span className="member-tier">Privilege Atelier Member</span>
              </div>
            </div>

            {!isEditing ? (
              <div className="profile-credentials-view">
                <div className="cred-row">
                  <span className="cred-label">FULL NAME</span>
                  <p className="cred-val">{user?.name || "Not specified"}</p>
                </div>
                <div className="cred-row">
                  <span className="cred-label">EMAIL ADDRESS</span>
                  <p className="cred-val">{user?.email || "Not specified"}</p>
                </div>
                <div className="cred-row">
                  <span className="cred-label">CONTACT PHONE</span>
                  <p className="cred-val">{user?.mobile || "+1 (555) 019-2834"}</p>
                </div>

                <div className="profile-actions-strip">
                  <button
                    type="button"
                    className="btn-edit-profile"
                    onClick={() => {
                      setEditForm({
                        name: user?.name || "",
                        email: user?.email || "",
                        mobile: user?.mobile || "",
                      });
                      setIsEditing(true);
                    }}
                  >
                    Edit Profile Credentials
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveProfile} className="profile-edit-form">
                <div className="form-group">
                  <label htmlFor="acc-name">Full Name</label>
                  <input
                    type="text"
                    id="acc-name"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="acc-email">Email Address</label>
                  <input
                    type="email"
                    id="acc-email"
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="acc-mobile">Phone Number</label>
                  <input
                    type="text"
                    id="acc-mobile"
                    name="mobile"
                    value={editForm.mobile}
                    onChange={handleEditChange}
                  />
                </div>

                <div className="edit-form-buttons">
                  <button type="submit" className="btn-save-cred">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn-cancel-cred"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ── RIGHT: DASHBOARD HUBS ── */}
          <div className="account-hubs-column">
            {/* Orders Hub */}
            <div className="account-hub-card">
              <div className="hub-header">
                <div>
                  <span className="hub-tag">DISPATCH ARCHIVES</span>
                  <h4>Orders History</h4>
                </div>
                <span className="hub-badge">{orders.length} Placed</span>
              </div>
              <p className="hub-desc">
                {orders.length > 0
                  ? `You have ${orders.length} recorded order${orders.length > 1 ? "s" : ""} in the atelier dispatch registry.`
                  : "You haven't placed any orders yet."}
              </p>
              <div className="hub-footer">
                <Link to="/orders" className="btn-hub-link">
                  View All Orders →
                </Link>
              </div>
            </div>

            {/* Wishlist Hub */}
            <div className="account-hub-card">
              <div className="hub-header">
                <div>
                  <span className="hub-tag">SAVED TREASURES</span>
                  <h4>My Wishlist</h4>
                </div>
                <span className="hub-badge">{wishlistCount} Saved</span>
              </div>
              <p className="hub-desc">
                {wishlistCount > 0
                  ? `You have ${wishlistCount} luxury piece${wishlistCount > 1 ? "s" : ""} bookmarked in your personal collection.`
                  : "Your wishlist is currently waiting for something beautiful."}
              </p>
              <div className="hub-footer">
                <Link to="/wishlist" className="btn-hub-link">
                  Explore Wishlist →
                </Link>
              </div>
            </div>

            {/* Settings Hub */}
            <div className="account-hub-card">
              <div className="hub-header">
                <div>
                  <span className="hub-tag">CLIENT PREFERENCES</span>
                  <h4>Settings & Privacy</h4>
                </div>
                <span className="hub-badge">Active</span>
              </div>
              <p className="hub-desc">
                Configure concierge notifications, security options, and personalized display settings.
              </p>
              <div className="hub-footer">
                <Link to="/settings" className="btn-hub-link">
                  Manage Settings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
