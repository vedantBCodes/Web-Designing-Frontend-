import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' className={({isActive})=>isActive ? "activeLink": "" }>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive})=>isActive ? "activeLink": "" }>About</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive})=>isActive ? "activeLink": "" }>Dashboard</NavLink>
         </li>
       
      </ul>
    </div>
  )
}

export default Navbar
