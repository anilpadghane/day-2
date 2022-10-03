import React, { Fragment } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
   
   
        
           <h3>3.Routing Implementation ?</h3>
           <div className="main">
             <NavLink to ="/Home">Home</NavLink>
             <NavLink to="/Student">Students</NavLink>  
             <NavLink to="/Contact">Contact</NavLink>
           </div>
           </>
       )
   }
export default Header;