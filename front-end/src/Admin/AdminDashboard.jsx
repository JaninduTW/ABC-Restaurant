import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <header className='bg-[#ffffff] text-white py-6'>
        <div className='max-w-[1240px] mx-auto '  >
          <h1 className='text-4xl font-bold text-center text-[#f09c20] '>ABC ADMIN DASHBOARD</h1>
        </div>
      </header>

      <main className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12 px-4  '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link to='/admin/reservations' className='bg-white rounded-lg p-6 shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Reservations</h2>
              <p className='text-[#f09c20]'>View and manage all customer reservations.</p>
            </Link>
            <Link to='/admin/queries' className='bg-[#f09c20] rounded-lg p-6  shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-white mb-4'>Customer Queries</h2>
              <p className='text-gray-50'>Respond to customer queries and requests.</p>
            </Link>
            <Link to='/admin/orders' className='bg-white rounded-lg p-6 shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Orders</h2>
              <p className='text-[#f09c20]'>View and manage all customer online orders.</p>
            </Link>
            <Link to='/admin/users' className='bg-[#f09c20] rounded-lg p-6  shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-white mb-4'>User Management</h2>
              <p className='text-gray-50'>Manage customer and staff accounts.</p>
            </Link>
            <Link to='/admin/content' className='bg-white rounded-lg p-6 shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Content Management</h2>
              <p className='text-[#f09c20]'>Update menu items, promotions, and gallery.</p>
            </Link>
            <Link to='/admin/reports' className='bg-[#f09c20] rounded-lg p-6 shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-white mb-4'>Reports</h2>
              <p className='text-gray-50'>Generate reports on user activity and finances.</p>
            </Link>
            <Link to='/admin/settings' className='bg-white rounded-lg p-6 shadow-2xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300  '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>System Settings</h2>
              <p className='text-[#f09c20]'>Configure system-wide settings and preferences.</p>
            </Link>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default AdminDashboard;
