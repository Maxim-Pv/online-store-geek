import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/create-post'>Create post</NavLink>    
      <NavLink to='/inputUserData'>InputUserData</NavLink>
      <NavLink to='/outputUserData'>OutputUserData</NavLink>  
    </nav>
  )
}

export default Navbar