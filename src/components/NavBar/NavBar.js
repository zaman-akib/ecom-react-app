import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiSearchAlt2 } from 'react-icons/bi'
import CartContext from '../../context/cart/CartContext'


function NavBar() {
    const { cartItems, showHideCart } = useContext(CartContext)

    return (
        <nav className="flex items-center sticky top-0 z-50 justify-between flex-wrap bg-teal-500">
            <div className="flex items-center flex-shrink-0 text-white px-4 mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span className="font-semibold text-xl tracking-tight">e-Com App</span>
            </div>
            <div className="w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto">
                <div className="flex flex-row p-4">
                    <input type="text" placeholder="Search products..." className="flex px-2 h-8 lg:w-auto border-2 border-gray-400 rounded-xl"></input>
                    <div className="p-1 px-2">
                        <BiSearchAlt2 size={25}/>
                    </div>
                </div>
                <div className="flex flex-row pb-2 pb px-4 mr-2 cursor-pointer"
                onClick={showHideCart}>
                    <HiOutlineShoppingCart size={30}/>
                    {
                        cartItems.length > 0 && <div className="">
                            <span className="bg-red-400 rounded-full flex h-5 w-5 font-bold text-sm justify-center">{cartItems.length}</span>
                        </div>
                    }
                </div>
            </div>
      </nav>
    )
}

export default NavBar