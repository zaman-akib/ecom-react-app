import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'

function Checkout() {
    const {cartItems, showHideCart, clearCart} = useContext(CartContext)
    let total = 0

    function handleContinue() {
        clearCart()
        showHideCart()
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-green-600 text-2xl underline m-6">
                Ordered Items
            </div>
            {
                cartItems.map(item => (
                    <div className="mt-5 flex w-2/5 p-2 border-2">
                        <div className="hidden">{total += item.quantity * item.price}</div>
                        <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            <li key={item.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>

                                <div className=" ml-5 flex-1 flex flex-col font-medium">
                                    <p>{item.title}</p>
                                    <p>Unit Price: ${(item.price).toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${(item.quantity * item.price).toFixed(2)}</p>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                ))
            }

            <div className="flex mt-5 flex-row text-xl font-medium text-gray-900">
                <p className="px-5">Total: </p>
                <p>${total.toFixed(2)}</p>
            </div>
            <div className="text-orange-600 text-4xl m-6">Your order has been placed</div>
            <div className="text-indigo-600 text-2xl mb-10 font-medium hover:text-indigo-500" onClick={handleContinue}>
                <Link to='/'>
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
