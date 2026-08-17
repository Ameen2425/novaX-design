import { motion } from "framer-motion";
import "./UserEditOffcanvas.css";

const UserEditOffcanvas = ({ editData, handleEditData, updateEditedUser }) => {
  return (
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
  );
};

export default UserEditOffcanvas;
