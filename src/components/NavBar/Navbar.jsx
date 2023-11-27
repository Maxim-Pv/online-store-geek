import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className='nav'>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/products'>Products</NavLink>  
      <div className="cart-icon">
        <NavLink to='/cart'>Cart ({cartItems.length})</NavLink>
      </div>
    </nav>
  )
}

export default Navbar