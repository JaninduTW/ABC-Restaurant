import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 ' >
 <div className='mx-w-[1240] mx-auto grid grid lg:grid-cols-3  ' >
      <div className='lg:col-span-2 m-4 ' >
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' >Want tips & tricks to optimize your flow?</h1>
        <p>Sign up to our newsletter and stay up to date</p>
      </div>
      <div className='my-4' >
        <div className='flex flex-col sm:flex-row items-center justify-between w-full' >
         <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
         <button className='bg-[#f09c20] w-[200px] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black hover:scale-105 duration-300 ' >Notify Me</button>
         </div>
         <p>We care about protection of your data. Read our <span className='text-[#f09c20]' >Privacy Policy</span></p>
      </div>
 </div>
    </div>
  )
}

export default Newsletter