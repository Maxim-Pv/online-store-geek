import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/productsSlice';
import './StyleForPages.css'

const ProductsPage = () => {
    const isLoading = useSelector((state) => state.products.isLoading);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await dispatch(fetchProducts());
          setProducts(result.payload.products)
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();

    }, [])

    const handleAddToCart = (id) => {
        dispatch(cartActions.addToCart(id))
    };


    return (
        <div className='container'>
          {isLoading 
            ? <h2>Loading...</h2>
            : <ul className='list'>
              {products.map((item) => (
                      <li key={item.id} className='item'>  
                          <div>
                              <h4 className='title'>
                                {item.title}    
                                <span>{item.price}$</span> 
                              </h4>                            
                              <img className='img' src={item.thumbnail} alt="picture" />  
                          </div>                          
                          <p>{item.description}</p>
                          <div className='btnContainer'>
                              <button className='btn' onClick={() => handleAddToCart(item)}>Buy</button> 
                          </div>
                      </li>
                  ))
              }
              </ul>
          }
        </div>
    )
}

export default ProductsPage