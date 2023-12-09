import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='nav'>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/posts'>Posts</NavLink>  
      <NavLink to='/createPost'>Create post</NavLink>
    </nav>
  )
}

export default Navbar