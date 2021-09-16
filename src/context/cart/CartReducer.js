import {ACTIONS} from '../ActionTypes'

const CartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_HIDE_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        case ACTIONS.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case ACTIONS.UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.id ? Object.assign({}, item, { quantity: item.quantity + action.payload.value }) : item
                )
            }
        case ACTIONS.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case ACTIONS.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default: 
            return state
    }
}

export default CartReducer