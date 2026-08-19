import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./Users.css";

import UsersHeader from "../../components/users/UsersHeader/UsersHeader";
import UsersTable from "../../components/users/UsersTable/UsersTable";
import UserEditOffcanvas from "../../components/users/UserEditOffcanvas/UserEditOffcanvas";

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
      let { data } = await axios.get("https://dummyjson.com/users");
      setUsers(data.users);
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

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const updateEditedUser = useCallback(async () => {
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
  }, [editData]);

  const deleteUser = useCallback(async (e) => {
    await axios.delete(`https://dummyjson.com/users/${e}`);
    setUsers((prev) => prev.filter((i) => i.id !== e));
  }, []);

  return (
    <motion.div
      className="users-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <UsersHeader
        search={search}
        setSearch={setSearch}
        userCount={filterUsers.length}
      />

      <UsersTable
        filterUsers={filterUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />

      <UserEditOffcanvas
        editData={editData}
        handleEditData={handleEditData}
        updateEditedUser={updateEditedUser}
      />
    </motion.div>
  );
};

export default Users;