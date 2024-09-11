import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Both email and password are required.');  
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password
      });

      if (response.data) {
        // Assuming response.data contains user information
        const user = response.data;
        
        // Store user data in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user));

        navigate('/'); // Navigate to the dashboard after successful login
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid email or password.');
      } else if (err.response && err.response.status === 500) {
        setError('Server error. Please try again later.');
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-white h-full'>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10 rounded-3xl border-2 border-gray-200 shadow'>
          <h1 className='text-5xl font-semibold text-center'>Welcome Back</h1>
          <p className='font-medium text-lg text-gray-500 mt-4 text-center'>
            Welcome back! Please enter your sign-in details.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className='mt-8'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input 
                type='email'
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='text-lg font-medium'>Password</label>
              <div className='relative'>
                <input 
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type='button' 
                  onClick={togglePasswordVisibility} 
                  className='absolute inset-y-0 right-4 text-blue-400'>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button 
                type='submit' 
                className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out text-center'
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>

            <div className='mt-8 flex justify-center items-center'>
              <p className='font-medium text-base'>Don't have an account?</p>
              <Link className='text-blue-400 text-base font-medium ml-2' to='/registration'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
