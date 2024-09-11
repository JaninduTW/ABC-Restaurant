import React from 'react';
import Navbar from '../Homepage Components/Navbar';
import Footer from '../Homepage Components/Footer';
import g1 from '../Assests/g1.jpg';
import g2 from '../Assests/g2.jpg';
import g3 from '../Assests/g3.png';


const images = [g1, g2, g3];

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className='w-full px-4 bg-gray-50 p-3 '>
        <div className='text-center pt-20'>
          <h1 className='text-4xl font-bold mb-10'>Gallery</h1> 
        </div>

        <div className='max-w-[1240px] mx-auto mb-10 '>
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold text-center mb-6'>KITCHEN</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {images.map((img, index) => (
                <div key={index} className='relative'> 
                  <img
                    className='w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                    src={img}
                    alt={`Gallery ${index + 1}`}
                  />
                  <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white font-bold text-lg'>
                    {`Image ${index + 1}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-12'>
            <h2 className='text-2xl font-semibold text-center mb-6'>INTERIOR</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {images.map((img, index) => (
                <div key={index} className='relative'>
                  <img
                    className='w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                    src={img}
                    alt={`Gallery ${index + 1}`}
                  />
                  <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white font-bold text-lg'>
                    {`Image ${index + 1}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-12'>
            <h2 className='text-2xl font-semibold text-center mb-6'>EXTERIOR</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {images.map((img, index) => (
                <div key={index} className='relative'>
                  <img
                    className='w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                    src={img}
                    alt={`Gallery ${index + 1}`}
                  />
                  <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white font-bold text-lg'>
                    {`Image ${index + 1}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black' ><Footer /></div>
      
    </div>
  );
};

export default Gallery;
