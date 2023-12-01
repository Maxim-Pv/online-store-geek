import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <nav className='nav'>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/products'>Products</NavLink>  
      <div className="cart-icon">
        <NavLink to='/cart'>Cart [{cartItems.length}]</NavLink>
      </div>
    </nav>
  )
}

export default Navbar