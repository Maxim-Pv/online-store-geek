import Navbar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className='footer'>
        frontend course 2023
      </footer>
    </>
  )
}

export default Layout