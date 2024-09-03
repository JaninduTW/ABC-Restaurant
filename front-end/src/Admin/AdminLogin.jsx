import React from 'react' 
import { Link } from 'react-router-dom'     

const LoginForm = () => {
  return (
    <div className='bg-gray-50 h-full'>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-full lg:w-2/5 bg-white px-10 py-12 rounded-3xl border-2 border-gray-200 shadow-lg'>
          <h1 className='text-4xl font-bold text-center text-[#f09c20]'>ABC Restaurant Admin</h1>
          <p className='font-medium text-lg text-gray-600 mt-4 text-center'> 
            Sign in to manage your restaurant's operations 
          </p>
          <div className='mt-8'>  
            <div>
              <label className='text-lg font-medium text-gray-500 '>Email</label>  
              <input
                type='email'
                className='w-full   rounded-xl p-4 mt-2 bg-white shadow-2xl' 
                placeholder='Enter your Email '
                name='email'
              />
            </div>
            <div className='mt-4'>
              <label className='text-lg font-medium text-gray-500 '>Password</label>
              <input
                type='password'
                className='w-full  rounded-xl p-4 mt-2 bg-white shadow-2xl' 
                placeholder='Enter your Password'
              />
            </div>
            <div className='mt-8  flex justify-center items-center '>
              <Link
                className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl text-center w-full transition-transform transform hover:scale-105  ' to='/admindashboard'
                             >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginForm