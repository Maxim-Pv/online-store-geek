import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/productsSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(productsActions.increaseQuantity(id));
  }

  const handleDecrease = (id) => {
    dispatch(productsActions.decreaseQuantity(id));
  }

  const handleDeleteItem = (id) => {
    dispatch(productsActions.removeFromCart(id))
  }

  return (
    <div className='container'>
      {cartItems.length === 0
        ? <h2>Cart is empty</h2>
        : <ul className='list'>             
          {cartItems.map((item) => (
                <li key={item._id} style={{backgroundColor: item.color}} className='item'>  
                  <div>
                    <h4>{item.name} {item.price}</h4> 
                    <img src={item.picture} alt="picture" />
                  </div>                          
                  <p>{item.description}</p>
                  <div className='quantityControls'>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <strong className="count">{item.quantity}</strong>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <div className='priceAndbtn'>
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