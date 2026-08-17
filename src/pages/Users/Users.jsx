import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    async function usersApi() {
      try {
        let { data } = await axios.get("https://dummyjson.com/users");
        setUsers(data.users);
      } catch (error) {
        console.error("Users load error:", error);
      }
    }

    usersApi();
  }, []);

  const filterUsers = useMemo(() => {
    return users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const editUser = useCallback((u) => {
    setEditData({
      id: u.id,
      name: u.firstName,
      email: u.email,
      age: u.age,
    });
  }, []);

  const handleEditData = useCallback((e) => {
    let { name, value } = e.target;

    setEditData((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);

  const updateEditedUser = useCallback(async () => {
    try {
      await axios.put(`https://dummyjson.com/users/${editData.id}`, {
        firstName: editData.name,
        email: editData.email,
        age: Number(editData.age),
      });

      setUsers((prev) =>
        prev.map((i) =>
          i.id === editData.id
            ? {
                ...i,
                firstName: editData.name,
                email: editData.email,
                age: Number(editData.age),
              }
            : i
        )
      );
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  }, [editData]);

  const deleteUser = useCallback(async (e) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${e}`);
      setUsers((prev) => prev.filter((i) => i.id !== e));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  }, []);

  return (
    <motion.div
      className="users-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="users-header">
        <span>MANAGEMENT CONSOLE</span>
        <h1>User Directory</h1>
        <p>Oversee and manage registered user accounts, details, and permissions.</p>
      </div>

      <div className="users-controls">
        <div className="users-search-wrapper">
          <svg className="users-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="text"
            className="users-search-input"
            placeholder="Search users by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="users-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="users-count-badge">
          <span className="count-dot"></span>
          <strong>{filterUsers.length}</strong>
          <span>Users Listed</span>
        </div>
      </div>

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
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#241711", marginBottom: "6px" }}>No Users Found</p>
                    <p style={{ fontFamily: "var(--font-main)", fontSize: "14px", color: "#6D5748", margin: 0 }}>Try adjusting your search query</p>
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

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabIndex="-1"
        id="editUser"
        aria-labelledby="editUserLabel"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-title-wrap">
            <span className="offcanvas-badge">MANAGEMENT CONSOLE</span>
            <h5 className="offcanvas-title" id="editUserLabel">
              Edit User Profile
            </h5>
          </div>

          <button
            type="button"
            className="offcanvas-close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editData.name}
              onChange={handleEditData}
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={editData.email}
              onChange={handleEditData}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={editData.age}
              onChange={handleEditData}
              placeholder="Enter age"
            />
          </div>

          <div className="offcanvas-actions">
            <motion.button
              className="btn btn-primary"
              type="button"
              data-bs-dismiss="offcanvas"
              onClick={updateEditedUser}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Update User Profile
            </motion.button>

            <button
              type="button"
              className="btn btn-cancel"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Users;