import React from 'react'
import burger from '../Assests/burger.png'
import food1 from '../Assests/food1.png'
import g1 from '../Assests/g1.jpg'
import g2 from '../Assests/g2.jpg'
import g3 from '../Assests/g3.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className='w-full px-4 bg-white' >

        <div className='w-3/4 pt-[5rem] mx-auto mb-3'>
          <img src={g1} alt="g1" />
        </div>

        <div>
          <h1 className='p-5 text-center text-2xl font-bold '  >Kitchen</h1>
        </div>

        <div className='max-w-[1240] mx-auto grid md:grid-cols-4 gap-8     '>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300  ' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >

            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />

          </div>
          {/* <button className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium  mx-auto md:mx-[650px] py-3 mb-4 hover:scale-105 duration-300' >See More</button> */}

        </div>


        <div>
          <h1 className='p-5 text-center text-2xl font-bold '  >Interior</h1>
        </div>

        <div className='max-w-[1240] mx-auto grid md:grid-cols-4 gap-8     '>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300  ' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >

            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />

          </div>
          {/* <button className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium  mx-auto md:mx-[650px] py-3 mb-4 hover:scale-105 duration-300' >See More</button> */}






        </div>



        <div>
          <h1 className='p-5 text-center text-2xl font-bold '  >Exterior</h1>
        </div>

        <div className='max-w-[1240] mx-auto grid md:grid-cols-4 gap-8     '>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300  ' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >
            <img className='w-200 mx-auto mt-[-2rem]' src={g2} alt="burger" />


          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300' >

            <img className='w-200 mx-auto mt-[-2rem]' src={g3} alt="burger" />

          </div>
          {/* <button className= 'text-white  bg-[#f09c20] w-[200px] rounded-md font-medium  mx-auto md:mx-[650px] py-3 mb-4 hover:scale-105 duration-300' >See More</button> */}





        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Gallery