import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineCompress } from 'react-icons/ai'
import Cart from '../Cart/Cart'


function NavBar() {

    const viewCart = () => {
        return <Cart />
    }

    return (
        <React.Fragment>
            <div className="flex justify-between bg-green-300 h-16 w-full">
                <div className="flex flex-row justify-around px-5">
                    <div className="p-5 px-2 ">
                        <AiOutlineCompress size={25}/>
                    </div>
                    <div className="text-2xl font-bold p-4 px-0">e-Com App</div>
                </div>
                <div className="p-3 px-8 cursor-pointer" onClick={() => viewCart()}>
                    <HiOutlineShoppingCart size={35}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar
