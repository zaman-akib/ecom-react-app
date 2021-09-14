import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-blue-800 text-6xl m-10">404 Not Found</div>
            <div className="text-green-600 text-2xl underline">
                <Link to='/'>Retrun to Home</Link>
            </div>
        </div>
    )
}

export default NotFound
