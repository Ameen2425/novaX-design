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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <AnimatePresence>
            {filterUsers.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "48px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-primary)", marginBottom: "6px" }}>No Users Found</p>
                  <p style={{ fontFamily: "var(--font-main)", fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>Try adjusting your search query</p>
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
                  <td><strong>#{user.id}</strong></td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>

                  <td>
                    <motion.button
                      className="btn btn-warning"
                      onClick={() => editUser(user)}
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#editUser"
                      aria-controls="editUser"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      ✏️ Edit
                    </motion.button>
                  </td>

                  <td>
                    <motion.button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
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
