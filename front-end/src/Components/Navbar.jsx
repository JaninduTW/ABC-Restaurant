import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }
  return (
    <div className='fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-10 h '>
            <div className='flex justify-between items-center h-15 max-w-[1240px] mx-auto px-4'>
       <h1 className='w-full text-3xl font-bold text-[#f09c20] m-4 cursor-pointer ' >ABC</h1>
        <ul className='hidden md:flex'>
            <Link className='p-4 cursor-pointer  ' to="/" >Home</Link>  
            <Link className='p-4 cursor-pointer' to="/menu" >Menu</Link>
            {/* <Link className='p-4 cursor-pointer'>Services</Link> */}
            <Link className='p-4 cursor-pointer' to="/reservation" >Reservation</Link>
            <Link className='p-4 cursor-pointer' to="/order" >Order</Link>
            <Link className='p-4 cursor-pointer' to="/contact" >Contact</Link>
            <Link className='p-4 cursor-pointer' to="/gallery" >Gallery</Link>
            <Link className='p-4 cursor-pointer' to="/about" >About</Link>
        </ul>
        <Link className='bg-[#f09c20] w-[200px] rounded-md font-medium text-center my-4 mx-auto py-2 mr-3 text-black hover:scale-105 duration-300 '  to="/loginform" >Login</Link> 
        <div onClick={handleNav} className='block md:hidden' >
            {nav ? < AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%] ' } >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4' >REACT.</h1>
            <ul className='uppercase p-4' >
            <li className='p-4 border-b border-gray-600  '>Home</li>
            <li className='p-4 border-b border-gray-600  '>Menu</li>
            <li className='p-4 border-b border-gray-600  '>Services</li>
            <li className='p-4 border-b border-gray-600  '>Contact</li>
            <li className='p-4   '>About</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar