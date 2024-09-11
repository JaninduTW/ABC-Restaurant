import React from 'react'
import Hero from "../Homepage Components/Hero";
import Services from "../Homepage Components/Services";
import Questions from "../Homepage Components/Questions";
import Offers from "../Homepage Components/Offers";
import Menu from "../Homepage Components/Menu";
import About from "../Homepage Components/About";
import Navbar from "../Homepage Components/Navbar";
import Footer from "../Homepage Components/Footer";

const Home = () => {
  return (
    <div className='bg-black ' >  
        <Navbar/>
         <Hero/>
      <Offers/>
      <Services/>
      <Menu/>
      <Questions/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home