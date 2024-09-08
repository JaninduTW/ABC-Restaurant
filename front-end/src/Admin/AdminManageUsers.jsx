import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AdminManageUsers = () => {

   const [users, setUsers] = useState([]);
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

   return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <div>
        <h1 className='text-center text-2xl font-bold text-[#f09c20] mb-4'>USER MANAGEMENT</h1>
      </div>
      <div className='flex justify-end mb-4'>
        <Link className='outline outline-[#f09c20] text-[#f09c20] hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded' to="/adminaddusers">Add New User</Link>  
      </div>
      <div className="overflow-x-auto shadow-xl">
        <table className="min-w-full bg-white shadow rounded-lg border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Email</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Firstname</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Lastname</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Password</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Role</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                  <td className="px-4 py-2 text-gray-700 text-center font-bold">{user.id}</td>
                  <td className="px-4 py-2 text-gray-700 text-center">{user.email}</td>
                  <td className="px-4 py-2 text-gray-700 text-center">{user.firstName}</td>
                  <td className="px-4 py-2 text-gray-700 text-center">{user.lastName}</td>
                  <td className="px-4 py-2 text-gray-700 text-center">{user.password}</td>
                  <td className="px-4 py-2 text-gray-700 text-center">{user.role}</td>
                  <td className="px-4 py-2 text-gray-700 text-center bg-gray-50">
                    <Link className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-1 px-3 rounded mr-2 text-xs" to={`/admineditusers/${user.id}`}>   
                      Edit
                    </Link>
                    <button className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-1 px-3 rounded text-xs" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
   );
};

export default AdminManageUsers;
