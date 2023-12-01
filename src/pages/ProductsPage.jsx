import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../store/productsSlice';
import './StyleForPages.css'

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(productsActions.addToCart(id))
    };

    return (
        <div className='container'>
            <ul className='list'>
                {products.map((item) => (
                        <li key={item._id} style={{backgroundColor: item.color}} className='item'>  
                            <div>
                                <h4>{item.name}  {item.price}</h4>                            
                                <img src={item.picture} alt="picture" />  
                            </div>                          
                            <p>{item.description}</p>
                            <div className='priceAndbtn'>
                                <button className='btn' onClick={() => handleAddToCart(item)}>Buy</button> 
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductsPage