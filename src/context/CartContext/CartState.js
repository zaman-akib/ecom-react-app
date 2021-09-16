import { useReducer } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { ACTIONS } from '../ActionTypes'

const CartState = ({children}) => {
    const initialState = {
        showCart: false,
        cartItems: [],
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = item => {
        dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: item,
        })
    }

    const showHideCart = () => {
        dispatch({
            type: ACTIONS.SHOW_HIDE_CART,
        })
    }

    const deleteFromCart = id => {
        dispatch({
            type: ACTIONS.DELETE_FROM_CART,
            payload: id
        })
    }

    const updateQuantity = (id, value) => {
        dispatch({
            type: ACTIONS.UPDATE_QUANTITY,
            payload: {id, value}
        })
    }

    const clearCart = () => {
        dispatch({
            type: ACTIONS.CLEAR_CART,
        })
    }

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            totalAmount: state.totalAmount,
            addToCart,
            showHideCart,
            deleteFromCart,
            clearCart,
            updateQuantity,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState