
import CartItem from "../../components/cart-item/cart-item.component"
import { clearItemFromCart } from "./cart.action"
import CartActionType from "./cart.types"
import {addItemToCart, removeItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer =(state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state, 
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(CartItem => CartItem.id !== action.payload.id )
            }
        case CartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;