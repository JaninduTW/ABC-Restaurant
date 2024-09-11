import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black'>
      
      {/* Logo and Description */}
      <div className='' >
        <h1 className='w-full text-3xl font-bold text-[#f09c20] m-0'>ABC Restaurant</h1>
        <p className='py-4'>At ABC Restaurant, we are dedicated to offering a culinary experience that delights your taste buds. Whether you're here for a casual meal or a special occasion, we aim to make every visit memorable.</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
          <FaFacebookSquare className='hover:text-[#f09c20]' />
          <FaInstagramSquare className='hover:text-[#f09c20]' />
          <FaTwitterSquare className='hover:text-[#f09c20]' />
          <FaGithubSquare className='hover:text-[#f09c20]' />
          <FaDribbbleSquare className='hover:text-[#f09c20]' />
        </div>
      </div>

      {/* Footer Links */}
      <div className='lg:col-span-2 flex justify-between ml-3 '>
        
        {/* About Us Section */}
        <div className='' >
          <h6 className='font-medium text-gray-400'>About Us</h6>
          <ul>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Our Story</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Chef & Team</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Careers</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Press</li>
          </ul>
        </div>
        
        {/* Services Section */}
        <div>
          <h6 className='font-medium text-gray-400'>Services</h6>
          <ul>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Catering</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Private Events</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Gift Cards</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Reservations</li>
          </ul>
        </div>
        
        {/* Legal Section */}
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Privacy Policy</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Terms of Service</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Cookie Policy</li>
            <li className='py-2 text-sm hover:text-[#f09c20]'>Accessibility</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
