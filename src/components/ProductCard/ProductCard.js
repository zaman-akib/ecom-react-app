import React, { useContext } from 'react';
import GetProducts from '../../context/products'
import CartContext from '../../context/cart/CartContext'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi'

function ProductCard() {
    const products = GetProducts()
    const { cartItems, addToCart , updateQuantity, deleteFromCart} = useContext(CartContext)

    function handleAdd(product) {
        if(!cartItems.includes(product)) {
            product.quantity = 1
            addToCart(product)
        }
        else {
            alert('Already added in cart')
        }
    }

    function isExistInCart(id) {
        for(let i=0; i<cartItems.length; i++) {
            if(cartItems[i].id === id) 
                return true
        }

        return false
    }

    return (
        <React.Fragment>
            <div className="flex flex-row flex-wrap mb-10 justify-center">
                {
                    products.map(product => (
                        <div key={product.id} className="mb-20 mt-5">
                            <div className="flex flex-col border-2 border-b-0 bg-teal-500 border-red-400 rounded-t-lg w-64 h-full m-5 mb-0 mx-8 overflow-hidden">
                                <img className="self-center w-56 h-56 mb-1 mt-3 rounded-lg transform hover:scale-105" src={product.image} alt="" />
                                <div className="flex flex-col text-center p-3 pb-0 transform">
                                    <div className="font-medium mb-1">{product.title}</div>
                                    <div className="px-2 mx-auto">Price: $ {product.price}</div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center border-2 border-t-0 border-red-400 bg-teal-500 p-2 w-64 mt-0 mx-8 rounded-b-lg">
                                <div className="text-center bg-orange-300 w-full hover:bg-orange-400 rounded-lg mb-1 mx-8 p-2 font-semibold">
                                    {!isExistInCart(product.id) ? (
                                        <button onClick={() => handleAdd(product)}>
                                            Add to Cart
                                        </button>
                                    ) : (
                                        <div className="flex items-center justify-center text-sm">
                                            <div className="flex items-center">
                                                <FiMinusSquare className="cursor-pointer" size={25} />
                                                {1 === 0 ? <div></div> : (
                                                    <div className="px-5 text-lg font-bold">{1}</div>
                                                )}
                                                <FiPlusSquare size={25} className="cursor-pointer" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                }      
            </div>
        </React.Fragment>
    )
}

export default ProductCard
