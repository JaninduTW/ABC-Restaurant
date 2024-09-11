import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the user is logged in by checking sessionStorage
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  // Handle logout logic
  const handleLogout = () => {
    sessionStorage.removeItem('user'); // Clear the user from session storage
    setIsLoggedIn(false); // Set logged-in state to false
    navigate('/'); // Redirect to signin page
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 h-15 transition-all duration-300 ease-in-out ${
        scrolling ? 'bg-black bg-opacity-50 backdrop-blur-lg' : 'bg-black bg-opacity-100'
      } text-white`}
    >
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        <Link className='w-full text-3xl font-bold text-[#f09c20] m-4 cursor-pointer' to='/'>
          ABC
        </Link>
        <ul className='hidden md:flex'>
          <Link className='p-4 cursor-pointer' to='/'>
            Home
          </Link>
          <Link className='p-4 cursor-pointer' to='/menu'>
            Menu
          </Link>
          <Link className='p-4 cursor-pointer' to='/reservation'>
            Reservation
          </Link>
          <Link className='p-4 cursor-pointer' to='/order'>  
            Order
          </Link>
          <Link className='p-4 cursor-pointer' to='/contact'>
            Contact
          </Link>
          <Link className='p-4 cursor-pointer' to='/gallery'>
            Gallery
          </Link>
          <Link className='p-4 cursor-pointer' to='/about'>
            About
          </Link>
        </ul>
        
        {/* Conditionally render based on login status */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="flex items-center bg-[#f09c20] text-black px-4 py-2 rounded-md hover:scale-105 duration-300"
            >
              <AiOutlineUser size={24} className="mr-2" />
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            className='bg-[#f09c20] w-[200px] rounded-md font-medium text-center my-4 mx-auto py-2 mr-3 text-black hover:scale-105 duration-300'
            to='/loginform'
          >
            Login
          </Link>
        )}
        
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
            REACT.
          </h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Menu</li>
            <li className='p-4 border-b border-gray-600'>Services</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            <li className='p-4'>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
