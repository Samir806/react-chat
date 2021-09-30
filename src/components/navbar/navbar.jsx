import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = ()=>{
    return(
        <nav className="nav"> 
        <ul>
          <li>
            <NavLink to='/profile' activeClassName='nav-active'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dialog' activeClassName='nav-active'>Messages</NavLink>
          </li>
          <li>
            <NavLink to='/users' activeClassName='nav-active'>Users</NavLink>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          </ul>
      </nav>
    )
}

export default Navbar