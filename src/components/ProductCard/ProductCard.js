import React, { useContext } from 'react';
import GetProducts from '../../context/products'
import CartContext from '../../context/cart/CartContext'

function ProductCard() {
    const { cartItems, addToCart } = useContext(CartContext)
    const products = GetProducts()

    function handleAdd(product) {
        if(!cartItems.includes(product)) {
            product.quantity = 1
            addToCart(product)
        }
        else {
            alert('Already added in cart')
        }
    }

    return (
        <React.Fragment>
            <div className="flex flex-row flex-wrap mb-10 justify-center">
                {
                    products && products.length ? (
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
                                    <button className="text-center bg-orange-300 w-full hover:bg-orange-400 rounded-lg mb-1 mx-8 p-2 font-semibold" 
                                    onClick={() => handleAdd(product)}> 
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-2xl text-center p-20">Loading...</div>
                    )
                }      
            </div>
        </React.Fragment>
    )
}
export default ProductCard