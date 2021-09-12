import { useState, useEffect } from 'react'

function GetProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    return products
}

export default GetProducts