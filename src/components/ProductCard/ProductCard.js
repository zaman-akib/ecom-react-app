import React from 'react';
import GetProducts from '../../context/products'

function ProductCard() {
    const products = GetProducts()

    return (
        <React.Fragment>
            <div className="flex flex-row flex-wrap mb-10 justify-center">
                {
                    products.map(product => (
                        <div key={product.id} className="mb-20 mt-5">
                            <div className="flex flex-col border-2 border-b-0 bg-teal-500 border-red-400 rounded-t-lg w-64 h-full m-5 mb-0 mx-8 overflow-hidden">
                                <img className="self-center w-56 h-56 mb-1 mt-3 rounded-lg transform hover:scale-105" src={product.image} alt="" />
                                <div className="flex flex-col text-center p-3 pb-0 transform hover:scale-105">
                                    <div className="font-medium mb-1">{product.title}</div>
                                    <div className="px-2 mx-auto">Price: $ {product.price}</div>
                                </div>
                            </div>
                            <div className="cursor-pointer border-2 border-t-0 border-red-400 bg-teal-500 p-2 w-64 mt-0 mx-8 rounded-b-lg">
                                <div className="text-center bg-green-400 rounded-lg mb-1 mx-8 p-2 font-semibold">
                                    Add to Cart
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
