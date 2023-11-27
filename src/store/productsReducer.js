import productsData from '../products.json'

const initialState = {
    products: productsData,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
} 

export const loadProducts = (payload) => ({
    type: 'LOAD_PRODUCTS', payload
});