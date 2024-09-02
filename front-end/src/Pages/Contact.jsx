import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import chef from '../Assests/chef.png';
import chef2 from '../Assests/chef2.png';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-white w-full py-[5rem]'>
          <img className='w-[350px] mx-auto my-4 hover:scale-105 duration-300' src={chef} alt="Chef" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#f09c20] font-3xl font-bold py-1'>CONTACT US</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1 mb-2'>Get in Touch with ABC Restaurant</h1>
            <p>We'd love to hear from you! Whether you have a question about our menu, reservations, or anything else, our team is ready to answer all your questions.</p>
            <div className='flex flex-col md:flex-row mt-4'>
              <button className='text-white bg-[#f09c20] w-[200px] rounded-md font-medium my-2 md:my-0 mx-auto md:mr-3 py-3 hover:scale-105 duration-300'>Reserve a Table</button>
              <button className='text-white bg-[#5ba834] w-[200px] rounded-md font-medium my-2 md:my-0 mx-auto md:ml-3 py-3 hover:scale-105 duration-300'>Order Online</button>
            </div>
          </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-white w-full py-[2rem]  '>
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold py-1 mb-2'>Our Location</h2>
            <p>123 Main Street, Anytown, USA</p>
            <h2 className='text-3xl font-bold py-1 mb-2 mt-4'>Contact Information</h2>
            <p>Email: info@abcrestaurant.com</p>
            <p>Phone: (123) 456-7890</p>
            <h2 className='text-3xl font-bold py-1 mb-2 mt-4'>Opening Hours</h2>
            <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
          </div>
          <img className='w-[400px] h-full object-cover rounded-md mt-4 md:mt-0' src={chef2} alt="ABC Restaurant" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
