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
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminManageUsers from "./Admin/AdminManageUsers";
import AdminAddUsers from "./Admin/AdminAddUsers";
import AdminEditUsers from "./Admin/AdminEditUsers";
import AdminManageMenu from "./Admin/AdminManageMenu";
import AdminAddMenu from "./Admin/AdminAddMenu";
import AdminEditMenu from "./Admin/AdminEditMenu";
import AdminManageCategory from "./Admin/AdminManageCategory";
import AdminManageTables from "./Admin/AdminManageTables";
import AdminManageReservation from "./Admin/AdminManageReservation";





function App() {
  return (
    <div >
       <Router>
      
        <Routes>
        <Route exact path='/' element={ <Home/>}     />      
        <Route exact path='/loginform' element={ <LoginForm/>}     />      
        <Route exact path='/registration' element={ <Registration/>}     />      
        <Route exact path='/menu' element={ <Menu/>}     />      
        <Route exact path='/reservation' element={ <Reservation/>}     />      
        <Route exact path='/order' element={ <Order/>}     />      
        <Route exact path='/contact' element={ <Contact/>}     />      
        <Route exact path='/about' element={ <About/>}     />      
        <Route exact path='/gallery' element={ <Gallery/>}   />   
        <Route exact path='/adminlogin' element={ <AdminLogin/>}   />    
        <Route exact path='/admindashboard' element={ <AdminDashboard/>}   />    
        <Route exact path='/adminmanageusers' element={ <AdminManageUsers/>}   />    
        <Route exact path='/adminaddusers' element={ <AdminAddUsers/>}   />    
        <Route exact path='/admineditusers/:id' element={ <AdminEditUsers/>}   />    
        <Route exact path='/adminmanagemenu' element={ <AdminManageMenu/>}   />    
        <Route exact path='/adminaddmenu' element={ <AdminAddMenu/>}   />    
        <Route exact path='/admineditmenu/:id' element={ <AdminEditMenu/>}   />    
        <Route exact path='/Adminmanagecategory' element={ <AdminManageCategory/>}   />    
        <Route exact path='/Adminmanagetables' element={ <AdminManageTables/>}   />    
        <Route exact path='/Adminmanagereservation' element={ <AdminManageReservation/>}   />    
         
         
      </Routes>
    
      </Router>
     
    </div>
  );
}

export default App;
