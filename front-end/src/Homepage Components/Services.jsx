import React from 'react'
import chef from '../Assests/chef.png'
import { Link } from 'react-router-dom'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-10 px-4' >
       {/* <div className='text-center' ><p className='text-[#000000] font-bold py-3  text-3xl pb-2 bg-white ' >SERVICES</p></div> */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 ' >
           <img className='w-[350px] mx-auto my-4  hover:scale-105 duration-300 ' src={chef} alt="/" />
            <div className='flex flex-col justify-center' >
               <p className='text-[#f09c20] font-3xl font-bold py-1 ' >OUR SERVICES</p> 
               <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1 mb-2' >Find Out Our Services</h1>
               <p>Always the best things for you!</p>
               <div className='mt-7' ><Link className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium  mx-auto md:mr-3 py-3 px-5 hover:scale-105 duration-300 text-center' to='/reservation' >Reserve a Table</Link>
               <Link className= 'text-white  bg-[#5ba834] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 px-5 hover:scale-105 duration-300  text-center' to='/order' >Order Foods</Link>
               </div>
               
            </div>
        </div>
    </div> 
  )
}

export default Analytics