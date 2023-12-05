import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  }

  const handleDecrease = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  }

  const handleDeleteItem = (id) => {
    dispatch(cartActions.removeFromCart(id))
  }

  return (
    <div className='container'>
      {cartItems.length === 0
        ? <h2>Cart is empty</h2>
        : <ul className='list'>             
          {cartItems.map((item) => (
                <li key={item.id} className='item'>  
                  <div>
                    <h4>{item.title} {item.price}</h4> 
                    <img className='img' src={item.thumbnail} alt="picture" />
                  </div>                          
                  <p>{item.description}</p>
                  <div className='quantityControls'>
                    <button className="btnCount" onClick={() => handleDecrease(item)}>-</button>
                    <strong className="count">{item.quantity}</strong>
                    <button className="btnCount" onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <div className='btnContainer'>
                    <button className='btn btn-delete' onClick={() => handleDeleteItem(item)}>Delete</button>
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