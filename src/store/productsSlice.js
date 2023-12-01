import { createSlice } from "@reduxjs/toolkit";
import productsData from '../products.json'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: productsData,
        cart: [],        
    },
    reducers: {
        addToCart: (state,action) => {
            const isItemInCart = state.cart.find(item => item._id === action.payload._id);
            if (!isItemInCart) {
                state.cart.push({...action.payload, quantity: 1})
            }                
        },
        increaseQuantity: (state,action) => {
            const itemToIncrease = state.cart.find(item => item._id === action.payload._id);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseQuantity: (state,action) => {
            const itemToIncrease = state.cart.find(item => item._id === action.payload._id);
            if (itemToIncrease) {
                if (itemToIncrease.quantity > 1) {
                    itemToIncrease.quantity -= 1;
                } else {
                    return 
                }               
            }
        },
        removeFromCart: (state,action) => {
            if(action.payload.quantity === 1) {
                state.cart = state.cart.filter(item => item._id !== action.payload._id)
            } 
        },
   
    }
})

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;