import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {

    let navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    role: "",
  });


   
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    address: "",
    role: "",
  });

  const { email, firstName, lastName, password, address, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Sending newUser:", newUser); // Debugging: log the newUser data
    try {
      await axios.post("http://localhost:8080/user", newUser); // Make POST request
      setShowModal(false); // Close modal after successful submission
      loadUsers(); // Reload users list
      resetForm(); // Reset form fields
    } catch (error) {
      console.error("Error adding user:", error); // Log error if something goes wrong
    }
  };

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Sending newUser:", newUser); // Debugging: log the newUser data
    try {
      await axios.post("http://localhost:8080/user", newUser); // Make POST request
      setShowModal(false); // Close modal after successful submission
      loadUsers(); // Reload users list
      resetForm(); // Reset form fields
    } catch (error) {
      console.error("Error adding user:", error); // Log error if something goes wrong
    }
  };
  

  const resetForm = () => {
    setNewUser({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      role: "",
    });
  };

  const handleCancel = () => {
    resetForm(); // Reset the form when canceling
    setShowModal(false); // Close the modal
  };

  return (
    <div className="container mx-auto bg-white h-lvh p-8">
      <div className="py-4">
        <div className="mb-4">
          <button
            className="bg-[#f09c20] text-white px-4 py-2 rounded-md hover:bg-[#f09c20] transition duration-200"
            onClick={() => setShowModal(true)}
          >
            Add New User
          </button>
        </div>
        <table className="min-w-full table-auto bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-gray-600">ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-gray-600">First Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Last Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Password</th>
              <th className="px-4 py-2 text-left text-gray-600">Address</th>
              <th className="px-4 py-2 text-left text-gray-600">Role</th>
              <th className="px-4 py-2 text-center text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="px-4 py-2">{user.address}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 text-center">
                  <Link
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600 transition duration-200"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="bg-green-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-green-600 transition duration-200"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-red-600 transition duration-200"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
            <h2 className="text-xl mb-4">Add New User</h2>
            <form >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border p-2"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border p-2"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border p-2"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
              <select
                name="role"
                className="border p-2"
                value={role}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Select Role</option>
                <option value="ADMIN">ADMIN</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="STAFF">STAFF</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}
