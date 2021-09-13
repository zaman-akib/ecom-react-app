import {ADD_TO_CART, SHOW_HIDE_CART, DELETE_FROM_CART, CLEAR_CART} from '../ActionTypes'

const CartReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HIDE_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default: 
            return state
    }
}

export default CartReducer