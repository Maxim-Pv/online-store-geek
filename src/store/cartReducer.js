
const initialState = {
    items: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
            const newItem = {
                ...action.payload,
                cartItemId: Date.now(),
            };
            return {
                ...state,
                items: [...state.items, newItem],
            }
    
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.cartItemId !== action.payload.cartItemId)
            };
        default:
            return state;
    }
}

export const addToCart = (payload) => ({
    type: 'ADD_TO_CART', payload
})

export const removeFromCart = (payload) => ({
    type: 'REMOVE_FROM_CART', payload
})
    


