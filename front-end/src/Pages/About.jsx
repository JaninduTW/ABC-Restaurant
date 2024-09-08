import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ReactTyped } from "react-typed";
import g1 from '../Assests/g1.jpg';

const About = () => {
  return (
    <div>
      <Navbar/>
      
      {/* Hero Section */}
     

      {/* About Section */}
      <div className='bg-white py-[7rem] px-4  ' >
        <div className='max-w-[1240px] mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8'>Welcome to ABC Restaurant</h2>
          <p className='text-lg font-medium text-gray-700 mb-6'>
            At ABC Restaurant, we pride ourselves on offering a one-of-a-kind dining experience where quality meets passion. Our culinary team brings together fresh, locally sourced ingredients to create dishes that are not only delicious but also artfully presented.
          </p>
          <p className='text-lg font-medium text-gray-700 mb-6'>
            Whether you're in the mood for a comforting classic or an innovative fusion dish, our diverse menu has something to excite every taste bud. From our renowned seafood dishes to mouthwatering steaks and vegetarian delights, there’s always something special to savor.
          </p>
          <p className='text-lg font-medium text-gray-700 mb-6'>
            We believe that great food is meant to be shared, which is why our restaurant has been designed to offer both intimate spaces for couples and larger tables for groups of friends and family. Our warm, inviting atmosphere ensures that every visit feels like a special occasion.
          </p>
          <p className='text-lg font-medium text-gray-700'>
            At ABC Restaurant, it's not just about the food — it's about the experience. Join us for a culinary journey that tantalizes your taste buds and leaves you with memories worth savoring.
          </p>
          <div className='mt-10'>
            <img className='mx-auto w-full max-w-[800px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300' src={g1} alt="Delicious Dish" />
          </div>
        </div>
      </div>
<div className='bg-black' ><Footer /></div>
      
    </div>
  )
}

export default About
