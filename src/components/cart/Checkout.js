import React from 'react'
import {Link} from 'react-router-dom'

function Checkout() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-orange-600 text-6xl m-10">Your order has been placed</div>
            <div className="text-indigo-600 text-2xl font-medium hover:text-indigo-500">
                <Link to='/'>
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
