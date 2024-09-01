import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Reservation from "./Pages/Reservation";
import Order from "./Pages/Order";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div >
       <Router>
      
        <Routes>
        <Route exact path='/' element={ <Home/>}     />      
        <Route exact path='/loginform' element={ <LoginForm/>}     />      
        <Route exact path='/registraion' element={ <Registration/>}     />      
        <Route exact path='/menu' element={ <Menu/>}     />      
        <Route exact path='/reservation' element={ <Reservation/>}     />      
        <Route exact path='/order' element={ <Order/>}     />      
        <Route exact path='/contact' element={ <Contact/>}     />      
        <Route exact path='/about' element={ <About/>}     />      
        <Route exact path='/gallery' element={ <Gallery/>}   />      
      </Routes>
    
      </Router>
     
    </div>
  );
}

export default App;
