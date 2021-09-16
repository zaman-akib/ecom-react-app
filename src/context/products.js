import { useState, useEffect } from 'react'

function GetProducts() {
    const [data, setData] = useState([])

    useEffect(()=>{
        if(!localStorage.getItem('products')){
            const fetchData = async() => {
                try {
                    const result = await fetch('https://fakestoreapi.com/products')
                    const body = await result.json()
                    localStorage.setItem('products', JSON.stringify(body))
                    setData(body)
                    } catch(err) {
                        // error handling code
                    } 
            }
            fetchData()
        }
            
        else if(localStorage.getItem('products')){
            setData(JSON.parse(localStorage.getItem('products')))
        }
    },[])

    return data
}

export default GetProducts