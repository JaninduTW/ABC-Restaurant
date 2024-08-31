import React from 'react'
import burger from '../Assests/burger.png'

const Menu = () => {
  return (
    <div>
        <div className='w-full px-4 bg-white' >
          <div className='max-w-[1240] mx-auto grid md:grid-cols-4 gap-8'>

           <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
               <img className='w-56 mx-auto mt-[-3rem]' src={burger} alt="burger" />
               <h2 className='text-2xl font-bold text-center mb-2' >Burger</h2>
               <p className='text-4xl font-bold text-center mb-2' >Rs. 1250/=</p>
               <div className='text-center font-medium mt-3'>
                     <p className='py-2'>Delicious</p>
                     <p className='py-2'>Tasty</p>
                     <p className='py-2'>For You</p>
               </div>
               <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-white' >Order Now</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
               <img className='w-56 mx-auto mt-[-3rem]' src={burger} alt="burger" />
               <h2 className='text-2xl font-bold text-center mb-2' >Burger</h2>
               <p className='text-4xl font-bold text-center mb-2' >Rs. 1250/=</p>
               <div className='text-center font-medium mt-3'>
                     <p className='py-2'>Delicious</p>
                     <p className='py-2'>Tasty</p>
                     <p className='py-2'>For You</p>
               </div>
               <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-white' >Order Now</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
               <img className='w-56 mx-auto mt-[-3rem]' src={burger} alt="burger" />
               <h2 className='text-2xl font-bold text-center mb-2' >Burger</h2>
               <p className='text-4xl font-bold text-center mb-2' >Rs. 1250/=</p>
               <div className='text-center font-medium mt-3'>
                     <p className='py-2'>Delicious</p>
                     <p className='py-2'>Tasty</p>
                     <p className='py-2'>For You</p>
               </div>
               <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-white' >Order Now</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
               <img className='w-56 mx-auto mt-[-3rem]' src={burger} alt="burger" />
               <h2 className='text-2xl font-bold text-center mb-2' >Burger</h2>
               <p className='text-4xl font-bold text-center mb-2' >Rs. 1250/=</p>
               <div className='text-center font-medium mt-3'>
                     <p className='py-2'>Delicious</p>
                     <p className='py-2'>Tasty</p>
                     <p className='py-2'>For You</p>
               </div>
               <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-white' >Order Now</button>
           </div>
           
          </div>
          
        </div>
    </div>
  )
}

export default Menu