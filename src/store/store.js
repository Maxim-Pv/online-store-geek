import { combineReducers, legacy_createStore as createStore } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer);
