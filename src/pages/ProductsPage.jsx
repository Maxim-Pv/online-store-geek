import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartReducer';
import './StyleForPages.css'

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const handleAddToCart = (id) => {
        dispatch(addToCart(id));
    }

    return (
        <div className='container'>
            <ul className='list'>
                {products.map((item) => (
                        <li key={item._id} style={{backgroundColor: item.color}} className='item'>  
                            <div>
                                <h4>{item.name}</h4>                            
                                <img src={item.picture} alt="picture" />  
                            </div>                          
                            <p>{item.description}</p>
                            <div className='priceAndbtn'>
                                <span>{item.price}</span>
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