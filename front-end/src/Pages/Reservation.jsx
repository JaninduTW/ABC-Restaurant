import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Reservation = () => {
  return (
    <div>
      <Navbar />
 
 <div className='' >
      <div className='bg-white min-h-screen '>
        <div className='w-full flex flex-col md:flex-row justify-center items-center pt-12 space-y-10 md:space-y-0 md:space-x-10 px-4 '>

          <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-white px-6 py-8 rounded-3xl border-2 border-gray-200 shadow '>
            <h1 className='text-3xl md:text-4xl font-semibold text-center'>Reserve Your Table</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Enter Your Reservation Details</p>
            <div className='mt-8'>
              <div className='grid grid-cols-1 gap-6'>
                <div>
                  <label className='text-medium font-medium'>Date:</label>
                  <input
                    type='date'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='date'
                  />
                </div>
                <div>
                  <label className='text-medium font-medium'>Time:</label>
                  <input
                    type='time'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='time'
                  />
                </div>
                <div>
                  <label className='text-medium font-medium'>Location:</label>
                  <input
                    type='text'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='location'
                  />
                </div>
              </div>
              <div className='mt-8'>
                <button className='bg-[#f09c20] w-full text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>Check</button>
              </div>
            </div>
          </div>

          <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-white px-6 py-8 rounded-3xl border-2 border-gray-200 shadow  '>
            <h1 className='text-3xl md:text-4xl font-semibold text-center'>Reserve Your Table</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'>No. of Available Seats:</p> 
            <div className='mt-8'>
              <div className='grid grid-cols-1 gap-6'>
                <div>
                  <label className='text-medium font-medium'>Reservation Name:</label>
                  <input
                    type='text'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='reservationName'
                  />
                </div>
                <div>
                  <label className='text-medium font-medium'>No. of Seats You Want:</label>
                  <input
                    type='number'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='seats'
                  />
                </div>
                <div>
                  <label className='text-medium font-medium'>Contact:</label>
                  <input
                    type='text'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='contact'
                  />
                </div>
                <div>
                  <label className='text-medium font-medium'>Notes:</label>
                  <input
                    type='text'
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    name='notes'
                  />
                </div>
              </div>
              <div className='mt-8'>
                <button className='bg-[#f09c20] w-full text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>Reserve</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

      <Footer />
      
    </div>
  );
}

export default Reservation;
