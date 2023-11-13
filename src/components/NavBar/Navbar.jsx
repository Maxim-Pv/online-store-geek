import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Main</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/create-post'>Create post</Link>
    </nav>
  )
}

export default Navbar