import React from 'react'
import { NavLink } from 'react-router-dom'


 function Navbar () {
  return (
    <div >
    <nav className='navbar'>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SnywNWfT9YPKvjZ1XY9Sa01iZHNdOQIf_Q&usqp=CAU' alt='LOgo' height="50" width ="118" className='imagelogo'/>
     </div>
       <ul>
           <li><NavLink exact to="/">Home</NavLink></li>
           <li> <NavLink to="/About">About</NavLink></li>
           <li> <NavLink to="/Service">Service</NavLink></li>
           <li><NavLink to="/Contact">Contact</NavLink></li>
         
          

           
       </ul>

      

     </nav>
     
     
   </div>
  )
}

export default Navbar
