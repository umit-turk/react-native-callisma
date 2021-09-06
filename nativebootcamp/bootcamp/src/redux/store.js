import { createStore } from "redux";
import cartItemReducer from './CartItems'

const store = createStore(cartItemReducer);

export default store;