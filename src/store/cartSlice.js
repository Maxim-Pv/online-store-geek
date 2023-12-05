import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],      
    },
    reducers: {
        addToCart: (state,action) => {
            const isItemInCart = state.products.find(item => item.id === action.payload.id);
            if (!isItemInCart) {
                state.products.push({...action.payload, quantity: 1})
            }                
        },
        increaseQuantity: (state,action) => {
            const itemToIncrease = state.products.find(item => item.id === action.payload.id);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseQuantity: (state,action) => {
            const itemToIncrease = state.products.find(item => item.id === action.payload.id);
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
                state.products = state.products.filter(item => item.id !== action.payload.id)
            } 
        },
   
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;