import { motion, AnimatePresence } from "framer-motion";
import "./UsersTable.css";

const UsersTable = ({ filterUsers, editUser, deleteUser }) => {
  return (
    <div className="users-page-table-wrap">
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
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--ameza-gold-bright)", marginBottom: "8px" }}>No Users Found</p>
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
  );
};

export default UsersTable;
