import { useReducer, useState } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from '../ActionTypes'

const CartState = ({children}) => {
    const initialState = {
        showCart: false,
        cartItems: [],
    }

    const [subTotal, setSubTotal] = useState(0)

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = item => {
        dispatch({
            type: ADD_TO_CART,
            payload: item,
        })
    }

    const showHideCart = () => {
        dispatch({
            type: SHOW_HIDE_CART,
        })
    }

    const deleteFromCart = id => {
        dispatch({
            type: DELETE_FROM_CART,
            payload: id
        })
    }

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART,
        })
    }

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            totalAmount: state.totalAmount,
            subTotal,
            setSubTotal,
            addToCart,
            showHideCart,
            deleteFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState