import { useState, useEffect } from 'react'

function GetProducts() {
    const [data, setData] = useState([])

    useEffect(() => {
    const fetchData = async () => {
        try {
        const result = await fetch('https://fakestoreapi.com/products')
        const body = await result.json()
        setData(body)
        } catch(err) {
            // error handling code
        } 
    }

    fetchData()
    localStorage.setItem('products', JSON.stringify(data))
    }, [data])
}

export default GetProducts