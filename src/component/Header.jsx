import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <>        
         <h3>3.Routing Implementation ?</h3>
           <div>
             <NavLink to ="/Home">     Home   </NavLink>
             <NavLink to="/Student">  Students  </NavLink>  
             <NavLink to="/Contact">  Contact   </NavLink>
           </div>
           </>
       )
   }
export default Header;