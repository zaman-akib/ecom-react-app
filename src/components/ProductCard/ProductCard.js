import React from 'react';
import GetProducts from '../../context/products'

function ProductCard() {
    const products = GetProducts()

    return (
        <React.Fragment>
            {
                products.map(product => (
                    <div key={product.id}>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col border-2 bg-gray-200 border-red-300 rounded-lg w-80 m-3 overflow-hidden">
                                <img className="self-center w-72 h-72 mb-3 mt-3 rounded-lg transform hover:scale-105" src={product.image} alt="" />
                                <div className="flex flex-col text-center p-3 transform hover:scale-105">
                                    <div className="text-green-800 font-medium">{product.title}</div>
                                    <div className="text-green-800">Price: $ {product.price}</div>
                                </div>
                                <div className="flex flex-col self-center cursor-pointer p-2 px-8 bg-red-200 rounded-lg m-3">Add to Cart</div>
                            </div>
                        </div> 
                    </div>      
                ))
            }
        </React.Fragment>
    )
}

export default ProductCard
