import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col  '>
      <div className=' ' >
      <header className='bg-[#ffffff] text-white py-8'>
        <div className='max-w-[1240px] mx-auto '  >
          <h1 className='text-4xl font-bold text-center text-[#f09c20] '>ABC ADMIN DASHBOARD</h1>
        </div>
      </header>

      <main className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12 px-4  '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            <Link to='/admin/reservations' className='bg-white outline outline-[#f09c20] rounded-lg p-6  hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Reservations</h2>
              <p className='text-black font-medium '>View and manage all customer reservations.</p>
            </Link>
            <Link to='/admin/queries' className='bg-white outline outline-[#f09c20] rounded-lg p-6   hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Customer Queries</h2>
              <p className='text-black font-medium'>Respond to customer queries and requests.</p>
            </Link>
            <Link to='/admin/orders' className='bg-white outline outline-[#f09c20] rounded-lg p-6 - hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Orders</h2>
              <p className='text-black font-medium'>View and manage all customer online orders.</p>
            </Link>
            <Link to='/adminmanageusers' className='bg-white outline outline-[#f09c20] rounded-lg p-6  hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>User Management</h2>
              <p className='text-black font-medium'>Manage customer and staff accounts.</p>
            </Link>
            <Link to='/admin/content' className='bg-white outline outline-[#f09c20] rounded-lg p-6  hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Content Management</h2>
              <p className='text-black font-medium '>Update menu items, promotions, and gallery.</p>
            </Link>
            <Link to='/admin/reports' className='bg-white outline outline-[#f09c20] rounded-lg p-6  hover:shadow-lg transform hover:scale-105 transition-transform duration-300  border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>Reports</h2>
              <p className='text-black font-medium'>Generate reports on user activity and finances.</p>
            </Link>
            <Link to='/admin/settings' className='bg-white outline outline-[#f09c20] rounded-lg p-6  hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border '>
              <h2 className='text-2xl font-semibold text-[#f09c20] mb-4'>System Settings</h2>
              <p className='text-black font-medium'>Configure system-wide settings and preferences.</p>
            </Link>
          </div>
        </div>
      </main>
      </div>
     
    </div>
  );
};

export default AdminDashboard;
