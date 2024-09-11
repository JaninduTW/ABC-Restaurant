import React from 'react'

const AskQuestion = () => {
  return (
    <div className='w-full py-16 text-white px-4 mt-7'>
      <div className='mx-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 m-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Have a question about our restaurant?
          </h1>
          <p>Submit your questions and we'll get back to you as soon as possible.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input 
              className='p-3 flex w-full rounded-md text-black' 
              type="text" 
              placeholder='Enter Your Name' 
            />
            <input 
              className='p-3 flex w-full rounded-md text-black mt-4 sm:mt-0 sm:ml-4' 
              type="email" 
              placeholder='Enter Your Email' 
            />
          </div>
          <textarea 
            className='p-3 flex w-full rounded-md text-black my-6' 
            rows="4" 
            placeholder='Enter Your Question'></textarea>
          <button className='bg-[#f09c20] w-[200px] rounded-md font-medium px-6 py-3 text-black hover:scale-105 duration-300'>
            Submit Question
          </button>
          <p className='mt-4'>
            We value your privacy. Read our <span className='text-[#f09c20]'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AskQuestion
