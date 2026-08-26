import { motion, AnimatePresence } from "framer-motion";
import "./UsersTable.css";

const UsersTable = ({ filterUsers, editUser, deleteUser }) => {
  return (
    <div className="users-page-table-wrap">
      {/* ── DESKTOP & TABLET TABLE VIEW (STAYS UNCHANGED ON DESKTOP) ── */}
      <div className="desktop-users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Edit Profile</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <AnimatePresence>
              {filterUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "54px 20px" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--ameza-ruby, #E11D48)", marginBottom: "8px" }}>No Users Found</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ameza-text-secondary)", margin: 0 }}>Try adjusting your search query</p>
                  </td>
                </tr>
              ) : (
                filterUsers.map((user, idx) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                  >
                    <td className="user-id-cell">#{user.id}</td>
                    <td>
                      <div className="user-name-cell">
                        <div className="user-avatar-badge">
                          {user.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
                        </div>
                        <span className="user-name-text">{user.firstName}</span>
                      </div>
                    </td>
                    <td className="user-email-cell">{user.email}</td>
                    <td className="user-age-cell">
                      <span className="age-pill">{user.age} yrs</span>
                    </td>

                    <td>
                      <motion.button
                        className="btn btn-warning"
                        onClick={() => editUser(user)}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#editUser"
                        aria-controls="editUser"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ✏️ Edit Profile
                      </motion.button>
                    </td>

                    <td>
                      <motion.button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🗑️ Delete
                      </motion.button>
                    </td>
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* ── MOBILE ONLY CARD VIEW (< 768px: ZERO HORIZONTAL SCROLL) ── */}
      <div className="mobile-users-cards">
        <AnimatePresence>
          {filterUsers.length === 0 ? (
            <div className="mobile-empty-users">
              <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--ameza-ruby, #E11D48)", marginBottom: "6px" }}>No Users Found</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--ameza-text-secondary)", margin: 0 }}>Try adjusting your search query</p>
            </div>
          ) : (
            filterUsers.map((user, idx) => (
              <motion.div
                key={`mobile-user-${user.id}`}
                className="mobile-user-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.2) }}
              >
                <div className="mobile-user-card-top">
                  <div className="mobile-user-info-left">
                    <div className="user-avatar-badge">
                      {user.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                      <div className="mobile-user-name">{user.firstName}</div>
                      <div className="mobile-user-id">#{user.id}</div>
                    </div>
                  </div>
                  <span className="age-pill">{user.age} yrs</span>
                </div>

                <div className="mobile-user-email-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--ameza-ruby, #E11D48)", flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="mobile-user-email-text">{user.email}</span>
                </div>

                <div className="mobile-user-actions-row">
                  <motion.button
                    className="btn btn-warning mobile-user-btn"
                    onClick={() => editUser(user)}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#editUser"
                    aria-controls="editUser"
                    whileTap={{ scale: 0.96 }}
                  >
                    ✏️ Edit Profile
                  </motion.button>

                  <motion.button
                    className="btn btn-danger mobile-user-btn"
                    onClick={() => deleteUser(user.id)}
                    whileTap={{ scale: 0.96 }}
                  >
                    🗑️ Delete
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UsersTable;
