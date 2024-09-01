import React from 'react'
import laptop from '../Assests/laptop.png'
import chef2 from '../Assests/chef2.png'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 ' >
       <img className='w-[240px] mx-auto my-4  hover:scale-105 duration-300 ' src={chef2} alt="/" />
        <div className='flex flex-col justify-center' >
           <p className='text-[#f09c20] font-bold py-1 ' >ABOUT</p> 
           <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1 mb-2' >Manage Data Analytics Centrally</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
           <div><button className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium my-4 mx-auto md:mr-3 py-3 hover:scale-105 duration-300 ' >See More</button>
           
           </div>
           
        </div>
    </div>
</div> 
  )
}

export default About