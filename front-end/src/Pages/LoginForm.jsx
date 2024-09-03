import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='bg-white h-full '>
    <div className='flex w-full h-screen justify-center items-center  '>   
    <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10  mt- rounded-3xl border-2 border-gray-200 shadow '>
      <h1 className='text-5xl font-semibold text-center '>Welcome Back</h1>
      <p className='font-medium text-lg text-gray-500 mt-4 text-center '>Welcome back! Please Enter Your Sign-in details.</p>
      <div className='mt-8'>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input 
            type='email'
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Email'
            name='email'
           />
        </div>
        <div>
          <label className='text-lg font-medium'>Password</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password'
           />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type="checkbox" name="" id="showPassword" />
            <label for="showPassword" className='ml-2 font-medium text-base'>Show Password</label>
          </div>
          <button className='ml-2 font-medium text-base text-blue-400'>Forgot password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <Link className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out  text-center ' to='/' >Sign-in</Link>
          {/* <button className='flex items-center justify-center gap-2 active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out'>
            Sign-in with Google</button> */}
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
          <Link className='text-blue-400 text-base font-medium ml-2' to='/registration'   >Sign up</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LoginForm