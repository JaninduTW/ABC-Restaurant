import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ReactTyped } from "react-typed";
import Res1 from '../Assests/Res1.png'

const About = () => {
  return (

    <div className='bg-black' >
      <Navbar/>
     

      
      <div className='text-white  max-w-[1240px] mx-auto grid md:grid-cols-1 mt-[4rem] ' >   


       <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30'
                style={{ backgroundImage:` url(${Res1})` }} > 
       </div>

           <div className='  relative max-w-[800px] mt-[-30px] w-full h-screen mx-auto text-center flex flex-col justify-center  '>  
               {/* <p className='text-[#f09c20] font-bold  p-2 ' >GROWING WITH DATA ANALYTICS</p> */}
               <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-1  ' >A TASTE YOU'LL REMEMBER.</h1> 
               <div className='flex justify-center items-center '>
                 <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 mt-1 ' >Delicious, Tasty Foods From </p> 
                 <ReactTyped className='md:text-3xl sm:text-3xl text-xl font-bold md:pl-2 pl-2 text-[#f09c20]  mt-2 ' strings = {['ABC', 'RESTAURANT']} typeSpeed={80} backSpeed={80} loop />
               </div>
               <p className='md:text-lg text-base font-bold text-white' >At ABC Restaurant, we take pride in offering a delightful dining experience that blends exceptional cuisine with a warm and inviting atmosphere. 
                Our menu features a wide range of dishes, carefully crafted using the freshest ingredients to satisfy every palate. Whether you're here for a casual meal with friends or a special occasion, our attentive staff is dedicated to making your visit memorable. 
                Join us at ABC Restaurant, where great food and great company come together.</p>
               {/* <button className='bg-[#5ba835] w-[200px] rounded-md font-large my-6 mx-auto py-3 text-white  font-bold hover:scale-105 duration-300' >Browse Menu</button> */}
           </div> 

           
           {/* <img  className='w-[500px] mx-auto mt-[5rem] hover:scale-105 duration-300 ' src={burger} alt="burger" />  */}
        </div>   
      <Footer />
    </div>
  )
}

export default About