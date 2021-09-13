import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import {BiSearchAlt2} from 'react-icons/bi'


function NavBar() {

    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500">
            <div class="flex items-center flex-shrink-0 text-white px-4 mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">e-Com App</span>
            </div>
            <div class="w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto">
                <div className="flex flex-row p-4">
                    <input type="text" placeholder="Search products..." className="flex px-2 h-8 lg:w-auto border-2 border-gray-400 rounded-xl"></input>
                    <div className="p-1 px-2">
                        <BiSearchAlt2 size={25}/>
                    </div>
                </div>
                <div className="pb-2 px-4 mr-2 cursor-pointer">
                    <HiOutlineShoppingCart size={30}/>
                </div>
            </div>
      </nav>
    )
}

export default NavBar