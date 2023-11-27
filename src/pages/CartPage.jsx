import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartReducer";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <div className='container'>
      {cartItems.length === 0
        ? <h2>Cart is empty</h2>
        : <ul className='list'>             
            {cartItems.map((item) => (
                  <li key={item.cartItemId} style={{backgroundColor: item.color}} className='item'>  
                    <div>
                      <h4>{item.name}</h4> 
                      <img src={item.picture} alt="picture" />
                    </div>                          
                    <p>{item.description}</p>
                    <div className='priceAndbtn'>
                      <span>{item.price}</span>   
                      <button className='btn' onClick={() => handleDeleteItem(item)}>Delete</button>
                    </div>
                  </li>
                ))
              }
          </ul>
        }  
      </div>
  )
}

export default CartPage