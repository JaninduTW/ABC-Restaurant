import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import chef from '../Assests/chef.png'

const Contact = () => {
  return (
    <div className=' ' >
      <Navbar/>
    {/* <div className='text-center' ><p className='text-[#000000] font-bold py-3  text-3xl pb-2 bg-white ' >SERVICES</p></div> */}
    <div className='bg-white' >
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-white w-full py-[5rem] ' >
        <img className='w-[350px] mx-auto my-4  hover:scale-105 duration-300 ' src={chef} alt="/" />
         <div className='flex flex-col justify-center' >
            <p className='text-[#f09c20] font-3xl font-bold py-1 ' >OUR SERVICES</p> 
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1 mb-2' >Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div><button className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium my-4 mx-auto md:mr-3 py-3 hover:scale-105 duration-300 ' >Reserve a Table</button>
            <button className= 'text-white  bg-[#5ba834] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 hover:scale-105 duration-300 ' >Order</button>
            </div>
            
         </div>
     </div>
     </div>
     <Footer/>
 </div>
  )
}

export default Contact