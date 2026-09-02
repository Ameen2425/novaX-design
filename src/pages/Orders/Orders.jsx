import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Orders.css";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ameza_orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div className="orders-page-root">
      <div className="orders-container">
        {/* Editorial Header */}
        <div className="orders-header">
          <span className="orders-eyebrow">CLIENT ARCHIVE</span>
          <h1 className="orders-title">My Orders</h1>
          <p className="orders-subtitle">
            Review your dispatch records, order details, and bespoke atelier creations.
          </p>
        </div>

        {orders.length === 0 ? (
          /* Empty State */
          <motion.div
            className="orders-empty-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="orders-empty-icon">✦</span>
            <h2>No orders yet.</h2>
            <p>You haven't placed any atelier orders yet. Explore our luxury collection to find pieces crafted for you.</p>
            <Link to="/products" className="btn-start-shopping">
              Start Shopping →
            </Link>
          </motion.div>
        ) : (
          /* Orders List */
          <div className="orders-list-grid">
            {orders.map((order, idx) => {
              const formattedDate = order.date
                ? new Date(order.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent";

              const itemsCount = (order.items || []).reduce(
                (sum, item) => sum + (Number(item.quantity) || 1),
                0
              );

              return (
                <motion.div
                  key={order.id || idx}
                  className="order-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div className="order-card-top-bar">
                    <div className="order-id-group">
                      <span className="order-tag">ORDER #{order.id}</span>
                      <span className="order-date-text">Placed {formattedDate}</span>
                    </div>

                    <div className="order-status-pill">
                      <span className="status-dot" />
                      <span>{order.status || "Order Placed"}</span>
                    </div>
                  </div>

                  <div className="order-card-body">
                    {/* Thumbnail Strip */}
                    <div className="order-thumbnails-strip">
                      {(order.items || []).slice(0, 4).map((item, itemIdx) => (
                        <div key={itemIdx} className="order-thumb-box">
                          <img
                            src={item.thumbnail || ""}
                            alt={item.title}
                            className="order-thumb-img"
                          />
                        </div>
                      ))}
                      {(order.items || []).length > 4 && (
                        <div className="order-thumb-more">
                          +{order.items.length - 4}
                        </div>
                      )}
                    </div>

                    {/* Order Metrics */}
                    <div className="order-card-metrics">
                      <div className="metric">
                        <span>Items</span>
                        <strong>{itemsCount} {itemsCount === 1 ? "Piece" : "Pieces"}</strong>
                      </div>
                      <div className="metric">
                        <span>Total Paid</span>
                        <strong className="mono-total">${Number(order.total || 0).toFixed(2)}</strong>
                      </div>
                      <div className="metric">
                        <span>Payment</span>
                        <span>{order.paymentMethod || "Card"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="order-card-footer">
                    <button
                      type="button"
                      className="btn-view-details"
                      onClick={() => navigate(`/orders/${order.id}`)}
                    >
                      View Details →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
