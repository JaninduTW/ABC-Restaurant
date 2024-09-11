import React from 'react'
import { ReactTyped } from "react-typed";
import burger from '../Assests/burger.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  
        <div className='text-white  max-w-[1240px] mx-auto grid md:grid-cols-2 mt-[4rem] ' >  
           <div className='  max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>  
               {/* <p className='text-[#f09c20] font-bold  p-2 ' >GROWING WITH DATA ANALYTICS</p> */}
               <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-1 mt-8 ' >A TASTE YOU'LL REMEMBER.</h1> 
               <div className='flex justify-center items-center '>
                 <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 mt-1 ' >Delicious, Tasty Foods From </p> 
                 <ReactTyped className='md:text-3xl sm:text-3xl text-xl font-bold md:pl-2 pl-2 text-[#f09c20]  mt-2 ' strings = {['ABC', 'RESTAURANT']} typeSpeed={80} backSpeed={80} loop />
               </div>
               <p className='md:text-2xl text-xl font-bold text-gray-500' >Welcome to ABC Restaurant, where great flavors and a cozy atmosphere create a memorable dining experience. 
                Discover our diverse menu and enjoy culinary excellence today!</p>
               <Link className='bg-[#5ba835] w-[200px] rounded-md font-large my-6 mx-auto py-3 text-white  font-bold hover:scale-105 duration-300'  to='/menu' >Browse Menu</Link>
               
           </div > 
           <img  className='w-[500px] mx-auto mt-[5rem] hover:scale-105 duration-300  py-7  ' src={burger} alt="burger"  /> 
        </div>   
        
  )
}

export default Hero