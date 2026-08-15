import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./Users.css"
const Users = () => {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  })

  useEffect(() => {
    async function usersApi() {
      let { data } = await axios.get("https://dummyjson.com/users")
      setUsers(data.users)
    }

    usersApi()
  }, [])

  const filterUsers = useMemo(() => {
    return users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, users])


  const editUser = useCallback((u) => {
    setEditData({
      id: u.id,
      name: u.firstName,
      email: u.email,
      age: u.age,
    })
  }, [])


  const handleEditData = useCallback((e) => {
    let { name, value } = e.target

    setEditData((prev) => {
      return { ...prev, [name]: value }
    })
  }, [])


  const updateEditedUser = useCallback(async () => {

    await axios.put(
      `https://dummyjson.com/users/${editData.id}`,
      {
        firstName: editData.name,
        email: editData.email,
        age: Number(editData.age),
      }
    )

    setUsers((prev) =>
      prev.map((i) =>
        i.id === editData.id
          ? {
              ...i,
              firstName: editData.name,
              email: editData.email,
              age: Number(editData.age),
            }: i
      )
    )
  }, [editData])


  const deleteUser = useCallback(async (e) => {
    await axios.delete(`https://dummyjson.com/users/${e}`)
    setUsers((prev) =>
      prev.filter((i) => i.id !== e)
    )
  }, [])


  return (
    <>
      <div className="users-page">
        <input
          type="text"
          placeholder="Search For Users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              filterUsers.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>

                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => editUser(user)}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#editUser"
                        aria-controls="editUser">
                        Edit
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="editUser"
          aria-labelledby="editUserLabel">

          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="editUserLabel">
              Edit User
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close">
            </button>
          </div>


          <div className="offcanvas-body">
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={editData.name}
                onChange={handleEditData}/>
            </div>


            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={editData.email}
                onChange={handleEditData}/>
            </div>


            <div className="mb-3">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={editData.age}
                onChange={handleEditData}/>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-dismiss="offcanvas"
              onClick={updateEditedUser}>
              Update User
            </button>

          </div>

        </div>

      </div>
    </>
  )
}
export default Users