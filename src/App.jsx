import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Layout from './components/Layout/Layout'
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
    </> 
  )
}

export default App
