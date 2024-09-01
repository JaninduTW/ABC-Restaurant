import React from 'react'
import Hero from "../Components/Hero";
import Analytics from "../Components/Analytics";
import Newsletter from "../Components/Newsletter";
import Cards from "../Components/Cards";
import Menu from "../Components/Menu";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
        <Navbar/>
         <Hero/>
      <Cards/>
      <Analytics/>
      <Menu/>
      <Newsletter/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home