import React from 'react'
import offer1 from '../Assests/offer1.png'
import Offer2 from '../Assests/Offer2.png'
import Offer3 from '../Assests/Offer3.png'


const Offers = () => {
    return (
        <div className=' w-full py-[3rem] px-4 bg-white' >
              <div className='text-center' ><p className='text-[#000000] font-bold py-3  text-3xl pb-2 bg-white ' >OFFERS</p></div>
            <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8 pt-12 ' >
                <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300 '  >
                    <img className='w-300 mx-auto mt-[-3rem] bg-white' src={offer1} alt="User" />
                   
                    
                   
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-6  rounded-lg hover:scale-105 duration-300 '  >
                    <img className='w-300 mx-auto mt-[-3rem] bg-white' src={Offer2} alt="User" />
                    
                    
                  
                </div>
                <div className='w-full shadow-xl flex flex-col p-4  my-6 rounded-lg hover:scale-105 duration-300 '  >
                    <img className='w-300 mx-auto mt-[-3rem] bg-white' src={Offer3} alt="User" /> 
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Offers