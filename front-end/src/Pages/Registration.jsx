import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    address: '',
    role: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message

  const { email, firstName, lastName, password, address, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/user', user);
      setShowConfirmation(true); // Show confirmation message
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleConfirmationOk = () => {
    setShowConfirmation(false); // Hide confirmation message
    navigate('/loginform'); // Navigate to login page
  };

  return (
    <div className='bg-white h-full'>
      <div className='flex w-full h-auto justify-center items-center'>
        <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10 mt-5 mb-5 rounded-3xl border-2 border-gray-200 shadow'>
          <h1 className='text-5xl font-semibold text-center'>Register Here</h1>
          <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Welcome back! Please Enter Your details.</p>
          <div className='mt-8'>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input
                  type='email'
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Email'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label htmlFor="firstName" className='text-lg font-medium'>Firstname</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your firstname'
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Lastname</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your lastname'
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Password</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Password'
                  type='password'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Address</label>  
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your address'
                  type='text'
                  name='address'
                  value={address}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Role</label>
                <select
                  name="role"
                  className="border p-2 rounded"
                  value={role}
                  onChange={onInputChange}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="CUSTOMER">Customer</option>
                </select>
              </div>
              <div className='mt-8 flex flex-col gap-y-4'>
                <button type="submit" className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out text-center'>Sign-up</button>
              </div>
              <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an Account?</p>
                <Link className='text-blue-400 text-base font-medium ml-2' to='/loginform'>Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation message modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
            <p className="mb-4">Your account has been created successfully. You can now log in.</p>
            <button
              className='bg-[#f09c20] text-white font-bold py-2 px-4 rounded'
              onClick={handleConfirmationOk}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
