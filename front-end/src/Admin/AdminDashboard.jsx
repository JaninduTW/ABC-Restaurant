import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      {/* Header */}
      <header className='bg-white py-8 shadow-md'>
        <div className='max-w-[1240px] mx-auto'>
          <h1 className='text-4xl font-bold text-center text-[#f09c20]'>
            ABC ADMIN DASHBOARD
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12 px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* User Management */}
            <Link
              to='/adminmanageusers'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                User Management
              </h2>
              <p className='text-gray-600 font-medium'>
                Manage customer and staff accounts.
              </p>
            </Link>

            {/* Menu Management */}
            <Link
              to='/adminmanagemenu'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                Menu Management
              </h2>
              <p className='text-gray-600 font-medium'>
                Update menu items.
              </p>
            </Link>

            {/* Orders */}
            <Link
              to='/admin/orders'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                Orders
              </h2>
              <p className='text-gray-600 font-medium'>
                View and manage all customer online orders.
              </p>
            </Link>

            {/* Table Management */}
            <Link
              to='/adminmanagetables'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                Table Management
              </h2>
              <p className='text-gray-600 font-medium'>
                Manage tables.
              </p>
            </Link>

            {/* Reservations */}
            <Link
              to='/Adminmanagereservation'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                Reservations
              </h2>
              <p className='text-gray-600 font-medium'>
                View and manage all customer reservations.
              </p>
            </Link>

            {/* Customer Queries */}
            <Link
              to='/admin/queries'
              className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-[#f09c20]'
            >
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>
                Customer Queries
              </h2>
              <p className='text-gray-600 font-medium'>
                Respond to customer queries and requests.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-white py-6 mt-4 shadow-md'>
        <div className='max-w-[1240px] mx-auto text-center text-gray-500'>
          © 2024 ABC Restaurant Admin Dashboard. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
